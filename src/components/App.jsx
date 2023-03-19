// Core
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useUserContext } from 'context/userContext';

// Pages
const Login = lazy(() => import('pages/Login'));
const CharactersFeed = lazy(() =>
  import('pages/CharactersFeed/CharactersFeed')
);
const CharacterInfo = lazy(() => import('pages/CharacterInfo/CharacterInfo'));

export const App = () => {
  const { user } = useUserContext();

  if (!user) return <Login />;

  return (
    <Suspense>
      <Routes>
        <Route path="/">
          <Route index path="/" element={<CharactersFeed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/character/:characterId" element={<CharacterInfo />} />
          <Route path="*" element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
