// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Event from './pages/Event';
import PastEvents from './pages/PastEvents';
import UpcomingEvents from './pages/UpcomingEvents';
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Stats from "./pages/Stats";
import StateProvider from "./store/StateProvider";

function App() {
  return (
    <StateProvider>
      <Router>
        <NavBar />
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events/:id" element={<Event />} />
          <Route path="/past-events" element={<PastEvents />} />
          <Route path="/upcoming-events" element={<UpcomingEvents />} />
          <Route path="/estadisticas" element={<Stats/>}/>
          <Route path="/contacto" element={<Contact/>}/>
          
          <Route path="*" element={<h1>No existe esta página 😥</h1>} />
        </Routes>
        
        <Footer/>
      </Router>
    </StateProvider>
  );
}

export default App;