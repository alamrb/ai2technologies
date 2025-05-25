/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { FaCircle } from "react-icons/fa";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi2";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { TfiAngleDown } from "react-icons/tfi";
import AE_logo_new from '../assets/AE-logo-new.png';
import styles from './header.module.css';

export default function Header() {
    const pathname = usePathname()
    const menuRef = useRef(null);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const closeMenuOutsideClick = (event) => {
        const isMobileMenuButton = event.target.closest(`.${styles.mobileMenuButton}`);
        if (menuRef.current && !menuRef.current.contains(event.target) && !isMobileMenuButton) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', closeMenuOutsideClick);

        return () => {
            document.removeEventListener('click', closeMenuOutsideClick);
        };
    }, []);

    const [currentPath, setCurrentPath] = useState('');
    useEffect(() => {
        setCurrentPath(window.location.pathname);
        const handleRouteChange = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', handleRouteChange);
        return () => {
            window.removeEventListener('popstate', handleRouteChange);
        };
    }, []);

    const gotoTop = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'end' })
        }
    }

    const [open_menu, set_open_menu] = useState('')
    const [expandedMenus, setExpandedMenus] = useState({});

    const handleExpand = (menuKey) => {
        setExpandedMenus(prevState => ({
            ...prevState,
            [menuKey]: !prevState[menuKey]
        }));
    };

    return (
        <header className={styles.main_header}>
            <div className={styles.head_container}>
                <div className={styles.menu_section}>
                    <Link href={'/'} className={styles.menu_logo}>
                        <Image src={AE_logo_new} alt="Logo" className={styles.Logo2} onClick={() => gotoTop('main_page')} />
                        {/* <span className={styles.logoText}>Anytime Everywhere</span> */}
                    </Link>
                    <div className={styles.menu_group}>
                        <div className={styles.menu_items}>
                            <div className={styles.LinkBox} >
                                {/* <Link href="/case-studies"> <div className={`${styles.menu_item_list} ${pathname.indexOf('/case-studies') > -1 ? styles.active : ''}`} > Case Studies</div></Link> */}
                                {/* <Link href="/career"><div className={`${styles.menu_item_list} ${pathname.indexOf('/career') > -1 ? styles.active : ''}`}>Career</div> </Link> */}
                                <Link href="/technologies"><div className={`${styles.menu_item_list} ${pathname.indexOf('/technologies') > -1 ? styles.active : ''}`} onMouseEnter={() => set_open_menu('technologies')}> Technologies <TfiAngleDown style={{ fontSize: '10px' }} /> </div></Link>
                                <Link href="/company"><div className={`${styles.menu_item_list} ${pathname.indexOf('/company') > -1 ? styles.active : ''}`} onMouseEnter={() => set_open_menu('company')} >Company <TfiAngleDown style={{ fontSize: '10px' }} /> </div> </Link>
                                <Link href="#"><div className={`${styles.menu_item_list} ${pathname.indexOf('/industries') > -1 ? styles.active : ''}`} onMouseEnter={() => set_open_menu('industries')} >Industries <TfiAngleDown style={{ fontSize: '10px' }} /> </div> </Link>
                                {/* <Link href="#"><div className={`${styles.menu_item_list} ${pathname.indexOf('/pricing') > -1 ? styles.active : ''}`} onMouseEnter={() => set_open_menu('pricing')} >Pricing <TfiAngleDown style={{ fontSize: '10px' }} /> </div> </Link> */}
                                <Link href="/services"><div className={`${styles.menu_item_list} ${pathname.indexOf('/services') > -1 ? styles.active : ''}`} onMouseEnter={() => set_open_menu('service')} > Services <TfiAngleDown style={{ fontSize: '10px' }} /></div></Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.menu_group}>
                        <div className={styles.menu_item_list}>
                            {/* <Link href="/services/developForm" className={`${styles.develop_button} ${pathname.indexOf('/developForm') > -1 ? styles.active : ''}`}> Start Developing </Link> */}
                        </div>
                    </div>


                    {/* Services Mega Menu */}
                    {open_menu === 'service' && (
                        <div className={`${styles.mega_menu_section} ${styles.full_height}`} onMouseLeave={() => set_open_menu('')} >
                            <div className={styles.mega_menu_close_icon}> <RxCross1 style={{ cursor: 'pointer' }} title='Close' onClick={() => set_open_menu('')} /> </div>
                            <div className={styles.mega_menu_item_container_services}>
                                <div className={styles.mega_menu_item_container}>
                                    <Link onClick={() => set_open_menu('')} href="/services/web-app-development" className={styles.mega_menu_item_section}>
                                        <div className={styles.mega_menu_title} >Web App Development</div>
                                        <div className={styles.mega_menu_content}> Tailored, cost-effective business applications and web portals designed for diverse industries.</div>
                                    </Link>
                                    {/* <Link onClick={() => set_open_menu('')} href="/services/mobile-app-development" className={styles.mega_menu_item_section}>
                                        <div className={styles.mega_menu_title} >Mobile App Development</div>
                                        <div className={styles.mega_menu_content}> Bespoke, user-friendly mobile applications crafted for Android, iOS, and cross-platform compatibility.</div>
                                    </Link> */}
                                    <Link onClick={() => set_open_menu('')} href="/services/cyber-security-services" className={styles.mega_menu_item_section}>
                                        <div className={styles.mega_menu_title} >Cyber Security Services</div>
                                        <div className={styles.mega_menu_content}>
                                            Comprehensive protection against digital threats, including vulnerability assessment, threat detection, and data security solutions tailored to safeguard your business.
                                        </div>
                                    </Link>
                                    {/* <Link onClick={() => set_open_menu('')} href={"/services/software-development-outsourcing"} className={styles.mega_menu_item_section}>
                                        <div className={styles.mega_menu_title} >Software Development Outsourcing</div>
                                        <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Dedicated Development Team</div>
                                        <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> IT Staff Augmentation</div>
                                    </Link> */}
                                </div>
                                <div className={styles.mega_menu_item_container}>
                                    <Link onClick={() => set_open_menu('')} href={'/services/digital-marketing-services'} className={styles.mega_menu_item_section}>
                                        <div className={styles.mega_menu_title} >Social Media Marketing Services</div>
                                        <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Social Media Marketing (SMM)</div>
                                        <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> SEO (Search Engine Optimization)</div>
                                        <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Google Ads & PPC Campaigns</div>
                                    </Link>
                                    {/* <Link onClick={() => set_open_menu('')} href={'/services/for-startup'} className={styles.mega_menu_item_section}>
                                        <div className={styles.mega_menu_title} >For Startups</div>
                                        <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> MVP Development</div>
                                        <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Discovery Workshops</div>
                                        <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Virtual CTO</div>
                                    </Link> */}
                                    {/* <Link onClick={() => set_open_menu('')} href={'/services/desktop-app-development'} className={styles.mega_menu_item_section}>
                                        <div className={styles.mega_menu_title} >Desktop App Development</div>
                                        <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Windows Development</div>
                                        <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> macOS DEVELOPMENT</div>
                                    </Link> */}
                                    {/* <div onClick={() => set_open_menu('')} className={styles.mega_menu_item_section}>
                                        <div className={styles.mega_menu_title} > Professional Services</div>
                                        <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Software Project Rescue</div>
                                        <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Support & Maintenance</div>
                                        <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> QA & Testing Services</div>
                                        <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> UI/UX Design</div>
                                    </div> */}
                                </div>
                                <div className={styles.mega_menu_item_container}>
                                    <Link onClick={() => set_open_menu('')} href={'/services/seo'} className={styles.mega_menu_item_section}>
                                        <div className={styles.mega_menu_title} >SEO</div>
                                        <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Organic Search (SEO) </div>
                                        <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Paid Media</div>
                                        <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Social Media </div>
                                    </Link>
                                    {/* <div onClick={() => set_open_menu('')} className={styles.mega_menu_item_section}>
                                        <div className={styles.mega_menu_title} >Upcoming Services</div>
                                        <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Content Marketing </div>
                                        <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Analytics </div>
                                        <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Additional Services</div>
                                    </div> */}
                                    {/* <div className={styles.mega_menu_item_section}></div>
                                    <div className={styles.mega_menu_item_section}></div> */}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Technologies Mega Menu */}
                    {open_menu === 'technologies' && (
                        <div className={styles.mega_menu_section} onMouseLeave={() => set_open_menu('')}>
                            <div className={styles.mega_menu_close_icon}> <RxCross1 style={{ cursor: 'pointer' }} title='Close' onClick={() => set_open_menu('')} /> </div>
                            <div className={styles.mega_menu_item_container_services}>
                                <div className={styles.mega_menu_item_container}>
                                    <Link href='/technologies/frontend-development' onClick={() => set_open_menu('')} className={styles.mega_menu_item_section}>
                                        <div className={styles.mega_menu_title} >Frontend Development</div>
                                        <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> React</div>
                                        <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Angular</div>
                                        <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Vue</div>
                                    </Link>
                                    <Link href='/services/web-app-development' onClick={() => set_open_menu('')} className={styles.mega_menu_item_section}>
                                        <div className={styles.mega_menu_title}>Backend Development</div>
                                        <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Node.js</div>
                                        <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Java</div>
                                        <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> PHP</div>
                                    </Link>
                                </div>
                                <div className={styles.mega_menu_item_container}>
                                    <Link href='/services/mobile-app-development' onClick={() => set_open_menu('')} className={styles.mega_menu_item_section}>
                                        <div className={styles.mega_menu_title}>Mobile App Development</div>
                                        <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> IOS</div>
                                        <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Android</div>
                                        <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Cross-Platform</div>
                                    </Link>
                                    <Link href='/technologies/cloud-development' onClick={() => set_open_menu('')} className={styles.mega_menu_item_section}>
                                        <div className={styles.mega_menu_title}>Cloud Development</div>
                                        <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Microsoft Azure</div>
                                        <div className={styles.mega_menu_content}><FaCircle className={styles.mega_menu_icon} /> Google Cloud Platform</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Company Mega Menu */}
                    {open_menu === 'company' && (
                        <div className={styles.mega_menu_section} onMouseLeave={() => set_open_menu('')} >
                            <div className={styles.mega_menu_close_icon}> <RxCross1 style={{ cursor: 'pointer' }} title='Close' onClick={() => set_open_menu('')} /> </div>
                            <div className={styles.mega_menu_item_container_services}>
                                <div className={styles.mega_menu_item_container}>
                                    <Link onClick={() => set_open_menu('')} href='/company/about' className={styles.mega_menu_item_section}>
                                        <div className={styles.mega_menu_title} >About Us</div>
                                        <div className={styles.mega_menu_content}> AE TechSphere, your dynamic portal for the latest in tech innovations. </div>
                                    </Link>
                                    <Link onClick={() => set_open_menu('')} href={'/company/how-we-work'} className={styles.mega_menu_item_section}>
                                        <div className={styles.mega_menu_title}>How we work</div>
                                        <div className={styles.mega_menu_content}>Select the perfect engagement model tailored to your needs from our four flexible options!</div>
                                    </Link>
                                </div>
                                <div className={styles.mega_menu_item_container}>
                                    <Link onClick={() => set_open_menu('')} href={'/company/our-process'} className={styles.mega_menu_item_section}>
                                        <div className={styles.mega_menu_title}>Our Process</div>
                                        <div className={styles.mega_menu_content}>Embrace our proven process for crafting highly efficient and fully customized software systems.</div>
                                    </Link>
                                    {/* <Link onClick={() => set_open_menu('')} href={'/technologies'} className={styles.mega_menu_item_section}>
                                        <div className={styles.mega_menu_title}>Technologies</div>
                                        <div className={styles.mega_menu_content}>We carefully choose tools and technologies based on the specific needs of every project</div>
                                    </Link> */}
                                </div>
                                <div className={styles.mega_menu_item_container}>
                                    {/* <Link onClick={() => set_open_menu('')} href={'/company/pricing'} className={styles.mega_menu_item_section}>
                                        <div className={styles.mega_menu_title}>Pricing</div>
                                        <div className={styles.mega_menu_content}>The comprehensive factors to consider when assessing development costs.</div>
                                    </Link>
                                    <Link onClick={() => set_open_menu('')} href={'/faqs'} className={styles.mega_menu_item_section}></Link> */}
                                    {/* <Link href={'/faqs'} className={styles.mega_menu_item_section}>
                                            <div className={styles.mega_menu_title}>FAQs</div>
                                            <div className={styles.mega_menu_content}> Answering some of the most common questions that you may have in mind </div>
                                        </Link> */}
                                    
                                    <Link onClick={() => set_open_menu('')} href={'/technologies'} className={styles.mega_menu_item_section}>
                                        <div className={styles.mega_menu_title}>Technologies</div>
                                        <div className={styles.mega_menu_content}>We carefully choose tools and technologies based on the specific needs of every project</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Industry Mega Menu */}
                    {open_menu === 'industries' && (
                        <div className={styles.mega_menu_section} onMouseLeave={() => set_open_menu('')} >
                            <div className={styles.mega_menu_close_icon}> <RxCross1 style={{ cursor: 'pointer' }} title='Close' onClick={() => set_open_menu('')} /> </div>
                            <div className={styles.mega_menu_item_container_services}>
                                <div className={styles.mega_menu_item_container}>

                                    <Link onClick={() => set_open_menu('')} href={"/industries/technology-software-development"} className={styles.mega_menu_item_section}>
                                        <div className={styles.mega_menu_title} >Tech</div>
                                        <div className={styles.mega_menu_content}> Software tailored to your requirements to solve your technology challenges</div>
                                    </Link>
                                    <Link onClick={() => set_open_menu('')} href={"/industries/sports-software-development"} className={styles.mega_menu_item_section}>
                                        <div className={styles.mega_menu_title}>Sports</div>
                                        <div className={styles.mega_menu_content}>Bespoke sports software solutions including sports apps, websites, and more!</div>
                                    </Link>
                                </div>
                                <div className={styles.mega_menu_item_container}>
                                    <Link onClick={() => set_open_menu('')} href={'/industries/fintech-software-development'} className={styles.mega_menu_item_section}>
                                        <div className={styles.mega_menu_title}>Finance & Fintech</div>
                                        <div className={styles.mega_menu_content}>Web and mobile apps that truly represent fintech&apos;s progress and advancements</div>
                                    </Link>
                                    <Link onClick={() => set_open_menu('')} href={'/industries/healthcare-software'} className={styles.mega_menu_item_section}>
                                        <div className={styles.mega_menu_title}>Healthcare</div>
                                        <div className={styles.mega_menu_content}>Custom-built solutions that redefine healthcare and patient management</div>
                                    </Link>
                                </div>
                                <div className={styles.mega_menu_item_container}>
                                    <Link onClick={() => set_open_menu('')} href={'/industries/utilities-software-development'} className={styles.mega_menu_item_section}>
                                        <div className={styles.mega_menu_title}>Utilities</div>
                                        <div className={styles.mega_menu_content}>Customised software solutions for the highly asset-intensive utility sector</div>
                                    </Link>
                                    <Link onClick={() => set_open_menu('')} href={'/industries/education-software-development'} className={styles.mega_menu_item_section}>
                                        <div className={styles.mega_menu_title}>Education</div>
                                        <div className={styles.mega_menu_content}> Bridging the gap between education and technology via custom software </div>
                                    </Link>
                                </div>

                            </div>
                        </div>

                    )}
                    {open_menu === 'pricing' && (
                        <div className={styles.mega_menu_section} onMouseLeave={() => set_open_menu('')} >
                            <div className={styles.mega_menu_close_icon}> <RxCross1 style={{ cursor: 'pointer' }} title='Close' onClick={() => set_open_menu('')} /> </div>
                            <div className={styles.mega_menu_item_container_services}>
                                <div className={styles.mega_menu_item_container}>

                                    <Link onClick={() => set_open_menu('')} href={"/pricing/social-media-management"} className={styles.mega_menu_item_section}>
                                        <div className={styles.mega_menu_title} >Social Media Managemnet Packages</div>
                                        <div className={styles.mega_menu_content}> Professional social media management tailored to grow your brand, engage your audience, and save you time.</div>
                                    </Link>
                                    <Link onClick={() => set_open_menu('')} href={'/pricing/cyber-security'} className={styles.mega_menu_item_section}>
                                        <div className={styles.mega_menu_title}>Cyber Security Service Packages</div>
                                        <div className={styles.mega_menu_content}>Robust cybersecurity solutions designed to protect your data, systems, and digital assets from evolving threats.</div>
                                    </Link>
                                </div>
                                <div className={styles.mega_menu_item_container}>
                                    <Link onClick={() => set_open_menu('')} href={"/pricing/SEO-management"} className={styles.mega_menu_item_section}>
                                        <div className={styles.mega_menu_title}>Seo Management Packages</div>
                                        <div className={styles.mega_menu_content}>Comprehensive SEO solutions designed to improve your search visibility, drive traffic, and grow your business online.</div>
                                    </Link>
                                </div>
                                <div className={styles.mega_menu_item_container}>
                                    <Link onClick={() => set_open_menu('')} href={'/pricing/web-development'} className={styles.mega_menu_item_section}>
                                        <div className={styles.mega_menu_title}>Web Development Service Packages</div>
                                        <div className={styles.mega_menu_content}>Custom web development packages tailored to build fast, responsive, and scalable websites for your business.</div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    )}

                    <div className={styles.mobileMenuButton} onClick={toggleMenu}>
                        <RxHamburgerMenu />
                    </div>
                    {isMenuOpen && (
                        <div ref={menuRef} className={styles.mobile_menu_group}>
                            <div className={styles.menu_mobile_container}>
                                <div className={styles.menu_title_mobile}>
                                    <Link href="/services" className={styles.menu_label} onClick={() => setIsMenuOpen(false)}>
                                        <div className={`${styles.menu_label} ${currentPath === '/services' ? styles.active : ''}`}> Services </div>
                                    </Link>
                                    <div className={styles.mobileNavInnerIcon} onClick={() => handleExpand('develop')}><HiOutlinePlus className={expandedMenus['develop'] ? styles.displayN : ''} /><HiOutlineMinus className={expandedMenus['develop'] ? styles.displayB : styles.displayN} /></div><br></br>
                                </div>
                                {expandedMenus['develop'] && (
                                    <div className={styles.MobileNavExpanded}>
                                        <Link href="/services/web-app-development" onClick={() => setIsMenuOpen(false)} className={styles.expanded_menu_option}>Web app development</Link>
                                        <Link href="/services/mobile-app-development" onClick={() => setIsMenuOpen(false)} className={styles.expanded_menu_option}>Mobile app development</Link>
                                        <Link href="/services/bespoke-application" onClick={() => setIsMenuOpen(false)} className={styles.expanded_menu_option}>Bespoke business application</Link>
                                        <Link href="/services/software-development-outsourcing" onClick={() => setIsMenuOpen(false)} className={styles.expanded_menu_option}>Software development outsourcing</Link>
                                        <Link href="/services/portal-development" onClick={() => setIsMenuOpen(false)} className={styles.expanded_menu_option}>Web portal development</Link>
                                        <Link href="/services/for-startup" onClick={() => setIsMenuOpen(false)} className={styles.expanded_menu_option}>For startups</Link>
                                        <Link href="/services/desktop-app-development" onClick={() => setIsMenuOpen(false)} className={styles.expanded_menu_option}>Desktop app development</Link>
                                        <Link href="/services/seo" onClick={() => setIsMenuOpen(false)} className={styles.expanded_menu_option}>Search engine optimization</Link>
                                    </div>
                                )}
                            </div>
                            <div className={styles.menu_mobile_container}>
                                <div className={styles.menu_title_mobile}>
                                    <Link href="/case-studies" onClick={() => setIsMenuOpen(false)} className={styles.menu_label}>
                                        <div className={`${styles.menu_label} ${currentPath === '/case-studies' ? styles.active : ''}`}>Case Studies</div>
                                    </Link>
                                    <Link href="/case-studies" className={styles.mobileNavInnerIcon} onClick={() => { handleExpand('caseStudy'); setIsMenuOpen(false) }}>
                                        <HiOutlinePlus style={{ opacity: '.3' }} />
                                    </Link>
                                </div>
                            </div>

                            <div className={styles.menu_mobile_container}>
                                <div className={styles.menu_title_mobile}>
                                    <Link href="/career" onClick={() => setIsMenuOpen(false)} className={styles.menu_label}>
                                        <div className={`${styles.menu_label} ${currentPath === '/career' ? styles.active : ''}`}>Career</div>
                                    </Link>
                                    <Link href="/career" className={styles.mobileNavInnerIcon} onClick={() => { handleExpand('career'); setIsMenuOpen(false) }}>
                                        <HiOutlinePlus style={{ opacity: '.3' }} />
                                    </Link>
                                </div>
                            </div>

                            <div className={styles.menu_mobile_container}>
                                <div className={styles.menu_title_mobile}>
                                    <Link href="/technologies" onClick={() => setIsMenuOpen(false)} className={styles.menu_label}>
                                        <div className={`${styles.menu_label} ${currentPath === '/technologies' ? styles.active : ''}`}>Technologies</div>
                                    </Link>
                                    <div className={styles.mobileNavInnerIcon} onClick={() => handleExpand('tech')}>
                                        <HiOutlinePlus className={expandedMenus['tech'] ? styles.displayN : ''} /><HiOutlineMinus className={expandedMenus['tech'] ? styles.displayB : styles.displayN} />
                                    </div>
                                </div>
                                {expandedMenus['tech'] && (
                                    <div className={styles.MobileNavExpanded}>
                                        <Link href="/technologies/frontend-development" onClick={() => setIsMenuOpen(false)} className={styles.expanded_menu_option}>Front-end Development</Link>
                                        <Link href="/services/mobile-app-development" onClick={() => setIsMenuOpen(false)} className={styles.expanded_menu_option}>Mobile App Development</Link>
                                        <Link href="/services/web-app-development" onClick={() => setIsMenuOpen(false)} className={styles.expanded_menu_option}>Backend Development</Link>
                                        <Link href="/technologies/cloud-development" onClick={() => setIsMenuOpen(false)} className={styles.expanded_menu_option}>Cloud Development</Link>

                                    </div>
                                )}
                            </div>

                            <div className={styles.menu_mobile_container}>
                                <div className={styles.menu_title_mobile}>
                                    <Link href="/company" onClick={() => setIsMenuOpen(false)} className={styles.menu_label}>
                                        <div className={`${styles.menu_label} ${currentPath === '/company' ? styles.active : ''}`}>Company</div>
                                    </Link>
                                    <div className={styles.mobileNavInnerIcon} onClick={() => handleExpand('company')}>
                                        <HiOutlinePlus className={expandedMenus['company'] ? styles.displayN : ''} /><HiOutlineMinus className={expandedMenus['company'] ? styles.displayB : styles.displayN} />
                                    </div>
                                </div>
                                {expandedMenus['company'] && (
                                    <div className={styles.MobileNavExpanded}>
                                        <Link href="/company/about" onClick={() => setIsMenuOpen(false)} className={styles.expanded_menu_option}>About Us</Link>
                                        <Link href="/company/our-process" onClick={() => setIsMenuOpen(false)} className={styles.expanded_menu_option}>Our Process</Link>
                                        <Link href="/company/pricing" onClick={() => setIsMenuOpen(false)} className={styles.expanded_menu_option}>Pricing</Link>
                                        <Link href="/company/how-we-work" onClick={() => setIsMenuOpen(false)} className={styles.expanded_menu_option}>How We Work</Link>
                                        <Link href="/technologies" onClick={() => setIsMenuOpen(false)} className={styles.expanded_menu_option}>Technologies</Link>
                                    </div>
                                )}
                            </div>

                            <div className={styles.menu_mobile_container}>
                                <div className={styles.menu_title_mobile}>
                                    <Link href="/#" className={styles.menu_label}>
                                        <div className={`${styles.menu_label} ${currentPath === '/#' ? styles.active : ''}`}>Industries</div>
                                    </Link>
                                    <div className={styles.mobileNavInnerIcon} onClick={() => handleExpand('industry')}>
                                        <HiOutlinePlus className={expandedMenus['industry'] ? styles.displayN : ''} /><HiOutlineMinus className={expandedMenus['industry'] ? styles.displayB : styles.displayN} />
                                    </div>
                                </div>
                                {expandedMenus['industry'] && (
                                    <div className={styles.MobileNavExpanded}>
                                        <Link href="/industries/technology-software-development" onClick={() => setIsMenuOpen(false)} className={styles.expanded_menu_option}>Tech</Link>
                                        <Link href="/industries/fintech-software-development" onClick={() => setIsMenuOpen(false)} className={styles.expanded_menu_option}>Finance & Fintech</Link>
                                        <Link href="/industries/utilities-software-development" onClick={() => setIsMenuOpen(false)} className={styles.expanded_menu_option}>Utilities</Link>
                                        <Link href="/industries/sports-software-development" onClick={() => setIsMenuOpen(false)} className={styles.expanded_menu_option}>Sports</Link>
                                        <Link href="/industries/healthcare-software" onClick={() => setIsMenuOpen(false)} className={styles.expanded_menu_option}>Healthcare</Link>
                                        <Link href="/industries/education-software-development" onClick={() => setIsMenuOpen(false)} className={styles.expanded_menu_option}>Education</Link>
                                    </div>
                                )}
                            </div>
                            <div className={styles.menu_mobile_container}>
                                <div className={styles.menu_title_mobile}>
                                    <Link href="/#" className={styles.menu_label}>
                                        <div className={`${styles.menu_label} ${currentPath === '/#' ? styles.active : ''}`} style={{ textAlign: 'end' }}>Professional Services</div>
                                    </Link>
                                    <div className={styles.mobileNavInnerIcon} onClick={() => handleExpand('profServices')}>
                                        <HiOutlinePlus className={expandedMenus['profServices'] ? styles.displayN : ''} /><HiOutlineMinus className={expandedMenus['profServices'] ? styles.displayB : styles.displayN} />
                                    </div>
                                </div>
                                {expandedMenus['profServices'] && (
                                    <div className={styles.MobileNavExpanded}>
                                        <Link href="/#" className={styles.expanded_menu_option}>Software Project Rescue</Link>
                                        <Link href="/#" className={styles.expanded_menu_option}>Support & Maintenance</Link>
                                        <Link href="/#" className={styles.expanded_menu_option}>QA & Testing Services</Link>
                                        <Link href="/#" className={styles.expanded_menu_option}>UI/UX Design</Link>
                                    </div>
                                )}
                            </div>
                            <div className={styles.menu_mobile_container}>
                                <div className={styles.menu_title_mobile}>
                                    <Link href="/#" className={styles.menu_label}>
                                        <div className={`${styles.menu_label} ${currentPath === '/#' ? styles.active : ''}`} style={{ textAlign: 'end' }}>Upcoming Services</div>
                                    </Link>
                                    <div className={styles.mobileNavInnerIcon} onClick={() => handleExpand('upcoming')}>
                                        <HiOutlinePlus className={expandedMenus['upcoming'] ? styles.displayN : ''} /><HiOutlineMinus className={expandedMenus['upcoming'] ? styles.displayB : styles.displayN} />
                                    </div>
                                </div>
                                {expandedMenus['upcoming'] && (
                                    <div className={styles.MobileNavExpanded}>
                                        <Link href="/#" className={styles.expanded_menu_option}>Content Marketing</Link>
                                        <Link href="/#" className={styles.expanded_menu_option}>Digital Marketing Analytics</Link>
                                        <Link href="/#" className={styles.expanded_menu_option}>Additional Services</Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}