
'use client'
import styles from '../../custom.global.module.css';
import Image from 'next/image';
import { useRef } from 'react';
import useWindowSize from '../../home/product/useWindowSize';
import image1 from '../../assets/images/35.webp';
import image2 from '../../assets/fe1.webp';
import image3 from '../../assets/fe2.webp';
import TechnologyMenu from '../TechnologyMenu';
import Footer from '@/app/home/footer';

export default function Frontend_Development() {
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
                                <div className={styles.technology_stack_title}>Front-End Development Solutions</div>
                                <div className={styles.technology_stack_sub_title}> Hire top-notch front-end developers through us to craft sleek and sophisticated web applications, ensuring a superior experience for end-users. </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.left_side}>
                        <div className={styles.inner_section}>
                            <div className={styles.inner_section_title}> Exceptional UI Design. Compelling User Experience. Flawless Functionality </div>
                            <div className={styles.inner_section_sub_title}>Backed by a strong team of highly skilled website design and development engineers, we have a noteworthy track record of delivering applications that leave users fully satisfied. As a seasoned front-end development company, we have enabled a number of businesses in various industries to impress their userbases with high-quality front-end design for their web apps. We focus on building user interfaces that cater to our client’s exact needs and provide a smooth experience.</div>
                            <div className={styles.developButtonContainer} style={{ marginTop: '20px' }}>
                                <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right_side}>
                        <Image className={styles.image_item} src={image2} unoptimized priority alt='' />
                    </div>
                </div>
            </div>
            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.right_side}>
                        <Image className={styles.image_item} src={image3} unoptimized priority alt='' />
                    </div>
                    <div className={styles.left_side}>
                        <div className={styles.inner_section}>
                            <div className={styles.inner_section_title}> Front-End Development Solutions </div>
                            <div className={styles.inner_section_sub_title}>With years of experience in delivering top-quality applications, our front-end development expertise spans across various technology stacks. Our agile development process allows us to cater to all clients, each presenting uniquely challenging project requirements.</div>
                            <div className={styles.inner_section_sub_title}>Our expert developers adeptly work with popular frameworks, libraries, and cutting-edge front-end technologies to produce fully customized solutions. We have solidified our position as a top front-end development company by creating modern, user-friendly, engaging, and reliable interfaces for various web applications.</div>
                            <div className={styles.inner_section_sub_title}>Here are some of the popular front-end software development technologies we work with, favored by our clients.</div>
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
                        <div className={`${styles.technology_stack_content_section} ${styles.frontend_solution}`}>
                            <div className={styles.stack_body}>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>React Development</p>
                                    <p className={styles.innerBodySH}>Our front-end web development services prioritize user-centric design, utilizing tech stacks that often integrate React with appropriate back-end technologies and databases. This approach enables us to craft easy-to-use web applications that are compatible with multiple web browsers and devices.</p>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>Vue.js Development </p>
                                    <p className={styles.innerBodySH}> Following UI/UX best practices, our Vue.js developers and engineers specialize in building dynamic web-based applications tailored to diverse audiences, ranging from startups and small businesses to large-scale corporate clients.</p>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>Angular Development</p>
                                    <p className={styles.innerBodySH}>Our versatile and comprehensive front-end development services cater to a wide array of industries, spanning from fintech to hospitality. Opting for Angular empowers you to launch expansive projects, varying from single-page apps (SPAs) to cloud-based systems.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.product_container} ${styles.MegaMenu_container}`}>
                {<TechnologyMenu />}
            </div>
            <Footer />
        </div>
    )
}