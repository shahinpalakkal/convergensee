import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from "../../layout/header"
import Footer from "../../layout/footer"  
import Guide_star from "./../../image/guide_starDesktop.jpg"
//import GuidegmpTab from "./../../image/guide-img-tab.jpg"
import GuideOnline from "./../../image/guide_onlineImg.jpg"
import Guideform from "./guideform"
import $ from "jquery" 
import form1PDF from "../../image/pdf/change-your-stars-how-to-respond-to-online-reviews.pdf"


export default class guide_stars extends Component {
  constructor(props){
    super(props)
    this.state = {
      guidePdf: '',
      guidePdfName: 'change-your-stars-how-to-respond-to-online-reviews',
    }
  }
  componentDidMount()
  {
    $("#link-blog").addClass("link-active");
    this.setState({guidePdf:  form1PDF})
  }
  render() {
    return (
      <div className="convergensee-wrapper guide-mainmenu-hide">
      <Helmet>
        <title>{" Review Response Guide | ConvergenSEE "}</title>
        <meta
          name="description"
          content="Review Response Guide."
          />
          <link rel="canonical" href={"/guide/how-to-respond-online-reviews"} /> 
          <meta name="twitter:description" content="Review Response Guide."></meta>
          <meta name="facebook:title" content="Review Response Guide | ConvergenSEE"></meta>
          <meta property='og:type' content='website' />
          <meta property="og:title" content="Review Response Guide | ConvergenSEE" ></meta>
          <meta property="og:description" content="Review Response Guide." ></meta>
          <meta property='og:site_name' content="Convergensee" />
          <meta property="og:url" content={window.location.href} ></meta>
      </Helmet>
      <Header></Header>

          <main className="mainWrapper">

                  {/* <div className="LocalsearchImgdiv tabimg-guide">
                    <img src={GuidegmpTab} alt="GMP" className="img-fluid LocalsearchImg"></img>
      
                  </div> */}

                  

                  <div className="LocalsearchImgdiv mobimg-guide">
                    <img src={GuideOnline} alt="Guide Star" className="img-fluid  LocalsearchImg"></img>
      
                  </div>
          
          
          <div className="container convergensee-main blogpost-main guidepost-main">
            <div className="row mt-0 mt-md-4">

              <div className="col-lg-12 col-md-12 guide-mobpadng guide-minheightform">
                <div className="col-md-12 pb-5">

                  <div className="LocalsearchImgdiv webimg-guide-g">
                    <img src={Guide_star} alt="Google Star" className="img-fluid mb-4 LocalsearchImg"></img>
                  </div>

               
                  
                  <div>
                        <div className="guidedetail-inline">
                        <h2 className="sub-head subtext-bold guideuser-text-h">Change Your Stars: How to Respond to Online Reviews</h2>                 
                        <p className="guidecontent-text mb-4">Increasingly, you are what your reviews say you are. After all, 95% of consumers read online reviews before making a purchase—and 94% of online shoppers say that a bad review has convinced them to avoid a business.</p>
                        <p className="guidecontent-text guidecontent-textp">Responding to both positive and negative reviews is a valuable opportunity to engage customers, build trust, and effectively manage a brand’s online reputation. But how, exactly, should a business respond to online reviews?  </p>
                        {/* <p className="guidecontent-text guidecontent-textp">Enterprise-level corporations that operate and oversee multiple locations
                            are always expected to track and manage their reviews, a task which is made
                            even more difficult if the company operates internationally.</p> */}
                            <p className="guidecontent-text guidecontent-textp">In this guide, we’ll show you how to navigate the complex world of online review management, so your client’s business can make a great first impression each time.  </p>
                            {/* <p className="guidecontent-text guidecontent-textp">Let’s run through these questions and more to help you navigate the complex
                            world of online reputation management.</p> */}

                        
                        </div>

                        <div className="guidedetailform-inline">
                          <Guideform  guidePdf={form1PDF} guidePdfName={this.state.guidePdfName} />
                        </div>
                  </div>
                  

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
