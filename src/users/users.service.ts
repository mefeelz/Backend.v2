import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(userData: User): Promise<User> {
    try {
      return await this.prisma.user.create({
        data: userData,
      });
    } catch (e) {
      return e;
    }
  }
}
