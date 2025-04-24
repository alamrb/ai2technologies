'use client'
import Image from "next/image";
import Link from "next/link";
import styles from './caseStudies.module.css'
import trip_logo from '../assets/images/50p_trip.png';
import CDT_letter_logo from '../assets/images/CDT_letter.png';
import Nosurge_logo from '../assets/images/NOSURGE.png';
import Share_a_car_logo from '../assets/images/Share-A-Car_LOGO.png';
import UKBD_logo from '../assets/images/UKBD.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nosurge_image_logo from '../assets/images/NOSURGE.png';
import time_icon from '../assets/time.svg'
import person_icon from '../assets/person.svg'
import star_icon from '../assets/star.svg'
import { IoShieldHalfSharp } from "react-icons/io5";
import { GiCutDiamond } from "react-icons/gi";
import { TfiTime } from "react-icons/tfi";
import icon_location from '../assets/images/icon-location.png';
import trip1a from '../assets/50pTRIP-1A.png';
import trip2a from '../assets/50pTRIP-2A.png';
import shareCar from '../assets/Share-A-Car.png';
import share1a from '../assets/Share-A-Car-1.png';
import share2a from '../assets/Share-A-Car-2.png';
import image1 from '../assets/images/case-studies004(1).png';
import image2 from '../assets/images/case-studies005(1).png';
import image3 from '../assets/images/case-studies006(1).png';
import image4 from '../assets/images/case-studies007(1).png';
import image5 from '../assets/images/411.webp';
import image6 from '../assets/images/410.webp';
// import bitcoin from '../assets/bitCoin.avif';
import CDT_letter from '../assets/images/CDT_letter.png';
import buy from '../assets/images/buy-sell.png';
import finger from '../assets/images/finger-print.png';
import exchange from '../assets/images/exchange.png';
import Footer from "../home/footer";

