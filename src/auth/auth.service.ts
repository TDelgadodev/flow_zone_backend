import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserRole } from 'src/permissions/enums/role.enum';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
  }

  async comparePasswords(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(plainTextPassword, hashedPassword);
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user && (await this.comparePasswords(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }
    const payload = {
      email: user.email,
      sub: user.id,
      role: user.role,
    };
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        email: user.email,
        fullName: user.fullName,
        role: user.role,
      },
    };
  }
  async register(email: string, password: string, fullName: string) {
    const hashedPassword = await this.hashPassword(password);
    return this.userService.create({
      email,
      password: hashedPassword,
      fullName,
      role: UserRole.GUEST,
    });
  }
}
