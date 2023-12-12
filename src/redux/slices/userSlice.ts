import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../interfaces/IUser';

interface UserState {
  users: User[];
  count: number;
  idCount: number;
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    count: 0,
    idCount: 0,
  } as UserState,
  reducers: {
    setUser: (state, action) => {
      state.count++;
      state.idCount++;
      state.users.push(action.payload);
    },
    setUsers: (state, action) => {
      state.count = action.payload.length;
      state.idCount = action.payload.length + 1;
      state.users = action.payload;
    },
    updateUser: (state, action) => {
      state.users = state.users.map((user) => {
        if (user.id === action.payload.id) {
          return action.payload;
        }
        return user;
      });
    },
    deleteUserById: (state, action) => {
      state.count--;
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { deleteUserById, setUser, setUsers, updateUser } = userSlice.actions;
