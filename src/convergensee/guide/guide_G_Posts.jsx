import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from "../../layout/header"
import Footer from "../../layout/footer"  
import GPost_desktop from "./../../image/googlePost_Desktop.jpg"
//import GuidegmpTab from "./../../image/guide-img-tab.jpg"
import GuidePost from "./../../image/guide_GPost_img.jpg"
import Guideform from "./guideform"
import $ from "jquery" 
import form1PDF from "../../image/pdf/the-ultimate-guide-to-google-posts.pdf"


export default class guide_G_Posts extends Component {
  constructor(props){
    super(props)
    this.state = {
      guidePdf: '',
      guidePdfName: '/the-ultimate-guide-to-google-posts',
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
        <title>{" The Ultimate Guide to Google Posts | ConvergenSEE "}</title>
        <meta
          name="description"
          content="The Ultimate Guide to Google Posts."
          />
          <link rel="canonical" href={"/guide/seo-benefits-of-google-post"} /> 
          <meta name="twitter:description" content="The Ultimate Guide to Google Posts."></meta>
          <meta name="facebook:title" content="The Ultimate Guide to Google Posts | ConvergenSEE"></meta>
          <meta property='og:type' content='website' />
          <meta property="og:title" content="The Ultimate Guide to Google Posts | ConvergenSEE" ></meta>
          <meta property="og:description" content="The Ultimate Guide to Google Posts." ></meta>
          <meta property='og:site_name' content="Convergensee" />
          <meta property="og:url" content={window.location.href} ></meta>
      </Helmet>
          <Header></Header>

          <main className="mainWrapper">

                  {/* <div className="LocalsearchImgdiv tabimg-guide">
                    <img src={GuidegmpTab} alt="GMP" className="img-fluid LocalsearchImg"></img>
      
                  </div> */}

                  

                  <div className="LocalsearchImgdiv mobimg-guide">
                    <img src={GuidePost} alt="GMP" className="img-fluid  LocalsearchImg"></img>
      
                  </div>
          
          
          <div className="container convergensee-main blogpost-main guidepost-main">
            <div className="row mt-0 mt-md-4">

              <div className="col-lg-12 col-md-12 guide-mobpadng guide-minheightform">
                <div className="col-md-12 pb-5">

                  <div className="LocalsearchImgdiv webimg-guide-g">
                    <img src={GPost_desktop} alt="Google Post" className="img-fluid mb-4 LocalsearchImg"></img>
                  </div>

               
                  
                  <div>
                        <div className="guidedetail-inline">
                        <h2 className="sub-head subtext-bold guideuser-text-h">The Ultimate Guide to Google Posts </h2>                 
                        <p className="guidecontent-text mb-4">Google Posts provide businesses with a valuable opportunity to communicate directly with local customers. Not only can Google Posts keep customers up to date on seasonal hours, special events, and limited-time offers, but they can also increase website traffic, boost sales, and improve search engine rankings. If used effectively, Google Posts could be the edge your client needs to make it into the local 3-pack. </p>
                        <p className="guidecontent-text guidecontent-textp">In this guide, we’ll walk you through the marketing and SEO benefits of Google Posts, so you can learn how to leverage this currently-free feature to help your clients drive greater performance.  </p>
                        {/* <p className="guidecontent-text guidecontent-textp"> If used effectively, Google Posts can increase website traffic, boost sales, engage audiences, and improve search engine rankings. There is no reason why every business shouldn’t take this currently-free advertising opportunity on the world’s biggest search engines.</p> */}

                        
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
