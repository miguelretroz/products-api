import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from './book.model';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book) private bookModel: typeof Book) {}

  async create(bookData: { code; name; price }): Promise<Book> {
    return this.bookModel.create(bookData);
  }

  async getAll(): Promise<Book[]> {
    return this.bookModel.findAll();
  }

  async getOne(id: number): Promise<Book> {
    return this.bookModel.findOne({ where: { id } });
  }

  async edit(
    id: number,
    bookData: { code?: string; name?: string; price?: number },
  ): Promise<Book | null> {
    const { code, name, price } = bookData;

    const book = await this.bookModel.findOne({ where: { id } });

    if (book) {
      code && book.set('code', code);
      name && book.set('name', name);
      price && book.set('price', price);

      book.save();
    }

    return book;
  }

  async remove(id: number) {
    const book = await this.getOne(id);
    book.destroy();
  }
}
