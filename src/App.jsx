import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Tickets from './pages/Tickets';
import Users from './pages/Users';
import Ticket from './pages/EditTicket';
import Faq from './pages/Faq';
import Admins from "./pages/Admins";

import { UserProvider } from './context/UserContext';

function App() {


  return (
    <UserProvider>
      <main id='app'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/admins" element={<Admins />}/>
          <Route path="/login" element={<Login />}/>
          <Route path='/tickets' element={<Tickets />} />
          {/* Add add-users and edit-users pages */}
          <Route path='tickets/create-ticket' element={<CreateTicket />} />
          <Route path='/tickets/edit-ticket/:id' element={<EditTicket />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/add-user' element={<AddUsers />} />
          <Route path='/users/edit-user/:id' element={<EditUsers />} />
          <Route path='/faq' element={<Faq />} />
        </Routes>
      </main>
    </UserProvider>
  )
}

export default App;