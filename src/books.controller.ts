import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Book } from './book.model';
import { BooksService } from './books.service';

@Controller('book')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Post()
  async create(@Body() body: { code; name; price }): Promise<Book> {
    const { code, name, price } = body;

    return this.booksService.create({ code, name, price });
  }

  @Get('list')
  async getAll(): Promise<Book[]> {
    return this.booksService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: number): Promise<Book> {
    return this.booksService.getOne(id);
  }

  @Put(':id')
  async edit(
    @Param('id') id: number,
    @Body() body: { code?: string; name?: string; price?: number },
  ): Promise<Book> {
    const { code, name, price } = body;

    return this.booksService.edit(id, { code, name, price });
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.booksService.remove(id);
  }
}
