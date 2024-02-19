'use client'
import React, { useEffect } from 'react'
import styles from './About.module.css'
import profileImage from '../../assets/images/profileImage.jpeg'
import Aos from "aos";
import "aos/dist/aos.css"
import Image from 'next/image';

function About() {
    useEffect(() =>{
        Aos.init({duration: 600})
    },[])
  return (
    <div className={styles.aboutContainer}>
        <h1 className='flex p-4 justify-center text-4xl font-bold text-[rgba(255,255,255,.9)]'>
            <span data-aos="fade-up-right">A</span>
            <span data-aos="fade-down-right">b</span>
            <span data-aos="fade-up">o</span>
            <span data-aos="fade-up-left">u</span>
            <span data-aos="fade-down-left">t</span>
        </h1>
        <div className={styles.aboutContentAndImageContainer}>

            <div data-aos="zoom-in-up" className='w-[52%]'>
                <h2 className='text-3xl font-bold text-[rgba(255,255,255,.8)]'>
                    I’m Alok Shaw. I live in Kolkata, where I design the future.
                </h2>
                <p data-aos="fade-left" className='mt-8 text-[rgba(255,255,255,.6)]'>
                    I love learning and solving problems. I wrote my first program in December 2022. Afterward, I became deeply interested in programming. Upon learning the basics, I decided to join Newton School in February 2023. From there, I embarked on my journey into full-stack web development.
                </p>
                <p data-aos="fade-right" className='mt-8 text-[rgba(255,255,255,.6)]'>
                I have developed several projects that have helped me improve my programming skills and learn new concepts every day. Additionally, I have gained a solid understanding of data structures and algorithms.
                </p>
                <p data-aos="fade-left" className='mt-8 text-[rgba(255,255,255,.6)]'>
                I have completed a Bachelor of Science degree from the University of Calcutta with a CGPA of 7.93. My graduation year was 2023.
                </p>
            </div>
            <div className='w-[48%] flex justify-end'>
                <Image
                    src={profileImage}
                    alt=''
                    style={{objectFit: 'cover'}}

                    className='rounded-[24px] w-[400px] max-h-[400px] shadow-lg -rotate-2'
                />
            </div>
        </div>
    </div>
  )
}

export default About
