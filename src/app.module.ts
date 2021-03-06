import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyLibraryModule } from '@app/my-library';
import { TestController } from './test/test.controller';
import { BooksModule } from './books/books.module';

@Module({
  imports: [ MyLibraryModule, BooksModule],
  controllers: [AppController, TestController],
  providers: [AppService],
})
export class AppModule {}
