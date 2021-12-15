import React, {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import Footer from '../website/footer';
import Header from '../website/header';
import DataService from "./services/Service";


export default function Signup()
{
	const [isSignup, setIsSignup] = useState(false);
	const [isError, setIsError] = useState(false);

	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("")
	const [gender, setGender] = useState("")
	const [phone, setPhone]= useState("");
	const [passwordrepeat, setPasswordRepeat] = useState("");
	const [is_artisan, setIsArtisan] =useState(0);
	
	const postSignup = (e) => {
		e.preventDefault();

		var data = {
			username,
			email,
			password,
			phone,
			gender,
			is_artisan
		}
		
		DataService.signup(data)
		.then(result => {
			// console.log(result.token)
			if (result.status === 201) {
			// setAuthTokens(result.data);
			localStorage.setItem("token", result.data.data.token)
			

			setIsSignup(true);
		  } else {
			setIsError(true);
		  }
		}).catch(e => {
		  setIsError(true);
		});

	  }
	  

	  if (isSignup) {
		// return <Redirect to="/dashboard" />;
		return <Redirect to={'/dashboard'} />;
	}


    return (
        <div>
            {/* <Header /> */}
            
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
				{/* <!-- Welcome Text --> */}
				<div className="welcome-text">
					<h3 style={{fontSize: "26px"}}>Let's create your account!</h3>
					<span>Already have an account? <Link to="login">Log In!</Link> </span>
				</div>

				<form onSubmit={postSignup} id="register-account-form">

				{/* <!-- Account Type --> */}
				<div className="account-type">
					<div>
						{/* <input type="radio" name="account-type-radio" id="freelancer-radio" className="account-type-radio" checked/> */}
						<input 
							type="radio" 
							name="account-type-radio" 
							id="freelancer-radio" 
							value= {1}
							className="account-type-radio" 
							checked={is_artisan == 1} 
								onChange={e => {
									setIsArtisan(e.target.value);
								}}
							/>
						<label htmlFor="freelancer-radio" className="ripple-effect-dark"><i className="icon-material-outline-account-circle"></i> Artisan</label>
						{/* <label for="freelancer-radio" className="ripple-effect-dark"><i className="icon-material-outline-account-circle"></i> Freelancer</label> */}
					</div>

					<div>
						<input 
							type="radio" 
							name="account-type-radio" 
							id="employer-radio" 
							value= {0}
							className="account-type-radio"
							checked={is_artisan == 0} 
								onChange={e => {
									setIsArtisan(e.target.value);
								}}
							/>
						<label htmlFor="employer-radio" className="ripple-effect-dark"><i className="icon-material-outline-business-center"></i>  Client/Employer</label>
						{/* <label className="ripple-effect-dark"><i className="icon-material-outline-business-center"></i> Client/Employer</label> */}
					</div>
				</div>
					

					<div className="input-with-icon-left">
						<i className="icon-material-outline-account-circle"></i>
						<input 
							type="text" 
							className="input-text with-border" 
							name="username" 
							value={username}
							onChange={e => {
								setUsername(e.target.value);
							  }}   placeholder="Username" required/>
					</div>

					<div className="input-with-icon-left">
						<i className="icon-material-baseline-mail-outline"></i>
						<input 
							type="text" 
							className="input-text with-border" 
							name="email" 
							value={email}
							onChange={e => {
								setEmail(e.target.value);
							  }}  id="emailaddress-register" placeholder="Email Address" required/>
					</div>

					<div className="input-with-icon-left">
						<i className="icon-feather-phone"></i>
						<input 
							type="text" 
							className="input-text with-border" 
							name="phone" 
							value={phone}
							onChange={e => {
								setPhone(e.target.value);
							  }}   placeholder="phone" required/>
					</div>
					<div className="input-with-icon-left" title="Should be at least 8 characters long" data-tippy-placement="bottom">
						<i className="icon-material-outline-lock"></i>
						<input 
								type="password" 
								className="input-text with-border" 
								name="password-register" 
								value={password}
								onChange={e => {
									setPassword(e.target.value);
								}}
								id="password-register" 
								placeholder="Password" 
								required
						/>
					</div>

					<div className="input-with-icon-left">
						<i className="icon-material-outline-lock"></i>
						<input 
							type="password" 
							className="input-text with-border" 
							name="password-repeat-register" 
							value={passwordrepeat}
							onChange={e => {
								setPasswordRepeat(e.target.value);
							}}
							id="password-repeat-register" 
							placeholder="Repeat Password" 
							required
						/>
					</div>

					<div className="input-with-icon-left">
					{/* <fieldset>
							<input 
								type="radio" 
								value="male" 
								className="custom-control-input"
								checked={gender == "male"} 
								onChange={e => {
									setGender(e.target.value);
								}}
							/> 
									<label htmlFor="male">Male</label>

								<input 
								type="radio" 
								value="female" 
								className="custom-control-input"
								checked={gender == "female"}
								onChange={e => {
									setGender(e.target.value);
								}} 
								/>
									<label htmlFor="female">Female</label>

						</fieldset> */}
									<div className="radio"> 
									<input id="male" type="radio" 
										value="male" 
										className="custom-control-input"
										checked={gender == "male"} 
										onChange={e => {
											setGender(e.target.value);
										}} />
									<label htmlFor="male">Male</label>  

									<input id="female" type="radio" 
											value="female" 
											className="custom-control-input"
											checked={gender == "female"}
											onChange={e => {
												setGender(e.target.value);
											}} 
											/>
									<label htmlFor="female">Female</label>    
								</div>
						</div>



  
				</form>

				{/* <!-- Button --> */}
				<button className="button full-width button-sliding-icon ripple-effect margin-top-10" type="submit" form="register-account-form">Register <i className="icon-material-outline-arrow-right-alt"></i></button>
				
				{/* <!-- Social Login --> */}
				<div className="social-login-separator"><span>or</span></div>
				<div className="social-login-buttons">
					<button className="facebook-login ripple-effect"><i className="icon-brand-facebook-f"></i> Register via Facebook</button>
					<button className="google-login ripple-effect"><i className="icon-brand-google-plus-g"></i> Register via Google+</button>
				</div>
			</div>

		</div>
	</div>
</div>


{/* <!-- Spacer --> */}
<div className="margin-top-70"></div>
            
            <Footer />
        </div>
    )
}