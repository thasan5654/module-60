import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import Main from './layout/Main.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AuthProviers from './Provider/AuthProviers.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviers>
    <RouterProvider router={router}></RouterProvider>
    </AuthProviers>
  </StrictMode>,
)
