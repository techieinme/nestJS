import { Controller } from '@nestjs/common';

@Controller('test')
export class TestController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
