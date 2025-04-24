import { RxCross1 } from "react-icons/rx";
import styles from './privacyPolicy.module.css';

export default function Policy() {
    const goBack = () => {
        window.history.back();
    }
    return (
        <>
            <div className={styles.terms_main_container}>
                <div className={styles.mega_menu_close_icon} onClick={goBack}> <RxCross1 style={{ cursor: 'pointer' }} title='Close' /> </div>
                <div className={styles.terms_section}>
                    <div className={styles.terms_header}>Privacy and Policy</div>
                    <div className={styles.term_content}>
                        <div>ai2 technologies.  is committed to protecting the privacy and security of your personal information. This Privacy Policy outlines the types of information we collect, how we use it, and the choices you have concerning your data.</div>

                        <div className={styles.term_li_section_title}> Information We Collect:</div>
                        <div className={styles.term_item}>

                            <div className={styles.term_title}> 1. Personal Information:</div>
                            <div className={styles.term_title_content}>We may collect personal information such as your name, email address, contact details, and other identifiers when voluntarily provided by you</div>
                        </div>

                        <div className={styles.term_item}>
                            <div className={styles.term_title}>2. Usage Data:</div>
                            <div className={styles.term_title_content}>We gather information about how you interact with our website, including your IP address, browser type, pages visited, and other usage data.</div>
                        </div>

                        <div className={styles.term_li_section_title}>How We Use Your Information:</div>
                        <div className={styles.term_item}>
                            <div className={styles.term_title}>3. Personalization: </div>
                            <div className={styles.term_title_content}>We use your information to personalize your experience on our website.</div>
                        </div>

                        <div className={styles.term_item}>
                            <div className={styles.term_title}>4. Communication: </div>
                            <div className={styles.term_title_content}> We may use your contact details to respond to inquiries, provide information, and send updates.</div>
                        </div>

                        <div className={styles.term_item}>
                            <div className={styles.term_title}>5. Analytics: </div>
                            <div className={styles.term_title_content}> We analyze usage data to improve our website, services, and user experience.</div>
                        </div>

                        <div className={styles.term_item}>
                            <div className={styles.term_title}>6. Cookies: </div>
                            <div className={styles.term_title_content}> Our website may use cookies and similar technologies to enhance user experience and collect information about your preferences and interactions.</div>
                        </div>

                        <div className={styles.term_item}>
                            <div className={styles.term_title}>7. Third-Party Links: </div>
                            <div className={styles.term_title_content}> Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these sites.</div>
                        </div>

                        <div className={styles.term_item}>
                            <div className={styles.term_title}>8. Security: </div>
                            <div className={styles.term_title_content}> We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction.</div>
                        </div>

                        <div className={styles.term_item}>
                            <div className={styles.term_title}>9. Your Choices: </div>
                            <div className={styles.term_title_content}>You have the right to request access, correction, or deletion of your personal information. Please contact us if you wish to exercise these rights. You can opt-out of receiving promotional communications by following the instructions provided in our emails.</div>
                        </div>
                        <div className={styles.term_item}>
                            <div className={styles.term_title}>9. {`Children's`} Privacy: </div>
                            <div className={styles.term_title_content}>Our website is not directed at individuals under the age of 16. We do not knowingly collect personal information from children.</div>
                        </div>

                        <div className={styles.term_item}>
                            <div className={styles.term_title}>10. Updates to This Privacy Policy: </div>
                            <div className={styles.term_title_content}>We may update this Privacy Policy to reflect changes in our practices or legal requirements. The latest version will be posted on our website with the effective date.</div>
                        </div>

                        <div className={styles.term_item}>
                            <div className={styles.term_title}>11. Contact Us: </div>
                            <div className={styles.term_title_content}>If you have any questions or concerns about this Privacy Policy, please contact us at [info@platformae.uk].</div>
                        </div>
                        <div className={styles.term_item}>
                            {/* <div className={styles.term_title}>11. Contact Us: </div> */}
                            <div className={styles.term_title_content}>By using our website, you consent to the terms outlined in this <span style={{ fontWeight: '400' }}>Privacy Policy.</span> </div>
                            <div className={styles.term_title_content} style={{ fontWeight: '400' }}>Last Updated on 10 March 2024</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}