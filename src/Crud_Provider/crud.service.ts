import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async getUserById(id: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  }

  async createUser(user: User): Promise<User> {
    return this.prisma.user.create({
      data: user,
    });
  }

  async updateUser(id: string, user: User): Promise<User> {
    return this.prisma.user.update({
      where: {
        id: parseInt(id),
      },
      data: user,
    });
  }

  async deleteUser(id: string): Promise<User> {
    return this.prisma.user.delete({
      where: {
        id: parseInt(id),
      },
    });
  }
}
