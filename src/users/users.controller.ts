import { Body, Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './users.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags("/users")
export class UsersController {

    constructor(private readonly usersService: UsersService){}

    @Get("/users")
    getUsers() {
        return this.usersService.readUsers();
    }

    @Post("/users")
    createUser(@Body() create: CreateUsersDto) {
        return this.usersService.createUser(create);
    }

}
