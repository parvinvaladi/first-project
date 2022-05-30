import './App.css';
import Home from "./pages/home/Home.js";
import Login from "./pages/login/Login.js";
import Signup from './pages/signup/Signup.js';
// import Footer from "./footer/Footer.js";
// import Topbar from "./topbar/TopBar.js";
// import Section1 from "./pages/home/section1/Section1.js";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}>
                <Route path='home' element={<Home />} />
            </Route>
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
          </Routes>
       </BrowserRouter>
  );
}

export default App;
