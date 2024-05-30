import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Provider} from 'react-redux'
import store from './store.js'

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

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
       <Route index={true} path='/' element={<HomeScreen/>} />
       <Route path='/products/:id' element={<ProductScreen/>} />
       <Route path='/login' element={<LoginScreen/>} />
       <Route path='/cart' element={<CartScreen/>} />
       <Route path='/logout' element={<LogoutScreen/>}/>
       <Route path='/register' element={<RegistrationScreen/>}/>

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


