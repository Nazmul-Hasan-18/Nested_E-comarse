
import './index.css'



import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Root';
import Blog from './blog/Blog';
import About from './about/About';
import Home from './home page/Home';
import SingleProduct from './singleProduct/SingleProduct';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
        path:"blog",
        element: <Blog />
        
      },
     {
      path: "about",
      element:<About />
     },
     {
      index:true,
      element:<Home />
     },
       {
      path: "singleProduct/:id",
      element:<SingleProduct/>,
     }
    ]
  },
 
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
