import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from "../layout/header";
import Footer from "../layout/footer";
// import bolg1 from "../image/apple-laptop-notebook.png"
// import bolg2 from "../image/unsplash.png"
// import bolg3 from "../image/CyRk-unsplash.png"
// import bolg4 from "../image/krisztian-unsplash.png"
// import bolg5 from "../image/krisztian.png"
// import bolg6 from "../image/Blog-US-jan-2021.jpg"
import convergenSEEBlogJan from "../image/convergenSEEBlogJan.jpg"
import convergenSEEBlogFeb from "../image/convergenSEEBlogFeb.jpg"
import convergenSEEBlogMarch from "../image/convergenSEEBlogMarch.jpg"
import convergenSEEBlogApr from "../image/convergenSEEBlogApr.jpg"
import convergenSEEBlogMay from "../image/convergenSEEBlogMay.jpg"
import convergenSEEBlogJune from "../image/ConvergenSEEBlogJune.jpg"
import ConvergenSEEBlogJuly from "../image/ConvergenSEEBlogJuly.jpg"
import ConvergenSEEBlogAugust from "../image/ConvergenSEEBlogAugust.jpg"
import convergenSEEBlogSeptember from "../image/ConvergenSEEBlogSeptember.jpg"
import convergenSEEBlogOctober from "../image/convergenSEEBlogOctober.jpg"
import convergenSEEBlogNovember from "../image/convergenSEEBlogNovember.jpg"
import convergenSEEBlogJan2022 from "../image/convergenSEEBlogJan-2022.jpg"
import convergenSEEBlogFeb2022 from "../image/convergenSEEBlogFeb-2022.jpg"
import convergenSEEBlogMar2022 from "../image/convergenSEEBlogMar-2022.jpg"


import rightArrow from "../image/right-arrow.png"
import rightArrowblue from "../image/right-arrow-blue.png"
import $ from "jquery";
import {Link} from "react-router-dom";
// import Pagination from "react-js-pagination";
// import ReactPaginate from "react-paginate";
// import blog from './blog-post';




export default class blogs extends Component {
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
      <title>{"Blog | ConvergenSEE "}</title>
        <meta
          name="description"
          content="Support your clients with the foundation for local search. Make sure their business can be found everywhere"
          />
          <link rel="canonical" href={"/blog"} /> 
          <meta name="twitter:description" content="Support your clients with the foundation for local search. Make sure their business can be found everywhere"></meta>
          <meta name="facebook:title" content="Blog | ConvergenSEE"></meta>
          <meta property='og:type' content='website' />
          <meta property="og:title" content="Blog | ConvergenSEE" ></meta>
          <meta property="og:description" content="Support your clients with the foundation for local search. Make sure their business can be found everywhere" ></meta>
          <meta property='og:site_name' content="Convergensee" />
          <meta property="og:url" content={window.location.href} ></meta>
      </Helmet>
        <Header></Header>
        <main className="mainWrapper">

          <nav className="container breadcrumb-det web-show my-3 pt-3 pb-2" aria-label="breadcrumb">
            <ol className="p-0">
              <li className="breadcrumb-detls"><a href="../home/home">ConvergenSEE</a></li>
              <li className="breadcrumb-detls" aria-current="page">Blog</li>
            </ol>
          </nav>

          <nav className="container breadcrumb-det mob-show pt-2 " aria-label="breadcrumb">
            <ol className="p-0">
              <li className="breadcrumb-detls"><a href="/">ConvergenSEE</a></li>
            </ol>
          </nav>
          <div className="container convergensee-main blogpost-main">
            <div className="row mt-0 mt-md-4">


              {/* <div className="col-lg-3 col-md-4  mt-md-0 p-0">
                  <div className="category-main">

                    <div className="category-list">
                      <a href="#"><div className="category-sub">COVID-19 Series</div></a>
                      <a href="#"><div className="category-sub">Content Strategy</div></a>
                      <a href="#"><div className="category-sub">Customer Relationship Management</div></a>
                      <a href="#"><div className="category-sub">Design</div></a>
                      <a href="#"><div className="category-sub">Local Presence Management</div></a>
                      <a href="#"><div className="category-sub">News</div></a>
                      <a href="#"><div className="category-sub">SEM</div></a>
                      <a href="#"><div className="category-sub">SEO</div></a>
                      <a href="#"><div className="category-sub">Strategic Insights</div></a>
                    </div>
                  </div>
                </div> */}


