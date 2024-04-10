import { FC, useEffect, useState } from "react";
import s from "./index.module.scss";
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";

type VersionResponse = {
  encrypted: boolean;
  folder: string;
  swagger: boolean;
  telegram: boolean;
  version: string;
};

interface HomePageState {
  isLoading: boolean;
  data: null | VersionResponse;
}

const HomePage: FC = () => {
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
    const res = await fetch("/api/v1/version");
    const data = (await res.json()) as unknown as VersionResponse;
    setState((prevState) => ({ ...prevState, data, isLoading: false }));
  };
  return (
    <div className={s.wrap}>
      <div className={s.box}>
        <div className={s.box__top} onClick={() => setCount(count + 1)}>
          <h2 className={s.h1}>Welcome</h2>
          {count}
        </div>
        <div className={s.box__icons}>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        {state.isLoading ? (
          <div>Loading...</div>
        ) : (
          <ul className={s.list}>
            <li>
              <u>encrypted:</u> {state.data?.encrypted ? "OK" : "-"}
            </li>
            <li>
              <u>folder:</u> {state.data?.folder}
            </li>
            <li>
              <u>version:</u> {state.data?.version}
            </li>
            <li>
              <u>swagger:</u> {state.data?.swagger ? "OK" : "-"}
            </li>
            <li>
              <u>telegram:</u> {state.data?.telegram ? "OK" : "-"}
            </li>
          </ul>
        )}
        <button className={s.btn} onClick={handleGetData}>
          Get Data
        </button>
      </div>
    </div>
  );
};
export { HomePage };
