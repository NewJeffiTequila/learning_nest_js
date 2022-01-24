import { ClientsModule } from './clients/clients.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ClientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
