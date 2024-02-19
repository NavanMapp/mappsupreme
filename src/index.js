import { React } from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import './firebase/config'
import App from './App';
import Ticket from './pages/Ticket';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Contact from './pages/aboutPage';
import About from './components/About';
import Service from './components/Service';
// import NoPage from './pages/NoPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'signup',
    element: <Signup />
  },
  {
    path: 'ticket',
    element: <Ticket />
  },
  {
    path: 'contact',
    element: <Contact />
  },
  {
    path: 'about',
    element: <About />
  },
  {
    path: 'services',
    element: <Service />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
