import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { User } from "./users.entity";

export class CreateUsersDto implements User {
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string;
  
    @IsString()
    @IsNotEmpty()
    password: string;
  
    @IsString()
    name: string;
}
