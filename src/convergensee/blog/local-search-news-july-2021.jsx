import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from "./../../layout/header"
import Footer from "./../../layout/footer"  
import ConvergenSEEBlogJuly from "./././../../image/ConvergenSEEBlogJuly.jpg"
import Restaurantreview from "./../../image/res-reviewImg-july.jpg"
import Googlepost from "./../../image/google-postImg-july.jpg"
import $ from "jquery" 


export default class blogJuly extends Component {
  componentDidMount()
  {
    $("#link-blog").addClass("link-active");
  }
  render() {
    return (
      <div className="convergensee-wrapper">
      <Helmet>
        <title>{"Local Search News: July 2021 | ConvergenSEE  "}</title>
        <meta
          name="description"
          content="July 2021 was another busy month in the world of local search. Here's all the news you need to know to stay ahead of the game."
          />
          <link rel="canonical" href={"/blog/local-search-news-july-2021"} /> 
          <meta name="twitter:description" content="July 2021 was another busy month in the world of local search. Here's all the news you need to know to stay ahead of the game."></meta>
          <meta name="facebook:title" content="Thank You | ConvergenSEE"></meta>
          <meta property='og:type' content='website' />
          <meta property="og:title" content="Thank You | ConvergenSEE" ></meta>
          <meta property="og:description" content="July 2021 was another busy month in the world of local search. Here's all the news you need to know to stay ahead of the game." ></meta>
          <meta property='og:site_name' content="Convergensee" />
          <meta property="og:url" content={window.location.href} ></meta>
      </Helmet>
          <Header></Header>

          <main className="mainWrapper">
          
          <nav className="container breadcrumb-det web-show my-3 pt-3 pb-1" aria-label="breadcrumb">
            <ol className="p-0">
              <li className="breadcrumb-detls"><a href="../home/home">ConvergenSEE</a></li>
              <li className="breadcrumb-detls"><a href="/blog">Blog</a></li>
              <li className="breadcrumb-detls" aria-current="page">Local Search News: July 2021</li>
            </ol>
          </nav>

          <nav className="container breadcrumb-det mob-show pt-2" aria-label="breadcrumb">
            <ol className="p-0">
              <li className="breadcrumb-detls"><a href="/blog">Blog</a></li>
            </ol>
          </nav>
          
          <div className="container convergensee-main blogpost-main">
            <div className="row mt-0 mt-md-4">

              <div className="col-lg-12 col-md-12">
                <div className="col-md-12 pb-5">
                  <h1  className="bloguser-head" id="main" tabIndex="-1">Local Search News: July 2021 </h1>
                  <div className="bloguser-det my-3">
                    <div className="blog-detls">July 2021</div>
                  </div>
                  <div className="LocalsearchImgdiv mt-4">
                    <img src={ConvergenSEEBlogJuly} alt="convergenSEE Blog July 2021" className="img-fluid mb-5 LocalsearchImg"></img>
                  </div>
                  <p className="blogtextContentBlog">A new UI for restaurant reviews, Google Posts for hotels (for the first time ever!), and a surprising ability to remove contact numbers from business listings. Here are all the updates you need to know from another busy month in the world of local search. </p>
                  
                  <h2 className="blogtextSubHead">The June/July core algorithm update concludes </h2>
                  <p className="blogtextContentBlog">As we saw in <a href="https://www.convergensee.com/blog/local-search-news-june-2021" target="_blank" rel="noopener noreferrer" className="linkunderline">June's roundup</a>, Google originally intended to release a single core algorithm update but had to divide the effort into two parts when it fully appreciated the scope of work involved. 
                                                     The second part of the update is thought to have targeted spam listings primarily. Although it's an earnest attempt to improve search quality—particularly in markets affected by fraudulent business profiles—some legitimate businesses may have been unintentionally impacted. As such, lawyers, realtors, and locksmiths are strongly encouraged to closely monitor the performance of their listings following this change.  </p>
                  
                  <h2 className="blogtextSubHead">New details for restaurant reviews on Google Maps </h2>
                  <p className="blogtextContentBlog">Users adding restaurant reviews to Google can now sprinkle in relevant details—from price range to meal type (breakfast, lunch, dinner, etc.)—with the same ease of assigning a star rating. It's a simple change that should encourage reviewers to divulge more detail without having to write long descriptions. </p>
                  <div className="mapimagediv">
                  <img src={Restaurantreview} alt="Restaurant reviews on Google Maps" className="img-fluid mb-4 mt-4"></img>
                  </div>
                  <p className="creditlink">GIF: Google </p>
                  <p className="blogtextContentBlog">We already know that Google wants to be the undisputed king of online reviews. Although the search giant has much to do to overtake the likes of Amazon, Trip Advisor, and Yelp, its review functionality for restaurants has come a long way. Attributes focusing on delivery options, for instance, have allowed users to conduct highly qualified searches via conventional search and the maps channel. 
                                                     Users can already Google restaurants by genre, rating, and delivery availability—and this fresh crowdsourced information will soon enable price, meal type, and more as custom search criteria. Expect the change to appear for mobile users (Android and iOS) in the US initially, with additional countries supported in the not-too-distant future. </p>

                  <h2 className="blogtextSubHead">Hotels get Google Posts (but verified knowledge panels lose them)  </h2>
                  <p className="blogtextContentBlog">It appears that Google listings for hotels and other hospitality brands are now eligible to use Google Posts for the very first time. Google has long treated the hospitality industry as an exception, giving hotels their own unique search options and knowledge panel features—which, until now, excluded Google Posts. </p>
                  <div className="mapimagediv">
                  <img src={Googlepost} alt="Google Posts" className="img-fluid mb-4 mt-4"></img>
                  </div>
                  <p className="creditlink">Image: <a href="https://twitter.com/BeHuTo/status/1417023002156404739" target="_blank" rel="noopener noreferrer" className="linkunderline">Nevena Ivanova</a>  </p>
                  <p className="blogtextContentBlog">In contrast, Google has discontinued Google Posts for businesses with verified knowledge panels. Note that this change affects verified knowledge panels only, not the local Google Posts managed in the Google Business Profile (GBP) dashboard. </p>
                  
                  <p className="blogtextContentBlog">Why would Google remove functionality like this? Very simply, it's because knowledge panels are usually tailored for broad searches, whereas Google Posts are supposed to be store-specific. Google is simply drawing a clearer line between brand-level messaging and genuinely local search.  </p>
                 
                  <h2 className="blogtextSubHead">Phone numbers can be removed from listings  </h2>
                  <p className="blogtextContentBlog mt-3">In a new <a href="https://support.google.com/business/answer/3039617" target="_blank" rel="noopener noreferrer" className="linkunderline">Google Help document</a>, the search giant has revealed how to hide phone numbers on business listings. Why would a business want to hide its phone number? Well, it depends on the nature of the business itself. A farmers market, for instance, is unlikely to need or want a central contact number—but neither would it want to leave the field blank and attract the type of ranking penalty normally handed out to "incomplete" listings. </p>
                  <p className="blogtextContentBlog">This common-sense update will allow such businesses to leave the phone number field blank without drawing any undeserved ranking punishments. </p>
                  <p className="blogtextContentBlog">Want to make all the right choices in local search? Whether you're responsible for just a few locations or a sprawling national network, we'll empower you to reach the right people with the right message at the right time. <a href="https://www.convergensee.com/contact" target="_blank" rel="noopener noreferrer" className="linkunderline">Let’s talk</a>. </p>



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
