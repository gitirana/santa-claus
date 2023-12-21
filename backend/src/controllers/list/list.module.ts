import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { ListAvailablePresentController } from './list-available-gifts.controller'

@Module({
  imports: [],
  controllers: [ListAvailablePresentController],
  providers: [PrismaService],
})
export class ListModule {}
