'use client'
import React from 'react'
import styles from './mobileNav.module.css'
import Link from 'next/link'
import { AiOutlineHome } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { IoBuildOutline } from "react-icons/io5";
import { IoBuild } from "react-icons/io5";
import { useState, useEffect } from 'react';
import { IoBriefcaseOutline } from "react-icons/io5";
import { IoBriefcase } from "react-icons/io5";
import { SiReact } from "react-icons/si";
import { SiSemanticuireact } from "react-icons/si";
import { usePathname } from 'next/navigation';

export default function MobileNav() {
    const path = usePathname()
    return (
        <div className={styles.mainContainer}>
            <div className={styles.navButtons}>
                {path === '/' ?
                    <Link href={'/'} className={styles.buttonActive}>
                        <AiFillHome />
                        <p className={styles.buttonText}>Home</p>
                    </Link>
                    :
                    <Link href={'/'} className={styles.button}>
                        <AiOutlineHome />
                        <p className={styles.buttonText}>Home</p>
                    </Link>}
                {path === '/services/developForm' ?
                    <Link href={'/services/developForm'} className={styles.buttonActive}>
                        <IoBuild />
                        <p className={styles.buttonText}>Develop</p>
                    </Link>
                    :
                    <Link href={'/services/developForm'} className={styles.button}>
                        <IoBuildOutline />
                        <p className={styles.buttonText}>Develop</p>
                    </Link>
                }
                {path === '/career' ?
                    <Link href={'/career'} className={styles.buttonActive}>
                        <IoBriefcase />
                        <p className={styles.buttonText}>Career</p>
                    </Link>
                    :
                    <Link href={'/career'} className={styles.button}>
                        <IoBriefcaseOutline />
                        <p className={styles.buttonText}>Career</p>
                    </Link>
                }
                {path === '/services' ?
                    <Link href={'/services'} className={styles.buttonActive}>
                        <SiSemanticuireact />
                        <p className={styles.buttonText}>Services</p>
                    </Link>
                    :
                    <Link href={'/services'} className={styles.button}>
                        <SiReact />
                        <p className={styles.buttonText}>Services</p>
                    </Link>
                }
            </div>
        </div>
    )
}
