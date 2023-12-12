import { Navigate, Route, Routes } from 'react-router-dom';
import { HomeRouter, UserRouter } from '../pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeRouter />} />
      <Route path="/user/*" element={<UserRouter />} />
      <Route path="/*" element={<Navigate to={'/'} />} />
    </Routes>
  );
};
