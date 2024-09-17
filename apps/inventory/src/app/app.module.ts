import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAKFA_INVENTORY',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'inventory-client',
            brokers: ['localhost:1']
          },
          consumer: {
            groupId: 'inventory-consumer-group',
          }
        }
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
