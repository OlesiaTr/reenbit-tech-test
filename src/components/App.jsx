// Core
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

// Components

// Pages
// const Home = lazy(() => import('pages/Home'));
const CharactersFeed = lazy(() =>
  import('pages/CharactersFeed/CharactersFeed')
);
const CharacterInfo = lazy(() => import('pages/CharacterInfo/CharacterInfo'));

export const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/">
          {/* <Route index element={<Home/> } /> */}
          <Route path="/feed" element={<CharactersFeed />} />
          <Route path="/character/:characterId" element={<CharacterInfo />} />
          <Route path="*" element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
