import Navbar from "./components/navbar/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
import Contact from './pages/contact';
import Oursevices  from "./pages/ourservices";
import SignIn from "./pages/signin";
// import SignUp from "./pages/signup";

import './App.css';

function App() {
  return (
    <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/"  exact element={ <Home />} />
            <Route path="/about"  exact element={ <About />} />
            <Route path="/contact"  exact element={ <Contact />} />
            <Route path="/our-services" exact element={ <Oursevices />} />
            <Route path="/signin" exact element={ <SignIn />} />
            {/* <Route path="/sigin" exact element={ <SignIn />} /> */}
          </Routes>
        </Router>
    </div>
  );
}

export default App;
