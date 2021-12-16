import React, { useState, useEffect } from "react";
import { Link, Redirect } from 'react-router-dom';
import Footer from '../website/footer';
import { Card, Logo, Form, Success, Input, Button, Error } from "../../components/dashboard/AuthForms";
import DataService from "../dashboard/services/Service";

export default function Portfolio() {

  const [portfolio, setPortfolio] = useState('');
  const [categories, setCategories] = useState('');
  const [singlePortfolio, setSinglePortfolio] = useState('');

  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);


  useEffect(() => {
    let isMounted = true;
    getCategory();

    getPorfolio();
  return () => {
      isMounted = false;
    };
}, []);


const getPorfolio = () => 
{
  DataService.portfolio()

  .then(result => {
      if(result.status== 200){

        setPortfolio(result.data.data)
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

const getCategory = () => 
{
  DataService.getCategory()
  .then(result => {
      if(result.status== 200){

        setCategories(result.data.data.slice(0, 3))
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

const loadCategory = () => {
  var index = 1;
  return categories && categories.map(({ stack, description, image_url }) => {
      return (
              <li key={index++}><a href="#" data-filter={`.${stack}`}> {stack} </a></li>
            )
  })
}

const getRandomItem = (arr) => {

  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}

const frontEndImages = () => {
  const array = [
    '/assets/frontend/1.jpg',
    '/assets/frontend/2.jpg',
    '/assets/frontend/3.jpg',
  ];
  const result = getRandomItem(array);
  return result;
}

const backEndImages = () => {
  const array = [
    '/assets/backend/1.jpg',
    '/assets/backend/2.png',
    '/assets/backend/3.png',
    '/assets/backend/4.png',
    '/assets/backend/5.png',
    '/assets/backend/6.jpg',
    '/assets/backend/7.jpg',
    '/assets/backend/8.jpg',
    '/assets/backend/9.jpg',
  ];

  const result = getRandomItem(array);
  return result;
  
}

const fullStackImages = () => {
  const array = [
    '/assets/frontend/1.jpg',
    '/assets/frontend/2.jpg',
    '/assets/frontend/3.jpg',
    '/assets/backend/1.jpg',
    '/assets/backend/2.png',
    '/assets/backend/3.png',
    '/assets/backend/4.png',
    '/assets/backend/5.png',
    '/assets/backend/6.jpg',
    '/assets/backend/7.jpg',
    '/assets/backend/8.jpg',
    '/assets/backend/9.jpg',
  ];

  const result = getRandomItem(array);
  return result;
}

const loadPortfolio = () => {
  var index = 1;

  return portfolio && portfolio.map(({ id, name, category_id, stack, description, year_from, year_to, url, is_completed, categories  }) => {
      return (        
              <li key={index++} className={`${categories.stack} col-xs-6 col-sm-4 col-md-3 col-lg-3 addSpacingPortfolio`}>
                <div className="lightCon"> 
                  <span className="hoverBox"> 
                    <span className="smallIcon">
                        <a className="zoom lb lb_warsaw1" data-toggle="modal" data-target="#portfolioModal">
                          <i className="fa fa-search fa-2x" onClick={() =>loadModal(name, stack, description, year_from, year_to, url, is_completed, categories)}></i> 
                        </a>
                        <a href={url ? url : '#'} title="Project Link" target="_blank" className="linKed">
                          <i className="fa fa-link fa-2x"></i>
                        </a>
                      </span> 
                    </span> 
                  <img src={categories.stack == 'fullstack' ? fullStackImages() : (categories.stack == 'backend' ? backEndImages() : frontEndImages())}  className='portfolioImg img-fluid' alt="" />
                </div>
              </li> 
      )
  })
}

const loadModal = (name, stack, description, year_from, year_to, url, is_completed, categories) => {

    setSinglePortfolio([{name, stack, description, year_from, year_to, url, is_completed, categories}])
}

    return (
        <div id="work" className="section project bg-1">
          <div className="container">
            <section className="protfolio" id="protfolio">
              <div>
                  <div className="portfolioTop clearfix">
                  <div className="section-heading text-center font__color-white"> MY <span className="font__color-1">WORK</span></div>

                  <section className="portfolioFilter">
                    <ul>
                        <li><a href="#" data-filter="*" className="current">All</a></li>
                        {loadCategory()}
                    </ul>
                  </section>
                </div>
                <br />

                  <ul className="portfolioContainer row gallery">
                    {loadPortfolio()}
                  </ul>
              </div>
            </section>
              <div className="modal fade" id="portfolioModal" tabIndex="-1" role="dialog" aria-labelledby="portfolioModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="portfolioModalLabel">{singlePortfolio[0]== undefined ?'' :singlePortfolio[0].name}</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <p> <b> Name : </b>  {singlePortfolio[0]== undefined ?'' :singlePortfolio[0].name}</p>
                      <p> <b> Stack : </b> {singlePortfolio[0]== undefined ?'' :singlePortfolio[0].stack}</p>
                      <p> <b> Project Description : </b> {singlePortfolio[0]== undefined ?'' :singlePortfolio[0].description}</p>
                      <p> <b> Status : </b> {singlePortfolio[0]== undefined ?'' : (singlePortfolio[0].is_completed ? 'Completed' : 'On-going' )}</p>
                    </div>
                    <div className="modal-footer">
                      {singlePortfolio[0]== undefined ? '' : (singlePortfolio[0].url ?  <a href={singlePortfolio[0].url} target="_blank" type="button" className="btn btn-primary btn-sm" > View </a> : '' )}
                    </div>
                  </div>
                </div>
              </div>

          </div>
        </div>
    )
}
