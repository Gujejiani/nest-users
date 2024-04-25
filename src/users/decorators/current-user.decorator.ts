import {
    createParamDecorator,
    ExecutionContext,
} from '@nestjs/common'


//data is the argument
export const CurrentUser = createParamDecorator(
    (data: never, context: ExecutionContext) => {
       // const request = context.switchToHttp().getRequest()
        const request = context.switchToHttp().getRequest()
        console.log('request user ', request.currentUser)
       console.log('reading from session in decorator ', request.session.userId) 
       return request.currentUser
    }
)