export default function CaseStudies() {

    const review_slider_settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        className: styles.slick_slider,
        arrows: false,
        pauseOnDotsHover: true,
        pauseOnHover: true,
    };

    return (
        <div className={styles.landing}>
            <div className={styles.product_container} id='case-studies'>
                <div className={styles.product_item}>
                    <div className={styles.platform_container}>
                        <div className={styles.inner_platform_container}>
                            <div className={styles.platform_content_section}>
                                <div className={styles.platform_title_section}>
                                    <div className={styles.platform_title}> We made the most popular platforms and solutions</div>
                                    <div className={styles.platform_sub_title} style={{ textAlign: 'center' }}>We Love To Explore.   |   We Keep It Simple.   |   We Solve Real Problems.</div>
                                </div>
                                <div className={styles.platform_item_section}>
                                    <Link href={'#nosurge'} className={styles.platform_item}>
                                        <Image src={Nosurge_logo} className={styles.platform_item_logo} alt='' />
                                        <div className={styles.platform_logo_content}>MOVE ON WITHOUT SURGE PRICES</div>
                                    </Link>
                                    <Link href={'#50ptrip'} className={styles.platform_item}>
                                        <Image src={trip_logo} className={styles.platform_item_logo} alt='' />
                                        <div className={styles.platform_logo_content}>MORE TRIPS FOR LOCAL MINICABS</div>
                                    </Link>
                                    <Link href={'#cd_tokenomics'} className={styles.platform_item}>
                                        <Image src={CDT_letter_logo} className={styles.platform_item_logo} alt='' />
                                        <div className={styles.platform_logo_content}>Crypto Dollar : YOUR FINANCIAL FUTURE</div>
                                    </Link>
                                    <Link href={'#share_a_car'} className={styles.platform_item}>
                                        <Image src={Share_a_car_logo} className={styles.platform_item_logo} alt='' />
                                        <div className={styles.platform_logo_content}>THE BETTER WAY TO GET A CAR</div>
                                    </Link>

                                    <Link href={'#ukbd'} className={styles.platform_item}>
                                        <Image src={UKBD_logo} className={styles.platform_item_logo} alt='' />
                                        <div className={styles.platform_logo_content}>COMPREHENSIVE HUB : Products & Services</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.product_container} id='nosurge'>
                <div className={styles.product_item}>
                    <div className={styles.single_design_section}>
                        <div className={styles.technology_stack_title_section}>
                            <div className={styles.nosurge_sub_title}>  Believe in fair ride-share </div>
                            <div className={styles.nosurge_title}> move on without <br /> surge prices</div>
                            <div className={styles.image_container}> <Image className={styles.nosurge_image} src={nosurge_image_logo} alt=''></Image></div>
                            <div className={styles.nosurge_mini_sub_title}> ‘NO SURGE’ is a mobile app and cloud-based platform. It’s a smart, <br /> simple and better way to grab a local cab without any price rise.</div>
                        </div>
                    </div>
                    {/* <div className={styles.left_side}>
                        <div className={styles.product_description}>
                            <div className={styles.contentContainer}>
                                <div className={styles.technology_stack_title_section}>
                                    <div className={styles.nosurge_sub_title}>  Believe in fair ride-share </div>
                                    <div className={styles.nosurge_title}> move on without <br /> surge prices</div>
                                    <div className={styles.image_container}> <Image className={styles.nosurge_image} src={nosurge_image_logo} alt=''></Image></div>
                                    <div className={styles.nosurge_mini_sub_title}> ‘NO SURGE’ is a mobile app and cloud-based platform. It’s a smart, <br /> simple and better way to grab a local cab without any price rise.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right_side} >
                        <Image className={styles.image_full} src={side_image1} alt='' />
                    </div> */}
                </div>
            </div>
            <div className={styles.product_container}>
                <div className={`${styles.product_item} ${styles.redefine_option}`}>
                    <div className={styles.single_design_section}>
                        <div className={styles.phase_section}>
                            <div className={styles.phase_top_section}>
                                <p>REDEFINE YOUR OPTIONS</p>
                            </div>
                            <div className={styles.phase_bottom_section}>
                                <div className={styles.phase_container}>
                                    <div className={styles.phase_item}>
                                        <div className={styles.phase_icon}>
                                            <Image src={time_icon} alt="" />
                                        </div>
                                        <div className={styles.phase_title}>ANYTIME EVERYWHERE</div>
                                        <div className={styles.phase_content}>Workout Day Or Night Without Any Surprise</div>
                                    </div>
                                    <div className={styles.phase_item}>
                                        <div className={styles.phase_icon}>
                                            <Image src={person_icon} alt="" />
                                        </div>
                                        <div className={styles.phase_title}>PERSONALISED OFFERS</div>
                                        <div className={styles.phase_content}>The Right Favourite Driver For You</div>
                                    </div>
                                    <div className={styles.phase_item}>
                                        <div className={styles.phase_icon}>
                                            <Image src={star_icon} alt="" />
                                        </div>
                                        <div className={styles.phase_title}>INSPIRE LOCAL MINICABS</div>
                                        <div className={styles.phase_content}>Make A Positive Impact In Your High Street</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.product_container}>
                <div className={`${styles.product_item} ${styles.great_value}`}>
                    <div className={styles.single_design_section}>
                        <div className={styles.phase_section}>
                            <div className={styles.phase_bottom_section}>
                                <div className={styles.phase_container}>
                                    <div className={styles.phase_item}>
                                        <div className={styles.phase_icon}>
                                            <IoShieldHalfSharp />
                                        </div>
                                        <div className={styles.phase_title}>SAFETY</div>
                                        <div className={styles.phase_content}>A safe & secure journey is our most important priority for both you & your driver. Only fully authorized PHO and their highly regulated licensed drivers can use our platform. All the trips and drivers are always under the direct monitored PHOs.</div>
                                    </div>
                                    <div className={styles.phase_item}>
                                        <div className={styles.phase_icon}>
                                            <GiCutDiamond />
                                        </div>
                                        <div className={styles.phase_title}>GREAT VALUE</div>
                                        <div className={styles.phase_content}>Now {`it's`} your opportunity to take control of your wallet – and NO SURGE has your back. We always price match of Uber and local cab operators, so you get the best price range without any surge to make sure a great deal rather than Uber.</div>
                                    </div>
                                    <div className={styles.phase_item}>
                                        <div className={styles.phase_icon}>
                                            <TfiTime />
                                        </div>
                                        <div className={styles.phase_title}>AVAILABILITY</div>
                                        <div className={styles.phase_content}>NO SURGE works differently to most ride-share apps, because it has the support of you, as well as your local minicab operators. We created a win-win process that can connect millions of passengers to thousands of drivers across the UK.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.product_container}>
                <div className={`${styles.product_item} ${styles.believe_SURGE}`}>
                    <div className={styles.single_design_section}>
                        <div className={styles.phase_section}>
                            <div className={styles.text_section}>
                                <p>We believe SURGE is NOT a fair practice in ride-share cab businesses. It’s hard to get a single ride-share app user who hasn’t faced an eye-watering surge price in London. We want to break this fierce competition in the taxi and cab industries.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.product_container}>
                <div className={`${styles.product_item} ${styles.Our_algorithm}`}>
                    <div className={styles.single_design_section}>
                        <div className={styles.phase_section}>
                            <div className={styles.dialog_box}>
                                <div className={styles.dialog_box_left}>
                                    <p>Our algorithm always helps you to find out the right car to make your day.</p>
                                </div>
                                <div className={styles.dialog_box_right}>
                                    <div>
                                        <p className={styles.small_text}>SAVE UP TO</p>
                                        <div>
                                            <span className={styles.small_text}>£</span>
                                            <span className={styles.large_text}>250</span>
                                        </div>
                                        <p className={styles.small_text}>IN A YEAR</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.product_container}>
                <div className={`${styles.product_item} ${styles.break_FIERCE}`}>
                    <div className={styles.single_design_section}>
                        <div className={styles.phase_section}>
                            <div className={styles.dialog_box}>
                                <div className={styles.dialog_box_left}>
                                    <p>BREAK THE FIERCE COMPETITION IN THE TAXI AND CAB INDUSTRIES</p>
                                </div>
                                <div className={styles.dialog_box_right}>
                                    <p>Refer friends to get *£5 ride voucher when they sign up using your referral code. You will receive *£5 ride voucher after their first ride with NOSURGE.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.product_container} id='50ptrip'>
                <div className={styles.product_item}>
                    <div className={styles.left_side}>
                        <div className={styles.product_description}>
                            <div className={styles.contentContainer}>
                                <div className={styles.ptrip_title_section}>
                                    <div className={styles.ptrip_text_container}>
                                        <p className={styles.button_p} style={{ marginBottom: '3px' }}>Private Hire Operator </p>
                                        <p className={styles.para_label} style={{ marginBottom: '3px' }}>Sign Up For Your Control Panel </p>
                                        <p className={styles.para_label} style={{ color: '#012965' }}>For COVID-19 Support Scheme </p>
                                        <p className={styles.para_lg_label}>FREE </p>
                                        <p className={styles.button_p} style={{ fontSize: '14px' }}>OPERATORS : SIGN UP NOW </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right_side} >
                        <div className={styles.ptrip_title_section} style={{ backgroundColor: '#00FFFF' }}>
                            <div className={styles.ptrip_text_container}>
                                <p className={styles.plarge_text}>The better way <br /> to boost your <br /> business </p>
                                <p className={styles.pmid_text}> MORE PASSENGERS <br /> LESS DEAD MILEAGE <br /> EXTRA EARNINGS </p>
                            </div>
                        </div>
                        {/*<Image className={styles.image_full} src={side_image1} alt='' />*/}
                    </div>
                </div>
            </div>

            <div className={styles.product_container}>
                <div className={`${styles.product_item} ${styles.no_matter_value}`}>
                    <div className={styles.single_design_section}>
                        <div className={styles.phase_section}>
                            <div className={styles.phase_inner_container}>
                                <div className={styles.ptrip_text_section}>
                                    <p className={styles.ptrip_text_01}>50pTRIP will give you jobs toward your desired destination.</p>
                                    <p className={styles.ptrip_text_02}>NO MATTER THE VALUE OF THE JOB, WE CHARGE ONLY 50P PER TRIP.</p>
                                </div>
                                <div className={styles.ptrip_text_section}>
                                    <div className={styles.center_container}>
                                        <div className={styles.center_logo}>
                                            <Image src={icon_location} alt='' />
                                        </div>
                                        <div className={styles.center_text}>
                                            COUNTLESS OPPORTUNITY <br />
                                            <span> ACCEPT CASH OR CARD </span> <br />
                                            <span> ANYTIME EVERYWHERE </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.ptrip_text_section}>
                                    <p className={styles.ptrip_text_02}>NO MORE IDLE DRIVING, NO MORE WASTE OF TIME AND FUEL.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.product_container}>
                <div className={`${styles.product_item} ${styles.only_image}`}>
                    <div className={styles.single_design_section}>
                        <div className={styles.phase_section}>
                            <Image style={{ objectFit: 'none' }} src={trip1a} fill sizes='100%' alt='' />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.product_container}>
                <div className={`${styles.product_item} ${styles.vast_network}`}>
                    <div className={styles.left_side} style={{ backgroundColor: 'rgb(255 255 255 / 80%)' }}>
                        <div className={styles.product_description}>
                            <div className={styles.contentContainer}>
                                <div className={styles.ptrip_title_section}>
                                    <div className={styles.ptrip_text_container}>
                                        <p className={styles.pmid_text} style={{ margin: '30px 0px', textAlign: 'center' }}> {`IT'S`} SMART. <br /> SIMPLE AND EASY TO USE.  </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right_side} >
                        <div className={styles.ptrip_title_section} style={{ backgroundColor: 'rgb(0 255 255 / 90%)' }}>
                            <div className={styles.ptrip_text_container}>
                                <p className={styles.plarge_text} style={{ textAlign: 'center' }}>Be part of our <br /> vast network. </p>
                                <p className={styles.pmid_text} style={{ margin: '30px 0px', textAlign: 'center' }}> THE POWERFUL AUTO-DISPATCH  <br /> SYSTEM WILL CUT YOUR <br /> COST AND BURDEN.  </p>
                                <p className={styles.pmid_text} style={{ textAlign: 'center' }}> ENJOY SIMILAR FEATURES <br /> THAT UBER HAS. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.product_container}>
                <div className={`${styles.product_item} ${styles.only_image}`}>
                    <div className={styles.single_design_section}>
                        <div className={styles.phase_section}>
                            <Image style={{ objectFit: 'none' }} src={trip2a} fill sizes='100%' alt='' />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.product_container}>
                <div className={`${styles.product_item} ${styles.dont_give_up}`}>
                    <div className={styles.single_design_section}>
                        <div className={styles.phase_section}>
                            <p className={styles.text_01}>{`DON'T`} GIVE UP <br /> WITHOUT ANY FIGHT</p>
                            <p className={styles.text_02}>We have a broader spectrum of the corporate <br /> and local customer base.</p>
                            <p className={styles.text_02}>We always explore and streamline for <br /> prospective users and events.</p>
                            <p className={styles.text_02}>Our algorithm continually price-matches with <br /> local rates and Uber standard prices.</p>
                            <p className={styles.text_02}>Get the best value of your time and services.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.product_container} id='share_a_car'>
                <div className={`${styles.product_item} ${styles.only_image}`}>
                    <div className={styles.single_design_section}>
                        <div className={styles.phase_section}>
                            <Image style={{ objectFit: 'none' }} src={share1a} fill sizes='100%' alt='' />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.product_container}>
                <div className={`${styles.product_item} ${styles.no_matter_value}`}>
                    <div className={styles.single_design_section}>
                        <div className={styles.phase_section}>
                            <div className={styles.phase_inner_container}>
                                <div className={styles.ptrip_text_section}>
                                    <p className={styles.share_text_01}>THE BETTER WAY TO GET A CAR</p>
                                    <p className={styles.share_text_02}>NEW CAR-SHARING APP FOR FRIENDS CONNECTING FRIENDS <br /> THAT DRIVE WITH PASSION WHEN LOOKING FOR LIFTS</p>
                                </div>
                                <div className={styles.ptrip_text_section}>
                                    <div className={styles.center_container}>
                                        <div className={styles.center_logo}>
                                            <Image src={shareCar} alt='' />
                                        </div>
                                        <div className={styles.center_text}>Download the Share A Car app</div>
                                        <div className={styles.center_text}>When you want a ride or lift</div>
                                    </div>
                                </div>
                                <div className={styles.ptrip_text_section}>
                                    <p className={styles.ptrip_text_02}>GET A FRIENDLY RIDE CHEAPER THAN A TAXI</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.product_container}>
                <div className={`${styles.product_item} ${styles.only_image}`}>
                    <div className={styles.single_design_section}>
                        <div className={styles.phase_section}>
                            <Image style={{ objectFit: 'none' }} src={share2a} fill sizes='100%' alt='' />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.product_container}>
                <div className={`${styles.product_item} ${styles.not_texi_company}`}>
                    <div className={styles.left_side}>
                        <div className={styles.product_description}>
                            <div className={styles.contentContainer}>
                                <div className={styles.ptrip_title_section}>
                                    <div className={styles.ptrip_text_container}>
                                        <p className={styles.share_text}> We are not a taxi company <br />or car rental service.  </p>
                                        <p className={styles.share_text}> We {`don't`} take commission like Uber.  </p>
                                        <p className={styles.share_text}> We act and connect <br /> as a search engine. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right_side} >
                        <div className={styles.ptrip_title_section}>
                            <div className={styles.ptrip_text_container}>
                                <p className={`${styles.pmid_text} ${styles.fast_text}`}> It is fast, secure, and <br /> cheaper than traditional <br /> car rental because you <br /> are dealing the people <br /> just like you. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.product_container} id="ukbd">
                <div className={`${styles.product_item} ${styles.ukbd_main}`}>
                    <div className={styles.platform_container}>
                        <div className={styles.inner_platform_container}>
                            <div className={styles.platform_content_section}>
                                <div className={styles.platform_title_section}>
                                    <div className={styles.platform_title}> YOUR PREMIER DESTINATION FOR AUTHENTIC LONDON PRODUCTS DELIVERED STRAIGHT TO YOUR DOORSTEP IN BANGLADESH.</div>
                                    <div className={styles.platform_sub_title}>At UKBD, we pride ourselves on offering a wide range of high-quality items spanning across cosmetics, electronics, food, baby essentials, kitchen accessories, electronic accessories, and health medicines.</div>
                                    <div className={styles.platform_sub_title}>With a focus on authenticity and excellence, we ensure that every product you purchase from us originates directly from London, guaranteeing the genuine experience and quality you deserve. Whether {`you're`} looking for the latest beauty trends, cutting-edge electronics, delicious gourmet treats, or essential healthcare products, UKBD has you covered.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.left_side}>
                        <div className={styles.product_description}>
                            <div className={styles.contentContainer}>
                                <p className={styles.section_title}>AUTHENTICITY GUARANTEED</p>
                                <p className={styles.section_paragraph}>With a focus on authenticity and excellence, we ensure that every product you purchase from us originates directly from London, guaranteeing the genuine experience and quality you deserve.</p>
                                <p className={styles.section_paragraph} style={{ marginTop: '20px' }}>Whether {`you're`} looking for the latest beauty trends, cutting-edge electronics, delicious gourmet treats, or essential healthcare products, UKBD has you covered.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right_side} style={{ backgroundColor: '#f5f9fc' }}>
                        <Image className={styles.image_full} src={image1} alt='' />
                    </div>
                </div>
            </div>
            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.right_side} style={{ backgroundColor: '#f5f9fc' }}>
                        <Image className={styles.image_full} src={image2} alt='' />
                    </div>
                    <div className={styles.left_side}>
                        <div className={styles.product_description}>
                            <div className={styles.contentContainer}>
                                <p className={styles.section_title}>SEAMLESS SHOPPING EXPERIENCE</p>
                                <p className={styles.section_paragraph}>Our user-friendly ecommerce platform makes it easy for Bangladeshi shoppers to browse, select, and purchase their favorite London products with just a few clicks.</p>
                                <p className={styles.section_paragraph} style={{ marginTop: '20px' }}>We understand the importance of convenience and reliability, which is why we prioritize secure payment methods and swift delivery to ensure your shopping experience with us is seamless and hassle-free.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.left_side}>
                        <div className={styles.product_description}>
                            <div className={styles.contentContainer}>
                                <p className={styles.section_title}>BRINGING LONDON TO YOUR DOORSTEP</p>
                                <p className={styles.section_paragraph}>At UKBD, we are committed to bringing the essence of London right to your doorstep, providing you with access to the finest products that the vibrant city has to offer.</p>
                                <p className={styles.section_paragraph} style={{ marginTop: '20px' }}>Trust UKBD for all your shopping needs, and let us bring a touch of London luxury into your life. Shop with us today and experience the UKBD difference!</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right_side} style={{ backgroundColor: '#f5f9fc' }}>
                        <Image className={styles.image_full} src={image3} alt='' />
                    </div>
                </div>
            </div>
            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.right_side} style={{ backgroundColor: '#f5f9fc' }}>
                        <Image className={styles.image_full} src={image4} alt='' />
                    </div>
                    <div className={styles.left_side}>
                        <div className={styles.product_description}>
                            <div className={styles.contentContainer}>
                                <p className={styles.section_title}>DEDICATED CUSTOMER SUPPORT</p>
                                <p className={styles.section_paragraph}>Additionally, our dedicated customer support team is always available to assist you with any queries or concerns, ensuring your satisfaction every step of the way.</p>
                                <p className={styles.section_paragraph} style={{ marginTop: '20px' }}>Join the UKBD community today and embark on a journey of discovering the best of London, right from the comfort of your home in Bangladesh.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.product_container} id="cd_tokenomics">
                <div className={styles.product_item}>
                    <div className={styles.full_container}>
                        <div className={styles.bit_inner_container}>
                            <div className={styles.bit_banner}>
                                <h2 className={styles.crypto_title_text} style={{ fontWeight: 'bold', color: '#fff' }}> Crypto Dollar </h2>
                                <h2 className={styles.crypto_title_text} style={{ fontWeight: '300', color: '#fff' }}> YOUR FINANCIAL FUTURE </h2>
                            </div>
                            <div className={styles.bit_home_bottom}>
                                <div className={styles.bit_home_content}>
                                    <p className={styles.bit_home_paragraph}>Private sale of crypto-token or Private-IEO stands for Initial Exchange Offering in a closed personal environment. An IEO is a similar version of an IPO, where the exchange is responsible for the fundraising process. {`It's`} usually highly profitable investment opportunity to participate in the private sale of utility tokens.</p>
                                    <p className={styles.bit_home_title}>Do you want to grow your wealth? We can do it together</p>
                                    <p className={styles.bit_home_title}>Now is the time to invest in CDT for maximising your return</p>
                                </div>
                                <div className={styles.logo_container}>
                                    <Image src={CDT_letter} alt="" />
                                    <p>Crypto Dollar Token</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.left_side}>
                        <div className={styles.full_container}>
                            <div className={styles.bit_inner_container}>
                                <div className={styles.table_container}>
                                    <div className={styles.table_title}>BOOK YOUR STOCK NOW</div>
                                    <div className={styles.main_table_con}>
                                        <div className={styles.table_left_section}>
                                            <div className={styles.column_label}>6,421,430</div>
                                            <div className={styles.column_label}>18,578,570</div>
                                        </div>
                                        <div className={styles.table_right_section}>
                                            <div className={styles.column_label}>Sold</div>
                                            <div className={styles.column_label}>In Stock</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right_side} style={{ backgroundColor: '#f5f9fc', position: 'relative' }}>
                        <div className={styles.full_container}>
                            <div className={styles.bit_inner_container} style={{ backgroundColor: 'rgb(255 255 255 / 95%)' }}>
                                <div className={styles.deal_title}>GET THE BEST DEAL</div>
                                <div className={styles.deal_dolar_container}>
                                    <div className={styles.deal_dolar}> $0.05 </div>
                                    <div className={styles.deal_typing}>per CDT for Private Buyers</div>
                                </div>
                                <div className={styles.deal_timer}>
                                    <div className={styles.deal_timer_item}>
                                        <p className={styles.deal_timer_item_number}>00</p>
                                        <p className={styles.deal_timer_item_label}>Days</p>
                                    </div>
                                    <div className={styles.deal_timer_item}>
                                        <p className={styles.deal_timer_item_number}>00</p>
                                        <p className={styles.deal_timer_item_label}>Hours</p>
                                    </div>
                                    <div className={styles.deal_timer_item}>
                                        <p className={styles.deal_timer_item_number}>00</p>
                                        <p className={styles.deal_timer_item_label}>Minutes</p>
                                    </div>
                                    <div className={styles.deal_timer_item}>
                                        <p className={styles.deal_timer_item_number}>00</p>
                                        <p className={styles.deal_timer_item_label}>Seconds</p>
                                    </div>
                                </div>
                                <div className={styles.deal_last_label}>LEFT OR UNTIL THE STOCK LAST</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.full_container}>
                        <div className={styles.bit_inner_container}>
                            <div className={styles.table_container}>
                                <div className={styles.table_title}>BOOK YOUR STOCK NOW</div>
                                <div className={styles.main_table_con}>
                                    <div className={styles.table_left_section}>
                                        <div className={styles.column_label}>6,421,430</div>
                                        <div className={styles.column_label}>18,578,570</div>
                                    </div>
                                    <div className={styles.table_right_section}>
                                        <div className={styles.column_label}>Sold</div>
                                        <div className={styles.column_label}>In Stock</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.full_container}>
                        <div className={styles.bit_inner_container}>
                            <div className={styles.deal_title}>GET THE BEST DEAL</div>
                            <div className={styles.deal_dolar_container}>
                                <div className={styles.deal_dolar}> $0.05 </div>
                                <div className={styles.deal_typing}>per CDT for Private Buyers</div>
                            </div>
                            <div className={styles.deal_timer}>
                                <div className={styles.deal_timer_item}>
                                    <p className={styles.deal_timer_item_number}>00</p>
                                    <p className={styles.deal_timer_item_label}>Days</p>
                                </div>
                                <div className={styles.deal_timer_item}>
                                    <p className={styles.deal_timer_item_number}>00</p>
                                    <p className={styles.deal_timer_item_label}>Hours</p>
                                </div>
                                <div className={styles.deal_timer_item}>
                                    <p className={styles.deal_timer_item_number}>00</p>
                                    <p className={styles.deal_timer_item_label}>Minutes</p>
                                </div>
                                <div className={styles.deal_timer_item}>
                                    <p className={styles.deal_timer_item_number}>00</p>
                                    <p className={styles.deal_timer_item_label}>Seconds</p>
                                </div>
                            </div>
                            <div className={styles.deal_last_label}>LEFT OR UNTIL THE STOCK LAST</div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.full_container}>
                        <div className={styles.bit_inner_container}>
                            <div className={styles.dividend_title_container}>
                                <p className={styles.dividend_title}>DIVIDEND</p>
                                <p className={styles.dividend_subtitle}>GUARANTEED FOR PRIVATE INVESTORS</p>
                            </div>
                            <div className={styles.divide_bottom_section}>
                                <div className={styles.bottom_section}>
                                    <p className={styles.bottom_title}>10</p>
                                    <p className={styles.bottom_para}>
                                        Starting Exchange Rate US $0.10 = 1 CDT <br />
                                        1st Round Private Sale @ $0.03 <br />
                                        2nd Round @ $0.05, 3rd Round @ $0.07
                                    </p>
                                </div>
                                <div className={styles.bottom_section}>
                                    <p className={styles.bottom_title}>100,000,000</p>
                                    <p className={styles.bottom_para}>
                                        Total 100 million CDTs is available for sale. <br />
                                        Private Sale: 5 million, Pre-Crowd Sale: 20 <br />
                                        million and Public Sale: 75 million.
                                    </p>
                                </div>
                                <div className={styles.bottom_section}>
                                    <div className={styles.deal_timer}>
                                        <div className={styles.deal_timer_item}>
                                            <p className={styles.deal_timer_item_number}>00</p>
                                            <p className={styles.deal_timer_item_label}>Days</p>
                                        </div>
                                        <div className={styles.deal_timer_item}>
                                            <p className={styles.deal_timer_item_number}>00</p>
                                            <p className={styles.deal_timer_item_label}>Hours</p>
                                        </div>
                                        <div className={styles.deal_timer_item}>
                                            <p className={styles.deal_timer_item_number}>00</p>
                                            <p className={styles.deal_timer_item_label}>Minutes</p>
                                        </div>
                                        <div className={styles.deal_timer_item}>
                                            <p className={styles.deal_timer_item_number}>00</p>
                                            <p className={styles.deal_timer_item_label}>Seconds</p>
                                        </div>
                                    </div>
                                    <p className={styles.bottom_para}>
                                        Open for Public Sale on 1st July 2021. Private investors could make a profit of up to 300% in 2 years.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={`${styles.full_container} ${styles.crypto_background}`}>
                        <div className={styles.bit_inner_container}>
                            <div className={styles.Crypto_Dollar_box}>
                                <p>Crypto Dollar (CDT), an AI-integrated blockchain project, is the most ambitious scheme of Platform AE Limited where CDT is a medium of exchange in return of the AE Services. </p> <br />
                                <p>Currently, three AE Services: Call A Cab London, 50pTRIP, and NoSurge, we are operating in London. </p> <br />
                                <p>We aim to sell a total of 100 million CDTs to fund our global expansion plan, and the exchange rate has been set on $0.10 per CDT. </p> <br />
                                <p>However, we allocated five million (only 5%) CDTs at a rate of $0.05 for our most valued private investors to make sure their finance could multiply the wealth 3-6 times within 3 years. And, that opportunity will end on March 31, 2021. </p>
                            </div>
                            <div className={styles.divide_bottom_section} style={{ width: '60%', marginTop: '30px' }}>
                                <div className={styles.bottom_subsection}>
                                    <div className={styles.bottom_sub_icon}>
                                        <Image src={buy} alt="" />
                                    </div>
                                    <div className={styles.bottom_sub_title}>Easily Buy & Sell</div>
                                </div>
                                <div className={styles.bottom_subsection}>
                                    <div className={styles.bottom_sub_icon}>
                                        <Image src={finger} alt="" />
                                    </div>
                                    <div className={styles.bottom_sub_title}>Secure & Protected</div>
                                </div>
                                <div className={styles.bottom_subsection}>
                                    <div className={styles.bottom_sub_icon}>
                                        <Image src={exchange} alt="" />
                                    </div>
                                    <div className={styles.bottom_sub_title}>Exchange With <br /> $ / £ / BTC</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.product_container}>
                <div className={`${styles.product_item} ${styles.tokenomics}`}>
                    <div className={styles.left_side} style={{ backgroundColor: 'rgb(255 255 255 / 95%)' }}>
                        <div className={styles.product_description}>
                            <div className={styles.contentContainer}>
                                <p className={styles.section_title}>Tokenomics & Important Notice</p>
                                <p className={styles.section_paragraph}>The AE team is launching an Initial Exchange Offering (IEO) in order to fund the continual development and expansion of {`it's`} {`'NoSurge'`} and {`'50pTRIP'`} projects for making cab fares fair.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right_side} style={{ backgroundColor: 'rgb(122 122 122 / 85%)' }}>
                        <div className={styles.ptrip_title_section}>
                            <div className={`${styles.ptrip_text_container} ${styles.crp_text_container}`}>
                                <p className={styles.pmid_text} style={{ margin: '30px 0px', textAlign: 'justify', textTransform: 'initial', fontSize: '15px', color: '#fff' }}>Tokenomics, also referred to less frequently as “token economics” is the application of economic theory to the tokenization of a blockchain-based micro-economy. This document (“Whitepaper”) is not endorsed by any government authority. It is only available on www.cryptodollar.uk and may not be redistributed, reproduced or passed on to any other person or published, in part or in whole, for any purpose, without the prior written consent of Platform AE Limited (The AE).</p>
                                <p className={styles.pmid_text} style={{ margin: '30px 0px', textAlign: 'justify', textTransform: 'initial', fontSize: '15px', color: '#fff' }}>This Whitepaper, or any part of it, must not be taken or transmitted to any country or territory where its distribution or dissemination is prohibited or restricted.</p>
                                <p className={styles.pmid_text} style={{ margin: '30px 0px', textAlign: 'justify', textTransform: 'initial', fontSize: '15px', color: '#fff' }}>Any natural persons or legal entities who come into possession of this Whitepaper must inform themselves about and observe any relevant legal or regulatory restrictions they may be subject to and seek all necessary professional advice. As a natural or legal person (“you” or “your”) accessing this Whitepaper, you agree to be bound by this requirement.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.product_container}>
                <div className={`${styles.product_item} ${styles.artificial_int_sec}`}>
                    <div className={styles.left_side} style={{ backgroundColor: 'rgb(59 59 59 / 95%)' }}>
                        <div className={styles.product_description}>
                            <div className={styles.contentContainer}>
                                {/* <p className={styles.section_title}>DEDICATED CUSTOMER SUPPORT</p> */}
                                <p className={styles.section_paragraph} style={{ fontSize: '18px', color: '#fff' }}>Artificial Intelligence & Blockchain will disrupt every industry in the coming years.</p>
                                <p className={styles.section_paragraph} style={{ marginTop: '20px', fontSize: '18px', color: '#fff' }}>Using AI and DApp technologies​, we’re making cab fares fair.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right_side} style={{ backgroundColor: '#f5f9fc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image className={styles.image_full} src={image5} alt='' style={{ width: '80%', height: '80%' }} />
                    </div>
                </div>
            </div>
            <div className={styles.product_container}>
                <div className={`${styles.product_item} ${styles.our_mission}`}>
                    <div className={styles.right_side} style={{ backgroundColor: '#f5f9fc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image className={styles.image_full} src={image6} alt='' style={{ width: '80%', height: '80%' }} />
                    </div>
                    <div className={styles.left_side} style={{ backgroundColor: 'rgb(122 122 122 / 85%)' }}>
                        <div className={styles.product_description}>
                            <div className={styles.contentContainer}>
                                <p className={styles.section_paragraph} style={{ color: '#fff' }}>Countless Uber customers are familiar with eye-watering surge prices in London and elsewhere. This practice isn’t going to stop any time soon – but NO SURGE and 50pTRIP will provide a way to bypass surge pricing systems, directly from your smartphone.</p>
                                <p className={styles.section_paragraph} style={{ marginTop: '20px', color: '#fff' }}>Every modern taxi and minicab operator needs an app and powerful cloud-based system to boost demand for their business and save them from being put out of business by dangerous new market entrants like UBER.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}