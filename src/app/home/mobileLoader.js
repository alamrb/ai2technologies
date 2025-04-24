import Image from 'next/image';
import styles from './mobileLoader.module.css';
// import mobileLoader from '../assets/mobileLoader.png';
import mobileLoader from '../assets/platform_loader.png';
import mobileLoader_new from '../assets/AE-logo-new.png';
export default function Loader() {
    return (
        <div className={styles.main_mobile_loader} >
            <Image src={mobileLoader_new} height={100} alt='loader' className={styles.zoom_in_out_box} />
        </div >
    );
}