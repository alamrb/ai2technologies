'use client'
import styles from './career.module.css';
import Image from 'next/image';
import Jobs from './Jobs';
import image2 from '../assets/images/32.webp';
import Footer from '../home/footer';

export default function Career() {
    return (
        <div className={styles.landing}>
            <div className={styles.main_container} id='main_page'>
                <div className={styles.main_section}>
                    <div className={styles.main_left}>
                        <Image className={styles.main_left_img} src={image2} unoptimized priority alt=''></Image>
                    </div>
                    <div className={styles.main_right}>
                        <div className={styles.main_right_section}>
                            <div className={styles.main_section_title}>Join With Us</div>
                            <Jobs />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
