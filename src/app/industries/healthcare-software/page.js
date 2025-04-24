import styles from '../../custom.global.module.css';
import Image from 'next/image';
import Link from 'next/link';
import image1 from '../../assets/images/18.webp';
import image2 from '../../assets/images/26.webp';
import image3 from '../../assets/images/16.webp';
import image4 from '../../assets/images/20.webp';
import IndustryMenu from '../IndustryMenu';
import Footer from '@/app/home/footer';

export default function HealthCare() {
    return (
        <div className={styles.landing} >
            <div className={styles.product_container}>
                <div className={styles.why_choose_us_container}>
                    <div className={styles.inner_technology_stack_container}>
                        <div className={styles.why_choose_us_content_section}>
                            <div className={styles.technology_stack_title_section} style={{ height: 'auto' }}>
                                <div className={styles.technology_stack_title}>   Healthcare Software Development Solutions </div>
                                {/* <div className={styles.sub_title}>  Exceptional software solutions tailored for sports businesses, clubs, teams, athletes, and fans. </div> */}
                            </div>

                            <div div className={styles.technology_stack_item_section}>
                                <p>Bespoke healthcare software solutions for web and mobile, revolutionizing and enhancing various health management and patient care sectors.</p>
                                <p>Healthcare institutions and patient care providers have joined forces with our medical software development company to elevate patient engagement and improve staff experiences using cutting-edge custom solutions.</p>
                                <p>{`We've`} collaborated with public and private healthcare providers, developing digital healthcare software systems to streamline daily operations. Our services enable medical organizations to manage patient data, maintain records, streamline billing, and improve patient access to care.</p>
                                <p>{`We're`} eager to partner with you to navigate the ever-changing healthcare landscape and help you make your mark in the industry.</p>
                                <div className={styles.portal_container}>
                                    <div className={styles.portal_item}>Public and Private Hospitals</div>
                                    <div className={styles.portal_item}>Health Startups</div>
                                    <div className={styles.portal_item}>Clinics and Labs</div>
                                    <div className={styles.portal_item}> Personal Healthcare  </div>
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
                                <p className={styles.main_title}> Our Healthcare Solutions </p>
                            </div>
                            <div className={`${styles.card_container} ${styles.core_values}`}>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}> Laboratory Information Management Software </h3>
                                    <p> Our bespoke laboratory software automates and simplifies laboratory operations, including test ordering, sample management, and instrument integration.</p>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}>Cloud Development</h3>
                                    <p>Within our financial services software development offering, we aid fintech organizations in adopting and migrating financial solutions to the cloud.</p>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}> Healthcare Integration </h3>
                                    <p> We assist in ensuring seamless integration and interoperability of healthcare data, customized to your needs, including EMR/EHRs, payment gateways, and third-party applications.</p>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}> Healthcare Compliance</h3>
                                    <p>Our healthcare tech experts ensure that all solutions and software we develop adhere to regulatory frameworks and compliance standards like HIPAA, GDPR, HITECH, NHS, and others.</p>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}> Practice Management Software Development  </h3>
                                    <p> We develop custom practice management software to streamline and optimize operations for clinical staff.</p>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}> EMR/EHR Software Development </h3>
                                    <p> Our EMR and EHR software services improve interoperability, streamline workflows, and boost productivity for healthcare organizations.</p>
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
                                <p className={styles.main_title}> Healthcare Industry Stakeholders We Support </p>
                            </div>
                            <div className={`${styles.card_container} ${styles.core_values}`}>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}> Healthcare Organisations </h3>
                                    <p>We craft user-friendly mobile and web systems tailored to healthcare needs, tackling {`providers'`} and {`professionals'`} tech challenges.</p>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}>Public & Private Hospitals</h3>
                                    <p>As a healthcare software company, we create custom applications designed specifically for hospital workflows and needs. </p>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}> Clinics & Laboratories </h3>
                                    <p> We provide custom healthcare software development services to efficiently manage essential processes for health centers, clinics, labs, and testing facilities.</p>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}> Assisted Living Facilities</h3>
                                    <p> Our smart healthcare solutions streamline operations at assisted living facilities, enhancing patient care and optimizing staff workflows while reducing costs.</p>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}> Personal Healthcare  </h3>
                                    <p>  We support individuals in achieving health and fitness goals. Our custom solutions simplify management and monitoring of mental well-being, physical activity levels, and overall fitness.</p>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}> Medical Device Manufacturers  </h3>
                                    <p> We support medical device manufacturers in creating healthcare solutions for improved peer-to-peer communication.</p>
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
                    <div className={styles.technology_stack_title}>Healthcare Software Development Solutions</div>
                    <div className={styles.technology_stack_sub_title}> Bespoke healthcare software solutions for web and mobile, revolutionizing and enhancing various health management and patient care sectors.</div>
                </div>

                <div div className={styles.technology_stack_item_section}>

                    <div className={styles.portal_container}>
                        <div className={styles.portal_item}>Public and Private Hospitals</div>
                        <div className={styles.portal_item}>Health Startups</div>
                        <div className={styles.portal_item}>Clinics and Labs</div>
                        <div className={styles.portal_item}> Assisted Living Facilities </div>
                        <div className={styles.portal_item}> Personal Healthcare </div>
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
                <div className={styles.section_head}>
                    <p className={styles.main_title}> Our Healthcare Solutions </p>
                </div>
                <div className={`${styles.card_container} ${styles.core_values}`}>
                    <div className={styles.card_view}>
                        <h3 className={styles.card_title}> Laboratory Information Management Software </h3>
                        <p> Our bespoke laboratory software automates and simplifies laboratory operations, including test ordering, sample management, and instrument integration.</p>
                    </div>
                    <div className={styles.card_view}>
                        <h3 className={styles.card_title}>Healthcare Integration</h3>
                        <p>We assist in ensuring seamless integration and interoperability of healthcare data, customized to your needs, including EMR/EHRs, payment gateways, and third-party applications.</p>
                    </div>
                    <div className={styles.card_view}>
                        <h3 className={styles.card_title}>Healthcare Compliance </h3>
                        <p> Our healthcare tech experts ensure that all solutions and software we develop adhere to regulatory frameworks and compliance standards like HIPAA, GDPR, HITECH, NHS, and others.</p>
                    </div>
                    <div className={styles.card_view}>
                        <h3 className={styles.card_title}>Practice Management Software Development </h3>
                        <p>We develop custom practice management software to streamline and optimize operations for clinical staff.</p>
                    </div>
                    <div className={styles.card_view}>
                        <h3 className={styles.card_title}> EMR/EHR Software Development </h3>
                        <p> Our EMR and EHR software services improve interoperability, streamline workflows, and boost productivity for healthcare organizations.</p>
                    </div>
                    <div className={styles.card_view}>
                        <h3 className={styles.card_title}> Healthcare Device Software and SaMD </h3>
                        <p> We develop medical device software to meet your needs, including SaMD, client and server-side software, and maintenance software. </p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
</div> */}