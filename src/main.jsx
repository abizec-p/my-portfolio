import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Calculator from './calculator.jsx';
import Profile from './components/profile.jsx';
import Home from './components/home.jsx'


const router = createBrowserRouter([
  
  { path: '/', element: <App /> },
  { path: '/Calculator', element: <Calculator /> },
  {path:'/profile', element: <Profile/>}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
