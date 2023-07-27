import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Event from './pages/Event';
import PastEvents from './pages/PastEvents';
import UpcomingEvents from './pages/UpcomingEvents';
import { StateProvider } from './store/StateProvider';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Stats from './pages/Stats';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './components/Logout';

function App() {
  return (
    <StateProvider>
      <Router>
        <NavBar />
        <Navigation />
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/events/:id" element={<Event />} />
          <Route path="/past-events" element={<PastEvents />} />
          <Route path="/upcoming-events" element={<UpcomingEvents />} />
          <Route path="/estadisticas" element={<Stats />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<h1>No existe esta página 😥</h1>} />
        </Routes>
        <Footer />
      </Router>
    </StateProvider>
  );
}

export default App;

