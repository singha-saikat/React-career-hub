import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Statistics from './Pages/Statistics/Statistics';
import ErrorPage from './components/Error Page/ErrorPage';
import JobDetails from './components/Job Details/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children :([
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:'/statistics',
        element: <Statistics/>
      },
      {
        path:'/job/:id',
        element:<JobDetails/>,
        loader: () => fetch('../jobs.json')
      },
    ])
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
