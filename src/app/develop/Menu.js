
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
                    <Link href="/develop/mobile-app-development" className={styles.mega_menu_item_section}>
                        <div className={styles.mega_menu_title} >Mobile App Development</div>
                        <div className={styles.mega_menu_content}> Bespoke, user-friendly mobile applications crafted for Android, iOS, and cross-platform compatibility.</div>
                    </Link>
                    <Link href="/develop/bespoke-application" className={styles.mega_menu_item_section}>
                        <div className={styles.mega_menu_title} >Bespoke Business Applications</div>
                        <div className={styles.mega_menu_content}> Tailored web and mobile software solutions designed to optimize business processes for enhanced efficiency.</div>
                    </Link>
                    <Link href={"/develop/software-development-outsourcing"} className={styles.mega_menu_item_section}>
                        <div className={styles.mega_menu_title} >Software Development Outsourcing</div>
                        <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Dedicated Development Team</div>
                        <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> IT Staff Augmentation</div>
                    </Link>

                    <Link href={'/develop/portal-development'} className={styles.mega_menu_item_section}>
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
                    <div className={styles.mega_menu_item_section}></div>
                </div>
            </div>
        
    );
}
