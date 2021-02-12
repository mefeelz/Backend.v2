import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){}

    // @Post('register')
    // createUser(@Body() data: ): Promise<>{
    //     return this.userService.createUser(data);
    // }

    @Post()
    loginUser(){

    }

    @Post()
    logoutUser(){

    }
}
