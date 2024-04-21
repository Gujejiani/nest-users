import { BadRequestException, Injectable,  } from "@nestjs/common";
import { UsersService } from "./users.service";
import { randomBytes, scrypt as _script } from "crypto";
import { promisify } from "util";


const scrypt = promisify(_script);

@Injectable()
export class AuthService {
 constructor(private usersService: UsersService){

 }


async  singUp(email: string, password: string, name: string){
    const alreadyRegistered = await this.usersService.find(email);

    console.log('alreadyRegistered', alreadyRegistered)
    if(alreadyRegistered?.length){
        throw new BadRequestException('Email already in use');
    };

    // hash the users password
        // generate a salt
        const salt = await randomBytes(8).toString('hex');

        // hash the password with the salt
        const hash = (await scrypt(password, salt, 32)) as Buffer;

        // join the salt and the hashed password
        const hashedPassword = salt + '.' + hash.toString('hex');



    // create a new user
    const user = await this.usersService.create(email, hashedPassword, name);


     return user
 };

 signIn(){

 }


}