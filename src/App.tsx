import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MainLayout } from '@/layouts';
import { ROUTES } from '@/routes.tsx';
import { Store } from '@/zustand';

import { i18n } from './i18n';

const routes = createBrowserRouter([
  {
    path: ROUTES.home.path,
    element: <MainLayout />,
    children: [
      {
        path: ROUTES.home.path,
        element: ROUTES.home.element,
      },
      {
        path: ROUTES.posts.path,
        element: ROUTES.posts.element,
      },
      {
        path: ROUTES.postDetail.path,
        element: ROUTES.postDetail.element,
      },
      {
        path: ROUTES.zustand.path,
        element: ROUTES.zustand.element,
      },
    ],
  },
  {
    path: ROUTES.error.path,
    element: ROUTES.error.element,
  },
]);

function App() {
  const { loadingFly, initApp } = Store.app.use();

  useEffect(() => {
    Store.app.set({
      loadingFly: !i18n.isInitialized,
    });

    const handleLanguageChanged = () => {
      Store.app.set({
        loadingFly: false,
      });
    };

    i18n.on('languageChanged', handleLanguageChanged);

    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, []);

  useEffect(() => {}, []);

  if (!initApp) {
    return <div>Loading APP...</div>;
  }
  if (loadingFly) {
    return <div>Loading language...</div>;
  }
  return <RouterProvider router={routes} />;
}

export default App;
