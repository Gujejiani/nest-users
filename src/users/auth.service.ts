import { BadRequestException, Injectable,  } from "@nestjs/common";
import { UsersService } from "./users.service";




@Injectable()
export class AuthService {
 constructor(private usersService: UsersService){

 }


async  singUp(email: string, password: string){
    const alreadyRegistered = await this.usersService.find(email);

    if(!alreadyRegistered?.length){
        throw new BadRequestException('Email already in use');
    };

    // hash the users password
    


    // create a new user

    // return the user
     
 };

 signIn(){

 }


}