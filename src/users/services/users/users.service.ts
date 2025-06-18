import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from 'src/users/dto/createUser.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      createdAt: new Date().toISOString(),
    },
  ];

  getUsers(page: number) {
    return {
      page,
      data: this.users,
      total: this.users.length,
    };
  }

  createUser(createUserDto: CreateUserDTO) {
    const newUser = {
      id: Date.now(),
      ...createUserDto,
      createdAt: new Date().toISOString(),
    };
    this.users.push(newUser);
    return newUser;
  }

  getUserById(id: number) {
    const user = this.users.find(user => user.id === id);
    if (!user) {
      return { message: 'User not found' };
    }
    return user;
  }
}