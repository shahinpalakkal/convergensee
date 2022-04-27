import React, { Component } from 'react';
import partnerimg1 from "../image/partner-img1.png"  
import {Link} from "react-router-dom";
import $ from "jquery"

export default class CustomerJourney extends Component {

  // componentDidMount(){
  //   var dataLayer = window.dataLayer || [];
  //   $(".get-more-info").on("click", function() {
  //     var datalayeraction = $(this).text();
  //     var datalayerhrefClick = $(this).attr("href").replace('/', '');
  //     dataLayer.push({
  //       "event": "trackEvent",
  //       "eventCategory": "Contact",
  //       "eventLabel":datalayerhrefClick,
  //       "eventAction": datalayeraction+" click"
  //     });
    
  //     console.log('dataLayer: '+JSON.stringify(dataLayer[dataLayer.length -1]));
  //   });
  // }
  render() {
    return (

      <div className="container working-agency-main">                    
             <div className="row mt-3">
                  <div className="col-lg-6 mt-0 mt-lg-5"> 
                    <h2 className="sub-head sub-head-bold">Agencies</h2>
                    <p className="subtext mt-3 mb-4"> ConvergenSEE provides agency partners with a full-service white-label solution. This includes software and services that enable you to meet your clients' local listings, reputation management, and local pages needs. We provide your agency with the expertise, technology platform, and associated services to deliver real value while freeing up resources to support your clients across the entire breadth of your service offerings. </p>
                    <Link to="/contact" role="button" className="commonButtonBrdr ml-0 get-more-info">Get More Info Today</Link>
                  </div>
                  <div className="col-lg-6 partner-leftpadng">
                    <img src={partnerimg1} alt="Team members doing a brainstorming exercise" className="img-fluid"></img>
                  </div>
                </div>
    </div>

    )
  }
}
