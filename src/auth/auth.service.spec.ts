import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('login', () => {
    it('should return a success message when credentials are correct', async () => {
      const result = await service.login({ email: 'test@domain.com', password: 'password123' });
      expect(result).toEqual({ message: 'Login successful' });
    });

    it('should throw an error when credentials are incorrect', async () => {
      await expect(service.login({ email: 'invalid@domain.com', password: 'wrongpassword' }))
        .rejects
        .toThrowError('Invalid credentials');
    });
  });
});
