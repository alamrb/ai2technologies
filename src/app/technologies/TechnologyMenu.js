
import Link from 'next/link';
import styles from '../services/develop.module.css'
import { FaCircle } from "react-icons/fa";


export default function TechnologyMenu() {
    return (

        <div className={styles.mega_menu_item_container_services}>
            <div className={styles.mega_menu_item_container}>
                <Link href='/technologies/frontend-development' className={styles.mega_menu_item_section}>
                    <div className={styles.mega_menu_title} >Frontend Development</div>
                    <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> React</div>
                    <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Angular</div>
                    <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Vue</div>
                </Link>
                <Link href='/services/web-app-development' className={styles.mega_menu_item_section}>
                    <div className={styles.mega_menu_title}>Backend Development</div>
                    <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Node.js</div>
                    <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Java</div>
                    <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> PHP</div>
                </Link>
                <Link href='/services/mobile-app-development' className={styles.mega_menu_item_section}>
                    <div className={styles.mega_menu_title}>Mobile App Development</div>
                    <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> IOS</div>
                    <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Android</div>
                    <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Cross-Platform</div>
                </Link>
                <Link href='/technologies/cloud-development' className={styles.mega_menu_item_section}>
                    <div className={styles.mega_menu_title}>Cloud Development</div>
                    <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Microsoft Azure</div>
                    <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Google Cloud Platform</div>
                </Link>
            </div>
        </div>

    );
}
