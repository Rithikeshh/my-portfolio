'use client'
import React, { useEffect, useState } from 'react'
import styles from './Experience.module.css'
import Image from 'next/image'
import darwinbox from '../../assets/images/thedarwinbox_logo.jpg'
import { useRefAndDarkMode } from '../provider/refAndDarkMode'

function Experience() {
    const [workDuration, setWorkDuration] = useState('');
    const experienceRef = useRefAndDarkMode()?.experienceRef;
    useEffect(()=>{
        const d1 = new Date('03-04-2024');
        const d2 = new Date();

        let year1 = d1.getFullYear();
        let month1 = d1.getMonth() + 1; 
        let day1 = d1.getDate();
        let year2 = d2.getFullYear();
        let month2 = d2.getMonth() + 1;
        let day2 = d2.getDate();
    
        let yearDiff = year2 - year1;
        let monthDiff = month2 - month1;
        let dayDiff = day2 - day1;
        
        if (dayDiff < 0) {
            monthDiff -= 1;
            dayDiff += new Date(year2, month2 - 1, 0).getDate(); 
        }
    
        if (monthDiff < 0) {
            yearDiff -= 1;
            monthDiff += 12;
        }
        setWorkDuration(`${yearDiff>0 ? yearDiff+' yr, ' : ''}${monthDiff>0 ? monthDiff+' mos,  ' : ''}${dayDiff>0 ? dayDiff+' days' : ''}`);
    },[]);
  return (
    <div className={styles.experienceContainer}>
        <h1 ref={experienceRef} className='flex p-4 justify-center text-4xl font-bold text-[rgba(255,255,255,.9)] dark:text-zinc-800'>
            <span data-aos="fade-down">Experience</span>
        </h1>
        <div>
            <div >
                <div className='flex gap-[8px]'>
                    <Image
                        src={darwinbox}
                        alt=''
                        className='rounded w-[48px] h-[48px] dark:shadow-md'
                    />
                    <div className='flex flex-col'>
                        <span className='text-[rgba(255,255,255,.8)] dark:text-zinc-800/80 font-[500]'>SDE-I</span>
                        <span className='text-[rgba(255,255,255,.6)] dark:text-zinc-800/60 font-[400]'>Darwinbox · Full-time</span>
                    </div>
                    
                </div>
                <div className='flex mt-[12px] gap-[8px]'>
                    
                    <span className={`${styles.pipe} ml-[8px] h-[48px] border-[2px] border-[#2BB6A5] w-0 relative`}></span>
                    <div className='flex flex-col text-[14px] relative grow'>
                        <span className='absolute top-[-6px] text-[rgba(255,255,255,.6)] dark:text-zinc-800/60 font-[400]'>Present</span>
                        <span className='absolute bottom-[-6px] text-[rgba(255,255,255,.6)] dark:text-zinc-800/60 font-[400]'>March, 2024</span>
                    </div>
                    
                </div>
                <div className='mt-[12px] flex flex-col text-[15px]'>
                    <span className='text-[rgba(255,255,255,.6)] dark:text-zinc-800/60 font-[400]'>Mar 2024 - Present · {workDuration}</span>
                    <span className='text-[rgba(255,255,255,.6)] dark:text-zinc-800/60 font-[400]'>Hyderabad, Telangana, India · On-site</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience
