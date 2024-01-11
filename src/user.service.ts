import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';

export interface User {
  name: string;
  age: number;
  datetime: Date;
  isActive: boolean;
}

@Injectable()
export class UserService {
  private store = new Map<number, User>();

  createUser(createUserDTO: CreateUserDTO) {
    const { name, age } = createUserDTO;
    const id = this.store.size;
    const user: User = {
      age,
      datetime: new Date(),
      isActive: true,
      name,
    };
    this.store.set(id, user);
  }

  getUsers() {
    const users = Array.from(this.store, ([key, value]) => ({
      id: key,
      ...value,
    }));
    return users.filter((user) => user.isActive);
  }

  getUserById(id: number) {
    return this.store.get(id);
  }

  updateUser(id: number, updateUserDTO: CreateUserDTO) {
    const user = this.store.get(id);
    this.store.set(id, { ...user, ...updateUserDTO });
  }

  deleteUser(id: number) {
    const user = this.store.get(id);
    this.store.set(id, { ...user, isActive: false });
  }
}
