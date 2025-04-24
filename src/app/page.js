'use client'
import React, { useEffect, useState } from 'react'
import Loader from './home/loader'
import MobileLoader from './home/mobileLoader'
import { CookieBanner } from '@keepist/react-gdpr-cookie-banner';
import './globals.css'
import HomeContent from './HomeContent'

export default function Home() {
  const [loader, setLoader] = useState(true);
  const [isClient, setisClient] = useState(false)

  useEffect(() => {
    setisClient(true)
    setLoader(false)
  }, [])

  return (
    <>
      {!isClient ?
        <MobileLoader />
        : <>
          {loader ? <Loader /> : <HomeContent />}
          <CookieBanner
            policyLink="/privacy-policy"
            message="We use cookies to help give you the best experience on our site and to allow us and third parties to customise the marketing content you see across websites and social media."
            preferencesOptionInitiallyChecked
            statisticsOptionInitiallyChecked
            marketingOptionInitiallyChecked
            showAcceptSelectionButton
            acceptSelectionButtonText="Accept Selection"
            onAcceptPreferences={() => {
              // load your preferences trackers here
            }}
            onAcceptStatistics={() => {
              // load your statistics trackers here
            }}
            onAcceptMarketing={() => {
              // load your marketing trackers here
            }}
            styles={{
              dialog: {
                position: "fixed",
                bottom: "0px",
                left: "0px",
                right: "0px",
                zIndex: "100000",
                backgroundColor: "#e9faff",
                padding: "10px",

              },
              message: {
                color: '#012965',
                fontFamily: 'Poppins',
                fontSize: '13px',
                fontWeight: 200,
                lineHeight: '20px',
                marginBottom: '0px',
              },
              optionWrapper: {
                marginLeft: '0px',
                marginRight: '10px',
                display: 'inline-block'
              },
              checkbox: {
                position: 'relative',
                top: '2px',
              },
              optionLabel: {
                color: '#012965',
                fontFamily: 'Poppins',
                fontWeight: 200,
                fontSize: '13px',
              },
              policy: {
                color: '#012965',
                fontFamily: 'Poppins',
                fontWeight: 200,
                fontSize: '13px',
              },
              button: {
                borderRadius: '15px',
                fontFamily: 'Poppins',
              }
            }}
          />
        </>
      }
    </>
  )
}