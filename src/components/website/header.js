import React, {useEffect} from 'react';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';


function Header(props){

    let history = useHistory();

    const location = useLocation();

    const { pathname } = location;

    const splitLocation = pathname.split("/");

    return (

        <div>
            <div id="header" className="header">
                <div className="navbar navbar-main">

                    <div className="container container-nav">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            
                            <Link className="navbar-brand" to={'/'}>
                                <img src="/assets/images/logo_transparent.png" alt="" />
                            </Link>
                        </div>

                        <nav className="collapse navbar-collapse" id="navbar" data-hover="dropdown" data-animations="fadeInDownNew fadeInRightNew fadeInUpNew fadeInLeftNew">
                            <ul className="nav navbar-nav navbar-right">
                                <li> <a href="#about">ABOUT ME</a></li>
                                <li> <a href="#technical">SERVICES</a></li>
                                <li> <a href="#experience">EXPERIENCE</a></li>
                                <li> <a href="#work">WORK</a></li>
                                <li> <a href="#testimonial">TESTIMONIAL</a></li>
                                <li> <a href="#contact">CONTACT</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;