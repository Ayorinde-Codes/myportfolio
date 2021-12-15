import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Slider() {

        return (
            <div>
				<div id="home" className="section headerV1">
					<div className="container">
						<div className="row">
							<div className="col-sm-12 col-md-12">
								<div className="side-link left">
									<a href="#"><i className="fa fa-long-arrow-left"></i> About Me</a>
								</div>
								<div className="jumbotron">
									<h1 className="type-headings">Hi, <span className="normal">my name is</span> <span className="cursive">Ayorinde</span></h1>
									<p className="subheading">Professional User Experience Designer</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="clearfix"></div>
        	</div>
    )
}

