import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { PhoneDto } from './phone.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('form')
  getPhone(): object {
    return {};
  }

  @Post()
  @Render('phone')
  drawPhone(@Body() body: PhoneDto): PhoneDto {
    return body;
  }
}
