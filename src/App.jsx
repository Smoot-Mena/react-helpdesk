import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Login from './pages/Login';
// import useUserInfo from './zustand/useUserInfo';

import Home from './pages/Home';
import Tickets from './pages/Tickets';
import Users from './pages/Users';
import Ticket from './pages/Ticket';
import Faq from './pages/Faq';
import Admins from "./pages/Admins";


function App() {

  // const { userEmail } = useUserInfo();
  // const cachedEmail = localStorage.getItem("login-email");

  return (
    <section id='app'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/admins" element={<Admins />}/>
        <Route path="/login" element={<Login />}/>
        <Route path='/tickets' element={<Tickets />} />
        <Route path='/tickets/:id' element={<Ticket />} />
        <Route path='/users' element={<Users />} />
        <Route path='/faq' element={<Faq />} />
      </Routes>
    </section>
  )
}

export default App;