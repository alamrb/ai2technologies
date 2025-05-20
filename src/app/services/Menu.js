
import Link from 'next/link';
import styles from './develop.module.css'
import { FaCircle } from "react-icons/fa";


export default function Menu() {
    return (

        <div className={styles.mega_menu_item_container_services}>
            <div className={styles.mega_menu_item_container}>
                <Link href="/develop/web-app-development" className={styles.mega_menu_item_section}>
                    <div className={styles.mega_menu_title} >Web App Development</div>
                    <div className={styles.mega_menu_content}> Tailored, cost-effective business applications and web portals designed for diverse industries.</div>
                </Link>
                <Link onClick={() => set_open_menu('')} href={'/develop/digital-marketing-services'} className={styles.mega_menu_item_section}>
                    <div className={styles.mega_menu_title} >Social Media Marketing Services</div>
                    <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Social Media Marketing (SMM)</div>
                    <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> SEO (Search Engine Optimization)</div>
                    <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Google Ads & PPC Campaigns</div>
                </Link>
                <Link onClick={() => set_open_menu('')} href={'/develop/seo'} className={styles.mega_menu_item_section}>
                    <div className={styles.mega_menu_title} >SEO</div>
                    <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Organic Search (SEO) </div>
                    <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Paid Media</div>
                    <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Social Media </div>
                </Link>
                <Link href="/develop/cyber-security-services" className={styles.mega_menu_item_section}>
                    <div className={styles.mega_menu_title} >Cyber Security Services</div>
                    <div className={styles.mega_menu_content}>
                        Comprehensive protection against digital threats, including vulnerability assessment, threat detection, and data security solutions tailored to safeguard your business.
                    </div>
                </Link>

                {/* <Link href={'/develop/portal-development'} className={styles.mega_menu_item_section}>
                    <div className={styles.mega_menu_title} >Web Portal Development</div>
                    <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> B2B Portal Development</div>
                    <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Vendor Portal Development</div>
                    <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Customer Portal Development</div>
                </Link>
                <Link href={'/develop/for-startup'} className={styles.mega_menu_item_section}>
                    <div className={styles.mega_menu_title} >For Startups</div>
                    <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> MVP Development</div>
                    <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Discovery Workshops</div>
                    <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Virtual CTO</div>
                </Link>
                <Link href={'/develop/desktop-app-development'} className={styles.mega_menu_item_section}>
                    <div className={styles.mega_menu_title} >Desktop App Development</div>
                    <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Windows Development</div>
                    <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> macOS DEVELOPMENT</div>
                </Link>

                <div className={styles.mega_menu_item_section}>
                    <div className={styles.mega_menu_title} > Professional Services</div>
                    <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Software Project Rescue</div>
                    <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Support & Maintenance</div>
                    <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> QA & Testing Services</div>
                    <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> UI/UX Design</div>
                </div>
                <Link href={'/seo'} className={styles.mega_menu_item_section}>
                    <div className={styles.mega_menu_title} >SEO</div>
                    <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Organic Search (SEO) </div>
                    <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Paid Media</div>
                    <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Social Media </div>
                </Link>
                <div className={styles.mega_menu_item_section}>
                    <div className={styles.mega_menu_title} >Upcoming Services</div>
                    <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Content Marketing </div>
                    <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Analytics </div>
                    <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Additional Services</div>
                </div>
                <div className={styles.mega_menu_item_section}></div> */}
            </div>
        </div>

    );
}
