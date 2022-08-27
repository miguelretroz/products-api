import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Product } from './product.model';

@Controller('product')
export class ProductsController {
  products: Product[] = [
    new Product('LI01', 'Livro TDD e BDD na prática', 29.9),
    new Product('LI02', 'Livro Iniciando com Flutter', 39.9),
    new Product('LI03', 'Inteligência artificial como serviço', 29.9),
  ];

  @Get('list')
  getAll(): Product[] {
    return this.products;
  }

  @Get(':id')
  getOne(@Param('id') id: number): Product {
    const product = this.products[id];
    return product;
  }

  @Post()
  create(@Body() product: Product) {
    console.log({ product });
    this.products.push(product);
  }

  @Put(':id')
  edit(@Body() product, @Param() params): string {
    console.log({ product });
    return product;
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    this.products.splice(id, 1);
  }
}
