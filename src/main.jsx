import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Blog from './components/Blog/Blog.jsx';
import AppliedJobs from './components/Applied-Jobs/AppliedJobs.jsx';
import FeaturedJobs from './components/FeaturedJobs/FeaturedJobs.jsx';
import JobDetails from './components/JobDetails/JobDetails.jsx';
import { jobAndCartData } from './components/Loaders/getCart&JobData';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('jobs.json')
      },
      {
        path: '/',
        element: <FeaturedJobs />
      },
      {
        path: '/jobDetails/:jobId',
        element: <JobDetails />,
        loader: () => fetch('jobs.json'),
      },
      {
        path: '/statistics',
        element: <Statistics />,
      },
      {
        path: '/jobs',
        element: <AppliedJobs />,
        loader: jobAndCartData
      },
      {
        path: '/blog',
        element: <Blog />
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
