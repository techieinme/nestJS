import { Controller,Get,Post,Delete,Param,Body,Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/create-book.dt'
import { get } from 'http';
@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  async getBooks() {
    const books = await this.booksService.getBooks();
    return books;
  }

  @Get(:bookID)
  async getBook( @Param('bookID') bookID){
      const book  = await this.booksService.getBook(bookID)
  }
}
