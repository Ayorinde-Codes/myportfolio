import React, {useMemo, useEffect, useState} from 'react'
import Header from '../website/header'
import { Link } from 'react-router-dom'
import Sidenav from './sidenav'
import DashboardFooter from './dashboardfooter'
import DataService from "./services/User";
import jwt_decode from "jwt-decode";




export default function Dashboard() {

	const [user, setUser] = useState([]);
	const [metrics, setMetrics] = useState('');

    const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState(false);


      useEffect(() => {
		
        getUser()

        getUserMetrics()

}, []);

const config = {
    headers: {
        Authorization : 'Bearer '+ localStorage.getItem('token')
    }
}


const getUser = () => 
{
    DataService.user(config).then(
        res => {

        const response = res.data.data;
        
        setUser(response);

      }).catch(
        err => {
            // console.log(err)
        }
    )

}


const getUserMetrics = () => 
{
    DataService.getUserMetrics(config)

    .then(result => {
        if(result.status== 200){
            setMetrics(result.data.data)
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


    let offers = metrics && metrics.totalArtisanOffers.map(({ id, artisan_id, description, location, status, updated_at }) => {
        return (
            <li key={id}>
                        <div className="invoice-list-item">
                        <strong>{description}</strong>
                            <ul>
                                {status == 'completed' ? (<li><span className="paid"> {status} </span></li>) : (<li><span className="unpaid"> {status} </span></li>)}
                                <li>Location: {location} </li>
                                <li>Date: {  new Date(updated_at).toLocaleDateString() }</li>
                            </ul>
                        </div>

                        <div className="buttons-to-right">
                            <Link to="#" className="button"> invoice </Link>
                        </div>
                    </li>
        )
    })

      return (
       
       <div>

            <div className="dashboard-container">

            <Sidenav />


    <div className="dashboard-content-container" data-simplebar>
        <div className="dashboard-content-inner" >
        
        <div className="dashboard-headline">
           
            <h3>Howdy, {user ? user.username : "Seyi!"}</h3>
            <span>We are glad to see you again!</span>

            <nav id="breadcrumbs" className="dark">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>Dashboard</li>
                </ul>
            </nav>
        </div>

        {
            user.is_verified == false ? ( <h4 className="marquee">
                                            <span> 
                                            <i className="fa fa-exclamation-triangle" aria-hidden="true" style={{ color:'red' }}></i> 
                                                <b>
                                                    You are not verified get verified to get full access we have to offer <Link to="/topsearch"><button className="btn btn-primary btn-sm">  Get verified  </button> </Link>
                                                </b>
                                            </span>
                                        </h4> )  : " "
        }
        
            <br />
            
        <div className="fun-facts-container">
            <div className="fun-fact" data-fun-fact-color="#b81b7f">
                <div className="fun-fact-text">
                    <span>Total Jobs </span>
                    <h4>{metrics && metrics.totalArtisanOffers? metrics.totalArtisanOffers.length : 0}</h4>
                </div>
                <div className="fun-fact-icon"><i className="icon-material-outline-business-center"></i></div>
            </div>
            <div className="fun-fact" data-fun-fact-color="#efa80f">
                <div className="fun-fact-text">
                    <span>Total Reviews</span>
                    <h4>{user.is_artisan == true ? metrics && metrics.totalArtisanReviews.length : metrics && metrics.totalClientReviews.length}</h4>
                </div>
                <div className="fun-fact-icon"><i className="icon-material-outline-rate-review"></i></div>
            </div>

            <div className="fun-fact" data-fun-fact-color="#2a41e6">
                <div className="fun-fact-text">
                    <span>This Month Job</span>
                    <h4>{metrics && metrics.monthlyArtisanOffers ? metrics.monthlyArtisanOffers.length : 0}</h4>
                </div>
                <div className="fun-fact-icon"><i className="icon-feather-trending-up"></i></div>
            </div>
        </div>
        
        <div className="row">


            <div className="col-xl-4">

            </div>
        </div>


        <div className="row">

            <div className="col-xl-6">
                <div className="dashboard-box">
                    <div className="headline">
                        <h3><i className="icon-material-outline-assignment"></i> Orders</h3>
                    </div>
                    <div className="content">
                        <ul className="dashboard-box-list">
    
                    {offers!=null ? offers : ''}

                        </ul>
                    </div>
                </div>
            </div>

        </div>


        <DashboardFooter />

    </div>
</div>


</div>

<div id="small-dialog" className="zoom-anim-dialog mfp-hide dialog-with-tabs">

	<div className="sign-in-form">

		<ul className="popup-tabs-nav">
			<li><a href="#tab">Add Note</a></li>
		</ul>

		<div className="popup-tabs-container">

			<div className="popup-tab-content" id="tab">
				
				<div className="welcome-text">
					<h3>Do Not Forget 😎</h3>
				</div>
					
				<form method="post" id="add-note">

					<select className="selectpicker with-border default margin-bottom-20" data-size="7" title="Priority">
						<option>Low Priority</option>
						<option>Medium Priority</option>
						<option>High Priority</option>
					</select>

					<textarea name="textarea" cols="10" placeholder="Note" className="with-border"></textarea>

				</form>
				
				<button className="button full-width button-sliding-icon ripple-effect" type="submit" form="add-note">Add Note <i className="icon-material-outline-arrow-right-alt"></i></button>

			</div>

		</div>
	</div>
</div>
        </div>
    )
}
