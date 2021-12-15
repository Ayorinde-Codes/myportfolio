import React, {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import Footer from '../website/footer';
// import Header from '../website/header';
// import DataService from "./services/Service";
import { MultiStepForm, Step } from 'react-multi-form'

import styled from 'styled-components';

// import { Container } from "../../components/dashboard/AuthForms";
// import Step1 from './signup/step1';

export default function Signup()
{

	const [active, setActive] = useState(1)

	const Container = styled.div`
		max-width: 500px;
		margin: 40px auto;
		@media(max-width: 590px) {
			width: 300px;
		}
	`

    return (
        <div>
            
            <div id="titlebar" className="gradient">
	<div className="container">
		<div className="row">
			<div className="col-md-12">

				<h2>Register</h2>

				<nav id="breadcrumbs" className="dark">
					<ul>
                    <li><Link to="/">Home</Link></li>
						<li>Register</li>
					</ul>
				</nav>

			</div>
		</div>
	</div>
</div>


<div className="container">
	<div className="row">
		<div className="col-xl-5 offset-xl-3">

			<div className="login-register-page">

				<div className="welcome-text">
					<h3>Let's create your account!</h3>
					<span>Already have an account? <Link to="login">Log In!</Link> </span>
				</div>

				<Step1 />

			</div>
		</div>
	</div>
</div>


<div className="margin-top-70"></div>
            
            <Footer />
        </div>
    )
}