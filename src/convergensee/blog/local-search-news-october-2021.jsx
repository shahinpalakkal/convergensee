
import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from "../../layout/header"
import Footer from "../../layout/footer"  
import convergenSEEBlogOctober from "./././../../image/convergenSEEBlogOctober.jpg"
import Googleoffers from "./../../image/google-offers.jpg"
import Ecofriendly from "./../../image/ecofriendly.png"
import $ from "jquery" 


export default class blogOctober extends Component {
  componentDidMount()
  {
    $("#link-blog").addClass("link-active");
  }
  render() {
    return (
      <div className="convergensee-wrapper">
      <Helmet>
        <title>{" Local Search News: October 2021 | ConvergenSEE "}</title>
        <meta
          name="description"
          content="This is all the must-know local search news and updates from October 2021. Let's get started!  "
          />
          <link rel="canonical" href={"/blog/local-search-news-october-2021"} /> 
          <meta name="twitter:description" content="This is all the must-know local search news and updates from October 2021. Let's get started!  "></meta>
          <meta name="facebook:title" content="Local Search News: October 2021 | ConvergenSEE"></meta>
          <meta property='og:type' content='website' />
          <meta property="og:title" content="Local Search News: October 2021 | ConvergenSEE" ></meta>
          <meta property="og:description" content="This is all the must-know local search news and updates from October 2021. Let's get started!  " ></meta>
          <meta property='og:site_name' content="Convergensee" />
          <meta property="og:url" content={window.location.href} ></meta>
      </Helmet>
          <Header></Header>

          <main className="mainWrapper">
          
          <nav className="container breadcrumb-det web-show my-3 pt-3 pb-1" aria-label="breadcrumb">
            <ol className="p-0">
              <li className="breadcrumb-detls"><a href="../home/home">ConvergenSEE</a></li>
              <li className="breadcrumb-detls"><a href="/blog">Blog</a></li>
              <li className="breadcrumb-detls" aria-current="page">Local Search News: October 2021</li>
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
                  <h1  className="bloguser-head" id="main" tabIndex="-1">Local Search News: October 2021 </h1>
                  <div className="bloguser-det my-3">
                    <div className="blog-detls">October 2021</div>
                  </div>
                  <div className="LocalsearchImgdiv mt-4">
                    <img src={convergenSEEBlogOctober} alt="convergenSEE Blog October 2021" className="img-fluid mb-5 LocalsearchImg"></img>
                  </div>
                  <p className="blogtextContentBlog">With another month comes more changes to local search. If you feel like it’s becoming harder and harder to keep up with Google search results changes, you aren’t alone. Data shows changes to Google search results have been more frequent and intense in 2021 compared to other years. Unconfirmed-yet-impactful Google algorithm updates have added to 68% more volatility on desktop and 85% more volatility on mobile. </p>
                  <p className="blogtextContentBlog">We track rankings to provide peace of mind in business decisions and measure the impact of changes. Without an SEO expert to constantly track your ranking fluctuations accounting for seasonality, possible technical mistakes, and Google updates, it’s hard to know if your search strategy is a good use of your limited resources. </p>
                  <p className="blogtextContentBlog">It is incredibly useful to know when algorithm changes occur whether announced or not—especially when they are expected to impact specific industries. Here’s a rundown of all the essential local search news from October 2021. </p>

                  <h2 className="blogtextSubHead">Google changes “led” to “owned” and adds new attributes</h2>
                  <p className="blogtextContentBlog">Google Business Profile attributes are a consistent way for businesses to share what they have to offer and what customers can expect from them such as non-industry specific details about the ownership or atmosphere. Google recently made the following updates to attributes: </p>
                  <ul className="blogtextContentBlog pl-4 mt-2 blogtextContentBlogMargin">
                    <li><p>Changed the icon for “women-owned” businesses to a purple heart label</p></li>
                    <li><p>Added a new “crowd” attribute to mark your business as LGBTQ+ friendly and a transgender safe space </p></li>
                    <li><p>Added an option for “Latino-owned” </p></li>
                    <li><p>Changed “veteran-led” and “women-led” attributes to “veteran-owned” and “women-owned” to maintain consistent wording in all attributes </p></li>
                  </ul>
                  <p className="blogtextContentBlog">The desire to support local businesses owned by women and minorities, is as strong as ever, so making a point to list all applicable attributes is a smart move. Not only will it help you stand out to the customers who matter, but it will ensure Google ranks your business on the most relevant queries. </p>

                  <h2 className="blogtextSubHead">Google adds the “offer” label attribute in anticipation of the holiday season </h2>
                  <p className="blogtextContentBlog">As we head into the holidays—the busiest time of year—Google is helping shoppers out with a new “offers” label for local businesses to promote sales on specific items or discounts on services. While businesses could create an offer using Google Posts before, now Google is going to highlight these deals separately from other posts.  </p>
                  <div className="mapimagediv">
                  <img src={Googleoffers} alt="Google offers" className="img-fluid mb-4 mt-4"></img>
                  </div>
                  <p className="blogtextContentBlog">This new label will show up in a business’s knowledge panel or in the three pack justifications. They will be easily visible on your listings and during the holiday shopping season, you know that customers will be likely on the lookout for deals.  </p>

                    
                  <h2 className="blogtextSubHead">New Google Help Docs: Best practices for ecommerce in Google Search </h2>
                  <p className="blogtextContentBlog">Google has added new help documentation related to ecommerce best practices for Google Search. Sharing your product details on your GBP is called out as one of the most important actions your business can take. </p>
                  <p className="blogtextContentBlog">Read all the best practices Google has identified to help businesses succeed this holiday season, and beyond: </p>
                  
                  <ul className="blogtextContentBlog pl-4 mt-2 blogtextContentBlogMargin">
                    <li><p>Understand how to  <a href="https://developers.google.com/search/docs/advanced/ecommerce/where-ecommerce-data-can-appear-on-google" target="_blank" rel="noopener noreferrer" className="linkunderline">create effective ecommerce content</a>  based on where it will appear. </p></li>
                    <li><p>Help Google understand and present your content appropriately by providing explicit information about the meaning of your page with  <a href="https://developers.google.com/search/docs/advanced/ecommerce/include-structured-data-relevant-to-ecommerce" target="_blank" rel="noopener noreferrer" className="linkunderline">structured data</a>.</p></li>
                    <li><p>Explore  <a href="https://developers.google.com/search/docs/advanced/ecommerce/designing-a-url-structure-for-ecommerce-sites" target="_blank" rel="noopener noreferrer" className="linkunderline">how to design a URL structure</a>  for ecommerce sites and avoid common crawling and URL design issues. </p></li>
                    <li><p>Learn about the Google Product Feed and other ways to  <a href="https://developers.google.com/search/docs/advanced/ecommerce/share-your-product-data-with-google"  target="_blank" rel="noopener noreferrer" className="linkunderline">share your product data with Google</a>. </p></li>
                    <li><p>Learn  <a href="https://developers.google.com/search/docs/advanced/ecommerce/how-to-launch-an-ecommerce-website" target="_blank" rel="noopener noreferrer" className="linkunderline">how to strategically launch a new ecommerce website</a>  and including timing considerations when registering your website with Google. </p></li>
                    <li><p>How to  <a href="https://developers.google.com/search/docs/advanced/ecommerce/help-google-understand-your-ecommerce-site-structure" target="_blank" rel="noopener noreferrer" className="linkunderline">design a site navigation and linking structure</a>  that informs Google what is most important on your ecommerce site. </p></li>
                    <li><p> Learn how  <a href="https://developers.google.com/search/docs/advanced/ecommerce/pagination-and-incremental-page-loading" target="_blank" rel="noopener noreferrer" className="linkunderline">common UX patterns for ecommerce sites</a>  impact Google’s ability to crawl and index your content. </p></li>
                  </ul>
                  <p className="blogtextContentBlog">You can expect the traffic to your ecommerce site to increase in the last quarter of the year, and now is the time to start preparing for that. Your local listings can bring customers to your online store as well as your physical locations so ensuring those listings are optimized is essential. When your local listings are flawless and linked to your online store, your ecommerce and traditional commerce sources will cross promote each other and drive business.  </p>
                  

                  <h2 className="blogtextSubHead">Google starts implementing more eco-friendly initiatives </h2>
                  <p className="blogtextContentBlog">We wrote in August about  <a href="https://www.dacgroup.com/en-gb/blog/august-2021-local-search-roundup/" target="_blank" rel="noopener noreferrer" className="linkunderline">Google’s new eco-certified badges for hotel listings</a>  and now Google is taking it even further. Google announced a number of initiatives they have planned to make their efforts eco-friendly and more sustainable. This includes new features in Google Maps, Google Flights, Shopping and more. </p>
                  <ul className="blogtextContentBlog pl-4 mt-2 blogtextContentBlogMargin">
                    <li><p>In July, hotels could start adding eco and sustainability certifications to their listings in GBP. Google is now showing the eco-certified green label in the hotel listings in Google Search.</p></li>
                    <li><p>When you search for energy-intensive appliances like furnaces, dishwashers or water heaters, suggestions in the Google Shopping tab will help target your search to cost-effective and sustainable options. </p></li>
                    <li><p>Google Search will make it easier to see hybrid and electric vehicle options, compare them against gas-powered models, and find rebates so you know the true cost before you buy. </p></li>
                    <li><p>Google Flights shows carbon emissions per seat for every flight. </p></li>
                    <li><p>Google Maps gives you the option to select the most fuel-efficient route. </p></li>
                  </ul>
                  
                  <div className="mapimagediv">
                  <img src={Ecofriendly} alt="eco-friendly" className="img-fluid mb-4 mt-4"></img>
                  </div>
                  <p className="creditlink">Image: Search Engine Roundtable </p>

                  <p className="blogtextContentBlog">While a business can’t influence most of these features, hotels are able to choose whether they display their eco-certified badges. From promoting a “Food Waste Production Program” to your “Vegetarian Meal Options”, displaying applicable eco-friendly attributes could encourage customers to book with you. If you are in the hospitality industry and are not already clearly listing your sustainability initiatives in your GBP, now is the time to start.  </p>
                  
                 
                  
                  <h2 className="blogtextSubHead">Yelp adds virtual restaurant attribute to help cut down on customer confusion </h2>
                  <p className="blogtextContentBlog">Like Google, Yelp has found value in business attributes. Out of necessity, Google started with delivery attributes for restaurants at the beginning of the pandemic and today they are still adding new attributes to meet user needs. Yelp has a similar strategy and is now targeting virtual restaurants. </p>  
                  <p className="blogtextContentBlog">Yelp is releasing a “Virtual Kitchen” attribute for virtual restaurants, virtual food courts, and ghost kitchens to reduce confusion regarding the dining experiences they offer. If this attribute applies to your business, it should be included in your listing whenever possible. </p>
                  <p className="blogtextContentBlog">Attributes are continuously evolving and both Yelp and Google are billboarding any listings that include an attribute that applies to a user’s query. You don’t want to fall behind on using these and should make sure that every attribute relevant to your business is included. </p>
                  <p className="blogtextContentBlog">If you want to learn how to better keep track of your Google ranking and optimize your online presence, we’re here to help.! <a href="https://www.convergensee.com/contact" target="_blank" rel="noopener noreferrer" className="linkunderline">Check in with us</a> to learn more! </p>

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
