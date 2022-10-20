import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from "./components/Login"
import Admin from './components/Admin'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar></Navbar>
        <Routes>
        <Route path='/'element={<Login></Login>}></Route>
          <Route path='/home'element={<Home></Home>}></Route>
          <Route path='/about'element={<About></About>}></Route>
          <Route path='/contact'element={<Contact></Contact>}></Route>
          <Route path='/admin'element={<Admin></Admin>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
