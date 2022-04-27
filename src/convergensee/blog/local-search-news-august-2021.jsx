import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from "./../../layout/header"
import Footer from "./../../layout/footer"
import ConvergenSEEBlogAugust from "./././../../image/ConvergenSEEBlogAugust.jpg"
import RankingFactors from "./../../image/About_This_Result.gif"
import $ from "jquery"


export default class blogAugust extends Component {
  componentDidMount()
  {
    $("#link-blog").addClass("link-active");
  }
  render() {
    return (
      <div className="convergensee-wrapper">
      <Helmet>
        <title>{"Local Search News: August 2021 | ConvergenSEE  "}</title>
        <meta
          name="description"
          content="Local search never takes a break—and neither do we! Join us for a short rundown of all the local search news and updates you need to know from August."
          />
          <link rel="canonical" href={"/blog/local-search-news-august-2021"} /> 
          <meta name="twitter:description" content="Local search never takes a break—and neither do we! Join us for a short rundown of all the local search news and updates you need to know from August."></meta>
          <meta name="facebook:title" content="Local Search News: August 2021 | ConvergenSEE"></meta>
          <meta property='og:type' content='website' />
          <meta property="og:title" content="Local Search News: August 2021 | ConvergenSEE" ></meta>
          <meta property="og:description" content="Local search never takes a break—and neither do we! Join us for a short rundown of all the local search news and updates you need to know from August." ></meta>
          <meta property='og:site_name' content="Convergensee" />
          <meta property="og:url" content={window.location.href} ></meta>
      </Helmet>
          <Header></Header>

          <main className="mainWrapper">

          <nav className="container breadcrumb-det web-show my-3 pt-3 pb-1" aria-label="breadcrumb">
            <ol className="p-0">
              <li className="breadcrumb-detls"><a href="../home/home">ConvergenSEE</a></li>
              <li className="breadcrumb-detls"><a href="/blog">Blog</a></li>
              <li className="breadcrumb-detls" aria-current="page">Local Search News: August 2021</li>
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
                  <h1  className="bloguser-head" id="main" tabIndex="-1">Local Search News: August 2021 </h1>
                  <div className="bloguser-det my-3">
                    <div className="blog-detls">August 2021</div>
                  </div>
                  <div className="LocalsearchImgdiv mt-4">
                    <img src={ConvergenSEEBlogAugust} alt="convergenSEE August 2021" className="img-fluid mb-5 LocalsearchImg"></img>
                  </div>
                  <p className="blogtextContentBlog">The world of local search never takes a break—and neither do we! Join us for a short rundown of all the local search news and updates you need to know from August. </p>

                  <h2 className="blogtextSubHead">Google sheds light on its ranking factors</h2>

                  <p className="blogtextContentBlog">Google's handy “About this result” panel has been overhauled to reveal why certain pages have been ranked for a user’s query. Ask any local SEO expert and they'll tell you that explaining performance is a significant part of their jobs. With this update, Google is making its own reasoning much clearer—and taking a lot of the guesswork out of these conversations. Look for the most common factors to include: </p>
                  <ul className="blogtextContentBlog pl-4 mt-2 blogtextContentBlogMargin">
                    <li><p><b>Matching keywords:</b> Does a webpage contain the same keywords as the search?</p></li>
                    <li><p><b>Related terms:</b> If your query is “how to cook pasta in the oven”, expect to see results for related terms like “bake” and “recipe”.</p></li>
                    <li><p><b>Links:</b> When other pages link to a page using similar words as your query, that page might be relevant to your search.</p></li>
                     <li><p><b>Local relevance:</b> Google considers factors including language and location to deliver content relevant for your area, especially for searches with local intent, like "what day is trash pickup?" </p></li>
                  </ul>
                  {/* <h2 className="blogtextSubHead">New details for restaurant reviews on Google Maps </h2> */}
                  <div className="mapimagediv">
                  <img src={RankingFactors} alt="Google sheds light on its ranking factors" className="img-fluid "></img>
                  </div>
                  <p className="creditlink">GIF: Google </p>
                  <p className="blogtextContentBlog">Remember Google ranking will vary according to the specific combination of keywords, the user’s location, the particulars of their Google profile, and a host of other factors (as revealed by our proprietary  <a href="https://www.convergensee.com/local-rank" target="_blank" rel="noopener noreferrer" className="linkunderline">Local Rank+</a> tool). These “About this result” enhancements will certainly help rankings slightly less mysterious for users and SEOs alike. </p>

                  <h2 className="blogtextSubHead">Google will keep allowing chains to create Google Posts via API </h2>
                  <p className="blogtextContentBlog">Understanding that virtually every physical business has to share current health and safety information in the COVID era, Google has been allowing chains (businesses with 10+ locations) to publish Google Posts in bulk across their listings. The search giant originally wanted to remove this ability when COVID abated, but has now revealed that brand-wide posting functionality will be permanent. </p>
                   <p className="blogtextContentBlog">Google Posts were initially conceived to be micro-blogs for specific locations rather than advertising space for a larger brand. That's why they were aimed at small and medium businesses thought to be more adept at local campaigns than their enterprise competitors (or head offices). But large chains have made effective use of Google Posts to communicate local health and safety updates, showing Google that this mechanism remains local in spirit.

                    Businesses that understand how to effectively scale local marketing in the form of Google Posts stand to reap the benefits of this update. Take advantage while you can—this may become a paid feature further down the line. </p>
                                      <h2 className="blogtextSubHead">Google link spam algorithm update  </h2>

                  {/* <div className="borderleftdiv">
                    <div className="borderleftdivImg"><img src={leftquotessign} alt="leftquotessign" /></div>
                  <div className="blogtextcontentItalic">
                  <p className="blogtextContentBlog">In our continued efforts to improve the quality of the search results, we’re launching a new link spam fighting change today—which we call the “link spam update”… Sites taking part in link spam will see changes in Search as those links are re-assessed by our algorithms.</p>
                  </div>
                  </div> */}
                    <p className="blogtextContentBlog">In our continued efforts to improve the quality of the search results, we’re launching a new link spam fighting change today—which we call the “link spam update”… Sites taking part in link spam will see changes in Search as those links are re-assessed by our algorithms. </p>
                    <p className="blogtextContentBlog">As part of its latest attempt to identify and nullify spam, Google is focusing its efforts on spam links, meaning affiliate, sponsored, and advertising links masquerading as authentic content.

                    Don’t want your legitimate business to be inadvertently impacted? Heed Google's word and make sure your affiliate links are marked up and appropriately tagged as sponsored content. If you fail to do so, linked pages may be penalized by the search giant. It doesn't matter to Google if the markup is missing through malice or mistake; action will be taken regardless. </p>


                  <h2 className="blogtextSubHead">New sustainability attributes for hotels </h2>
                  <p className="blogtextContentBlog">Google has added sustainably and eco-certification attributes exclusively for the hospitality sector. As a result, hotels can now list “Food waste reduction program” and “Vegetarian meal options” from a host of new attribute categories, including:</p>
                  <ul className="blogtextContentBlog pl-4 mt-2 blogtextContentBlogMargin">
                    <li><p>Energy efficiency</p></li>
                    <li><p>Water conservation</p> </li>
                    <li><p>Waste reduction</p></li>
                    <li><p>Sustainable sourcing</p></li>
                   </ul>
                  <p className="blogtextContentBlog">Run or work with a hospitality business? Review these attribute options and include whichever may apply to your listings—and be advised that you can also disclose your establishment’s official sustainability certifications.</p>
                  <h2 className="blogtextSubHead">Yelp introduces vaccine-focused attributes </h2>
                  <p className="blogtextContentBlog">With many nations struggling to standardize vaccination requirements, Yelp is helping businesses display this information themselves. New “Proof of vaccination required” and “Staff fully vaccinated” profile attributes are now available—and users can search for businesses using these parameters. </p>
                  <p className="blogtextContentBlog">Because vaccine mandates are often unclear (and too often considered controversial), Yelp has seen its reviewers focus only on a business's vaccine requirements. To nip that in the bud, users can now see vaccine requirements in black and white, which should prevent the issue cluttering reviews. </p>
                  <p className="blogtextContentBlog">Want to get ahead (and stay ahead) in the ever-changing world of local search? We’re ready to help. <a href="https://www.convergensee.com/contact" target="_blank" rel="noopener noreferrer" className="linkunderline">Let’s talk.</a></p>
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
