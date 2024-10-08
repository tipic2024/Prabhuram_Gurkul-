import React from 'react'
import { BrowserRouter as Router, Routes, Route,HashRouter } from 'react-router-dom';
import Navbar from './Navbar'
import Home from './Home'
import Information from './Information'
import Footer from './Footer'
import Contactus from './Contactus'
import Aboutuspage from './Aboutuspage'
import NB from './NB';
import ProfileRun from './ProfileRun';
import WhyGurukulRun from './WhyGurukulRun';
import AboutusRun from './AboutusRun';
import Events from './Event';
import Syllabus from './Syllabus';
import HeroSection from './HeroSection';



function Homepage() {
  return (
    <div>
      
        <HashRouter>
        
        <NB/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/aboutuspage" element={<AboutusRun/>} />
          <Route path="/HeroSection" element={<HeroSection/>} />

          <Route path="/admission" element={<Information/>} />
          <Route path="/Contact-us" element={<Contactus/>} />
          <Route path="/aboutmanagement" element={<ProfileRun/>} />
          <Route path="/whygurukul" element={<WhyGurukulRun/>} />
          {/* <Route path="/whygurukul" element={<WhyGurukulRun/>} /> */}
          <Route path="/events" element={<Events/>} />
          <Route path="/syllabus" element={<Syllabus/>} />
        </Routes>
         <Footer/>
      </HashRouter>
    </div>
  )
}

export default Homepage
