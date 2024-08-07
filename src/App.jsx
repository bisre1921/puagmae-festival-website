 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Services from './components/Services';
import Schedule from './components/Schedule';
import Gallery from './components/Gallery';

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Home />
        <About />
        <Services />
        <Schedule />
        <Gallery />
      </div>
    </Router>
  )
}
