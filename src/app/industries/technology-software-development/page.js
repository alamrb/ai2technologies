'use client'
import Footer from '@/app/home/footer';
import useWindowSize from '@/app/home/product/useWindowSize';
import Image from 'next/image';
import { useRef } from 'react';
import image3 from '../../assets/images/16.webp';
import image1 from '../../assets/images/18.webp';
import image4 from '../../assets/images/20.webp';
import image2 from '../../assets/images/26.webp';
import styles from '../../custom.global.module.css';
import IndustryMenu from '../IndustryMenu';


export default function TechnologySoftwareDevelopment() {
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
                                <div className={styles.technology_stack_title}> Software development in the realm of technology </div>
                            </div>

                            <div div className={styles.technology_stack_item_section}>
                                <p>Empowering stakeholders in the technology industry with state-of-the-art, next-generation software solutions.</p>
                                <p> Addressing challenges for organizations in the technology industry through our tailor-made software solutions epitomizes our innovation-centric approach.</p>
                                <p>{`We've`} formed partnerships with startups, SMEs, established businesses, and large enterprises worldwide, empowering them to navigate the evolving technology landscape and deliver intelligent solutions that align with customer demands.</p>
                                <p>Whether {`you're`} aiming to launch a new software product in the technology sector or seeking to address a specific technological challenge, our custom software expertise can ensure your success.</p>
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
                                {/* <div className={styles.technology_stack_title}> Software development in the realm of technology </div> */}
                                {/* <div className={styles.sub_title}>Your search & digital marketing experts</div> */}
                            </div>

                            <div div className={styles.technology_stack_item_section}>
                                <p>Our team of experienced developers, engineers, and designers specialize in crafting bespoke software solutions tailored to your unique needs and requirements. We pride ourselves on staying at the forefront of technological advancements, utilizing the latest tools and methodologies to deliver cutting-edge solutions that drive innovation and propel your business forward.</p>
                                <p>From conceptualization to deployment and beyond, we work closely with our clients every step of the way, ensuring that our solutions not only meet but exceed their expectations. By harnessing the power of agile development methodologies and iterative processes, we can rapidly prototype and iterate on solutions, allowing for quick adaptation to changing market dynamics and customer needs.</p>
                                <p>{`We've`} effectively designed, developed, and implemented the following systems for numerous tech organizations:</p>
                                <ul className={styles.container_ul}>
                                    <li>Data centre management tools</li>
                                    <li>Network discovery and provisioning tools</li>
                                    <li>Domain name management tools based on Extensive Provisioning Protocol (EPP)</li>
                                </ul>
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
                                <div className={styles.technology_stack_title}> Why Choose Us </div>
                                {/* <div className={styles.sub_title}>Your search & digital marketing experts</div> */}
                            </div>

                            <div div className={styles.technology_stack_item_section}>
                                <p>With years of expertise in technology software development and a proven track record of collaboration with top global technology firms, we stand as your innovation partner. We specialize in crafting custom software tech solutions boasting unparalleled functionality in data management, interconnectivity, scalability, and security.</p>
                                <p>{`We're`} dedicated to providing forward-thinking and innovative tech software solutions to our clients. By merging cutting-edge technologies, user-centric design thinking, and our agile framework of technology software development, we bring next-gen solutions to life.</p>
                                <p>Our agile framework of technology software development ensures that we adapt to the ever-evolving landscape of technology seamlessly. From ideation to deployment and beyond, we prioritize collaboration and flexibility to ensure that your vision is brought to life efficiently and effectively.</p>
                                <p>Partner with us, and together, {`we'll`} navigate the complexities of the digital age, unlocking new opportunities and driving growth for your business. Experience the difference of working with a true innovation partner dedicated to your success.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.left_side}>
                        <div className={styles.inner_section}>
                            <div className={styles.inner_section_title}> UX/UI Design</div>
                            <div className={styles.inner_section_sub_title}>We create user-friendly software solutions to ensure a seamless experience. Our design process involves careful storyboarding and use case development, rigorously tested before implementation. </div>
                            <div className={styles.inner_section_sub_title}>In addition to meticulous storyboarding and use case development, our UX/UI design process prioritizes understanding user needs and behaviors through comprehensive research methods such as user interviews, surveys, and analytics data analysis. This enables us to create intuitive interfaces that resonate with our users and enhance their overall experience. </div>
                            <div className={styles.inner_section_sub_title}>Our design philosophy revolves around simplicity, clarity, and consistency. We strive to create interfaces that are easy to navigate, visually appealing, and functional across different devices and platforms.</div>
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
                            <div className={styles.inner_section_title}> On Time & And Budget</div>
                            <div className={styles.inner_section_sub_title}>We use an agile process for software development, ensuring fast and efficient delivery. We adjust our schedules to match yours, guaranteeing timely completion within budget </div>
                            <div className={styles.inner_section_sub_title}> Using an agile process for software development allows us to deliver results swiftly and efficiently. Our methodology prioritizes adaptability and collaboration, ensuring that we can adjust our schedules to align with yours. This flexibility enables us to meet deadlines while staying within budgetary constraints. With our commitment to timely completion and cost-effectiveness, you can trust us to deliver high-quality software solutions that meet your needs. </div>
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
                            <div className={styles.inner_section_title}>  Multi-Device Support</div>
                            <div className={styles.inner_section_sub_title}> Our software supports multiple devices and offers easy control. {`it's`} designed to work seamlessly on various devices, ensuring accessibility, reliability, and security. We focus on meeting your needs and providing top performance for users. </div>
                            <div className={styles.inner_section_sub_title}> In addition to seamless compatibility across multiple devices, our software boasts a user-friendly interface that simplifies control and navigation. Whether {`you're`} accessing it from a desktop computer, laptop, tablet, or smartphone, our intuitive design ensures a consistent and enjoyable user experience across all platforms.  </div>
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
                            <div className={styles.inner_section_title}> Scalable Architecture</div>
                            <div className={styles.inner_section_sub_title}> Our tailored tech solutions are user-friendly and robust, capable of serving a large user base. We design them to be agile and scalable, accommodating growth and any changes in your requirements.  </div>
                            <div className={styles.inner_section_sub_title}> Our scalable architecture also emphasizes modularity, enabling easy integration of third-party services or future expansions. This modular design promotes agility, allowing for rapid iteration and deployment of updates or enhancements without disrupting the overall system functionality.  </div>
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