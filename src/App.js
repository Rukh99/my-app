import logo from './logo.svg';
import './App.css';
import homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Homepage from './components/Homepage';

function App() {
  return (
    
    <div>
    <Navbar/>
    <browser router>
    <routes>
    <route path="/homepage" element = {<Homepage/>}/>
    <route path="/services" element = {<Services />}/>
    <route path="/header" element={<Headers />}/>

    </routes>
    
    
    </browser>
    </div>



  )
};

export default App;
