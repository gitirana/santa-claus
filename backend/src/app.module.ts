import { Module } from '@nestjs/common'
import { CreateModule } from './controllers/create/create.module'

@Module({
  imports: [CreateModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
