import React, { useState, useEffect } from "react";
import DataService from "../dashboard/services/Service";

export default function Experience() {

	const [experience, setExperience] = useState([]);
    const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState(false);

        useEffect(() => {
            let isMounted = true;    
            getExperience();
          return () => {
              isMounted = false;
            };
        }, []);

        

const getExperience = () => 
{
    DataService.myExperience()

    .then(result => {
        if(result.status== 200){
            setExperience(result.data.data)
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

const convertDateToString = (date) => 
{
    var dte = date
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var another = months[+dte.split('-')[1] - 1]

    var date = new Date(date);

    return another + ' '+ date.getFullYear();
}
      
const loadExperience = () => {
    var index = 1;
    return experience && experience.map(({ company_name, role, duties, description, year_from, year_to, is_current_position }) => {
        return (
                <div key={index++} className="row workDetails">
                    <div className="col-xs-12 col-sm-3 col-md-2 col-lg-2">
                        <div className="workYear"><span className="prevY">{ is_current_position ? 'Till date' : convertDateToString(year_to)}</span>
                            <span className="afterY">{convertDateToString(year_from)}</span>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-9 col-md-10 col-lg-10 rightArea">
                    <div className="arrowpart"></div>
                        <div className="exCon">
                            <h4>{company_name}</h4>
                            <h5>{role}</h5>
                            <p>
                                {description}
                            </p>
                            <ul> 
                                {duties && duties.map((data, index)=> {
                                    return (
                                        <li key={index}>
                                            {data}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
        )
    })
}
    return (
        <div>
            <section id="experience" className="section project exprience" >
                <div className="container">
                <div className="heading">
                    <div className="section-heading text-center font__color-2">MY <span className="font__color-1">Work Experience</span></div>
                </div>
                        {loadExperience()}
                </div>
            </section>
        </div>
    )
}
