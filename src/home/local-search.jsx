import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import localimg from "../image/local-img.png"
import localimg1 from "../image/local-img1.png"
import localimg2 from "../image/local-img2.png"
// import colonimg from "../image/colonimg.png"
// import Logoblack from  "../image/logo-black.png"
import googleicon from "../image/icons/google.png"
import bingicon from "../image/icons/bing.png"
import googlemapicon from "../image/icons/googlemap.png"
import applemapicon from "../image/icons/applemap.png"
import bingmapicon from "../image/icons/bingmap.png"
import facebookicon from "../image/icons/facebookicon.png"
import whatsAppicon from "../image/icons/whatsApp.png"
import wazeicon from "../image/icons/waze.png"
import ubericon from "../image/icons/uber.png"
import tomtomicon from "../image/icons/tomtom.png"
import tripAdvisoricon from "../image/icons/tripAdvisor.png"
import zomatoicon from "../image/icons/zomato.png"
import siriicon from "../image/icons/siri.png"
import googleAssistanticon from "../image/icons/googleAssistant.png"
import alexaicon from "../image/icons/alexa.png"
import cortanaicon from "../image/icons/cortana.png"
import $ from "jquery"
import {Link} from "react-router-dom";

export default class LocalSearch extends Component {
  // componentDidMount(){
  //   var dataLayer = window.dataLayer || [];
  //   $(".schedule-demo").on("click", function() {
  //     dataLayer.push({
  //       "event": "trackEvent",
  //       "eventCategory": "Schedule a demo today Home page",
  //       "eventAction": "SCHEDULE A DEMO TODAY click"
  //     });
    
