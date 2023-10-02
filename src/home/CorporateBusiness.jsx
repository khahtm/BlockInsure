import React, { Component , Fragment } from "react";
import ModalVideo from 'react-modal-video';
import ScrollToTop from 'react-scroll-up';
import Slider from "react-slick";
import { slideSlick } from "../page-demo/script";
import BlogContent from "../elements/blog/BlogContent";
import Header from "../component/header/HeaderFive";
import FooterTwo from "../component/footer/FooterTwo";
import CallAction from "../elements/callaction/CallAction";
// import Team from "../blocks/team/TeamTwo";
import Accordion01 from "../elements/Accordion";
import Helmet from "../component/common/Helmet";
import { FiShield , FiUmbrella , FiBox ,FiChevronUp , FiCheck } from "react-icons/fi";
import CounterOne from "../elements/counters/CounterOne";
import BrandOne from "../elements/Brand";


const SlideList = [
    {
        textPosition: 'text-right',
        bgImage: 'bg_image--32',
        category: '',
        title: 'Trustworthy.',
        description: 'Count on BlockInsure for Reliable and Trustworthy Solutions at Every Turn.',
        buttonText: 'White Paper',
        buttonLink: ''
    },
    {
        textPosition: 'text-left',
        bgImage: 'bg_image--31',
        category: '',
        title: 'Innovative.',
        description: 'Innovative Approach for Your Security.',
        buttonText: 'White Paper',
        buttonLink: ''
    },
    {
        textPosition: 'text-right',
        bgImage: 'bg_image--30',
        category: '',
        title: 'InnoCustomer-Centric.',
        description: 'Experience Exceptional Customer-Centric Care and Support at Every Critical Stage.',
        buttonText: 'White Paper',
        buttonLink: ''
    },
    
]

const ServiceListOne = [
    {
        icon: <FiShield />,
        title: 'Blockchain-Powered Security',
        description: 'Employs blockchain for utmost security, transparency, and trust, fostering confidence and assurance for all insurance transactions.'
    },
    {
        icon: <FiUmbrella />,
        title: 'Tailored Insurance Solutions',
        description: 'Tailors insurance to individual and business needs, delivering optimal coverage and value, departing from generic approaches.'
    },
    {
        icon: <FiBox />,
        title: 'Efficiency and Innovation',
        description: 'Emphasizes innovation for efficient, rapid insurance journeys, enhancing the overall user experience in the insurance domain.'
    },
]

const starndardService = [
    {
        image: '01',
        title: 'Decentralized Coverage Management',
        description: 'Enables users to manage and access coverage on a decentralized platform, ensuring transparency and control',
    },
    {
        image: '02',
        title: 'Community-Driven Claims Evaluation',
        description: 'Employs community input for fair, data-driven claim resolution, involving Advisory Board and Claim Assessors',
    },
    {
        image: '03',
        title: 'Data-Backed Claim Resolution Process',
        description: 'Utilizes data-driven approach, thorough investigations, and evidence-based assessment for fair and accurate claim resolutions.',
    },

]

