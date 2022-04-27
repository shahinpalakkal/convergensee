import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from "../layout/header"
import Footer from "../layout/footer"
// import img1 from "../image/SiteInconsistancy-Yellow.jpg"
import Vishy from "../image/Vishy.png"
import rehan from "../image/Rehan.png"
import siddharth from "../image/Siddharth.png"
import harshita from "../image/Harshita.png"
import Neha from "../image/Neha.png"
import Sakina from "../image/Sakina.png"
import Sam from "../image/Sam.png"
import Ashwin from "../image/Ashwin.png"
import Sohan from "../image/Sohan.png"
import Safran from "../image/Safran.png"
import prakash from "../image/prakash.png"
import Rishav from "../image/Rishav.png"
import Hemant from "../image/Hemant.png"
import Karishma from "../image/Karishma.png"
import Anand from "../image/Anand3.png"
import Rakshita from "../image/Rakshita.png"
import Bhawani from "../image/Bhawani.png"
import bala from "../image/bala.png"
import Vasant from "../image/Vasant.png"
import Mrunalini from "../image/Mrunalini.png"
import Shreya from "../image/Shreya.png"
import Akshata from "../image/Akshata.png"
import ShrutiNair from "../image/ShrutiNair.png"
import Vinod from "../image/Vinod.png"
import Hazel from "../image/Hazel.png"
import ChristineAnandappa from "../image/Christine Anandappa.png"
import DavidRuiz from "../image/David Ruiz.png"
import PatrickHagarty from "../image/Patrick Hagarty.png"
import MykataStenko from "../image/Mykata Stenko.png"
import Melisa from "../image/melisa.png"
import Sowmya from "../image/sowmya.png"
import Gazal from "../image/Gazal.png"
import Ranjini from "../image/Ranjini.png"
import Akansha from "../image/Akansha.png"
import Devaj from "../image/Devaj.png"
import Aanchal from "../image/Aanchal.png"
import Kiran from "../image/Kiran.png"
import Vishwarup from "../image/Vishwarup.png"
import Dhruv from "../image/Dhruv.png"
import Ransley from "../image/Ransley.png"
import Johin from "../image/Johin.png"
import Ritu from "../image/Ritu.png"
import Darshan from "../image/Darshan.png"
import Shashank from "../image/Shashank.png"
import Sandesh from "../image/Sandesh .png"
import Ranjit from "../image/Ranjit.png"
import prahlad from "../image/prahlad.png"
import Carol from "../image/carol.png"
import $ from "jquery"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import close from "../image/close.png"

export default class ourTeam extends Component {
    componentDidMount() {
        $("#link-team").addClass("link-active");

        $(".teamcontentdiv").click(function () {
            $(this).toggleClass("activeTeam").siblings().removeClass("activeTeam");
        });


    }
    closepopup() {
        $(".popup-content ").hide();
        $(".popup-overlay ").css("background-color", "transparent");
    }

