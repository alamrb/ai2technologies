import React from 'react'
import styles from './scrollTop.module.css'
import { GoChevronDown } from "react-icons/go";
import { VscChevronUp } from "react-icons/vsc";



export default function ScrollTop() {

    // const goToTop = () => {
    //     window.scrollTo({ top: 0, behavior: 'smooth' });
    // };
    const gotoContact = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'end' })
        }
    }
    return (
        <div className={styles.scrollBottom} id={'floatOptions'} onClick={() => gotoContact('main_page')}>
            <span className={styles.scrollIcon}>
                <VscChevronUp className={styles.icon_style} />
            </span>
        </div>
    )
}
