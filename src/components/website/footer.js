import React from 'react'

function Footer() {

    return(
        <div>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 col-md-3">
                            <div className="footer-item">
                                <img src="/assets/images/logo_transparent_yellow.png" alt="logo bottom" className="logo-bottom" />
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6">
                            <div className="footer-item">
                                <div className="footer-title">
                                    Contact
                                </div>
                                <address>
                                    Address : Lagos, Nigeria<br />
                                    Email : <a href="mailto:ayorinde223@gmail.com">ayorinde223@gmail.com</a><br />
                                    <abbr title="Phone">Phone:</abbr> <a  href="tel:0706-194-3535" > +234 70 6194 3535 </a><br /> 
                                </address>
                            </div>
                        </div>
                        <div className="col-sm-3 col-md-3">
                            <div className="footer-item">
                                <div className="footer-title">
                                    Get in touch
                                </div>
                                <div className="footer-sosmed">
                                    <a href="https://www.linkedin.com/in/ayorinde-akindemowo-530318149" target="_blank" title="">
                                        <div className="item">
                                            <i className="fa fa-linkedin"></i>
                                        </div>
                                    </a>
                                    <a href="https://github.com/Ayorinde-Codes" target="_blank" title="">
                                        <div className="item">
                                            <i className="fa fa-github"></i>
                                        </div>
                                    </a> 
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="fcopy">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <p className="ftex">&copy; {(new Date().getFullYear())} Ayorinde Akindemowo </p> 
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                
            </div>
        </div>
    )
}

export default Footer;
