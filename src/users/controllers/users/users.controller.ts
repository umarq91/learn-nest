import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { CreateUserDTO } from 'src/users/dto/createUser.dto';

@Controller('users')
export class UsersController {
  @Get('')
  getUsers(@Query('sort') sort: string) {
    console.log('sort', sort);
    return [
      {
        id: 1,
        name: 'John Doe',
        email: 'email1@gmail.com',
      },
    ];
  }

  @Post()
  createUser(@Body() body: CreateUserDTO) {
    return {
      id: Date.now(),
      ...body,
      createdAt: new Date().toISOString(),
    };
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return {
      id: parseInt(id),
      name: 'John Doe',
      email: 'john.doe@example.com',
    };
  }
}
