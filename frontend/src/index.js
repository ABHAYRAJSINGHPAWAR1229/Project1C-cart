import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Provider} from 'react-redux'
import store from './Redux-Store/store'

import {createBrowserRouter,
        createRoutesFromElements,
        Route,
        RouterProvider
} from 'react-router-dom'
import HomeScreen from './Screen/HomeScreen';
import ProductScreen from './Screen/ProductScreen';
import LoginScreen from './Screen/LoginScreen';
import CartScreen from './Screen/CartScreen';
import LogoutScreen from './Screen/LogoutScreen'
import RegistrationScreen from './Screen/RegistrationScreen';
import ShippingScreen from './Screen/ShippingScreen';
import PaymentScreen from './Screen/PaymentScreen';

import PrivateRoute from './Component/PrivateRoute';
import PlaceOrderScreen from './Screen/PlaceOrderScreen';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
       <Route index={true} path='/' element={<HomeScreen/>} />
       <Route path='/products/:id' element={<ProductScreen/>} />
       <Route path='/users/login' element={<LoginScreen/>} />
       <Route path='/cart' element={<CartScreen/>} />
       <Route path='/logout' element={<LogoutScreen/>}/>
       <Route path='/register' element={<RegistrationScreen/>}/>

       <Route path='' element={<PrivateRoute/>}>
       <Route path='/shipping' element={<ShippingScreen/>}/>
       <Route path='/payment' element={<PaymentScreen/>}/>
       <Route path='/placeOrder' element={<PlaceOrderScreen/>}/>
       
       </Route>

    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);


