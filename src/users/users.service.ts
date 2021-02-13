import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async createUser(data: CreateUserDto): Promise<User | undefined> {
    try {
      const user = this.userRepository.create(data);
      return await this.userRepository.save(user);
    } catch (e) {
      console.log(e);
      throw new BadRequestException();
    }
  }
}
