import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Navbar} from "./components/navbar"
import {Cart} from './pages/cart/cart'
import {Shop} from './pages/shop/shop'
import { AppContextProvider } from './context/appContext';

function App() {
 
  return (
    <div className="App">
      <AppContextProvider>
        <Router> 
          <Navbar></Navbar>
          <Routes> 
            <Route path='/' element={<Shop></Shop>}></Route>
            <Route path='/cart'element={<Cart></Cart>} ></Route>
          </Routes>
        </Router>
        </AppContextProvider>
    </div>
  );
}

export default App;
