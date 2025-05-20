'use client'

import styles from './web-app.module.css';
import Image from 'next/image';
import side_image1 from '../../assets/bs1.webp';
import side_image2 from '../../assets/images/100.webp';
import { CiCloudOn } from "react-icons/ci";
import { MdOutlineWeb } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { CiMobile3 } from "react-icons/ci";
import { PiDeviceMobile } from "react-icons/pi"; import { RiLoopLeftFill } from "react-icons/ri";
import { PiWindowsLogoThin } from "react-icons/pi";
import { TfiApple } from "react-icons/tfi";
import { CiBookmarkCheck } from "react-icons/ci";
import Menu from '../Menu';
import { useRef } from 'react';
import useWindowSize from '@/app/home/product/useWindowSize';
import Footer from '@/app/home/footer';
import CyberPricing from '../../pricing/cyber-security/page'
export default function BespokeApp() {

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
                <div className={`${styles.technology_stack_container} ${styles.technology_stack_container_bg}`}>
                    <div className={styles.inner_technology_stack_container}>
                        <div className={styles.technology_stack_content_section}>
                            <div className={`${styles.technology_stack_title_section}  ${styles.center_popup}`}>
                                <div className={styles.technology_stack_title}>Software tailored to your needs <br /> Delivered as you envision</div>
                                <div className={styles.technology_stack_sub_title}>
                                    Customized software solutions designed for efficiency, growth, and seamless customer experiences – from inception to continuous support. Our cohesive team and streamlined processes ensure success every step of the way.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.product_container}>
                <div className={styles.technology_stack_container}>
                    <div className={styles.inner_technology_stack_container}>
                        <div className={`${styles.technology_stack_content_section} ${styles.we_solve}`}>
                            <div className={styles.technology_stack_title_section}>
                                <h2 className={styles.technology_stack_title}>We solve your business challenges</h2>
                                <h4 className={styles.technology_stack_sub_title}>Our dedicated team of bespoke software developers works closely with you to co-create tailored solutions for addressing a wide array of business challenges. Through collaborative efforts and innovative approaches, we strive to deliver software that not only meets your specific needs but also helps overcome obstacles effectively.</h4>
                            </div>
                            <div className={styles.stack_body}>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>
                                        Digitization of your operations
                                    </p>
                                    <p className={styles.innerBodySH}>Relieve your business of burdens with our tailored business solutions: automate routine tasks, reduce labor costs, and eradicate human errors.</p>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>
                                        Expand your business
                                    </p>
                                    <p className={styles.innerBodySH}>
                                        Extend your reach and serve a broader clientele by productizing your services or embracing a technology-driven business model.</p>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>
                                        Modernization of your app.
                                    </p>
                                    <p className={styles.innerBodySH}>Upgrade your legacy systems through code refactoring, complete application reengineering, re-architecture, and cloud migration.                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CyberPricing />
            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.left_side}>
                        <div className={styles.leftInnerSection}>
                            <div className={styles.inner_section_title}>
                                We develop various types of applications</div>
                            <div className={styles.inner_section_sub_title}>Have a bespoke software solution in mind to transform your business? We have got the expertise to bring your vision to life..</div>
                            <div className={styles.stack_container}>
                                <div className={styles.stack_container_item}>
                                    <CiCloudOn style={{ fontSize: '34px' }} />
                                    <p>SaaS applications</p>
                                </div>
                                <div className={styles.stack_container_item}>
                                    <MdOutlineWeb style={{ fontSize: '34px' }} /><p>Web portals</p></div>
                                <div className={styles.stack_container_item}><FaUsers style={{ fontSize: '34px' }} /><p>Custom B2B software</p></div>
                                <div className={styles.stack_container_item}><CiMobile3 style={{ fontSize: '34px' }} /><p>Native iOS Applications</p> </div>
                                <div className={styles.stack_container_item}><PiDeviceMobile style={{ fontSize: '34px' }} /><p>Native Android Applications</p></div>
                                <div className={styles.stack_container_item}><RiLoopLeftFill style={{ fontSize: '34px' }} /><p>Cross-platform mobile apps</p></div>
                                <div className={styles.stack_container_item}><PiWindowsLogoThin style={{ fontSize: '34px' }} /><p>Windows applications</p></div>
                                <div className={styles.stack_container_item}><TfiApple style={{ fontSize: '34px' }} /><p>MacOS applications</p></div>
                                <div className={styles.stack_container_item}><CiBookmarkCheck style={{ fontSize: '34px' }} /><p>White-label software</p></div>
                                {/* <div className={styles.stack_container_item}><FaChartLine style={{ fontSize: '34px' }} /><p>Trade Show Apps</p></div> */}
                            </div>
                            <div className={styles.developButtonContainer} style={{ marginTop: '20px' }}>
                                <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.right_side}>
                        <Image className={styles.image_item} src={side_image1} unoptimized priority alt=''></Image>
                    </div>

                </div>
            </div>
            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.right_side}>
                        <Image className={styles.image_item} src={side_image2} unoptimized priority alt=''></Image>
                    </div>
                    <div className={styles.left_side}>
                        <div className={styles.leftInnerSection}>
                            <div className={styles.inner_section_title}>We efficiently utilize agile methods to deliver rapid results</div>
                            <div className={styles.inner_section_sub_title}>We are acknowledged for providing top-tier business app development services globally. Here is why clients consistently choose to collaborate with our skilled app developers for their mobile strategy needs.</div>
                            <div>
                                <ul className={styles.ulList}>
                                    <li>On schedule and within budget: Our adaptable development approach ensures timely delivery of software projects according to predetermined deadlines and budget constraints.</li>
                                    <li>Innovative & Contemporary UI/UX: We leverage cutting-edge UI and UX design methodologies to help you aesthetically accomplish your business goals.</li>
                                    <li>Customized for Your Business: With comprehensive cross-industry expertise, our mobile app development firm is relied upon by startups, SMBs, and large enterprises alike.</li>
                                </ul>
                            </div>
                            <div className={styles.developButtonContainer} style={{ marginTop: '20px' }}>
                                <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                            </div>
                        </div>
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
