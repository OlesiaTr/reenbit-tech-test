// Core
import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

// Components

// Pages
// const Home = lazy(() => import('../pages/Home'));
const CharactersFeed = lazy(() => import('../pages/CharactersFeed'));
const CharacterDetails = lazy(() => import('../pages/CharacterDetails'));

export const App = () => {
  return (
    <Routes>
      <Route path="/">
        {/* <Route index element={<Home/> } /> */}
        <Route path="feed" element={<CharactersFeed />} />
        <Route path="feed/:characterId" element={<CharacterDetails />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  );
};
