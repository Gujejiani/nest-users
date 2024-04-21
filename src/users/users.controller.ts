import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { Controller, Post, Body, Get, Patch, Param, Query, Delete, UseInterceptors, ClassSerializerInterceptor} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dtos/update-user.dto';
import { SerializeInterceptor, Serialize } from 'src/interceptors/serialize.interceptor';
import { UserDto } from './dtos/user.dto';


@Serialize(UserDto)
@Controller('auth')
export class UsersController {
    constructor(private userService: UsersService, private authService: AuthService){

    }
    @Post('/signup')
    createUser (@Body() body: CreateUserDto){
       
     return  this.authService.singUp(body.email, body.password, body.name)
    }
    @Post('/signin')
    signIn (@Body() body: CreateUserDto){
       
     return  this.authService.signIn(body.email, body.password)
    }

    // @Serialize(UserDto)
    @Get('/:id')
    findUser(@Param('id') id :string ){
        console.log('am called', id)
        return this.userService.findOne(id)
    }
    @Get('/')
    findAll(@Query('email') email :string ){
        console.log('searching with query email', email)
        return this.userService.find(email)
    }
    @Delete('/:id')
    deleteUser(@Param('id') id :string ){
        console.log('am called for delete', id)
        return this.userService.remove(id)
    }

    @Patch('/:id')
    updateUser(@Param('id') id :any, @Body() body: UpdateUserDto){
        console.log('am called for update', id)
        return this.userService.update(id, body)
    }
}
