import React, { useState } from "react";
import { Link, Redirect } from 'react-router-dom';

import Footer from '../website/footer';
// import Header from '../website/header';
import { useAuth } from "../../context/auth";
import { Card, Logo, Form, Success, Input, Button, Error } from "../../components/dashboard/AuthForms";
import DataService from "./services/Service";

import LoadingOverlay from 'react-loading-overlay'
import BounceLoader from "react-spinners/BounceLoader";


export default function Login(props)
{
	const [isLoggedIn, setLoggedIn] = useState(false);
	const [isError, setIsError] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const { setAuthTokens } = useAuth();
	const [message, setMessage] = useState('');
	const [isSucess, setIsSucess] = useState(false);
	const [disabled, setDisasbled] = useState(false)
	const [validateMessage, setValidateMessage] = useState('');

	let [loading, setLoading] = useState(true);
	let [color, setColor] = useState("green");



	const postLogin = (e) => {
		e.preventDefault();
		var data = {
			email,
			password
		}
		
		setDisasbled(true);

		DataService.login(data)
		.then(result => {
			if (result.status === 200) {
			
			localStorage.setItem("token", result.data.data)

			setMessage(result.data.message)

			setIsSucess(true);

			setDisasbled(false)

			setLoggedIn(true);
		  } else {
			setMessage(result.data.message)

			setIsError(true);

			setDisasbled(false)

		  }
		}).catch(e => {
			setMessage(e.response.data.message)

			setValidateMessage(e.response.data)

			setDisasbled(false)

		  	setIsError(true);
		}); 

	  }
	

	  if (isLoggedIn) {

		return <Redirect to="/dashboard" />;
	}




    return (
        <div>

            <div id="titlebar" className="gradient">
	<div className="container">
		<div className="row">
			<div className="col-md-12">

				<h2>Log In</h2>

				<nav id="breadcrumbs" className="dark">
					<ul>
						<li><Link to="/">Home</Link></li>
						<li>Log In</li>
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
				{/* <!-- Welcome Text --> */}
				<div className="welcome-text">
					<h3>We're glad to see you again!</h3>
					<span>Don't have an account? <Link to="signup">Sign Up!</Link></span>

				</div>
					
				{isSucess && <Success>{message}</Success>}
                { isError &&<Error> {message}</Error> }

				<LoadingOverlay
							active={disabled}
							spinner={ <BounceLoader color={color} loading={loading}  size={100} /> }
							text='Loading...'
						>
				</LoadingOverlay>

				<form onSubmit={postLogin}>
					<div className="input-with-icon-left">
						<i className="icon-material-baseline-mail-outline"></i>
						<input 
							type="email" 
							className="input-text with-border" 
							name="email" 
							value={email}
							onChange={e => {
								setEmail(e.target.value);
							  }}
							placeholder="Email Address" 
							required
						/>

					</div>

					<div className="input-with-icon-left">
						<i className="icon-material-outline-lock"></i>
						<input 
							type="password" 
							className="input-text with-border" 
							name="password" 
							value={password}
							onChange={e => {
								setPassword(e.target.value);
							}}
							placeholder="Password" 
							required
						/>
					</div>
					<Link to="/forgot" className="forgot-password">Forgot Password?</Link>
					
					<button className="button full-width button-sliding-icon ripple-effect margin-top-10" type="submit" disabled={disabled} >Log In <i className="icon-material-outline-arrow-right-alt"></i></button>

				</form>
				
			</div>

		</div>
	</div>
</div>
<div className="margin-top-70"></div>

<Footer />
        </div>
    )
}