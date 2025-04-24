'use client'
import styles from './web-app.module.css';
import Image from 'next/image';
import side_image from '../../assets/md1.webp';
import side_image2 from '../../assets/md3.webp';
import { TbSocial } from "react-icons/tb";
import { FaBusinessTime } from "react-icons/fa";
import { FcSurvey } from "react-icons/fc";
import { SiYoutubegaming } from "react-icons/si";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { MdDirectionsBike } from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";
import Menu from '../Menu';
import { useRef } from 'react';
import useWindowSize from '@/app/home/product/useWindowSize';
import Footer from '@/app/home/footer';
export default function MobileDev() {

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
                                <div className={styles.technology_stack_title}>Bespoke mobile app development services</div>
                                <div className={styles.technology_stack_sub_title}>
                                    Create advanced, user-centric mobile applications addressing intricate business challenges swiftly and effectively. Recruit adept app developers proficient in Android, iOS, and cross-platform app development. </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.left_side}>
                        <div className={styles.leftInnerSection}>
                            <div className={styles.inner_section_title}>Our expertise in mobile app development encompasses</div>
                            <div className={styles.inner_section_sub_title}>No project is too big or too small for us, whether {`it's`} a bespoke enterprise solution or a consumer-facing application. With a successful track record across various industries, ranging from finance to healthcare, we specialize in delivering fully customized mobile app development services.</div>
                            <div className={styles.stack_container}>
                                <div className={styles.stack_container_item}><FcSurvey style={{ fontSize: '34px' }} /><p>Survey Apps</p></div>
                                <div className={styles.stack_container_item}><TbSocial style={{ fontSize: '34px' }} /><p>Social Apps</p></div>
                                <div className={styles.stack_container_item}><FaBusinessTime style={{ fontSize: '34px' }} /><p>Business Apps</p></div>
                                <div className={styles.stack_container_item}><SiYoutubegaming style={{ fontSize: '34px' }} /><p>Gaming Apps</p> </div>
                                <div className={styles.stack_container_item}><MdOutlineRealEstateAgent style={{ fontSize: '34px' }} /><p>Real Estate Apps</p></div>
                                <div className={styles.stack_container_item}><IoSchoolOutline style={{ fontSize: '34px' }} /><p>Educational Apps</p></div>
                                <div className={styles.stack_container_item}><MdOutlineHealthAndSafety style={{ fontSize: '34px' }} /><p>Health Apps</p></div>
                                <div className={styles.stack_container_item}><MdDirectionsBike style={{ fontSize: '34px' }} /><p>Ride-Hailing Apps</p></div>
                                {/* <div className={styles.stack_container_item}><ImNewspaper style={{ fontSize: '34px' }} /><p>News Apps</p></div> */}
                                <div className={styles.stack_container_item}><FaChartLine style={{ fontSize: '34px' }} /><p>Trade Show Apps</p></div>
                            </div>
                            <div className={styles.developButtonContainer} style={{ marginTop: '20px' }}>
                                <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.right_side}>
                        <Image className={styles.image_item} src={side_image} unoptimized priority alt=''></Image>
                    </div>

                </div>
            </div>
            <div className={styles.product_container}>
                <div className={styles.technology_stack_container}>
                    <div className={styles.inner_technology_stack_container}>
                        <div className={`${styles.technology_stack_content_section} ${styles.customized_cross}`}>
                            <div className={styles.technology_stack_title_section}>
                                <h2 className={styles.technology_stack_title}>Customized cross-platform applications.</h2>
                                <h4 className={styles.technology_stack_sub_title}> We have a strong history of delivering exceptional projects for mobile app development in both the UK and worldwide. You can hire our app developers for not only native iOS or Android apps but also cross-platform mobile solutions.</h4>
                            </div>
                            <div className={styles.stack_body}>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>
                                        IOP App Development
                                    </p>
                                    <p className={styles.innerBodySH}>We specialize in developing iOS apps tailored to the needs of end-users and aligned with your business requirements. Utilizing cutting-edge tools and technologies, we craft feature-rich, user-friendly mobile applications.</p>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>
                                        Android App Development
                                    </p>
                                    <p className={styles.innerBodySH}>Our proficient mobile app developers are dedicated to creating impactful Android applications for smartphones and tablets. We transform your ideas into customized Android apps that resonate with your end-users, delivering an enjoyable user experience.</p>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>
                                        Cross-Platform Development
                                    </p>
                                    <p className={styles.innerBodySH}>Expand your user base with a hybrid, platform-independent mobile app that seamlessly operates on both Android and iOS devices. Engage app developers to construct sturdy applications offering an unparalleled user experience.</p>
                                </div>
                            </div>
                        </div>
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
                            <div className={styles.inner_section_title}> Utilizing Agile methodology, ensuring rapid and efficient outcomes</div>
                            <div className={styles.inner_section_sub_title}>With extensive experience under our belt, we are recognized for delivering top-tier mobile app development services globally. {`Here's`} why clients consistently choose to partner with our skilled app developers for their mobile strategy needs.</div>
                            <div >
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
            <div className={styles.product_container}>
                {<Menu />}
            </div>
            <Footer />
        </div >
    )
}
