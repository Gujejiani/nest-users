import { CreateUserDto } from './dtos/create-user.dto';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class UsersController {

    @Post('/signup')
    createUser (@Body() body: CreateUserDto){
        console.log(body);
            return 'this is going to sign up a user';
        }
    }

