import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDTO } from 'src/users/dto/createUser.dto';

@Controller('users')
export class UsersController {
  @Get('')
  // ths will convert the query parameter 'page' to an integer
  getUsers(@Query('page', ParseIntPipe) page: number) {
    console.log('sort', page , typeof page);
    return [
      {
        id: 1,
        name: 'John Doe',
        email: 'email1@gmail.com',
      },
    ];
  }

  @Post()
  @UsePipes(new ValidationPipe())
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
