import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { LoginUserDto } from 'src/dto/login-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOneById(id: number): Promise<User | null> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async findOneByEmail(email: String): Promise<User | null> {
    return await this.userRepository.findOne({ where: { email } });
  }

  async createUser(data: CreateUserDto): Promise<User | undefined> {
    try {
      const user = this.userRepository.create(data);
      return await this.userRepository.save(user);
    } catch (e) {
      throw new BadRequestException();
    }
  }

  // async loginUser(data: LoginUserDto): Promise<User | undefined>{
  //   try{
  //     const
  //   } catch(e){
  //     throw new BadRequestException();
  //   }
  // }
}
