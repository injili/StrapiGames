import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
  Outlet,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Products } from "./pages/Products";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
const Layout = () => {
  return (
    <div className="font-jost">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/products/:id',
        element:<Products/>
      },
      {
        path:'/product/:id',
        element:<Product/>
      }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