              <div className="col-lg-12 col-md-12">
                <div className="col-md-12 pb-5 borderBotm">
                  <h1 className="mainHeadBlogPost" id="main" tabIndex="-1">Blog</h1>


                  <div>
                    <div className="LocalsearchImgdiv mt-2">
                      <img src={convergenSEEBlogMar2022} alt="convergenSEE Blog March 2022" className="img-fluid mb-3 LocalsearchImg"></img>
                    </div>
                    <Link to="/blog/local-search-news-march-2022" className="d-block"><h2 className="bloguser-text sub-head subtext-bold"> Local Search News: March 2022  </h2></Link>
                    <div className="bloguser-det my-3">
                      <div className="blog-detls">March 2022</div>
                    </div>
                    <p className="blogtext">It's a new season, new month, and time for new changes in local search. Map upgrades, verification updates, new attributes, and stricter review algorithms have made their mark this March. Read on for all the details you need to know. </p>
                    <div ><Link className="readmoreBlog" target="_blank" rel="noopener noreferrer" to="/blog/local-search-news-march-2022">Read More </Link><img src={rightArrow} alt="" className="pl-1 rightArrow" /> <img src={rightArrowblue} alt="" className="rightArrowBlue pl-1"  /></div>
                  </div>


                  <div>
                    <div className="LocalsearchImgdiv mt-5">
                      <img src={convergenSEEBlogFeb2022} alt="convergenSEE Blog February 2022" className="img-fluid mb-3 LocalsearchImg"></img>
                    </div>
                    <Link to="/blog/local-search-news-february-2022" className="d-block"><h2 className="bloguser-text sub-head subtext-bold"> Local Search News: February 2022  </h2></Link>
                    <div className="bloguser-det my-3">
                      <div className="blog-detls">February 2022</div>
                    </div>
                    <p className="blogtext">It’s time once again for the latest in local search. New moderation policies, refreshed settings, disappearing features, plus a major algorithm update, have all rolled in this month. Catch up on the details you need to know. </p>
                    <div ><Link className="readmoreBlog" target="_blank" rel="noopener noreferrer" to="/blog/local-search-news-february-2022">Read More </Link><img src={rightArrow} alt="" className="pl-1 rightArrow" /> <img src={rightArrowblue} alt="" className="rightArrowBlue pl-1"  /></div>
                  </div>

                  <div>
                    <div className="LocalsearchImgdiv mt-5">
                      <img src={convergenSEEBlogJan2022} alt="convergenSEE Blog January 2022" className="img-fluid mb-3 LocalsearchImg"></img>
                    </div>
                    <Link to="/blog/local-search-news-january-2022" className="d-block"><h2 className="bloguser-text sub-head subtext-bold"> Local Search News: January 2022  </h2></Link>
                    <div className="bloguser-det my-3">
                      <div className="blog-detls">January 2022</div>
                    </div>
                    <p className="blogtext">It’s hard to believe January’s already behind us. Time slips by in local search, especially with a rush of new Google Business Profile (GBP) updates to kickstart the year. We’ll get you caught up with the top local search stories from January 2022.</p>
                    <div ><Link className="readmoreBlog" target="_blank" rel="noopener noreferrer" to="/blog/local-search-news-january-2022">Read More </Link><img src={rightArrow} alt="" className="pl-1 rightArrow" /> <img src={rightArrowblue} alt="" className="rightArrowBlue pl-1"  /></div>
                  </div>


