import { User } from './IUser';

export interface IUserSlice {
  user: {
    users: User[];
    count: number;
    idCount: number;
  };
}
