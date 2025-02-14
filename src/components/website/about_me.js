import React from 'react'

export default function AboutMe() {
    return (
        <div>
              <section className="aboutme" id="about">
                <div className="">
                
                <div className="row">
                <div className=" col-xs-12 col-sm-12 col-md-5 col-lg-5 proPic"> <img src="/assets/images/AyorindeA.jpg" alt="" className="img-fluid" /> </div>
                    <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-5 aboutCont">
                        <div className="heading clearfix">
                            <h2>About me</h2>
                        </div>
                    
                    <h3>Ayorinde Akindemowo</h3>
                    <h4 className="subHeading">Senior Software Engineer</h4>
                    
                    <div id="description">
                        <p> 
                            I am a seasoned developer with over seven years of experience building robust and scalable software
                            solutions. My expertise spans both backend and frontend development, allowing me to contribute
                            effectively to various aspects of a project's lifecycle. I have a proven track record of delivering
                            high-performance applications in industries such as e-commerce, Financial Technology (FINTECH),
                            software as a service (SAAS), medical technology, real estate, and healthcare. My technical proficiency,
                            coupled with a passion for pushing the boundaries of technology, enables me to craft innovative
                            solutions that meet clients' evolving needs.
                        </p>
                    </div> 
                    <a href="/assets/Ayorinde-Akindemowo-Resume.pdf" download="Ayorinde_Akindemowo_Resume" className="bntDownload" style={{ textDecoration: 'none' }}>Download Resume</a> </div>
                </div>
                </div>
            </section>
        </div>
    )
}