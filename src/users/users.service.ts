import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private repo: Repository<User>) {}

    async create(email: string, password: string, name: string) {
        try {
            console.log('Creating user...');
            const user = this.repo.create({ email, password, name});
            // if we call save on a plain object hooks will not be called
            return await this.repo.save(user);
        } catch (error) {
            // Handle error appropriately
            console.error('Error creating user:', error);
            throw error; // Rethrow error or return custom error response
        }
    }

   
    
    findOne(id: any) {
        return this.repo.findOneBy({ id  });
      }

    find(email: string) {
        return this.repo.find({ where: { email } });
     }

    async update(id: number, attrs: Partial<User>){
       const user = await this.findOne(id);
       if(!user){
           throw new Error('User not found');
       }
       Object.assign(user, attrs);
         return this.repo.save(user);

     }

     async remove(id: any){
        const user = await this.findOne(id);
        if(!user){
            return new Error('User not found')
        }

        
        console.log('user deleted')
        return this.repo.remove(user);

     }
   
}
