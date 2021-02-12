import { BadRequestException, Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  // constructor(private readonly prisma: PrismaService) {}

  // async createUser(data: Prisma.UserCreateInput): Promise<User> {
  //   try {
  //     return await this.prisma.user.create({
  //       data,
  //     });
  //   } catch (e) {
  //     throw new BadRequestException();
  //   }
  // }
}
