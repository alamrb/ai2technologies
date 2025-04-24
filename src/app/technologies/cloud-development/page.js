
'use client'
import styles from '../../custom.global.module.css';
import Image from 'next/image';
import { useRef } from 'react';
import useWindowSize from '../../home/product/useWindowSize';
import image1 from '../../assets/images/35.webp';
import icon1 from '../../assets/icon/cloud-data.png';
import icon2 from '../../assets/icon/saas.png';
import icon3 from '../../assets/icon/upload.png';
import icon4 from '../../assets/icon/solution.png';
import icon5 from '../../assets/icon/computer.png';
import icon6 from '../../assets/icon/azure.png';
import icon7 from '../../assets/icon/coding.png';
import icon8 from '../../assets/icon/cloud-computing.png';
import icon9 from '../../assets/icon/system.png';
import icon10 from '../../assets/icon/protection.png';
import TechnologyMenu from '../TechnologyMenu';
import Footer from '@/app/home/footer';

export default function Cloud_Development() {
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
                <div className={`${styles.technology_stack_container} ${styles.technology_stack_container_bg} ${styles.Tailored_Cloud_Applicatio}`}>
                    <div className={styles.inner_technology_stack_container}>
                        <div className={styles.technology_stack_content_section}>
                            <div className={`${styles.technology_stack_title_section}  ${styles.center_popup}`}>
                                <div className={styles.technology_stack_title}>Tailored Cloud Application Development Services</div>
                                <div className={styles.technology_stack_sub_title}> Harness the potential of cloud computing to attain unparalleled flexibility and minimize IT expenses through bespoke cloud solutions.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.left_side}>
                        <div className={styles.inner_section}>
                            <div className={styles.inner_section_title}>Embrace the capabilities of cloud technology to elevate your flexibility and efficiency to new heights</div>
                            <div className={styles.inner_section_sub_title}>We assist companies in transitioning to the cloud, unlocking its full potential. With our extensive experience in custom cloud development, we design and deploy both off-the-shelf and tailored cloud app solutions for your business needs. We ensure seamless migration from one cloud platform to another, as well as from on-premise servers to the cloud.</div>
                            <div className={styles.developButtonContainer} style={{ marginTop: '20px' }}>
                                <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right_side}>
                        <Image className={styles.image_item} src={image1} unoptimized priority alt='' />
                    </div>
                </div>
            </div>
            <div className={styles.product_container}>
                <div className={styles.technology_stack_container}>
                    <div className={styles.inner_technology_stack_container}>
                        <div className={`${styles.technology_stack_content_section} ${styles.our_expertise}`}>
                            <div className={styles.technology_stack_title_section}>
                                <h2 className={styles.technology_stack_title}>Our Expertise in Technologies</h2>
                                <h4 className={styles.technology_stack_sub_title}>For years, {`we've`} specialized in crafting bespoke cloud-based applications tailored to diverse industries, spanning from finance to healthcare. Leveraging premier global cloud platforms from Microsoft and Google, we ensure cutting-edge solutions that meet your specific business needs.</h4>
                            </div>
                            <div className={styles.stack_body}>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>Microsoft Azure</p>
                                    <p className={styles.innerBodySH}>Benefit from our extensive expertise in Azure cloud development, where we tackle intricate business hurdles through scalable and secure Azure-based solutions. Our proficient team of Azure developers excels in seamlessly transitioning digital businesses to the Azure cloud, employing top-tier computing practices throughout the process.</p>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>Google Cloud Platform</p>
                                    <p className={styles.innerBodySH}>Leverage the scalability, flexible pricing, and business-centric features of the Google Cloud Platform to realize the full potential of your custom cloud solution. Our team of Google cloud development experts specializes in crafting tailored cloud applications for your digital business, harnessing the extensive services offered by Google Cloud.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.product_container}>
                <div className={styles.technology_stack_container}>
                    <div className={styles.inner_technology_stack_container}>
                        <div className={`${styles.technology_stack_content_section} ${styles.engagement_model}  ${styles.service_we_offer}`}>
                            <div className={styles.technology_stack_title_section}>
                                <h2 className={styles.technology_stack_title}>CLOUD DEVELOPMENT SERVICES WE OFFER</h2>
                                <h4 className={styles.technology_stack_sub_title}>As a cloud application development company, we provide a wide range of services encompassing cloud development, migration, and consultancy tailored to businesses needs.</h4>
                            </div>
                            <div className={styles.stack_body}>
                                <div className={styles.innerStack_mini}>
                                    <p className={styles.stack_mini_icon}><Image src={icon1} alt='' /></p>
                                    <p className={styles.stack_mini_title}>Custom Cloud Development</p>
                                </div>
                                <div className={styles.innerStack_mini}>
                                    <p className={styles.stack_mini_icon}><Image src={icon2} alt='' /></p>
                                    <p className={styles.stack_mini_title}>SaaS Development</p>
                                </div>
                                <div className={styles.innerStack_mini}>
                                    <p className={styles.stack_mini_icon}><Image src={icon3} alt='' /></p>
                                    <p className={styles.stack_mini_title}>Platform Migration Services</p>
                                </div>
                                <div className={styles.innerStack_mini}>
                                    <p className={styles.stack_mini_icon}><Image src={icon4} alt='' /></p>
                                    <p className={styles.stack_mini_title}>Cloud Solution Consulting</p>
                                </div>
                                <div className={styles.innerStack_mini}>
                                    <p className={styles.stack_mini_icon}><Image src={icon5} alt='' /></p>
                                    <p className={styles.stack_mini_title}>Google Cloud Integration</p>
                                </div>
                                <div className={styles.innerStack_mini}>
                                    <p className={styles.stack_mini_icon}><Image src={icon6} alt='' /></p>
                                    <p className={styles.stack_mini_title}>Microsoft Azure Integration</p>
                                </div>
                                <div className={styles.innerStack_mini}>
                                    <p className={styles.stack_mini_icon}><Image src={icon7} alt='' /></p>
                                    <p className={styles.stack_mini_title}>Codebase Re-engineering</p>
                                </div>
                                <div className={styles.innerStack_mini}>
                                    <p className={styles.stack_mini_icon}><Image src={icon8} alt='' /></p>
                                    <p className={styles.stack_mini_title}>Cloud App Containerization</p>
                                </div>
                                <div className={styles.innerStack_mini}>
                                    <p className={styles.stack_mini_icon}><Image src={icon9} alt='' /></p>
                                    <p className={styles.stack_mini_title}>Multi-Cloud Programming Solutions</p>
                                </div>
                                <div className={styles.innerStack_mini}>
                                    <p className={styles.stack_mini_icon}><Image src={icon10} alt='' /></p>
                                    <p className={styles.stack_mini_title}>Cloud Security & Risk Management</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.product_container}>
                <div className={styles.technology_stack_container}>
                    <div className={styles.inner_technology_stack_container}>
                        <div className={`${styles.technology_stack_content_section} ${styles.engagement_model}`}>
                            <div className={styles.technology_stack_title_section}>
                                <h2 className={styles.technology_stack_title}>MODELS OF ENGAGEMENT</h2>
                                <h4 className={styles.technology_stack_sub_title}>We provide three flexible cooperation models for our cloud application development services, all of which can be customized to suit your specific requirements and budget. Whether {`you're`} a small startup or a large enterprise, trust our team of expert cloud engineers to handle your cloud development needs efficiently.</h4>
                            </div>
                            <div className={styles.stack_body}>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>Fixed-Price Fixed-Scope Model</p>
                                    <p className={styles.innerBodySH}>The Fixed-Price, Fixed-Scope model offers a clear and defined project scope and budget. With this approach, {`you'll`} know exactly what to expect in terms of deliverables and costs upfront, providing transparency and predictability throughout the development process.</p>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>Time-and-Materials Model</p>
                                    <p className={styles.innerBodySH}> In the Time-and-Materials model, you pay for the actual time and resources invested in your project. This flexible approach allows for adjustments to project scope and requirements as needed, ensuring that you only pay for the work completed. It offers greater adaptability and control, ideal for projects with evolving needs or uncertainties in scope.</p>
                                </div>
                                <div className={styles.innerBody_stack}>
                                    <p className={styles.innerBodyH}>Dedicated Development Team Model</p>
                                    <p className={styles.innerBodySH}>Under the Dedicated Development Team model, you get a dedicated team of skilled professionals who work exclusively on your project. This model offers maximum flexibility and control, allowing you to scale the team up or down based on project needs. You have full control over the {`team's`} priorities, workflow, and communication, ensuring alignment with your project goals and timeline.</p>
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