                  <div>
                    <div className="LocalsearchImgdiv mt-5">
                      <img src={convergenSEEBlogNovember} alt="convergenSEE Blog November 2021" className="img-fluid mb-3 LocalsearchImg"></img>
                    </div>
                    <a href="/blog/local-search-news-november-2021" className="d-block"><h2 className="bloguser-text sub-head subtext-bold"> Local Search News: November 2021  </h2></a>
                    <div className="bloguser-det my-3">
                      <div className="blog-detls">November 2021</div>
                    </div>
                    <p className="blogtext">The holidays are here, complete with some shiny new updates from Google. So, let's run through the most important developments in local search this month—and keep your business on the “nice” list this year!  </p>
                    <div ><a className="readmoreBlog" target="_blank" rel="noopener noreferrer" href="/blog/local-search-news-november-2021">Read More </a><img src={rightArrow} alt="" className="pl-1 rightArrow" /> <img src={rightArrowblue} alt="" className="rightArrowBlue pl-1"  /></div>
                  </div>


                  
                  <div>
                    <div className="LocalsearchImgdiv mt-5">
                      <img src={convergenSEEBlogOctober} alt="convergenSEE Blog October 2021" className="img-fluid mb-3 LocalsearchImg"></img>
                    </div>
                    <a href="/blog/local-search-news-october-2021" className="d-block"><h2 className="bloguser-text sub-head subtext-bold"> Local Search News: October 2021 </h2></a>
                    <div className="bloguser-det my-3">
                      <div className="blog-detls">October 2021</div>
                    </div>
                    <p className="blogtext">With another month comes more changes to local search. If you feel like it’s becoming harder and harder to keep up with Google search results changes, you aren’t alone. Data shows changes to Google search results have been more frequent and intense in 2021 compared to other years. Unconfirmed-yet-impactful Google algorithm updates have added to 68% more volatility on desktop and 85% more volatility on mobile. </p>
                    <div ><a className="readmoreBlog" target="_blank" rel="noopener noreferrer" href="/blog/local-search-news-october-2021">Read More </a><img src={rightArrow} alt="" className="pl-1 rightArrow" /> <img src={rightArrowblue} alt="" className="rightArrowBlue pl-1"  /></div>
                  </div>


                  <div>
                    <div className="LocalsearchImgdiv mt-5">
                      <img src={convergenSEEBlogSeptember} alt="convergenSEE Blog September 2021" className="img-fluid mb-3 LocalsearchImg"></img>
                    </div>
                    <a href="/blog/local-search-news-september-2021" className="d-block"><h2 className="bloguser-text sub-head subtext-bold"> Local Search News: September 2021 </h2></a>
                    <div className="bloguser-det my-3">
                      <div className="blog-detls">September 2021</div>
                    </div>
                    <p className="blogtext">The hazy days of summer may have come to an end but local search is hotter than ever. Here's your monthly rundown of all the updates and announcements you should know about from September 2021. </p>
                    <div ><a className="readmoreBlog" target="_blank" rel="noopener noreferrer" href="/blog/local-search-news-september-2021">Read More </a><img src={rightArrow} alt="" className="pl-1 rightArrow" /> <img src={rightArrowblue} alt="" className="rightArrowBlue pl-1"  /></div>
                  </div>


                  <div>
                    <div className="LocalsearchImgdiv mt-5">
                      <img src={ConvergenSEEBlogAugust} alt="convergenSEE Blog August 2021" className="img-fluid mb-3 LocalsearchImg"></img>
                    </div>
                    <a href="/blog/local-search-news-august-2021" className="d-block"><h2 className="bloguser-text sub-head subtext-bold"> Local Search News: August 2021 </h2></a>
                    <div className="bloguser-det my-3">
                      <div className="blog-detls">August 2021</div>
                    </div>
                    <p className="blogtext">The world of local search never takes a break—and neither do we! Join us for a short rundown of all the local search news and updates you need to know from August. </p>
                    <div ><a className="readmoreBlog" target="_blank" rel="noopener noreferrer" href="/blog/local-search-news-august-2021">Read More </a><img src={rightArrow} alt="" className="pl-1 rightArrow" /> <img src={rightArrowblue} alt="" className="rightArrowBlue pl-1"  /></div>
                  </div>

