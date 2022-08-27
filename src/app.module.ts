import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Book } from './book.model';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: 'products',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Book]),
  ],
  controllers: [AppController, BooksController],
  providers: [AppService, BooksService],
})
export class AppModule {}
