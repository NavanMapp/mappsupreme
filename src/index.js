import  { React } from 'react';
import { createBrowserRouter,
          RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import './config/firebase-config'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path:'/auth/login',
    element: <Login />
  },
  {
    path:'auth/signup',
    element: <Signup />
  },
  {
    path: 'contact',
    element: <Contact />
  },
  {
    path: '*',
    element: <NoPage />
  },
]) 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

reportWebVitals();
