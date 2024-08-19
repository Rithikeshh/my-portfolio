'use client'
import emailjs from "@emailjs/browser";
import styles from './ContactForm.module.css'
import profileImage2 from '../../assets/images/profileImage2.jpeg'
import { useEffect, useRef, useState } from "react";
import { Button } from "@nextui-org/react";
export default function ContactForm({location}:{location: {latitude: number, longitude: number} | null}) {

  const messageRef = useRef<HTMLDivElement | null>(null)
  const [isMessageSent, setIsMessageSent] = useState(false)
  const intEmail = {
    from_name: "",
    to_name: "Alok Shaw",
    reply_to: "",
    message: "",
    latitude: location?.latitude,
    longitude: location?.longitude
  };
  const [form, setForm] = useState<{
    from_name: string;
    to_name: string;
    reply_to: string;
    message: string;
    latitude: number|undefined;
    longitude: number|undefined;
  }>(intEmail);

  const handleMessage = (e: any) => {

    setForm({ ...form, message: e.target.textContent })
  }
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  useEffect(()=>{
    if(location){
      setForm((form)=>{
        return {...form,latitude:location?.latitude,longitude:location?.longitude}
      })
    }
    sendEmail();
  },[location, form.latitude])
  const sendEmail = (e?: any) => {
    if(e)
    e.preventDefault();

    emailjs
      .send('service_lhus0lc', 'template_ecnq4vg', form, "5pXmPHcV7Ae21DcDv")
      .then(
        () => {
          setForm(intEmail)
          if (messageRef.current)
            messageRef.current.innerText = '';
            setIsMessageSent(true)
            setTimeout(()=>{
              setIsMessageSent(false)
            }, 4000)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>

      <div className="flex min-h-full flex-1 flex-col justify-center py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-14 w-auto rounded-full"
            src={profileImage2.src}
            alt="Your Company"
          />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-4" onSubmit={sendEmail}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-[rgba(255, 255, 255, 0.7)] dark:text-zinc-800/70">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="reply_to"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Enter your email"
                  className="block w-full rounded-md border-0 py-1.5 text-black dark:bg-white px-3 shadow-sm ring-1 ring-inset ring-black placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                  value={form.reply_to}
                />
              </div>
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-[rgba(255, 255, 255, 0.7)] dark:text-zinc-800/70">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="from_name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="block w-full rounded-md border-0 py-1.5 text-black dark:bg-white px-3 shadow-sm ring-1 ring-inset ring-black placeholder:text-black  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                  value={form.from_name}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="message" className="block text-sm font-medium leading-6 text-[rgba(255, 255, 255, 0.7)] dark:text-zinc-800/70">
                  Message
                </label>
              </div>
              <div className="mt-2">
                <div
                  contentEditable='true'
                  id="message"
                  data-placeholder={`${form.message ? '' : 'Type your message here...'}`}
                  className={`${styles.editor} bg-white  text-black shadow-sm min-h-[60px] rounded-md px-3 py-1 ring-1 ring-inset ring-black`}
                  onInput={handleMessage}
                  ref={messageRef}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className={` flex w-full justify-center rounded-md  ${form.message ? 'bg-indigo-600 hover:bg-indigo-500' : 'bg-indigo-900 cursor-[not-allowed]'} px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                disabled={!form.message ? true : false}
              >
                Send message
              </button>
            </div>
          </form>
          <div className={`${isMessageSent ? 'w-full' : 'w-0'}  overflow-hidden mt-4 transition-[width] duration-1000 ease-in`}>
            <Button color="success" className="w-full rounded ">
              Message sent
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}