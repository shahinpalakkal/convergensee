import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from "../layout/header"
import Footer from "../layout/footer"
import reputationbanner from  "../image/reputationbanner.png"
// import localimg from "../image/local-img.png"
// import colonimg from "../image/colonimg.png"
import reputation from "../image/reputation.png";
import {Link} from "react-router-dom";

export default class reputationManagement extends Component {
  render() {
    return (
      <div className="convergensee-wrapper convergensee-reputationManagement">
          <Helmet>
            <title>{"Online Reputation Management Services | ConvergenSEE"}</title>
            <meta
              name="description"
              content="Do you know what your local customers and communities are saying about you—and how you can use this feedback to improve your business? Are you responding to reviews in a timely fashion? Are you equipped to handle this for 10s, 100s, or 1,000s of locations?"
            />
            <link rel="canonical" href={"/reputation-management"} /> 
            <meta name="twitter:description" content="Do you know what your local customers and communities are saying about you—and how you can use this feedback to improve your business? Are you responding to reviews in a timely fashion? Are you equipped to handle this for 10s, 100s, or 1,000s of locations?"></meta>
            <meta name="facebook:title" content="Online Reputation Management Services | ConvergenSEE"></meta>
            <meta property='og:type' content='website' />
            <meta property="og:title" content="Online Reputation Management Services | ConvergenSEE" ></meta>
            <meta property="og:description" content="Do you know what your local customers and communities are saying about you—and how you can use this feedback to improve your business? Are you responding to reviews in a timely fashion? Are you equipped to handle this for 10s, 100s, or 1,000s of locations?" ></meta>
            <meta property='og:site_name' content="Convergensee" />
            <meta property="og:url" content={window.location.href} ></meta>
          </Helmet>
          <Header></Header>
          <main role="main">
            <div className="col-lg-9 col-md-12 m-auto convergensee-main">
              <h1 className="main-head" id="main" tabIndex="-1"> Online Reputation Management </h1>
              <div className="col-md-12 platform-top-banner">
                <img className="img-fluid" src={reputationbanner} alt="Honeycomb pattern banner with the words Respond, Encourage, Analyze, and Monitor"/>
              </div>

              <div className="convergensee-bg-white">
                <div className="reputationImg">
                  <img src={reputation} alt="Man in business attire working at a computer" className="img-fluid"/>
                </div>
                <div className="ReputationDiv">
                  <h2 className="sub-head">Reputation tools and reporting</h2>
                  <div className="subtext my-4">Do you know what your local customers and communities are saying about you—and how you can use this feedback to improve your business? Are you responding to reviews in a timely fashion? Are you equipped to handle this for 10s, 100s, or 1,000s of locations?</div>
                  <div className="subtext p-0">With ConvergenSEE's unique suite of Reputation Management tools, you will be able to:</div>
                  <div className="row local-box-reputation mt-4">
                    <ul>
                      <li className="local-box-reputationli">Manage your brand at the local level</li>
                      <li className="local-box-reputationli">Enhance consumer trust</li>
                      <li className="local-box-reputationli">Influence consumer purchase decisions</li>
                      <li className="local-box-reputationli">Improve customer service response times</li>
                      <li className="local-box-reputationli">Encourage new customer reviews</li>
                    </ul>
                    {/* <ul className="col-md-6">
                      <ol className="local-box-brdrlist">
                        <img src={colonimg} alt="colon img"></img>
                        Manage your brand at the local level
                      </ol>
                      <ol className="local-box-brdrlist">
                        <img src={colonimg} alt="colon img"></img>
                        Enhance consumer trust 
                      </ol>
                      <ol className="local-box-brdrlist">
                        <img src={colonimg} alt="colon img"></img>
                        Influence consumer purchase decisions
                      </ol>
                    </ul>

                    <ul className="col-md-6">
                      <ol className="local-box-brdrlist">
                        <img src={colonimg} alt="colon img"></img>
                        Improve customer service response times
                      </ol>
                      <ol className="local-box-brdrlist">
                        <img src={colonimg} alt="colon img"></img>
                        Encourage new customer reviews
                      </ol>
                    </ul> */}
                  </div>
                </div>
              </div>

            </div>

            <div className="convergensee-bg-theme">
              <div className="container">
                <h2 className="sub-head text-center mb-5">Features of the platform include:</h2>
                <ul className="ul-divide-main p-0">
                  <li className="ul-divide mb-4">
                    <span>A single online interface to monitor and manage all reviews across major review websites and apps including:</span> <br />
                    <span>GBP/Google, Facebook, Foursquare, Yelp, Trip Advisor, YP.com, YP.ca, SuperPages </span>
                    {/* <ul className="subtext-bold mt-3">
                        <li>(GBP/Google </li>
                        <li>Facebook </li>
                        <li>Foursquare  </li>
                        <li>Yelp  </li>
                        <li>Trip Advisor  </li>
                        <li>YP.com  </li>
                        <li>YP.ca  </li>
                        <li>SuperPages) </li>
                    </ul> */}
                  </li>
                  <li className="ul-divide">
                    <span>A broad range of review response options including Custom, Pre-Written/Templated, or Automated Review Responses</span>
                  </li>
                  <li className="ul-divide">
                    <span>Unlimited users</span>
                  </li>
                  <li className="ul-divide">
                    <span>Customer Feedback/Request Reviews functionality</span>
                  </li>
                  <li className="ul-divide">
                    <span>Automated review and support email notifications  </span>              
                  </li>
                  <li className="ul-divide">
                    <span>Review Report Cards, Sentiment Analysis, and a variety of other insightful reporting tools Review Report Cards, Sentiment Analysis, and a variety of other insightful reporting tools</span>         
                  </li>
                </ul>
              </div>
            </div>
            

            <div className="convergensee-bg-white reputation-management">
              <div className="container">
                <h3 className="sub-head text-center">Benefits</h3>
                <p className="subtext text-center my-3">The benefits of proper <span className="subtext-bold"> Reputation Management</span> through ConvergenSEE include:</p>
                <div className="row local-box-main pl-3 px-md-5">
                  <ul className="col-md-12 locallist-ul mb-0">
                    <li className="local-box-brdrlist">
                    Increased customer satisfaction   
                    </li>
                    <li className="local-box-brdrlist">
                    Increased local search rank
                    </li>
                    <li className="local-box-brdrlist col-md-11">
                    Improved insight into local business operations and customer service levels
                    </li>
   
                    <li className="local-box-brdrlist">
                    Single source of truth for review monitoring and review responses
                    </li>
                    <li className="local-box-brdrlist">
                    Robust review insights, sentiment analysis, and reporting   
                    </li>
                    <li className="local-box-brdrlist">
                    Reduced staff involvement and labor costs
                    </li>
                  </ul>

                  <div className="col-md-12 text-center mt-4">
                    <Link to="/contact" role="button" className="commonButtonBrdr ml-0">FIND OUT MORE</Link>
                    {/* <a href="./contact" role="button" className="commonButton ml-0">SCHEDULE A DEMO TODAY!</a> */}
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer></Footer>
      </div>
    )
  }
}
