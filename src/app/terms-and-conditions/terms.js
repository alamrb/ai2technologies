/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect, useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import styles from './terms.module.css';

export default function Condition() {
    const [loader, setLoader] = useState(false)
    const [isClient, setIsClient] = useState(false)
    const [domain_data, set_domain_data] = useState(null)

    useEffect(() => {
        setIsClient(true)
    }, [])

    useEffect(() => {
        if (typeof window !== undefined) {
            let d = localStorage.getItem('_domain') ? JSON.parse(localStorage.getItem('_domain')) : null
            console.log(d)
            if (!domain_data) {
                setLoader(false)
                set_domain_data(localStorage.getItem('_domain') ? JSON.parse(localStorage.getItem('_domain')) : null)
            }
        }
    }, [isClient])

    const goBack = () => {
        window.history.back();
    }

    return (
        <>
            <div className={styles.terms_main_container}>
                <div className={styles.mega_menu_close_icon} onClick={goBack}> <RxCross1 style={{ cursor: 'pointer' }} title='Close' /> </div>
                <div className={styles.terms_section}>
                    <div className={styles.terms_header}>Terms and Conditions of ai2 technologies (Luton) Ltd</div>
                    {/* 
                    <div className={styles.term_content}>
                        Welcome to PlatformAE (Luton) Ltd. These terms and conditions form the basis of your use of the PlatformAE (Luton) Ltd website and the services provided, including mobile repair, app development.

                        <div className={styles.term_item}>
                            <div className={styles.term_title}>1. Acceptance of Terms</div>
                            <div className={styles.term_title_content}>By accessing and using our website and services, you signify your agreement to be bound by these terms and conditions.</div>
                        </div>

                        <div className={styles.term_item}>
                            <div className={styles.term_title}>2. Services</div>
                            <div className={styles.term_title_content}>PlatformAE (Luton) Ltd provides mobile repair, app development, and mobile phone sales services.
                                Specific terms and conditions related to these services are available upon request.</div>
                        </div>

                        <div className={styles.term_item}>
                            <div className={styles.term_title}>3. User Obligations</div>
                            <div className={styles.term_title_content}>Users of this website must not use it for any unlawful or prohibited purposes.
                                The content on this website is for your general information and personal use only.</div>
                        </div>

                        <div className={styles.term_item}>
                            <div className={styles.term_title}>4. Intellectual Property</div>
                            <div className={styles.term_title_content}>The trademarks, logos, and service marks displayed on this site are the property of PlatformAE (Luton) Ltd or their respective owners.</div>
                        </div>

                        <div className={styles.term_item}>
                            <div className={styles.term_title}>5. Payment</div>
                            <div className={styles.term_title_content}>All payments for services and products must be made as per the specified terms.
                                Prices are subject to change without notice.</div>
                        </div>

                        <div className={styles.term_item}>
                            <div className={styles.term_title}>7. Cancellation and Refund</div>
                            <div className={styles.term_title_content}>Our cancellation and refund policies are detailed separately and are available upon request.
                            </div>
                        </div>

                        <div className={styles.term_item}>
                            <div className={styles.term_title}>Warranty and Liability</div>
                            <div className={styles.term_title_content}>PlatformAE (Luton) Ltd offers warranties for certain services and products, detailed separately.
                                Our liability is limited as outlined in our liability policy.</div>
                        </div>

                        <div className={styles.term_item}>
                            <div className={styles.term_title}>9. Changes to Terms</div>
                            <div className={styles.term_title_content}>We reserve the right to modify these terms and conditions at any time.</div>
                        </div>
                    </div>
                    */}
                    {loader ? 'Loading..' : <div dangerouslySetInnerHTML={{ __html: domain_data?.terms_conditions }} />}
                </div>
            </div>
        </>
    )
}

// , and mobile phone sales.Our business address is 9a 172 - Dunstable Road, Luton, Bedfordshire, United Kingdom, LU4 8FG.