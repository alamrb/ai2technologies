import styles from '../../custom.global.module.css';
import Image from 'next/image';
import Link from 'next/link';
import image1 from '../../assets/images/18.webp';
import image2 from '../../assets/images/26.webp';
import image3 from '../../assets/images/16.webp';
import image4 from '../../assets/images/20.webp';
import IndustryMenu from '../IndustryMenu';
import Footer from '@/app/home/footer';

export default function SportsSoftwareDevelopment() {
    return (
        <div className={styles.landing} >
            <div className={styles.product_container}>
                <div className={styles.why_choose_us_container}>
                    <div className={styles.inner_technology_stack_container}>
                        <div className={styles.why_choose_us_content_section}>
                            <div className={styles.technology_stack_title_section} style={{ height: 'auto' }}>
                                <div className={styles.technology_stack_title}>   Sports software development </div>
                                {/* <div className={styles.sub_title}>   </div> */}
                            </div>

                            <div div className={styles.technology_stack_item_section}>
                                <p>Exceptional software solutions tailored for sports businesses, clubs, teams, athletes, and fans.</p>
                                <p>As a top software development company, {`we're`} well-versed in various professional and recreational sports and games.</p>
                                <p>Since our beginning, crafting custom sports apps and websites has been a central aspect of our sports software development services. We not only build state-of-the-art systems from the ground up but also excel in enhancing and revitalizing existing ones. Our services encompass UI/UX design, API development and integration, and ongoing support and maintenance.</p>
                                <p> If you need a dependable software partner to create feature-rich sports software, {`we're`} just a click away.</p>
                                <div className={styles.portal_container}>
                                    <div className={styles.portal_item}>Management Portals</div>
                                    <div className={styles.portal_item}>Booking Systems</div>
                                    <div className={styles.portal_item}>Fantasy League Platforms</div>
                                    <div className={styles.portal_item}> Mobile Games </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.main_container}`}>
                <div className={styles.main_template}>
                    <div className={styles.main_section}>
                        <div className={styles.section_container}>
                            <div className={styles.section_head}>
                                <p className={styles.main_title}>What We are offering</p>
                            </div>
                            <div className={`${styles.card_container} ${styles.core_values}`}>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}>Sport organizations management software</h3>
                                    <p> We offer robust web, mobile, and desktop software customized to meet the specific needs of your sports organization, league, team, or club.</p>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}>Fantasy Sports and Games</h3>
                                    <p>We create beautiful fantasy sports apps for mobile and web with easy-to-use design, smart analytics, live scoring, and in-app messaging.</p>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}>Membership and Licensing Portals</h3>
                                    <p> We develop web-based platforms and mobile apps to facilitate, manage, and monitor sports memberships, registrations, and licensing.</p>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}>Booking and Ticket Management Systems</h3>
                                    <p>We offer various software solutions to manage game ticket sales and streamline the booking process for sports venues and facilities.</p>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}>Score Reporting and Streaming Apps </h3>
                                    <p> Our web and mobile apps are built on robust architecture, featuring real-time functionalities like sporting event broadcasts and live scoreboards.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.main_container}`}>
                <div className={styles.main_template}>
                    <div className={styles.main_section}>
                        <div className={`${styles.section_container} ${styles.custom_software}`}>
                            <div className={styles.section_head}>
                                <p className={styles.main_title}> Custom software solutions for <br /> the sports industry stakeholders</p>
                            </div>
                            <div className={`${styles.card_container}`}>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}> Clubs and teams</h3>
                                    <p> We create official mobile apps and web portals for sports clubs and teams to engage with supporters and effectively manage club members.</p>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}> Professional Athletes</h3>
                                    <p>We develop mobile and web applications for professional athletes, enabling them to manage their personal brand and PR, as well as track fitness and performance.</p>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}> Sports Leagues </h3>
                                    <p> We provide a wide range of web and mobile solutions for league administration, member and community management, and fantasy league games.</p>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}> Sports Associations and Federations</h3>
                                    <p> We develop custom solutions for governing bodies in sports to manage leagues, teams, news, and promotional campaigns efficiently.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.product_container} ${styles.MegaMenu_container}`}>
                {<IndustryMenu />}
            </div>
            <Footer />
        </div>
    )
}








{/* <div className={styles.landing} >
            <div className={styles.product_container}>
                <div className={styles.technology_stack_container}>
                    <div className={styles.inner_technology_stack_container}>
                        <div className={styles.technology_stack_content_section}>
                            <div className={styles.technology_stack_title_section}>
                                <div className={styles.technology_stack_title}> Sports software development</div>
                                <div className={styles.technology_stack_sub_title}> Exceptional software solutions tailored for sports businesses, clubs, teams, athletes, and fans. </div>
                            </div>

                            <div div className={styles.technology_stack_item_section}>

                                <div className={styles.portal_container}>
                                    <div className={styles.portal_item}>Management Portals</div>
                                    <div className={styles.portal_item}>Booking Systems</div>
                                    <div className={styles.portal_item}>Fantasy League Platforms</div>
                                    <div className={styles.portal_item}> Mobile Games </div>
                                </div>

                                <div className={styles.btn_section}>
                                    <Link href='/contact' className={styles.btn_item}> Get started  </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.main_container}`}>
                <div className={styles.main_template}>
                    <div className={styles.main_section}>
                        <div className={styles.section_container}>
                            <p className={styles.main_title}>What We are offering</p>
                            <div className={`${styles.card_container} ${styles.core_values}`}>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}>Sport organizations management software</h3>
                                    <p> We offer robust web, mobile, and desktop software customized to meet the specific needs of your sports organization, league, team, or club.</p>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}>Fantasy Sports and Games</h3>
                                    <p>We create beautiful fantasy sports apps for mobile and web with easy-to-use design, smart analytics, live scoring, and in-app messaging.</p>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}>Membership and Licensing Portals</h3>
                                    <p> We develop web-based platforms and mobile apps to facilitate, manage, and monitor sports memberships, registrations, and licensing.</p>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}>Booking and Ticket Management Systems</h3>
                                    <p>We offer various software solutions to manage game ticket sales and streamline the booking process for sports venues and facilities.</p>
                                </div>
                                <div className={styles.card_view}>
                                    <h3 className={styles.card_title}>Score Reporting and Streaming Apps </h3>
                                    <p> Our web and mobile apps are built on robust architecture, featuring real-time functionalities like sporting event broadcasts and live scoreboards.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div> */}