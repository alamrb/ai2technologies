'use client'

import styles from './web-app.module.css'
import { useRef } from 'react';
import useWindowSize from '@/app/home/product/useWindowSize';
import Footer from '@/app/home/footer';
import Menu from '../Menu';

export default function DesktopAppDevelopment() {
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
                            <div className={`${styles.technology_stack_title_section}  ${styles.center_popup}`} style={{ height: 'auto'}}>
                                <div className={styles.technology_stack_title}>Desktop applications engineered for exceptional performance & user-friendly experiences</div>
                                <div className={styles.technology_stack_sub_title}>
                                    Elevate beyond the constraints of web apps with our customized desktop software solutions. We craft secure, high-performance desktop applications tailored to fulfill your intricate operational needs and surpass user expectations. </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.product_container}>
                <div className={styles.technology_stack_container}>
                    <div className={styles.inner_technology_stack_container}>
                        <div className={`${styles.technology_stack_content_section} ${styles.empowering_solution}`}>
                            <div className={styles.technology_stack_title_section}>
                                <h2 className={styles.technology_stack_title}>Empowering solutions tailored to meet <br /> your unique business requirements</h2>
                                <h4 className={styles.technology_stack_sub_title}>We leverage the distinct advantages of desktop applications, including superior performance, security, and user experience, to translate them into tangible benefits for your business.</h4>
                            </div>
                            <div className={styles.stack_body}>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>Unwavering performance</p>
                                    <p className={styles.innerBodySH}>Our applications leverage multi-threading and advanced technologies to maximize hardware performance, guaranteeing expedited processing and a dependable environment for your intricate operations.</p>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>Immersive user experience</p>
                                    <p className={styles.innerBodySH}> The desktop applications we construct feature seamless OS integration, delivering a customizable, multi-window experience. This deep integration ensures an app that is not only functional but also user-centric and intuitive.</p>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>Top-tier data security</p>
                                    <p className={styles.innerBodySH}>We implement advanced encryption, data obfuscation, and controlled access methodologies to substantially mitigate data vulnerabilities and protect your {`organization's`} sensitive information.</p>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>Continuous operations</p>
                                    <p className={styles.innerBodySH}>While providing robust offline functionality, your desktop application seamlessly synchronizes with cloud-based services for data backup and recovery. We guarantee the safety, currency, and accessibility of your data from anywhere.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.product_container}>
                <div className={styles.technology_stack_container}>
                    <div className={styles.inner_technology_stack_container}>
                        <div className={`${styles.technology_stack_content_section} ${styles.utilize_capabilities}`}>
                            <div className={styles.technology_stack_title_section}>
                                <h2 className={styles.technology_stack_title}>Utilize our multi-platform capabilities <br /> to build your desktop application</h2>
                                <h4 className={styles.technology_stack_sub_title}>Whether you seek custom desktop application development to tackle specific operational challenges or to enhance an existing desktop app for better performance, our priority is crafting applications that precisely meet your needs. We align with your operations, ensuring a seamless user experience.</h4>
                            </div>
                            <div className={styles.stack_body}>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>Development of applications for the Windows platform</p>
                                    <p className={styles.innerBodySH}>Development of applications for the Windows platform : We excel in native Windows technologies like .NET, C#, WinForms, WPF, and UWP, using {`Microsoft's`} Visual Studio to create high-performance Windows applications with rich user experiences.</p>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>Development of applications specifically for the macOS platform</p>
                                    <p className={styles.innerBodySH}>Our desktop app developers harness macOS-specific technologies like Swift, Objective-C, Cocoa Touch, and {`Apple's`} Xcode IDE to craft applications that are powerful, resource-efficient, and user-friendly.</p>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>Modernizing desktop applications</p>
                                    <p className={styles.innerBodySH}>Our approach entails analyzing your legacy system, followed by upgrading to modernize its UI/UX, updating its tech stack, and streamlining data migration. This results in an efficient and user-centric application.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.product_container}>
                <div className={styles.technology_stack_container}>
                    <div className={styles.inner_technology_stack_container}>
                        <div className={`${styles.technology_stack_content_section} ${styles.crafted_streamlined}`}>
                            <div className={styles.technology_stack_title_section}>
                                <h2 className={styles.technology_stack_title}>Crafted for streamlined usability <br /> and unparalleled performance</h2>
                            </div>
                            <div className={styles.stack_body}>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>Seamless installation process for enhanced user experience</p>
                                    <p className={styles.innerBodySH}>We guarantee a user-friendly installation process with simple steps and default settings, accommodating users of all levels for a seamless software setup.</p>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>Streamlined workflow design</p>
                                    <p className={styles.innerBodySH}>Our desktop applications replicate natural user processes, providing intuitive workflows that minimize learning time and maximize productivity.</p>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>Seamless functionality across all devices</p>
                                    <p className={styles.innerBodySH}>Our responsive applications adapt seamlessly to various devices, whether {`it's`} a high-resolution monitor or a compact laptop screen, providing optimal usability and visual clarity in any setting.</p>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>Performance optimized for real-world usage</p>
                                    <p className={styles.innerBodySH}>We optimize the desktop software for a variety of hardware and network environments, ensuring robust performance and a seamless user experience.</p>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>Tailored to your specific requirements</p>
                                    <p className={styles.innerBodySH}>Our modular architecture enables highly customizable applications, providing the flexibility to tailor features to your specific business needs and users.</p>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>Seamless application update process</p>
                                    <p className={styles.innerBodySH}>We integrate built-in updater modules like Windows Update and Sparkle, enabling automatic checks and downloads of updates without user intervention.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.product_container}>
                <div className={styles.technology_stack_container}>
                    <div className={styles.inner_technology_stack_container}>
                        <div className={`${styles.technology_stack_content_section} ${styles.varieties_applications}`}>
                            <div className={styles.technology_stack_title_section}>
                                <h2 className={styles.technology_stack_title}>Varieties of desktop applications we develop.</h2>
                            </div>
                            <div className={styles.stack_body}>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>Corporate software solutions</p>
                                    <ul className={styles.innerBodySH}>
                                        <li> Financial management applications </li>
                                        <li> CRM (Customer Relationship Management) solutions </li>
                                        <li> Integrated Business Management Systems </li>
                                        <li> Investment and Portfolio Management Solutions </li>
                                        <li> Billing and Invoicing Applications </li>
                                    </ul>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>Human Resources Management Systems</p>
                                    <ul className={styles.innerBodySH}>
                                        <li> Recruitment and Applicant Tracking Systems </li>
                                        <li> Payroll Management Systems </li>
                                        <li> Performance Management Solutions </li>
                                        <li> Employee Engagement Platforms </li>
                                        <li> Time Tracking and Attendance Solutions </li>
                                    </ul>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>Supply Chain Management Solutions</p>
                                    <ul className={styles.innerBodySH}>
                                        <li> Inventory Management Solutions </li>
                                        <li> Procurement Management Solutions </li>
                                        <li> Warehouse Management Solutions </li>
                                        <li> Transportation Management Solutions </li>
                                        <li> Demand Planning and Forecasting Solutions </li>
                                    </ul>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>Educational Technology Solutions</p>
                                    <ul className={styles.innerBodySH}>
                                        <li> Learning Management Platforms </li>
                                        <li> Interactive Educational Tools and Games </li>
                                        <li> Student Information Management Systems </li>
                                        <li> Electronic Library and Research Platforms </li>
                                        <li> Remote Learning Platforms </li>
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
    );
}
