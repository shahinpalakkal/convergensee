import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from "../../layout/header"
import Footer from "../../layout/footer"  
import GMP_desktop from "./../../image/GMP_imgDesktop.jpg"
import GuidegmpTab from "./../../image/guide-img-tab.jpg"
import GuidegmpMob from "./../../image/guide-img-mobile.jpg"
import Guideform from "./guideform"
import $ from "jquery" 
import form1PDF from "../../image/pdf/GBP-Best-Practices-Checklist-ConvergenSEE-a.pdf"


export default class guide_GBP extends Component {
  constructor(props){
    super(props)
    this.state = {
      guidePdf: '',
      guidePdfName: 'Reviews-Response-Guide-ConvergenSEE-a',
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
        <title>{"Google Business Profile Best Practices Checklist | ConvergenSEE "}</title>
        <meta
          name="description"
          content="Google Business Profile Best Practices Checklist."
          />
          <link rel="canonical" href={"/guide/guide_GBP"} /> 
          <meta name="twitter:description" content="Google Business Profile Best Practices Checklist."></meta>
          <meta name="facebook:title" content="Google Business Profile Best Practices Checklist | ConvergenSEE"></meta>
          <meta property='og:type' content='website' />
          <meta property="og:title" content="Google Business Profile Best Practices Checklist | ConvergenSEE" ></meta>
          <meta property="og:description" content="Google Business Profile Best Practices Checklist." ></meta>
          <meta property='og:site_name' content="Convergensee" />
          <meta property="og:url" content={window.location.href} ></meta>
      </Helmet>
      <Header></Header>

      <main className="mainWrapper" id="myPage1">

        <div className="LocalsearchImgdiv tabimg-guide">
          <img src={GuidegmpTab} alt="GMP" className="img-fluid LocalsearchImg"></img>

        </div>

        <div className="LocalsearchImgdiv mobimg-guide">
          <img src={GuidegmpMob} alt="GMP" className="img-fluid  LocalsearchImg"></img>

        </div>
          
          
          <div className="container convergensee-main blogpost-main guidepost-main">
            <div className="row mt-0 mt-md-4">

              <div className="col-lg-12 col-md-12 guide-mobpadng">
                <div className="col-md-12 pb-5">

                  <div className="LocalsearchImgdiv webimg-guide">
                    <img src={GMP_desktop} alt="GMP" className="img-fluid mb-4 LocalsearchImg"></img>
                  </div>

               
                  
                  <div>
                        <div className="guidedetail-inline">
                        <h2 className="sub-head subtext-bold guideuser-text-h"> Google Business Profile Best Practices Checklist </h2>                 
                        <p className="guidecontent-text mb-4">Google Business Profile (GBP) listings may look simple, but there is much more to them if you want to drive the absolute maximum return from local SEO. Your clients may consider their basic skeletal listings as good enough, but they will be losing out to their competition.</p>
                        <p className="guidecontent-text guidecontent-textp">There is great value to your clients customers when they are able to view a robust listing—and a listing that is content-rich will always look more professional than one that is meager. Google’s algorithm will also greatly favors content-rich listings: in the case of two near-identical businesses, it will favor the one with the more complete GBP profile. With value to both your clients customer experience and to their SEO, there is always value in improving your clients GBP listings.</p>
                        <p className="guidecontent-text guidecontent-textp">Of course, there are challenges. The main reason for not curating your clients GBP listings is the large amount of resources needed to maintain their data. But be aware that data degrades rapidly. In fact, 60% of listing data goes out of date within two years. Your clients data also needs to be updated with the new features that Google rolls out month to month.</p>


                        
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
