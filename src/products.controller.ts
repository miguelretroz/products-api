import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('product')
export class ProductsController {
  @Get('list')
  getAll(): string {
    return 'Lista todos os produtos!';
  }

  @Get(':id')
  getOne(@Param() params): string {
    return `Retorna os dados do produto ${params.id}`;
  }

  @Post()
  create(@Body() product): string {
    console.log({ product });
    return 'Produto criado!';
  }

  @Put(':id')
  edit(@Body() product, @Param() params): string {
    console.log({ product });
    return `Produto ${params.id} atualizado!`;
  }

  @Delete(':id')
  remove(@Param() params): string {
    return `Produto ${params.id} removido!`;
  }
}
