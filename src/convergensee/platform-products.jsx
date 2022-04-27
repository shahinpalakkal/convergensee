import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from "../layout/header"
import Footer from "../layout/footer"
// import colonimg from "../image/colonimg.png"  
import listImg from "../image/listImg.png"  
import reputationImg from "../image/reputationImg.png"
import googleImg from "../image/googleImg.png"  
import locatorImg from "../image/locatorImg.png" 
import $ from "jquery" 

export default class platformProducts extends Component {

  componentDidMount(){
    var dataLayer = window.dataLayer || [];
    $(".local-listing-management-learn-more").on("click", function() {
      dataLayer.push({
        "event": "trackEvent",
        "eventCategory": "Local Listing Management",
        "eventAction": "Local Listing Management click"
      });
    
      console.log('dataLayer: '+JSON.stringify(dataLayer[dataLayer.length -1]));
    });
  }
  render() {
    return (
      <div className="convergensee-wrapper">
          <Helmet>
            <title>{"Online Presence Management Platform & Products | ConvergenSEE"}</title>
            <meta
              name="description"
              content="If customers can’t find you, you don’t exist. Make sure your business is listed accurately and optimized across GBP/Google Maps, Apple Maps, in-car navigation systems, and local and vertical online directories. Do you know what your local customers and communities are saying about you—and how you can use this feedback to improve your business? Are you responding to reviews in a timely fashion? Are you equipped to handle this for 10s, 100s, or 1,000s of locations? Local Rank + and a Complete Local Search Analytics Dashboard. Make sure your customers can easily locate, contact, and conduct business with the store of their choice. Quickly launch a robust, search-engine-optimzied locator and local pages for all your brick-and-mortar locations ensuring your customers can find you."
            />
            <link rel="canonical" href={"/platform-products"} /> 
            <meta name="twitter:description" content="If customers can’t find you, you don’t exist. Make sure your business is listed accurately and optimized across GBP/Google Maps, Apple Maps, in-car navigation systems, and local and vertical online directories. Do you know what your local customers and communities are saying about you—and how you can use this feedback to improve your business? Are you responding to reviews in a timely fashion? Are you equipped to handle this for 10s, 100s, or 1,000s of locations? Local Rank + and a Complete Local Search Analytics Dashboard. Make sure your customers can easily locate, contact, and conduct business with the store of their choice. Quickly launch a robust, search-engine-optimzied locator and local pages for all your brick-and-mortar locations ensuring your customers can find you."></meta>
            <meta name="facebook:title" content="Online Presence Management Platform & Products | ConvergenSEE"></meta>
            <meta property='og:type' content='website' />
            <meta property="og:title" content="Online Presence Management Platform & Products | ConvergenSEE" ></meta>
            <meta property="og:description" content="If customers can’t find you, you don’t exist. Make sure your business is listed accurately and optimized across GBP/Google Maps, Apple Maps, in-car navigation systems, and local and vertical online directories. Do you know what your local customers and communities are saying about you—and how you can use this feedback to improve your business? Are you responding to reviews in a timely fashion? Are you equipped to handle this for 10s, 100s, or 1,000s of locations? Local Rank + and a Complete Local Search Analytics Dashboard. Make sure your customers can easily locate, contact, and conduct business with the store of their choice. Quickly launch a robust, search-engine-optimzied locator and local pages for all your brick-and-mortar locations ensuring your customers can find you." ></meta>
            <meta property='og:site_name' content="Convergensee" />
            <meta property="og:url" content={window.location.href} ></meta>
          </Helmet>
          <Header></Header>
          <main role="main">
            <div className="container convergensee-main partner-main">
              <h1 className="main-head" id="main" tabIndex="-1"> Online Presence Management Platform & Products </h1>
              <div className="row mt-3">
                <div className="col-lg-5 mt-0 mt-lg-5"> 
                  <h2 className="sub-head sub-head-bold">Local Listing Management</h2>
                  <p className="subtext mt-3 mb-4"> If customers can’t find you, you don’t exist. Make sure your business is listed accurately and optimized across GBP/Google Maps, Apple Maps, in-car navigation systems, and local and vertical online directories.</p>
                  <a href="/listings-management" role="button" className="commonButtonBrdr ml-0 local-listing-management-learn-more">Learn More</a>
                </div>
                <div className="col-lg-7 text-center">
                  <img src={listImg} alt="Financial report displayed on a tablet" className="img-fluid"></img>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-lg-7 text-center">
                  <img src={reputationImg} alt="Financial dashboard displayed on a tablet" className="img-fluid"></img>
                </div>
                <div className="col-lg-5 mt-0 mt-lg-5"> 
                  <h2 className="sub-head sub-head-bold">Online Reputation Management</h2>
                  <p className="subtext mt-3 mb-4"> Do you know what your local customers and communities are saying about you—and how you can use this feedback to improve your business? Are you responding to reviews in a timely fashion? Are you equipped to handle this for 10s, 100s, or 1,000s of locations? </p>
                  <a href="/reputation-management" role="button" className="commonButtonBrdr ml-0">Learn More</a>
                </div>
              </div>
              
              <div className="row my-5">
                <div className="col-lg-5 mt-0 mt-lg-5"> 
                  <h2 className="sub-head"><span className="sub-head-bold">Local Rank+ and a Complete Local Search Analytics Dashboard</span></h2>
                  <p className="subtext mt-3 mb-2"> Combine our Local Rank+ tool with a robust online dashboard and email reports to uncover priceless insights into:</p>
                
                  <ul className="pl-3">
                      <li className="local-box-reputationli">
                        Keyword rankings based on a searcher's proximity to your business
                      </li>
                      <li className="local-box-reputationli">
                        Requests for driving directions
                      </li>
                      <li className="local-box-reputationli">
                        Listing visibility, accuracy, and content analysis data
                      </li>
                      <li className="local-box-reputationli">
                        Data syndication status
                      </li>
                      <li className="local-box-reputationli">
                        Review report cards
                      </li>               
                    </ul>
                    <div className="col-lg-12 mt-0 mt-lg-3"> 
                      <a href="/local-rank" role="button" className="commonButtonBrdr ml-0">Learn More</a>
                    </div>
                </div>
                <div className="col-lg-7 text-center">
                  <img src={googleImg} alt="Various graphs displayed on a tablet" className="img-fluid"></img>
                </div>
              </div>

              <div className="row pb-4 pb-md-0">
                <div className="col-lg-7 text-center">
                  <img src={locatorImg} alt="Financial dashboard displayed on a tablet" className="img-fluid"></img>
                </div>
                <div className="col-lg-5 mt-0 mt-lg-5"> 
                  <h2 className="sub-head sub-head-bold">Locator & Local Pages</h2>
                  <p className="subtext mt-3 mb-4"> Make sure your customers can easily locate, contact, and conduct business with the store of their choice. Quickly launch a robust, search-engine-optimzied locator and local pages for all your brick-and-mortar locations ensuring your customers can find you.</p>
                  <a href="/locator-local" role="button" className="commonButtonBrdr ml-0">Learn More</a>
                </div>
              </div>

            </div>
          </main>
          <Footer></Footer>
      </div>
    )
  }
}
