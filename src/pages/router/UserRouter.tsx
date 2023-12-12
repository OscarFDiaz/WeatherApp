import { User } from '..';
import { Route, Routes } from 'react-router-dom';

export const UserRouter = () => {
  return (
    <Routes>
      <Route path=":id" element={<User />} />
    </Routes>
  );
};
