import React from 'react'
import styles from './scrollBottom.module.css'
import { GoChevronDown } from "react-icons/go";
import { VscChevronDown } from "react-icons/vsc";



export default function Scrollbottom() {

    const gotoContact = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'end' })
        }
    }
    return (
        <div className={styles.scrollBottom} id={'floatOptions'} onClick={() => gotoContact('contact-us')}>
            <span className={styles.scrollIcon}>
                <VscChevronDown className={styles.icon_style} />
            </span>
        </div>
    )
}
