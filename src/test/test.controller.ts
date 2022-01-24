/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
//TEST DE FUNCIONALIDADE DE TODOS OS DECORATORS DO CONTROLLER
@Controller('test')
export class TestController {
  @Get()
  request(@Req() request: Request): string {
    return 'This action returns all cats';
  }
  @Get('ab*cd')
  response(): string {
    return `This route uses a wildcard`;
  }
}
