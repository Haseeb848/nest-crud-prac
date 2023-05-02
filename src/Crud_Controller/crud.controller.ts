import { Controller, Get, Post, Body, Param, Delete, Put, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from '../Crud_Provider/crud.service';
import { LoggerMiddleware } from '../middlewares/logger.middleware';
import { User } from '@prisma/client';

@Controller('userss')
export class UserController {
  constructor( private userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    console.log(LoggerMiddleware, 'i am middleware')
    return this.userService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    return this.userService.getUserById(id);
  }

  @Post('/add')
  async createUser(@Body() user: User): Promise<User> {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    console.log(LoggerMiddleware, 'i am for post middleware')
    return this.userService.createUser(user);
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() user: User): Promise<User> {
    return this.userService.updateUser(id, user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return this.userService.deleteUser(id);
  }
}