                  <div>
                    <div className="LocalsearchImgdiv mt-5">
                      <img src={ConvergenSEEBlogJuly} alt="convergenSEE Blog July 2021" className="img-fluid mb-3 LocalsearchImg"></img>
                    </div>
                    <a href="/blog/local-search-news-july-2021" className="d-block"><h2 className="bloguser-text sub-head subtext-bold"> Local Search News: July 2021 </h2></a>
                    <div className="bloguser-det my-3">
                      <div className="blog-detls">July 2021</div>
                    </div>
                    <p className="blogtext">A new UI for restaurant reviews, Google Posts for hotels (for the first time ever!), and a surprising ability to remove contact numbers from business listings. Here are all the updates you need to know from another busy month in the world of local search. </p>
                    <div ><a className="readmoreBlog" target="_blank" rel="noopener noreferrer" href="/blog/local-search-news-july-2021">Read More </a><img src={rightArrow} alt="" className="pl-1 rightArrow" /> <img src={rightArrowblue} alt="" className="rightArrowBlue pl-1"  /></div>
                  </div>

                  <div>
                    <div className="LocalsearchImgdiv mt-5">
                      <img src={convergenSEEBlogJune} alt="convergenSEE Blog June 2021" className="img-fluid mb-3 LocalsearchImg"></img>
                    </div>
                    <a href="/blog/local-search-news-june-2021" className="d-block"><h2 className="bloguser-text sub-head subtext-bold"> Local Search News: June 2021 </h2></a>
                    <div className="bloguser-det my-3">
                      <div className="blog-detls">June 2021</div>
                    </div>
                    <p className="blogtext">It's time for your handy rundown of June's most significant changes in local search. From a two-part core algorithm update to the end of "short names" in Google Business Profile (GBP), this is the news you need to know. </p>
                    <div ><a className="readmoreBlog" target="_blank" rel="noopener noreferrer" href="/blog/local-search-news-june-2021">Read More </a><img src={rightArrow} alt="" className="pl-1 rightArrow" /> <img src={rightArrowblue} alt="" className="rightArrowBlue pl-1"  /></div>
                  </div>


                  <div>
                    <div className="LocalsearchImgdiv mt-5">
                      <img src={convergenSEEBlogMay} alt="convergenSEE Blog May 2021" className="img-fluid mb-3 LocalsearchImg"></img>
                    </div>
                    <a href="/blog/local-search-news-may-2021" className="d-block"><h2 className="bloguser-text sub-head subtext-bold"> Local Search News: May 2021 </h2></a>
                    <div className="bloguser-det my-3">
                      <div className="blog-detls">May 2021</div>
                    </div>
                    <p className="blogtext">Restrictions loosened in many parts of the world and there was a host of updates and upgrades in local search. Yes, May 2021 had a little bit of everything, so let's dig beneath the surface to truly understand the changes that matter most. </p>
                    <div ><a className="readmoreBlog" target="_blank" rel="noopener noreferrer" href="/blog/local-search-news-may-2021">Read More </a><img src={rightArrow} alt="" className="pl-1 rightArrow" /> <img src={rightArrowblue} alt="" className="rightArrowBlue pl-1"  /></div>
                  </div>


                  <div>
                    <div className="LocalsearchImgdiv mt-5">
                      <img src={convergenSEEBlogApr} alt="convergenSEE Blog April 2021" className="img-fluid mb-3 LocalsearchImg"></img>
                    </div>
                    <a href="/blog/local-search-news-april-2021"  className="d-block"><h2 className="bloguser-text sub-head subtext-bold"> Local Search News: April 2021</h2> </a>
                    <div className="bloguser-det my-3">
                      <div className="blog-detls">April 2021</div>
                    </div>
                    <p className="blogtext">Spring has sprung and the changes continue in local search. Here’s your monthly rundown of the most important updates, including a new local two-pack and some handy delivery/pickup features for local businesses.</p>
                    <div ><a className="readmoreBlog" target="_blank" rel="noopener noreferrer" href="/blog/local-search-news-april-2021">Read More </a><img src={rightArrow} alt="" className="pl-1 rightArrow" /> <img src={rightArrowblue} alt="" className="rightArrowBlue pl-1"  /></div>
                  </div>


