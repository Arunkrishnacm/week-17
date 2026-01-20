import { Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import Users from './Pages/Users'
import UserDetails from './Pages/UserDetails'
import About from './Pages/About'
import './index.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </>
  );
}

export default App;
