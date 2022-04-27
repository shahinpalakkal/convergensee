import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from "../layout/header"
import Footer from "../layout/footer"
import Banner from "../home/banner"
import WorkingAgency from "../home/working-agency"
import CustomerJourney from "../home/customer-journey"
import LocalSearch from "../home/local-search"

export default class home extends Component {
  render() {
    return (
      <div className="convergensee-wrapper home-wrapper">
          <Helmet>
            <title>{"ConvergenSEE | Online Presence Management Platform"}</title>
            <meta
              name="description"
              content="Support your clients with the foundation for local search. Make sure their business can be found everywhere"
            />
            <link rel="canonical" href={"/"} />
            <meta name="twitter:description" content="Support your clients with the foundation for local search. Make sure their business can be found everywhere"></meta>
            <meta name="facebook:title" content="ConvergenSEE | Online Presence Management Platform"></meta>
            <meta property='og:type' content='website' />
            <meta property="og:title" content="ConvergenSEE | Online Presence Management Platform" ></meta>
            <meta property="og:description" content="Support your clients with the foundation for local search. Make sure their business can be found everywhere" ></meta>
            <meta property='og:site_name' content="Convergensee" />
            <meta property="og:url" content={window.location.href} ></meta>
          </Helmet>
          <Header></Header>
          <main role="main">
            <Banner></Banner>
            <WorkingAgency></WorkingAgency>
            <CustomerJourney></CustomerJourney>
            <LocalSearch></LocalSearch>
          </main>
          <Footer></Footer>
      </div>
    )
  }
}
