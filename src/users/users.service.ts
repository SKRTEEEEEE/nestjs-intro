import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUsersDto } from './users.dto';

@Injectable()
export class UsersService {
    constructor(private prismaService:PrismaService){}

    async readUsers(){
        return await this.prismaService.user.findMany();
    }

    async createUser(create: CreateUsersDto){
        return await this.prismaService.user.create({data:create})
    }
}
