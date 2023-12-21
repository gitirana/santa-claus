import { Controller, HttpCode, Get, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

@Controller('/presents')
export class ListAvailablePresentController {
  constructor(private prisma: PrismaService) {}
  @Get()
  @HttpCode(201)
  async handle() {
    const availableGifts = await this.prisma.present.findMany()

    if (availableGifts.length === 0) {
      throw new NotFoundException({
        statusCode: 404,
        message: 'No gifts available',
      })
    }

    return availableGifts
  }
}
