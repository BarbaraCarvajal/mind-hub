
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Events from './pages/events';
import Event from './pages/Event';
import { useEffect } from 'react';
import axios from "axios";
import { useState } from "react";



function App() {

    let [events, setEvents] = useState()

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
        <>


            <Router>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home events = {events}/>} />
                    <Route path='events' element={<Events events={events} />} />

                    <Route path='/events/:id' element={<Event />} />

                    <Route path='*' element={<h1>No existe esta página 😥</h1>} />

                </Routes>
            </Router>

        </>
    )
}

export default App
