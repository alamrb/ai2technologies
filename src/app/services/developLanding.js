/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef } from 'react'
import styles from './develop.module.css'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import UiImage from '../assets/7.webp'
import ser1 from '../assets/ser1.webp';
import ser2 from '../assets/ser2.webp';
import ser3 from '../assets/ser3.webp';
import ser4 from '../assets/ser4.webp';
import UpImage from '../assets/2.webp'
import image5 from '../assets/images/420.webp'
import Menu from './Menu';
import useWindowSize from '../home/product/useWindowSize';
import Footer from '../home/footer';



export default function DevelopLanding() {
    const prevCountRef = useRef(0);
    const containerRef = useRef(null);
    const size = useWindowSize();
    const [isJumping, setIsJumping] = useState(true);

    const handleScrollDown = () => {
        const nextContainer = document.querySelector('.main');
        if (nextContainer) {
            nextContainer.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleJumping = () => {
        setIsJumping(!isJumping);
    };

    useEffect(() => {
        const jumpTimer = setTimeout(() => {
            toggleJumping();
        }, 2000);
        const resetJumpTimer = setTimeout(() => {
            toggleJumping();
        }, 10000);
        return () => {
            clearTimeout(jumpTimer);
            clearTimeout(resetJumpTimer);
        };
    }, [isJumping]);

    const slide_down_1 = () => {
        const new_top = prevCountRef.current + size.height;
        let elm = document.querySelector('#main_content_div');
        elm.scrollTo({ top: new_top, behavior: "smooth" });
        prevCountRef.current = new_top;
    }

    return (
        <div className={styles.landing} ref={containerRef} id="main_content_div" >
            <div className={styles.main_container}>
                <div className={styles.main_template}>
                    <div className={styles.main_section}>
                        <div className={styles.mainContentBody}>
                            <div className={styles.mainImages}>
                                <div className={styles.imageSideM}>
                                    <Image className={styles.main_img} src={ser1} unoptimized priority alt='' />
                                </div>
                            </div>
                            <div className={styles.mainContent}>
                                <div className={styles.mainHead}>
                                    <p className={styles.headingMain}> <span> We provide cutting-edge solutions </span></p>
                                </div>
                                <p className={styles.headingMain}>
                                    across diverse industries, <br />
                                    encompassing AI, <br />
                                    FinTech & E-Commerce, <br />
                                    Travel & Hospitality, <br />
                                    UI/UX & RPA, <br />
                                    blockchain & more.</p>
                                <p className={styles.bodyContentP} style={{ marginBottom: '0px' }}>Embark on a transformative journey of innovation with our esteemed mobile app development team. From the conceptualization stage to deployment, we specialize in crafting bespoke applications tailored to your unique vision and business requirements. Whether it is native app development for iOS and Android, the creation of cross-platform solutions, or the meticulous design of seamless UI/UX interfaces, our dedicated team ensures a smooth, user-friendly, and ultimately enriching experience. </p>
                                <div className={styles.developButtonContainer}>
                                    <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.main_container} main`}>
                <div className={styles.main_template}>
                    <div className={styles.main_section}>
                        <div className={styles.mainContentBody}>
                            <div className={styles.mainContent}>
                                <div className={styles.mainHead}>
                                    <p className={styles.headingMain}>
                                        Mobile & Web Apps
                                    </p>
                                </div>
                                <p className={styles.bodyContentP}>Embark on a transformative journey of innovation with our esteemed mobile app development team. From the conceptualization stage to deployment, we specialize in crafting bespoke applications tailored to your unique vision and business requirements. Whether it is native app development for iOS and Android, the creation of cross-platform solutions, or the meticulous design of seamless UI/UX interfaces, our dedicated team ensures a smooth, user-friendly, and ultimately enriching experience. </p>
                                <div className={styles.developButtonContainer}>
                                    <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                                </div>
                            </div>
                            <div className={styles.mainImages}>
                                <div className={styles.imageSideM}>
                                    <Image className={styles.main_img} src={ser4} unoptimized priority alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.main_container}`}>
                <div className={styles.main_template}>
                    <div className={styles.main_section}>
                        <div className={styles.mainContentBody}>
                            <div className={styles.mainImages}>
                                <div className={styles.imageSideM}>
                                    <Image className={styles.main_img} src={UiImage} unoptimized priority alt='' />
                                </div>
                            </div>
                            <div className={styles.mainContent}>
                                <div className={styles.mainHead}>
                                    <p className={styles.headingMain}>
                                        App UI/UX Design
                                    </p>
                                </div>
                                <p className={styles.bodyContentP}>User Interface (UI) and User Experience (UX) are at the core of every successful app. Our design team combines creativity with functionality to deliver visually stunning and intuitively designed interfaces. We ensure that every interaction with your app is not just efficient but also a pleasure for the user.</p>
                                <div className={styles.developButtonContainer}>
                                    <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.main_container}`}>
                <div className={styles.main_template}>
                    <div className={styles.main_section}>
                        <div className={styles.mainContentBody}>
                            <div className={styles.mainContent}>
                                <div className={styles.mainHead}>
                                    <p className={styles.headingMain}>
                                        App Maintenance and Updates
                                    </p>
                                </div>
                                <p className={styles.bodyContentP}>The journey does not end with the launch. Our commitment extends to providing continuous support through our App Maintenance and Updates services. Stay ahead of the curve with regular updates, feature enhancements, and troubleshooting to ensure your app remains responsive, secure, and compatible with the latest technologies.</p>
                                <div className={styles.developButtonContainer}>
                                    <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                                </div>
                            </div>
                            <div className={styles.mainImages}>
                                <div className={styles.imageSideM}>
                                    <Image className={styles.main_img} src={UpImage} unoptimized priority alt='' />
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
        </div >
    )
}
