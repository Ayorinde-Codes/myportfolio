import React, { useEffect } from 'react'
import Header from './header';
import Footer from './footer';
import AboutMe from './about_me';
import Skill from './skill';
import Experience from './experience';
import Portfolio from './portfolio';
import Testimonial from './testimonial';
import Contact from './contact';


function Index()  {



    return (
        <div>
            <div className="page-wrapper">
            <Header />
            <AboutMe />
            <Skill />
            <Experience />
            <Portfolio />
            <Testimonial />
            <Contact />
            <Footer />
            </div>
        </div>
    )
    
}

export default Index;