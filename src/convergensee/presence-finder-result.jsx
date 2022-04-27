import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from "../layout/header"
import Footer from "../layout/footer" 
import $ from "jquery" 
import googleimg from "../image/google.png"
import yahooimg from "../image/yahoo.png"
import bingimg from "../image/bing.png"
import yelpimg from "../image/yelp.png"
import foursquareimg from "../image/foursquare.png"
import ypimg from "../image/yp.png"
import superpagesimg from "../image/superpages.png"
// import img1 from "../image/review.png"
// import illustrationsimg from "../image/illustrations.png"
// import citysearchimg from "../image/citysearch.png"
// import merchantcircleimg from "../image/merchantcircle.png"
// import scootimg from "../image/scoot.png"
// import touchlocalimg from "../image/touchlocal.png"
// import tripadvisorimg from "../image/tripadvisor.png"
// import yahooukimg from "../image/yahoouk.png"
// import yellimg from "../image/yell.png"
// import loadingimg from "../image/loading.gif"
import facebookbgimg from "../image/facebookbg.png"
import lnnotfoundimg from "../image/location-not-found.png"
import notappimg from "../image/not-applicable.png"
import preloaderimg from "../image/preloader.gif"
import check from "../image/check.png"
import ReactTooltip from 'react-tooltip';
import { scanCalling } from '../serivce'
import jsPDF from 'jspdf';

