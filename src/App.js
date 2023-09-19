import logo from './logo.svg';
import './App.css';
import homepage from './components/Homepage';
import Navbar from './components/Navbar';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Destination from './components/Destination';
import Footer from './components/Footer';
import Services from './components/Services';
import Homepage from './components/Homepage';
import FlightBookingForm from './components/FlightBookingForm';


function App() {
  return (

    <div class="bg-gradient-primary p-3 mb-2">
      <BrowserRouter>
        <Navbar />



        <Routes>

          <Route path="/" element={<Homepage />} />
          <Route path="/flights" element={<FlightBookingForm />} />
          <Route path="/services" element={<Services />} />


        </Routes>


      </BrowserRouter>
    </div>



  )
};

export default App;
