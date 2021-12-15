import React, { useState, useEffect } from "react";

import DataService from "../dashboard/services/Service";

export default function Testimonial() {

    const [testimonial, setTestimonial] = useState([]);
    const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState(false);


    useEffect(() => {
        let isMounted = true;    
        getTestimonials();
      return () => {
          isMounted = false;
        };
    }, []);

const getTestimonials = () => 
{
    DataService.testimonial()

    .then(result => {
        if(result.status== 200){

            setTestimonial(result.data.data)
            setIsSuccess(true)
        }
        else {

            setIsError(true);
            setIsSuccess(false)
          }
    }).catch(e => {

      setIsError(true);
    });
}

const loadTestimonial = () => {
    var index = 1;
    return testimonial && testimonial.map(({ company, name, role, description }) => {
        return (
                <div key={index++} className="item">
                    <div className="box-testimony">
                        <div className="media"><img src="/assets/images/profile-icon" className="img-responsive" alt="" /></div>
                        <div className="quote-box">
                            <blockquote>
                            {description}
                            </blockquote>
                            <p className="quote-name">
                                {name} <span>{role} {company}</span>
                            </p>                        
                        </div>
                    </div>
                </div>    
        )
    })
}

    return (
        <div>
            <div id="testimonial" className="section testimony bgtestimony">
                <div className="container">	
                    <div className="row eqHeight">
                        <div className="col-sm-3 col-md-3">
                            <div className="full-height-spacer">
                                <div className="side-link left">
                                </div>
                                <div className="section-heading">MY <span className="font__color-1">CLIENTS</span></div>
                            </div>
                        </div>
                        <div className="col-sm-9 col-md-9">

                            <h2 className="section-heading-2">WHAT THEY SAY</h2>
                            <i className="fa fa-quote-left quote-left"></i>
                            <div id="caro">
                                <div className="item">
                                    <div className="box-testimony">
                                        <div className="media"><img src="/assets/images/profile-icon" className="img-responsive" alt="" /></div>
                                        <div className="quote-box">
                                            <blockquote>
                                                He is a resourceful and agile individual always ready to put in his best to produces great work.
                                            </blockquote>
                                            <p className="quote-name">
                                                Sam Makinde <span>CEO Lychee</span>
                                            </p>                        
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="box-testimony">
                                        <div className="media"><img src="/assets/images/profile-icon" className="img-responsive" alt="" /></div>
                                        <div className="quote-box">
                                            <blockquote>
                                                He is a Talented Young man always ready to support and work.
                                            </blockquote>
                                            <p className="quote-name">
                                            Abimbola <span>COO Building Blocks</span>
                                            </p>                        
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="clearfix"></div>
                            <div className="spacer-50"></div>
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
