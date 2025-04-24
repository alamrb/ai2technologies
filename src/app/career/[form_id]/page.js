/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useState, useRef, useEffect, useCallback } from 'react';
import styles from '../AddSubCategory.module.css'
import Image from 'next/image';
import Link from 'next/link';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { toast, Toaster } from 'react-hot-toast';
import { get_single_forms, submitPublicForm, upload_file_application } from '@/Utils/method';
import { IMAGE_URL } from '@/Config/config';
import { useParams, useRouter } from 'next/navigation';
import Loader from '@/app/home/loader';

const Page = () => {
    const params = useParams()
    const router = useRouter()
    const [activeImage, setActiveImage] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);
    const [isSubmitValid, setisSubmitValid] = useState(false);
    const [nextBtnValid, setnextBtnValid] = useState(false);
    const [preview, setPreview] = useState(false)
    const [ThankYouPage, setThankYouPage] = useState(false)
    const [pdfPreview, setPdfPreview] = useState(null);
    const [formTitle, setFormTitle] = useState('')
    const [loader, setLoader] = useState(false)
    const [up_loader, setUp_loader] = useState(false)
    const [DynamicFields, setDynamicFields] = useState([])
    const [imgSrc, setImgSrc] = useState(null);
    const [thankYouText, setThankYouText] = useState(false)
    const [changeCount, setChangeCount] = useState(0);
    const [form_id, setFormId] = useState('');
    const [up_loading, setUp_loading] = useState(false);
    const [edit_state, setEdit_state] = useState('');

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
        console.log("🚀 ~ Page ~ changeCount:", changeCount)
        console.log("🚀 ~ useEffect ~ DynamicFields:", DynamicFields)
    }, [changeCount])



    const getSingleForm = async (form_id) => {
        try {
            let data = await get_single_forms({ form_id: form_id });
            if (data.success) {
                setFormId(form_id)
                if (data.data.dynamic_fields.length > 0) {
                    if (data.data.dynamic_fields.sort((a, b) => a.sl > b.sl ? 1 : -1)[0].image) {
                        setActiveImage(data.data.dynamic_fields.sort((a, b) => a.sl > b.sl ? 1 : -1)[0].image);
                    }
                }
                setFormTitle(data.data.form_title)
                setDynamicFields(data.data.dynamic_fields.sort((a, b) => a.sl > b.sl ? 1 : -1))
                setLoader(false);
            }
        } catch (error) {
            setLoader(false);
            console.log("🚀 ~ getSingleForm ~ error:", error)
        }

    }

    useEffect(() => {
        getSingleForm('2401110004')
    }, [])

    function nextHandler() {
        if (!isEmpty(DynamicFields[activeIndex]?.value)) {
            setActiveIndex(activeIndex + 1);
            if (DynamicFields[activeIndex + 1]?.image) {
                setActiveImage(DynamicFields[activeIndex + 1]?.image)
            }
            setnextBtnValid(false)
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

        console.log(42, DynamicFields)

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
            setnextBtnValid(status)
            setDynamicFields([...DynamicFields.map((v, j) => fi === j ? { ...v, value: value } : v)])

        } else if (type === 'file') {
            const file = e.target.files[0];
            setUp_loading(true)
            let data = new FormData();
            data.append('image', file)
            let apires = await upload_file_application(data);
            if (apires.success) {
                setnextBtnValid(true)
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
    const [view_image, setViewImage] = useState('')
    function imageHandler(i, data, type) {
        if (type === 'remove') {
            setnextBtnValid(false)
            setDynamicFields([...DynamicFields.map((v, j) => i === j ? { ...v, value: '', instance_image: '' } : v)])
            setPdfPreview(null)
        } else {
            setViewImage(IMAGE_URL + data.value);
        }
    }

    return (
        <>
            {loader ?
                <Loader />
                :
                <div style={{ width: "100vw", height: 'calc(100vh - 22px)', display: 'flex' }}>
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
                                                {edit_state !== i && (v.type !== 'file' && v.type !== 'link' ? v.value : <Link href={v.type === 'file' ? IMAGE_URL + v.value : v.value}>{v.type === 'file' ? IMAGE_URL + v.value : v.value}</Link>)}
                                                {edit_state === i &&
                                                    <div className={styles.input_group}>
                                                        {/* <label className={styles.input_label} >{v.label}</label> */}
                                                        {(v.type !== 'radio' && v.type !== 'file' && v.type !== 'select' && v.type !== 'textarea' && v.type !== 'phone') &&
                                                            <input type={v.type} className={styles.inputs} placeholder={'Enter ' + v.label} onChange={(e) => handleFieldsData(e, i, v, 'value')} value={v.value} />
                                                        }
                                                        {v.type === 'phone' &&
                                                            <PhoneInput
                                                                country={'bd'}
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
                                                            <textarea className={styles.text_area} placeholder={'Enter ' + v.label} onChange={(e) => handleFieldsData(e, i, v, 'value')} value={v.value} />
                                                        }
                                                        {v.type === 'select' &&
                                                            <select className={styles.inputs} onChange={(e) => handleFieldsData(e, i, v, 'value')} value={v.value} >
                                                                <option value={''} disabled>Select</option>
                                                                {v.options.map(v =>
                                                                    <option key={v.id} value={v.value}>{v.label}</option>
                                                                )}
                                                            </select>
                                                        }
                                                        {v.type === 'radio' &&
                                                            <div className="col-sm-10">
                                                                {v.options.map((vv, vi) =>
                                                                    <div className="form-check" style={{ paddingTop: '5px' }} key={'__' + vi}>
                                                                        <input className="form-check-input" type="radio" name={'radiolabel'} id={vv.id} value={vv.value} onChange={(e) => handleFieldsData(e, i, v, 'value')} checked={vv.value === v.value} />
                                                                        <label className="form-check-label" style={{ fontWeight: 300 }} htmlFor={vv.id}>{vv.label}</label>
                                                                    </div>
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
                                                                    <label className={styles.inputs} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} htmlFor="validatedCustomFile">Change file...</label>
                                                                </>
                                                            : ''
                                                        }

                                                    </div>
                                                }
                                            </div>
                                            {edit_state === i ?
                                                <div className={styles.info_item_edit} onClick={() => setEdit_state('')}>Save</div>
                                                :
                                                <div className={styles.info_item_edit} onClick={() => setEdit_state(i)}>Edit</div>
                                            }
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className={styles.btn_section} style={{ justifyContent: 'center' }}>
                                {isSubmitValid ? <button className={styles.next_btn} onClick={() => saveForm()} style={{ width: '200px' }}>Submit</button>
                                    : <button className={styles.next_btn} style={{ width: '200px', opacity: 0.5 }}>Submit</button>}

                            </div>
                        </div>
                        : ThankYouPage ?
                            <div className={styles.preview_section}>
                                <div className={styles.info_container}>
                                    <div className={styles.all_info} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                        <h2 style={{ fontSize: '32px', lineHeight: '60px' }}>Thank You</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the {`industry's`} standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
                                    {activeImage && <Image src={IMAGE_URL + activeImage} fill sizes='100%' alt="add" />}
                                </div>
                                <div className={styles.section_right}>
                                    {(DynamicFields[activeIndex]?.type !== 'radio' && DynamicFields[activeIndex]?.type !== 'file' && DynamicFields[activeIndex]?.type !== 'select' && DynamicFields[activeIndex]?.type !== 'textarea' && DynamicFields[activeIndex]?.type !== 'phone') &&
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
                                                    country={'bd'}
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
                                            <div className={styles.input_group} >
                                                <label className={styles.input_label}>{DynamicFields[activeIndex]?.label}</label>
                                                <textarea className={styles.text_area} placeholder={'Enter ' + DynamicFields[activeIndex]?.label} onChange={(e) => handleFieldsData(e, activeIndex, DynamicFields[activeIndex], 'value')} value={DynamicFields[activeIndex]?.value} />
                                            </div>
                                        </div>
                                    }
                                    {DynamicFields[activeIndex]?.type === 'select' &&
                                        <div className={styles.section_inner}>
                                            <div className={styles.input_group} >
                                                <label className={styles.input_label}>{DynamicFields[activeIndex]?.label}</label>
                                                <select className={styles.inputs} onChange={(e) => handleFieldsData(e, activeIndex, DynamicFields[activeIndex], 'value')} value={DynamicFields[activeIndex]?.value} >
                                                    <option value={''} disabled>Select</option>
                                                    {DynamicFields[activeIndex]?.options.map(v =>
                                                        <option key={v.id} value={v.value}>{v.label}</option>
                                                    )}
                                                </select>
                                            </div>
                                        </div>
                                    }
                                    {DynamicFields[activeIndex]?.type === 'radio' &&
                                        <div className={styles.section_inner}>
                                            <div className={styles.input_group}>
                                                <div className="row">
                                                    <label className={styles.input_label}>{DynamicFields[activeIndex]?.label}</label>
                                                    <div className="col-sm-10">
                                                        {DynamicFields[activeIndex]?.options.map((v, vi) =>
                                                            <div className="form-check" style={{ paddingTop: '5px' }} key={'_op_' + vi}>
                                                                <input className="form-check-input" type="radio" name={'radiolabel'} id={v.id} value={v.value} onChange={(e) => handleFieldsData(e, activeIndex, DynamicFields[activeIndex], 'value')} checked={DynamicFields[activeIndex]?.value === v.value} />
                                                                <label className="form-check-label" style={{ fontWeight: 300 }} htmlFor={v.id}>{v.label}</label>
                                                            </div>
                                                        )}

                                                    </div>
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

                                                {up_loading ?
                                                    <p>Uploading...</p>
                                                    :
                                                    <div className={styles.input_group}>
                                                        <input type="file" className="custom-file-input" id="validatedCustomFile" onChange={(e) => handleFieldsData(e, activeIndex, DynamicFields[activeIndex], 'file')} accept="image/*,.pdf" hidden />
                                                        <label className={styles.inputs} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} htmlFor="validatedCustomFile">Choose file...</label>
                                                    </div>}
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

                                        {activeIndex === (DynamicFields.length - 1) && !preview ?
                                            nextBtnValid ?
                                                <button className={styles.next_btn} onClick={() => saveForm('preview')}>Preview</button>
                                                : <button className={styles.next_btn} style={{ opacity: 0.5 }}>Preview</button>
                                            : nextBtnValid ? <button className={styles.next_btn} onClick={() => { nextHandler() }} >Next</button>
                                                : <button className={styles.next_btn} style={{ opacity: 0.5 }} >Next</button>
                                        }
                                    </div>
                                </div>
                            </>
                    }
                </div>
            }
        </>
    )
}

export default Page;