                  <div>
                    <div className="LocalsearchImgdiv mt-5">
                      <img src={convergenSEEBlogMarch} alt="convergenSEE Blog March 2021" className="img-fluid mb-3 LocalsearchImg"></img>
                    </div>
                    <a href="/blog/local-search-news-march-2021"  className="d-block"> <h2 className="bloguser-text sub-head subtext-bold"> Local Search News: March 2021 </h2></a>
                    <div className="bloguser-det my-3">
                      <div className="blog-detls">March 2021</div>
                    </div>
                    <p className="blogtext">March ushered in a series of changes in local search, from free Google Hotels listings to a handy new "estimated cost" field in the local pack. Some updates are experimental, others overdue, and all are worth checking out. Let's get to it. </p>
                    <div ><a className="readmoreBlog" target="_blank" rel="noopener noreferrer" href="/blog/local-search-news-march-2021">Read More </a><img src={rightArrow} alt="" className="pl-1 rightArrow" /> <img src={rightArrowblue} alt="" className="rightArrowBlue pl-1"  /></div>
                  </div>

                  <div>
                    <div className="LocalsearchImgdiv mt-5">
                      <img src={convergenSEEBlogFeb} alt="convergenSEE Blog February 2021" className="img-fluid mb-3 LocalsearchImg"></img>
                    </div>
                    <a href="/blog/local-search-news-february-2021"  className="d-block"> <h2 className="bloguser-text sub-head subtext-bold"> Local Search News: February 2021</h2> </a>
                    <div className="bloguser-det my-3">
                      <div className="blog-detls">February 2021</div>
                    </div>
                    <p className="blogtext">Sometimes it's the subtlest changes that have the biggest impact. This month in local search, updates including desktop messaging and stars in review snippet made life just a little easier for businesses, marketers, and anybody interested in driving local growth. Let's take a closer look.</p>
                    <div ><a className="readmoreBlog" target="_blank" rel="noopener noreferrer" href="/blog/local-search-news-february-2021" >Read More </a><img src={rightArrow} alt="" className="pl-1 rightArrow" /> <img src={rightArrowblue} alt="" className="rightArrowBlue pl-1"  /></div>
                  </div>



                  <div>
                    <div className="LocalsearchImgdiv mt-5">
                      <img src={convergenSEEBlogJan} alt="convergenSEE Blog January 2021" className="img-fluid mb-3 LocalsearchImg"></img>
                    </div>
                    <a href="/blog/local-search-news-january-2021"  className="d-block"><h2 className="bloguser-text sub-head subtext-bold">  Local Search News: January 2021  </h2></a>
                    <div className="bloguser-det my-3">
                      <div className="blog-detls">January 2021</div>
                      {/* <div className="blog-detls">Zoran Dobrijevic</div>
                      <a className="blog-detls blogdeltsText">Local Presence Management</a> */}
                    </div>
                    <p className="blogtext">A wild year may be over, but local search continues to change and adapt. January actually brought a number of significant updates, including a new UI for Google listings, crowdsourced health and safety information, and an exciting new way to spotlight price drops in product-related searches. Let's take a closer look.</p>
                    {/* <h2 className="subHead">Google Business Profile (GBP) service menus get an update</h2>
                  <p className="blogtext">GBP recently updated its ability to use a business’s defined services to produce a “provides” highlight on both desktop and mobile SERPs. The service menu in GBP has existed for a long time, of course, but its hard to overstate how much additional value this update brings.</p> */}
                    <div ><a className="readmoreBlog" target="_blank" rel="noopener noreferrer" href="/blog/local-search-news-january-2021">Read More </a><img src={rightArrow} alt="" className="pl-1 rightArrow" /> <img src={rightArrowblue} alt="" className="rightArrowBlue pl-1"  /></div>
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
