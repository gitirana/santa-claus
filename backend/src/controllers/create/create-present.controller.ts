import {
  Body,
  ConflictException,
  Controller,
  HttpCode,
  Post,
  UsePipes,
} from '@nestjs/common'
import { ZodValidationPipe } from 'src/pipes/zod-validation.pipe'
import { PrismaService } from 'src/prisma/prisma.service'
import { z } from 'zod'

const createPresentBodySchema = z.object({
  ebook: z.string().min(1, 'You must insert an ebook title'),
})

type CreatePresentBodySchema = z.infer<typeof createPresentBodySchema>

@Controller('/present')
export class CreatePresentController {
  constructor(private prisma: PrismaService) {}
  @Post()
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(createPresentBodySchema))
  async handle(@Body() body: CreatePresentBodySchema) {
    const { ebook } = body

    const presentWithSameEbook = await this.prisma.present.findUnique({
      where: {
        ebook,
      },
    })

    if (presentWithSameEbook) {
      throw new ConflictException({
        statusCode: 406,
        message: 'Ebook is already on the list of available gifts',
      })
    }

    await this.prisma.present.create({
      data: {
        ebook,
      },
    })
  }
}
