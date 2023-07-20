import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Navbar} from "./components/navbar"

function App() {
  return (
    <div className="App">
        <Router> 
          <Navbar></Navbar>
          <Routes> 
            <Route path='/'></Route>
            <Route path='/cart'></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
