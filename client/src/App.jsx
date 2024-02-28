import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
  Outlet,
} from "react-router-dom";
import './App.css';
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Products } from "./pages/Products";

const router = createBrowserRouter([
  {
    path:'/',
    element:<span><Home/></span>
  },
  {
    path:'/products/:id',
    element:<span><Products/></span>
  },
  {
    path:'/product/:id',
    element:<span><Product/></span>
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
