/*
import React from 'react'
// import styles from '../../assets/css/FloatOption.module.css'


export default function Scroll_To_Top_Boro_Nayeem_Arefin(props) {
    return (
        <div className={styles.scrollTop} onClick={()=> props.goToTop()}>
        <span className={styles.scrollIcon}>
        <i className="fa-thin fa-chevron-up"></i>
        </span>
        </div>
    )
}
*/
import React, { useRef } from 'react'
import styles from './scroll_testing_client_arefin.css'



import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

import { RxDoubleArrowDown, RxDoubleArrowUp } from "react-icons/rx";
export default function Double_Scroll_client_arefin(props) {


    // console.log("props: ", props);

    const Compass_Button_Ref = useRef(null);
    const renderAnchor_SelectIcon = (type, element) => {


        if (type === 'enter') {

            //@ts-ignore
            // element.current.style.backgroundColor = cac_item_Select_BG_Color;
            // @ts-ignore
            element.current.style.backgroundColor = '#ffe9e9';
            //@ts-ignore
            element.current.style.cursor = 'grab';
        } else {

            //@ts-ignore
            element.current.style.backgroundColor = '#ffe9e9';

        }

    };

    return (


        <div className={styles.scrollBottom} /*id={'floatOptions'}*/ style={{
            // position: "absolute",
            right: 2,
            bottom: 81,


            background: "#B7EEFF",//"#fff",
            // bottom: 75px;
            cursor: 'pointer',
            height: 32,
            width: 32,
            position: 'fixed',

            transition: ".3s ease",
            // right: 0,
            // transition: .3s ease,
            // width: 32,
            zIndex: 999,

            alignItems: 'center',
            borderRadius: 16,// 50%
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
        }}
            onClick={() => props.goToTop()}


            ref={Compass_Button_Ref}


            onMouseOver={() => renderAnchor_SelectIcon('enter', Compass_Button_Ref)}
            onMouseLeave={() => {
                /*if (dashBoard_button_Pressed_index !== 9) {*/

                renderAnchor_SelectIcon('leave', Compass_Button_Ref);
                /*}*/

            }}


        >

            {
                (props.showTopBtn) ? (
                    <div /*className={styles.scrollIcon}*/

                        style={{
                            // backgroundColor: '#B7EEFF',
                            /*rgba(1, 41, 101, .1);*/
                            /*color: #ff0000;*/
                            color: '#012965',
                            /*  height: 100%
                              width: 100%;*/
                            alignItems: 'center',
                            // border-radius: 50%;
                            display: 'flex',
                            justifyContent: "center"
                        }}
                    >
                        <RxDoubleArrowUp className={styles.icon_style} />
                        {/*<VscChevronUp className={styles.icon_style}/>*/}
                    </div>
                ) : (<div /*className={styles.scrollIcon}*/

                    style={{
                        // backgroundColor: '#B7EEFF',
                        /*rgba(1, 41, 101, .1);*/
                        /*color: #ff0000;*/
                        color: '#012965',
                        /*  height: 100%
                          width: 100%;*/
                        alignItems: 'center',
                        // border-radius: 50%;
                        display: 'flex',
                        justifyContent: "center",
                        // transform: 'rotate(180dg)',
                        // 'rotateX(45deg) rotateZ(0.785398rad)',


                    }}
                >

                    <RxDoubleArrowDown
                        className={styles.icon_style}
                    />
                    {/* <VscChevronDown className={styles.icon_style}/>*/}
                </div>)

            }

        </div>

    );

}

