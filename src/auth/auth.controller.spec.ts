import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: {
            login: jest.fn().mockResolvedValue({ message: 'Login successful' }), // mock de la respuesta del servicio
          },
        },
      ],
    }).compile();

    authController = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(authController).toBeDefined();
  });

  describe('login', () => {
    it('should return a successful login message', async () => {
      const result = await authController.login({ email: 'test@domain.com', password: 'password123' });
      expect(result).toEqual({ message: 'Login successful' });
      expect(authService.login).toHaveBeenCalledWith({ email: 'test@domain.com', password: 'password123' });
    });

    it('should throw an error when credentials are invalid', async () => {
      jest.spyOn(authService, 'login').mockRejectedValue(new Error('Invalid credentials'));
      await expect(authController.login({ email: 'invalid@domain.com', password: 'wrongpassword' }))
        .rejects
        .toThrowError('Invalid credentials');
    });
  });
});
