import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import ReactTooltip from 'react-tooltip';
import Header from "../layout/header"
import Footer from "../layout/footer"
import listbanner from  "../image/reputationbanner.jpg"
import localimg from "../image/local-img.png"
import colonimg from "../image/colonimg.png"
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


export default class listingManagement extends Component {
  // componentDidMount(){
  //   var dataLayer = window.dataLayer || [];
  //   $(".listing-find-out-more").on("click", function() {
  //     dataLayer.push({
  //       "event": "trackEvent",
  //       "eventCategory": "Find Out more",
  //       "eventAction": "Contact us click"
  //     });
    
  //     console.log('dataLayer: '+JSON.stringify(dataLayer[dataLayer.length -1]));
  //   });
  // }
  render() {
    return (
      <div className="convergensee-wrapper convergensee-listingManagement">
          <Helmet>
            <title>{"Local Business Listings Management Service | ConvergenSEE"}</title>
            <meta
              name="description"
              content="Comprehensive location data syndication with an emphasis on GBP/Google Maps optimization."
            />
            <link rel="canonical" href={"/listings-management"} />
            <meta name="twitter:description" content="Comprehensive location data syndication with an emphasis on GBP/Google Maps optimization."></meta>
            <meta name="facebook:title" content="Local Business Listings Management Service | ConvergenSEE"></meta>
            <meta property='og:type' content='website' />
            <meta property="og:title" content="Local Business Listings Management Service | ConvergenSEE" ></meta>
            <meta property="og:description" content="Comprehensive location data syndication with an emphasis on GBP/Google Maps optimization." ></meta>
            <meta property='og:site_name' content="Convergensee" />
            <meta property="og:url" content={window.location.href} ></meta>
          </Helmet>
          <Header></Header>
          <main role="main">
            <div className="container-fluid convergensee-main">
              <h1 className="main-head" id="main" tabIndex="-1"> Local Listings Management </h1>
              <div className="col-md-12 text-center pt-4">
                <img className="img-fluid" src={listbanner} alt="Google Maps results page displayed" />
              </div>
            </div>

            <div className="container convergensee-main pt-0">

              <div className="convergensee-bg-white">
                <div className="container">
                  <div className="col-lg-9 col-md-12 m-auto px-0">
                    <h2 className="sub-head text-center my-4">Comprehensive location data syndication with an emphasis on GBP/Google Maps optimization</h2>
                    <div className="subtext">In order to thrive in local search, your clients must claim, monitor, and curate all of their GBP/Google Maps locations—including user-generated location edits. Doing so has a tremendous impact on their business and, as such, is a primary focus of our listings management.</div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-lg-5">
                      <img src={localimg} alt="Group of young people gathered around a laptop" className="img-fluid"></img>
                    </div>
                    <div className="col-lg-7 local-box-main-padng">                    
                      <p className="subtext mt-4"> However, because Google is not the only platform consumers will use to find your brand and your brick-and-mortar locations, you must have a multi-platform and multi-device strategy. ConvergenSEE ensures that you do by making sure your local business information is accurate, up-to-date, and compelling across all digital discovery platforms, including: </p>
                      
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
                            <span>Digital maps	</span>
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
                            <span>Online directories	</span>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="convergensee-bg-theme">
              <div className="container">
                <h2 className="sub-head text-center mb-4">What makes our listings management service unique?</h2>
                {/* <p className="subtext text-lg-center text-left my-3">via mobile devices, tablets, or laptops - is vital to today's consumer journey. What does this mean? It means making sure your local business information is accurate, up-to-date, and compelling across all digital discovery platforms including:</p> */}
                <ul className="ul-divide-main p-0">
                  <li className="ul-divide">
                    <span className="subtext-bold">Service, service, service: </span> Data cleansing, data formatting, updates to listings, ongoing listing management, and listing optimization is hard work. Leave it all to us.
                  </li>
                  <li className="ul-divide">
                    <span className="subtext-bold">Quality distribution network: </span> We use paid relationships with consumer discovery platforms to ensure all data is correct online for sites like Google, Apple, Bing, Facebook, and many others.
                  </li>
                  <li className="ul-divide">
                    <span className="subtext-bold">Data validation and accuracy: </span> ConvergenSEE cleans and validates your clients’ data prior to data syndication via our proprietary standardization process. This ensures data accuracy and proper citation management.
                  </li>
                  <li className="ul-divide">
                    <span className="subtext-bold">Data-driven optimization recommendations: </span> Our proprietary Local Rank+ tool enables us to see how your clients’ location and their competitor's locations rank for the keywords that are most relevant to the brand based on a searcher's proximity to your physical location. This allows for focused GBP optimization efforts and insights for other local marketing efforts like local SEO and Google Ads.
                  </li>
                </ul>
              </div>
            </div>
            

            <div className="convergensee-bg-white local-listing-management">
              <div className="container">
                <h3 className="sub-head text-center">Benefits of Local Listings Management </h3>
                <p className="subtext text-center my-3">The benefits of proper <span className="subtext-bold"> Local Listings Management</span> through ConvergenSEE include:</p>
                <div className="row local-box-main pl-3 px-md-5">
                  <ul className="col-md-12 mb-0 locallist-ul">
                    <li className="local-box-brdrlist">
                      Increased sales per location
                    </li>
                    <li className="local-box-brdrlist">
                      Increased brand visibility
                    </li>
                    <li className="local-box-brdrlist">
                      Increased customer satisfaction
                    </li>
                    <li className="local-box-brdrlist">
                      Increased customer foot traffic
                    </li>
                    <li className="local-box-brdrlist">
                      Increased local search rank 
                    </li>
                    <li className="local-box-brdrlist">
                      Single source of truth for data syndication
                    </li>
                  {/* </ul> */}

                  {/* <ul className="col-md-6 mb-0"> */}
                    <li className="local-box-brdrlist">
                      Robust data insights and reporting
                    </li>
                    <li className="local-box-brdrlist">
                      Data consistency
                    </li>
                    <li className="local-box-brdrlist">
                      Duplicate suppression and deletion
                    </li>
                    <li className="local-box-brdrlist">
                      Dedicated customer and operational support
                    </li>
                    <li className="local-box-brdrlist">
                      Reduced staff involvement and labor costs
                    </li>
                    <li className="local-box-brdrlist">
                      Direct relationships with publisher platforms
                    </li>
                  </ul>
                  <div className="col-md-12 text-center mt-4">
                    <Link to="/contact" role="button" className="commonButtonBrdr ml-0 listing-find-out-more">FIND OUT MORE</Link>
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
