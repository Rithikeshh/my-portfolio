'use client'
import React from 'react'
import styles from './About.module.css'
import profileImage from '../../assets/images/profileImage.jpeg'
import Aos from "aos";
import "aos/dist/aos.css"
import Image from 'next/image';
import { useRefAndDarkMode } from '../provider/refAndDarkMode';

function About() {
    const aboutRef = useRefAndDarkMode()?.aboutRef;
  return (
    <div className={styles.aboutContainer}>
        <h1 ref={aboutRef} className='flex p-4 justify-center text-4xl font-bold text-[rgba(255,255,255,.9)] dark:text-zinc-800'>
            <span data-aos="fade-up-right">A</span>
            <span data-aos="fade-down-right">b</span>
            <span data-aos="fade-up">o</span>
            <span data-aos="fade-up-left">u</span>
            <span data-aos="fade-down-left">t</span>
        </h1>
        <div className={styles.aboutContentAndImageContainer}>

            <div data-aos="zoom-in-up" className='w-[54%] max-[1020px]:w-[100%]'>
                <h2 className='text-3xl font-bold text-[rgba(255,255,255,.8)] dark:text-zinc-800/80'>
                    I’m Alok Shaw. I live in Kolkata, where I design the future.
                </h2>
                <p data-aos="fade-left" className='mt-8 text-[rgba(255,255,255,.6)] dark:text-zinc-800/60'>
                    I love learning and solving problems. I wrote my first program in December 2022. Afterward, I became deeply interested in programming. Upon learning the basics,  I explored various programming languages, frameworks, and technologies essential for building robust web applications. This journey of continuous learning has been both challenging and rewarding, fueling my passion for solving complex problems and creating innovative solutions in the realm of web development.
                </p>
                <p data-aos="fade-right" className='mt-8 text-[rgba(255,255,255,.6)] dark:text-zinc-800/60'>
                I have developed several projects that have helped me improve my programming skills and learn new concepts every day. Additionally, I have gained a solid understanding of data structures and algorithms.
                </p>
                <p data-aos="fade-left" className='mt-8 text-[rgba(255,255,255,.6)] dark:text-zinc-800/60'>
                I have completed a Bachelor of Science degree from the University of Calcutta with a CGPA of 7.93.
                </p>
            </div>
            <div className='w-[46%] max-[1020px]:w-[100%] max-[1020px]:pl-0 max-[1020px]:pb-10 pl-14 flex justify-end max-[1020px]:justify-start'>
                <div>
                    <Image
                        src={profileImage}
                        alt=''
                        style={{objectFit: 'cover'}}

                        className='rounded-[24px] w-[400px] max-[1020px]:w-[300px] aspect-square max-h-[400px] shadow-lg -rotate-2  duration-300 ease-in hover:rotate-0'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