  //     console.log('dataLayer: '+JSON.stringify(dataLayer[dataLayer.length -1]));
  //   });
  // }
  render() {
    return (

      <div className="container-fluid p-0 local-search-wrapper">
        <div className="convergensee-bg-theme">
          <div className="container">
            <div className="local-toptext">
              <h2 className="local-head">What is local search?</h2>
              <p className="subtext">Local search via mobile devices, tablets, and laptops is vital to today's consumer journey. What does this mean for you? It means making sure your local business information is accurate, up-to-date, and compelling across all digital discovery platforms, including:</p>
            </div>

            <div className="row mt-5">
              <div className="col-lg-5">
                <img src={localimg} alt="Group of young people gathered around a laptop" className="img-fluid"></img>
              </div>
              <div className="col-lg-7 local-box-main-padng">
                <ul className="local-box-main">
                  <li className="local-box-list">
                    <div className="local-box-list-left">
                      <span>Search engines</span>
                    </div>
                    {/* <div className="local-box-list-right"> (Google, Bing, etc.) </div> */}
                    <div className="local-box-list-right"> 
                      <a data-tip role="none" data-for='googleicon'> 
                        <span className="local-box-icon"><img src={googleicon} alt="google icon"></img></span> 
                        <ReactTooltip id='googleicon' type='warning' effect='solid'>
                          <span>Google</span>
                        </ReactTooltip> 
                      </a>
                      <a data-tip role="none" data-for='bingicon'> 
                        <span className="local-box-icon"><img src={bingicon} alt="bing icon"></img></span> 
                        <ReactTooltip id='bingicon' type='warning' effect='solid'>
                          <span>Bing</span>
                        </ReactTooltip> 
                      </a>
                    </div>
                  </li>
                  <li className="local-box-list">
                    <div className="local-box-list-left">
                      <span> Digital maps	</span>
                    </div>
                    {/* <div className="local-box-list-right"> (Google Maps, Apple Maps, Bing Maps, etc.) </div> */}
                    <div className="local-box-list-right"> 
                      <a data-tip role="none" data-for='googlemapicon'> 
                        <span className="local-box-icon"><img src={googlemapicon} alt="google map icon"></img></span> 
                        <ReactTooltip id='googlemapicon' type='warning' effect='solid'>
                          <span>Google Maps</span>
                        </ReactTooltip> 
                      </a>
                      <a data-tip role="none" data-for='applemapicon'> 
                        <span className="local-box-icon"><img src={applemapicon} alt="apple map icon"></img></span>
                        <ReactTooltip id='applemapicon' type='warning' effect='solid'>
                          <span>Apple Maps</span>
                        </ReactTooltip> 
                      </a> 
                      <a data-tip role="none" data-for='bingmapicon'> 
                        <span className="local-box-icon"><img src={bingmapicon} alt="bing map icon"></img></span> 
                        <ReactTooltip id='bingmapicon' type='warning' effect='solid'>
                          <span>Bing Maps</span>
                        </ReactTooltip> 
                      </a>
                    </div>
                  </li>
                  <li className="local-box-list">
                    <div className="local-box-list-left">
                      <span>Mobile apps	</span>
                    </div>
                    {/* <div className="local-box-list-right"> (Facebook, WhatsApp, Waze, Uber, TomTom, etc.) </div> */}
                    <div className="local-box-list-right"> 
                      <a data-tip role="none" data-for='facebookicon'> 
                        <span className="local-box-icon"><img src={facebookicon} alt="facebook icon"></img></span>
                        <ReactTooltip id='facebookicon' type='warning' effect='solid'>
                          <span>Facebook</span>
                        </ReactTooltip> 
                      </a> 
                      <a data-tip role="none" data-for='whatsAppicon'> 
                      <span className="local-box-icon"><img src={whatsAppicon} alt="whatsApp icon"></img></span> 
                        <ReactTooltip id='whatsAppicon' type='warning' effect='solid'>
                          <span>WhatsApp</span>
                        </ReactTooltip> 
                      </a> 
                      <a data-tip role="none" data-for='wazeicon'> 
                      <span className="local-box-icon"><img src={wazeicon} alt="waze icon"></img></span> 
                        <ReactTooltip id='wazeicon' type='warning' effect='solid'>
                          <span>Waze</span>
                        </ReactTooltip> 
                      </a> 
                      <a data-tip role="none" data-for='ubericon'> 
                      <span className="local-box-icon"><img src={ubericon} alt="uber icon"></img></span> 
                        <ReactTooltip id='ubericon' type='warning' effect='solid'>
                          <span>Uber</span>
                        </ReactTooltip> 
                      </a> 
                      <a data-tip role="none" data-for='tomtomicon'> 
                      <span className="local-box-icon"><img src={tomtomicon} alt="tomtom icon"></img></span> 
                        <ReactTooltip id='tomtomicon' type='warning' effect='solid'>
                          <span>TomTom</span>
                        </ReactTooltip> 
                      </a> 
                    </div>
                  </li>
                  <li className="local-box-list">
                    <div className="local-box-list-left">
                      <span>Online directories</span>
                    </div>
                    {/* <div className="local-box-list-right"> (TripAdvisor, Zomato, etc.) </div> */}
                    <div className="local-box-list-right"> 
                      <a data-tip role="none" data-for='tripAdvisoricon'> 
                        <span className="local-box-icon"><img src={tripAdvisoricon} alt="tripAdvisor icon"></img></span> 
                        <ReactTooltip id='tripAdvisoricon' type='warning' effect='solid'>
                          <span>TripAdvisor</span>
                        </ReactTooltip> 
                      </a> 
                      <a data-tip role="none" data-for='zomatoicon'> 
                        <span className="local-box-icon"><img src={zomatoicon} alt="zomato icon"></img></span> 
                        <ReactTooltip id='zomatoicon' type='warning' effect='solid'>
                          <span>Zomato</span>
                        </ReactTooltip> 
                      </a> 
                    </div>
                  </li>
                  <li className="local-box-list">
                    <div className="local-box-list-left">
                      <span>Voice search assistants</span>
                    </div>
                    {/* <div className="local-box-list-right"> (Siri, Google Assistant, Alexa, Cortana, etc.) </div> */}

                    <div className="local-box-list-right"> 
                      <a data-tip role="none" data-for='siriicon'> 
                        <span className="local-box-icon"><img src={siriicon} alt="siri icon"></img></span> 
                        <ReactTooltip id='siriicon' type='warning' effect='solid'>
                          <span>Siri</span>
                        </ReactTooltip> 
                      </a> 
                      <a data-tip role="none" data-for='googleAssistanticon'> 
                        <span className="local-box-icon"><img src={googleAssistanticon} alt="google Assistant icon"></img></span> 
                        <ReactTooltip id='googleAssistanticon' type='warning' effect='solid'>
                          <span>Google Assistant</span>
                        </ReactTooltip> 
                      </a> 
                      <a data-tip role="none" data-for='alexaicon'> 
                        <span className="local-box-icon"><img src={alexaicon} alt="alexa icon"></img></span> 
                        <ReactTooltip id='alexaicon' type='warning' effect='solid'>
                          <span>Alexa</span>
                        </ReactTooltip> 
                      </a> 
                      <a data-tip role="none" data-for='cortanaicon'> 
                        <span className="local-box-icon"><img src={cortanaicon} alt="cortana icon"></img></span> 
                        <ReactTooltip id='cortanaicon' type='warning' effect='solid'>
                          <span>Cortana</span>
                        </ReactTooltip> 
                      </a> 
                    </div>
                  </li>
                </ul>
                <p className="subtext mt-4">Of equal importance is your clients’ ability to engage with their customers through local online reviews. After all, 88% of consumers trust online reviews as much as personal recommendations. It's imperative that your clients not only monitors these reviews at the local level, but that they respond in a proactive and timely fashion.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="convergensee-bg-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 local-box-main-padng mt-0 mt-md-5"> 
                {/* <img src={Logoblack} alt="Logo black" className="img-fluid" width="200"></img> */}
                <h3 className="sub-head my-4">Our Digital Presence Management <span className="d-block" role="heading">platform enables your brand to</span>
                </h3>
                <ul className="pl-3">
                  <li className="local-box-reputationli">
                    Collect all local reviews across platforms (Google, Bing, etc.) in a single interface.
                  </li>
                  <li className="local-box-reputationli">
                    Respond to reviews individually or at scale via custom, templated, or automated response tools and technology.
                  </li>
                  <li className="local-box-reputationli">
                    Assess consumer sentiment and apply localized learnings to improve your clients’ business via platform-enabled Review Report Cards and Sentiment Analysis tools—and through engagement with our account teams during weekly meetings and quarterly business reviews.                  
                  </li>
                </ul>
              </div>
              <div className="col-lg-5">
                <img src={localimg1} alt="Group collaborating over some charts" className="img-fluid"></img>
              </div>
            </div>
          </div>
        </div>

        
        <div className="convergensee-bg-theme">
          <div className="container">
            <div className="local-toptext local-toptext-width">
              <h2 className="local-head">Managing this in-house can be costly</h2>
              <p className="subtext">It requires significant resources and well-defined processes. It also requires establishing and maintaining relationships with all the key players in the local search ecosystem. Managing this via an SaaS platform can be  costly in terms of both time and expense, and usually results in a more reactive approach with a less-than-optimal consumer experience.</p>
            </div>
            <div className="local-toptext local-toptext-width local-toptext-mtop">
              <h2 className="local-head">Partnering with us</h2>
              <p className="subtext">Partnering with ConvergenSEE, on the other hand, provides your brand with a Digital Presence Management platform and a unique service-first delivery model that enables you to cost-effectively and confidently syndicate, monitor, and update optimized location information without requiring your brand to make additional investments in people and processes.</p>
            </div>
          </div>
        </div>

        <div className="convergensee-bg-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <img src={localimg2} alt="Person working on laptop" className="img-fluid"></img>
              </div>
              <div className="col-lg-7 local-box-main-padng mt-0 mt-md-4"> 
                <p className="subtext"> ConvergenSEE's Digital Presence Management platform, combined with our service-first delivery model, is designed to enable your brand to maximize returns and deliver real value to consumers at every stage of their journey with your brand, resulting in:</p>
                <ul className="pl-3">
                  <li className="local-box-reputationli">
                    Increased customer satisfaction
                  </li>
                  <li className="local-box-reputationli">
                    Increased foot traffic at your locations
                  </li>
                  <li className="local-box-reputationli">
                    Increased sales per location
                  </li>
                  <li className="local-box-reputationli">
                    Increased brand visibility
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="convergensee-bg-white convergensee-makesure text-center">
          <div className="main-head mb-5">
            <span className="main-head-bold d-block" role="heading">Make sure your clients' locations</span>
            can be found everywhere
          </div>
          <Link to="/contact" role="button" className="commonButton schedule-demo">SCHEDULE A DEMO TODAY!</Link>
        </div>

      </div>

    )
  }
}
