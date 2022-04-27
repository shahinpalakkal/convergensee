import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from "../layout/header";
import Footer from "../layout/footer";

import GuidePost from "../image/guide_GPost_img.jpg"
import GuideOnline from "../image/guide_onlineImg.jpg"
import Guidegmp from "../image/guide.jpg"

import rightArrow from "../image/right-arrow-guideblack.png"
import rightArrowblue from "../image/right-arrow-guideblue.png"
import $ from "jquery";
// import Slider from "react-slick";
// import "../css/slick.css";
// import "../css/slick-theme.css";
// import Pagination from "react-js-pagination";
import ReactPaginate from "react-paginate";
import {Link} from "react-router-dom";


export default class guide extends Component {
  constructor(props){
    super(props)
    this.state = {
      guidePdf: 'GBP-Best-Practices-Checklist-ConvergenSEE-a',
    }
  }
  componentDidMount() {
    $("#link-blog").addClass("link-active");

 
      
  

 $(".readmoreBlog").mouseenter(function(){
        $('.rightArrow').hide();
        $('.rightArrowBlue').show();
    });
    $(".readmoreBlog").mouseleave(function(){
      $('.rightArrow').show();
      $('.rightArrowBlue').hide();
  });


  }


  render() {
    return (
      <div className="convergensee-wrapper">
      <Helmet>
      <title>{"Guides | ConvergenSEE "}</title>
        <meta
          name="description"
          content="Guides"
          />
          <link rel="canonical" href={"/guides"} /> 
          <meta name="twitter:description" content="Guides"></meta>
          <meta name="facebook:title" content="Guides | ConvergenSEE "></meta>
          <meta property='og:type' content='website' />
          <meta property="og:title" content="Guides | ConvergenSEE " ></meta>
          <meta property="og:description" content="Guides" ></meta>
          <meta property='og:site_name' content="Convergensee" />
          <meta property="og:url" content={window.location.href} ></meta>
      </Helmet>
        <Header></Header>
        <main className="mainWrapper">

          <nav className="container breadcrumb-det web-show my-3 pt-3 pb-2" aria-label="breadcrumb">
            <ol className="p-0">
              <li className="breadcrumb-detls"><a href="../home/home">ConvergenSEE</a></li>
              <li className="breadcrumb-detls" aria-current="page">Guides</li>
            </ol>
          </nav>

          <nav className="container breadcrumb-det mob-show pt-2 " aria-label="breadcrumb">
            <ol className="p-0">
              <li className="breadcrumb-detls"><a href="/">ConvergenSEE</a></li>
            </ol>
          </nav>
          <div className="container convergensee-main blogpost-main">
            <div className="row mt-0 mt-md-4">



              <div className="col-lg-12 col-md-12 guide-mobpadng">
                <div className="col-md-12 borderBotm borderBotmpadngGuide">
                  <h1 className="mainHeadGuidePost" id="main" tabIndex="-1">Guides</h1>


                  {/* <div>
                    <div className="LocalsearchImgdiv mt-2">
                      <img src={Guidegmp} alt="Guide GMP" className="img-fluid mb-3 LocalsearchImg"></img>
                    </div>
                        <h2 className="guideuser-text sub-head subtext-bold"> Google Business Profile Best Practices Checklist </h2>
                
                    <p className="guidetext">Learn how to transform your clients’ Google Business Profile listings into robust, content-rich listings that enhance the customer experience and drive greater results from local SEO.</p>
                    <div ><a className="readmoreBlog"  href="/guide/guide_GBP">Get Your Free Guide </a><img src={rightArrow} alt="" className="pl-1 rightArrow" /> <img src={rightArrowblue} alt="" className="rightArrowBlue pl-1"  /></div>
                  </div> */}


                  
                  <div>
                    <div className="LocalsearchImgdiv mt-2">
                      <img src={GuidePost} alt="Guide GMP" className="img-fluid mb-3 LocalsearchImg"></img>
                    </div>
                      <a href="/guide/seo-benefits-of-google-post" className="d-block">
                        <h2 className="guideuser-text sub-head subtext-bold">The Ultimate Guide to Google Posts</h2>
                        </a>
                    <p className="guidetext">Direct communication with local customers is key. Learn how to leverage Google Posts to increase website traffic, improve search engine rankings, and boost sales for your clients.</p>
                    <div ><Link className="readmoreBlog get-free-quote-guide" to="/guide/seo-benefits-of-google-post">Get Your Free Guide </Link><img src={rightArrow} alt="" className="pl-1 rightArrow" /> <img src={rightArrowblue} alt="" className="rightArrowBlue pl-1"  /></div>
                  </div>


                  <div>
                    <div className="LocalsearchImgdiv mt-5">
                      <img src={GuideOnline} alt="Guide Online Review" className="img-fluid mb-3 LocalsearchImg"></img>
                    </div>
                    <a href="/guide/how-to-respond-online-reviews" className="d-block">
                      <h2 className="guideuser-text sub-head subtext-bold"> Change Your Stars: How to Respond to Online Reviews </h2>
                      </a>
                 
                    <p className="guidetext">Find out how to engage customers, amplify positive reviews, and turn negative reviews into valuable marketing opportunities with our guide to online review management.</p>
                    <div ><a className="readmoreBlog"  href="/guide/how-to-respond-online-reviews">Get Your Free Guide </a><img src={rightArrow} alt="" className="pl-1 rightArrow" /> <img src={rightArrowblue} alt="" className="rightArrowBlue pl-1"  /></div>
                  </div>








                </div>
              </div>

              {/* <div className="pagination-sec col-md-12 pt-4 pb-5 pl-0">

                <ReactPaginate
                  previousLabel={""}
                  nextLabel={"Next >>"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={2}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}
                  activeLinkClassName={"active"}
                />

              </div> */}

            </div>
          </div>

        </main>
        <Footer></Footer>
      </div>
    )
  }
}
