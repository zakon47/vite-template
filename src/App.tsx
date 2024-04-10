import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "@/routes.tsx";
import { MainLayout } from "@/layouts";

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
    ],
  },
  {
    path: ROUTES.error.path,
    element: ROUTES.error.element,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
