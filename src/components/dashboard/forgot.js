import React, {useState} from 'react'
import { Link, Redirect } from 'react-router-dom';

import Footer from '../website/footer';
import { Card, Logo, Form, Input, Button, Error, Success } from "../../components/dashboard/AuthForms";
import DataService from "./services/Service";

import LoadingOverlay from 'react-loading-overlay'
import BounceLoader from "react-spinners/BounceLoader";


export default function Forgot() {

    // const [isLoggedIn, setLoggedIn] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isSucess, setIsSucess] = useState(false);
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [disabled, setDisasbled] = useState(false)
	let [loading, setLoading] = useState(true);
	let [color, setColor] = useState("green");





	const handleSubmit = (e) => {
		e.preventDefault();
		var data = {
			email,
		}
		setDisasbled(true);

		DataService.forgot(data)
		.then(result => {
			if (result.status === 200) {
				
           setMessage(result.data.message)
			setIsSucess(true);
            setIsError(false);
			setDisasbled(false)


		  } else {

            setMessage(result.data.message)

			setIsError(true);
			setDisasbled(false)

		  }
		}).catch(e => {
            setMessage(e.response.data.message)

			setIsError(true);

			setDisasbled(false)
		});
	  }
	


    return (
        <div>
            <div id="titlebar" className="gradient">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">

                    <h2>Forgot Password</h2>

                    <nav id="breadcrumbs" className="dark">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>Forgot Password</li>
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
			
                {isSucess && <Success>{message}</Success>}
                { isError &&<Error> {message}</Error> }

				<LoadingOverlay
							active={disabled}
							spinner={ <BounceLoader color={color} loading={loading}  size={100} /> }
							text='Loading...'
						>
				</LoadingOverlay>
						
				<form onSubmit={handleSubmit}>
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
                    
					<button className="button full-width button-sliding-icon ripple-effect margin-top-10" type="submit" disabled={disabled} >Submit <i className="icon-material-outline-arrow-right-alt"></i></button>

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
