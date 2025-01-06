import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';


export class registerDto {
    @IsEmail({}, { message: 'Email must be a valid email address' })
    email: string;

    @IsNotEmpty({ message: 'Password should not be empty' })
    @MinLength(6, { message: 'Password must be at least 6 characters long' })
    password: string;

    @IsNotEmpty({ message: 'Full name should not be empty' })
    fullName: string;
}