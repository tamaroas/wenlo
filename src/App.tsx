import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginRegister from './pages/Login-Register/LoginRegister';
const router = createBrowserRouter([
  {
    path: "/register",
    element: <LoginRegister />,
  },
  {
    path: "/login",
    element: <LoginRegister />,
  },
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;