
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './componants/pages/login'
import Signup from './componants/pages/signup'


const appRouter = createBrowserRouter(
  [
    {
      path : "/",
    element :<Login />,
    },
    {
    path: "/signup",
    element:<Signup />
    }

  ]
);

const root=createRoot(document.getElementById('root'));

root.render(
<RouterProvider router={appRouter} />
);

