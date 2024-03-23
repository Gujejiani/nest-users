import { CreateUserDto } from './dtos/create-user.dto';
import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
    constructor(private userService: UsersService){

    }
    @Post('/signup')
    createUser (@Body() body: CreateUserDto){
       this.userService.create(body.email, body.password, body.name)
    }
}
