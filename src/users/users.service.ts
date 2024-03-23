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
            return await this.repo.save(user);
        } catch (error) {
            // Handle error appropriately
            console.error('Error creating user:', error);
            throw error; // Rethrow error or return custom error response
        }
    }

    async update(user: User) {
        try {
            console.log('Updating user...');
            return await this.repo.save(user);
        } catch (error) {
            // Handle error appropriately
            console.error('Error updating user:', error);
            throw error; // Rethrow error or return custom error response
        }
    }
}
