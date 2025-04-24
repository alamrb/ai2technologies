
'use client'
import Image from 'next/image';
import { useRef } from 'react';
import image3 from '../assets/images/21.webp';
import image1 from '../assets/images/35.webp';
import image4 from '../assets/images/40.webp';
import image6 from '../assets/images/45.webp';
import image5 from '../assets/images/47.webp';
import image2 from '../assets/images/54.webp';
import styles from '../custom.global.module.css';
import Footer from '../home/footer';
import useWindowSize from '../home/product/useWindowSize';
import TechnologyMenu from './TechnologyMenu';

export default function Technologies() {
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
                        <div className={`${styles.why_choose_us_content_section} ${styles.technologies_home}`}>
                            <div className={styles.technology_stack_title_section}>
                                <div className={styles.technology_stack_title}> Technology stack </div>
                            </div>

                            <div div className={styles.technology_stack_item_section}>
                                <p>Utilize cutting-edge development technologies to future-proof your software development project.</p>
                                <p>ai2 technologies recognizes that there {`isn't`} a one-size-fits-all technology stack for every software project. With our extensive expertise in a diverse range of cutting-edge development tools, we guide clients in selecting the most suitable technology for their projects. This ensures the creation of secure, scalable, and flexible software applications that are easy to support and upgrade in the long run.</p>
                                <p>Furthermore, we prioritize accessibility and inclusivity in our technology selections. We ensure that our solutions are compliant with industry standards and regulations such as WCAG (Web Content Accessibility Guidelines) to guarantee that all users, regardless of abilities, can interact with our applications seamlessly. Additionally, we integrate localization and internationalization features to make our software accessible to users from different regions and cultures. This commitment to inclusivity not only expands the reach of our {`clients'`} products but also fosters a positive user experience for all.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.left_side}>
                        <div className={styles.inner_section}>
                            <div className={styles.inner_section_title}> Front-end </div>
                            <div className={styles.inner_section_sub_title}>We specialize in crafting responsive and dynamic user interfaces for web applications, ensuring a seamless and engaging user experience. Our front-end development process starts with a thorough analysis of user needs and preferences, allowing us to design interfaces that are not only visually appealing but also intuitive and easy to navigate.</div>
                            <div className={styles.inner_section_sub_title}> From wireframing to prototyping, we prioritize user feedback and iterative design to create interfaces that resonate with your target audience and enhance overall usability.</div>
                            <div className={styles.developButtonContainer} style={{ marginTop: '20px' }}>
                                <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right_side}>
                        <Image className={styles.image_item} src={image1} unoptimized priority alt=''></Image>
                    </div>
                </div>
            </div>

            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.right_side}>
                        <Image className={styles.image_item} src={image2} unoptimized priority alt=''></Image>
                    </div>
                    <div className={styles.left_side}>
                        <div className={styles.inner_section}>
                            <div className={styles.inner_section_title}> Back-end </div>
                            <div className={styles.inner_section_sub_title}>A robust backend is essential for the proper functioning of any software application, and our {`team's`} expertise with cutting-edge technologies ensures its reliability and efficiency. Our back-end development services encompass everything from database design and implementation to server-side logic and API integration.</div>
                            <div className={styles.inner_section_sub_title}> We employ industry best practices and adhere to strict coding standards to build scalable and maintainable backend systems that can handle large volumes of data and traffic with ease.</div>
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
                        <div className={styles.inner_section}>
                            <div className={styles.inner_section_title}> Content Management Systems (CMS) </div>
                            <div className={styles.inner_section_sub_title}> We provide seamless integration of Content Management Systems (CMS) for efficient website content management across various platforms. Our CMS solutions are tailored to meet your specific requirements, whether you need a simple blogging platform or a comprehensive content management system for an enterprise-level website.</div>
                            <div className={styles.inner_section_sub_title}> We offer customization options, plugin development, and ongoing support to ensure that your CMS meets your evolving needs and remains a valuable asset for your business.</div>
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
                        <div className={styles.inner_section}>
                            <div className={styles.inner_section_title}> Native </div>
                            <div className={styles.inner_section_sub_title}> For native mobile app development, we leverage platform-specific technologies to create intuitive and user-friendly mobile applications. Our native app development process begins with a deep understanding of your target audience and business objectives, allowing us to design and develop applications that deliver value and drive engagement. </div>
                            <div className={styles.inner_section_sub_title}> Whether you need an iOS app for the Apple App Store or an Android app for Google Play, our experienced developers ensure that your native mobile app stands out in the crowded app marketplace.</div>
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
                        <div className={styles.inner_section}>
                            <div className={styles.inner_section_title}> Cross-Platform </div>
                            <div className={styles.inner_section_sub_title}> We utilize tools and technologies that enable efficient performance of cross-platform applications across multiple mobile platforms. Our cross-platform development approach allows us to build applications that can run seamlessly on iOS, Android, and other mobile platforms using a single codebase. </div>
                            <div className={styles.inner_section_sub_title}> By leveraging frameworks such as React Native and Xamarin, we ensure consistency in design and functionality while reducing development time and cost. With our cross-platform development services, you can reach a wider audience and maximize the return on your investment.</div>
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

            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.right_side}>
                        <Image className={styles.image_item} src={image6} unoptimized priority alt=''></Image>
                    </div>
                    <div className={styles.left_side}>
                        <div className={styles.inner_section}>
                            <div className={styles.inner_section_title}> Cloud Platforms </div>
                            <div className={styles.inner_section_sub_title}> With specialized skills, our team develops cloud-native applications for the three most popular cloud computing platforms. This ensures scalability well beyond the original version of your application. Leveraging the power of Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP), we design and deploy cloud-native architectures that can adapt to changing business needs and user demands. </div>
                            <div className={styles.inner_section_sub_title}> From infrastructure as code to serverless computing, we optimize your cloud environment for performance, reliability, and cost-effectiveness, ensuring that your application remains competitive in {`today's`} dynamic digital landscape.</div>
                            <div className={styles.developButtonContainer} style={{ marginTop: '20px' }}>
                                <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
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
