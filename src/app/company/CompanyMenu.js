
import Link from 'next/link';
import styles from '../develop/develop.module.css'

export default function CompanyMenu() {
    return (

        <div className={styles.mega_menu_item_container_services}>
            <div className={styles.mega_menu_item_container}>
                <Link href='/company/about' className={styles.mega_menu_item_section}>
                    <div className={styles.mega_menu_title} >About Us</div>
                    <div className={styles.mega_menu_content}> AE TechSphere, your dynamic portal for the latest in tech innovations. </div>
                </Link>
                <Link href={'/company/our-process'} className={styles.mega_menu_item_section}>
                    <div className={styles.mega_menu_title}>Our Process</div>
                    <div className={styles.mega_menu_content}>Embrace our proven process for crafting highly efficient and fully customized software systems.</div>
                </Link>
                <Link href={'/company/pricing'} className={styles.mega_menu_item_section}>
                    <div className={styles.mega_menu_title}>Pricing</div>
                    <div className={styles.mega_menu_content}>The comprehensive factors to consider when assessing development costs.</div>
                </Link>
                <Link href={'/company/how-we-work'} className={styles.mega_menu_item_section}>
                    <div className={styles.mega_menu_title}>How we work</div>
                    <div className={styles.mega_menu_content}>Select the perfect engagement model tailored to your needs from our four flexible options!</div>
                </Link>
                <Link href={'/technologies'} className={styles.mega_menu_item_section}>
                    <div className={styles.mega_menu_title}>Technologies</div>
                    <div className={styles.mega_menu_content}>We carefully choose tools and technologies based on the specific needs of every project</div>
                </Link>
            </div>
        </div>

    );
}
