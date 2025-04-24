
'use client'

import styles from './web-app.module.css';
import Image from 'next/image';
import image2 from '../../assets/wpd1.webp';
import image3 from '../../assets/wpd2.webp';
import image4 from '../../assets/images/49.webp';
import image5 from '../../assets/images/50.webp';
import image6 from '../../assets/images/101.webp';

import { CiCloudOn } from "react-icons/ci";
import { MdOutlineWeb } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { CiMobile3 } from "react-icons/ci";
import { PiDeviceMobile } from "react-icons/pi"; import { RiLoopLeftFill } from "react-icons/ri";
import { PiWindowsLogoThin } from "react-icons/pi";
import { TfiApple } from "react-icons/tfi";
import { CiBookmarkCheck } from "react-icons/ci";
import { GiChaingun } from "react-icons/gi";
import { GoStack } from "react-icons/go";
import { AiOutlineShop } from "react-icons/ai";
import { GiAirplaneDeparture } from "react-icons/gi";
import { FaHospitalUser } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { IoSchoolOutline } from "react-icons/io5";
import { BsBank } from "react-icons/bs";
import { GiBank } from "react-icons/gi";
import Menu from '../Menu';
import { useRef } from 'react';
import useWindowSize from '@/app/home/product/useWindowSize';
import { isMobile } from 'react-device-detect';
import Footer from '@/app/home/footer';
export default function PortalDevelopment() {
    const prevCountRef = useRef(0);
    const containerRef = useRef(null);
    const size = useWindowSize();
    const slide_down_1 = () => {
        const new_top = prevCountRef.current + size.height;
        let elm = document.querySelector('#main_content_div');
        elm.scrollTo({ top: new_top, behavior: "smooth" });
        prevCountRef.current = new_top;
    }
    return (
        <div className={styles.landing} ref={containerRef} id="main_content_div">
            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.left_side}>
                        <div className={styles.leftInnerSection}>
                            <div className={styles.inner_section_title}>Take control of your web portal with customizable features tailored to your needs</div>
                            <div className={styles.inner_section_sub_title}>Tired of generic solutions that does not quite fit? Enhance customer interactions with a custom web portal solution perfectly tailored to your business needs. Effortlessly scale up, maintain with ease, and reduce long-term costs. We design scalable solutions that evolve seamlessly with your organization.</div>
                            <div className={styles.developButtonContainer} style={{ marginTop: '20px' }}>
                                <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right_side}>
                        <Image className={styles.image_item} src={image2} unoptimized priority alt=''></Image>
                    </div>
                </div>
            </div>
            <div className={styles.product_container}>
                <div className={styles.technology_stack_container}>
                    <div className={styles.inner_technology_stack_container}>
                        <div className={`${styles.technology_stack_content_section} ${styles.do_not_process}`}>
                            <div className={`${styles.technology_stack_title_section}`}>
                                <h2 className={styles.technology_stack_title}>Do not force your processes <br /> into predefined molds</h2>
                                <p className={styles.technology_stack_sub_title}>
                                    If your off-the-shelf software does not align with your business needs, our custom web portal development services provide the solution. We create software that molds to fit your requirements, rather than forcing you to conform to it.</p>
                            </div>
                            <div className={styles.stack_body}>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>
                                        Limited customisation ?
                                    </p>
                                    <p className={styles.innerBodySH}>Encountering obstacles in customization as your business processes become more intricate? You require customizable workflows, seamless data flows, and a client-centric interface – <strong>a solution as distinctive as your business.</strong></p>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>
                                        Concerned about vendor lock-in?
                                    </p>
                                    <p className={styles.innerBodySH}>
                                        An off-the-shelf solution may bind you to an uncertain future. What if the vendor goes out of business or your software becomes outdated? Your business could suffer. With custom solutions, <strong>we ensure this risk is eliminated.</strong></p>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>
                                        Facing scalability challenges?
                                    </p>
                                    <p className={styles.innerBodySH}>Is your business experiencing rapid growth, but your software is struggling to keep pace? A custom-built portal grows alongside your business,<strong>enabling you to effortlessly manage increased data, users, or transaction volumes.</strong> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.right_side}>
                        <Image className={styles.image_item} src={image3} unoptimized priority alt=''></Image>
                    </div>
                    <div className={styles.left_side}>
                        <div className={styles.leftInnerSection}>
                            <div className={styles.inner_section_title} >
                                Custom portal development can be challenging, Here is how we assist</div>
                            <div className={styles.inner_section_sub_title}>With a proven track record in web portal development, our company specializes in building highly functional portals. </div>
                            <div>
                                <ul className={styles.ulList}>
                                    <li>In-depth Consultation: We start by understanding your unique requirements and business objectives through thorough consultation.</li>
                                    <li>Tailored Solutions: We then design and develop custom portal solutions that precisely meet your needs, ensuring they align perfectly with your business processes.</li>
                                    <li>Seamless Integration: Our team ensures seamless integration of the custom portal with your existing systems and workflows, minimizing disruptions and maximizing efficiency.</li>
                                    <li>Scalability: We build scalable portal solutions that can grow with your business, accommodating future expansions and evolving requirements.</li>
                                    <li>User-Centric Design: Our focus is on creating user-friendly interfaces and intuitive navigation, ensuring an exceptional user experience for both internal and external users.</li>

                                </ul>
                            </div>
                            <div className={styles.developButtonContainer} style={{ marginTop: '20px' }}>
                                <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.product_container}>
                <div className={styles.technology_stack_container}>
                    <div className={styles.inner_technology_stack_container}>
                        <div className={`${styles.technology_stack_content_section}`}>
                            <div className={styles.technology_stack_title_section}>
                                <h2 className={styles.technology_stack_title}>Whether you are starting from scratch or <br /> transitioning from off-the-shelf solutions</h2>
                                <h4 className={styles.technology_stack_sub_title}>When it comes to web portal development, every project is unique. Whether you are starting from scratch or transitioning from an off-the-shelf solution, our services are tailored to meet diverse client needs.</h4>
                            </div>
                            <div className={styles.stack_body}>
                                <div className={styles.innerBody_stack} style={isMobile ? { width: '100%' } : { width: '50%' }}>
                                    <p className={styles.innerBodyH}>
                                        Craft a feature-rich and integrated custom web portal solution.
                                    </p>
                                    <p className={styles.innerBodySH}>
                                        Our custom portals offer intuitive user interfaces, robust functionality, and limitless scalability, all designed to enhance your customer experience and streamline your operational activities.</p>
                                </div>
                                <div className={styles.innerBody_stack} style={isMobile ? { width: '100%' } : { width: '50%' }}>
                                    <p className={styles.innerBodyH}>
                                        Migrate from an off-the-shelf solution to customized technology.
                                    </p>
                                    <p className={styles.innerBodySH}>
                                        We seamlessly transition your processes to bespoke technology, guiding you through the entire process to ensure your custom solution delivers superior business value compared to your previous solution.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.left_side}>
                        <div className={styles.leftInnerSection}>
                            <div className={styles.inner_section_title}>
                                Extensive experience crafting diverse custom web portals</div>
                            <div className={styles.inner_section_sub_title}>
                                Our custom web portal development company excels in crafting diverse solutions across industries like healthcare, education, and real estate, serving both B2B and B2C needs. Here are the types of portals we build:</div>
                            <div className={styles.stack_container}>
                                <div className={styles.stack_container_item}><GiChaingun style={{ fontSize: '26px' }} /><p>Supply chain management portals</p></div>
                                <div className={styles.stack_container_item}><GoStack style={{ fontSize: '26px' }} /><p>Procurement portals</p></div>
                                <div className={styles.stack_container_item}><AiOutlineShop style={{ fontSize: '26px' }} /><p>Vendor management portals</p></div>
                                <div className={styles.stack_container_item}><GiAirplaneDeparture style={{ fontSize: '26px' }} /><p>Travel and booking portals</p> </div>
                                <div className={styles.stack_container_item}><FaHospitalUser style={{ fontSize: '26px' }} /><p>Patient portals</p></div>
                                <div className={styles.stack_container_item}><BsBuildings style={{ fontSize: '26px' }} /><p>Real estate portals</p></div>
                                <div className={styles.stack_container_item}><IoSchoolOutline style={{ fontSize: '26px' }} /><p>Education portals</p></div>
                                <div className={styles.stack_container_item}><GiBank style={{ fontSize: '26px' }} /><p>Financial Service Portals</p></div>
                                <div className={styles.stack_container_item}><BsBank style={{ fontSize: '26px' }} /><p>Goverment service portals</p></div>
                                {/* <div className={styles.stack_container_item}><FaChartLine style={{ fontSize: '26px' }} /><p>Trade Show Apps</p></div> */}
                            </div>
                            <div className={styles.developButtonContainer} style={{ marginTop: '20px' }}>
                                <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.right_side}>
                        <Image className={styles.image_item} src={image6} unoptimized priority alt=''></Image>
                    </div>

                </div>
            </div>
            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.right_side}>
                        <Image className={styles.image_item} src={image4} unoptimized priority alt=''></Image>
                    </div>
                    <div className={styles.left_side}>
                        <div className={styles.leftInnerSection}>
                            <div className={styles.inner_section_title}>
                                Businesses looking for more solutions</div>
                            <div className={styles.inner_section_sub_title}>
                                Explore our comprehensive suite of additional services, offering solutions for every aspect of your business needs.</div>
                            <div className={styles.stack_container}>
                                <div className={styles.stack_container_item}><FaUsers style={{ fontSize: '26px' }} /><p>Custom B2B software</p></div>
                                <div className={styles.stack_container_item}><CiCloudOn style={{ fontSize: '26px' }} /><p>SaaS applications</p></div>
                                <div className={styles.stack_container_item}><MdOutlineWeb style={{ fontSize: '26px' }} /><p>Web portals</p></div>
                                <div className={styles.stack_container_item}><CiMobile3 style={{ fontSize: '26px' }} /><p>Native iOS Applications</p> </div>
                                <div className={styles.stack_container_item}><PiDeviceMobile style={{ fontSize: '26px' }} /><p>Native Android Applications</p></div>
                                <div className={styles.stack_container_item}><RiLoopLeftFill style={{ fontSize: '26px' }} /><p>Cross-platform mobile apps</p></div>
                                <div className={styles.stack_container_item}><PiWindowsLogoThin style={{ fontSize: '26px' }} /><p>Windows applications</p></div>
                                <div className={styles.stack_container_item}><TfiApple style={{ fontSize: '26px' }} /><p>MacOS applications</p></div>
                                <div className={styles.stack_container_item}><CiBookmarkCheck style={{ fontSize: '26px' }} /><p>White-label software</p></div>
                                {/* <div className={styles.stack_container_item}><FaChartLine style={{ fontSize: '26px' }} /><p>Trade Show Apps</p></div> */}
                            </div>
                            <div className={styles.developButtonContainer} style={{ marginTop: '20px' }}>
                                <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.left_side}>
                        <div className={styles.leftInnerSection}>
                            <div className={styles.inner_section_title}>We efficiently utilize agile methods to deliver rapid results</div>
                            <div className={styles.inner_section_sub_title}>We are acknowledged for providing top-tier business app development services globally. Here is why clients consistently choose to collaborate with our skilled app developers for their mobile strategy needs.</div>
                            <div>
                                <ul className={styles.ulList}>
                                    <li>On schedule and within budget: Our adaptable development approach ensures timely delivery of software projects according to predetermined deadlines and budget constraints.</li>
                                    <li>Innovative & Contemporary UI/UX: We leverage cutting-edge UI and UX design methodologies to help you aesthetically accomplish your business goals.</li>
                                    <li>Customized for Your Business: With comprehensive cross-industry expertise, our mobile app development firm is relied upon by startups, SMBs, and large enterprises alike.</li>
                                    <li>Skilled Mobile Developers: We meticulously select app developers through a rigorous recruitment process. Your apps will be crafted by our proficient in-house software engineers.</li>

                                </ul>
                            </div>
                            <div className={styles.developButtonContainer} style={{ marginTop: '20px' }}>
                                <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right_side}>
                        <Image className={styles.image_item} src={image5} unoptimized priority alt=''></Image>
                    </div>
                </div>
            </div>
            <div className={`${styles.product_container} ${styles.MegaMenu_container}`}>
                {<Menu />}
            </div>
            <Footer />
        </div >
    )
}
