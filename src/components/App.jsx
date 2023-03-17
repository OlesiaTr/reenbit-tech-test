// Core
import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

// Components

// Pages
// const Home = lazy(() => import('../pages/Home'));
const CharactersFeed = lazy(() =>
  import('../pages/CharactersFeed/CharactersFeed')
);
const CharacterInfo = lazy(() =>
  import('../pages/CharacterInfo/CharacterInfo')
);

export const App = () => {
  return (
    <Routes>
      {/* <Route path="/"> */}
      {/* <Route index element={<Home/> } /> */}
      <Route path="feed" element={<CharactersFeed />} />
      <Route path="feed/:characterId" element={<CharacterInfo />} />
      <Route path="*" element={<Navigate to={'/'} />} />
      {/* </Route> */}
    </Routes>
  );
};
