import Home from './Pages/Home/Home';
import './App.css';
import {BrowserRouter, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to="/" className="nav">
          <div className="page_title">Blog React + Laravel</div>
        </NavLink>
        <Home/>
      </BrowserRouter>
    </div>
  );
}

export default App;
