import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){}

    @Post('register')
    createUser(@Body() userData: User){
        return this.userService.createUser(userData);
    }

    @Post()
    loginUser(){

    }

    @Post()
    logoutUser(){

    }
}
