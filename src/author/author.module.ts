import { Module } from '@nestjs/common';
import { AuthorService } from './providers/author.service';
import { AuthorController } from './controller/author.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Author from './entities/author.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Author])],
  providers: [AuthorService],
  controllers: [AuthorController],
})
export class AuthorModule {}
