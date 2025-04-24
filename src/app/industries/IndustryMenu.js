
import Link from 'next/link';
import styles from '../develop/develop.module.css'
import { FaCircle } from "react-icons/fa";


export default function IndustryMenu() {
    return (

        <div className={styles.mega_menu_item_container_services}>
            <div className={styles.mega_menu_item_container}>
                <Link href="/industries/technology-software-development" className={styles.mega_menu_item_section}>
                    <div className={styles.mega_menu_title} >TECH</div>
                    <div className={styles.mega_menu_content}> Software tailored to your requirements to solve your technology challenges</div>
                </Link>
                <Link href="/industries/fintech-software-development" className={styles.mega_menu_item_section}>
                    <div className={styles.mega_menu_title} >FINANCE & FINTECH</div>
                    <div className={styles.mega_menu_content}>Web and mobile apps that truly represent fintech&apos;s progress and advancements</div>
                </Link>
                <Link href="/industries/utilities-software-development" className={styles.mega_menu_item_section}>
                    <div className={styles.mega_menu_title} >UTILITIES</div>
                    <div className={styles.mega_menu_content}>Customised software solutions for the highly asset-intensive utility sector</div>
                </Link>
                <Link href={"/industries/sports-software-development"} className={styles.mega_menu_item_section}>
                    <div className={styles.mega_menu_title} >SPORTS</div>
                    <div className={styles.mega_menu_content}>Bespoke sports software solutions including sports apps, websites, and more!</div>
                </Link>

                <Link href={'/industries/healthcare-software'} className={styles.mega_menu_item_section}>
                    <div className={styles.mega_menu_title} >HEALTHCARE</div>
                    <div className={styles.mega_menu_content}>Custom-built solutions that redefine healthcare and patient management</div>
                </Link>
                <Link href={'/industries/education-software-development'} className={styles.mega_menu_item_section}>
                    <div className={styles.mega_menu_title} >EDUCATION</div>
                    <div className={styles.mega_menu_content}> Bridging the gap between education and technology via custom software </div>
                </Link>
            </div>
        </div>

    );
}
