import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getNexusPenguim(): string {
    return this.appService.getNexusPenguim();
  }
}
