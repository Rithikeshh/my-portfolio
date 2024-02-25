'use client'
import {useState} from 'react'
import styles from './ContactForm.module.css'
import profileImage2 from '../../assets/images/profileImage2.jpeg'
export default function ContactForm() {
    const [message, setMessage] = useState<string>('')

    const handleMessage = (e: any)=>{
        console.log(e.target.textContent);
        
        setMessage(e.target.textContent)
    }

    return (
      <>
        
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
                className="mx-auto h-14 w-auto rounded-full"
                src={profileImage2.src}
                alt="Your Company"
            />
            {/* <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-[rgba(255, 255, 255, 0.7)]">
              Sign in to your account
            </h2> */}
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-4" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-[rgba(255, 255, 255, 0.7)]">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Enter your email"
                    className="block w-full rounded-md border-0 py-1.5 text-black px-3 shadow-sm ring-1 ring-inset ring-black placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-[rgba(255, 255, 255, 0.7)]">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="block w-full rounded-md border-0 py-1.5 text-black px-3 shadow-sm ring-1 ring-inset ring-black placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="message" className="block text-sm font-medium leading-6 text-[rgba(255, 255, 255, 0.7)]">
                    Message
                  </label>
                </div>
                <div className="mt-2">
                  <div
                    contentEditable='true'
                    id="message"
                    data-placeholder={`${message ? '' : 'Type your message here...'}`}
                    className={`${styles.editor} bg-white text-black min-h-[60px] rounded-md px-3 py-1`}
                    onInput={handleMessage}
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className={`flex w-full justify-center rounded-md  ${message ? 'bg-indigo-600 hover:bg-indigo-500': 'bg-indigo-900 cursor-[not-allowed]'} px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                  disabled= {!message ? true : false}
                >
                  Send message
                </button>
              </div>
            </form>
  
          </div>
        </div>
      </>
    )
  }