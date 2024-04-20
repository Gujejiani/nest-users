import { Expose } from "class-transformer";

export class UserDto {
    @Expose()// do share this property
    id: number;

    @Expose()
    email: string
}