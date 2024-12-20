import VotePage from "./routes/home.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/root.tsx";
import ResultsPage from "./routes/results.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <VotePage /> },
      { path: "/results", element: <ResultsPage /> },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
