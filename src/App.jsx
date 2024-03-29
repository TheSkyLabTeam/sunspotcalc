import './App.css'
import LandingPage from './Components/LandingPage/LandingPage'
import { AboutPage } from './Components/AboutPage/AboutPage'
import {Route, Routes, Link } from 'react-router-dom'
import SunsLogo from './assets/sunspotcalclogo.svg'
import SunApp from './Components/SunApp'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactGA from 'react-ga4';
AOS.init();

function App() {

  return (
    <div className="App">
      
      <nav id='navbar'>
        <h5 id="navbar-brand" data-aos="fade-down" data-aos-duration="800" data-aos-delay="300"><Link to='/'><img id='sunsLogo' src={SunsLogo} alt="mainLogo" /></Link></h5>
        <div id="navbar-links">
          <p className='navLink' 
              data-aos="fade-down" 
              data-aos-duration="800"
              data-aos-delay="500">
                <Link to='/'>Inicio</Link>
          </p>
          <p className='navLink'
              data-aos="fade-down" 
              data-aos-duration="800"
              data-aos-delay="600"><Link to='/App'>App</Link></p>
          <p className='navLink'
              data-aos="fade-down" 
              data-aos-duration="800"
              data-aos-delay="700"><Link to='/Conoce'>Conoce más</Link></p>
        </div>
      </nav>
      
      <Routes>
        <Route path='/App' element={<SunApp />} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/Conoce' element={<AboutPage />} />
      </Routes>

    </div>
  )
}

export default App
