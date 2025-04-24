/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styles from './home.module.css'

export default function TextSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const texts = [
        "WEB",
        "MOBILE",
        "DESKTOP",
        "APPLICATIONS",
        "OUTSOURCING",
        "SOFTWARE",
        "DEVELOPMENT",
        "PROFESSIONAL",
        "SERVICES",
        "SEO",
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => {
                return (prevIndex + 1) % texts.length;
            });
        }, 1500);

        return () => clearInterval(interval);
    }, [texts]);

    return (
        <div className={styles.text_slider_container}>
            <h2 className={styles.slide_text}> {texts[currentIndex]} </h2>
        </div>
    );
}