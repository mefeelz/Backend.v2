import { Body, Controller, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/entity/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get('/:id')
  findOneById(@Param('id') id: number): Promise<User | null> {
    return this.userService.findOneById(id);
  }

  @Get('/:email')
  findOneByEmail(@Param('email') email: string): Promise<User | null> {
    return this.userService.findOneByEmail(email);
  }

  @Post('register')
  createUser(@Body() data: CreateUserDto): Promise<User | undefined> {
    return this.userService.createUser(data);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  loginUser(@Request() req) {
    return req.user;
  }


  @Post('logout')
  logoutUser() {}
}
