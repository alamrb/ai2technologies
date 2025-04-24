'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { geolocation, get_brands, get_exchangerate } from '@/Utils/method'
import Condition from './terms';

export default function Terms() {

    // const [loader, setLoader] = useState(true);
    // const [brands, setBrands] = useState([]);

    // const get_geolocation = async () => {
    //     try {
    //         let apires = await geolocation();
    //         console.log('Geolocation:', apires);
    //         localStorage.setItem('geolocation', JSON.stringify(apires))
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // const get_exchange_rate = async () => {
    //     try {
    //         let apires = await get_exchangerate();
    //         console.log('Exchange:', apires);
    //         if (apires.success) {
    //             localStorage.setItem('exchange_rate', JSON.stringify(apires.data.api_response.conversion_rates))
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(() => {
    //     let _isMounted = true;
    //     async function initial() {
    //         setLoader(true)
    //         try {
    //             let apires = await get_brands();
    //             if (apires.success) {
    //                 console.log(apires);
    //                 setBrands(apires.data)
    //                 // router.push('/' + apires.data[0]._id)
    //                 localStorage.setItem('brands', JSON.stringify(apires.data))
    //             }
    //             setLoader(false)
    //         } catch (error) {
    //             setLoader(false)
    //             console.log(error);
    //         }
    //     }
    //     get_geolocation()
    //     initial()
    //     get_exchange_rate()
    //     return () => {
    //         _isMounted = false
    //     }
    // }, [])

    return (
        <Condition />
    )
}
