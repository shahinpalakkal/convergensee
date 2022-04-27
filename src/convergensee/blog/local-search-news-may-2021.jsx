import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from "./../../layout/header"
import Footer from "./../../layout/footer"  
import convergenSEEBlogMay from "./././../../image/convergenSEEBlogMay.jpg"
import foodOrdering from "./../../image/food-ordering.jpg"
import facebookNeighborhoods from "./../../image/facebookNeighborhoods.jpg"
import yelpCelebrates from "./../../image/yelpCelebrates.jpg"
import $ from "jquery" 


export default class blogMay extends Component {
  componentDidMount()
  {
    $("#link-blog").addClass("link-active");
  }
  render() {
    return (
      <div className="convergensee-wrapper">
      <Helmet>
        <title>{"Local Search News: May 2021 | ConvergenSEE "}</title>
        <meta
          name="description"
          content="May 2021 had a little bit of everything in local search, so let's dig beneath the surface to truly understand the changes that matter most. "
          />
          <link rel="canonical" href={"/blog/local-search-news-may-2021"} /> 
          <meta name="twitter:description" content="May 2021 had a little bit of everything in local search, so let's dig beneath the surface to truly understand the changes that matter most. "></meta>
          <meta name="facebook:title" content="Local Search News: May 2021 | ConvergenSEE"></meta>
          <meta property='og:type' content='website' />
          <meta property="og:title" content="Local Search News: May 2021 | ConvergenSEE" ></meta>
          <meta property="og:description" content="May 2021 had a little bit of everything in local search, so let's dig beneath the surface to truly understand the changes that matter most. " ></meta>
          <meta property='og:site_name' content="Convergensee" />
          <meta property="og:url" content={window.location.href} ></meta>
      </Helmet>
          <Header></Header>

          <main className="mainWrapper">
          
          <nav className="container breadcrumb-det web-show my-3 pt-3 pb-1" aria-label="breadcrumb">
            <ol className="p-0">
              <li className="breadcrumb-detls"><a href="../home/home">ConvergenSEE</a></li>
              <li className="breadcrumb-detls"><a href="/blog">Blog</a></li>
              <li className="breadcrumb-detls" aria-current="page">Local Search News: May 2021</li>
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
                  <h1  className="bloguser-head" id="main" tabIndex="-1">Local Search News: May 2021 </h1>
                  <div className="bloguser-det my-3">
                    <div className="blog-detls">May 2021</div>
                  </div>
                  <div className="LocalsearchImgdiv mt-4">
                    <img src={convergenSEEBlogMay} alt="convergenSEE Blog May 2021" className="img-fluid mb-5 LocalsearchImg"></img>
                  </div>
                  <p className="blogtextContentBlog">Restrictions loosened in many parts of the world and there was a host of updates and upgrades in local search. Yes, May 2021 had a little bit of everything, so let's dig beneath the surface to truly understand the changes that matter most. </p>
                  
                  <h2 className="blogtextSubHead">Google’s latest algorithm update </h2>
                  <p className="blogtextContentBlog">Google didn't indicate if its May 22 algorithm update was intended to target any specific issues or industries. As usual, local search experts should monitor fluctuations in rankings themselves in order to determine if changes are likely due to Google updates or resolvable issues. </p>
                  <p className="blogtextContentBlog">As we know by now, there is no prescribed course of action to follow when ranking algorithm updates go live. Simply continue to observe SEO best practice—but know that any unusual local ranking changes may be attributable to this algorithm update. </p>

                  <h2 className="blogtextSubHead">New attributes and category in GBP </h2>
                  <p className="blogtextContentBlog">Google added a host of accessibility and Earth Day-focused attributes to GBP in May. The latter will help customers understand which types of recycling are available at a given location, from clothing to electronics, batteries, and household hazardous waste. </p>
                  <p className="blogtextContentBlog">Google also added an “American grocery store” category. Of course, all non-specialized grocery retailers in the US will fall under this category—and outside the US, American-specific grocery chains can now benefit from a highly distinguishing category. </p>
                  <p className="blogtextContentBlog">Don't think it’s worth the effort to use specific attributes and categories to target hyper-specific queries? It's an important part of boosting your visibility at the local level, especially for high-intent searches. </p>

                  <h2 className="blogtextSubHead">Local food ordering gets an upgrade </h2>
                  <p className="blogtextContentBlog">Restaurants are seeing a new “Food ordering” tab in their Google Business Profile (GBP) dashboards. Very simply, it consolidates new and existing tools that help restaurants manage the food ordering options that appear in their Search and Maps results. They include: </p>
                  <ul className="blogtextContentBlog pl-4 mt-4 blogtextContentBlogMargin">
                    <li><p>an on/off toggle for the “Order online” button; </p></li>
                    <li><p>a table to set preferred providers for pickup and delivery; </p></li>
                    <li><p>a field for specifying a custom link for the “Place an order” button; </p></li>
                    <li><p>and a prompt to help restaurants set up online ordering directly from their Google profiles, powered by Google-owned TheOrdering.app </p></li>
                  </ul>
                  <img src={foodOrdering} alt="food ordering" className="img-fluid mb-4 imgBlogPOst"></img>
                  <p className="blogtextContentBlog">Restaurants did not previously have the ability to set primary providers for pickup and delivery—and couldn't even control whether or not the “Place an order” button would appear. The workflow for setting up TheOrdering.app is also new, but remember that Google will start charging 1.5% per order in 2022. </p>

                  <h2 className="blogtextSubHead">Say hello to Facebook Neighborhoods </h2>
                  <p className="blogtextContentBlog">Nextdoor has made steady gains in the local search ecosystem but Facebook is planning to squash this competitor that allows “communities come together to greet newcomers, exchange recommendations, and read the latest local news”. </p>
                  <img src={facebookNeighborhoods} alt="Facebook Neighborhoods" className="img-fluid mb-4 mt-4 imgBlogPOst"></img>
                  <p className="creditlink">Image:<a href="https://about.fb.com/news/2021/05/connecting-local-communities-on-facebook/" target="_blank" rel="noopener noreferrer">Facebook</a></p>
                  <p className="blogtextContentBlog">Like Nextdoor, Facebook Neighborhoods let users participate in discussions with other users who live nearby. Facebook users will even be able to create Neighborhood profiles separate from their main profiles. </p>
                  <p className="blogtextContentBlog">Why should you care? Because Facebook Neighborhoods encourages users to share recommendations of local places and businesses to visit. If nothing else, it's a timely reminder that each of your locations needs to have a local Facebook profile with information that corroborates your GBP listings.  </p>
                  
                  <h2 className="blogtextSubHead">Yelp celebrates Pride Month </h2>
                  <p className="blogtextContentBlog">In preparation for Pride Month in June, Yelp has added “LGBTQ-Owned”, “Open to all”, and several other attributes to its selection. Businesses with these attributes will be highlighted with a rainbow-colored map pin throughout Pride Month. </p>
                  <div className="mapimagediv">
                  <img src={yelpCelebrates} alt="Yelp celebrates Pride Month " className="img-fluid mb-4 mt-4"></img>
                  </div>
                  <p className="blogtextContentBlog mt-3">As we have seen, users searching for businesses with specific qualities are high-intent consumers—and this move on Yelp's part makes it easier for qualifying businesses to appear in front of like-minded audiences.  </p>
                  <p className="blogtextContentBlog">Whether you have a handful of locations or a nationwide network, we're here to help you reach the right people with the right message at the right time. <a href="/contact" target="_blank" rel="noopener noreferrer" className="linkunderline">Let’s talk</a>. </p>



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
