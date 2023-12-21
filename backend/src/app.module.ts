import { Module } from '@nestjs/common'
import { CreateModule } from './controllers/create/create.module'
import { ListModule } from './controllers/list/list.module'

@Module({
  imports: [CreateModule, ListModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
