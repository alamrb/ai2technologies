/* eslint-disable react-hooks/exhaustive-deps */
import { IMAGE_URL } from '@/Config/config';
import { get_single_forms, submitPublicForm, upload_file_application } from '@/Utils/method';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaCloudUploadAlt } from "react-icons/fa";
import { GoCheck } from "react-icons/go";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from '../../career/AddSubCategory.module.css';
import Loader from '../../home/loader';

export default function Develop(props) {

    const params = useParams()
    const router = useRouter()
    const [activeImage, setActiveImage] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);
    const [isSubmitValid, setisSubmitValid] = useState(true);
    const [nextBtnValid, setnextBtnValid] = useState(false);
    const [preview, setPreview] = useState(false)
    const [ThankYouPage, setThankYouPage] = useState(false)
    const [pdfPreview, setPdfPreview] = useState(null);
    const [formTitle, setFormTitle] = useState('')
    const [loader, setLoader] = useState(true)
    const [up_loader, setUp_loader] = useState(false)
    const [DynamicFields, setDynamicFields] = useState([])
    const [imgSrc, setImgSrc] = useState(null);
    const [thankYouText, setThankYouText] = useState(false)
    const [changeCount, setChangeCount] = useState(0);
    const [form_id, setFormId] = useState('');
    const [up_loading, setUp_loading] = useState(false);
    const [edit_state, setEdit_state] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);

    const isEmpty = (value) => {
        if (value !== '') {
            return false;
        } else {
            return true
        }
    }

    useEffect(() => {
        let status = true;
        for (let i of DynamicFields) {
            if (isEmpty(i.value)) {
                status = false;
            } else {
                if (i.type == 'email') {
                    if (!isValidEmail(i.value)) {
                        status = false;
                    }
                }
            }
        }
        setisSubmitValid(status);
    }, [changeCount])


    const customSort = (a, b) => {
        // Check if id of one object matches parent_id of another object
        if (a.id === b.parent_id && a.value === b.condition) return -1;
        if (a.parent_id === b.id && a.condition === b.value) return 1;

        // If the condition above is not met, sort based on id
        return a.id - b.id;
    };

    const getSingleForm = async (form_id) => {
        try {
            let data = await get_single_forms({ form_id: form_id });
            console.log("🚀 ~ getSingleForm ~ data:", data)
            if (data.success) {
                setFormId(form_id)
                if (data.data.dynamic_fields.length > 0) {
                    if (data.data.dynamic_fields.sort((a, b) => a.sl > b.sl ? 1 : -1)[0].image) {
                        setActiveImage(data.data.dynamic_fields.sort((a, b) => a.sl > b.sl ? 1 : -1)[0].image);
                    }
                }
                setFormTitle(data.data.form_title)
                let last_data = data.data.dynamic_fields.sort((a, b) => a.sl > b.sl ? 1 : -1)
                setDynamicFields(last_data.sort(customSort))
                setLoader(false);
            }
        } catch (error) {
            setLoader(false);
            console.log("🚀 ~ getSingleForm ~ error:", error)
        }

    }

    useEffect(() => {
        console.log(DynamicFields);
    }, [DynamicFields])

    useEffect(() => {
        getSingleForm('2504270020')
        // getSingleForm(props.data)
    }, [])

    function editItem(idx) {
        if (DynamicFields[idx]?.type === 'multiple_select' && DynamicFields[idx]?.value.length > 0) {
            console.log(DynamicFields[idx]?.options);
            setSelectedItems(DynamicFields[idx]?.options.filter(f => DynamicFields[idx].value.indexOf(f.value) > -1))
        } else {
            setSelectedItems([])
        }
        setEdit_state(idx)
    }
    const conditionalFields = (idx) => {
        if (DynamicFields[idx]?.parent_id) {
            if ((DynamicFields[idx]?.parent_id === DynamicFields[idx - 1]?.id && DynamicFields[idx - 1]?.value.indexOf(DynamicFields[idx]?.condition) > -1)) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }

    function prevHandler(idx) {
        let isConditional = conditionalFields(idx)
        let indx = isConditional ? idx : idx - 1;
        setActiveIndex(indx);
        if (DynamicFields[indx]?.type === 'multiple_select' && DynamicFields[indx]?.value.length > 0) {
            console.log(DynamicFields[indx]?.options);
            setSelectedItems(DynamicFields[indx]?.options.filter(f => DynamicFields[indx].value.indexOf(f.value) > -1))
        } else {
            setSelectedItems([])
        }
    }


    function nextHandler(idx) {

        let isConditional = conditionalFields(idx)
        let indx = isConditional ? idx : idx + 1;
        setActiveIndex(indx);

        if (!isEmpty(DynamicFields[idx - 1]?.value)) {
            if (DynamicFields[indx]?.image) {
                setActiveImage(DynamicFields[indx]?.image)
            }
            if (DynamicFields[indx]?.type === 'multiple_select' && DynamicFields[indx]?.value.length > 0) {
                console.log(DynamicFields[indx]?.options);
                setSelectedItems(DynamicFields[indx]?.options.filter(f => DynamicFields[indx].value.indexOf(f.value) > -1))
            } else {
                setSelectedItems([])
            }
        } else {
            toast.error('Please enter valid data', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
        }
    }

    const saveForm = async (type) => {
        if (type === 'preview') {
            setPreview(true);
        } else {
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
                        ref: params.form_id,
                        form_id: form_id,
                        form_title: formTitle,
                        dynamic_fields: JSON.stringify(fields.map(v => { return ({ ...v, instance_image: '' }) }))
                    });
                    console.log(123, publicdata)
                    setPreview(false)
                    setThankYouPage(true);

                    toast.success('Form Submitted successfully', {
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
    }

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
            // setnextBtnValid(status)
            setDynamicFields([...DynamicFields.map((v, j) => fi === j ? { ...v, value: value } : v)])

        } else if (type === 'file') {
            const file = e.target.files[0];
            setUp_loading(true)
            let data = new FormData();
            data.append('image', file)
            let apires = await upload_file_application(data);
            if (apires.success) {
                // setnextBtnValid(true)
                if (file && file.type === 'application/pdf') {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        console.log(78, reader.result);
                        setPdfPreview(reader.result)
                        setDynamicFields([...DynamicFields.map((v, j) => fi === j ? { ...v, value: apires.data, instance_image: reader.result } : v)])
                    };

                    reader.readAsDataURL(file);
                } else {
                    setDynamicFields([...DynamicFields.map((v, j) => fi === j ? { ...v, value: apires.data, instance_image: URL.createObjectURL(file) } : v)])
                }
            } else {
                alert('Something wrong try again')
            }
            setUp_loading(false)
        }
    }


    const handleSelect = (e, fi, oi, v, type) => {
        if (!type) {
            console.log("🚀 ~ handleSelect ~ selectedItems:", selectedItems)
            const itemIndex = selectedItems.findIndex(item => item.value === v.value);
            let ext_selectedItem = []
            if (itemIndex !== -1) {
                // Item is checked, so remove it from selectedItems
                const newSelectedItems = [...selectedItems];
                newSelectedItems.splice(itemIndex, 1);
                ext_selectedItem = [...newSelectedItems]
                setSelectedItems(newSelectedItems);
            } else {
                // Item is unchecked, so add it to selectedItems
                const selectedItem = DynamicFields[fi]?.options.find(item => item.value === v.value);
                ext_selectedItem = [...selectedItems, selectedItem];
                setSelectedItems(ext_selectedItem);
            }
            let value = []
            // let status = false
            console.log("🚀 ~ handleSelect ~ ext_selectedItem:", ext_selectedItem)
            if (ext_selectedItem.length > 0) {
                for (const ie of ext_selectedItem) {
                    console.log("🚀 ~ handleSelect ~ ie:", ie)

                    value.push(ie?.value)
                }
                // status = true
            } else {
                // status = false
            }
            // setnextBtnValid(status)
            setDynamicFields([...DynamicFields.map((m, j) => fi === j ? { ...m, value: value } : m)])
        } else {
            let extra_value = e.target.value;
            console.log("🚀 ~ handleSelect ~ extra_value:", extra_value)
            if (oi?.value.indexOf('Other') > -1) {
                setDynamicFields([...DynamicFields.map((m, j) => fi === j ? { ...m, options: [...m.options.map(op => op.id === v.id ? { ...op, extra_input_value: extra_value } : op)] } : m)])
            }
        }
    }

    useEffect(() => {
        console.log(320, DynamicFields);
    }, [DynamicFields])


    const [view_image, setViewImage] = useState('')

    function imageHandler(i, data, type) {
        if (type === 'remove') {
            // setnextBtnValid(false)
            setDynamicFields([...DynamicFields.map((v, j) => i === j ? { ...v, value: '', instance_image: '' } : v)])
            setPdfPreview(null)
        } else {
            setViewImage(IMAGE_URL + data.value);
        }
    }

    const checkButtonStatus = (idx) => {
        console.log(idx);
        console.log(DynamicFields[idx]);
        if (idx === '') return true;
        let state = false;
        if (!DynamicFields[idx]?.is_required) {
            state = true
        } else {
            if (!isEmpty(DynamicFields[idx]?.value)) {
                state = true
            } else {
                state = false
            }
        }

        console.log("🚀 ~ checkButtonStatus ~ state:", state)
        return state;
    }

    return (
        <div className={styles.landing}>
            <div className={styles.main_container} id='main_page'>
                {loader ?
                    <Loader />
                    :
                    <div className={styles.main_template}>
                        {view_image &&
                            <div className={styles.image_viewer} style={{ position: 'relative' }}>
                                <Image src={view_image} fill sizes='100%' alt="view" />
                                <span onClick={() => setViewImage('')}>X</span>
                            </div>}
                        {preview ?
                            <div className={styles.preview_section}>
                                <div className={styles.preview_header}>Preview</div>
                                <div className={styles.info_container}>
                                    <div className={styles.all_info}>
                                        {DynamicFields.map((v, i) =>
                                            <div className={styles.info_item} key={'info_' + i}>
                                                <div className={styles.info_item_label}> <p className={styles.info_label}> {v.label} </p> </div>
                                                <div className={styles.info_item_value}>
                                                    {edit_state !== i && (v.type !== 'file' && v.type !== 'link' ?
                                                        (v.type == 'multiple_select' && v.value.length > 0) ? v.value.toString() : v.value
                                                        :
                                                        <Link href={v.type === 'file' ? IMAGE_URL + v.value : v.value}>{v.type === 'file' ? v.value : v.value}</Link>
                                                    )}
                                                    {edit_state === i &&
                                                        <div className={styles.input_group}>
                                                            {(v.type !== 'radio' && v.type !== 'file' && v.type !== 'select' && v.type !== 'textarea' && v.type !== 'phone' && v.type !== 'multiple_select') &&
                                                                <input type={v.type} className={styles.inputs} placeholder={v.placeholder} onChange={(e) => handleFieldsData(e, i, v, 'value')} value={v.value} />
                                                            }
                                                            {v.type === 'phone' &&
                                                                <PhoneInput
                                                                    country={'gb'}
                                                                    inputProps={{
                                                                        required: true,
                                                                        autoFocus: true
                                                                    }}
                                                                    inputClass={styles.phone_inputs}
                                                                    buttonClass={styles.phone_btn}
                                                                    enableSearch
                                                                    value={v.value}
                                                                    onChange={phone => handleFieldsData(phone, i, v, 'value')}
                                                                />
                                                            }
                                                            {v.type === 'textarea' &&
                                                                <textarea className={styles.text_area} placeholder={v.placeholder} onChange={(e) => handleFieldsData(e, i, v, 'value')} value={v.value} />
                                                            }
                                                            {(v.type === 'select' || v.type === 'radio') &&
                                                                <div className={styles.multiSelect_cotainer}>
                                                                    {v.options.map((vi, ii) =>
                                                                        <label htmlFor={`${vi.id}_${ii}`} className={styles.multi_option} key={`${vi.id}_${ii}`}>
                                                                            <div className={styles.custom_checkbox}>
                                                                                <input className={styles.input_checkbox} type="radio" name={'radiolabel'} id={`${vi.id}_${ii}`} value={vi.value} onChange={(e) => handleFieldsData(e, i, v, 'value')} checked={v.value === vi.value} />
                                                                                <div className={styles.check_box_design}>
                                                                                    <span className={styles.check_box_check}><GoCheck /></span>
                                                                                    <span className={styles.check_box_uncheck}></span>
                                                                                </div>
                                                                                {/*
                                                                                <svg viewBox="0 0 35.6 35.6">
                                                                                    <circle className={styles.background} cx="17.8" cy="17.8" r="17.8"></circle>
                                                                                    <circle className={styles.stroke} cx="17.8" cy="17.8" r="14.37"></circle>
                                                                                    <polyline className={styles.check} points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                                                                                </svg>
                                                                                */}
                                                                            </div>
                                                                            <span className={styles.multi_option_label}>
                                                                                <span>{vi.label}</span>
                                                                                {vi.extra_input === 'yes' && <input className={styles.other_input} onChange={(e) => handleSelect(e, i, v, vi, 'extra_input')} value={vi.extra_input_value} type='text' placeholder={vi.value} autoFocus={v.value.indexOf('Other') > -1} />}
                                                                            </span>
                                                                        </label>
                                                                    )}
                                                                </div>
                                                            }
                                                            {v.type === 'multiple_select' &&
                                                                <div className={styles.multiSelect_cotainer}>
                                                                    {v.options.map((vi, ii) =>
                                                                        <label htmlFor={`${vi.id}_${ii}`} className={styles.multi_option} key={`${vi.id}_${ii}`}>
                                                                            <div className={styles.custom_checkbox}>
                                                                                <input className={styles.input_checkbox}
                                                                                    checked={v.value.indexOf(vi.value) > -1}
                                                                                    onChange={(e) => handleSelect(e, i, v, vi)}
                                                                                    id={`${vi.id}_${ii}`} value={vi.value} type='checkbox'
                                                                                />
                                                                                <div className={styles.check_box_design}>
                                                                                    <span className={styles.check_box_check}><GoCheck /></span>
                                                                                    <span className={styles.check_box_uncheck}></span>
                                                                                </div>
                                                                                {/*
                                                                                <svg viewBox="0 0 35.6 35.6">
                                                                                    <circle className={styles.background} cx="17.8" cy="17.8" r="17.8"></circle>
                                                                                    <circle className={styles.stroke} cx="17.8" cy="17.8" r="14.37"></circle>
                                                                                    <polyline className={styles.check} points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                                                                                </svg>
                                                                                */}
                                                                            </div>
                                                                            <span className={styles.multi_option_label}>
                                                                                <span>{vi.label}</span>
                                                                                {vi.extra_input === 'yes' && <input className={styles.other_input} onChange={(e) => handleSelect(e, i, v, vi, 'extra_input')} value={vi.extra_input_value} type='text' placeholder={vi.value} autoFocus={v.value.indexOf('Other') > -1} />}
                                                                            </span>
                                                                        </label>
                                                                    )}
                                                                </div>
                                                            }
                                                            {v.type === 'file' ?
                                                                up_loading ?
                                                                    <p>Uploading...</p>
                                                                    :
                                                                    <>
                                                                        {pdfPreview ?
                                                                            <Image style={{ marginBottom: '5px' }} src={pdf_icon} width="100" height="100" alt="prev" />
                                                                            :
                                                                            <Image style={{ marginBottom: '5px' }} onClick={() => imageHandler(i, v, 'view')} src={v.instance_image ? v.instance_image : IMAGE_URL + v.value} alt="prev" width="250" height="200" />
                                                                        }
                                                                        <input type="file" className="custom-file-input" id="validatedCustomFile" onChange={(e) => handleFieldsData(e, i, v, 'file')} accept="image/*,.pdf" hidden />
                                                                        <label className={styles.inputs} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', padding: '0px 20px' }} htmlFor="validatedCustomFile"><FaCloudUploadAlt /> {DynamicFields[activeIndex]?.placeholder || DynamicFields[activeIndex]?.label}</label>
                                                                    </>
                                                                : null
                                                            }

                                                        </div>
                                                    }
                                                </div>
                                                {edit_state === i ?
                                                    <div className={styles.info_item_edit} onClick={() => editItem('')}>Save</div>
                                                    :
                                                    <div className={styles.info_item_edit} onClick={() => editItem(i)}>Edit</div>
                                                }
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className={styles.btn_section} style={{ justifyContent: 'center' }}>
                                    {checkButtonStatus(edit_state) ?
                                        <button className={styles.next_btn} onClick={() => saveForm()} style={{ width: '200px' }}>Submit</button>
                                        :
                                        <button className={styles.next_btn} style={{ width: '200px', opacity: 0.5 }}>Submit</button>
                                    }
                                </div>
                            </div>
                            : ThankYouPage ?
                                <div className={styles.preview_section}>
                                    <div className={styles.info_container}>
                                        <div className={styles.all_info} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                            <h2 style={{ fontSize: '32px', lineHeight: '60px' }}>Thank You</h2>
                                            <p>Thank you for reaching out to us! {`We've`} received your message through our contact form, and we appreciate the time you took to get in touch.</p>
                                        </div>
                                    </div>
                                    <div className={styles.btn_section} style={{ justifyContent: 'center' }}>
                                        <button className={styles.next_btn} style={{ width: '200px' }} onClick={() => router.back()}>Go Home</button>
                                    </div>
                                </div>
                                :
                                <>
                                    <div className={styles.section_left} style={{ position: 'relative' }}>
                                        {DynamicFields[activeIndex]?.notes && <span style={{ width: '400px', 'position': 'absolute', 'background': '#204e91b5', 'color': '#FFF', padding: '8px', borderRadius: '2px', textAlign: 'center' }}>{DynamicFields[activeIndex]?.notes}</span>}
                                        {activeImage && <Image className={styles.leftImage} src={IMAGE_URL + activeImage} fill sizes='100%' alt="add" />}
                                    </div>
                                    <div className={styles.section_right}>
                                        {(DynamicFields[activeIndex]?.type !== 'radio' && DynamicFields[activeIndex]?.type !== 'file' && DynamicFields[activeIndex]?.type !== 'select' && DynamicFields[activeIndex]?.type !== 'textarea' && DynamicFields[activeIndex]?.type !== 'phone' && DynamicFields[activeIndex]?.type !== 'multiple_select') &&
                                            <div className={styles.section_inner}>
                                                <div className={styles.input_group} >
                                                    <label className={styles.input_label}>{DynamicFields[activeIndex]?.label}</label>
                                                    <input type={DynamicFields[activeIndex]?.type} className={styles.inputs} placeholder={'Enter ' + DynamicFields[activeIndex]?.label} onChange={(e) => handleFieldsData(e, activeIndex, DynamicFields[activeIndex], 'value')} value={DynamicFields[activeIndex]?.value} />
                                                </div>
                                            </div>
                                        }

                                        {DynamicFields[activeIndex]?.type === 'phone' &&
                                            <div className={styles.section_inner}>
                                                <div className={styles.input_group} >
                                                    <label className={styles.input_label}>{DynamicFields[activeIndex]?.label}</label>
                                                    <PhoneInput
                                                        country={'gb'}
                                                        inputProps={{
                                                            required: true,
                                                            autoFocus: true
                                                        }}
                                                        inputClass={styles.phone_inputs}
                                                        buttonClass={styles.phone_btn}
                                                        enableSearch
                                                        placeholder={'Enter ' + DynamicFields[activeIndex]?.label}
                                                        value={DynamicFields[activeIndex]?.value}
                                                        onChange={phone => handleFieldsData(phone, activeIndex, DynamicFields[activeIndex], 'value')}
                                                    />
                                                </div>
                                            </div>
                                        }
                                        {DynamicFields[activeIndex]?.type === 'textarea' &&
                                            <div className={styles.section_inner}>
                                                <div className={styles.input_group}>
                                                    <label className={styles.input_label}>{DynamicFields[activeIndex]?.label}</label>
                                                    <textarea className={styles.text_area} placeholder={'Enter ' + DynamicFields[activeIndex]?.label} onChange={(e) => handleFieldsData(e, activeIndex, DynamicFields[activeIndex], 'value')} value={DynamicFields[activeIndex]?.value} />
                                                </div>
                                            </div>
                                        }
                                        {(DynamicFields[activeIndex]?.type === 'select' || DynamicFields[activeIndex]?.type === 'radio') &&
                                            <div className={styles.section_inner}>
                                                <div className={styles.input_group} >
                                                    <label className={styles.input_label}>{DynamicFields[activeIndex]?.label}</label>
                                                    <div className={styles.multiSelect_cotainer}>
                                                        {DynamicFields[activeIndex]?.options.map((v, i) =>
                                                            <label htmlFor={`${v.id}_${i}`} className={styles.multi_option} key={`${v.id}_${i}`}>
                                                                <div className={styles.custom_checkbox}>
                                                                    <input className={styles.input_checkbox} type="radio" name={'radiolabel'} id={`${v.id}_${i}`} value={v.value} onChange={(e) => handleFieldsData(e, activeIndex, DynamicFields[activeIndex], 'value')} checked={DynamicFields[activeIndex]?.value === v.value} />
                                                                    <div className={styles.check_box_design}>
                                                                        <span className={styles.check_box_check}><GoCheck /></span>
                                                                        <span className={styles.check_box_uncheck}></span>
                                                                    </div>
                                                                    {/*
                                                                    <svg viewBox="0 0 35.6 35.6">
                                                                        <circle className={styles.background} cx="17.8" cy="17.8" r="17.8"></circle>
                                                                        <circle className={styles.stroke} cx="17.8" cy="17.8" r="14.37"></circle>
                                                                        <polyline className={styles.check} points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                                                                    </svg>
                                                                    */}
                                                                </div>
                                                                <span className={styles.multi_option_label}>
                                                                    <span>{v.label}</span>
                                                                    {v.extra_input === 'yes' && <input className={styles.other_input} onChange={(e) => handleSelect(e, activeIndex, DynamicFields[activeIndex], v, 'extra_input')} value={v.extra_input_value} type='text' placeholder={v.value} autoFocus={DynamicFields[activeIndex]?.value.indexOf('Other') > -1} />}
                                                                </span>
                                                            </label>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                        {DynamicFields[activeIndex]?.type === 'multiple_select' &&
                                            <div className={styles.section_inner}>
                                                <div className={styles.input_group} >
                                                    <label className={styles.input_label}>{DynamicFields[activeIndex]?.label}</label>
                                                    <div className={styles.multiSelect_cotainer}>
                                                        {DynamicFields[activeIndex]?.options.map((v, i) =>
                                                            <label htmlFor={v.id} className={styles.multi_option} key={`${v.id}_${i}`}>
                                                                <div className={styles.custom_checkbox}>
                                                                    <input className={styles.input_checkbox}
                                                                        checked={DynamicFields[activeIndex]?.value.indexOf(v.value) > -1}
                                                                        onChange={(e) => handleSelect(e, activeIndex, DynamicFields[activeIndex], v)}
                                                                        id={v.id} value={v.value} type='checkbox'
                                                                    />
                                                                    <div className={styles.check_box_design}>
                                                                        <span className={styles.check_box_check}><GoCheck /></span>
                                                                        <span className={styles.check_box_uncheck}></span>
                                                                    </div>
                                                                    {/*
                                                                    <svg viewBox="0 0 35.6 35.6">
                                                                        <circle className={styles.background} cx="17.8" cy="17.8" r="17.8"></circle>
                                                                        <circle className={styles.stroke} cx="17.8" cy="17.8" r="14.37"></circle>
                                                                        <polyline className={styles.check} points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                                                                    </svg>
                                                                    */}
                                                                </div>
                                                                <span className={styles.multi_option_label}>
                                                                    <span>{v.label}</span>
                                                                    {v.extra_input === 'yes' && <input className={styles.other_input} onChange={(e) => handleSelect(e, activeIndex, DynamicFields[activeIndex], v, 'extra_input')} value={v.extra_input_value} type='text' placeholder={v.value} autoFocus={DynamicFields[activeIndex]?.value.indexOf('Other') > -1} />}
                                                                </span>
                                                            </label>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                        {DynamicFields[activeIndex]?.value && DynamicFields[activeIndex]?.type === 'file' ?
                                            <div className={styles.section_inner} style={{ flexDirection: 'column' }}>
                                                {pdfPreview ?
                                                    <div style={{ width: '90%', height: 'calc(100% - 100px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                        <embed src={pdfPreview} width="100%" height="100%" />
                                                    </div>
                                                    :
                                                    <div style={{ width: '90%', height: 'calc(100% - 100px)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                                        <Image onClick={() => imageHandler(activeIndex, DynamicFields[activeIndex], 'view')} src={DynamicFields[activeIndex]?.instance_image ? DynamicFields[activeIndex]?.instance_image : IMAGE_URL + DynamicFields[activeIndex]?.value} alt="prev" fill sizes='100%' style={{ cursor: 'pointer' }} />
                                                    </div>
                                                }
                                            </div>
                                            : DynamicFields[activeIndex]?.type === 'file' ?
                                                <div className={styles.section_inner}>
                                                    <div className={styles.input_group} >
                                                        <label className={styles.input_label}>{DynamicFields[activeIndex]?.label}</label>
                                                        {up_loading ?
                                                            <p>Uploading...</p>
                                                            :
                                                            <div className={styles.input_group}>
                                                                <input type="file" className="custom-file-input" id="validatedCustomFile" onChange={(e) => handleFieldsData(e, activeIndex, DynamicFields[activeIndex], 'file')} accept="image/*,.pdf" hidden />
                                                                <label className={styles.inputs} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', padding: '0px 20px' }} htmlFor="validatedCustomFile"><FaCloudUploadAlt style={{ margin: '0px 10px', fontSize: '20px' }} /> {DynamicFields[activeIndex]?.placeholder || DynamicFields[activeIndex]?.label}</label>
                                                            </div>}
                                                    </div>
                                                </div>
                                                : ''
                                        }
                                        <div className={styles.btn_section} >
                                            {DynamicFields[activeIndex]?.value && DynamicFields[activeIndex]?.type === 'file' &&
                                                <div className={styles.icon_section}>
                                                    {!pdfPreview && <span style={{ color: 'blue', paddingLeft: '8px', cursor: 'pointer' }} onClick={() => imageHandler(activeIndex, DynamicFields[activeIndex], 'view')}><i className="fa-solid fa-eye"></i></span>}
                                                    <span style={{ color: 'red', paddingLeft: '8px', cursor: 'pointer' }} onClick={() => imageHandler(activeIndex, DynamicFields[activeIndex], 'remove')}><i className="fa-solid fa-trash"></i></span>
                                                </div>
                                            }
                                            {activeIndex !== 0 && <button onClick={() => prevHandler(activeIndex - 1)} className={styles.back_btn} >Back</button>}
                                            {activeIndex === (DynamicFields.length - 1) && !preview ?
                                                checkButtonStatus(activeIndex) ?
                                                    <button className={styles.next_btn} onClick={() => saveForm('preview')}>Preview</button>
                                                    :
                                                    <button className={styles.next_btn} style={{ opacity: 0.5 }}>Preview</button>
                                                : checkButtonStatus(activeIndex) ?
                                                    <button className={styles.next_btn} onClick={() => { nextHandler(activeIndex + 1) }} >Next</button>
                                                    :
                                                    <button className={styles.next_btn} style={{ opacity: 0.5 }} >Next</button>
                                            }
                                        </div>
                                    </div>
                                </>
                        }
                    </div>
                }
            </div>
        </div>
    )
}