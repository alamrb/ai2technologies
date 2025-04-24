'use client'

import styles from '../../custom.global.module.css';
import Image from 'next/image';
import side_image1 from '../../assets/images/105.webp';
import side_image2 from '../../assets/images/105.webp';
import { useRef } from 'react';
import useWindowSize from '@/app/home/product/useWindowSize';
import IndustryMenu from '../IndustryMenu';
import Footer from '@/app/home/footer';


export default function EducationSoftware() {
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
                <div className={styles.why_choose_us_container}>
                    <div className={styles.inner_technology_stack_container}>
                        <div className={styles.why_choose_us_content_section}>
                            <div className={styles.technology_stack_title_section} style={{height: 'auto'}}>
                                <div className={styles.technology_stack_title}>   Educational Software Development Services </div>
                                {/* <div className={styles.sub_title}>  Exceptional software solutions tailored for sports businesses, clubs, teams, athletes, and fans. </div> */}
                            </div>

                            <div div className={styles.technology_stack_item_section}>
                                <p>User-friendly EdTech software development for web and mobile, facilitating e-learning adoption among students and trainees.</p>
                                <p>Digital learning has become increasingly prevalent in {`today's`} era of technological progress, and our organization has been actively contributing to this evolution.</p>
                                <p>We have extensive experience in developing mobile apps suitable for toddlers, as well as creating efficient Learning Management System (LMS) software. Our educational software development services cater to students worldwide, regardless of age, ensuring widespread benefits. Additionally, we have collaborated with various businesses to develop tailored corporate training software solutions, enhancing their {`workforce's`} skills and performance.</p>
                                <div className={styles.portal_container}>
                                    <div className={styles.portal_item}>Learning Management Systems</div>
                                    <div className={styles.portal_item}>Online Assessment Software</div>
                                    <div className={styles.portal_item}> Corporate Training Platforms</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.left_side}>
                        <div className={styles.inner_section}>
                            <div className={styles.inner_section_title}> Our Solutions </div>
                            <div className={styles.inner_section_sub_title}>To aid educators in transitioning from traditional learning methods to technologically advanced ones, we rely on our top talents in the field. </div>
                            <div className={styles.inner_section_sub_title}>Our organization, an educational software development entity, possesses a profound understanding of the requirements of teachers, trainers, and learners alike. We craft applications designed to benefit all stakeholders within the education sector.</div>
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
                        <div className={styles.inner_section}>
                            <div className={styles.inner_section_title}> Our Solutions </div>
                            <div className={styles.inner_section_sub_title}> A significant aspect of our service portfolio encompasses educational software development tailored for schools and colleges. Collaborating not only with educators and academic institutions but also with educational software enterprises and startups, we strive to drive genuine transformation within the academic domain through innovative technologies and services. </div>
                            <div className={styles.inner_section_sub_title}> Moreover, we extend our services to businesses seeking bespoke corporate training and development software solutions. </div>
                            <div className={styles.developButtonContainer} style={{ marginTop: '20px' }}>
                                <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.product_container} ${styles.MegaMenu_container}`}>
                {<IndustryMenu />}
            </div>
            <Footer />
        </div>
    )
}
