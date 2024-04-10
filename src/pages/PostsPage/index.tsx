import { FC, useEffect, useState } from "react";
import s from "./index.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { ROUTES } from "@/routes.tsx";

type PostResponse = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

interface HomePageState {
  isLoading: boolean;
  data: null | PostResponse[];
}

export const PostsPage: FC = () => {
  const [count, setCount] = useState(1);

  const [state, setState] = useState<HomePageState>({
    isLoading: true,
    data: null,
  });

  useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = async () => {
    setState((prevState) => ({ ...prevState, isLoading: true }));
    try {
      const res = await fetch(`/api${ROUTES.posts.path}`);
      const data = (await res.json()) as unknown as PostResponse[];
      setState((prevState) => ({ ...prevState, data, isLoading: false }));
    } catch (e) {
      setState((prevState) => ({ ...prevState, data: null, isLoading: false }));
    }
  };
  return (
    <div className={s.wrap}>
      <div className={clsx(s.box, s.wrap__content)}>
        <div className={s.box__top} onClick={() => setCount(count + 1)}>
          <h2 className={s.h1}>Posts {count}</h2>
        </div>
        {state.isLoading ? (
          <div style={{ padding: "1.6rem" }}>Loading...</div>
        ) : (
          <>
            {state.data?.map((post) => (
              <Link
                to={ROUTES.postDetail.path.replace(":id", String(post.id))}
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
        <button onClick={handleGetData}>Get Data</button>
      </div>
    </div>
  );
};
