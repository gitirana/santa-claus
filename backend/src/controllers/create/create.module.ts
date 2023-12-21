import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreatePresentController } from './create-present.controller'

@Module({
  imports: [],
  controllers: [CreatePresentController],
  providers: [PrismaService],
})
export class CreateModule {}
