'use client'
import styles from '../../custom.global.module.css';
import Image from 'next/image';
import image1 from '../../assets/seo2.webp';
import image2 from '../../assets/seo1.webp';
import image3 from '../../assets/seo3.webp';
import image4 from '../../assets/seo4.webp';
import image5 from '../../assets/images/404.webp';
import { useRef } from 'react';
import useWindowSize from '../../home/product/useWindowSize';
import Footer from '../../home/footer';
import Menu from '../Menu';
import SeoPricing from '../../pricing/SEO-management/page';

export default function SEO() {

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
                        <div className={`${styles.why_choose_us_content_section} ${styles.our_seo}`}>
                            <div className={styles.technology_stack_title_section}>
                                <div className={styles.technology_stack_title}>  Our SEO Services </div>
                                <div className={styles.sub_title}>Your search & digital marketing experts</div>
                            </div>

                            <div div className={styles.technology_stack_item_section}>
                                <p>Every brand has unique requirements, which is why We have diverse teams of experts with specialized skills.</p>
                                <p> With a wealth of experience spanning search and digital marketing landscapes, our seasoned team has continuously refined their skills. Grounded in dedication, we strive to propel client success through a blend of innovation and expertise.</p>
                                <p>Our approach is data-driven, allowing us to analyze trends, track performance, and adapt strategies for maximum effectiveness. We stay abreast of the latest algorithm updates and industry best practices to ensure that your brand maintains a competitive edge in the ever-evolving digital landscape.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.product_container}`}>
                <div className={styles.main_template}>
                    <div className={styles.main_section}>
                        <div className={styles.section_container}>
                            <div className={styles.section_head}>
                                <p className={styles.main_title}> SEO SERVICES </p>
                            </div>
                            <div className={`${styles.card_container} ${styles.core_values}`}>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}> ORGANIC SEARCH (SEO) </h3>
                                    <ul className={styles.card_ul}>
                                        <li>Technical SEO</li>
                                        <li>Technical Audits</li>
                                        <li>Log File Analysis</li>
                                        <li>Local SEO</li>

                                        <li>Content</li>
                                        <li>User Focused Content</li>
                                    </ul>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}>Paid Media</h3>
                                    <ul className={styles.card_ul}>
                                        <li>Pay Per Click (PPC) Services</li>
                                        <li>Display Advertising</li>
                                        <li>Our Paid Media Platforms</li>
                                        <li>Marketplaces</li>
                                        <li>Affiliate Marketing</li>
                                        <li>Paid Social</li>
                                    </ul>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}>Content Marketing </h3>
                                    <ul className={styles.card_ul}>
                                        <li>Campaigns</li>
                                        <li>Digital PR</li>
                                        <li>Influencer Marketing</li>
                                    </ul>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}>Social Media </h3>
                                    <ul className={styles.card_ul}>
                                        <li>Social Media Audits</li>
                                        <li>Social Media Strategy</li>
                                        <li>Social Media Management</li>
                                        <li>Social Media Training</li>
                                    </ul>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}> Analytics </h3>
                                    <ul className={styles.card_ul}>
                                        <li>Google Marketing Platform (GMP)</li>
                                        <li>Conversion Rate Optimisation (CRO)</li>
                                        <li>Call Tracking</li>
                                        <li>Import Offline Conversions</li>
                                    </ul>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}> Additional Services </h3>
                                    <ul className={styles.card_ul}>
                                        <li>Design</li>
                                        <li>Development</li>
                                        <li>Email Marketing</li>
                                        <li>International Search and Digital Marketing</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.left_side}>
                        <div className={styles.inner_section}>
                            <div className={styles.inner_section_title}>Our organic search (SEO) services </div>
                            <div className={styles.inner_section_sub_title}>The search landscape has evolved considerably over time, with search engines constantly adapting to counter manipulative techniques. Despite these changes, the fundamental goals of SEO remain consistent, and enduring best practices continue to guide the industry.</div>
                            <div className={styles.inner_section_sub_title}>Our SEO service has continuously evolved, driven by a commitment to learning and development. This dedication extends to our staff, tools, and understanding of the industry. As a result, our clients stay ahead of the curve as the industry progresses. </div>
                            <div className={styles.developButtonContainer} style={{ marginTop: '20px' }}>
                                <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right_side}>
                        <Image className={styles.image_item} src={image1} unoptimized priority alt='' />
                    </div>
                </div>
            </div>
            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.right_side}>
                        <Image className={styles.image_item} src={image2} unoptimized priority alt='' />
                    </div>
                    <div className={styles.left_side}>
                        <div className={styles.inner_section}>
                            <div className={styles.inner_section_title}> Paid Media Solution</div>
                            <div className={styles.inner_section_sub_title}>Navigating the ever-expanding landscape of paid media can be daunting, with numerous platforms, ad formats, and supplementary features vying for attention. At our consultancy, we alleviate this complexity by closely collaborating with our clients and conducting thorough research to ensure optimal allocation of your budget. Our primary objective is to strategically invest your resources to effectively reach your target audience, ultimately enhancing your {`brand's`} profitability.</div>
                            <div className={styles.inner_section_sub_title}>Whether your goals revolve around enhancing brand visibility, acquiring new followers, boosting sales, driving downloads, or increasing submissions, we are committed to maximizing the ROI of your budget. </div>
                            <div className={styles.developButtonContainer} style={{ marginTop: '20px' }}>
                                <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className={styles.product_container}>
                <div className={styles.product_item}>

                    <div className={styles.left_side}>
                        <div className={styles.inner_section}>
                            <div className={styles.inner_section_title}> Content Marketing </div>
                            <div className={styles.inner_section_sub_title}>At our agency, content marketing is our forte, and {`we've`} earned accolades for it. Our approach is customized to cultivate trust with your current and potential customers, increase brand awareness, and position you as an authority in your field. This lays the groundwork for lasting business relationships.</div>
                            <div className={styles.inner_section_sub_title}> In a crowded online marketplace, differentiation is key. {`That's`} why we specialize in crafting bespoke content marketing strategies that resonate with your audience, helping your brand stand out and improving your search engine visibility. </div>
                            <div className={styles.developButtonContainer} style={{ marginTop: '20px' }}>
                                <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.right_side}>
                        <Image className={styles.image_item} src={image3} unoptimized priority alt='' />
                    </div>

                </div>
            </div>

            <div className={styles.product_container}>
                <div className={styles.product_item}>

                    <div className={styles.right_side}>
                        <Image className={styles.image_item} src={image4} unoptimized priority alt='' />
                    </div>

                    <div className={styles.left_side}>
                        <div className={styles.inner_section}>
                            <div className={styles.inner_section_title}>Social Media  </div>
                            <div className={styles.inner_section_sub_title}>In the world of social media, knowing your audience is paramount. {`It's`} not enough to guess who they are; you need concrete data to guide your strategy. {`That's`} where we come in. Our service begins by diving deep into your audience demographics, interests, and conversations. Armed with this invaluable information, we tailor a strategy that speaks directly to your {`audience's`} preferences and behaviors. </div>
                            <div className={styles.inner_section_sub_title}>From strategic planning and content calendars to flawless execution, {`we're`} here to help you navigate the ever-changing landscape of social media with precision and purpose.</div>
                            <div className={styles.developButtonContainer} style={{ marginTop: '20px' }}>
                                <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.product_container}>
                <div className={styles.product_item}>
                    <div className={styles.left_side}>
                        <div className={styles.inner_section}>
                            <div className={styles.inner_section_title}>Analytics </div>
                            <div className={styles.inner_section_sub_title}>Our digital analytics service has evolved since the inception of Google Analytics, emphasizing a fundamental understanding: every business requires a tailored solution. By meticulously gathering relevant data from various platforms and leveraging an array of analytical tools coupled with years of expertise, we offer personalized insights and actionable reporting for stakeholders at all levels.</div>
                            <div className={styles.inner_section_sub_title}> We recognize that not every business necessitates extensive investment in web analytics to achieve comprehensive multi-channel tracking. Instead, we continuously refine tracking methodologies to enhance marketing ROI.</div>
                            <div className={styles.developButtonContainer} style={{ marginTop: '20px' }}>
                                <div className={styles.developButtonBottom} onClick={slide_down_1}>Learn More</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.right_side}>
                        <Image className={styles.image_item} src={image5} unoptimized priority alt='' />
                    </div>

                </div>
            </div>
            <SeoPricing />
            <div className={`${styles.product_container} ${styles.MegaMenu_container}`}>
                {<Menu />}
            </div>
            <Footer />
        </div>
    )
}