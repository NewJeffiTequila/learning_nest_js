import { Controller, Get, HttpException, HttpStatus, InternalServerErrorException } from '@nestjs/common';

@Controller('clients')
export class ClientsController {
  @Get()
  async findAll() {
     throw new InternalServerErrorException();

  }
}
