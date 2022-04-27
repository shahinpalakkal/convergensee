import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from "../layout/header"
import Footer from "../layout/footer"  
// import bolg1 from "../image/apple-laptop-notebook.png"  
// import bolg2 from "../image/unsplash.png"   
// import bolg3 from "../image/CyRk-unsplash.png"   
// import bolg4 from "../image/krisztian-unsplash.png"   
// import bolg5 from "../image/krisztian.png"   
// import bolg7 from "../image/krisztian-tabori-IyaNci0CyRk-unsplash.png" 
// import bolg6 from "../image/Blog-US-jan-2021.jpg"
// import bloguser from "../image/blog-user.png"   
import bolgpost from "../image/blogpost1.jpg"
import $ from "jquery" 


export default class blogPost extends Component {
  componentDidMount()
  {
    $("#link-blog").addClass("link-active");
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
          <link rel="canonical" href={"/blog-post"} /> 
          <meta name="twitter:description" content="Support your clients with the foundation for local search. Make sure their business can be found everywhere"></meta>
          <meta name="facebook:title" content="Blog | ConvergenSEE"></meta>
          <meta property='og:type' content='website' />
          <meta property="og:title" content="Blog | ConvergenSEE" ></meta>
          <meta property="og:description" content="Support your clients with the foundation for local search. Make sure their business can be found everywhere" ></meta>
          <meta property='og:site_name' content="Convergensee" />
          <meta property="og:url" content={window.location.href} ></meta>
      </Helmet>
          <Header></Header>

          <main id="main" className="mainWrapper">
          <div className="container breadcrumb-det web-show my-3 pt-3 pb-4">
            <span className="breadcrumb-detls"><a href="../home/home">convergenSEE</a></span>
            <span className="breadcrumb-detls"><a href="/blog">Blog</a></span>
            <span className="breadcrumb-detls">Blog Title</span> 

          </div>

          <div className="container breadcrumb-det mob-show pt-2 pb-4">
            <div className="breadcrumb-detls"><a href="../home/home">convergenSEE</a></div>
          </div>
          <div className="container convergensee-main blogpost-main">
            <div className="row mt-0 mt-md-4">

              <div className="col-lg-12 col-md-12">
                <div className="col-md-12 pb-5">
                  <h1 className="mainHeadBlogPost">Blog</h1>
                  <div className="LocalsearchImgdiv mt-3">
                    <img src={bolgpost} alt="apple-laptop-notebook" className="img-fluid mb-5 LocalsearchImg"></img>
                  </div>
                  <h2 className="bloguser-text sub-head subtext-bold">April 2021 Local Search RoundUp </h2>
                  <div className="bloguser-det my-3">
                    <div className="blog-detls">Monday, May 03, 2021</div>
                    <div className="blog-detls">Zoran Dobrijevic</div>
                  </div>
                  <p className="blogtextContentBlog">As 2021 gets into full swing, so too do the changes in local search. Join us for a quick rundown of all the updates you need to know about, from enhanced delivery/pickup features to a shiny new local two pack.Let's go!
                  As 2021 gets into full swing, so too do the changes in local search. Join us for a quick rundown of all the updates you need to know about, from enhanced delivery/pickup features to a shiny new local two pack.Let's go!
                  As 2021 gets into full swing, so too do the changes in local search. Join us for a quick rundown of all the updates you need to know about, from enhanced delivery/pickup features to a shiny new local two pack.Let's go!</p>
                  {/* <a className="readmoreBlog" href="#">Read More</a> */}
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





          {/* <main role="main"  id="main">
            <div className="container convergensee-main">
              <h1 className="main-head"> Blog </h1>
                <div className="row mt-0 mt-md-5">

                  <div className="col-lg-4 col-md-6 mb-5">
                    <a href="../convergensee/blog-post">
                      <img src={bolg1} alt="apple-laptop-notebook" className="img-fluid"></img>
                      <div className="subtext bloguser-text">Lorem ipsum dolor sit amet, elit, do eiusmod tempor incididunt </div>
                      <div className="bloguser-det">
                        <div className="bloguser-img"><img alt="blog-user" src={bloguser}></img></div>
                        <div className="bloguser-name">Author Post</div>
                        <div className="bloguser-date"> - June 22, 2020</div>
                      </div>
                    </a>
                  </div>

                  <div className="col-lg-4 col-md-6 mb-5">
                    <a href="../convergensee/blog-post">
                      <img src={bolg2} alt="unsplash" className="img-fluid"></img>
                      <div className="subtext bloguser-text">Lorem ipsum dolor sit amet, elit, do eiusmod tempor incididunt </div>
                      <div className="bloguser-det">
                        <div className="bloguser-img"><img src={bloguser} alt="blog user"></img></div>
                        <div className="bloguser-name">Author Post</div>
                        <div className="bloguser-date"> - June 22, 2020</div>
                      </div>
                    </a>
                  </div>

                  <div className="col-lg-4 col-md-6 mb-5">
                    <a href="../convergensee/blog-post">
                      <img src={bolg3} alt="CyRk unsplash" className="img-fluid"></img>
                      <div className="subtext bloguser-text">Lorem ipsum dolor sit amet, elit, do eiusmod tempor incididunt </div>
                      <div className="bloguser-det">
                        <div className="bloguser-img"><img src={bloguser} alt="Blog user"></img></div>
                        <div className="bloguser-name">Author Post</div>
                        <div className="bloguser-date"> - June 22, 2020</div>
                      </div>
                    </a>
                  </div>

                  <div className="col-lg-4 col-md-6 mb-5">
                    <a href="../convergensee/blog-post">
                      <img src={bolg4} alt="Krisztian unsplash" className="img-fluid"></img>
                      <div className="subtext bloguser-text">Lorem ipsum dolor sit amet, elit, do eiusmod tempor incididunt </div>
                      <div className="bloguser-det">
                        <div className="bloguser-img"><img src={bloguser} alt="Blog user"></img></div>
                        <div className="bloguser-name">Author Post</div>
                        <div className="bloguser-date"> - June 22, 2020</div>
                      </div>
                    </a>
                  </div>

                  <div className="col-lg-4 col-md-6 mb-5">
                    <a href="../convergensee/blog-post">
                      <img src={bolg5} alt="Krisztian" className="img-fluid"></img>
                      <div className="subtext bloguser-text">Lorem ipsum dolor sit amet, elit, do eiusmod tempor incididunt </div>
                      <div className="bloguser-det">
                        <div className="bloguser-img"><img src={bloguser} alt="Blog user"></img></div>
                        <div className="bloguser-name">Author Post</div>
                        <div className="bloguser-date"> - June 22, 2020</div>
                      </div>
                    </a>
                  </div>

                  <div className="col-lg-4 col-md-6 mb-5">
                    <a href="../convergensee/blog-post">
                      <img src={bolg6} alt="krisztian-tabori-IyaNci0CyRk-unsplash" className="img-fluid"></img>
                      <div className="subtext bloguser-text">Lorem ipsum dolor sit amet, elit, do eiusmod tempor incididunt </div>
                      <div className="bloguser-det">
                        <div className="bloguser-img"><img src={bloguser} alt="Blog user"></img></div>
                        <div className="bloguser-name">Author Post</div>
                        <div className="bloguser-date"> - June 22, 2020</div>
                      </div>
                    </a>
                  </div>

                  <div className="col-md-12 text-center mt-0 mt-md-5">
                    <a className="commonButton">Read More</a>
                  </div>

                </div>
            </div>
          </main> */}

          <Footer></Footer>
      </div>
    )
  }
}
