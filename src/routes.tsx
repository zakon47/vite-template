import { ErrorPage, HomePage, PostPage, PostsPage } from '@/pages';

export const ROUTES = {
  home: {
    path: '/',
    title: 'Index',
    element: <HomePage />,
  },
  posts: {
    path: '/posts',
    title: 'List posts',
    element: <PostsPage />,
  },
  postDetail: {
    path: '/posts/:id',
    title: '',
    element: <PostPage />,
  },
  error: {
    path: '*',
    title: 'Error Page',
    element: <ErrorPage />,
  },
};
