import { Test, TestingModule } from '@nestjs/testing';
import { AuthorService } from './author.service';

describe('AuthorService', () => {
  let provider: AuthorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthorService],
    }).compile();

    provider = module.get<AuthorService>(AuthorService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
