import { ZustandPage } from '@pages/ZustandPage';

import { ErrorPage, HomePage, PostPage, PostsPage } from '@/pages';

type Route = {
  path: string;
  element: JSX.Element;
  title: string;
  titleLang?: string;
};

export const ROUTES = {
  home: {
    path: '/',
    title: 'Home',
    titleLang: 'pages:home',
    element: <HomePage />,
  } as Route,
  posts: {
    path: '/posts',
    title: 'Posts',
    titleLang: 'pages:posts',
    element: <PostsPage />,
  } as Route,
  postDetail: {
    path: '/posts/:id',
    title: '',
    element: <PostPage />,
  } as Route,
  zustand: {
    path: '/zustand',
    title: 'Zustand',
    titleLang: 'pages:zustand',
    element: <ZustandPage />,
  } as Route,
  error: {
    path: '*',
    title: 'Error Page',
    element: <ErrorPage />,
  } as Route,
};

// ROUTES.posts.
