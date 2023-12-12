import { Route, Routes } from 'react-router-dom';
import { Home } from '..';

export const HomeRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
