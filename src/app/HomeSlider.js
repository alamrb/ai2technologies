'use client'
import { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './home.module.css'
import Image from 'next/image'
import { IMAGE_URL } from '../Config/config'

import { get_domain_by_name } from '../Utils/method'

export default function HomeContent() {
    const [domain_data, setDomain_data] = useState(null)
    const settings = {
        autoplay: true,
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnDotsHover: false,
        pauseOnHover: false,
        className: styles.slick_slider,
        arrows: false,
    };

    const get_domain_data = async () => {
        try {
            let apires = await get_domain_by_name(`?name=${'platformae.uk'}`)
            console.log('get_domain_by_name:', apires.domain);
            localStorage.setItem('_domain', JSON.stringify(apires.domain))
            setDomain_data(apires.domain)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        get_domain_data()
    }, [])

    return (
        <Slider {...settings} className={styles.slider_section}>
            {domain_data?.homepage_product_preview.map((v, i) =>
                <div className={styles.mainImgaeContainer} key={'home_slide' + i}>
                    <Image className={styles.mainPageImage} src={IMAGE_URL + v.path} unoptimized fill sizes='100%' priority alt='' />
                </div>

            )}
            {/*<div className={styles.mainImgaeContainer}>
                <Image className={styles.mainPageImage} src={slider3} unoptimized priority alt='' />
            </div>
            <div className={styles.mainImgaeContainer}>
                <Image className={styles.mainPageImage} src={slider4} unoptimized priority alt='' />
            </div>
            <div className={styles.mainImgaeContainer}>
                <Image className={styles.mainPageImage} src={slider9} unoptimized priority alt='' />
            </div>
            <div className={styles.mainImgaeContainer}>
                <Image className={styles.mainPageImage} src={slider5} unoptimized priority alt='' />
            </div>
            <div className={styles.mainImgaeContainer}>
                <Image className={styles.mainPageImage} src={slider7} unoptimized priority alt='' />
            </div>
            <div className={styles.mainImgaeContainer}>
                <Image className={styles.mainPageImage} src={slider6} unoptimized priority alt='' />
            </div>
            <div className={styles.mainImgaeContainer}>
                <Image className={styles.mainPageImage} src={slider8} unoptimized priority alt='' />
            </div>

            */}
        </Slider>
    )
}