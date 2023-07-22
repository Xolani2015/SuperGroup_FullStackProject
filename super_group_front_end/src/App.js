import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import React, {Fragment, useEffect, useState } from "react"; 
import {Navbar} from "./components/navbar"
import {Cart} from './pages/cart/cart'
import {Shop} from './pages/shop/shop'
import { AppContextProvider } from './context/appContext';
import Swal from 'sweetalert2'


function App() {
  const [productModels, setProductModels] = useState([]);
  return (
    <div className="App">
      <AppContextProvider>
        <Router> 
          <Navbar></Navbar>
          <Routes> 
            <Route path='/' element={<Shop productModels={productModels} setProductModels={setProductModels}></Shop>}></Route>
            <Route path='/cart'element={<Cart productModels={productModels} ></Cart>} ></Route>
          </Routes>
        </Router>
        </AppContextProvider>
    </div>
  );
}

export default App;