var htmlToImage = require('html-to-image');
let isSuccess = false;
export default class presenceFinderResult extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading : true,
      address: '',
      businessName:'',
      businessPhone:'',
      listData:[],
      successData:'',
      scores:[],
      accurate:'',
      isLoadingComplete:false,
      value: 'BusinessName'
    }
    this.selectChange = this.selectChange.bind(this)
  }
  
  componentDidMount()
  {
   // console.log('inside result........')
    $("#link-finder").addClass("link-active");   
    this.getData()
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async getData(){
    var successData = localStorage.getItem('successData')
    var successDataResult = JSON.parse(successData)
    this.setState({
      businessPhone : localStorage.getItem('businessPhone'),
      address : localStorage.getItem('address'),
      businessName : localStorage.getItem('businessName'),
    })
    
    for(var i=0; i<100; i++){  
      if(isSuccess===false)
      {
        const scanData = {
          method : "POST",
          body : JSON.stringify({
            functionName: "status",
            input: successDataResult
          })
        } 
          scanCalling(scanData).then((data) => {      
            if(data.result == 'Complete'){
              isSuccess=true;
              const scanData = {
                method : "POST",
                body : JSON.stringify({
                  functionName: "score",
                  input: successDataResult
                })
              }
              scanCalling(scanData).then((data) => {    
                this.setState({
                  isLoading:false,
                  isLoadingComplete: true,
                })
                setTimeout(() => {
                  this.setState({
                    isLoadingComplete: false,
                    listData:data.result.details,
                    scores:data.result.scores,
                  })
                  if (this.state.scores[0] > 80) {
                    $("#Visiblity").addClass("Visiblity-Green")
                  } else if (this.state.scores[0] < 60) {
                    $("#Visiblity").addClass("Visiblity-Red")
                  } else {
                    $("#Visiblity").addClass("Visiblity-Yellow")
                  }
                  if (this.state.scores[1] > 80) {
                    $("#Accuracy").addClass("Accuracy-Green")
                  } else if (this.state.scores[1] < 60) {
                    $("#Accuracy").addClass("Accuracy-Red")
                  } else {
                    $("#Accuracy").addClass("Accuracy-Yellow")
                  }
                  if (this.state.scores[2] > 80) {
                    $("#ContentAnalysis").addClass("ContentAnalysis-Green")
                  } else if (this.state.scores[2] < 60) {
                    $("#ContentAnalysis").addClass("ContentAnalysis-Red")
                  } else {
                    $("#ContentAnalysis").addClass("ContentAnalysis-Yellow")
                  }
                  if (this.state.scores[4] > 8) {
                    $("#SiteInconsistancy").addClass("SiteInconsistancy-Green")
                  } else if (this.state.scores[4] < 6) {
                    $("#SiteInconsistancy").addClass("SiteInconsistancy-Red")
                  } else {
                    $("#SiteInconsistancy").addClass("SiteInconsistancy-Yellow")
                  }
                }, 2000);
                localStorage.removeItem('successData');
              }) 
              return false; 
            }
          })
        } 
        await this.sleep(5000); 
    }
  }

  convertImage(){
    htmlToImage.toPng(document.getElementById('myPage'), { quality: 0.95 })
    .then(function (dataUrl) {
      var link = document.createElement('a');
      link.download = 'my-image-name.jpeg';
      const pdf = new jsPDF();
      const imgProps= pdf.getImageProperties(dataUrl);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(dataUrl, 'PNG', 0, 0,pdfWidth, pdfHeight);
      pdf.save("download.pdf"); 
    });
  }
  selectChange = (event) => {
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <div className="convergensee-wrapper presence-finder-wrapper">
          <Helmet>
          <title>{"Support your clients with the foundation for local search. Make sure their business can be found everywhere | ConvergenSEE "}</title>
            <meta
              name="description"
              content="Enter your business information below to get an instant report on the visibility, accuracy, and completeness of your local listings. Later on, one of our specialists will be in touch to chat about your brand's local presence online. It's as simple as that!"            />
          
            <link rel="canonical" href={"/presence-finder-result"} /> 
            <meta name="twitter:description" content="Enter your business information below to get an instant report on the visibility, accuracy, and completeness of your local listings. Later on, one of our specialists will be in touch to chat about your brand's local presence online. It's as simple as that!"></meta>
            <meta name="facebook:title" content="Support your clients with the foundation for local search. Make sure their business can be found everywhere | ConvergenSEE "></meta>
            <meta property='og:type' content='website' />
            <meta property="og:title" content="Support your clients with the foundation for local search. Make sure their business can be found everywhere | ConvergenSEE " ></meta>
            <meta property="og:description" content="Enter your business information below to get an instant report on the visibility, accuracy, and completeness of your local listings. Later on, one of our specialists will be in touch to chat about your brand's local presence online. It's as simple as that!" ></meta>
            <meta property='og:site_name' content="Convergensee" />
            <meta property="og:url" content={window.location.href} ></meta>
          </Helmet>
          <Header></Header>
          <main role="main"  id="main">
            <div className="convergensee-main">
              <div className="convergensee-bg-theme clr-theme pt-5 convergensee-bg-themePadding">
                  {/* <div className="main-head"> 
                    <div className="sub-head">HOW IS YOUR</div>
                    LOCAL PRESENCE? 
                  </div> */}
                  {this.state.isLoading === true ? 
                    // <div className="loading container clearfix">
                    //   <p className="text">Please wait... computing...</p>
                    //   <p>
                    //     <img  src={loadingimg} alt="loading" className="my-4" width="200"/>
                    //   </p>
                                  
                    //   <div className="illustrations">
                    //   <img className="img-fluid" src={illustrationsimg} alt="illustration" />
                    //   </div>
                    // </div>
                    <div className="loading container clearfix">
                      <h1 className="text">This might take a little bit of time...</h1>
                      <p style={{color:"#f0aa2c"}}>
                        Your report is processing
                      </p>
                      <p className="mb-0">
                        <img  src={preloaderimg} alt="preloaderimg" width="200"/>
                    </p>     
                    </div>
                  :
                  <div>
                    {this.state.isLoadingComplete === true ?
                      <div className="loading container clearfix">
                        <p className="mb-0">
                          <img  src={check} alt="preloaderimg" width="30"/>
                        </p>  
                        <h1 className="text" style={{color:'#13cfbd'}}>Your report is complete!</h1>
                      </div>
                    :
                      <div>
                        <h1 className="main-head"> 
                          <div className="sub-head">HOW IS YOUR</div>
                          LOCAL PRESENCE? 
                        </h1>
                        <div className="row mt-0 mt-md-5 convergenseeMargin" id="myPage" style={{width:'100%'}}>
                              <div className="col-lg-12 sales-audit-result">
                                <p><span>YOUR INFO: </span>{this.state.businessName} / {this.state.address} / {this.state.businessPhone} /</p>
                              </div>
                              <div className="col-lg-12 px-0">
                    
                                <div id="Visiblity" className="score-box col-xs-12 col-sm-3">
                                  <div className="score-text">
                                    <a data-tip role="none" data-for='visibilityTooltip'> 
                                      <span>VISIBILITY</span>
                                      <span className="score-count">{this.state.scores[0]}%</span>
                                      <ReactTooltip id='visibilityTooltip' type={'light'} border={true} data-type="success" effect='solid'>
                                        <span>Visibility confirms that your Business listing has been found on all sites</span>
                                      </ReactTooltip> 
                                    </a>
                                  </div>
                                </div>
                                
                                <div id="Accuracy" className="score-box col-xs-12 col-sm-3">
                                  <div className="score-text">
                                    <a data-tip role="none" data-for='accuracyTooltip'> 
                                      <span>ACCURACY</span>
                                      <span className="score-count">{this.state.scores[1]}%</span>
                                      <ReactTooltip id='accuracyTooltip' type={'light'} border={true} place={'top'} effect='solid'>
                                        <span>Accuracy compares your Business Name, Address and Phone Number to the listing Data found on each site queried</span>
                                      </ReactTooltip> 
                                    </a>
                                  </div>
                                </div>
                              
                                <div id="ContentAnalysis" className="score-box content-analysis col-xs-12 col-sm-3">
                                  <div className="score-text">
                                    <a data-tip role="none" data-for='contentTooltip'> 
                                      <span style={{width: '130px'}}>CONTENT ANALYSIS</span>
                                      <span className="score-count">{this.state.scores[2]}%</span>
                                      <ReactTooltip id='contentTooltip' type={'light'} border={true} effect='solid'>
                                        <span>Content Analysis shows how complete your business listing is across each site queried.</span>
                                      </ReactTooltip> 
                                    </a>
                                  </div>
                                </div>
                                
                                <div id="SiteInconsistancy" className="score-box col-xs-12 col-sm-3">
                                  <div className="score-text">
                                    <a data-tip role="none" data-for='inconsistenciesTooltip'> 
                                      <span>SITE INCONSISTENCIES</span>
                                      <span className="score-count">{this.state.scores[4]}/{this.state.scores[3]}</span>
                                      <ReactTooltip id='inconsistenciesTooltip' type={'light'} border={true} effect='solid'>
                                        <span>Site Inconsistencies indicates the number of sites found to have missing or inaccurate data from all the sites reviewed</span>
                                      </ReactTooltip> 
                                    </a>
                                  </div>
                                </div>
                            </div>
                          
                            <div className="col-lg-12 px-0">
                              <div className="title">
                                <h2>
                                  <span className="processing-message proc-done">YOUR REPORT</span>
                                </h2>
                                <div className="legend">
                                  <span className="legend-text">LEGEND:</span>
                                  <div className="img-container">
                                    <i className="fa fa-check mr-1"  style={{color:"#09b8a9"}}></i>
                                    <span>100% Accurate</span>
                                  </div>
                                  
                                  <div className="img-container">
                                    <i className="fa fa-times mr-1"  style={{color:"#ee0002"}}></i>
                                    <span>Some Inaccuracies</span>
                                  </div>
                                  
                                  <div className="img-container">
                                    <img className="mr-1" src={lnnotfoundimg} alt="Location Not Found" width="13"></img>
                                    <span>Location Not Found</span>
                                  </div>
                                  
                                  <div className="img-container">
                                    <img className="mr-1" src={notappimg} width="13" alt="Not Applicable"></img>
                                    <span>Not Applicable</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-12 px-0">
                              <div id="table_container" className="table-responsive web-table-result">
                                <table className="table table-bordered">
                                  <thead>
                                    <tr className="header-row">
                                      <th className="service information" colSpan="2"></th>
                                      <th className="business-name">BUSINESS NAME</th>
                                      <th className="address">ADDRESS</th>
                                      <th className="phone-number">PHONE NUMBER</th>
                                      <th className="website">WEBSITE</th>
                                      <th className="photos">PHOTOS</th>
                                      <th className="categories">CATEGORIES</th>
                                      <th className="hours-of-operation">HOURS OF OPERATION</th>
                                      <th className="description">DESCRIPTION</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="first-row">
                                      <td className="service information" colSpan="2">YOUR INFORMATION</td>
                                      <td className="business-name"><span className="chosen">{this.state.businessName}</span></td>
                                      <td className="address" style={{width:"300px"}}><span className="chosen">{this.state.address}</span></td>
                                      <td className="phone-number"><span className="chosen">{this.state.businessPhone}</span></td>
                                      <td className="website">
                                        <i className="fa fa-check mr-1"  style={{color:"#fff"}}></i>
                                      </td>
                                      <td className="photos">
                                        <i className="fa fa-check mr-1"  style={{color:"#fff"}}></i>
                                      </td>
                                      <td className="categories">
                                        <i className="fa fa-check mr-1"  style={{color:"#fff"}}></i>
                                      </td>
                                      <td className="hours-of-operation">
                                        <i className="fa fa-check mr-1"  style={{color:"#fff"}}></i>
                                      </td>
                                      <td className="description">
                                        <i className="fa fa-check mr-1"  style={{color:"#fff"}}></i>
                                      </td>
                                    </tr>

                                    </tbody>

                                    {this.state.listData.map((data) => {
                                      return (
                                        <tbody style={{fontSize:"14px"}}>
                                            {(data.BusinessName === "" || data.BusinessName.Field === "-") && (data.Address === "" || data.Address.Field === "-") && (data.Phone === "" || data.Phone.Field === "-") && data.WebSite === null &&
                                            data.Photos === null && data.Categories === null && data.HoursOfOperation === null && data.Description === null &&
                                            data.ScrapedUrl === null ? 
                                              <tr style={{fontSize:"14px"}}>
                                                <td>
                                                  <a data-tip role="none" data-for='tdLegendText1'> 
                                                    <img className="mr-1" src={lnnotfoundimg} alt="location not found" width="20"></img>
                                                    <ReactTooltip id='tdLegendText1' type={'light'} place={'right'} border={true} data-type="success" effect='solid'>
                                                      <span className="legend-text">LEGEND</span>
                                                      <div className="img-container">
                                                        <i className="fa fa-check mr-1"  style={{color:"#09b8a9"}}></i>
                                                        <span>100% Accurate</span>
                                                      </div>
                                                      
                                                      <div className="img-container">
                                                      <i className="fa fa-times mr-1"  style={{color:"#ee0002"}}></i>
                                                        <span>Some Inaccuracies</span>
                                                      </div>
                                                      
                                                      <div className="img-container">
                                                        <img className="mr-1" src={lnnotfoundimg} alt="location not found" width="13"></img>
                                                        <span>Location Not Found</span>
                                                      </div>
                                                    </ReactTooltip>
                                                  </a>
                                                </td>
                                                <td style={{backgroundColor:"#fff", whiteSpace:"nowrap"}}>
                                                    <img src={data.Source === "Yahoo" ? yahooimg : data.Source === "YP.com" ? ypimg : data.Source === "Superpages" ? superpagesimg : data.Source === "Google" ? googleimg : data.Source === "Bing" ? bingimg : data.Source === "Yelp" ? yelpimg : data.Source === "Foursquare" ? foursquareimg
                                                    : data.Source === "Facebook" ? facebookbgimg : ''} width="20" alt="icon"></img>
                                                    <span className="ml-2">{data.Source}</span>
                                                </td>
                                                <td className="not-found" colSpan="8"><span className="loc-not-found">LOCATION NOT FOUND AT THIS TIME</span></td>
                                              </tr>
                                            :
                                            <tr>
                                                <td>
                                                  <a data-tip role="none" data-for='tdLegendText2'> 
                                                    {(data.BusinessName !== "" && data.BusinessName.Field !== "-" && data.BusinessName.Accurate !== false) && (data.Address !== "" && data.Address.Field !== "-" && data.Address.Accurate !== false) && (data.Phone !== "" && data.Phone.Field !== "-" && data.Phone.Accurate !== false) && 
                                                    (data.WebSite !== "" && data.WebSite !=="-" && data.WebSite !=="f") && (data.Photos !== "" && data.Photos !=="-" && data.Photos !=="f") && (data.Categories !== "" && data.Categories !=="-" && data.Categories !=="f")  && (data.HoursOfOperation !== "" && data.HoursOfOperation !=="-" && data.HoursOfOperation !=="f") && (data.Description !== "" && data.Description !=="-" && data.Description !=="f") ? 
                                                      <i className="fa fa-check mr-1"  style={{color:"#09b8a9", fontSize:"14px"}}></i>
                                                    :
                                                      <i className="fa fa-times mr-1"  style={{color:"#ee0002"}}></i>
                                                    }
                                                    <ReactTooltip id='tdLegendText2' type={'light'} place={'right'} border={true} data-type="success" effect='solid'>
                                                      <span className="legend-text">LEGEND</span>
                                                      <div className="img-container">
                                                        <i className="fa fa-check mr-1"  style={{color:"#09b8a9"}}></i>
                                                        <span>100% Accurate</span>
                                                      </div>
                                                      
                                                      <div className="img-container">
                                                      <i className="fa fa-times mr-1"  style={{color:"#ee0002"}}></i>
                                                        <span>Some Inaccuracies</span>
                                                      </div>
                                                      
                                                      <div className="img-container">
                                                        <img className="mr-1" src={lnnotfoundimg} alt="location not found" width="13"></img>
                                                        <span>Location Not Found</span>
                                                      </div>
                                                    </ReactTooltip> 
                                                  </a>
                                                  </td>
                                                <td style={{backgroundColor:"#fff", whiteSpace:"nowrap"}}>
                                                    <img src={data.Source === "Yahoo" ? yahooimg : data.Source === "YP.com" ? ypimg : data.Source === "Superpages" ? superpagesimg : data.Source === "Google" ? googleimg : data.Source === "Bing" ? bingimg : data.Source === "Yelp" ? yelpimg : data.Source === "Foursquare" ? foursquareimg
                                                    : data.Source === "Facebook" ? facebookbgimg : ''} width="20" alt="icon"></img>
                                                    <span className="ml-2">{data.Source}</span>
                                                </td>
                                                <td className="business-name"><span className="chosen">{data.BusinessName.Field}</span></td>
                                                <td className="address" style={{width:"300px"}}>
                                                    {(data.BusinessName !== "" && data.BusinessName.Field !== "-" && data.BusinessName.Accurate !== false) && (data.Address !== "" && data.Address.Field !== "-" && data.Address.Accurate !== false) && (data.Phone !== "" && data.Phone.Field !== "-" && data.Phone.Accurate !== false) && 
                                                    (data.WebSite !== "" && data.WebSite !=="-" && data.WebSite !=="f") && (data.Photos !== "" && data.Photos !=="-" && data.Photos !=="f") && (data.Categories !== "" && data.Categories !=="-" && data.Categories !=="f")  && (data.HoursOfOperation !== "" && data.HoursOfOperation !=="-" && data.HoursOfOperation !=="f") && (data.Description !== "" && data.Description !=="-" && data.Description !=="f") ? 
                                                      <span className="chosen">{data.Address.Field}</span>
                                                    :
                                                      <span className="chosen" style={{color:'red'}}>{data.Address.Field}</span>
                                                    }
                                                </td>
                                                <td className="phone-number"><span className="chosen">{data.Phone.Field}</span></td>
                                                <td className={data.WebSite === "f" ? "website darkBg" : 'website'} style={{position:"relative"}}>
                                                    {data.WebSite === "t" ? <i className="fa fa-check mr-1"  style={{color:"#09b8a9"}}/> : data.WebSite === "f" ? <i className="fa fa-times mr-1"  style={{color:"#fff"}}/> : <div className="notappimg"></div> }
                                                </td>
                                                <td className={data.Photos === "f" ? "photos darkBg" : 'photos'} style={{position:"relative"}}>
                                                    {data.Photos === "t" ? <i className="fa fa-check mr-1"  style={{color:"#09b8a9"}}/> : data.Photos === "f" ? <i className="fa fa-times mr-1"  style={{color:"#fff"}}/> : <div className="notappimg"></div> }
                                                </td>
                                                <td className={data.Categories === "f" ? "categories darkBg" : 'categories'} style={{position:"relative"}}>
                                                    {data.Categories === "t" ? <i className="fa fa-check mr-1"  style={{color:"#09b8a9"}}/> : data.Categories === "f" ? <i className="fa fa-times mr-1"  style={{color:"#fff"}}/> : <div className="notappimg"></div> }
                                                </td>
                                                <td  className={data.HoursOfOperation === "f" ? "hours-of-operation darkBg" : 'hours-of-operation'} style={{position:"relative"}}>
                                                    {data.HoursOfOperation === "t" ? <i className="fa fa-check mr-1"  style={{color:"#09b8a9"}}/> : data.HoursOfOperation === "f" ? <i className="fa fa-times mr-1"  style={{color:"#fff"}}/> : <div className="notappimg"></div> }
                                                </td>
                                                <td className={data.Description === "f" ? "description darkBg" : 'description'} style={{position:"relative"}}>
                                                    {data.Description === "t" ? <i className="fa fa-check mr-1"  style={{color:"#09b8a9"}}/> : data.Description === "f" ? <i className="fa fa-times mr-1"  style={{color:"#fff"}}/> : <div className="notappimg"></div> }
                                                </td>
                                            </tr>
                                              
                                            }
                                        </tbody>
                                    )})}
                                </table>
                              </div>


                              <div className="mob-table-result">
                                <div className="col-md-12 p-0 m-0 row mb-3">
                                    <p>Select a listing component to examine for consistensies across every platform</p>
                                </div>
                                <div className="col-md-12 p-0 m-0 row mb-3">
                                  <select className="input-design cat-name" id="report" onChange={this.selectChange} value={this.state.value}>
                                    <option value="BusinessName">Business Name</option>
                                    <option value="Address">ADDRESS</option>
                                    <option value="Phone">PHONE NUMBER</option>
                                    <option value="WebSite">WEBSITE</option>
                                    <option value="Photos">PHOTOS</option>
                                    <option value="Categories">CATEGORIES</option>
                                    <option value="HoursOfOperation">HOURS OF OPERATION</option>
                                    <option value="Description">DESCRIPTION</option>
                                  </select>
                                </div>
                                <div className="col-md-12 p-0 m-0 row text-center">
                                  <div className="col-5 your-inform brdr-sec brdrTop-sec">
                                    YOUR INFORMATION
                                  </div>
                                  {this.state.value === "BusinessName" ?
                                      <div className="col-7 brdr-sec brdrTop-sec text-center">{this.state.businessName}</div> 
                                  : this.state.value === "Address" ?
                                    <div className="col-7 brdr-sec brdrTop-sec text-center">{this.state.address}</div>
                                  : this.state.value === "Phone" ?
                                    <div className="col-7 brdr-sec brdrTop-sec text-center">{this.state.businessPhone}</div>
                                  : this.state.value === "WebSite" ?
                                    <div className="col-7 brdr-sec brdrTop-sec text-center" style={{backgroundColor:"#fff"}}><i className="fa fa-check mr-1"  style={{color:"#000"}}></i></div>
                                  : this.state.value === "Photos" ?
                                    <div className="col-7 brdr-sec brdrTop-sec text-center" style={{backgroundColor:"#fff"}}><i className="fa fa-check mr-1"  style={{color:"#000"}}></i></div>
                                  : this.state.value === "Categories" ?
                                    <div className="col-7 brdr-sec brdrTop-sec text-center" style={{backgroundColor:"#fff"}}><i className="fa fa-check mr-1"  style={{color:"#000"}}></i></div>
                                  : this.state.value === "HoursOfOperation" ?
                                    <div className="col-7 brdr-sec brdrTop-sec text-center" style={{backgroundColor:"#fff"}}><i className="fa fa-check mr-1"  style={{color:"#000"}}></i></div>
                                  : 
                                    <div className="col-7 brdr-sec brdrTop-sec text-center" style={{backgroundColor:"#fff"}}><i className="fa fa-check mr-1"  style={{color:"#000"}}></i></div>
                                  }
                                </div>
                                {this.state.listData.map((data) => (
                                  <div className="col-md-12 p-0 m-0 row">
                                    <div className="col-5 brdr-sec">
                                      <div className="col-md-12 p-0" style={{whiteSpace:"nowrap"}}>
                                        <img src={data.Source === "Yahoo" ? yahooimg : data.Source === "YP.com" ? ypimg : data.Source === "Superpages" ? superpagesimg : data.Source === "Google" ? googleimg : data.Source === "Bing" ? bingimg : data.Source === "Yelp" ? yelpimg : data.Source === "Foursquare" ? foursquareimg
                                        : data.Source === "Facebook" ? facebookbgimg : ''} width="30" alt="icon"></img>
                                        <span className="ml-3">{data.Source}</span>
                                      </div>
                                    </div>
                                    <div className="col-7 brdr-sec p-0">
                                      {this.state.value === "BusinessName" ?
                                          <div className="col-md-12 pd-font-mob">{data.BusinessName.Field}</div>
                                        : this.state.value === "Address" ?
                                          <div className="col-md-12 pd-font-mob">
                                              {(data.BusinessName !== "" && data.BusinessName.Field !== "-" && data.BusinessName.Accurate !== false) && (data.Address !== "" && data.Address.Field !== "-" && data.Address.Accurate !== false) && (data.Phone !== "" && data.Phone.Field !== "-" && data.Phone.Accurate !== false) && 
                                              (data.WebSite !== "" && data.WebSite !=="-" && data.WebSite !=="f") && (data.Photos !== "" && data.Photos !=="-" && data.Photos !=="f") && (data.Categories !== "" && data.Categories !=="-" && data.Categories !=="f")  && (data.HoursOfOperation !== "" && data.HoursOfOperation !=="-" && data.HoursOfOperation !=="f") && (data.Description !== "" && data.Description !=="-" && data.Description !=="f") ? 
                                                <span className="chosen">{data.Address.Field}</span>
                                              :
                                                <span className="chosen" style={{color:'red'}}>{data.Address.Field}</span>
                                              }
                                          </div>
                                        : this.state.value === "Phone" ?
                                          <div className="col-md-12 pd-font-mob"><span className="chosen">{data.Phone.Field}</span></div>
                                        : this.state.value === "WebSite" ?
                                          <div className="col-md-12 p-0">
                                            {data.WebSite === "t" ? <div className="col-md-12 font-size-text pd-font-mob" style={{backgroundColor:"#fff"}}><i className="fa fa-check mr-1"  style={{color:"#000"}}/></div> : data.WebSite === "f" ? <div className="col-md-12 font-size-text pd-font-mob darkBg"><i className="fa fa-times mr-1"  style={{color:"#000"}}/></div> : <div className="notappimg"></div> }
                                          </div>
                                        : this.state.value === "Photos" ?
                                          <div className="col-md-12 p-0">
                                            {data.Photos === "t" ?<div className="col-md-12 font-size-text pd-font-mob" style={{backgroundColor:"#fff"}}> <i className="fa fa-check mr-1"  style={{color:"#000"}}/></div> : data.Photos === "f" ? <div className="col-md-12 font-size-text pd-font-mob darkBg"><i className="fa fa-times mr-1"  style={{color:"#000"}}/></div> : <div className="notappimg"></div> }
                                          </div>
                                        : this.state.value === "Categories" ?
                                          <div className="col-md-12 p-0">
                                            {data.Categories === "t" ? <div className="col-md-12 font-size-text pd-font-mob" style={{backgroundColor:"#fff"}}><i className="fa fa-check mr-1"  style={{color:"#000"}}/></div> : data.Categories === "f" ? <div className="col-md-12 font-size-text pd-font-mob darkBg"><i className="fa fa-times mr-1"  style={{color:"#000"}}/></div> : <div className="notappimg"></div> }
                                          </div>
                                        : this.state.value === "HoursOfOperation" ?
                                          <div className="col-md-12 p-0">
                                            {data.HoursOfOperation === "t" ? <div className="col-md-12 font-size-text pd-font-mob" style={{backgroundColor:"#fff"}}><i className="fa fa-check mr-1"  style={{color:"#000"}}/></div> : data.HoursOfOperation === "f" ? <div className="col-md-12 font-size-text pd-font-mob darkBg"><i className="fa fa-times mr-1"  style={{color:"#000"}}/></div> : <div className="notappimg"></div> }
                                          </div>
                                        :
                                          <div className="col-md-12 p-0">
                                            {data.Description === "t" ? <div className="col-md-12 font-size-text pd-font-mob" style={{backgroundColor:"#fff"}}><i className="fa fa-check mr-1"  style={{color:"#000"}}/></div> : data.Description === "f" ? <div className="col-md-12 font-size-text pd-font-mob darkBg"><i className="fa fa-times mr-1"  style={{color:"#000"}}/></div> : <div className="notappimg"></div> }
                                          </div>
                                      }
                                    </div>
                                  </div>
                                ))}


                                {/* <div className="col-md-12 row">
                                  <div className="col-5 brdr-sec">
                                    <div className="col-md-12 p-0" style={{whiteSpace:"nowrap"}}>
                                      <img src={yahooimg} alt="yahooimg" width="25"></img>
                                      <span className="ml-2">Yahoo</span>
                                    </div>
                                  </div>
                                  <div className="col-7 brdr-sec">
                                    <div className="col-md-12 font-size-text p-0">
                                      <i className="fa fa-check mr-1"  style={{color: "#000"}}></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12 row">
                                  <div className="col-5 brdr-sec">
                                    <div className="col-md-12 p-0" style={{whiteSpace:"nowrap"}}>
                                      <img src={yahooimg} alt="yahooimg" width="25"></img>
                                      <span className="ml-2">Yahoo</span>
                                    </div>
                                  </div>
                                  <div className="col-7 brdr-sec">
                                    <div className="col-md-12 font-size-text p-0 darkBg">
                                      <i className="fa fa-times mr-1"  style={{color: "#000"}}></i>
                                    </div>
                                  </div>
                                </div> */}


                              </div>

                            </div>
                        
                      </div>  
                      <div className="col-lg-10 text-center m-auto">
                          <button type="button" className="commonButton" onClick={()=>this.convertImage()}>Save To PDF
                          <i className="fa fa-arrow-circle-o-down ml-2" ></i>
                          </button>
                      </div>
                    </div>
                  }
                </div>
                }
              </div>
            </div>
          </main>

          <Footer></Footer>
      </div>
    )
  }
}
