import { FC, useCallback, useEffect, useState } from "react";
import s from "./index.module.scss";
import { useNavigate, useParams } from "react-router-dom";
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
  data: null | PostResponse;
}

export const PostPage: FC = () => {
  const navigate = useNavigate();
  const params = useParams<{ id?: string }>();
  const [count, setCount] = useState(1);

  const [state, setState] = useState<HomePageState>({
    isLoading: true,
    data: null,
  });

  const handleGetData = useCallback(async () => {
    if (!params.id) return;
    setState((prevState) => ({ ...prevState, isLoading: true }));
    try {
      const res = await fetch(`/api${ROUTES.posts.path}/${params.id}`);
      const data = (await res.json()) as unknown as PostResponse;
      setState((prevState) => ({ ...prevState, data, isLoading: false }));
    } catch (e) {
      setState((prevState) => ({ ...prevState, data: null, isLoading: false }));
    }
  }, [params.id]);

  useEffect(() => {
    handleGetData();
  }, [params.id, handleGetData]);

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
            {state.data ? (
              <ul className={s.list}>
                <li>
                  <u>ID:</u> {state.data.id}
                </li>
                <li>
                  <u>Title:</u> {state.data.title}
                </li>
                <li>
                  <u>Body:</u> {state.data.body}
                </li>
              </ul>
            ) : (
              <div>NONE</div>
            )}
          </>
        )}
      </div>
      <div className={s.wrap__bottom}>
        <button onClick={() => navigate(-1)}>Back</button>
        <button onClick={handleGetData}>Get Data</button>
      </div>
    </div>
  );
};
