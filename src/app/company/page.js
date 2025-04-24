"use client"
import Image from 'next/image'
import styles from './company.module.css'
import UiImage from '../assets/7.webp'
import { useRef } from 'react';
import useWindowSize from '../home/product/useWindowSize';
import CompanyMenu from './CompanyMenu';
import Footer from '../home/footer';

export default function Company() {

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
            <div className={`${styles.main_container}`}>
                <div className={styles.main_template}>
                    <div className={styles.main_section}>
                        <div className={styles.mainContentBody}>
                            <div className={styles.mainContent}>
                                <div className={styles.mainHead}>
                                    <p className={styles.headingMain}>Beyond traditional software development </p>
                                    <p className={styles.headingMain}><span className={styles.headingSub}>we are your trusted partner for realizing ambitious software projects.</span></p>
                                </div>
                                <p className={styles.bodyContentP}>At PlatformAE, we transcend traditional software development. We serve as your strategic partner, providing engineering support to ambitious, growth-minded companies. With a dynamic mix of talent, processes, and vision, we deliver outstanding results for our clients. Beyond mere product creation, we foster lasting partnerships and drive your business growth through innovative technology solutions.</p>
                                <div className={styles.developButtonContainer} style={{ marginTop: '20px' }}>
                                    <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                                </div>
                            </div>
                            <div className={styles.mainImages}>
                                <div className={styles.imageSideM}>
                                    <Image className={styles.main_img} src={UiImage} unoptimized priority alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.main_container}`}>
                <div className={styles.main_template}>
                    <div className={styles.main_section}>
                        <div className={`${styles.section_container} ${styles.dynamic_company}`}>
                            <div className={styles.dynamic_company_top}>
                                <p className={styles.main_title}>Dynamic companies thrive with PlatformAE by their side</p>
                                <p className={styles.sub_title}>How do we achieve it? Through our talented individuals, robust processes, and adaptable approach tailored to meet each {`client's`} unique requirements. Your success is our success, and {`we're`} committed to delivering excellence every step of the way.</p>
                            </div>
                            <div className={styles.card_container}>
                                <div className={styles.card_view}>
                                    <p> Leverage our extensive engineering expertise and access top-tier global talent to expand your team with flexibility and cost-effectiveness.</p>
                                </div>
                                <div className={styles.card_view}>
                                    <p>Receive high-quality deliverables, transparent operations, and adaptable, user-friendly workflows tailored to your needs.</p>
                                </div>
                                <div className={styles.card_view}>
                                    <p> Cut down costs and accelerate progress using our flexible engagement models, scalable teams, and cutting-edge technology designed to adapt and thrive in the future.</p>
                                </div>
                                <div className={styles.card_view}>
                                    <p>Partner with us, where your success is our priority. We adapt to your preferred methods of collaboration, ensuring alignment with your expectations and delivering results that exceed them.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.main_container}`}>
                <div className={styles.main_template}>
                    <div className={styles.main_section}>
                        <div className={`${styles.section_container} ${styles.core_values}`}>
                            <div className={styles.core_values_top}>
                                <p className={styles.main_title}>Core values driving PlatformAE</p>
                            </div>
                            <div className={`${styles.card_container}`}>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}>Transparency and Integrity</h3>
                                    <p> Leverage our extensive engineering expertise and access top-tier global talent to expand your team with flexibility and cost-effectiveness.</p>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}>Clearness and Ease</h3>
                                    <p>Receive high-quality deliverables, transparent operations, and adaptable, user-friendly workflows tailored to your needs.</p>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}>Accountability for our work</h3>
                                    <p> Cut down costs and accelerate progress using our flexible engagement models, scalable teams, and cutting-edge technology designed to adapt and thrive in the future.</p>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}>Client care is our priority</h3>
                                    <p>Partner with us, where your success is our priority. We adapt to your preferred methods of collaboration, ensuring alignment with your expectations and delivering results that exceed them.</p>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}>Success achieved together</h3>
                                    <p> Cut down costs and accelerate progress using our flexible engagement models, scalable teams, and cutting-edge technology designed to adapt and thrive in the future.</p>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}>Unified Vision</h3>
                                    <p>Partner with us, where your success is our priority. We adapt to your preferred methods of collaboration, ensuring alignment with your expectations and delivering results that exceed them.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.main_container} ${styles.MegaMenu_container}`}>
                {<CompanyMenu />}
            </div>
            <Footer />
        </div>
    )
}
