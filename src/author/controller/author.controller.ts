import { Body, Controller, Post } from '@nestjs/common';
import ICreateAuthorDTO from '../dtos/ICreateAuthorDTO';
import Author from '../entities/author.entity';
import { AuthorService } from '../providers/author.service';

@Controller('author')
export class AuthorController {
  constructor(private authorService: AuthorService) {}

  @Post()
  async create(@Body() author: ICreateAuthorDTO): Promise<Author> {
    return this.authorService.execute(author);
  }
}
