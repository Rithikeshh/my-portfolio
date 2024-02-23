'use client'
import React from 'react'
import styles from './Skills.module.css'
import html from '../../assets/images/png-transparent-logo-html-html5.png'
import css from '../../assets/images/png-transparent-logo-css-css3-thumbnail.png'
import javaScript from '../../assets/images/JavaScript-logo.png'
import react from '../../assets/images/download.png'
import next from '../../assets/images/next.png'
import node from '../../assets/images/node.png'
import express from '../../assets/images/express.png'
import mongodb from '../../assets/images/mongodb.png'
import dsa from '../../assets/images/dsa.png'
import java from '../../assets/images/java.png'
import tailwind from '../../assets/images/tailwind.png'
import git from '../../assets/images/Git-Icon-1788C.png'
import material from '../../assets/images/material.png'
import redux from '../../assets/images/redux.png'
import more from '../../assets/images/more.png'
import Image from 'next/image'
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";


function Skills() {
  return (
    <div className={styles.skillsContainer}>
        <h1 className='flex p-4 justify-center text-4xl font-bold text-[rgba(255,255,255,.9)]'>
            <span data-aos="fade-right">S</span>
            <span data-aos="fade-right">k</span>
            <span data-aos="fade-right">i</span>
            <span data-aos="fade-left">l</span>
            <span data-aos="fade-left">l</span>
            <span data-aos="fade-left">s</span>
        </h1>
        <div className='flex flex-wrap gap-y-8 py-8 '>
            {
                images.map((item, index) =>(
                    <div key={index} className='w-[33.33%] flex items-center gap-4 hover:rotate-3 duration-300'>
                        <Image 
                            src={item.picture}
                            alt={item.title}
                            className='rounded w-[56px] h-[56px]'
                            data-aos="flip-left"
                        />
                        <p data-aos="flip-right" className='h-fit font-bold text-[rgba(255,255,255,.8)]'>{item.title}</p>
                    </div>
                ))
            }
        </div>
        <div>
            <Animation/>
        </div>
    </div>
  )
}

export default Skills

const images = [
    {
        title: 'HTML',
        picture: html
    },
    {
        title: 'CSS',
        picture: css
    },
    {
        title: 'JavaScript',
        picture: javaScript
    },
    {
        title: 'React',
        picture: react
    },
    {
        title: 'Next JS',
        picture: next
    },
    {
        title: 'Node JS',
        picture: node
    },
    {
        title: 'Express JS',
        picture: express
    },
    {
        title: 'MongoDB',
        picture: mongodb
    },
    {
        title: 'DSA',
        picture: dsa
    },
    {
        title: 'Java',
        picture: java
    },
    {
        title: 'GIT',
        picture: git
    },
    {
        title: 'Tailwind CSS',
        picture: tailwind
    },
    {
        title: 'Material UI',
        picture: material
    },
    {
        title: 'Redux',
        picture: redux
    },
    {
        title: 'More libraries...',
        picture: more
    },
]

interface ParallaxProps {
    children: string;
    baseVelocity: number;
  }
  
  function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false
    });
  
    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  
    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
  
      /**
       * This is what changes the direction of the scroll once we
       * switch scrolling directions.
       */
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }
  
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
  
      baseX.set(baseX.get() + moveBy);
    });
  
    /**
     * The number of times to repeat the child text should be dynamically calculated
     * based on the size of the text and viewport. Likewise, the x motion value is
     * currently wrapped between -20 and -45% - this 25% is derived from the fact
     * we have four children (100% / 4). This would also want deriving from the
     * dynamically generated number of children.
     */
    return (
      <div className={styles.parallax}>
        <motion.div className={styles.scroller} style={{ x }}>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
        </motion.div>
      </div>
    );
  }
  
   function Animation() {
    return (
      <section>
        <ParallaxText baseVelocity={-2}>Tech stack used to build this protfolio:- Next.js, TypeScript, Next UI, Tailwind CSS, React spring, Framer motion, Aos.</ParallaxText>
      </section>
    );
  }
  