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
                            A versatile, resourceful, result-oriented software enthusiast with 5+ years work experience participating 
                            in the complete product development lifecycle of successfully launched applications and contributing constructively 
                            to the status quo of the industry by way of research and development.
                        </p> 
                    </div> 
                    <a href="/assets/ayorindeCV.pdf" download="ayorindeCV" className="bntDownload" style={{ textDecoration: 'none' }}>Download Resume</a> </div>
                </div>
                </div>
            </section>
        </div>
    )
}
