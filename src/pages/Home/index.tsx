import { FC, useState } from "react";
import s from "./index.module.scss";
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";

const HomePage: FC = () => {
  const [count, setCount] = useState(1);

  return (
    <div className={s.wrap} onClick={() => setCount(count + 1)}>
      <div className={s.box}>
        <h2 className={s.h1}>Welcome</h2>
        {count}

        <div className={s.icons}>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </div>
    </div>
  );
};
export { HomePage };
