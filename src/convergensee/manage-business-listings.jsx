import React, { Component } from 'react';
import Header from "../layout/header"
import Footer from "../layout/footer"
import MBLbanner from "../image/mbl-banner.png"
import MBLbannerBg from "../image/mbl-banner-bg.png"
import Googlesearch from "../image/Googlesearch-mbl.png"
import MBLForm from "./manage-business-list-form"
import Visible from "../image/visible.png"
import Brain from "../image/brain.png"
import projectManagement from "../image/project-management.png"
import MagnifyingGlass from "../image/magnifying-glass.png"
import Briefcase from "../image/briefcase.png"
import Reputation from "../image/reputation-img.png"
import Franchise from "../image/franchise.png"
import Location from "../image/location-img.png"
import Group from "../image/Group-mbl.png"

import $ from "jquery";
import { Helmet } from 'react-helmet-async';

export default class ManageBusinessListings extends Component {


  render() {
    // $(document).ready(function () {
      
    //   var windowSize = $(window).width();
    //   if (windowSize >= 993) {
    //       var fixmeTop = $('#mbl-formouterId').offset().top;

    //       $(window).scroll(function() {
    //         var currentScroll = $(window).scrollTop();
    //         if (currentScroll > fixmeTop) {
    //             $('#mbl-formouterId .mbl-frm-div').addClass("mbl-formouter-fixed")
    //         } 

    //         else {
    //           $('#mbl-formouterId .mbl-frm-div').removeClass("mbl-formouter-fixed")
    //         }
    //     });
    

    //     $(window).scroll(function() {
    //       var top_of_element = $('.footer').offset().top;
    //       var bottom_of_element = $('.footer').offset().top + $('.footer').outerHeight();
    //       var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    //       var top_of_screen = $(window).scrollTop();

    //       if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
    //         $('#mbl-formouterId .mbl-frm-div').addClass("mbl-formouter-fixed-bottom")
    //         $('#mbl-formouterId .mbl-frm-div').removeClass("mbl-formouter-fixed")
    //       } 
    //       else {
            
    //         $('#mbl-formouterId .mbl-frm-div').removeClass("mbl-formouter-fixed-bottom")
    //       }
    //       });
    //   }

    // });
 
    return (
      <div className="convergensee-wrapper mbl-wrapper">
        <Helmet>
          <title>{"Manage Business Listings | ConvergenSEE"}</title>
          <meta name='description' content={"Manage Business Listings"} />
          <link rel="canonical" href={"/manage-business-listings"} /> 
          <meta name="twitter:description" content="Manage Business Listings"></meta>
          <meta name="facebook:title" content="Manage Business Listings | ConvergenSEE"></meta>
          <meta property='og:type' content='website' />
          <meta property="og:title" content="Manage Business Listings | ConvergenSEE" ></meta>
          <meta property="og:description" content="Manage Business Listings" ></meta>
          <meta property='og:site_name' content="Convergensee" />
          <meta property="og:url" content={window.location.href} ></meta>
        </Helmet>
        
        <Header></Header>
        <main role="main">
          <div className="convergensee-main-mbl">
          
              <div className="mbl-banner">
                  {/* <img src={MBLbanner} alt="MBLbanner" className="mbl-banner-bg"/> */}
                  {/* <img src={MBLbannerBg} alt="MBLbannerBg" className='mbl-banner-bg-overlay' /> */}
                  <div className='mbl-banner-headdiv'>
                      <h3 className='mbl-banner-head'>turning <span>clicks</span> </h3>
                      <h3 className='mbl-banner-head'>into <span>walk-ins</span></h3>
                  </div>
                  <div className='mbl-banner-right'>
                     <img src={Googlesearch} alt="Google search" className='img-fluid'/>
                  </div>
              </div>
              

              <div className="container mbl-platformservice">
                    <h3 className='mbl-sub-head'>Platform & Services</h3>

                    <div className="mbl-platformservice-outer">
                          <div className='mbl-platformservice-div'>
                                <div className='mbl-platformservice-img'>
                                  <img src={Visible} alt="Visible" className="img-fluid"/>
                                </div>
                                <h3 className="mbl-platformsubhead">Be Visible.</h3>
                                <p>Your customers are looking 
                                    for you, we’ll help them find you 
                                    with a Google Business Profile. Updated addresses, phone numbers and CTAs - 
                                    we’ve got your digital back!
                                </p>
                          </div>

                          <div className='mbl-platformservice-div'>
                                <div className='mbl-platformservice-img'>
                                  <img src={Brain} alt="Brain" className="img-fluid"/>
                                </div>
                                <h3 className='mbl-platformsubhead'>Be Understood.</h3>
                                <p>Don’t let your customer 
                                  queries go unanswered. We’ll 
                                  make sure your customers
                                  hear your voice and keep 
                                  your digital reputation intact 
                                  via Reputation Management.
                                </p>
                          </div>

                          <div className='mbl-platformservice-div'>
                                <div className='mbl-platformservice-img'>
                                  <img src={MagnifyingGlass} alt="Magnifying Glass" className="img-fluid"/>
                                </div>
                                <h3 className='mbl-platformsubhead'>Be Found.</h3>
                                <p>Updated locator pages 
                                    will ensure your customers 
                                    get all of your information at one place – online. We’ll make sure your customers find the nearest location in a fewclicks.
                                </p>
                          </div>
                    </div>

                    <div className="mbl-servceOuter">
                    <a href="/"  target="_blank" rel="noopener noreferrer">
                        <div className="servcediv">
                              <img src={Briefcase} alt="Briefcase" />
                               <p className='servcediv-text'>Google Business Profile (GBP) </p>
                        </div>
                        </a>
                        <a href="/listings-management"  target="_blank" rel="noopener noreferrer">
                        <div className="servcediv">
                              <img src={projectManagement} alt="project management" />
                              <p className='servcediv-text'> Listings Management </p>
                        </div>
                        </a>
                        <a href="/reputation-management"  target="_blank" rel="noopener noreferrer">
                        <div className="servcediv">
                              <img src={Reputation} alt="Reputation" />
                               <p className='servcediv-text'>Reputation Management </p>

                        </div>
                        </a>

                        <a href="/local-rank" target="_blank" rel="noopener noreferrer"> 
                        <div className="servcediv">
                              <img src={Franchise} alt="Franchise" />
                             <p className='servcediv-text'> Store Locator </p>
                        </div>
                        </a>

                        <a href="/locator-local"  target="_blank" rel="noopener noreferrer">
                        <div className="servcediv">
                              <img src={Location} alt="Location" />
                              <p className='servcediv-text'>Location Pages </p> 

                        </div>
                        </a>
                    </div>
              </div>

              <div className="container mbl-you-convergensee">
              <h3 className='mbl-sub-head'>You & ConvergenSEE India</h3>
                <div className="mbl-you-convergensee-div mbl-yc-padd">
                    {/* <img src={Group} alt="You & ConvergenSEE India" className='img-fluid' /> */}
                    <div className="mbl-youconvergnsee-subdiv">
                          <div className="mbl-youconvergnsee-subdiv-top">2.7x </div>
                          <div className='mbl-youconverhensee-subtxt'>The number of times customers are likely to consider a business credible if they find a complete Business Profile on Google Search and Maps. </div>
                    
                    </div>
                    <div className="mbl-youconvergnsee-subdiv">
                        <div className="mbl-youconvergnsee-subdiv-top">70%</div>
                        <div className='mbl-youconverhensee-subtxt'>of customers are 
                            more likely to visit 
                            a business with 
                            an up-to-date 
                            Google Business Profile.
                            </div>
                      </div>
                      <div className="mbl-youconvergnsee-subdiv">
                          <div className="mbl-youconvergnsee-subdiv-top">50%</div>
                          <div className='mbl-youconverhensee-subtxt'>of customers are 
                            more likely to 
                            consider purchasing from businesses 
                            with a complete Google Business Profile.
                            </div>
                      </div>
                      <div className="mbl-youconvergnsee-subdiv">
                          <div className="mbl-youconvergnsee-subdiv-top">60%</div>
                          <div className='mbl-youconverhensee-subtxt'>of mobile users 
                            make direct contact with businesses via Google Business Profile.</div>
                      </div>
                </div>
                <div className="mbl-you-convergensee-div" id="mbl-you-convergensee-id">
                  <MBLForm/>
                </div>
              </div>



                
             
          </div>


        </main>

        <Footer></Footer>
      </div>
    )
  }
}
