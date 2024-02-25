import React from 'react'
import styles from './Contact.module.css'
import ContactForm from '../ContactForm/ContactForm'

function Contact() {
  return (
    <div className={styles.contactContainer}>
        <h1 className='flex p-4 justify-center text-4xl font-bold text-[rgba(255,255,255,.9)]'>
            <span data-aos="fade-down">C</span>
            <span data-aos="fade-up">o</span>
            <span data-aos="fade-down">n</span>
            <span data-aos="fade-up">t</span>
            <span data-aos="fade-down">a</span>
            <span data-aos="fade-up">c</span>
            <span data-aos="fade-down">t</span>
            
        </h1>
        <div className=''>
            <ContactForm/>
        </div>
    </div>
  )
}

export default Contact
