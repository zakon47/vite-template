import clsx from 'clsx';
import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { Service } from '@/react-query';
import { ROUTES } from '@/routes.tsx';
import { setAppStore, Store } from '@/zustand';

import s from './index.module.scss';

export const PostsPage: FC = () => {
  const { t } = useTranslation();
  const { testCountStore } = Store.app.use();

  const {
    data: posts,
    isFetching,
    refetch,
  } = useQuery({
    ...Service.posts.getAll({}),
  });

  return (
    <>
      <Helmet>
        <title>{t(ROUTES.posts.titleLang || ROUTES.posts.title)}</title>
      </Helmet>
      <div className={s.wrap}>
        <div className={clsx(s.box, s.wrap__content)}>
          <div
            className={s.box__top}
            onClick={() =>
              setAppStore({
                testCountStore: testCountStore + 1,
              })
            }
          >
            <h2 className={s.h1}>Posts {testCountStore}</h2>
          </div>
          {isFetching ? (
            <div style={{ padding: '1.6rem' }}>Loading...</div>
          ) : (
            <>
              {posts?.map((post) => (
                <Link
                  to={ROUTES.postDetail.path.replace(':id', String(post.id))}
                  className={s.list}
                  key={post.id}
                >
                  <li>
                    <u>ID:</u> {post.id}
                  </li>
                  <li>
                    <u>Title:</u> {post.title}
                  </li>
                  <li>
                    <u>Body:</u> {post.body}
                  </li>
                </Link>
              ))}
            </>
          )}
        </div>
        <div className={s.wrap__bottom}>
          <button onClick={() => refetch()}>Get Data</button>
        </div>
      </div>
    </>
  );
};
