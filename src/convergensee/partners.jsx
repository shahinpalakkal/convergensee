import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from "../layout/header"
import Footer from "../layout/footer"
// import colonimg from "../image/colonimg.png"  
// import partnerimg1 from "../image/partner-img1.png"  
import partnerimg2 from "../image/partner-img2.png" 
import $ from "jquery" 
import {Link} from "react-router-dom";

export default class partners extends Component {
  componentDidMount()
  {
    $("#link-partners").addClass("link-active");

      // var dataLayer = window.dataLayer || [];
      // $(".partners-get-more-info").on("click", function() {
      //   dataLayer.push({
      //     "event": "trackEvent",
      //     "eventCategory": "Get More Info",
      //     "eventAction": "Partners get more info click"
      //   });
      
      //   console.log('dataLayer: '+JSON.stringify(dataLayer[dataLayer.length -1]));
      // });
   
  }
  render() {
    return (
      <div className="convergensee-wrapper">
          <Helmet>
            <title>{"Partner with Online Presence Management Platform | ConvergenSEE "}</title>
            <meta
              name="description"
              content="ConvergenSEE provides agency partners with a full-service white-label solution. This includes software and services that enable you to meet your clients' local listings, reputation management, and local pages needs. We provide your agency with the expertise, technology platform, and associated services to deliver real value while freeing up resources to support your clients across the entire breadth of your service offerings."
            />
            <link rel="canonical" href={"/partners"} />
            <meta name="twitter:description" content="ConvergenSEE provides agency partners with a full-service white-label solution. This includes software and services that enable you to meet your clients' local listings, reputation management, and local pages needs. We provide your agency with the expertise, technology platform, and associated services to deliver real value while freeing up resources to support your clients across the entire breadth of your service offerings."></meta>
            <meta name="facebook:title" content="Partner with Online Presence Management Platform | ConvergenSEE"></meta>
            <meta property='og:type' content='website' />
            <meta property="og:title" content="Partner with Online Presence Management Platform | ConvergenSEE" ></meta>
            <meta property="og:description" content="ConvergenSEE provides agency partners with a full-service white-label solution. This includes software and services that enable you to meet your clients' local listings, reputation management, and local pages needs. We provide your agency with the expertise, technology platform, and associated services to deliver real value while freeing up resources to support your clients across the entire breadth of your service offerings." ></meta>
            <meta property='og:site_name' content="Convergensee" />
            <meta property="og:url" content={window.location.href} ></meta>
          </Helmet>
          <Header></Header>
            <main role="main">
              <div className="container convergensee-main partner-main">
                <h1 className="main-head" id="main" tabIndex="-1"> ConvergenSEE for Partners </h1>
                {/* <div className="row mt-3">
                  <div className="col-lg-6 mt-0 mt-lg-5"> 
                    <h2 className="sub-head sub-head-bold">Working With Agencies</h2>
                    <p className="subtext mt-3 mb-4"> ConvergenSEE provides agency partners with a full-service white-label solution. This includes software and services that enable you to meet your clients' local listings, reputation management, and local pages needs. We provide your agency with the expertise, technology platform, and associated services to deliver real value while freeing up resources to support your clients across the entire breadth of your service offerings. </p>
                    <a href="/contact" role="button" className="commonButtonBrdr ml-0">Get More Info Today</a>
                  </div>
                  <div className="col-lg-6 partner-leftpadng">
                    <img src={partnerimg1} alt="Team members doing a brainstorming exercise" className="img-fluid"></img>
                  </div>
                </div> */}

                <div className="row partner-m-top">
                  <div className="col-lg-6 partner-rightpadng">
                    <img src={partnerimg2} alt="Two women look at a computer screen" className="img-fluid"></img>
                  </div>
                  <div className="col-lg-6 mt-0 mt-md-5"> 
                    <h2 className="sub-head sub-head-bold">Publishers and other SMB resellers</h2>
                    <p className="subtext mt-3 mb-4">The ConvergenSEE platform enables publishers and SMB resellers to cost-effectively deliver listings and reputation management products to your client base. This can be easily integrated into  current and future digital marketing packages at scale. </p>
                    <Link to="/contact" role="button" className="commonButtonBrdr ml-0 partners-get-more-info">Get More Info Today</Link>
                  </div>
                </div>
              </div>
            </main>
          <Footer></Footer>
      </div>
    )
  }
}
