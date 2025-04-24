'use client'
import styles from '../process.module.css';
import Image from 'next/image';
import side_image1 from '../../assets/images/our process1.webp';
import side_image2 from '../../assets/images/our process2.webp';
import side_image3 from '../../assets/images/our process3.webp';
import side_image4 from '../../assets/images/our process4.webp';
import side_image5 from '../../assets/images/our process5.webp';
import side_image6 from '../../assets/images/our process6.webp';
import side_image7 from '../../assets/images/our process7.webp';
import side_image8 from '../../assets/op1.webp';
import { useRef } from 'react';
import useWindowSize from '@/app/home/product/useWindowSize';
import CompanyMenu from '../CompanyMenu';
import Footer from '@/app/home/footer';
import { FaListCheck } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsBoundingBox } from "react-icons/bs"; import { GrDeliver } from "react-icons/gr";
import { FaRegHandshake } from "react-icons/fa";
import { TbDeviceDesktopCog } from "react-icons/tb";

export default function OurProcess() {


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
                    <div className={styles.right_side} >
                        <Image className={styles.image_full} src={side_image8} alt='' />
                    </div>
                    <div className={styles.left_side}>
                        <div className={styles.product_description}>
                            <div className={styles.contentContainer}>
                                <p className={styles.section_title}>Software Development Methodology</p>
                                <p className={styles.section_paragraph}>Our software development process comprises six stages, meticulously designed to assess your needs and fulfill your requirements. From initial discovery to final delivery, {`we've`} refined each step to ensure efficient and timely development of software solutions.</p>
                                <div className={styles.developButtonContainer} style={{ marginTop: '20px' }}>
                                    <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
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
                                <p className={styles.section_title}>Our Agile Philosophy</p>
                                <p className={styles.section_paragraph}>Bespoke software development demands a tailored approach for each system we create, with agility serving as the cornerstone of our development process.</p>
                                <p className={styles.section_paragraph}>Agility transcends mere practices or tools; it embodies a mindset that has revolutionized our approach to conventional software development. We prioritize customer satisfaction, streamlined communication, and unwavering commitment to technical and design excellence at every stage of software development. Embracing the agile philosophy empowers projects to evolve dynamically as we progress. This approach has significantly expedited our development process and enhanced our adaptability to evolving requirements.</p>
                                <div className={styles.developButtonContainer} style={{ marginTop: '20px' }}>
                                    <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right_side} >
                        <Image className={styles.image_full} src={side_image1} alt='' />
                    </div>
                </div>
            </div>

            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.wrap_container}>
                        <div className={styles.section_container}>
                            <p className={styles.section_title} style={{ textAlign: 'center' }}>Principles guiding our agile software <br /> development approach</p>
                            <div className={styles.box_container}>
                                <div className={styles.box_item}>
                                    <p className={styles.box_icon}><FaListCheck /></p>
                                    <p className={styles.box_title}>Fulfilling customer needs</p>
                                </div>
                                <div className={styles.box_item}>
                                    <p className={styles.box_icon}><CiDeliveryTruck /></p>
                                    <p className={styles.box_title}>Timely Deliveries</p>
                                </div>
                                <div className={styles.box_item}>
                                    <p className={styles.box_icon}><BsBoundingBox /></p>
                                    <p className={styles.box_title}>Adapting to Evolving Requirements</p>
                                </div>
                                <div className={styles.box_item}>
                                    <p className={styles.box_icon}><FaRegHandshake /></p>
                                    <p className={styles.box_title}>Client Collaboration</p>
                                </div>
                                <div className={styles.box_item}>
                                    <p className={styles.box_icon}><TbDeviceDesktopCog /></p>
                                    <p className={styles.box_title}>Consistent Development Pace</p>
                                </div>
                            </div>
                            <p className={styles.section_title} style={{ textAlign: 'center' }}>Our Development Process</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.left_side}>
                        <div className={styles.product_description}>
                            <div className={styles.contentContainer}>
                                <p className={styles.section_title}>Discovery Phase</p>
                                <p className={styles.section_paragraph}>When initiating the development of a bespoke software system, we begin with thorough planning and analysis. Collaborating closely with the client, we meticulously define and document the software {`system's`} requirements. This stage also includes the {`'discovery'`} phase, lasting three to six weeks, aimed at conceptualizing your idea and establishing a clearly defined scope of work. Learn more about software discovery.</p>
                                <div className={styles.developButtonContainer} style={{ marginTop: '20px' }}>
                                    <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right_side} style={{ backgroundColor: '#f5f9fc' }}>
                        <Image className={styles.image_full} src={side_image2} alt='' />
                    </div>
                </div>
            </div>

            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.right_side} style={{ backgroundColor: '#f5f9fc' }}>
                        <Image className={styles.image_full} src={side_image3} alt='' />
                    </div>
                    <div className={styles.left_side}>
                        <div className={styles.product_description}>
                            <div className={styles.contentContainer}>
                                <p className={styles.section_title}>UI/UX Design</p>
                                <p className={styles.section_paragraph}>Our team of UI/UX experts meticulously craft a tailored design blueprint for your software, ensuring {`it's`} not only visually appealing but also functional and user-friendly. We pay attention to every detail, from layout and navigation to buttons and other UI elements, with the aim of creating an impactful, intuitive, and easy-to-interact design that aligns with your requirements.</p>
                                <p className={styles.section_paragraph} style={{ marginTop: '20px' }}>During this phase of the software development process, we finalize both the internal and external design for the software. We present you with mockup screens, workflow structures, and high-fidelity wireframes, providing a preview of the finished software {`product's`} look and feel.</p>
                                <div className={styles.developButtonContainer} style={{ marginTop: '20px' }}>
                                    <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
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
                                <p className={styles.section_title}>Development </p>
                                <p className={styles.section_paragraph}>During this phase of the development process, your software concept is brought to life as our highly skilled team of developers begin writing code. They meticulously follow the requirements and specifications compiled during the discovery and requirements gathering stage to ensure your vision is accurately translated into a functioning piece of software.</p>
                                <p className={styles.section_paragraph} >The development and implementation stage constitutes a significant portion of the software development cycle and typically consumes the most time. The duration of this stage can vary depending on the development methodology employed. For instance, with agile methodology, development is broken down into smaller, iterative deliveries known as sprints. </p>
                                <div className={styles.developButtonContainer} style={{ marginTop: '20px' }}>
                                    <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right_side} style={{ backgroundColor: '#f5f9fc' }}>
                        <Image className={styles.image_full} src={side_image4} alt='' />
                    </div>
                </div>
            </div>

            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.right_side} style={{ backgroundColor: '#f5f9fc' }}>
                        <Image className={styles.image_full} src={side_image5} alt='' />
                    </div>
                    <div className={styles.left_side}>
                        <div className={styles.product_description}>
                            <div className={styles.contentContainer}>
                                <p className={styles.section_title}>Testing and Quality Assurance </p>
                                <p className={styles.section_paragraph}>During this stage of the development process, our team ensures that the software meets the highest quality standards and aligns with the {`customer's`} specific requirements. Our QA engineers conduct comprehensive testing throughout and after the development phase to ensure the software operates seamlessly and any development issues are addressed promptly.</p>
                                <p className={styles.section_paragraph} style={{ marginTop: '20px' }}>We employ a combination of manual and automated testing techniques to scrutinize every aspect of the software until it meets the original requirements. Only after the software has successfully passed all quality assurance checks do we proceed with its release to end-users. Learn more about our testing and quality assurance practices.</p>
                                <div className={styles.developButtonContainer} style={{ marginTop: '20px' }}>
                                    <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
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
                                <p className={styles.section_title}>Deployment  </p>
                                <p className={styles.section_paragraph}>Following successful testing and approval from the QA and testing team, the software is prepared for deployment. This marks the conclusion of the development phase and the commencement of the software handover process to you.</p>
                                <p className={styles.section_paragraph} style={{ marginTop: '20px' }}>In the case of mobile application development, we ensure that apps are effectively launched to the respective app store(s) and are made available to users. Additionally, our team possesses expertise in planning the rollout of complex software systems. We collaborate closely with you to ensure a swift and streamlined deployment process.</p>
                                <div className={styles.developButtonContainer} style={{ marginTop: '20px' }}>
                                    <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right_side} style={{ backgroundColor: '#f5f9fc' }}>
                        <Image className={styles.image_full} src={side_image6} alt='' />
                    </div>
                </div>
            </div>

            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.right_side} style={{ backgroundColor: '#f5f9fc' }}>
                        <Image className={styles.image_full} src={side_image7} alt='' />
                    </div>
                    <div className={styles.left_side}>
                        <div className={styles.product_description}>
                            <div className={styles.contentContainer}>
                                <p className={styles.section_title}>Maintenance and Support </p>
                                <p className={styles.section_paragraph}>Our commitment {`doesn't`} cease after the software release. We take responsibility for ensuring your software remains operational. To this end, we provide post-deployment technical support to maintain your software. Our team promptly addresses any issues you may encounter after deployment and resolves them efficiently.</p>
                                <p className={styles.section_paragraph} style={{ marginTop: '20px' }}>Moreover, we offer a range of support plans with varying levels of coverage. You can choose from these plans to access our comprehensive application maintenance services for an extended duration.</p>
                                <div className={styles.developButtonContainer} style={{ marginTop: '20px' }}>
                                    <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.product_container} ${styles.MegaMenu_container}`}>
                {<CompanyMenu />}
            </div>

            <Footer />
        </div>
    );
}