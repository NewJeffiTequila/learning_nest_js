import { ClientsController } from './clients.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ClientsController],
  providers: [],
})
export class ClientsModule {}
