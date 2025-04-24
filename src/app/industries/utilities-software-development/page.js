'use client'
import styles from '../../custom.global.module.css';
import Image from 'next/image';
import side_image1 from '../../assets/images/103.webp';
import side_image2 from '../../assets/images/104.webp';
import { useRef } from 'react';
import useWindowSize from '@/app/home/product/useWindowSize';
import IndustryMenu from '../IndustryMenu';
import Footer from '@/app/home/footer';

export default function Utilities() {

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
                            <div className={styles.technology_stack_title_section} style={{ height: 'auto' }}>
                                <div className={styles.technology_stack_title}>  Utilities Software Development Solutions </div>
                                {/* <div className={styles.sub_title}> Addressing the dynamic needs of the utility sector with tailored, scalable software applications.</div> */}
                            </div>

                            <div div className={styles.technology_stack_item_section}>
                                <p>Addressing the dynamic needs of the utility sector with tailored, scalable software applications.</p>
                                <p>The power, energy, and utilities sectors have advanced to a point where generic software solutions no longer meet their unique requirements.</p>
                                <p> Since our inception, {`we've`} been actively helping organizations in the utility sector achieve stability and navigate technological advancements smoothly. With newer technology, come newer concerns regarding: </p>
                                <ul className={styles.container_ul}>
                                    <li>Asset management and tracking</li>
                                    <li>Cybersecurity</li>
                                    <li>Health and safety</li>
                                    <li>Disaster management and control</li>
                                    <li>Regulatory compliance </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.left_side}>
                        <div className={styles.inner_section}>
                            <div className={styles.inner_section_title}>The utilities sector is expanding rapidly! </div>
                            <div className={styles.inner_section_sub_title}>Utility companies face numerous critical tasks to remain operational and profitable. In recent years, significant technological advancements have propelled progress in the industry. {`We've`} assisted our clients in staying aligned with these changes, fostering growth and prosperity.</div>
                            <div className={styles.inner_section_sub_title}> Considering the asset-intensive nature of the utilities industry, we recognize the challenges utility companies face in managing and tracking their assets. With the emergence of the Internet of Things (IoT), {`it's`} increasingly vital for organizations to closely monitor company assets and collect consistent data from them. </div>
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
                            {/* <div className={styles.inner_section_title}>The utilities sector is expanding rapidly! </div> */}
                            <div className={styles.inner_section_sub_title}>There is also a lot of talk about the effects that climate change has had on the planet, and the ones that are yet to come. As a result, power and energy companies have been eyeing a shift towards green energy, which requires major changes in resource management processes and other day-to-day operations.</div>
                            <div className={styles.inner_section_sub_title}>There are now talks of companies investing in Electric Vehicles (EVs), Smart City programs, distributed energy generation, blockchain technology, and much more! </div>
                            <div className={styles.inner_section_sub_title}>We are here to help utility companies achieve growth via investment in new business models, expanding their horizons and opening doors to new possibilities.</div>
                            <div className={styles.developButtonContainer} style={{ marginTop: '20px' }}>
                                <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className={styles.product_container}>
                <div className={styles.why_choose_us_container}>
                    <div className={styles.inner_technology_stack_container}>
                        <div className={styles.why_choose_us_content_section}>
                            <div className={styles.technology_stack_title_section} style={{ height: 'auto' }}>
                                <div className={styles.technology_stack_title}>   OUR SOLUTIONS </div>
                                {/* <div className={styles.sub_title}> We offer products with essential features required by companies in the utilities industry, along with any additional features demanded by our clients.</div> */}
                            </div>

                            <div div className={styles.technology_stack_item_section}>
                                <p>We offer products with essential features required by companies in the utilities industry, along with any additional features demanded by our clients. We have developed software applications for well-known corporations, including a nationwide electricity provider.</p>
                                <p> Here are some features that we have incorporated into our successfully launched software products for our clients: </p>
                                <ul className={styles.container_ul}>
                                    <li>Asset management and tracking across vast geographical areas</li>
                                    <li> Efficient digital data capture through smart metering solutions </li>
                                    <li> Data validation, consolidation, and standardization</li>
                                    <li> Secure cloud storage ensuring 24x7 data availability</li>
                                    <li> User-friendly platforms for prompt customer service and support</li>
                                    <li>Customer portals for easy energy consumption and billing tracking</li>
                                    <li>Dashboards for employee and client use with data visualization</li>
                                    <li>Dashboards for employee and client use with data visualization</li>
                                    <li>Platforms for complaint tracking and management</li>
                                    <li>Smart grid solutions integrating energy-efficient appliances.</li>
                                </ul>
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