import { ZustandPage } from '@pages/ZustandPage';

import { ErrorPage, HomePage, PostPage, PostsPage } from '@/pages';

export const ROUTES = {
  home: {
    path: '/',
    title: 'Home',
    element: <HomePage />,
  },
  posts: {
    path: '/posts',
    title: 'Posts',
    element: <PostsPage />,
  },
  postDetail: {
    path: '/posts/:id',
    title: '',
    element: <PostPage />,
  },
  zustand: {
    path: '/zustand',
    title: 'Zustand',
    element: <ZustandPage />,
  },
  error: {
    path: '*',
    title: 'Error Page',
    element: <ErrorPage />,
  },
};
