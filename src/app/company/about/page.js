'use client'
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../custom.global.module.css'
import image1 from '../../assets/images/about_us 001.webp';
import image2 from '../../assets/images/about_us 002.webp';
import { useRef } from 'react';
import useWindowSize from '@/app/home/product/useWindowSize';
import CompanyMenu from '../CompanyMenu';
import Footer from '@/app/home/footer';


export default function About() {

    const prevCountRef = useRef(0);
    const containerRef = useRef(null);
    const size = useWindowSize();
    const slide_down_1 = () => {
        const new_top = prevCountRef.current + size.height;
        let elm = document.querySelector('#main_content_div');
        elm.scrollTo({ top: new_top, behavior: "smooth" });
        prevCountRef.current = new_top;
    }

    return (
        <div className={styles.landing} ref={containerRef} id="main_content_div">
            <div className={styles.product_container}>
                <div className={styles.why_choose_us_container}>
                    <div className={styles.inner_technology_stack_container}>
                        <div className={`${styles.why_choose_us_content_section} ${styles.about_home}`}>
                            <div className={styles.technology_stack_title_section}>
                                <div className={styles.technology_stack_title}> About Us</div>
                            </div>

                            <div div className={styles.technology_stack_item_section}>
                                <p>Welcome to <Link href={'/'}><span className={styles.ae_custom_logo}>AE</span> </Link>  , where innovation meets excellence in the world of software development. With a commitment to transforming ideas into powerful solutions, we are your trusted partner in navigating the digital landscape. </p>
                                <p>At  <Link href={'/'}><span className={styles.ae_custom_logo}>AE</span> </Link>, we thrive on crafting cutting-edge software that not only meets but exceeds the evolving needs of businesses. Our team of seasoned developers, designers, and tech enthusiasts collaborate seamlessly to bring your visions to life. With a focus on user-centric design and the latest technologies, we take pride in delivering solutions that not only function flawlessly but also provide an unparalleled user experience.</p>
                                <p>Moreover, we understand the importance of fostering long-term relationships with our clients. By comprehensively grasping your challenges and objectives, we tailor our solutions to align perfectly with your unique requirements, ensuring optimal efficiency and effectiveness.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.left_side}>
                        <div className={styles.inner_section}>
                            <div className={styles.inner_section_title}>About Us</div>
                            <div className={styles.inner_section_sub_title}> Drawing from our extensive experience across diverse industries, including healthcare, finance, e-commerce, and more, we possess the expertise to tackle projects of any magnitude and complexity. Whether {`it's`} streamlining internal processes, enhancing customer engagement, or revolutionizing business models, <Link href={'/'}><span className={styles.ae_custom_logo}>AE</span>  </Link> is dedicated to helping you achieve your goals.</div>
                            <div className={styles.inner_section_sub_title}>What sets us apart is our passion for innovation. We {`don't`} just build software; we create solutions that drive your success. Whether {`you're`} a startup navigating uncharted territories or an established enterprise seeking digital transformation, our customized approach ensures that your software aligns perfectly with your goals.</div>
                            <div className={styles.developButtonContainer} style={{ marginTop: '20px' }}>
                                <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right_side}>
                        <Image className={styles.image_item} src={image1} unoptimized priority alt=''></Image>
                    </div>
                </div>
            </div>

            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.right_side}>
                        <Image className={styles.image_item} src={image2} unoptimized priority alt=''></Image>
                    </div>

                    <div className={styles.left_side}>
                        <div className={styles.inner_section}>
                            <div className={styles.inner_section_title}>About Us</div>
                            <div className={styles.inner_section_sub_title}> Transparency, integrity, and client satisfaction are the cornerstones of our philosophy. We believe in fostering long-term relationships by not just meeting expectations but surpassing them. Our journey is marked by successful collaborations, and we look forward to embarking on the next chapter with you.</div>
                            <div className={styles.inner_section_sub_title}> Furthermore, our commitment to staying at the forefront of innovation drives us to continuously explore emerging technologies and trends. </div>
                            <div className={styles.inner_section_sub_title}> In essence, at <Link href={'/'}><span className={styles.ae_custom_logo}>AE</span></Link>, we {`don't`} just provide software; we deliver transformative solutions that propel your business into the digital age. Partner with us and experience the seamless convergence of innovation and excellence every step of the way.</div>
                            <div className={styles.developButtonContainer} style={{ marginTop: '20px' }}>
                                <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.product_container} ${styles.MegaMenu_container}`}>
                {<CompanyMenu />}
            </div>
            <Footer />
        </div>
    )
}
