'use client'
import React, { useRef, useEffect } from 'react'
import { FacebookProvider, CustomChat } from 'react-facebook';

export default function FacebookMsg() {
    useEffect(() => {
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: '1398756407698634',
                xfbml: true,
                version: 'v19.0',
            });
            console.log(100, 'Facebook SDK working');
        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }, []);

    // const openMessenger = () => {
    //     if (window.FB && window.FB.CustomerChat) {
    //         window.FB.CustomerChat.showDialog("234187059771726");
    //         console.log(102, 'Messenger Plugin opened successfully!');
    //     } else {
    //         console.error(103, 'Messenger Plugin not working.');
    //     }
    // };

    return (
        <>
            {/* {!isMobile ?
                <FacebookProvider appId="1398756407698634" chatSupport>
                    <CustomChat pageId="234187059771726" minimized={true} />
                </FacebookProvider>
                :
                <div className={styles.custom_messenger} onClick={openMessenger}>
                    <RiMessengerLine />
                </div>
            } */}
            <FacebookProvider appId="1398756407698634" chatSupport>
                <CustomChat pageId="234187059771726" minimized={true} />
            </FacebookProvider>
        </>

    )
}


/*
< !--Messenger Chat plugin Code-- >
    <div id="fb-root"></div>

    <!--Your Chat plugin code-- >
    <div id="fb-customer-chat" class="fb-customerchat">
    </div>

    <script>
      var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "234187059771726");
      chatbox.setAttribute("attribution", "biz_inbox");
    </script>

    <!--Your SDK code-- >
    <script>
        window.fbAsyncInit = function() {
            FB.init({
                xfbml: true,
                version: 'v19.0'
            });
      };

        (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    </script>
    */