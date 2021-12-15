import React, {useState, useEffect}  from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AboutMe from "./components/website/about_me";
import Contact from "./components/website/contact";
import Index from "./components/website";
import PrivateRoute from './PrivateRoute';
import Header from './components/website/header';
import Skill from "./components/website/skill";
import Experience from "./components/website/experience";
import Education from "./components/website/education";
import Portfolio from "./components/website/portfolio";
import Testimonial from "./components/website/testimonial";
import Notfound from "./components/notfound";
import Login from "./components/dashboard/login";

export default function App() {

  return (
    <div>
      <Router>
      {/* <Header />
      <br/> */}


      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/aboutme" component={AboutMe} />  
        <Route path="/skill" component={Skill} />  
        <Route path="/experience" component={Experience} />  
        <Route path="/education" component={Education} />  
        <Route path="/portfolio" component={Portfolio} />  
        <Route path="/testimonial" component={Testimonial} /> 
        <Route path="/contact" component={Contact} /> 
        {/* <PrivateRoute path="/dashboard" component={ Dashboard} /> */}
        <Route path="/login" component={Login} /> 
        <Route path="*" component={Notfound} />

      </Switch>
      </Router>

    </div>
  );
}