class CorporateBusiness extends Component{
    constructor () {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){

        var namesItemOne = [
            'Experience insurance simplified. BlockInsure offers easy access without cumbersome processes. Your data stays secure with blockchain. Explore a new era of insurance made simple.',
        ];
        var namesItemTwo = [
            'Take charge of your coverage. BlockInsure innovative pricing and tailored options put you in control. Save on costs and get the coverage you need, hassle-free.'
        ];
        
        const PostList = BlogContent.slice(0 , 3);

        return(
            <Fragment> 
                <Helmet pageTitle="Corporate Business" />

                {/* Start Header Area  */}
                <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black"/>
                {/* End Header Area  */}

                {/* Start Slider Area   */}
                <div className="slider-wrapper">
                    <div className="slider-activation">
                        <Slider className="rn-slick-dot dot-light" {...slideSlick}>
                            {SlideList.map((value , index) => (
                                <div className={`slide slide-style-2 slider-box-content without-overlay d-flex align-items-center justify-content-center bg_image ${value.bgImage}`} key={index}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className={`inner ${value.textPosition}`}>
                                                    {value.category ? <span>{value.category}</span> : ''}
                                                    {value.title ? <h1 className="title">{value.title}</h1> : ''}
                                                    {value.description ? <p className="description">{value.description}</p> : ''}
                                                    {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-solid" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                {/* End Slider Area   */}
                
                {/* Start Service Area */}
                <div className="service-area ptb--30 bg_color--1">
                    <div className="container">
                        <div className="row service-one-wrapper">
                            {ServiceListOne.map( (val , i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    <a className="text-center">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Service Area */}


                {/* Start Featured Service Area  */}
                <div className="rn-featured-service-area pt--90 pb--120 bg_color--5">
                    <div className="container">
                        <div className="row">

                            {/* Start Single Service  */}
                            <div className="col-lg-3 col-md-6 col-12 mt--30">
                                <div className="section-title">
                                    <h2 className="title">Features</h2>
                                    <p>Decentralized policy control, community-backed claims assessment, and data-driven resolution approach</p>
                                    <div className="service-btn">
                                        <a className="btn-transparent rn-btn-dark" href="/home"><span className="text">Learn More</span></a>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Service  */}

                            {/* Start Single Service  */}
                            <div className="col-lg-9">
                                <div className="row">
                                    {starndardService.map((value , index) => (
                                        <div className="col-lg-4 col-md-4 mt--30" key={index}>
                                            <div className="standard-service">
                                                <div className="thumbnai">
                                                    <img src={`/assets/images/featured/corporate-${value.image}.jpg`} alt="Corporate Images"/>
                                                </div>
                                                <div className="content">
                                                    <h3><a href="/service-details">{value.title}</a></h3>
                                                    <p>{value.description}</p>
                                                    <a className="btn-transparent rn-btn-dark" href="/home"><span className="text">Read More</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                            </div>
                            {/* End Single Service  */}

                        </div>
                    </div>                
                </div>
                {/* End Featured Service Area  */}

                {/* Start Counterup Area */}
                <div className="counterup-area pb--80 pt--40 bg_image bg_image--17 theme-text-white" data-black-overlay="7">
                    <div className="container">
                        <CounterOne />
                    </div>
                </div>
                {/* End Counterup Area */}

                {/* Start About Area  */}
                <div className="rn-about-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-6">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/about-4.png" alt="About Images"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">Claim Process</h2>
                                        <p>Transparent, community-vetted claim process ensuring fair resolution and efficient payouts.</p>
                                    </div>
                                    <div className="accordion-wrapper mt--30">
                                        <Accordion01 />
                                    </div>
                                    <div className="about-button mt--50">
                                        <a className="rn-button-style--2 btn-solid" href="/home">See how it works</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area  */}

                {/* Start Team Area  */}
                {/* <div className="rn-team-area ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title service-style--3 text-center mb--25 mb_sm--0">
                                    <h2 className="title">Managing Team</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <Team column="col-lg-3 col-md-6 col-sm-6 col-12 mt--30" teamStyle="" item="4" />
                        </div>
                    </div>
                </div> */}
                {/* End Team Area  */}

                {/* Start About Area  */}
                <div className="rn-about-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-6 order-2 order-lg-1">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">About BlockInsure</h2>
                                        <p className="description">Welcome to BlockInsure - Your Trusted Decentralized Insurance Platform</p>
                                    </div>
                                    <div className="mt--30">
                                        <h4>Simple, Secure, Seamless</h4>
                                        <ul className="list-style--1">
                                            {namesItemOne.map((name, index) => {
                                                return <li key={ index }><FiCheck /> {name}</li>;
                                            })}
                                        </ul>
                                    </div>
                                    <div className="mt--30">
                                        <h4>"Your Coverage, Your Control"</h4>
                                        <ul className="list-style--1">
                                            {namesItemTwo.map((name, index) => {
                                                return <li key={ index }><FiCheck /> {name}</li>;
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2">
                                <div className="thumbnail position-relative">
                                    <img className="w-100" src="/assets/images/about/about-3.png" alt="About Images"/>
                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                    <button className="video-popup position-top-center theme-color" onClick={this.openModal}><span className="play-icon"></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area  */}

                {/* Start Brand Area  */}
                <div className="rn-brand-area ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandOne branstyle="branstyle--2" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area  */}

                {/* Start Blog Area */}
                <div className="rn-blog-area pt--120 pb--80 bg_color--1">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12">
                                <div className="section-title service-style--3 text-center">
                                    <h2 className="title">Testimonies</h2>
                                    <p>Insightful testimonies reflect satisfaction, trust, and positive experiences with BlockInsure.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--60">
                            {PostList.map((value , i ) => (
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    <div className="blog blog-style--1">
                                        <div className="thumbnail">
                                            <a>
                                                <img className="w-100" src={`/assets/images/blog/blog-${value.images}.jpg`} alt="Blog Images"/>
                                            </a>
                                        </div>
                                        <div className="content">
                                            <p className="blogtype">{value.category}</p>
                                            <h4 className="title"><a href="/home">{value.title}</a></h4>
                                            <div className="blog-btn">
                                                <a className="rn-btn text-white" href="/home">Claim Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>    
                    </div>    
                </div>
                <CallAction />
                <FooterTwo />
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
            </Fragment>
        )
    }
}
export default CorporateBusiness;