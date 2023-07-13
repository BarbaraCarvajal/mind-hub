import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Event from './pages/Event';
import PastEvents from './pages/PastEvents';
import UpcomingEvents from './pages/UpcomingEvents'; // Importa el componente UpcomingEvents
import { useEffect, useState } from 'react';
import axios from "axios";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Stats from "./pages/Stats";

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("https://mindhub-xj03.onrender.com/api/amazing")
      .then(response => {
        setEvents(response.data.events);
        console.log(response.data.events);
      })
      .catch(error => {
        console.log("Error", error);
      });
  }, []);

  return (
    <Router>
      <NavBar />
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home events={events} />} />
        <Route path="/events/:id" element={<Event events={events} />} />
        <Route path="/past-events" element={<PastEvents />} />
        <Route path="/upcoming-events" element={<UpcomingEvents />} />
        <Route path="/estadisticas" element={<Stats/>}/>
        <Route path="/contacto" element={<Contact/>}/>
        
        <Route path="*" element={<h1>No existe esta página 😥</h1>} />
      </Routes>
      
      <Footer/>
    </Router>
  );
}

export default App;
