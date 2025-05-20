'use client'
import styles from './web-app.module.css';
import Image from 'next/image';
import image2 from '../../assets/fs1.webp';
import image3 from '../../assets/images/startup_51.webp';
import image5 from '../../assets/images/59.webp';
import image6 from '../../assets/images/102.webp';
import { CiCloudOn } from "react-icons/ci";
import { MdOutlineWeb } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { CiMobile3 } from "react-icons/ci";
import { PiDeviceMobile } from "react-icons/pi";
import { RiLoopLeftFill } from "react-icons/ri";
import { PiWindowsLogoThin } from "react-icons/pi";
import { TfiApple } from "react-icons/tfi";
import { CiBookmarkCheck } from "react-icons/ci";
import image7 from '../../assets/fs2.webp'
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
                            <div className={styles.inner_section_title}> Software development tailored for startups bespoke features for your needs</div>
                            <div className={styles.inner_section_sub_title}>We specialize in software development specifically tailored for startups. Our team understands the unique challenges and requirements of startup ventures, and we are dedicated to crafting innovative solutions that help startups succeed in their respective industries. Whether you need to build a minimum viable product (MVP) to validate your idea or develop a scalable platform to support rapid growth, we have the expertise and experience to bring your vision to life.</div>
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
                        <Image className={styles.image_item} src={image7} unoptimized priority alt=''></Image>
                    </div>
                    <div className={styles.left_side}>
                        <div className={styles.leftInnerSection}>
                            <div className={styles.inner_section_title}>
                                Start to launch, we support startups at every stage</div>
                            <div className={styles.inner_section_sub_title}>As former startup ourselves, we intimately understand the journey of launching and growing a new business. We have faced the same initial challenges, needs, and requirements, and we are here to help drive your startup forward.</div>
                            <div className={styles.inner_section_sub_title}>Our premium software development services for startups encompass mentoring and supporting emerging businesses in making informed decisions.</div>
                            <div className={styles.inner_section_sub_title}>Count on us as your software development partner, providing flexible engagement models, agile development services, and reliable support and maintenance options. Let us turn your ideas into successful products.</div>
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
                        <div className={`${styles.technology_stack_content_section} ${styles.our_trailed}`}>
                            <div className={styles.technology_stack_title_section}>
                                <h2 className={styles.technology_stack_title}>Our tailored software & product development <br /> services for startups</h2>
                                <h4 className={styles.technology_stack_sub_title}>
                                    Mere ideas are insufficient. Opt for custom software development for startups tailored to your business needs and budget. Choose us for outsourced software development for startups and access the following services.</h4>
                            </div>
                            <div className={styles.stack_body}>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>
                                        Minimum Viable Product (MVP) Development
                                    </p>
                                    <p className={styles.innerBodySH}>Accelerate market testing with our MVP development services. We assist in building an MVP with essential features cost-effectively. Your MVP will assess market potential, gauge interest, and enable adjustments and refinements in future development phases.</p>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>
                                        Mobile Application Development
                                    </p>
                                    <p className={styles.innerBodySH}>
                                        Our experts transform your ideas into mobile apps for both iOS and Android platforms, leveraging state-of-the-art tools and technologies. Our intuitive UI/UX design and high-quality apps will distinguish you in the highly competitive digital landscape.</p>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>
                                        Web Application Development
                                    </p>
                                    <p className={styles.innerBodySH}>We develop high-performing web apps tailored to your requirements and budget. Leveraging the latest tools and technologies, we create web apps that boast remarkable functionality and user engagement. </p>
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
                                TECHNOLOGIES WE WORK WITH</div>
                            {/* <div className={styles.devStack}>
                                <div className={styles.inner_section_sub_title}>For Web App Development</div>
                                <table className={styles.devStackTable}>
                                    <thead>
                                        <tr>
                                            <th className={styles.devStackTitle}>Front-end</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className={styles.dev_stack_container}>
                                                <div className={styles.tech_stack}>React</div>
                                                <div className={styles.tech_stack}>Angular</div>
                                                <div className={styles.tech_stack}>Vue.js</div>
                                                <div className={styles.tech_stack}>JavaScript</div>
                                                <div className={styles.tech_stack}>Sass</div>
                                                <div className={styles.tech_stack}>HTML5</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className={styles.devStackTable}>
                                    <thead>
                                        <tr>
                                            <th className={styles.devStackTitle}>Back-end</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className={styles.dev_stack_container}>
                                                <div className={styles.tech_stack}>Node.js</div>
                                                <div className={styles.tech_stack}>Ruby</div>
                                                <div className={styles.tech_stack}>Python</div>
                                                <div className={styles.tech_stack}>Java</div>
                                                <div className={styles.tech_stack}>.NET</div>
                                                <div className={styles.tech_stack}>PHP</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> */}

                            <div className={styles.devStack}>
                                <div className={styles.inner_section_sub_title}>For Web App Development</div>
                                <div className={styles.devStackTitle}>Front-end</div>
                                <div className={styles.dev_stack_container}>
                                    <div className={styles.tech_stack}>React</div>
                                    <div className={styles.tech_stack}>Angular</div>
                                    <div className={styles.tech_stack}>Vue.js</div>
                                    <div className={styles.tech_stack}>JavaScript</div>
                                    <div className={styles.tech_stack}>Sass</div>
                                    <div className={styles.tech_stack}>HTML5</div>

                                </div>
                                <div className={styles.devStackTitle}>back-end</div>
                                <div className={styles.dev_stack_container}>
                                    <div className={styles.tech_stack}>Node.js</div>
                                    <div className={styles.tech_stack}>Ruby</div>
                                    <div className={styles.tech_stack}>Python</div>
                                    <div className={styles.tech_stack}>Java</div>
                                    <div className={styles.tech_stack}>.NET</div>
                                    <div className={styles.tech_stack}>PHP</div>

                                </div>
                            </div>
                            <div className={styles.horizontalDivider}></div>
                            <div className={styles.devStack}>
                                <div className={styles.inner_section_sub_title}>For Mobile App Development</div>
                                <div className={styles.devStackTitle}>Native</div>
                                <div className={styles.dev_stack_container}>
                                    <div className={styles.tech_stack}>Objective-C</div>
                                    <div className={styles.tech_stack}>Swift</div>
                                    <div className={styles.tech_stack}>Java</div>
                                    {/* <div className={styles.tech_stack}></div>
                                    <div className={styles.tech_stack}></div>
                                    <div className={styles.tech_stack}></div> */}

                                </div>
                                <div className={styles.devStackTitle}>Cross-Platform</div>
                                <div className={styles.dev_stack_container}>
                                    <div className={styles.tech_stack}>React Native</div>
                                    <div className={styles.tech_stack}>Xamarin</div>
                                    <div className={styles.tech_stack}>PhoneGap</div>
                                    <div className={styles.tech_stack}>Unity</div>
                                    <div className={styles.tech_stack}>Sencha Touch</div>
                                    {/* <div className={styles.tech_stack}></div> */}

                                </div>
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
                <div className={styles.technology_stack_container}>
                    <div className={styles.inner_technology_stack_container}>
                        <div className={`${styles.technology_stack_content_section}`}>
                            <div className={styles.technology_stack_title_section}>
                                <h2 className={styles.technology_stack_title}>Software Development Process For Startups</h2>
                                <h4 className={styles.technology_stack_sub_title}>We specialize in guiding startups from various industries in translating their concepts into market-ready software solutions, leveraging innovative technologies and tailored strategies to drive success in {`today's `}competitive market landscape.</h4>
                            </div>
                            <div className={styles.stack_body}>
                                <div className={styles.innerBody_stack} style={isMobile ? { width: '100%' } : { width: '49%' }}>
                                    <p className={styles.innerBodyH}>
                                        Clear Requirements
                                    </p>
                                    <p className={styles.innerBodySH}>
                                        We commence by deeply comprehending and documenting the requirements of your startup. Clear and succinct requirements lay the groundwork for efficient software development.</p>
                                </div>
                                <div className={styles.innerBody_stack} style={isMobile ? { width: '100%' } : { width: '49%' }}>
                                    <p className={styles.innerBodyH}>
                                        MVP Approach
                                    </p>
                                    <p className={styles.innerBodySH}>
                                        We prioritize the development of a Minimum Viable Product (MVP) to quickly validate your startup idea in the market. Focus on delivering core functionalities that solve a specific problem for your target audience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.right_side}>
                        <Image className={styles.image_item} src={image5} unoptimized priority alt=''></Image>
                    </div>
                    <div className={styles.left_side}>
                        <div className={styles.leftInnerSection}>
                            <div className={styles.inner_section_title}>
                                Businesses looking for more solutions ?</div>
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
                                </ul>
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
            <div className={`${styles.product_container} ${styles.MegaMenu_container}`}>
                {<Menu />}
            </div>
            <Footer />
        </div >
    )
}
