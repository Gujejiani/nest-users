import { UseInterceptors, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { plainToInstance } from "class-transformer";

import { UserDto } from "src/users/dtos/user.dto";
export class SerializeInterceptor implements NestInterceptor {


    constructor(private dto: any) {

    }

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        // console.log('I am running before the handler', context);
        return next.handle().pipe(
            map((data: any) => {
                console.log('I am running before response is sent out', data);
                // return plainToClass(this.dto, data, {
                //     excludeExtraneousValues: true
                // });
                const plainTo = plainToInstance(UserDto, data, {
                    excludeExtraneousValues: true
                
                });
                return plainTo;
            
            })
        );
    }



}