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
                            My name is Ayorinde. I am a versatile, resourceful, result-oriented software enthusiast with 5+ years of work experience building commercial software products using modern web technologies.
                            I have successfully launched full applications in different niches including but not limited to e-commerce, medicine, Fintech, Real Estate etc. so I understand how to effectively contribute to the entire product development lifecycle. 
                            My passion for technology extends beyond basic development and into the realm of research and contributing to the cutting edge of web 3.0.
                        </p> 
                    </div> 
                    <a href="/assets/Ayorinde_Akindemowo_-CV.pdf" download="Ayorinde_Akindemowo_cv" className="bntDownload" style={{ textDecoration: 'none' }}>Download Resume</a> </div>
                </div>
                </div>
            </section>
        </div>
    )
}