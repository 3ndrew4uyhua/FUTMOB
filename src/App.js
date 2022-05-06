import logo from './logo.svg';
import './App.css';
import Navbar from './Compoents/Navbar';
import {Routes, Route, Link} from 'react-router-dom'
import HeroBanner from './Compoents/HeroBanner';
import Home from './Pages/Home';
import Login from './Pages/Auth/Login';
import Footer from './Compoents/Footer';

function App() {
  return (
    <div className="App"> 
        <nav>
          <link to='/">Home</nav>'></link>
          <link to='/login'>Login</link>
        </nav>
        <Routes>
          <route path='/' element={<Home />} />
          <route path='/auth/login' element={<Login />} />
        </Routes>

        <Footer />
    </div>


  )
}

export default App;