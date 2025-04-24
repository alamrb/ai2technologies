'use client'
import styles from './footer.module.css'
import develop2 from '../assets/images/develop2.jpg';
import mapImg from '../assets/images/London_Map.png';
import { useEffect, useState } from 'react';
import { get_single_forms, submitPublicForm } from '@/Utils/method';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { toast } from 'react-hot-toast';
import { IoCloseOutline } from "react-icons/io5";
import Link from 'next/link';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

export default function Footer() {
    const path = usePathname()
    const [formTitle, setFormTitle] = useState('')
    const [loader, setLoader] = useState(false)
    const [DynamicFields, setDynamicFields] = useState([])
    const [thankYouText, setThankYouText] = useState(false)

    const isEmpty = (value) => {
        if (value !== '') {
            return false;
        } else {
            return true
        }
    }

    const getSingleForm = async () => {
        let data = await get_single_forms({ form_id: '2401030002' });
        if (data.success) {
            setFormTitle(data.data.form_title)
            setDynamicFields(data.data.dynamic_fields.sort((a, b) => a.sl > b.sl ? 1 : -1))
        }
    }

    useEffect(() => {
        getSingleForm()
    }, [])

    const saveForm = async (type) => {
        if (!isEmpty(DynamicFields[0].value)) {
            let fields = []
            for (let i = 0; i < DynamicFields.length; i++) {
                let obj = DynamicFields[i]
                if (obj.label !== '' && obj.type !== '') {
                    obj['name'] = obj.label.replace(/ /g, '_').toLowerCase();
                    delete obj['instance_image'];
                    if (obj.type === 'select') {
                        let options = []
                        for (let j = 0; j < obj.options.length; j++) {
                            const option = obj.options[j];
                            if (option.label !== '' && option.value !== '') {
                                options.push(option)
                            }
                        }
                        obj['options'] = options;
                        fields.push(obj)
                    } else {
                        fields.push(obj)
                    }
                }
            }
            try {
                setLoader(true)
                let publicdata = await submitPublicForm({
                    form_id: '2401030002',
                    form_title: formTitle,
                    dynamic_fields: JSON.stringify(fields.map(v => { return ({ ...v, instance_image: '' }) }))

                });
                setThankYouText(true);

                console.log(123, publicdata)

                toast.success("Thank you for reaching out! We've received your message and will get back to you as soon as possible.", {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                });
                setLoader(false)
            } catch (error) {
                console.log(error)
                toast.error(error.error_description, {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                });
                setLoader(false)
            }
        }
    }

    const [changeCount, setChangeCount] = useState(0);

    function isValidEmail(email) {
        // Regular expression for a basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleFieldsData = async (e, fi, oi, type) => {
        setChangeCount((v) => (v + 1));
        const value = oi.type === 'phone' ? e : e.target.value;
        if (type === 'value') {
            let status = false;
            if (!isEmpty(value)) {
                if (oi.type == 'email') {
                    if (isValidEmail(value)) {
                        status = true;
                    }
                } else {
                    status = true;
                }
            }
            setDynamicFields([...DynamicFields.map((v, j) => fi === j ? { ...v, value: value } : v)])
        }

    }
    if (path !== '/privacy-policy' && path !== '/terms-and-conditions') {
        return (
            <div className={styles.main_container} id='contact-us'>
                <div className={styles.main_section}>
                    <div className={styles.main_left}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2462.5973665349684!2d-0.43309552410729923!3d51.88656178293484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487648f894c989bb%3A0x8d0ad8c67b1147fe!2s176%20Dunstable%20Rd%2C%20Luton%20LU4%208JJ%2C%20UK!5e0!3m2!1sen!2sbd!4v1709545200494!5m2!1sen!2sbd" className={styles.map_style}></iframe>
                    </div>
                    <div className={styles.main_right}>
                        <div className={styles.main_right_section}>
                            {thankYouText && <div className={styles.thankYouText}>Thank you for reaching out! We have received your message and will get back to you as soon as possible.</div>}
                            <div className={styles.main_section_title}>Contact Us</div>
                            <div className={styles.main_section_content}>
                                <div className={styles.footer_form}>
                                    {DynamicFields.map((v, i) =>
                                        (v.type !== 'radio' && v.type !== 'file' && v.type !== 'select' && v.type !== 'textarea' && v.type !== 'phone') ?
                                            <div className={styles.footer_form_section} key={i}>
                                                <label>{v.label}: *</label> <br />
                                                <input type={v.type} className={styles.inputs} placeholder={v.placeholder} onChange={(e) => handleFieldsData(e, i, v, 'value')} value={v.value} />
                                            </div>
                                            : v.type === 'phone' ?
                                                <div className={styles.footer_form_section} key={i}>
                                                    <label>{v.label}: *</label> <br />
                                                    <PhoneInput
                                                        country={'gb'}
                                                        inputProps={{
                                                            required: true,
                                                            autoFocus: false
                                                        }}
                                                        inputClass={styles.phone_inputs}
                                                        buttonClass={styles.phone_btn}
                                                        enableSearch
                                                        placeholder={v.placeholder}
                                                        value={v.value}
                                                        onChange={phone => handleFieldsData(phone, i, v, 'value')}
                                                    />
                                                </div>
                                                : v.type === 'textarea' ?
                                                    <div className={styles.footer_form_section} key={i}>
                                                        <label>{v.label}: *</label> <br />
                                                        <textarea className={styles.text_area} placeholder={v.placeholder} onChange={(e) => handleFieldsData(e, i, v, 'value')} value={v.value} />
                                                    </div>
                                                    : null
                                    )}
                                    {/* <div className={styles.footer_form_section}>
                                        <label>Name: *</label> <br />
                                        <input type="text" id="name" required />
                                    </div>

                                    <div className={styles.footer_form_section}>
                                        <label>Phone: *</label> <br />
                                        <input type="text" id="name" required />
                                    </div> */}
                                    <div className={styles.footer_form_section}>
                                        <div className={styles.footer_form_submit} onClick={saveForm}>
                                            <button onClick={saveForm}>Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.footer_copyright}>
                            <Link href="/terms-and-conditions" className={styles.footer_copyright_item} title='Terms & Conditions'>Terms & Conditions</Link>
                            <Link href="/terms-and-conditions" className={classNames(styles.footer_copyright_item_desktop, styles.footer_copyright_item)} title='Terms & Conditions'>T & C</Link>
                            <Link href="/privacy-policy" className={styles.footer_copyright_item} title='Privacy & Policy'>Privacy</Link>
                            {/* <Link href="tel:+447404304333" className={styles.footer_copyright_item} title='Call'>+44 74 043 043 33</Link> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (<></>)
    }

}

