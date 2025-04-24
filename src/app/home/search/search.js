import React from 'react'
import styles from '../header.module.css'

export default function search(props) {
    return (
        <div className={styles.searchSuggestionPopup}>
            <div className={styles.searchSuggestionPopupInner} onMouseLeave={() => props.setMenu_popup('')}>
                <div className={styles.carting_head}>
                    <span className={styles.closeCart}>
                        <p>X</p>
                    </span>
                </div>
                <div className={styles.searchInputSection}>
                    <input type='text' placeholder='Search ...' autoFocus></input>
                    <span className={styles.searchButton}>
                        <i className="fa-thin fa-magnifying-glass"></i>
                    </span>
                </div>
            </div>
        </div>
    )
}
