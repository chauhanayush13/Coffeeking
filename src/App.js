import './App.css';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Background from './components/Background'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Blogs from './components/Blogs';
import Gallary from './components/Gallary';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
        <Navbar />
        <Background/>
        <Home />
        <Products/>
        <Blogs/>
        <Gallary/>
        <Contact/>
        <Footer/>
    </Router>
  );
}

export default App;
