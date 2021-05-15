import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import ICreateAuthorDTO from '../dtos/ICreateAuthorDTO';
import Author from '../entities/author.entity';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author) private authorRepository: Repository<Author>,
  ) {}

  async findById(id: string): Promise<Author | null> {
    const findAuthor = await this.authorRepository.findOne({ where: { id } });

    if (!findAuthor) {
      throw new Error('Author not found');
    }

    return findAuthor || null;
  }

  async findAll(): Promise<Author[]> {
    const authors = await this.authorRepository.find();

    return authors;
  }

  async execute({ name, password, email }: ICreateAuthorDTO): Promise<Author> {
    const findToCreate = await this.authorRepository.findOne({
      where: { email },
    });

    if (findToCreate) {
      throw new Error('This email is already in use');
    }

    const author = this.authorRepository.create({ name, password, email });

    await this.authorRepository.save(author);

    return author;
  }
}
