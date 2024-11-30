import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages/app.jsx";
import ListaProdutos from "./pages/lista-produtos.jsx";
import Home from "./pages/home.jsx";
import DetalheProduto from "./pages/detalhe-produto.jsx";
import ErrorPage from "./pages/error-page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product-list",
        element: <ListaProdutos />,
      },
      {
        path: "/product/:id",
        element: <DetalheProduto />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
