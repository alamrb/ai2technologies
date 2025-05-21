/* eslint-disable react-hooks/exhaustive-deps */
import Double_Scroll_client_arefin from "@/app/home/product/Double_Scroll_client_arefin";
import Scroll_testing_client_arefin from "@/app/home/product/scroll_testing_client_arefin";
import useWindowSize from "@/app/home/product/useWindowSize";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from "react";
import { isMobile } from 'react-device-detect';
import { BsArrowRight } from "react-icons/bs";
import { GoArrowDown } from "react-icons/go";
import HomeSlider from './HomeSlider';
import TextSlider from './TextSlider';
import AE_logo_new from './assets/AE-logo-new.png';
import AppStore from './assets/appStore.png';
import trip_logo from './assets/images/50p_trip.png';
import CDT_letter_logo from './assets/images/CDT_letter.png';
import Nosurge_logo from './assets/images/NOSURGE.png';
import Share_a_car_logo from './assets/images/Share-A-Car_LOGO.png';
import UKBD_logo from './assets/images/UKBD.png';
import Play from './assets/play.png';
import styles from './home.module.css';
import Footer from './home/footer';

function HomeContent(props) {
    console.log(51, props)
    const [device, setDevice] = useState(null);
    useEffect(() => {
        if (isMobile) {
            setDevice("mobile");
        } else {
            setDevice("web");
        }
    }, [isMobile]);

    const size = useWindowSize();
    const containerRef = useRef(null);
    const [showTopBtn_State, setShowTopBtn] = useState(false);

    const [wanting_to_scroll_Bottom_State, set_Wanting_to_scroll_Bottom_State] = useState(true);

    const prevCountRef = useRef(0);
    const slide_up_1 = () => {
        const new_top = prevCountRef.current - size.height;
        let elm = document.querySelector('#main_content_div');
        elm.scrollTo({ top: new_top, behavior: "smooth" });
        prevCountRef.current = new_top;
    }

    const slide_down_1 = () => {
        const new_top = prevCountRef.current + size.height;
        let elm = document.querySelector('#main_content_div');
        elm.scrollTo({ top: new_top, behavior: "smooth" });
        prevCountRef.current = new_top;
    }

    const scrollToTop = () => {
        if (showTopBtn_State) {
            let elm = document.querySelector('#main_content_div');
            elm.scrollTo({ top: 0, behavior: "smooth" });

            set_Wanting_to_scroll_Bottom_State(true);
        } else {
            let elm = document.querySelector('#main_content_div');
            elm.scrollTop = elm.scrollHeight;
            set_Wanting_to_scroll_Bottom_State(false);
        }
    }

    const initial_scrollTop = 0;

    useEffect(() => {
        let elm = document.querySelector('#main_content_div')
        elm.addEventListener("scroll", (e) => {
            window.addEventListener("wheel", e => {
                const scrollDirection = e.deltaY < 0 ? 1 : 0

                if (initial_scrollTop >= elm.scrollTop) {
                    set_Wanting_to_scroll_Bottom_State(true);
                } else if (scrollDirection === 1) {
                    set_Wanting_to_scroll_Bottom_State(false);
                } else if (scrollDirection === 0) {
                    set_Wanting_to_scroll_Bottom_State(true);
                } else if (prevCountRef.current > elm.scrollTop) {
                    set_Wanting_to_scroll_Bottom_State(true);
                } else {
                    set_Wanting_to_scroll_Bottom_State(true);
                }
            })

            prevCountRef.current = elm.scrollTop;
            if (elm.scrollTop > 10) {

                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const questionData = [
        {
            question: "What processes does your software development company follow?",
            answer: "Step 1: Project details\nShare your product idea, scope, timelines, or resource needs for your project so we can understand your unique requirements.\nStep 2: Discovery call\nConnect with our management team for a personalized consultation to discuss your software development goals and shape your tailored strategy.\nStep 3: Custom proposal\nFollowing the analysis of your needs, our software agency will provide a personalized proposal outlining our custom approach, resources, and timelines for your project."
        },
        {
            question: "How much does it cost to develop a bespoke software product?",
            answer: "Step 1: Project details\nShare your product idea, scope, timelines, or resource needs for your project so we can understand your unique requirements.\nStep 2: Discovery call\nConnect with our management team for a personalized consultation to discuss your software development goals and shape your tailored strategy.\nStep 3: Custom proposal\nFollowing the analysis of your needs, our software agency will provide a personalized proposal outlining our custom approach, resources, and timelines for your project."
        },
        {
            question: "Who will own the IP rights for the software developed?",
            answer: "Step 1: Project details\nShare your product idea, scope, timelines, or resource needs for your project so we can understand your unique requirements.\nStep 2: Discovery call\nConnect with our management team for a personalized consultation to discuss your software development goals and shape your tailored strategy.\nStep 3: Custom proposal\nFollowing the analysis of your needs, our software agency will provide a personalized proposal outlining our custom approach, resources, and timelines for your project."
        },
        {
            question: "How do I start a software project with GoodCore?",
            answer: "Step 1: Project details\nShare your product idea, scope, timelines, or resource needs for your project so we can understand your unique requirements.\nStep 2: Discovery call\nConnect with our management team for a personalized consultation to discuss your software development goals and shape your tailored strategy.\nStep 3: Custom proposal\nFollowing the analysis of your needs, our software agency will provide a personalized proposal outlining our custom approach, resources, and timelines for your project."
        }
    ];

    const [openCollapse, setOpenCollapse] = useState(null);

    const toggleCollapse = (index) => {
        setOpenCollapse(openCollapse === index ? null : index);
    };
    // scroll related codes ends here

    return (
        <div className={styles.landing} ref={containerRef} id="main_content_div">
            <div className={styles.product_container} id='main_page' style={{ overflow: 'hidden', position: 'relative' }}>
                <video id="background-video" autoPlay loop muted playsInline>
                    <source src="/videos/vidBack.mp4" type="video/mp4" />
                </video>
                <div className={styles.product_item} style={{ position: 'relative', zIndex: 1 }}>
                    <div className={styles.left_side} style={{ backgroundColor: 'rgb(255 255 255 / 85%)' }}>
                        <div className={styles.product_description} style={{ flexDirection: 'column' }}>
                            <div className={styles.mainTopContainer}>
                                <Image src={AE_logo_new} className={styles.newLogo} alt='' />
                            </div>
                            <div className={styles.appLogoGroup}>
                                {(device && (device === "web")) ?
                                    <>
                                        <Link href="#" target="_blank" rel="noopener noreferrer"><Image src={Play} className={styles.appLogo} alt='' /></Link>
                                        <Link href={'#'}><Image src={AppStore} className={styles.appLogo} alt='' /></Link>
                                    </>
                                    : null
                                }
                            </div>

                            <div className={styles.mainMidContainer}>
                                <p>Unleashing Innovation Anytime Everywhere</p>
                            </div>
                            <div className={styles.mainBottomText}>
                                <p className={styles.welcome_text} >Welcome to AE TechSphere, your dynamic portal for the latest in tech innovations. At AE, we believe in unlocking the power of technology Anytime, Everywhere, empowering individuals and businesses to thrive in the digital era.</p>
                                <div className={styles.container_Button}><Link href='#' onClick={slide_down_1}>
                                    <div className={styles.navButtonsBottom}>Learn More </div>
                                </Link></div>

                            </div>
                        </div>
                        {(device && (device === "web")) ?
                            <>
                                <Double_Scroll_client_arefin goToTop={scrollToTop} showTopBtn={showTopBtn_State} />
                                <Scroll_testing_client_arefin slide_up_by_1={slide_up_1} slide_down_by_1={slide_down_1} wanting_to_scroll_Bottom={wanting_to_scroll_Bottom_State} />
                            </>
                            : null
                        }
                    </div>
                    <div className={styles.right_side}>
                        <HomeSlider />
                        <TextSlider />
                    </div>
                </div>
            </div>
            <div className={styles.product_container} >
                <div className={styles.product_item}>
                    <div className={styles.service_container}>
                        <div className={styles.service_inner_container}>
                            <div className={styles.service_content_section}>
                                <div className={styles.service_item_section}>
                                    <Link href={'/services'} className={styles.service_item}>
                                        <div className={styles.service_title}>Bespoke Software Development</div>
                                        <div className={styles.service_content}>Comprehensive bespoke software development services, covering the entire process from ideation to delivery. Elevate your business efficiency, innovate in the market, and foster widespread end-user adoption.</div>
                                        <div className={styles.service_tell_me_more_section}><Link href='/services'> more </Link> <BsArrowRight /> </div>
                                    </Link>
                                    <Link href={'/services'} className={styles.service_item}>
                                        <div className={styles.service_title} >Development Team Argumentation</div>
                                        <div className={styles.service_content}> Efficient and agile team expansion to strategically enhance your capabilities and expedite the implementation of your digital initiatives.</div>
                                        <div className={styles.service_tell_me_more_section}> <Link href='/services'> more  </Link> <BsArrowRight />  </div>
                                    </Link>
                                    <Link href={'/services'} className={styles.service_item} style={{ borderRight: 'none' }}>
                                        <div className={styles.service_title}>Digital Transformation</div>
                                        <div className={styles.service_content}>The process of leveraging cutting-edge technology and innovative strategies to fundamentally reshape and optimize business operations, customer experiences, and organizational culture for the digital age.</div>
                                        <div className={styles.service_tell_me_more_section}><Link href='/services'> more </Link> <BsArrowRight /> </div>
                                    </Link>
                                </div>
                                <div className={styles.service_all_btn_section}>
                                    <Link href='/services' className={styles.btn_item}>See all services <BsArrowRight /> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.product_container} id='case-studies'>
                <div className={styles.product_item}>
                    <div className={styles.platform_container}>
                        <div className={styles.inner_platform_container}>
                            <div className={styles.platform_content_section}>
                                <div className={styles.platform_title_section}>
                                    <div className={styles.platform_title}> We made the most popular platforms and solutions</div>
                                    <div className={styles.platform_sub_title} style={{ textAlign: 'center' }} >We Love To Explore.   |   We Keep It Simple.   |   We Solve Real Problems.</div>
                                </div>
                                <div className={styles.platform_item_section}>
                                    <Link href={'/case-studies/#nosurge'} className={styles.platform_item}>
                                        <Image src={Nosurge_logo} className={styles.platform_item_logo} alt='' />
                                        <div className={styles.platform_logo_content}>MOVE ON WITHOUT SURGE PRICES</div>
                                    </Link>
                                    <Link href='/case-studies/#50ptrip' className={styles.platform_item}>
                                        <Image src={trip_logo} className={styles.platform_item_logo} alt='' />
                                        <div className={styles.platform_logo_content}>MORE TRIPS FOR LOCAL MINICABS</div>
                                    </Link>
                                    <Link href={'/case-studies/#cd_tokenomics'} className={styles.platform_item}>
                                        <Image src={CDT_letter_logo} className={styles.platform_item_logo} alt='' />
                                        <div className={styles.platform_logo_content}>Crypto Dollar : YOUR FINANCIAL FUTURE</div>
                                    </Link>
                                    <Link href={'/case-studies/#share_a_car'} className={styles.platform_item}>
                                        <Image src={Share_a_car_logo} className={styles.platform_item_logo} alt='' />
                                        <div className={styles.platform_logo_content}>THE BETTER WAY TO GET A CAR</div>
                                    </Link>

                                    <Link href={'/case-studies/#ukbd'} className={styles.platform_item}>
                                        <Image src={UKBD_logo} className={styles.platform_item_logo} alt='' />
                                        <div className={styles.platform_logo_content}>COMPREHENSIVE HUB : Products & Services</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* =================== Price table=============== */}

            <div className={`${styles.product_container} ${styles.pricing_bottom}`} id="pricing">
                <div className={styles.product_item}>
                    <div className={styles.pricing_container}>
                        <div className={styles.section_top}>
                            <p className={styles.your_queries_title}>Social Media Management Package</p>
                            <p className={styles.your_queries_sub_title}>Flexible plans tailored to your business needs. Choose what suits you best.</p>
                        </div>
                        <div className={`${styles.pricing_table} ${styles.pricing_table_custom}`}>

                            <div className={`${styles.pricing_card} ${styles.featured} ${styles.pricing_card_custom}`}>
                                <div className={styles.pricingHead}>
                                    <h3 className={styles.pricing_title}>Basic</h3>
                                    <p className={styles.pricing_price}>1,500 BDT</p>
                                    <h3 className={styles.pricing_title_month}>Per Month + Vat</h3>
                                    {/* <p className={styles.pricing_price}>£<span className={styles.priceInner}>299</span></p> */}
                                </div>
                                <hr></hr>
                                <ul className={styles.pricing_features}>
                                    <li> <span>1.</span> POST PER WEEK </li>
                                    <li> <span>2.</span> UNIQUE CONTENT </li>
                                    <li>  <span>3.</span> BOOST SOCIAL ENGAGEMENT </li>
                                    <li> <span>4.</span> BRANDED & UNIQUE GRAPHICS </li>
                                    <li> <span>5.</span> ADDITIONAL SERVICES
                                    AVAILABLE AT CHECKOUT</li>
                                    <li> <span>6.</span> MONTHLY ROLLING CONTRACT </li>
                                    <li> <span>7.</span>GREAT CUSTOMER SUPPORT</li>
                                    <li> <span>8.</span> FAST CUSTOMER SUPPORT</li>
                                    <li> <span>9.</span> NULL</li>
                                    <li> <span>10.</span> NULL</li>
                                    <li> <span>11.</span> NULL</li>
                                </ul>
                                <Link href="#" className={styles.pricing_btn}>Get Started</Link>
                            </div>

                            <div className={`${styles.pricing_card} ${styles.featured} ${styles.pricing_card_custom}`}>
                                <div className={styles.pricingHead}>
                                    <h3 className={styles.pricing_title}>Standard</h3>
                                    <p className={styles.pricing_price}>3,000 BDT</p>
                                    <h3 className={styles.pricing_title_month}>Per Month + Vat</h3>
                                    {/* <p className={styles.pricing_price}>£<span className={styles.priceInner}>299</span></p> */}
                                </div>
                                <hr></hr>
                                <ul className={styles.pricing_features}>
                                    <li> <span>1.</span> POST PER WEEK </li>
                                    <li> <span>2.</span> UNIQUE CONTENT </li>
                                    <li> <span>3.</span> BOOST SOCIAL ENGAGEMENT </li>
                                    <li> <span>4.</span> BRANDED & UNIQUE GRAPHICS </li>
                                    <li> <span>5.</span> REAL-TIME SOCIAL MEDIA
                                    ANALYTICS </li>
                                    <li> <span>6.</span> ADDITIONAL SERVICES
                                    AVAILABLE AT CHECKOUT </li>
                                    <li> <span>7.</span> MONTHLY ROLLING CONTRACT
                                    - CANCEL ANY TIME </li>
                                    <li> <span>8.</span> GREAT CUSTOMER SUPPORT </li>
                                    <li> <span>9.</span> FAST CUSTOMER SUPPORT </li>
                                    <li> <span>10.</span> NULL </li>
                                    <li> <span>11.</span> NULL </li>
                                </ul>
                                <Link href="#" className={styles.pricing_btn}>Get Started</Link>
                            </div>


                            <div className={`${styles.pricing_card} ${styles.featured} ${styles.pricing_card_custom}`}>
                                <div className={styles.pricingHead}>
                                    <h3 className={styles.pricing_title}>Premium</h3>
                                    <p className={styles.pricing_price}>5,000 BDT</p>
                                    <h3 className={styles.pricing_title_month}>Per Month + Vat</h3>
                                    {/* <p className={styles.pricing_price}>£<span className={styles.priceInner}>299</span></p> */}
                                </div>
                                <hr></hr>
                                <ul className={styles.pricing_features}>
                                    <li> <span>1.</span> 5 POSTS PER WEEK </li>
                                    <li> <span>2.</span> UNIQUE CONTENT </li>
                                    <li> <span>3.</span> BOOST SOCIAL ENGAGEMENT
                                    AND GROWTH </li>
                                    <li> <span>4.</span> BRANDED & UNIQUE GRAPHICS </li>
                                    <li> <span>5.</span> PREVIEW POSTS ONE WEEK IN
                                    ADVANCE </li>
                                    <li> <span>6.</span> REAL-TIME SOCIAL MEDIA
                                    ANALYTICS </li>
                                    <li> <span>7.</span> 1 STRATEGY CALL PER MONTH
                                    INCLUDED </li>
                                    <li> <span>8.</span> ADDITIONAL SERVICES ARE
                                    AVAILABLE </li>
                                    <li> <span>9.</span> MONTHLY ROLLING CONTRACT </li>
                                    <li> <span>10.</span> FAST CUSTOMER SUPPORT </li>
                                    <li> <span>11.</span> NULL </li>
                                </ul>
                                <Link href="#" className={styles.pricing_btn}>Get Started</Link>
                            </div>


                            <div className={`${styles.pricing_card} ${styles.featured} ${styles.pricing_card_custom}`}>
                                <div className={styles.pricingHead}>
                                    <h3 className={styles.pricing_title}>P L A T I N U M</h3>
                                    <p className={styles.pricing_price}>7,000BDT</p>
                                    <h3 className={styles.pricing_title_month}>Per Month + Vat</h3>
                                    {/* <p className={styles.pricing_price}>£<span className={styles.priceInner}>299</span></p> */}
                                </div>
                                <hr></hr>
                                <ul className={styles.pricing_features}>


                                    <li> <span>1.</span>  7 POSTS PER WEEK </li>
                                    <li> <span>2.</span> UNIQUE CONTENT </li>
                                    <li> <span>3.</span> BOOST SOCIAL ENGAGEMENT
                                    AND GROWTH </li>
                                    <li> <span>4.</span> PREVIEW POSTS ONE WEEK IN
                                    ADVANCE </li>
                                    <li> <span>5.</span>  REAL-TIME SOCIAL MEDIA
                                    ANALYTICS </li>
                                    <li> <span>6.</span> 1 STRATEGY CALL PER MONTH
                                    INCLUDED </li>
                                    <li> <span>7.</span>  1 X 500-WORD SEO-OPTIMISED
                                    BLOG POST </li>
                                    <li> <span>8.</span> FACEBOOK ADS CAMPAIGN
                                    INCLUDED </li>
                                    <li> <span>9.</span> ADDITIONAL SERVICES ARE
                                    AVAILABLE </li>
                                    <li> <span>10.</span> MONTHLY ROLLING CONTRACT </li>
                                    <li> <span>11.</span> PRIORITY CUSTOMER SUPPORT </li>

                                </ul>
                                <Link href="#" className={styles.pricing_btn}>Get Started</Link>
                            </div>







                        </div>
                    </div>
                </div>
            </div>





            {/* ==================== Price table ========================== */}



            <div className={styles.product_container} >
                <div className={styles.product_item}>
                    <div className={styles.your_queries_container}>
                        <div className={styles.your_queries_inner_container}>
                            <div className={styles.your_queries_content_section}>
                                <div className={styles.section_top}>
                                    <p className={styles.your_queries_title}>Your queries, our solutions</p>
                                    <p className={styles.your_queries_sub_title}>Explore deeper insights into our software  development services in the United Kingdom. Have questions? We&apos;ve got the answers.</p>
                                </div>
                                <div className={styles.your_queries_question_container}>
                                    <div className={styles.question_container_left_part}>
                                        {questionData.slice(0, 2).map((data, index) => (
                                            <div key={index} className={`${styles.your_queries_question_container_inner_section} ${openCollapse === index ? styles.collapsed : ''}`} onClick={() => toggleCollapse(index)}>
                                                <div className={styles.your_queries_question_item}>
                                                    <div className={styles.question_item_title}>{data.question}</div>
                                                    <div className={styles.question_item_icon}><GoArrowDown /></div>
                                                </div>
                                                {(openCollapse === index) && (
                                                    <div className={styles.your_queries_answer}>
                                                        {data.answer}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                    <div className={styles.question_container_right_part}>
                                        {questionData.slice(2).map((data, index) => (
                                            <div key={index + 2} className={`${styles.your_queries_question_container_inner_section} ${openCollapse === index + 2 ? styles.collapsed : ''}`} onClick={() => toggleCollapse(index + 2)}>
                                                <div className={styles.your_queries_question_item}>
                                                    <div className={styles.question_item_title}>{data.question}</div>
                                                    <div className={styles.question_item_icon}><GoArrowDown /></div>
                                                </div>
                                                {(openCollapse === index + 2) && (
                                                    <div className={styles.your_queries_answer}>
                                                        {data.answer}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
}

export default HomeContent;