import React, { useState, useEffect } from 'react';
// import { useNavigate, useHistory } from "react-router-dom";
import { ForgotPasswordAPI, Forgot_password_verifyAPI, NewPasswordAPI } from "../../../Utils/method"
import isEmail from 'validator/lib/isEmail';
import Countdown from "react-countdown";
import styles from './forgotPass.module.css'
import toast, { Toaster } from 'react-hot-toast';
import { TfiClose } from 'react-icons/tfi'
import classNames from 'classnames';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'

export default function ForgotPassword(params) {

    const router = useRouter()
    const [buttonState, setButtonState] = useState(false);
    const [inputState, setInputState] = useState(false);
    const [sendtime, setSendTime] = useState(Date.now() + 180000);
    const [spining, setSpining] = useState(false);
    const [activeStep, setActiveStep] = useState(1);
    const [inputOtp, setInputOtp] = useState('');
    const [inputData, setInputData] = useState({
        email: '',
        password: '',
        conf_password: '',
        type: '7',
        id: '',
        server_token: '',
    })

    const [errMsg, setErrMsg] = useState({
        email: '',
        otp: '',
        password: '',
        conf_password: ''
    })

    const onChangeFormData = (e) => {
        let { name, value } = e.target;
        if (name === 'email') {
            if (value !== '' && !isEmail(value)) {
                console.log(41, 'It\'s not Email.')
                setErrMsg({ ...errMsg, email: 'Enter valid email address' });
            } else {
                setErrMsg({ ...errMsg, email: '' });
            }
        } else if (name === 'conf_password') {
            if (value !== '') {
                if (inputData.password !== value) {
                    // if (value.length === inputData.password.length || (value.length > inputData.password.length)) 
                    setErrMsg({ ...errMsg, conf_password: 'Password not matched.' });
                } else {
                    setErrMsg({ ...errMsg, conf_password: '' });
                }
            }
        }
        setInputData({ ...inputData, [name]: value })
    }

    useEffect(() => {
        let state = false;
        if (inputData.password === '') {
            state = false;
        } else if (inputData.conf_password === '') {
            state = false;
        } else if (inputData.conf_password !== inputData.password) {
            state = false;
        } else {
            state = true
        }

        setButtonState(state);
        setInputState(state);
    }, [inputData]);

    const updatePassword = async () => {
        try {
            if (buttonState) {
                setSpining(prev => !prev);
                let apires = await NewPasswordAPI({ id: inputData.id, server_token: inputData.server_token, password: inputData.password });
                if (apires.success) {
                    toast.success(apires.status_phrase, { autoClose: 1000 });
                    setSpining(prev => !prev);
                    router.push('/sign-in');
                } else {
                    setSpining(prev => !prev);
                    toast.error(apires.status_phrase, { autoClose: 1000 });
                }
                console.log(136, apires)
            }
        } catch (error) {
            console.log(137, error)
        }
    }

    const verification = async (data) => {
        setSpining(prev => !prev);
        try {
            setSendTime(Date.now() + 180000);
            let apires = await ForgotPasswordAPI({ type: inputData.type, email: inputData.email });
            console.log(apires);
            if (apires.success) {
                setSendTime(Date.now() + 180000);
                setSpining(prev => !prev);
            }
        } catch (error) {
            setSendTime(Date.now() + 180000);
            setSpining(prev => !prev);
            console.log(error);
        }
    }

    // const goBack = window.history.back();

    const gotoNext = async (current) => {
        if (current === 1 && inputData.email !== '' && isEmail(inputData.email)) {
            setSpining(true);
            let apires = await ForgotPasswordAPI({ type: inputData.type, email: inputData.email });
            console.log(100, apires);
            if (apires.success) {
                setSendTime(Date.now() + 180000);
                setActiveStep(current + 1);
                setSpining(prev => !prev);
                setErrMsg({ ...errMsg, 'email': '' })
            } else {
                setSpining(prev => !prev);
                // setErrMsg({ ...errMsg, 'email': 'This email is already used.' })
                // toast.error("This email is already used.", { autoClose: 1000 });
            }
            console.log('Email response: ', apires)
            return;
        }

        if ((current === 2 && inputOtp !== '') && Number(inputOtp)) {
            setSpining(true);
            let apires = await Forgot_password_verifyAPI({ type: inputData.type, email: inputData.email, otp: inputOtp });
            console.log('OTP Response :', apires)
            if (apires.success) {
                setInputData({ ...inputData, 'id': apires.id, 'server_token': apires.server_token })
                setSpining(prev => !prev);
                setErrMsg({ ...errMsg, 'otp': '' })
                setActiveStep(current + 1);
            } else {
                setSpining(prev => !prev);
                setErrMsg({ ...errMsg, 'otp': 'You have entered wrong OTP.' })
            }
            return;
        } else {
            return;
        }
    }

    return (
        // <div className={styles.forgot_pass_main_container}>
        //     <ToastContainer newestOnTop />
        //     <div className={styles.signin_partition}>

        //     </div>
        // </div>

        <div className={styles.signUpContainer}>
            <Toaster position="bottom-right" />
            <div className={styles.carting_head}>
                <span className={styles.closeCart} onClick={() => router.back()}>
                    <TfiClose />
                </span>
            </div>
            <div className={styles.signUpPartition}>
                <div className={styles.formContent}>
                    <div className={classNames(styles.signUpForm, styles.signUpFormLeft)}>
                        <div className={styles.containerSignUp}>
                            <div className={classNames(styles.form_content, styles.signup_content, styles.form_section)}>
                                <div className={styles.signUp_form}>
                                    <div className={styles.signup_title}>{activeStep === 3 ? 'New Password' : 'Forgot Password'}</div>
                                    {
                                        activeStep === 1 ?
                                            <div className={styles.inputCont}>
                                                <p className={styles.inputLabel}>Enter your email</p>
                                                <input className={classNames(styles.inputs, inputData.email === '' ? styles.inputError : '')} value={inputData.email} onChange={onChangeFormData} type="email" placeholder="Email" name="email" autoFocus />
                                                <span className={styles.errMsg}>{errMsg.email}</span>
                                            </div>
                                            : activeStep === 2 ?
                                                <div className={styles.inputCont}>
                                                    <p className={styles.inputLabel}>
                                                        OTP has been sent to your email.
                                                        <label className="verificationLabel">
                                                            <Countdown date={sendtime} key={sendtime} renderer={props => props.completed ?
                                                                <span className={styles.resendBTN} onClick={() => verification({ type: 'email', value: inputData.email })} ><i className="fa-thin fa-arrow-rotate-right"></i> Resend</span>
                                                                :
                                                                <span className={styles.resendBTN} style={{ textDecoration: 'none' }} >{props.minutes}:{props.seconds}</span>} />
                                                        </label>
                                                    </p>
                                                    <input className={classNames(styles.inputs)} value={inputOtp} onChange={(e) => setInputOtp(e.target.value)} type="number" placeholder="Enter OTP" name="emailOtp" autoFocus />
                                                    <span className={styles.errMsg}>{errMsg.otp}</span>
                                                </div>
                                                :
                                                <>
                                                    <div className={styles.inputCont}>
                                                        <input className={classNames(styles.inputs)} value={inputData.password} onChange={onChangeFormData} type="password" placeholder="Password" name="password" autoComplete="new-password" />
                                                        <span className={styles.errMsg}>{errMsg.password}</span>
                                                    </div>
                                                    <div className={styles.inputCont}>
                                                        <input className={classNames(styles.inputs)} value={inputData.conf_password} onChange={onChangeFormData} type="password" placeholder="Confirm Password" name="conf_password" autoComplete="new-password" />
                                                        <span className={styles.errMsg}>{errMsg.conf_password}</span>
                                                    </div>
                                                </>
                                    }

                                    {activeStep === 3 ?
                                        <div className={classNames(styles.inputCont, spining ? styles.onProcoess : '')}>
                                            <button type="submit" className={classNames(styles.signin_button, !buttonState ? styles.buttoninactive : '')} onClick={updatePassword}>Update  <span className={styles.spiner}> <i className="fa-duotone fa-spinner fa-spin"></i> </span></button>
                                        </div>
                                        :
                                        <div className={classNames(styles.inputCont, spining ? styles.onProcoess : '')}>
                                            <button type="submit"
                                                className={
                                                    classNames(styles.signin_button,
                                                        activeStep === 1 && inputData.email !== '' && isEmail(inputData.email) ? ''
                                                            : (activeStep === 2 && inputOtp !== '') && Number(inputOtp) ? ''
                                                                : styles.buttoninactive
                                                    )
                                                }
                                                onClick={() => gotoNext(activeStep)}>Next  <span className={styles.spiner}> <i className="fa-duotone fa-spinner fa-spin"></i> </span></button>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classNames(styles.signUpForm, styles.signUpFormRight)}>
                        {/* <h1 className={styles.signin_title}>Already have an account ?</h1>
                        <p className={styles.signintextMsg}>If you already have an account in <strong>Noor Mobile</strong>, then you can proceed to
                            login with the button down bellow...</p>
                        <Link href={'/login'}> <button className={styles.signin_button} type="button" >SIGN IN</button></Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
