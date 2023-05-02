import { Module } from '@nestjs/common';
import { UserController } from 'src/Crud_Controller/crud.controller';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/Crud_Provider/crud.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [PrismaService, UserService],
})
export class CrudModule {}