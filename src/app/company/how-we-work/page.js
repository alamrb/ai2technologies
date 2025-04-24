'use client'

import Footer from '@/app/home/footer';
import useWindowSize from '@/app/home/product/useWindowSize';
import Image from 'next/image';
import { useRef } from 'react';
import side_image1 from '../../assets/images/hww-001.webp';
import side_image2 from '../../assets/images/hww-002.webp';
import side_image3 from '../../assets/images/hww-003.webp';
import side_image4 from '../../assets/images/hww-004.webp';
import CompanyMenu from '../CompanyMenu';
import styles from '../process.module.css';

export default function HowWeWork() {

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
                    <div className={styles.right_side} style={{ backgroundColor: '#f5f9fc' }}>
                        <Image className={styles.image_full} src={side_image1} alt='' />
                    </div>
                    <div className={styles.left_side}>
                        <div className={styles.product_description}>
                            <div className={styles.mainMidContainer}>
                                <p className={styles.section_title}>Collaboration Frameworks</p>
                                <div className={styles.platform_sub_title} >ai2 technologies offers comprehensive software development services, encompassing design, development, and support of customized solutions. We partner with clients of varying preferences, business needs, and organizational cultures to deliver tailored outcomes.</div>
                                <div className={styles.platform_sub_title} >We provide a range of engagement models to suit your needs, including fixed-scope fixed-price projects, flexible time & materials (T&M) options, or a dedicated team on a monthly retainer. We also offer customized combinations of these models. Regardless of the chosen model, we adhere to industry best practices in delivery, project management, and talent retention. This approach has empowered us to undertake ambitious software development projects and deliver them successfully.</div>
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
                            <div className={styles.mainMidContainer}>
                                <p className={styles.section_title}>FIXED-PRICE FIXED-SCOPE</p>
                                <ul className={styles.list_items}>
                                    <li> This model is appropriate when your software requirements are clearly defined and unlikely to undergo significant changes during the development process. </li>
                                    <li> We collaborate with you from the outset to meticulously define your software specifications in detail. </li>
                                    <li> Subsequently, we commit to delivering the specified set of functionalities within an agreed-upon timeframe and cost. </li>
                                    <li> This model is not ideal for projects where software requirements are expected to change or evolve significantly. </li>
                                </ul>
                                <div className={styles.developButtonContainer} style={{ marginTop: '20px' }}>
                                    <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right_side} style={{ backgroundColor: '#f5f9fc' }}>
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
                            <div className={styles.mainMidContainer}>
                                <p className={styles.section_title}>DEDICATED TEAM</p>
                                <ul className={styles.list_items}>
                                    <li> This option is most effective when you have a series of envisioned projects but prefer not to hire permanent employees, or if sourcing the right skill set promptly poses challenges. </li>
                                    <li> It offers flexibility to adjust course and reprioritize projects and tasks as needed. You retain full control over optimizing your {`team's`} time and skill set to achieve your objectives. </li>
                                    <li> This model ensures optimal utilization of your {`team's`} time and skills. It synergizes effectively with the Agile development methodology, allowing for continuous review and refinement of your software application(s) as they progress. </li>
                                    <li> You collaborate directly with your team members at i2 technologies and delegate tasks. Our Agile scrum master supports this process to ensure smooth operation and alignment with Agile principles. </li>
                                    {/* <li> You benefit from discounted rates compared to the Fixed-Cost/Fixed-Scope engagement model. </li> */}
                                </ul>
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
                            <div className={styles.mainMidContainer}>
                                <p className={styles.section_title}>TIME & MATERIALS</p>
                                <ul className={styles.list_items}>
                                    <li> This model is suitable when the scope of development work is relatively small but not entirely defined. </li>
                                    <li> The engagement is divided into smaller fixed-cost/fixed-time phases, typically lasting one month each.</li>
                                    <li> This model mitigates risk by limiting exposure for each phase, allowing you to review and decide on the budget allocation for the next phase only if you are satisfied with the deliverables of the preceding phase. </li>
                                    <li> This model is not ideal for ongoing development requirements, and turnarounds may not be as rapid as those achievable with dedicated teams. </li>
                                </ul>
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
                            <div className={styles.mainMidContainer}>
                                <p className={styles.section_title}>HYBRID MODEL</p>
                                <ul className={styles.list_items}>
                                    <li> This model is ideal when you have ongoing development requirements for some projects but anticipate occasional spikes in workload and additional one-off projects. </li>
                                    <li> You can maintain a dedicated core team for ongoing development and maintenance tasks while engaging additional staff on a Fixed-Price or Time and Materials (T&M) basis to handle demand spikes, such as one-off projects.</li>
                                </ul>
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