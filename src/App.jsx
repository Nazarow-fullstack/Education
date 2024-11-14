import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/layout/layout";
import { Suspense } from "react";
import { About, Home } from "./router/router";
import Loader from "./loader/Loader"; 

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<Loader />}>
          <Layout />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/about",
          element: (
            <Suspense fallback={<Loader />}>
              <About />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
