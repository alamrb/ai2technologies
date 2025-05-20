'use client'
import styles from './web-app.module.css';
import Image from 'next/image';
import image5 from '../../assets/images/47.webp';
import Menu from '../Menu';
import { useRef } from 'react';
import useWindowSize from '@/app/home/product/useWindowSize';
import Footer from '@/app/home/footer';
import WebPricing from '../../pricing/web-development/page'



export default function WebDev() {
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
                <div className={styles.technology_stack_container}>
                    <div className={styles.main_section}>
                        <div className={styles.mainContentBody}>
                            <div className={styles.mainContent}>
                                <div className={styles.mainHead}>
                                    <p className={styles.technology_stack_title} style={{ textAlign: 'left', width: '100%' }}> Create an intuitive and high-performing web application</p>
                                </div>
                                <p className={styles.technology_stack_sub_title} style={{ marginBottom: '0px', width: '100%' }}>Craft a robust web app that prioritizes speed, security, and scalability to meet your business needs. Rely on our expertise for consistent outcomes and smooth development process. </p>
                                <p className={styles.bodyContentP} style={{ marginBottom: '0px' }}></p>
                                <div className={styles.developButtonContainer}>
                                    <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                                </div>
                            </div>
                            <div className={styles.mainImages}>
                                <div className={styles.imageSideM}>
                                    <Image className={styles.main_img} src={image5} unoptimized priority alt=''></Image>
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
                            <div className={`${styles.technology_stack_title_section}`}>
                                <h2 className={styles.technology_stack_title}>Tailored web development for all business needs</h2>
                                <h4 className={styles.technology_stack_sub_title}> Your trusted partner for custom web application development services in London and across the UK, serving startups and established businesses across diverse industries.</h4>
                            </div>
                            <div className={`${styles.stack_body} ${styles.tailored_web}`}>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>For New Business</p>
                                    <ul className={styles.ulList}>
                                        <li>
                                            Develop a Minimum Viable Product (MVP) of your application and verify its product-market fit.
                                        </li>
                                        <li>
                                            Introduce a Software as a Service (SaaS) platform to bolster your innovative product concept.
                                        </li>
                                        <li>Enhance your current web application to surpass technical constraints.</li>
                                        <li>Incorporate third-party APIs and services.</li>
                                        <li>Provide ongoing support and maintenance for your product throughout its lifecycle.</li>
                                    </ul>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>
                                        For Established Business
                                    </p>
                                    <ul className={styles.ulList}>
                                        <li>
                                            Optimize your workflows using an intuitive web platform.
                                        </li>
                                        <li>
                                            Introduce a Software as a Service (SaaS) platform to bolster your innovative product concept.
                                        </li>
                                        <li>Transform your services into a product by delivering your expertise through a Software as a Service (SaaS) solution.</li>
                                        <li>Integrate all your business systems to ensure smooth and efficient data flow.</li>
                                        <li>Connect all your business systems for seamless and efficient data flow.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <WebPricing className={styles.product_container} />
            <div className={styles.product_container}>
                <div className={styles.technology_stack_container}>
                    <div className={styles.inner_technology_stack_container}>
                        <div className={styles.technology_stack_content_section}>
                            <div className={styles.technology_stack_title_section}>
                                <h2 className={styles.technology_stack_title}>Extensive practical experience in crafting diverse custom web applications</h2>
                                <h4 className={styles.technology_stack_sub_title}> Whether your goals involve creating a SaaS platform, optimizing operations, or digitizing your business, we have the solution for you. {`GoodCore's`} expertise provides a range of customized web applications tailored to your specific business requirements.</h4>
                            </div>
                            <div className={`${styles.stack_body} ${styles.extensive_practical}`}>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>
                                        SaaS applications
                                    </p>
                                    <ul className={styles.ulList}>
                                        <li>
                                            Cloud-native app design
                                        </li>
                                        <li>
                                            Scalable multi-tenant architecture design.
                                        </li>
                                        <li>Adaptable to diverse user requirements.</li>
                                        <li>Versatile subscription-based pricing models.</li>
                                        <li>Integration with third-party APIs</li>
                                    </ul>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>
                                        Bespoke ERP software
                                    </p>
                                    <ul className={styles.ulList}>
                                        <li>
                                            Tools for financial management.
                                        </li>
                                        <li>
                                            Automated generation of reports.
                                        </li>
                                        <li>Adaptable analytics dashboards.</li>
                                        <li>Incorporation of multiple data sources.</li>
                                        <li>
                                            Business intelligence solutions.</li>
                                    </ul>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>Software for automating workflows</p>
                                    <ul className={styles.ulList}>
                                        <li>Role-specific access control.</li>
                                        <li>Intelligent workflow design and task automation.</li>
                                        <li>Management of documents.</li>
                                        <li>Sophisticated reporting functionalities.</li>
                                        <li>Integration with third-party applications.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.product_container}>
                <div className={styles.technology_stack_container}>
                    <div className={styles.inner_technology_stack_container}>
                        <div className={`${styles.technology_stack_content_section} ${styles.our_technology}`}>
                            <div className={styles.technology_stack_title_section}>
                                <h2 className={styles.technology_stack_title}>Our technology stack for web development</h2>
                                <h4 className={styles.technology_stack_sub_title}>  Our team is adept at crafting resilient and high-performing web solutions that cater to your specific needs. With our expertise, you can trust that your project will be in capable hands, delivering results that exceed expectations.</h4>
                            </div>
                            <div className={`${styles.stack_body}`}>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>Front-end</p>
                                    <p className={styles.innerBodySH}>
                                        {`We're`} capable of delivering everything from interactive single-page applications and robust enterprise solutions to quick, lightweight platforms, ensuring seamless, high-performance, and future-proof digital experiences.
                                    </p>
                                    <ul className={styles.ulList}>
                                        <li>React</li>
                                        <li>Angular</li>
                                        <li>Vue.js</li>
                                    </ul>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>Back-end</p>
                                    <p className={styles.innerBodySH}>
                                        Our back-end tech stack fuels growth with unmatched performance and adaptability, from enterprise applications to agile microservices, driving your business forward.
                                    </p>
                                    <ul className={styles.ulList}>
                                        <li>Node.js</li>
                                        <li>.NET</li>
                                        <li>Laravel/PHP</li>
                                        <li>Java</li>
                                    </ul>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>Cloud</p>
                                    <p className={styles.innerBodySH}>
                                        From interactive single-page applications to robust enterprise solutions and lightweight platforms, we ensure seamless, high-performance, and future-proof digital experiences.
                                    </p>
                                    <ul className={styles.ulList}>
                                        <li>Microsoft Azure</li>
                                        <li>Google Cloud</li>
                                        <li>Amazon Web Services</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.product_container} ${styles.MegaMenu_container}`}>
                {<Menu />}
            </div>
            <Footer />
        </div>
    )
}
