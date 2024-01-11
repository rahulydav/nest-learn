import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() createUserDTO: CreateUserDTO) {
    this.userService.createUser(createUserDTO);
    return 'USER CREATED';
  }

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: number) {
    return this.userService.getUserById(+id);
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() updateUserDTO: CreateUserDTO) {
    this.userService.updateUser(+id, updateUserDTO);
    return 'USER UPDATED';
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    this.userService.deleteUser(+id);
    return 'USER DELETED';
  }
}
