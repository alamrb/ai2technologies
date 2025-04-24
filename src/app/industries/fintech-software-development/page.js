'use client'
import { useRef } from 'react';
import styles from '../../custom.global.module.css';
import useWindowSize from '@/app/home/product/useWindowSize';
import IndustryMenu from '../IndustryMenu';
import Footer from '@/app/home/footer';

export default function Fintech() {
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
                            <div className={styles.technology_stack_title_section} style={{height: 'auto'}}>
                                <div className={styles.technology_stack_title}>   Fintech software development </div>
                            </div>

                            <div div className={styles.technology_stack_item_section}>
                                <p>We specialize in building robust custom software applications tailored for the finance industry, ensuring efficient day-to-day operations and long-term returns.</p>
                                <p>We are making our mark as a FinTech software development company, actively contributing to the exponential growth and technological advancements in the financial industry.</p>
                                <p>{`We've`} worked on numerous financial software development projects for various organizations, enabling them to achieve operational efficiency and technological growth. Our FinTech application development services offer a real opportunity for progress in the financial industry.</p>
                                <p>Establish your presence in the FinTech landscape with revolutionary software products. Partner with us for tailored FinTech software development, empowering you to embrace the evolving changes in the financial industry.</p>
                                <div className={styles.portal_container}>
                                    <div className={styles.portal_item}>Banking</div>
                                    <div className={styles.portal_item}>Insurance</div>
                                    <div className={styles.portal_item}>Investment</div>
                                    <div className={styles.portal_item}> Trading </div>
                                    <div className={styles.portal_item}> RegTech  </div>
                                    <div className={styles.portal_item}>  Payments   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.main_container}`}>
                <div className={styles.main_template}>
                    <div className={styles.main_section}>
                        <div className={styles.section_container}>
                            <div className={styles.section_head}>
                                <p className={styles.main_title}> Financial Software Services </p>
                            </div>
                            <div className={`${styles.card_container} ${styles.core_values}`}>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}> Developing Custom Financial Software </h3>
                                    <p> Your needed financial systems software solution could manifest as a web, mobile, or desktop application, tailored to meet your specific requirements.</p>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}>Cloud Development</h3>
                                    <p>Within our financial services software development offering, we aid fintech organizations in adopting and migrating financial solutions to the cloud.</p>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}>Product Design </h3>
                                    <p> We ensure the design of your fintech product is fully capable of handling complex financial functions while remaining practical, scalable, and exceptionally user-friendly.</p>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}>Legacy System Modernisation</h3>
                                    <p>Keep pace with the rapid changes in the fintech industry. Our team is equipped with the ideal skills for upgrading and integrating legacy systems.</p>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}>API and System Integration </h3>
                                    <p> The financial sector depends on system interoperability. Our API development and integration services ensure seamless connectivity.</p>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}>Support and Maintenance </h3>
                                    <p> In addition to implementing proper SLAs for regular software maintenance and updates, our support team is readily available to assist customers via email and phone.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.main_container}`}>
                <div className={styles.main_template}>
                    <div className={styles.main_section}>
                        <div className={styles.section_container}>
                            <div className={styles.section_head}>
                                <p className={styles.main_title}> Our Fintech Expertise  </p>
                            </div>
                            <div className={`${styles.card_container} ${styles.core_values}`}>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}> Banking Software </h3>
                                    <ul className={styles.card_ul}>
                                        <li>Mobile and internet banking applications</li>
                                        <li>Financial reporting tools and mechanisms</li>
                                        <li>Remittance management</li>
                                        <li>Workflow automation</li>
                                    </ul>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}>Insurance Solutions</h3>
                                    <ul className={styles.card_ul}>
                                        <li>Document management</li>
                                        <li>Lead management and tracking</li>
                                    </ul>
                                </div>

                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}>Investment App</h3>
                                    <ul className={styles.card_ul}>
                                        <li>Investment portfolio management</li>
                                        <li>Asset management</li>
                                        <li>Corporate portals</li>
                                    </ul>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}>Loan and Lending </h3>
                                    <ul className={styles.card_ul}>
                                        <li>Loan management</li>
                                        <li>Credit management</li>
                                        <li>Risk management</li>
                                    </ul>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}>Consumer Finance </h3>
                                    <ul className={styles.card_ul}>
                                        <li>Personal loan management system</li>
                                    </ul>
                                </div>

                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}> Security & Compliance </h3>
                                    <ul className={styles.card_ul}>
                                        <li> Regulatory compliance monitoring</li>
                                        <li>FIX testing</li>
                                    </ul>
                                </div>

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










{/* <div className={styles.landing} >
    <div className={styles.product_container}>
        <div className={styles.technology_stack_container}>
            <div className={styles.inner_technology_stack_container}>
                <div className={styles.technology_stack_content_section}>
                    <div className={styles.technology_stack_title_section}>
                        <div className={styles.technology_stack_title}>Fintech software development</div>
                        <div className={styles.technology_stack_sub_title}> We specialize in building robust custom software applications tailored for the finance industry, ensuring efficient day-to-day operations and long-term returns.</div>
                    </div>

                    <div div className={styles.technology_stack_item_section}>

                        <div className={styles.portal_container}>
                            <div className={styles.portal_item}>Banking</div>
                            <div className={styles.portal_item}>Insurance</div>
                            <div className={styles.portal_item}>Investment</div>
                            <div className={styles.portal_item}> Trading </div>
                            <div className={styles.portal_item}> RegTech </div>
                            <div className={styles.portal_item}> Payments </div>
                            <div className={styles.portal_item}> Consumer Finance </div>
                        </div>

                        <div className={styles.btn_section}>
                            <Link href='/contact' className={styles.btn_item}> Talk to our experts  </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className={`${styles.main_container}`}>
        <div className={styles.main_template}>
            <div className={styles.main_section}>
                <div className={styles.section_container}>
                    <p className={styles.main_title}> Financial Software Services </p>
                    <div className={`${styles.card_container} ${styles.core_values}`}>
                        <div className={styles.card_view}>
                            <h3 className={styles.card_title}> Developing Custom Financial Software </h3>
                            <p> Your needed financial systems software solution could manifest as a web, mobile, or desktop application, tailored to meet your specific requirements.</p>
                        </div>
                        <div className={styles.card_view}>
                            <h3 className={styles.card_title}>Cloud Development</h3>
                            <p>Within our financial services software development offering, we aid fintech organizations in adopting and migrating financial solutions to the cloud.</p>
                        </div>
                        <div className={styles.card_view}>
                            <h3 className={styles.card_title}>Product Design </h3>
                            <p> We ensure the design of your fintech product is fully capable of handling complex financial functions while remaining practical, scalable, and exceptionally user-friendly.</p>
                        </div>
                        <div className={styles.card_view}>
                            <h3 className={styles.card_title}>Legacy System Modernisation</h3>
                            <p>Keep pace with the rapid changes in the fintech industry. Our team is equipped with the ideal skills for upgrading and integrating legacy systems.</p>
                        </div>
                        <div className={styles.card_view}>
                            <h3 className={styles.card_title}>API and System Integration </h3>
                            <p> The financial sector depends on system interoperability. Our API development and integration services ensure seamless connectivity.</p>
                        </div>
                        <div className={styles.card_view}>
                            <h3 className={styles.card_title}>Support and Maintenance </h3>
                            <p> In addition to implementing proper SLAs for regular software maintenance and updates, our support team is readily available to assist customers via email and phone.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div> */}