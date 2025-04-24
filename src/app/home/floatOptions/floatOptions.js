/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import styles from './FloatOption.module.css'
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { isMobile } from 'react-device-detect';


export default function FloatOptions() {
    const [domain_data, set_domain_data] = useState(null)
    useEffect(()=> {
        if (typeof window !== undefined) {
            let d = localStorage.getItem('_domain') ? JSON.parse(localStorage.getItem('_domain')): null
            console.log(d)
            if (!domain_data) {
                set_domain_data(localStorage.getItem('_domain') ? JSON.parse(localStorage.getItem('_domain')): null)
            }
        }
    })



    return (
        !isMobile &&
        <div className={styles.floatOptions} id={'floatOptions'}>

            <div className={styles.floatItem} title="Google Play"> 
                <Link href={domain_data?.android_app_link || ''}> <FaGooglePlay /></Link> 
            </div>
            <div className={styles.floatItem} style={{ fontSize: '18px' }} title="App Store">
                <Link href={domain_data?.ios_app_link || ''}> <FaAppStoreIos /></Link>
            </div>
            <div className={styles.floatItem} title=""><BsWhatsapp /></div>
            <div className={styles.floatItem} title="Youtube">
                <Link href={domain_data?.youtube_link || ''}><IoLogoYoutube /></Link>
            </div>
            <div className={styles.floatItem} title="Facebook">
                <Link href={domain_data?.facebook_link || ''}><FaFacebook /></Link>
            </div>
            <div className={styles.floatItem} title="Twitter" >
                <Link href={domain_data?.twitter_link || ''}><FaXTwitter /></Link>
            </div>
            <div className={styles.floatItem} title="Linkdin" >
                <Link href={domain_data?.linked_in_link || ''}><FaLinkedin /></Link>
            </div>
            <div className={styles.floatItem} title="Instagram">
                <Link href={domain_data?.instagram_link || ''}><GrInstagram /></Link>
            </div>
        
        </div>
    )
}
