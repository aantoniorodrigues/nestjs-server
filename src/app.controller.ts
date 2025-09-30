import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('string-response')
  getEndpoint1(): string {
    return this.appService.getEndpoint1();
  }

  @Get('json-response')
  getJSONResponse(): any {
    return this.appService.getJSONResponse();
  }

  @Post('post-request')
  postRequest(@Body() body: any): any {
    return this.appService.postRequest(body);
  }
}
