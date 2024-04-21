import { ZustandPage } from '@pages/ZustandPage';

import { i18n } from '@/i18n';
import { ErrorPage, HomePage, PostPage, PostsPage } from '@/pages';

export type Route = {
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
    titleLang: 'pages:posts_one',
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

export const getTitleFromRoute = (route: Route) => {
  return i18n.t(route.titleLang || route.title);
};
