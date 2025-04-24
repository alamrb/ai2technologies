import { useState } from 'react'
import styles from './Migration.module.css'
import { useEffect } from 'react'
import { get_only_job_by_domain_id } from '../../Utils/method'
import Loader from '../home/loader'
import Link from 'next/link'
import { BsPlusLg } from "react-icons/bs";
import { HiMinus } from "react-icons/hi";
import { TfiAngleUp, TfiClose } from 'react-icons/tfi';

const Jobs = () => {
    const [expand, setExpand] = useState([])
    const [loader, setLoader] = useState(true)
    const [all_jobs, setAll_jobs] = useState([]);

    const manageExpand = (id) => {
        if (expand.indexOf(id) > -1) {
            setExpand(prev => prev.filter(f => f !== id))
        } else {
            setExpand(prev => [...prev, id])
        }
    }

    const format_date = (d) => {
        // const dateString = "2023-09-25T00:00:00.000Z";
        const date = new Date(d);
        // console.log(1, date);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        // console.log(2, options);
        const formattedDate = date.toLocaleDateString('en-US', options);
        // console.log(3, formattedDate);

        return formattedDate;
    }

    const compare_date = (d) => {
        const targetDate = new Date(d);
        const currentDate = new Date();

        if (currentDate < targetDate) {
            console.log(11);
            return true
        } else if (currentDate > targetDate) {
            console.log(22);
            return false
        } else {
            console.log(33);
            return true
        }
    }


    //             domain_id old 6591324a818ccbf13df18d76' domain_id New 65d1d6425006630592ba28a2
    useEffect(() => {
        let _isMounted = true;
        let allJobs = [];

        async function fetchData(page = 1) {
            try {
                const response = await get_only_job_by_domain_id(`?domain_id=${'65d1d6425006630592ba28a2'}&page=${page}&limit=10`);
                const newData = response.data;

                // Append new data to existing data
                allJobs = [...allJobs, ...newData];

                // If there is more data, recursively fetch next page
                if (newData.length === 10) {
                    await fetchData(page + 1);
                } else {
                    // When all data is fetched, update state
                    if (_isMounted) {
                        setAll_jobs(allJobs);
                        setLoader(false);
                    }
                }
            } catch (error) {
                setLoader(false);
                console.log(error);
            }
        }

        fetchData();

        return () => {
            _isMounted = false;
        };
    }, []);

    console.log(114, all_jobs);


    return (
        <>
            <div className={styles.jobs_popup}>
                {/* <span className={styles.closeCart}><TfiClose /></span> */}
                <div className={styles.jobs_body}>
                    {loader ?
                        <Loader />
                        :
                        all_jobs.map(v =>
                            <div className={styles.expandArea} key={v._id}>
                                <div className={styles.expandAreaHead} onClick={() => manageExpand(v._id)} style={expand.indexOf(v._id) > -1 ? { backgroundColor: '#e5eae8' } : {}}>
                                    <div className={styles.exp_title}>
                                        <p className={styles.mainTitle}>{v.name.toString()} </p>
                                        <div className={styles.exp_title_right}>
                                            <p className={styles.price_range} style={{ marginBottom: '5px' }}>{'£ ' + Number(v.salary_range_start).toLocaleString()} {v.salary_time === 'Per Annum' ? 'pa' : v.salary_time} ({v.location})</p>
                                            <p className={styles.price_range}>Deadline: {format_date(v.deadline)}</p>
                                        </div>
                                    </div>
                                    <div className={styles.exp_icon}>
                                        {expand.indexOf(v._id) > -1 ? <HiMinus /> : <BsPlusLg />}
                                    </div>
                                </div>
                                {expand.indexOf(v._id) > -1 &&
                                    <div className={styles.expandAreaBody}>
                                        <div className={styles.apply_section}>
                                            <Link href={'/career/apply'} className={styles.apply_form_button} style={compare_date(v.deadline) ? {} : { pointerEvents: 'none', opacity: '0.5' }}>APPLY NOW</Link>
                                        </div>
                                        <div className={styles.exp_para} dangerouslySetInnerHTML={{ __html: v.details }} />
                                        <div className={styles.apply_section}>
                                            <Link href={'/career/apply'} className={styles.apply_form_button} style={compare_date(v.deadline) ? {} : { pointerEvents: 'none', opacity: '0.5' }}>APPLY NOW</Link>
                                        </div>
                                    </div>
                                }
                            </div>
                        )}
                </div>

            </div>
            {/* {job_application && <JobApplication current_job={current_job} setJob_application={setJob_application} />} */}
        </>
    )
}

export default Jobs;