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
import { ValidationCreateUserPipe } from 'src/users/pipes/validation-create-user/validation-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(@Query('page', ParseIntPipe) page: number) {
    return this.usersService.getUsers(page);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body(ValidationCreateUserPipe) createUserDto: CreateUserDTO) {
    return this.usersService.createUser(createUserDto);
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUserById(id);
  }
}
