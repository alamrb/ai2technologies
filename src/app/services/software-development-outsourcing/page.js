'use client'

import styles from './web-app.module.css';
import Image from 'next/image';
import image2 from '../../assets/sdo1.webp';
import image3 from '../../assets/images/software_development47.webp';
import image4 from '../../assets/images/software_development45.webp';
import Link from 'next/link';
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
export default function SoftDevOutsourcing() {


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
                    <div className={styles.right_side}>
                        <Image className={styles.image_item} src={image2} unoptimized priority alt=''></Image>
                    </div>
                    <div className={styles.left_side}>
                        <div className={styles.leftInnerSection}>
                            <div className={styles.inner_section_title}>Exceptional talent and comprehensive delivery</div>
                            <div className={styles.inner_section_sub_title}>Sail smoothly through the intricate waters of software engineering with our assistance. As a trusted software development outsourcing company, we specialize in crafting exceptional custom products tailored to your unique needs. Our dedicated team is committed to not only delivering high-quality solutions but also alleviating you from the technical hassles that can bog down your business. With our expertise, you can confidently focus on your core objectives while we handle the intricacies of technology, ensuring seamless progress and success for your projects.</div>
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
                        <div className={`${styles.technology_stack_content_section} ${styles.the_experience}`}>
                            <div className={styles.technology_stack_title_section}>
                                <h2 className={styles.technology_stack_title}>Experience the advantages of outsourcing <br /> software development</h2>
                                <h4 className={styles.technology_stack_sub_title}>We offer a comprehensive solution for outsourced development, providing access to global tech talent, cost efficiency, and accelerated growth. Moreover, we adeptly navigate any potential challenges that may arise when partnering with software outsourcing companies.</h4>
                            </div>
                            <div className={styles.stack_body}>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>
                                        Tech talents with high skills
                                    </p>
                                    <p className={styles.innerBodySH}>Outsource software development to experts whose skills and experiences align perfectly with your project requirements.</p>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>
                                        Consistent and reliable delivery
                                    </p>
                                    <p className={styles.innerBodySH}>
                                        With efficient project management, you receive precisely what you have requested within the allocated time and budget.</p>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>
                                        Complete control over your project
                                    </p>
                                    <p className={styles.innerBodySH}>We seamlessly integrate into your workflow, functioning as your remote full-time employees.</p>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>
                                        Delivering top-notch solutions
                                    </p>
                                    <p className={styles.innerBodySH}>Our solutions are intuitive, secure, scalable, and fast, providing robust support for your business needs.</p>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>
                                        IP protection & confidentiality
                                    </p>
                                    <p className={styles.innerBodySH}>
                                        We have implemented protocols to ensure that your sensitive information remains confidential and secure.</p>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>
                                        Affordable collaboration solutions
                                    </p>
                                    <p className={styles.innerBodySH}>Our outsource software development company utilizes a hybrid onshore-offshore approach, granting access to top-tier expertise while remaining budget-friendly.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.product_container}>
                <div className={styles.technology_stack_container}>
                    <div className={styles.inner_technology_stack_container}>
                        <div className={styles.technology_stack_content_section}>
                            <div className={styles.technology_stack_title_section}>
                                <h2 className={styles.technology_stack_title}>Outsourced software development for forward-thinking businesses without internal technical resources</h2>
                                {/* <h4 className={styles.technology_stack_sub_title} style={{ textAlign: 'center' }}>Businesses looking for growth</h4> */}
                            </div>
                            <div className={styles.stack_body}>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>
                                        Develop bespoke business software
                                    </p>
                                    <p className={styles.innerBodySH}>
                                        From workflow automation to mobile apps, we provide customized solutions for businesses lacking technical resources, overseeing the entire product lifecycle.</p>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>
                                        Upgrade legacy systems for modern efficiency
                                    </p>
                                    <p className={styles.innerBodySH}>
                                        Are outdated solutions slowing down your progress? Let us revamp or replace them with modern technology</p>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>
                                        Revive your struggling project
                                    </p>
                                    <p className={styles.innerBodySH}>Struggling with a failing system? Our software development process identifies and resolves issues, either by fixing your current product or creating a new version.</p>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>
                                        Create a market-disrupting scalable product
                                    </p>
                                    <p className={styles.innerBodySH}>Bring your product ideas to fruition with us. We will translate your requirements into technical specifications and ensure timely, cost-effective delivery.</p>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>
                                        Shape your vision into an minimum vaiable product
                                    </p>
                                    <p className={styles.innerBodySH}>
                                        Confirm product-market fit with a low-risk MVP, allowing you to test your ideas viability in the market before full-scale development.</p>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>
                                        Generate recurring revenue with a SaaS app
                                    </p>
                                    <p className={styles.innerBodySH}>Trust our software outsourcing company to design and develop a standout SaaS product, fostering scalability and success for your business.</p>
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
                                Businesses looking for more solutions</div>
                            <div className={styles.inner_section_sub_title}>
                                Explore our comprehensive suite of additional services, offering solutions for every aspect of your business needs.</div>
                            <div className={styles.stack_container}>
                                <div className={styles.stack_container_item}><FaUsers style={{ fontSize: '34px' }} /><p>Custom B2B software</p></div>
                                <div className={styles.stack_container_item}><CiCloudOn style={{ fontSize: '34px' }} /><p>SaaS applications</p></div>
                                <div className={styles.stack_container_item}><MdOutlineWeb style={{ fontSize: '34px' }} /><p>Web portals</p></div>
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
                        <Image className={styles.image_item} src={image3} unoptimized priority alt=''></Image>
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
                            <div className={styles.inner_section_title}>We efficiently utilize agile methods <br /> to deliver rapid results</div>
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
