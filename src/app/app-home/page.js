/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../home.module.css'
import Image from 'next/image';
import HomeSlider from '../HomeSlider'
import TextSlider from '../TextSlider'
import AE_logo_new from '../assets/AE-logo-new.png'
import { isMobile } from 'react-device-detect';

export default function AppHome() {
    const containerRef = useRef(null);
    const [device, setDevice] = useState(null);

    useEffect(() => {
        if (isMobile) {
            setDevice("mobile");
        } else {
            setDevice("web");
        }
    }, [isMobile]);

    const slide_up_1 = () => {
        const new_top = prevCountRef.current - size.height;
        let elm = document.querySelector('#main_content_div');
        elm.scrollTo({ top: new_top, behavior: "smooth" });
        prevCountRef.current = new_top;
    }

    const slide_down_1 = () => {
        const new_top = prevCountRef.current + size.height;
        let elm = document.querySelector('#main_content_div');
        elm.scrollTo({ top: new_top, behavior: "smooth" });
        prevCountRef.current = new_top;
    }

    return (
        <div className={styles.landing} ref={containerRef} id="main_content_div">
            <div className={`${styles.product_container} ${styles.app_home}`} id='main_page' style={{ overflow: 'hidden', position: 'relative' }}>
                <video id="background-video" autoPlay loop muted playsInline>
                    <source src="/videos/vidBack.mp4" type="video/mp4" />
                </video>
                <div className={styles.product_item} style={{ position: 'relative', zIndex: 1 }}>
                    <div className={styles.left_side} style={{ backgroundColor: 'rgb(255 255 255 / 85%)' }}>
                        <div className={styles.product_description} style={{ flexDirection: 'column' }}>
                            {/* <div className={styles.mainTopContainer}>
                                <Image src={AE_logo_new} className={styles.newLogo} alt='' />
                            </div>
                            <div className={styles.appLogoGroup}>
                                {(device && (device === "web")) ?
                                    <>
                                        <Link href="#" target="_blank" rel="noopener noreferrer"><Image src={Play} className={styles.appLogo} alt='' /></Link>
                                        <Link href={'#'}><Image src={AppStore} className={styles.appLogo} alt='' /></Link>
                                    </>
                                    : null
                                }
                            </div> */}

                            <div className={styles.mainMidContainer}>
                                <p>Unleashing Innovation Anytime Everywhere</p>
                            </div>

                            <div className={styles.button_section}>
                                <Link href={'/career'} className={styles.button_design}> Career </Link>
                                <Link href={'/develop'} className={styles.button_design}> Services </Link>
                                <Link href={'/develop/developForm'} className={styles.button_design}> Develop </Link>
                            </div>

                            <div className={styles.mainBottomText}>
                                <p className={styles.welcome_text} >Harnessing the power of technology for success, anytime, anywhere. Empowering individuals and businesses in the digital age.</p>
                                <div className={styles.container_Button}>
                                    <Link href='#' onClick={slide_down_1}>
                                        <div className={styles.navButtonsBottom}>Learn More </div>
                                    </Link></div>

                            </div>
                        </div>
                        {/* {(device && (device === "web")) ?
                            <>
                                <Double_Scroll_client_arefin goToTop={scrollToTop} showTopBtn={showTopBtn_State} />
                                <Scroll_testing_client_arefin slide_up_by_1={slide_up_1} slide_down_by_1={slide_down_1} wanting_to_scroll_Bottom={wanting_to_scroll_Bottom_State} />
                            </>
                            : null
                        } */}
                    </div>
                    <div className={styles.right_side}>
                        <HomeSlider />
                        <TextSlider />
                    </div>
                </div>
            </div>
        </div>
    );
}