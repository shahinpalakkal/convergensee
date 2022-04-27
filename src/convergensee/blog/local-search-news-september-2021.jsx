import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from "./../../layout/header"
import Footer from "./../../layout/footer"  
import convergenSEEBlogSeptember from "./././../../image/ConvergenSEEBlogSeptember.jpg"
import SEdefault from "./../../image/sep-defaultSE.jpg"
import Shipping from "./../../image/sep-shipping.jpg"
import SepPost from "./../../image/sep-post.jpg"
import SepGMP from "./../../image/sep-gmp.jpg"
import $ from "jquery" 


export default class blogSeptember extends Component {
  componentDidMount()
  {
    $("#link-blog").addClass("link-active");
  }
  render() {
    return (
      <div className="convergensee-wrapper">
      <Helmet>
        <title>{"Local Search News: September 2021 | ConvergenSEE "}</title>
        <meta
          name="description"
          content="This is your quick rundown of all the local search news and updates you need to know from September 2021. Let's get started!  "
          />
          <link rel="canonical" href={"/blog/local-search-news-september-2021"} /> 
          <meta name="twitter:description" content="This is your quick rundown of all the local search news and updates you need to know from September 2021. Let's get started!  "></meta>
          <meta name="facebook:title" content="Local Search News: September 2021 | ConvergenSEE"></meta>
          <meta property='og:type' content='website' />
          <meta property="og:title" content="Local Search News: September 2021 | ConvergenSEE" ></meta>
          <meta property="og:description" content="This is your quick rundown of all the local search news and updates you need to know from September 2021. Let's get started!  " ></meta>
          <meta property='og:site_name' content="Convergensee" />
          <meta property="og:url" content={window.location.href} ></meta>
      </Helmet>
          <Header></Header>

          <main className="mainWrapper">
          
          <nav className="container breadcrumb-det web-show my-3 pt-3 pb-1" aria-label="breadcrumb">
            <ol className="p-0">
              <li className="breadcrumb-detls"><a href="../home/home">ConvergenSEE</a></li>
              <li className="breadcrumb-detls"><a href="/blog">Blog</a></li>
              <li className="breadcrumb-detls" aria-current="page">Local Search News: September 2021</li>
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
                  <h1  className="bloguser-head" id="main" tabIndex="-1">Local Search News: September 2021 </h1>
                  <div className="bloguser-det my-3">
                    <div className="blog-detls">September 2021</div>
                  </div>
                  <div className="LocalsearchImgdiv mt-4">
                    <img src={convergenSEEBlogSeptember} alt="convergenSEE Blog September 2021" className="img-fluid mb-5 LocalsearchImg"></img>
                  </div>
                  <p className="blogtextContentBlog">The hazy days of summer may have come to an end but local search is hotter than ever. Here's your monthly rundown of all the updates and announcements you should know about from September 2021.  </p>
                  
                  <h2 className="blogtextSubHead">Mozilla tries out Bing as default search engine</h2>
                  <p className="blogtextContentBlog">For many years now, Google has paid Firefox millions to be the browser's default search engine—but change is in the air. Mozilla is currently testing Bing as the default search engine for a small number of its overall user base (just 1%, in fact).</p>
                  <p className="blogtextContentBlog">Mozilla’s latest contract with Google is set to expire in 2023, so the developer appears to preparing for the possibility of life after Google. Firefox users can, of course, manually change their search settings, though most decide not to bother changing from defaults. So if Bing does indeed become Firefox’s new default for all users, expect a significant surge of search traffic to head Microsoft’s way. 
                  </p>
                  <div className="mapimagediv mb-4">
                  <img src={SEdefault} alt="food ordering" className="img-fluid mb-4 mt-4"></img>
                  </div>
                  <p className="blogtextContentBlog"> SEOs should already know that optimizing for non-Google directories is usually well worth the time and effort. After all, users who seek out Google alternatives (such as Bing and DuckDuckGo) tend to avoid Google products entirely. Savvy marketers should focus on these entirely separate users after they’ve sunk sufficient hours into optimizing for Google. Don't be entirely reliant on the search giant! </p>
                  <p className="blogtextContentBlog"> If your clients can't be compelled to look beyond the Google ecosystem, remind them that corroborating information across all tier-1 directories—such as Bing, Apple, and Facebook—can boost performance on Google. The reverse is also true: contradicting information on other directories may well cause Google to rank you lower. Make sure your local information across every directory is accurate, consistent, and up to date. </p>


                  <h2 className="blogtextSubHead">New annotations for shipping and returns </h2>
                  <p className="blogtextContentBlog">The pandemic firmly established online shopping and deliveries as a daily essential. In response, Google has added new shipping and return annotations in both Search and Shopping results. </p>
                  <div className="mapimagediv">
                  <img src={Shipping} alt="Search Engine Roundtable" className="img-fluid mb-4 mt-4"></img>
                  </div>
                  <p className="creditlink">Image:Search Engine Roundtable</p>

                  <p className="blogtextContentBlog">Sellers can now use shipping annotations (e.g. “Free 5-day delivery”) to give shoppers more confidence ahead of the forthcoming holiday season. Sellers can also indicate extended holiday return windows (e.g. “Free returns until Jan 31”). </p>
                  <p className="blogtextContentBlog">With supply chains continuing to struggle, the holiday shopping rush is likely to happen earlier this year. Retailers should optimize their online infrastructure now and deploy these useful annotations as soon as possible. </p>
                  <p className="blogtextContentBlog">Remember also that dedicated landing pages for holiday sales events is great for SEO. Even if you're not yet in a position to finalize offers or populate content, Google strongly encourages seasonal sales pages that are properly marked up and indexable. </p>
                    
                  <h2 className="blogtextSubHead">Google Posts appear on third-party sites </h2>
                  <p className="blogtextContentBlog">Google Posts are no longer limited to business listings, but will now "appear on Google services across the web, like Maps and Search, and on third-party sites". </p>
                  <p className="blogtextContentBlog">Google has not said how Google Posts will appear on third-party sites (or revealed which sites are included), but it's clear that the search giant wants to boost the reach of its microblogging feature. </p>
                  <div className="mapimagediv">
                  <img src={SepPost} alt="Search Engine Roundtable" className="img-fluid mb-4 mt-4"></img>
                  </div>
                  <p className="creditlink">Image:Search Engine Roundtable</p>
                  <p className="blogtextContentBlog">Google recently lifted a 10-location limit, allowing larger businesses to use Google Posts. Uptake should be further stimulated by this move to expand Google Post creation beyond the Google Business Profile (GBP) dashboard. Users can now create Google Posts directly from search via an “Add update” button. </p>

                  <h2 className="blogtextSubHead">Get your tickets on Google! </h2>
                  <p className="blogtextContentBlog">Again driven by pandemic-era trends, Google is helping travel and leisure businesses by displaying ticket-booking information alongside standard results when users search for in-person attractions and experiences. Retailers have largely been able to adapt their tactics to continue capturing demand in the chaos of the last two years, but it was a different story for businesses unable to deploy ecommerce alternatives.  </p>
                  <p className="blogtextContentBlog">Basic admissions and ticketing options will appear within attractions' knowledge graphs, much as it does for hotel knowledge graphs. At time of writing, ticket-booking links carry no cost. Want to capitalize? Swing by <a href="https://support.google.com/hotelprices/answer/10723429" target="_blank" rel="noopener noreferrer" className="linkunderline">Help Center</a> for more. </p>
                  
                 
                  
                  <h2 className="blogtextSubHead">GBP removes Site Manager user role </h2>
                  <p className="blogtextContentBlog">Google is removing the Site Manager user role from GBP at the end of October 2021, with all users in that role moved to Manager. </p>
                  <div className="mapimagediv">
                  <img src={SepGMP} alt="Yelp celebrates Pride Month " className="img-fluid mb-4 mt-4"></img>
                  </div>
                  <p className="blogtextContentBlog">The change will leave three roles in GBP: </p>
                  <ul className="blogtextContentBlog pl-4 mt-4  blogpost-sep-list">
                    <li><p>Primary Owner</p></li>
                    <li><p>Owner</p></li>
                    <li><p>Manager</p></li>
                  </ul>
                  <p className="blogtextContentBlog mt-3">Primary Owners and Owners have the same full permissions, though the former must be associated with the email address used to create the listing. Managers, on the other hand, cannot add or remove users or listings. The Site Manager role, soon to be defunct, could not edit every aspect of business information nor accept all suggested updates.  </p>
                  <p className="blogtextContentBlog">Make no mistake—it takes a lot to get ahead and stay ahead in local search. Don't want to dedicate entire teams and budgets to it? Then we're here to do it for you. <a href="/contact" target="_blank" rel="noopener noreferrer" className="linkunderline">Check in with us</a> to learn more!</p>



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