    render() {
        return (
            <div className="convergensee-wrapper">
                <Helmet>
                    <title>{"ConvergenSEE | Asia Team"}</title>
                    <meta
                        name="description"
                        content="Support your clients with the foundation for local search. Make sure their business can be found everywhere"
                    />
                    <link rel="canonical" href={"/team"} /> 
                    <meta name="twitter:description" content="Support your clients with the foundation for local search. Make sure their business can be found everywhere"></meta>
                    <meta name="facebook:title" content="ConvergenSEE | Asia Team"></meta>
                    <meta property='og:type' content='website' />
                    <meta property="og:title" content="ConvergenSEE | Asia Team" ></meta>
                    <meta property="og:description" content="Support your clients with the foundation for local search. Make sure their business can be found everywhere" ></meta>
                    <meta property='og:site_name' content="Convergensee" />
                    <meta property="og:url" content={window.location.href} ></meta>
                </Helmet>
                <Header></Header>
                <main role="main">


                    <div className="container teamWrapper mb-2">
                        <div className="teamHeadDiv">
                            <h1 className="teamHead" id="main" tabIndex="-1">North American Team</h1>
                        </div>
                        <div className="container teamcontentWrapper">




                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={ChristineAnandappa} alt="Christine Anandappa" className="img-fluid" />
                                </div>
                                <div>
                                    <div>
                                        <div className="teamName">Christine Anandappa</div>
                                        <div className="teamdesgnation pt-1"></div>
                                        <p className="teamdesgnationcontent pt-1">Christine works with our agency partners to develop and optimize local search programs for multi-location brands and SMBs. Outside of her life at ConvergenSEE she enjoys staying active and is a proud plant mom and foodie.
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">

                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={ChristineAnandappa} alt="Christine Anandappa" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Christine Anandappa</div>
                                                    <div className="teamdesgnation teamdesgnation-popup"></div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">Christine works with our agency partners to develop and optimize local search programs for multi-location brands and SMBs. Outside of her life at ConvergenSEE she enjoys staying active and is a proud plant mom and foodie.
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>



                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={DavidRuiz} alt="David Ruiz" className="img-fluid" />
                                </div>
                                <div>
                                    <div>
                                        <div className="teamName">David Ruiz</div>
                                        <div className="teamdesgnation pt-1"></div>
                                        <p className="teamdesgnationcontent pt-1">A seasoned leader who runs the sales division with a focus on increasing Agency/Brand’s local search exposure while driving performance, conversions and revenue. David relishes spending time with his three children while finding moments to work out, bike and fiddle on the bass guitar.
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={DavidRuiz} alt="David Ruiz" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">David Ruiz</div>
                                                    <div className="teamdesgnation teamdesgnation-popup"></div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">A seasoned leader who runs the sales division with a focus on increasing Agency/Brand’s local search exposure while driving performance, conversions and revenue. David relishes spending time with his three children while finding moments to work out, bike and fiddle on the bass guitar.
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>



                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={PatrickHagarty} alt="Patrick Hagarty" className="img-fluid" />
                                </div>
                                <div>
                                    <div>
                                        <div className="teamName">Patrick Hagarty</div>
                                        <div className="teamdesgnation pt-1"></div>
                                        <p className="teamdesgnationcontent pt-1">Patrick Catre-Hagarty is the Sales Support Specialist with ConvergenSEE, based in Toronto. With 10 years of experience in SEM, SEO, listings, and account support, he has developed a passion for helping agencies understand local search so they can make educated decisions about how to move the needle for their clients.
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={PatrickHagarty} alt="Patrick Hagarty" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Patrick Hagarty</div>
                                                    <div className="teamdesgnation teamdesgnation-popup"></div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">Patrick Catre-Hagarty is the Sales Support Specialist with ConvergenSEE, based in Toronto. With 10 years of experience in SEM, SEO, listings, and account support, he has developed a passion for helping agencies understand local search so they can make educated decisions about how to move the needle for their clients.
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>


                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={MykataStenko} alt="Mykyta Stenko" className="img-fluid" />
                                </div>
                                <div>
                                    <div>
                                        <div className="teamName">Mykyta Stenko</div>
                                        <div className="teamdesgnation pt-1"></div>
                                        <p className="teamdesgnationcontent pt-1">Mykyta is a Senior Application Developer for ConvergenSEE. He brings to the team his strong educational background in applied mathematics and software engineering. Because of this, his passion is performance and making application work faster. Mykyta has been hard at work with the team implementing his ideas into both architectural design and user experience for our new reports and redesign of existing functionality.
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={MykataStenko} alt="Mykyta Stenko" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Mykyta Stenko</div>
                                                    <div className="teamdesgnation teamdesgnation-popup"></div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">Mykyta is a Senior Application Developer for ConvergenSEE. He brings to the team his strong educational background in applied mathematics and software engineering. Because of this, his passion is performance and making application work faster. Mykyta has been hard at work with the team implementing his ideas into both architectural design and user experience for our new reports and redesign of existing functionality.
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>


                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Melisa} alt="Melissa Rahim" className="img-fluid" />
                                </div>
                                <div>
                                    <div>
                                        <div className="teamName">Melissa Rahim</div>
                                        <div className="teamdesgnation pt-1"></div>
                                        <p className="teamdesgnationcontent pt-1">From operating rides at an amusement park and working as an admin assistant, to assembling bicycles for Zellers and furniture for Ikea, Melissa has found her happy place as a Product Owner! She's passionate about her role, loves problem-solving, and is always looking to present the best solution possible in which both the business and client will gain benefits.
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Melisa} alt="Melissa Rahim" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Melissa Rahim</div>
                                                    <div className="teamdesgnation teamdesgnation-popup"></div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">From operating rides at an amusement park and working as an admin assistant, to assembling bicycles for Zellers and furniture for Ikea, Melissa has found her happy place as a Product Owner! She's passionate about her role, loves problem-solving, and is always looking to present the best solution possible in which both the business and client will gain benefits.
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>


                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Sowmya} alt="Sowmya Mohan" className="img-fluid" />
                                </div>
                                <div>
                                    <div>
                                        <div className="teamName">Sowmya Mohan</div>
                                        <div className="teamdesgnation pt-1"></div>
                                        <p className="teamdesgnationcontent pt-1">
                                        </p>
                                    </div>

                                </div>


                            </div>




                        </div>

                    </div>




                    <div className="container teamWrapper mb-5">
                        <div className="teamHeadDiv">
                            <h1 className="teamHead" id="main" tabIndex="-1">Asia Team</h1>
                        </div>
                        <div className="container teamcontentWrapper">

                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Vishy} alt="Viswanathan Kalyanasundaram" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Viswanathan Kalyanasundaram <br /> (Vishy)</div>
                                        <div className="teamdesgnation pt-1">Vice President - Sales</div>
                                        <p className="teamdesgnationcontent teamdesgnationcontentlin-num  pt-1">
                                            Vishy’s infectious positivity coupled with his entrepreneurial approach adds value to every client. A believer of nurturing relationships, both professional and personal, he solves every problem with a smile on his face.
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Vishy} alt="Viswanathan Kalyanasundaram" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Viswanathan Kalyanasundaram <br /> (Vishy)</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Vice President - Sales</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    Vishy’s infectious positivity coupled with his entrepreneurial approach adds value to every client. A believer of nurturing relationships, both professional and personal, he solves every problem with a smile on his face.
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>




                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Anand} alt="Anand Radhakrishnan" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Anand Radhakrishnan <br /> (Andy)</div>
                                        <div className="teamdesgnation pt-1">Director - Sales</div>
                                        <p className="teamdesgnationcontent teamdesgnationcontentlin-num pt-1">
                                            A sales guru during the week and a marathon runner on weekends, Andy likes to keep moving. He also enjoys grooving to Bollywood numbers and spending time with his kids!                                </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Anand} alt="Anand Radhakrishnan" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Anand Radhakrishnan <br /> (Andy)</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Director - Sales</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    A sales guru during the week and a marathon runner on weekends, Andy likes to keep moving. He also enjoys grooving to Bollywood numbers and spending time with his kids!                                    </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>



                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={rehan} alt="Rehan Qureshi" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Rehan Qureshi</div>
                                        <div className="teamdesgnation pt-1">Manager - Pre Sales</div>
                                        <p className="teamdesgnationcontent pt-1">
                                            Rehan is a techie in the true sense of the word. The Internet of Things, Cryptocurrency and Open Blockchain keep him hooked when he’s not listening to Ghazals and Shayaris.                                </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={rehan} alt="Rehan Qureshi" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Rehan Qureshi</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Manager - Pre Sales</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    Rehan is a techie in the true sense of the word. The Internet of Things, Cryptocurrency and Open Blockchain keep him hooked when he’s not listening to Ghazals and Shayaris.
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>



                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Neha} alt="Neha Malhotra" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Neha Malhotra</div>
                                        <div className="teamdesgnation pt-1">Head - Business Operations</div>
                                        <p className="teamdesgnationcontent pt-1">
                                            Bearing the brunt of Business Operations, Neha ensures day-to-day activities run smoothly. When not working, Neha enjoys spending her time with her family and road tripping across India.
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Neha} alt="Neha Malhotra" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Neha Malhotra</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Head - Business Operations</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    Bearing the brunt of Business Operations, Neha ensures day-to-day activities run smoothly. When not working, Neha enjoys spending her time with her family and road tripping across India.                                    </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>




                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={harshita} alt="Harshita Mehta" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Harshita Mehta</div>
                                        <div className="teamdesgnation pt-1">Manager - Branding & Marketing</div>
                                        <p className="teamdesgnationcontent teamdesgnationcontentlin-num-ipad pt-1">
                                            With a background in Marketing, Harshita is the one to give a voice to ConvergenSEE India. She’s a cinema enthusiast and enjoys spending her time pursuing art, music and dwelling into literary characters as hobby.                                </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={harshita} alt="Harshita Harshita" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Harshita Mehta</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Manager - Branding & Marketing</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    With a background in Marketing, Harshita is the one to give a voice to ConvergenSEE India. She’s a cinema enthusiast and enjoys spending her time pursuing art, music and dwelling into literary characters as hobby.                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>





                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={siddharth} alt="Siddharth Jaiswal" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Siddharth Jaiswal <br /> (Sid)</div>
                                        <div className="teamdesgnation pt-1">PreSales Executive</div>
                                        <p className="teamdesgnationcontent teamdesgnationcontentlin-num pt-1">
                                            When he is not busy strategizing on the pre-sales front, Siddharth, or Sid, can be found rapping to his own beats!
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={siddharth} alt="Siddharth Jaiswal" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Siddharth Jaiswal <br /> (Sid)</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">PreSales Executive</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    When he is not busy strategizing on the pre-sales front, Siddharth, or Sid, can be found rapping to his own beats!
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>



                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Sakina} alt="Sakina Jaliwala" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Sakina Jaliwala</div>
                                        <div className="teamdesgnation pt-1">Account Manager</div>
                                        <p className="teamdesgnationcontent pt-1">
                                            Bubbling with energy, Sakina is our digital guru. True to her passion, her evenings are spent binging on new shows on Netflix, or enjoying a nice evening drive.
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Sakina} alt="Sakina Jaliwala" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Sakina Jaliwala</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Account Manager</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    Bubbling with energy, Sakina is our digital guru. True to her passion, her evenings are spent binging on new shows on Netflix, or enjoying a nice evening drive.
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>




                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Sohan} alt="Sohan Manojkumar Reddy" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Sohan Manojkumar Reddy</div>
                                        <div className="teamdesgnation pt-1">Business Operations Associate (TL)</div>
                                        <p className="teamdesgnationcontent teamdesgnationcontentlin-num-ipad teamdsgntn-contntlin-num-pro pt-1">
                                            An integral member of the Business Ops team, Sohan is an ace at managing clients. He is also a budding photographer (with quite a social media following)!
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Sohan} alt="Sohan Manojkumar Reddy" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Sohan Manojkumar Reddy</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Business Operations Associate (TL)</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    An integral member of the Business Ops team, Sohan is an ace at managing clients. He is also a budding photographer (with quite a social media following)!
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>





                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={bala} alt="balaji jagannathan" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">balaji jagannathan</div>
                                        <div className="teamdesgnation pt-1">Executive Office</div>
                                        <p className="teamdesgnationcontent pt-1">
                                            bala's never-ending faith in the potential every human possesses is what makes ConvergenSEE Asia the team it is. He is a business builder by passion and a tech freak by choice. An AvGeek & a gearhead; bala enjoys his high intensity squash matches as much as he does a relaxing tee off.
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={bala} alt="balaji jagannathan" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">balaji jagannathan</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Executive Office</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    bala's never-ending faith in the potential every human possesses is what makes ConvergenSEE Asia the team it is. He is a business builder by passion and a tech freak by choice. An AvGeek & a gearhead; bala enjoys his high intensity squash matches as much as he does a relaxing tee off.
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>



                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Sam} alt="Shamayita Datta Chaudhuri" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Shamayita Datta Chaudhuri <br /> (Sam)</div>
                                        <div className="teamdesgnation pt-1">Manager - Creative</div>
                                        <p className="teamdesgnationcontent teamdesgnationcontentlin-num pt-1">
                                            A weaver of words, Sam likes to live in her own creative bubble. Apart from spending time with her head in the clouds, she enjoys chilling at home with her cats.
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Sam} alt="Shamayita Datta Chaudhuri" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Shamayita Datta Chaudhuri <br /> (Sam)</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Manager - Creative</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    A weaver of words, Sam likes to live in her own creative bubble. Apart from spending time with her head in the clouds, she enjoys chilling at home with her cats.
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>



                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Safran} alt="Mohd. Safran Khan" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Mohd. Safran Khan</div>
                                        <div className="teamdesgnation pt-1">Executive - Paid Media</div>
                                        <p className="teamdesgnationcontent pt-1">
                                            A family man through and through, Safran is secretly a huge foodie who loves spending time with his friends.
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Safran} alt="Mohd. Safran Khan" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Mohd. Safran Khan</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Executive - Paid Media</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    A family man through and through, Safran is secretly a huge foodie who loves spending time with his friends.
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>



                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Karishma} alt="Karishma Agarwal" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Karishma Agarwal</div>
                                        <div className="teamdesgnation pt-1">Business Operations Associate (LPM)</div>
                                        <p className="teamdesgnationcontent teamdesgnationcontentlin-num pt-1">
                                            Describing herself as a "lazy perfectionist", Karishma loves to take off on adventures whenever she can. When she can't physically go, she dives into the world of Thriller Novels to pass time.
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Karishma} alt="Karishma Agarwal" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Karishma Agarwal</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Business Operations Associate (LPM)</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    Describing herself as a "lazy perfectionist", Karishma loves to take off on adventures whenever she can. When she can't physically go, she dives into the world of Thriller Novels to pass time.
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>


                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={prakash} alt="Prakash" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Prakash (CTO)</div>
                                        <div className="teamdesgnation pt-1"></div>
                                        <p className="teamdesgnationcontent teamdesgnationcontent-popup-des pt-1">
                                            A Techguru, who has worked with some of the leading software companies in India and Silicon Valley, Prakash is a foodie who loves exploring new cuisines!                                </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={prakash} alt="Prakash" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Prakash (CTO)</div>
                                                    <div className="teamdesgnation pt-1"></div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    A Techguru, who has worked with some of the leading software companies in India and Silicon Valley, Prakash is a foodie who loves exploring new cuisines!                                    </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>



                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Bhawani} alt="Bhawani Singh Bhati" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Bhawani Singh Bhati</div>
                                        <div className="teamdesgnation pt-1">Business Operations Associate (LPM)</div>
                                        <p className="teamdesgnationcontent teamdesgnationcontentlin-num pt-1">
                                            When not analyzing for his day job, Bhawani loves finding the extraordinary in the mundane through hobbies like photography and travel.
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Bhawani} alt="Bhawani Singh Bhati" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Bhawani Singh Bhati</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Business Operations Associate (LPM)</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    When not analyzing for his day job, Bhawani loves finding the extraordinary in the mundane through hobbies like photography and travel.
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>



                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Hemant} alt="Hemant Tambewagh" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Hemant Tambewagh</div>
                                        <div className="teamdesgnation pt-1">Business Operations Associate</div>
                                        <p className="teamdesgnationcontent teamdesgnationcontentlin-num-ipad pt-1">
                                             A man of few words, Hemant's ambition shines through when working in the Operations team. In his personal time, he enjoys listening to music and is a talented singer.                                       
                                         </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Hemant} alt="Hemant Tambewagh" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Hemant Tambewagh</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Business Operations Associate</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    A man of few words, Hemant's ambition shines through when working in the Operations team. In his personal time, he enjoys listening to music and is a talented singer.
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>



                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Rakshita} alt="Rakshita Srivastav" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Rakshita Srivastav</div>
                                        <div className="teamdesgnation pt-1">Graphic Designer</div>
                                        <p className="teamdesgnationcontent pt-1">
                                            Bristling with energy, Rakshita is creative not only in her work, but in every activity she undertakes. A talented dancer, she is ever ready for good conversations and spontaneous plans!
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Rakshita} alt="Rakshita Srivastav" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Rakshita Srivastav</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Graphic Designer</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    Bristling with energy, Rakshita is creative not only in her work, but in every activity she undertakes. A talented dancer, she is ever ready for good conversations and spontaneous plans!
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>



                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Rishav} alt="Rishav Mishra" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Rishav Mishra</div>
                                        <div className="teamdesgnation pt-1">Data Analyst & Coordinator</div>
                                        <p className="teamdesgnationcontent pt-1">
                                            An avid reader with a penchant for travelling, Rishav loves to spend time cooking up unique delicacies when he is not analyzing data!
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Rishav} alt="Rishav Mishra" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Rishav Mishra</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Data Analyst & Coordinator</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    An avid reader with a penchant for travelling, Rishav loves to spend time cooking up unique delicacies when he is not analyzing data!
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>



                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Ashwin} alt="Ashwin Chandran Kurup" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Ashwin Chandran Kurup</div>
                                        <div className="teamdesgnation pt-1">Graphic Designer</div>
                                        <p className="teamdesgnationcontent pt-1">
                                            Mum's the word when it comes to Ashwin, except when he's creating magic through his designs. A secret lover of speed and cooking, he is passionate about every challenge he undertakes.                                </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Ashwin} alt="Ashwin Chandran Kurup" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Ashwin Chandran Kurup</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Graphic Designer</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    Mum's the word when it comes to Ashwin, except when he's creating magic through his designs. A secret lover of speed and cooking, he is passionate about every challenge he undertakes.                                    </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>


                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Vasant} alt="Vasant Babu" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Vasant Babu</div>
                                        <div className="teamdesgnation">Manager-Business Development</div>
                                        <p className="teamdesgnationcontent teamdesgnationcontentlin-num-ipad pt-1">
                                            Vasant's a heavy lifter when it comes to both work and play. When not at a workout session, he loves following his favourite football team and travelling around the world!
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Vasant} alt="Vasant Babu" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Vasant Babu</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Manager-Business Development</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    Vasant's a heavy lifter when it comes to both work and play. When not at a workout session, he loves following his favourite football team and travelling around the world!
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>



                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Mrunalini} alt="Mrunalini Tighare" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Mrunalini Tighare</div>
                                        <div className="teamdesgnation">Graphic Designer</div>
                                        <p className="teamdesgnationcontent pt-1">
                                            Capturing the world as she sees it, Mrunalini weaves magic with her creativity during work hours and through her lens otherwise. She also loves spending time with her dog and sketching!
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Mrunalini} alt="Mrunalini Tighare" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Mrunalini Tighare</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Graphic Designer</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    Capturing the world as she sees it, Mrunalini weaves magic with her creativity during work hours and through her lens otherwise. She also loves spending time with her dog and sketching!
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>





                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Shreya} alt="Shreya Dutta" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Shreya Dutta</div>
                                        <div className="teamdesgnation pt-1">Account Manager</div>
                                        <p className="teamdesgnationcontent pt-1">
                                            Shreya is an account manager at ConvergenSEE while being a photographer at heart. She thoroughly enjoys managing things, and post work she can be found binging on films or pointing a camera at you!
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Shreya} alt="Shreya Dutta" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Shreya Dutta</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Account Manager</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    Shreya is an account manager at ConvergenSEE while being a photographer at heart. She thoroughly enjoys managing things, and post work she can be found binging on films or pointing a camera at you!
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>



                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Akshata} alt="Akshata Shetty" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Akshata Shetty</div>
                                        <div className="teamdesgnation pt-1">Copywriter</div>
                                        <p className="teamdesgnationcontent pt-1">
                                            Powered by sudden spurts of energy, Akshata loves to chill. She is a woman of a few spoken words, but can articulately pen down anything. She's a grounded person who's always on the lookout for good food and music.
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Akshata} alt="Akshata Shetty" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Akshata Shetty</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Copywriter</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    Powered by sudden spurts of energy, Akshata loves to chill. She is a woman of a few spoken words, but can articulately pen down anything. She's a grounded person who's always on the lookout for good food and music.
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>





                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={ShrutiNair} alt="Shruti Nair" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Shruti Nair</div>
                                        <div className="teamdesgnation pt-1">Manager-Business Development</div>
                                        <p className="teamdesgnationcontent teamdesgnationcontentlin-num-ipad pt-1">
                                            Shruti is a baker at heart and her love for sales and business development comes from being a people person. She loves to travel, swim and meet new people, and spends her free time looking up new places to visit!
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={ShrutiNair} alt="Shruti Nair" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Shruti Nair</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Manager-Business Development</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    Shruti is a baker at heart and her love for sales and business development comes from being a people person. She loves to travel, swim and meet new people, and spends her free time looking up new places to visit!
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>


                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Vinod} alt="Vinod Dhanraj Mane" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Vinod Dhanraj Mane</div>
                                        <div className="teamdesgnation pt-1">Paid Media Executive</div>
                                        <p className="teamdesgnationcontent pt-1">
                                            An avid traveller, Vinod is in his element when it comes to internet surfing. Be it engaging in a new venture or trying his hand at new digital strategies, his enthusiasm is unending!
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Vinod} alt="Vinod Dhanraj Mane" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Vinod Dhanraj Mane</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Paid Media Executive</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    An avid traveller, Vinod is in his element when it comes to internet surfing. Be it engaging in a new venture or trying his hand at new digital strategies, his enthusiasm is unending!
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>


                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Hazel} alt="Hazel Cardoza" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Hazel Cardoza</div>
                                        <div className="teamdesgnation pt-1">Manager-People Experience</div>
                                        <p className="teamdesgnationcontent pt-1">
                                            Describing herself as a "people person", Hazel enjoys exploring places and meeting new people. Her interests lie in fashion, lifestyle and content creation.
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Hazel} alt="Hazel Cardoza" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Hazel Cardoza</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Manager-People Experience</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    Describing herself as a "people person", Hazel enjoys exploring places and meeting new people. Her interests lie in fashion, lifestyle and content creation.
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>


                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Ranjini} alt="Ranjini Krishnamoorthi" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Ranjini Krishnamoorthi</div>
                                        <div className="teamdesgnation pt-1">Manager - Business Development</div>
                                        <p className="teamdesgnationcontent teamdesgnationcontentlin-num-ipad pt-1">
                                            A singer with a music band in Mumbai, when Ranjini's not working on a sales pitch, she's invariably working on perfecting her vocal pitch. She is the biggest cheerleader to her footballer son and marathoner husband.
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Ranjini} alt="Ranjini Krishnamoorthi" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Ranjini Krishnamoorthi</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Manager - Business Development</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    A singer with a music band in Mumbai, when Ranjini's not working on a sales pitch, she's invariably working on perfecting her vocal pitch. She is the biggest cheerleader to her footballer son and marathoner husband.
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>


                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Gazal} alt="Gazal Choudhary" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Gazal Choudhary</div>
                                        <div className="teamdesgnation pt-1">Manager - Business Development</div>
                                        <p className="teamdesgnationcontent teamdesgnationcontentlin-num-ipad pt-1">
                                            To understand the complexity of the human mind, Gazal pursued a Master's degree in clinical psychology. Her pursuit of a second Masters in Business Psychology though was to understand the workings of the business mind and that led her to Sales. A complete gym-rat, her guilty pleasure is stationery shopping.
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Gazal} alt="Gazal Choudhary" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Gazal Choudhary</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Manager - Business Development</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    To understand the complexity of the human mind, Gazal pursued a Master's degree in clinical psychology. Her pursuit of a second Masters in Business Psychology though was to understand the workings of the business mind and that led her to Sales. A complete gym-rat, her guilty pleasure is stationery shopping.
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>


                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Akansha} alt="Akansha Gwari" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Akansha Gwari</div>
                                        <div className="teamdesgnation pt-1">PreSales Executive</div>
                                        <p className="teamdesgnationcontent pt-1">
                                            Akansha is somebody who doesn't take life too seriously. As much as she loves to engage and indulge in conversations with people, she craves her me-time too. Being neither here nor there, mysticism and the power we have over our reality are topics that keeps her awake at night!
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Akansha} alt="Akansha Gwari" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Akansha Gwari</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">PreSales Executive</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    Akansha is somebody who doesn't take life too seriously. As much as she loves to engage and indulge in conversations with people, she craves her me-time too. Being neither here nor there, mysticism and the power we have over our reality are topics that keeps her awake at night!
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>


                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Devaj} alt="Devaj Bharadwa" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Devaj Bharadwa</div>
                                        <div className="teamdesgnation pt-1">Paid Media Executive</div>
                                        <p className="teamdesgnationcontent pt-1">
                                            Towering over us all, Devaj is an easy going, calm person who loves playing outdoor games, especially football. He is an avid traveller who enjoys exploring new, unknown locations when he is not working on optimizing campaigns for our clients.                                </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Devaj} alt="Devaj Bharadwa" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Devaj Bharadwa</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Paid Media Executive</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    Towering over us all, Devaj is an easy going, calm person who loves playing outdoor games, especially football. He is an avid traveller who enjoys exploring new, unknown locations when he is not working on optimizing campaigns for our clients.                                     </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>






                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Kiran} alt="Kiran Mulchandani" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Kiran Mulchandani</div>
                                        <div className="teamdesgnation pt-1">Social Media</div>
                                        <p className="teamdesgnationcontent pt-1">
                                            Kiran is the kid of our team who rages on the dance floor. She's a 3rd year student with a passion for fashion and a dream to have her own instagram thrift business. Apart from these, she enjoys stock trading and making reels go viral!                                </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Kiran} alt="Kiran Mulchandani" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Kiran Mulchandani</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Social Media</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    Kiran is the kid of our team who rages on the dance floor. She's a 3rd year student with a passion for fashion and a dream to have her own instagram thrift business. Apart from these, she enjoys stock trading and making reels go viral!                                    </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>


                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Aanchal} alt="Aanchal Jain" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Aanchal Jain</div>
                                        <div className="teamdesgnation pt-1">Copywriter</div>
                                        <p className="teamdesgnationcontent pt-1">
                                            Aanchal is a complete foodie and loves exploring new cuisines, with her latest favourite being Korean food. There is nothing that gives her a rush more than trying out new adventures. She adores animals and can even be addressed as a zoophilist. When she's bored, Aanchal loves binge-watching Sci – Fi, Fantasy, Thriller or Horror films.
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Aanchal} alt="Aanchal Jain" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Aanchal Jain</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Copywriter</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    Aanchal is a complete foodie and loves exploring new cuisines, with her latest favourite being Korean food. There is nothing that gives her a rush more than trying out new adventures. She adores animals and can even be addressed as a zoophilist. When she's bored, Aanchal loves binge-watching Sci – Fi, Fantasy, Thriller or Horror films.
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>


                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Vishwarup} alt="Vishwarup Kumar" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Vishwarup Kumar</div>
                                        <div className="teamdesgnation pt-1">Business Operations Associate</div>
                                        <p className="teamdesgnationcontent teamdesgnationcontentlin-num-ipad pt-1">
                                            Ensuring smooth flowing operations may be Vishwarup's schedule during the day, but the evenings are filled with Jam Sessions with his favourite instrument - the guitar. Over the weekends he loves to camp and travel to new places.
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Vishwarup} alt="Vishwarup Kumar" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Vishwarup Kumar</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Business Operations Associate</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    Ensuring smooth flowing operations may be Vishwarup's schedule during the day, but the evenings are filled with Jam Sessions with his favourite instrument - the guitar. Over the weekends he loves to camp and travel to new places.
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>


                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Dhruv} alt="Dhruv Nair" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Dhruv Nair</div>
                                        <div className="teamdesgnation pt-1">Business Operations Associate</div>
                                        <p className="teamdesgnationcontent teamdesgnationcontentlin-num-ipad pt-1">
                                            A through and through fan of Marvel, Dhruv loves spending time binging on their movies and shows. He dreams of traveling the world one day, but keeps himself happy in the moment over games of FIFA with colleagues!                                </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Dhruv} alt="Dhruv Nair" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Dhruv Nair</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Business Operations Associate</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    A through and through fan of Marvel, Dhruv loves spending time binging on their movies and shows. He dreams of traveling the world one day, but keeps himself happy in the moment over games of FIFA with colleagues!
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>



                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Ransley} alt="Ransley Moraes" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Ransley Moraes</div>
                                        <div className="teamdesgnation pt-1">Business Operations Associate</div>
                                        <p className="teamdesgnationcontent teamdesgnationcontentlin-num-ipad pt-1">
                                            Ransley is a complete ambivert, who loves to play volleyball and football. While his days are spent managing operations, he's an ammateur chef and loves to explore new cuisines!
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Ransley} alt="Ransley Moraes" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Ransley Moraes</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Business Operations Associate</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    Ransley is a complete ambivert, who loves to play volleyball and football. While his days are spent managing operations, he's an ammateur chef and loves to explore new cuisines!
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>





                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Johin} alt="Johin Jose" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Johin Jose</div>
                                        <div className="teamdesgnation pt-1">Business Operations Associate</div>
                                        <p className="teamdesgnationcontent pt-1">
                                            With a huge fan following on YouTube, Johin's passion lies in making interesting videos for his channel. He loves playing video games when he's not busy taking care of his operational responsibilities.
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Johin} alt="Johin Jose" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Johin Jose</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Business Operations Associate</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    With a huge fan following on YouTube, Johin's passion lies in making interesting videos for his channel. He loves playing video games when he's not busy taking care of his operational responsibilities.
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>


                            
                            
                           


                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Ritu} alt="Ritu Mulchandani" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Ritu Mulchandani</div>
                                        <div className="teamdesgnation pt-1">Business Operations Associate</div>
                                        <p className="teamdesgnationcontent teamdesgnationcontentlin-num-ipad pt-1">
                                            A fashionista in her own right, Ritu loves everything related to fashion. Whether it's styling friends and family or managing her fashionista status on Social Media, Ritu enjoys diving into it head-on. When not busy with managing operations, she is also a foodie and a full-time Netflix binger.
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Ritu} alt="Ritu Mulchandani" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Ritu Mulchandani</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Business Operations Associate</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    A fashionista in her own right, Ritu loves everything related to fashion. Whether it's styling friends and family or managing her fashionista status on Social Media, Ritu enjoys diving into it head-on. When not busy with managing operations, she is also a foodie and a full-time Netflix binger.
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>


                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Darshan} alt="Darshan Jawale" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Darshan Jawale</div>
                                        <div className="teamdesgnation pt-1">Copywriter</div>
                                        <p className="teamdesgnationcontent pt-1">
                                            Darshan is a quiet introvert at first glance, but once he opens up there's no stopping him! He loves observing and introspecting in his free time and is also interested in watching historic or war films and football.
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Darshan} alt="Darshan Jawale" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Darshan Jawale</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Copywriter</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    Darshan is a quiet introvert at first glance, but once he opens up there's no stopping him! He loves observing and introspecting in his free time and is also interested in watching historic or war films and football.
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>

                            

                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Sandesh} alt="Sandesh" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Sandesh</div>
                                        <div className="teamdesgnation pt-1">Graphic Designer</div>
                                        <p className="teamdesgnationcontent pt-1">
                                            Sandesh's passion for art made him turn to Graphic Designing as a career, and extensive experience in the field is what he brings with him. While he seems quiet and reserved, he has a crazy side which only comes out when he puts his dancing shoes on! Hailing from the capital of India, Delhi, Sandesh can be found grooving to his favourite tunes after office hours!
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Sandesh} alt="Sandesh" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Sandesh</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Graphic Designer</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    Sandesh's passion for art made him turn to Graphic Designing as a career, and extensive experience in the field is what he brings with him. While he seems quiet and reserved, he has a crazy side which only comes out when he puts his dancing shoes on! Hailing from the capital of India, Delhi, Sandesh can be found grooving to his favourite tunes after office hours!
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>

                              
                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Shashank} alt="Shashank" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Shashank</div>
                                        <div className="teamdesgnation pt-1">SEO Specialist </div>
                                        <p className="teamdesgnationcontent pt-1">
                                            A solutions oriented person through and through, Shashank likes to find solutions to everyday problems. He believes that travelling is the way to really get out of one's comfort zone and enjoys making a trip whenever possible! 
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Shashank} alt="Shashank" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Shashank</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">SEO Specialist</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    A solutions oriented person through and through, Shashank likes to find solutions to everyday problems. He believes that travelling is the way to really get out of one's comfort zone and enjoys making a trip whenever possible! 
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>

                             
                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Ranjit} alt="Ranjit" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Ranjit</div>
                                        <div className="teamdesgnation pt-1">Business Operations Associate</div>
                                        <p className="teamdesgnationcontent pt-1">
                                            If it's tech and gadgets you're talking about, Ranjit is your guy. With an array of interests from painting to Mixed Martial Arts, this member of the Business Operations Team loves to keep busy. When not in office, you'll find him hooked to the latest video game. 
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Ranjit} alt="Ranjit" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Ranjit</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Business Operations Associate</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    If it's tech and gadgets you're talking about, Ranjit is your guy. With an array of interests from painting to Mixed Martial Arts, this member of the Business Operations Team loves to keep busy. When not in office, you'll find him hooked to the latest video game. 
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>

                             
                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={prahlad} alt="Prahlad" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Prahlad</div>
                                        <div className="teamdesgnation pt-1">Business Operations Associate</div>
                                        <p className="teamdesgnationcontent pt-1">
                                            Quiet and reserved, Prahlad loves to binge on his favourite food over the weekends. He loves to keep his faith intact and is always the one who will hold on till the last!   
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={prahlad} alt="Prahlad" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Prahlad</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Business Operations Associate</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    Quiet and reserved, Prahlad loves to binge on his favourite food over the weekends. He loves to keep his faith intact and is always the one who will hold on till the last!   
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
                                </div>
                            </div>

                            
                            <div className="teamcontentdiv">
                                <div className="teamimg">
                                    <img src={Carol} alt="Carol" className="img-fluid" />
                                </div>
                                <div>
                                    <div className="contentwidth-team">
                                        <div className="teamName">Carol</div>
                                        <div className="teamdesgnation pt-1">Business Operations Associate</div>
                                        <p className="teamdesgnationcontent pt-1">
                                            Carol is a people's person who loves to try new experiences. She plays the organ and is a talented singer as well! On weekends Carol loves to bake up a storm for her friends!   
                                        </p>
                                    </div>

                                </div>
                                <div id="popppp" className="poppupOuter">
                                    <Popup trigger={<a className="team-seemore"> See More</a>} position="right center">
                                        <div className="popupcontent-teamdiv">

                                            <div className="teamimgPopup">
                                                <img src={Carol} alt="Carol" className="img-fluid" />
                                            </div>
                                            <div className="teamcontentPopup">

                                                <div className="teamdesgName-popup">
                                                    <div className="teamName-popup">Carol</div>
                                                    <div className="teamdesgnation teamdesgnation-popup">Business Operations Associate</div>
                                                </div>
                                                <p className="teamdesgnationcontent-popup pt-1">
                                                    Carol is a people's person who loves to try new experiences. She plays the organ and is a talented singer as well! On weekends Carol loves to bake up a storm for her friends!   
                                                </p>
                                            </div>
                                            <span className="closepopupteam" type="button" onClick={() => this.closepopup()} ><img src={close} alt="close" className="img-fluid" /></span>
                                        </div>
                                    </Popup>
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
