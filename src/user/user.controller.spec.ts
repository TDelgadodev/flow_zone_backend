import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

describe('UserController (e2e)', () => {
  let userController: UserController;
  let userService: UserService;

  const mockUserRepository = {
    find: jest.fn(),
    findOne: jest.fn(),
    save: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    userService = moduleRef.get<UserService>(UserService);
    userController = new UserController(userService);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const mockUsers: User[] = [
        {
          id: '1',
          email: 'john@example.com',
          password: 'hashedpassword',
          workspaces: [],
          createdAt: new Date(),
          updatedAt: new Date(),
          fullName: 'John Doe',
        },
      ];
      jest.spyOn(userService, 'findAll').mockResolvedValue(mockUsers);

      const result = await userController.findAll();
      expect(result).toEqual(mockUsers);
      expect(userService.findAll).toHaveBeenCalled();
    });
  });
});
