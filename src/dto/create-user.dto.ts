import { User } from '../user.service';

export type CreateUserDTO = Pick<User, 'name' | 'age'>;
