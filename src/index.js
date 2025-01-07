import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Root from './routes/root';
import ProductSearch from './components/ProductSearch';

const router =createBrowserRouter([

  {
    path: "/",
    element: <Root/>,

  children: [

  {
    path: "/",
    element: <ProductListing />,
  },

  {
    path: "/product-search",
    element: <ProductSearch/>,
  },


  {
    path: "/product-details/:id",
    element: <ProductDetails />,
  },
  ],
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);
