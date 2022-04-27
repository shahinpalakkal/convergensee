import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from "./../../layout/header"
import Footer from "./../../layout/footer"  
import convergenSEEBlogFeb2022 from "./../../image/convergenSEEBlogFeb-2022.jpg"
import blackOwnedBusinessImg from "./../../image/black-owned-business.jpg"  
import Updatesfromcustomers from "./../../image/Updatesfromcustomers.jpg"   
import piracyImg from "./../../image/piracy.jpg"  
import restaurantSearchesImg from "./../../image/RestaurantSearches.jpg" 
import leftquotessign from "./../../image/left-quotes-sign.png"; 
import $ from "jquery" 


export default class blogJanuary extends Component {
  componentDidMount()
  {
    $("#link-blog").addClass("link-active");
  }
  render() {
    return (
      <div className="convergensee-wrapper">
      <Helmet>
        <title>{"Local Search News: February 2022 | ConvergenSEE "}</title>
        <meta
          name="description"
          content="Local search is always moving. Track algorithm updates, new settings, and important regulations making local search news for February 2022."
          />
          <link rel="canonical" href={"/blog/local-search-news-february-2022"} /> 
          <meta name="twitter:description" content="Local search is always moving. Track algorithm updates, new settings, and important regulations making local search news for February 2022."></meta>
          <meta name="facebook:title" content="Local Search News: February 2022 | ConvergenSEE"></meta>
          <meta property='og:type' content='website' />
          <meta property="og:title" content="Local Search News: February 2022 | ConvergenSEE" ></meta>
          <meta property="og:description" content="Local search is always moving. Track algorithm updates, new settings, and important regulations making local search news for February 2022." ></meta>
          <meta property='og:site_name' content="Convergensee" />
          <meta property="og:url" content={window.location.href} ></meta>
      </Helmet>
          <Header></Header>

          <main className="mainWrapper">
          
          <nav className="container breadcrumb-det web-show my-3 pt-3 pb-1" aria-label="breadcrumb">
            <ol className="p-0">
              <li className="breadcrumb-detls"><a href="../home/home">ConvergenSEE</a></li>
              <li className="breadcrumb-detls"><a href="/blog">Blog</a></li>
              <li className="breadcrumb-detls" aria-current="page">Local Search News: February 2022</li>
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
                  <h1  className="bloguser-head" id="main" tabIndex="-1">Local Search News: February 2022 </h1>
                  <div className="bloguser-det my-3">
                    <div className="blog-detls">February 2022</div>
                  </div>
                  <div className="LocalsearchImgdiv mt-4">
                    <img src={convergenSEEBlogFeb2022} alt="convergenSEE Blog February 2022" className="img-fluid mb-5 LocalsearchImg"></img>
                  </div>
                  <p className="blogtextContentBlog">It’s time once again for the latest in local search. New moderation policies, refreshed settings, disappearing features, plus a major algorithm update, have all rolled in this month. Catch up on the details you need to know. </p>
                  
                  <h2 className="blogtextSubHead">Google Maps releases updated review spam policy</h2>
                  <p className="blogtextContentBlog">Google has taken steps to demystify its review process, including a published overview on <a href="https://blog.google/products/maps/how-google-maps-reviews-work/" target="_blank" rel="noopener noreferrer" className="linkunderline">how Google Maps reviews work</a>. The overview includes information on automated processes and manual content moderation used to enforce overarching policies.</p>
                  <p className="blogtextContentBlog">This overview has seen recent updates because of pandemic-related behavior. Negative reviews targeting business vaccination requirements prompted Google to rethink their policy. Google explained:</p>
                  <div className="borderleftdiv">
                    <div className="borderleftdivImg"><img src={leftquotessign} alt="leftquotessign" /></div>
                  <div className="blogtextcontentItalic">
                  <p className="blogtextContentBlog">"We put extra protections in place to remove Google reviews that criticize a business for its health and safety policies or for complying with a vaccine mandate."</p>
                  </div>
                  </div>
                  <p className="blogtextContentBlog">In essence, Google has doubled down on using machine learning and analyst manpower to verify reviews. These moderation tactics will continue to identify when outside factors are influencing business reviews.</p>
                  <p className="blogtextContentBlog">Why do these changes matter? No filter algorithm is perfect—even Google’s can’t pinpoint and remove every review violation. Additionally, Google Maps is a big player in reviews and just as influential as review sites like Yelp or Home Stars. If bad actors are able skew reviews on the platform, it’s a huge disruption. </p>
                  <p className="blogtextContentBlog">What can businesses do? As a baseline, businesses should take advantage of manual deletion and review flagging on their Google profiles. Businesses can participate in spam moderation and <a href="https://www.convergensee.com/reputation-management" target="_blank" rel="noopener noreferrer" className="linkunderline">reputation management</a> to help ensure a legitimate flow of both positive and negative reviews.</p>
                

                  <h2 className="blogtextSubHead">Business listings on Google Maps see Q&A and customer updates</h2>
                  <p className="blogtextContentBlog">New to Google Maps, businesses are seeing Q&A and “Updates from customers” sections appear directly in their listings, no clicks needed. Because these sections are very visible, they are worth monitoring closely. Let’s start with Q&A, which displays questions by customers for a listing. Questions can be about anything and don’t have to meet any real relevance criteria. Q&A is not nearly as popular as reviews (or as targeted by spam) but is worth keeping an eye on, again, because of its high visibility.</p>
                  <p className="blogtextContentBlog">The good news is there are ways to reign in Q&As on Google listings. Business owners are allowed to contribute their own questions and answers—building their own searchable FAQs for users. Curating specific Q&As can add more value to your profile for users.</p>
                  <div className="mapimagediv mb-4 mt-4">
                  <img src={Updatesfromcustomers} alt="Updates from customers" className="img-fluid mb-3"></img>
                  </div>
                  <p className="creditlink">Image: Google</p>
                  <p className="blogtextContentBlog">Now on to “Updates from customers”, a new feature in Google Maps spotlighting customer reviews. Generally, Google favors recent reviews written by local guides or reviews using images here. The caveat is this section can be a real headache, because it has become a prime target for spam. </p>
                  <p className="blogtextContentBlog">At its best, “Updates from customers” works like knowledge panel review snippets that give relevant impressions of businesses. However, this section is over balanced towards recent reviews. That means bad actors can exploit the algorithm with spammy images and reviews to seize top positioning. Regular monitoring will be your best tool to combat spammers from overtaking this section. </p>

                  <h2 className="blogtextSubHead">Google thwarts search traffic violators with new Pirate algorithm update</h2>
                  <p className="blogtextContentBlog">Google’s new Pirate algorithm update kicked off in February and is dealing out punishing demotions for websites in the wrong. How steep are the penalties? According to a Google filing with the US Copyright Office, websites assigned a “demotion signal” have seen average search volumes reduce by 89%. </p>
                  <div className="mapimagediv mb-4 mt-4">
                  <img src={piracyImg} alt="Pirate algorithm" className="img-fluid mb-3"></img>
                  </div>
                  <p className="blogtextContentBlog">These “demotion signals” are Google’s way to shift traffic away from a big number of sites violating the Digital Millennium Copyright Act. Regulating sites with valid removal notices is a good thing—de-valuing illegal websites is a major win for businesses overall. Still, it’s worth keeping an eye on. As we saw with past major algorithm updates (see Medic in 2018), legitimate businesses can inadvertently be caught in the crossfire. </p>
                  <p className="blogtextContentBlog">The consequences of this latest algorithm update are daunting, so what can listings do to avoid getting burned? First, stay informed. Make sure to stay updated on all of Google’s terms of service and algorithm updates. Google doesn’t publicly announce every algorithm change, so it is worth having local SEO experts on hand to monitor any shifts in landscape. Don’t be the one who missed the memo on Google’s updates, an 89% traffic drop is a hefty price to pay.</p>

                  <h2 className="blogtextSubHead">Say goodbye to some Google Maps features</h2>
                  <p className="blogtextContentBlog">Nothing last forever. More features from Google Maps have reached the end of their road. On the way out is the ability to follow businesses and business welcome offers to new followers. Low adoption rates plus general bugginess are most likely the reasons for their retirement. At the moment there’s no exact dates for removal. That means impact on businesses should be minimal once these features are officially pulled.  </p>
              
                  
                  <p className="blogtextContentBlog">Local search is constantly changing, don’t miss each twist, turn, and update. <a href="/contact" target="_blank" rel="noopener noreferrer" className="linkunderline">Let’s talk!</a></p>

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
