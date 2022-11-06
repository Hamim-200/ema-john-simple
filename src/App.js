import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Main from './layouts/Main';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/inventory/Inventory';
import { productsAndCarLoader } from './Loader/productsAndCarLoader';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          // loader: () => fetch('http://localhost:5000/products'),
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: productsAndCarLoader,
          element: <Orders></Orders>
        },
        {
          path: '/inventory',
          element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
        },
        {
          path: '/shipping',
          element: <PrivateRoute><Shipping></Shipping></PrivateRoute>
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        }
      ]
    },

  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
