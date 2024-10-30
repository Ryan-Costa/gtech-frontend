import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./routes/app.jsx"
import "./index.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListaProdutos from "./routes/lista-produtos.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/product-list",
    element: <ListaProdutos />,
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
