import { Module } from '@nestjs/common';
import { AuthorModule } from './author/author.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import Author from './author/entities/author.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postsdevnest',
      entities: [Author],
      retryDelay: 3000,
      retryAttempts: 10,
    }),
    TypeOrmModule.forFeature([Author]),
    AuthorModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
