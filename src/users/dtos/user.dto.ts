import { Expose } from "class-transformer";

export class UserDto {
    @Expose()// by  serialize interceptor
    id: number;

    @Expose() // by  serialize interceptor
    email: string
}