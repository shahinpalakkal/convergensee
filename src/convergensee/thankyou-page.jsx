import React, { Component } from 'react';
import Header from "../layout/header"
import Footer from "../layout/footer" 
import Thankyou from "../image/thankyou-img.png"  
import Head from "./Head"
import { Helmet } from 'react-helmet-async';


export default class contact extends Component {

  render() {
    return (
      <div className="convergensee-wrapper contact-wrapper">
            <Head            
              script={[
                {
                  async: '',
                  data: `gtag('event', 'conversion', {'send_to': 'AW-10841067444/wdU2CIzXg5IDELSftrEo'});`,
                },
              ]}>
            </Head>
            <Header></Header>
            <Helmet>
                <title>Thank You | ConvergenSEE</title>
                <meta name="description" content="Thank You" />
                <meta name="keywords" content='Thank You' ></meta>
               
                <link rel="canonical" href={"/thankyou"} />               
                <meta name="twitter:title" content="Thank You | ConvergenSEE"></meta>
                <meta name="twitter:description" content="Thank You"></meta>
                <meta name="facebook:title" content="Thank You | ConvergenSEE"></meta>
                <meta property='og:type' content='website' />
                <meta property="og:title" content="Thank You | ConvergenSEE" ></meta>
                <meta property="og:description" content="Thank You" ></meta>
                <meta property='og:site_name' content="Convergensee" />
                <meta property="og:url" content={window.location.href} ></meta>
            </Helmet>
          <main role="main">
              <div className="container Thankyou-pageOuter">
                  <div className='thankyouImgdiv'>
                        <img src={Thankyou} alt="Thankyou" className='img-fluid' />
                  </div>
                  <div className="thanku-contentdiv">

                      <div>
                          <h1 className="main-head main-head-boldthnku">Thank You !</h1>
                      </div>
                      <div className="thankutext">
                          {/* <p className="subtext sub-head-bold mb-1 pb-1">We'll get back to you shortly!</p> */}
                          <p className="subtext mb-0 pb-0">We'll get back to you shortly!</p>
                          <p className="subtext">In case of a query, reach us at <a href="tel:+918369737548" className='linkunderline-phne'>+91 8369737548</a></p>
                          
                      </div>

                  </div>
              </div>
           
          </main>

          <Footer></Footer>
      </div>
    )
  }
}
