'use client'
import { useRef, useState } from 'react';
import styles from '../process.module.css';
import Image from 'next/image';
import side_image1 from '../../assets/images/pricing01.webp';
import side_image2 from '../../assets/images/pricing02.webp';
import side_image3 from '../../assets/images/pricing03.webp';
import side_image4 from '../../assets/images/pricing04.webp';
import side_image5 from '../../assets/images/pricing05.webp';
import side_image6 from '../../assets/pc1.webp';
import side_image7 from '../../assets/pc2.webp';
import useWindowSize from '@/app/home/product/useWindowSize';
import { isMobile } from 'react-device-detect';
import CompanyMenu from '../CompanyMenu';
import Footer from '@/app/home/footer';

export default function Pricing() {
    const [pricing_tab, setPricing_tab] = useState('small')
    const pricing = [
        {
            small: [
                {
                    title: 'Migration from Excel-Based to Web-Based System',
                    desc: 'Converting an Excel-based database into an online web application featuring robust search functionalities, intuitive workflow, and support for multiple user roles.',
                    time: '2-3 months',
                    team: '3-4 members'
                },
                {
                    title: 'Software for Delivery and Logistics',
                    desc: 'A tailored web-based portal and mobile application designed to oversee product deliveries, equipped with specialized features including search capabilities, real-time tracking, e-signature functionality, and push notifications.',
                    time: '3-4 months',
                    team: '3-4 members'
                },
                {
                    title: 'Mobile Application for Sales Agents',
                    desc: 'A mobile application paired with a web-based admin portal designed to empower sales agents in showcasing products to customers and monitoring sales activities. The app includes features for product presentations, as well as a comprehensive suite of reporting and analytics tools..',
                    time: '3-4 months',
                    team: '3-4 members'
                },
                {
                    title: 'Car Dealership Mobile Application',
                    desc: 'A mobile application tailored to streamline the rental process for car dealerships, featuring customized functionalities such as seamless search capabilities, integration of photos and navigation, push notifications, and robust reporting tools.',
                    time: '4-5 months',
                    team: '2-3 members'
                }
            ],
            medium: [
                {
                    title: 'B2B and B2C Marketplace Platform',
                    desc: 'An online cross-sector marketplace platform accessible via a web-based portal, offering comprehensive tools for vendors and customers. It includes secure payment channels, robust search functionalities, inventory management features, reputation management tools, and reporting/analytics dashboards.',
                    time: '4-5 months',
                    team: '4-5 member'
                },
                {
                    title: 'Enterprise Logistics Custom ERP Solution',
                    desc: 'A bespoke software system designed to streamline and oversee all facets of employees relocation process. It includes task management features, document management capabilities, intricate information workflows, and robust search functionalities.',
                    time: '5-6 months',
                    team: '4-5 member'
                },
                {
                    title: 'Engaging Corporate Training Software',
                    desc: ' Multilingual Digital Web Application for Corporate Training, fostering teamwork and collaboration among staff members, equipped with robust reporting tools.',
                    time: '4-5 months',
                    team: '4-5 member'
                },
                {
                    title: 'Online Loan Management System',
                    desc: 'A secure, tailor-made loan management system crafted to streamline the loan procurement and disbursement process. It includes dedicated functionalities for user registration, application submission, application review, and loan approval.',
                    time: '5-7 months',
                    team: '5-6 member'
                }
            ],
            large: [
                {
                    title: 'Sports Booking Application',
                    desc: 'A web-based system with a user-friendly interface to manage and streamline bookings and reservations, with features such as availability tracking, payments, complex workflows, price controls, multiple user roles, and reporting.',
                    time: '6-8 months',
                    team: '5-7 member'
                },
                {
                    title: ' iOS and Android Trade Show Application',
                    desc: 'An extensive mobile application catering to trade show participants, offering event planning and collaboration tools, in-app messaging, third-party integrations, interactive maps, beacon technology, guest speaker management, and meeting scheduling functionalities.',
                    time: '8-10 months',
                    team: '5-7 member'
                },
                {
                    title: 'Network Management Platform',
                    desc: 'A comprehensive web-based platform designed to automate the domain name registration process, featuring robust tools including domain name management, billing, registration, dispute resolution, and more.',
                    time: '7-8 months',
                    team: '5-7 member'
                },
                {
                    title: 'Software as a Service (SaaS) Platform',
                    desc: 'A multi-tenant software platform equipped with robust tools tailored for customers, administrators, and platform owners. It enables flexible subscription management, sophisticated workflows, powerful analytics, and prioritizes security, scalability, and performance considerations.',
                    time: '8-12 months',
                    team: '5-8 member'
                }
            ]
        }
    ]

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
            <div className={styles.product_container} >
                <div className={styles.product_item}>
                    <div className={styles.right_side} >
                        <Image className={styles.image_full} src={side_image6} alt='' />
                    </div>
                    <div className={styles.left_side}>
                        <div className={styles.product_description}>
                            <div className={styles.contentContainer}>
                                <p className={styles.section_title}>Expenses related to custom <br /> software development</p>
                                <p className={styles.section_paragraph}>Finances matter! Invest wisely! We specialize in crafting customized software solutions within budget and schedule, ensuring cost-effectiveness throughout the process.</p>
                                <div className={styles.developButtonContainer} style={{ marginTop: '20px' }}>
                                    <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.product_container} >
                <div className={styles.product_item}>
                    <div className={styles.left_side}>
                        <div className={styles.product_description}>
                            <div className={styles.contentContainer}>
                                <p className={styles.section_title}>Not all software projects are created equal</p>
                                <div className={styles.platform_sub_title} >Variables Affecting Custom Software Development Expenses</div>
                                <p className={styles.section_paragraph}>Similar to other aspects of life, each custom software project possesses its own unique characteristics. These distinctions arise not only from variances among individual software development companies but also from the following overarching factors:</p>
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
                    <div className={styles.right_side} style={{ backgroundColor: '#f5f9fc' }}>
                        <Image className={styles.image_full} src={side_image2} alt='' />
                    </div>
                    <div className={styles.left_side}>
                        <div className={styles.product_description}>
                            <div className={styles.contentContainer}>
                                <p className={styles.section_title}>Degree of Technical Complexity</p>
                                <p className={styles.section_paragraph}>Scientifically complex software projects typically incur higher costs. Complexity may stem from features such as real-time collaboration among app users, seamless video functionality, intricate process flows with numerous dependencies, and similar factors.</p>
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
                                <p className={styles.section_title}>Bespoke Design</p>
                                <p className={styles.section_paragraph}>Creating custom user interfaces can be challenging for the development team, thus the cost of a custom interface is typically higher compared to using standard components or foregoing design altogether.</p>
                                <div className={styles.developButtonContainer} style={{ marginTop: '20px' }}>
                                    <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right_side} style={{ backgroundColor: '#f5f9fc' }}>
                        <Image className={styles.image_full} src={side_image3} alt='' />
                    </div>
                </div>
            </div>

            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.right_side} style={{ backgroundColor: '#f5f9fc' }}>
                        <Image className={styles.image_full} src={side_image4} alt='' />
                    </div>
                    <div className={styles.left_side}>
                        <div className={styles.product_description}>
                            <div className={styles.contentContainer}>
                                <p className={styles.section_title}>Integration of Third-Party Solutions</p>
                                <p className={styles.section_paragraph}> Incorporating third-party software systems, such as payment gateways, mapping services, ERPs, or CRMs, can impact software development costs. While some integrations may be straightforward, others can present complexity and require significant time and effort from the software developer.</p>
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
                                <p className={styles.section_title}>Inclusion of Features and Functionalities</p>
                                <p className={styles.section_paragraph}>The number of desired features is the primary cost driver. Factors such as the number of screens, buttons, fields, and the complexity of logic involved can significantly impact the cost of custom software.</p>
                                <div className={styles.developButtonContainer} style={{ marginTop: '20px' }}>
                                    <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right_side} style={{ backgroundColor: '#f5f9fc' }}>
                        <Image className={styles.image_full} src={side_image5} alt='' />
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
                                <p className={styles.section_title}>ESTIMATED COST RANGES FOR VARIOUS <br />  SOFTWARE SYSTEMS</p>
                                <p className={styles.section_paragraph}>The actual cost of custom software is contingent on numerous factors and can only be accurately determined following a thorough discovery process with you. {`Here's`} an overview of indicative pricing for different types of software systems, considering factors such as scope, complexity, team size, and duration. On average, the cost of custom software, based on these considerations, could fall within the following three ranges:</p>
                                <div className={styles.developButtonContainer} style={{ marginTop: '20px' }}>
                                    <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.product_container} >
                <div className={styles.product_item}>
                    <div className={styles.wrap_container} style={{ flexDirection: 'column' }}>
                        <div className={styles.section_top} style={{ height: 'calc(100% - 468px)' }}>
                            <p className={styles.section_title}>Pricing Table</p>
                        </div>
                        <div className={styles.section_container} style={{ padding: '0px 0px' }}>
                            <div className={styles.pricing_tab_head}>
                                {isMobile ? '' :
                                    <div className={styles.pricing_tab_item}>
                                        <div style={{ visibility: 'hidden' }} className={styles.tab_border}>
                                            <p style={{ visibility: 'hidden' }} className={styles.pricing_title}>Small Project</p>
                                            <p style={{ visibility: 'hidden' }} className={styles.pricing_bar}></p>
                                            <p style={{ visibility: 'hidden' }} className={styles.pricing_price}>£25,000 - £50,000</p>
                                            <p style={{ visibility: 'hidden' }} className={styles.triangle}></p>
                                        </div>
                                    </div>}
                                {/* <div className={styles.pricing_tab_item}>
                                    <div style={{ visibility: 'hidden' }} className={styles.tab_border}>
                                        <p style={{ visibility: 'hidden' }} className={styles.pricing_title}>Small Project</p>
                                        <p style={{ visibility: 'hidden' }} className={styles.pricing_bar}></p>
                                        <p style={{ visibility: 'hidden' }} className={styles.pricing_price}>£25,000 - £50,000</p>
                                        <p style={{ visibility: 'hidden' }} className={styles.triangle}></p>
                                    </div>
                                </div> */}
                                <div className={`${styles.pricing_tab_item} ${pricing_tab === 'small' && styles.active}`} onClick={() => setPricing_tab('small')}>
                                    <div className={styles.tab_border}>
                                        <p className={styles.pricing_title}>Small Project</p>
                                        <p className={styles.pricing_bar}></p>
                                        <p className={styles.pricing_price}>£25,000 - £50,000</p>
                                        <p className={styles.triangle}></p>
                                    </div>
                                </div>
                                <div className={`${styles.pricing_tab_item} ${pricing_tab === 'medium' && styles.active}`} onClick={() => setPricing_tab('medium')}>
                                    <div className={styles.tab_border}>
                                        <p className={styles.pricing_title}>Medium-Sized Project</p>
                                        <p className={styles.pricing_bar}></p>
                                        <p className={styles.pricing_price}>£50,000 - £1,00,000</p>
                                        <p className={styles.triangle}></p>
                                    </div>
                                </div>
                                <div className={`${styles.pricing_tab_item} ${pricing_tab === 'large' && styles.active}`} onClick={() => setPricing_tab('large')}>
                                    <div className={styles.tab_border}>
                                        <p className={styles.pricing_title}>Large Project</p>
                                        <p className={styles.pricing_bar}></p>
                                        <p className={styles.pricing_price}>£100000+</p>
                                        <p className={styles.triangle}></p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.pricing_tab_body}>
                                {pricing[0][pricing_tab].map((v, i) =>

                                    <div className={styles.pricing_tab_body_item} key={i}>
                                        <div>
                                            <h3 className={styles.pricing_body_title}>{v.title}</h3>
                                            <p className={styles.pricing_body_para}>{v.desc}</p>
                                        </div>

                                        <div className={styles.pricing_body_detail}>
                                            <div className={styles.detail_title}>Time duration:</div>
                                            <div className={styles.detail_value}> {v.time}</div>
                                        </div>
                                        <div className={styles.pricing_body_detail}>
                                            <div className={styles.detail_title}>Team:</div>
                                            <div className={styles.detail_value} style={{ marginBottom: 0 }}>{v.team}</div>
                                        </div>
                                    </div>
                                )}

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