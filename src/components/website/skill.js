import React, { useState, useEffect } from "react";
import { Link, Redirect } from 'react-router-dom';
import { Card, Logo, Form, Success, Input, Button, Error } from "../../components/dashboard/AuthForms";
import DataService from "../dashboard/services/Service";

export default function Skill() {

    const [skills, setSkills] = useState([]);

    const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState(false);


      useEffect(() => {
		
        getSkills()

    }, []);


const getSkills = () => 
{
    DataService.skills()

    .then(result => {
        if(result.status== 200){

            setSkills(result.data.data)

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


const skillList = () => {
    var index = 1;
    return skills && skills.map(({ skill, description, percentage, category_id}) => {
        return (
                <div key={index++}>
                    <div className=" col-xs-12 col-sm-4 col-md-4 col-lg-4 skillsArea">
                        <div className=" col-xs-12 skills"><span className="chart skilBg" data-percent={percentage}> <span className="percent"></span> </span>
                            <h4>{skill}</h4>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
        )
    })
}
    return (
        <div>
            <section  className="technical project bg-2 p-bottom0" id="technical" >
                <div className="container">
                    <div className="heading">
                        <div className="section-heading text-center font__color-white">MY <span className="font__color-1">Expertise</span></div>

                        <p>My Major skills.</p>
                    </div>
                    <div className="row">
                        {skillList()}
                    </div>
                </div>
            </section>
        </div>
    )
}
