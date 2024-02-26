'use client'
import React, { useState } from 'react'
import styles from './Projects.module.css'
import mmt from '../../assets/images/mmt.png'
import linkedin from '../../assets/images/linkedin.png'
import amazonmusic from '../../assets/images/amazonmusic.png'
import nodejs from '../../assets/images/nodejscover.png'
import newsfeed from '../../assets/images/newsfeed.png'
import moviedeck from '../../assets/images/Screenshot 2024-02-24 183551.png'
import pokemon from '../../assets/images/pokemon.png'
import weather from '../../assets/images/weather.png'
import todo from '../../assets/images/todo.png'
import {Card, CardHeader, CardBody, CardFooter, Button, Avatar,Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import Image from 'next/image';
import CardsStack from '../CardsStack/CardsStack'
import { useRefAndDarkMode } from '../provider/refAndDarkMode'


const allProjects = [
  {
    name: 'Make My Trip Clone',
    image: mmt,
    liveUrl: 'https://rithikesh-make-my-trip-react-clone.vercel.app/',
    githubUrl: 'https://github.com/Rithikeshh/MakeMyTrip-Clone---React-Project-1---9ftr78yvdnut',
    techUsed: 'React JS',
    features: [
      'Flights, Hotels, Train Booking.',
      'User Authentication, Protected routes.',
      'After successful booking it show success modal and Search Flights, Hotels & Trains.',
    ]
  },
  {
    name: 'LinkedIn Clone',
    image: linkedin,
    liveUrl: 'https://rithikeshh-in-clone.vercel.app/',
    githubUrl: 'https://github.com/Rithikeshh/LinkedIn-React-Clone---React-Project-2---v5xj8dbg9hvn',
    techUsed: 'React JS',
    features: [
      'Create post, Create group, Like a post, Comment on a post.',
      'User Authentication, Protected routes.',
      'Join Group, Search posts, Premium, Dark mode, Check profile.',
    ]
  },
  {
    name: 'Amazon Music Clone',
    image: amazonmusic,
    liveUrl: 'https://rithikeshh-amazon-music.vercel.app/',
    githubUrl: 'https://github.com/Rithikeshh/amazon-music',
    techUsed: 'Next JS, TypeScript',
    features: [
      'Play song, Add favorite songs to library.',
      'User Authentication, Protected routes.',
      'Search song, Different genre of songs, Social posts.',
    ]
  },
  {
    name: "Blog's Backend",
    image: nodejs,
    liveUrl: 'https://github.com/Rithikeshh/blog-s-backend',
    githubUrl: 'https://github.com/Rithikeshh/blog-s-backend',
    techUsed: 'Node JS, Express JS, MongoDB',
    features: [
      'Create a new user, Login a user, Get user information.',
      'Add a new blog, Update a blog, Delete a blog.',
      'Add comments to a blog, Upvote or downvote a blog.',
    ]
  },
  {
    name: "News Feed",
    image: newsfeed,
    liveUrl: 'https://rithikeshh.github.io/NEWSFEED---Javascript-Project---cofaoesype6c/',
    githubUrl: 'https://github.com/Rithikeshh/NEWSFEED---Javascript-Project---cofaoesype6c',
    techUsed: 'HTML, CSS, JavaScript',
    features: [
      'Select category and load articles based on the selected category.',
      'Search news by content, save important news.',
      'Light and dark mode.',
    ]
  },
]
const miniProjects = [
  {
    name: 'Pokemon World',
    image: pokemon.src, // url of image because Avatar doesn't support src as object.
    liveUrl: 'https://rithikeshh.github.io/Pokemon-world/'
  },
  {
    name: 'Movie Deck',
    image: moviedeck.src, // url of image because Avatar doesn't support src as object.
    liveUrl: 'https://rithikeshh.github.io/Movie-Deck-Project-Buidling---JS-Project-Building-Session-HTML-CSS---In-Cla---kj07fu39n86e/'
  },
  {
    name: 'Weather App',
    image: weather.src, // url of image because Avatar doesn't support src as object.
    liveUrl: 'https://rithikeshh.github.io/weather-app/'
  },
  {
    name: 'Todo List',
    image: todo.src, // url of image because Avatar doesn't support src as object.
    liveUrl: 'https://rithikeshh.github.io/Todo-list/'
  },
]
const animation = [
  "zoom-out-right",
  "zoom-out-down",
  "zoom-out-left",
  "zoom-in-right",
  "zoom-in-up",
  "zoom-in-left"
]
function Projects() {
  const projectsRef = useRefAndDarkMode()?.projectsRef;
  return (
    <div className={styles.projectsContainer}>
        <h1 ref={projectsRef} className='flex p-4 justify-center text-4xl font-bold text-[rgba(255,255,255,.9)] dark:text-zinc-800'>
            <span data-aos="fade-down">P</span>
            <span data-aos="fade-up">r</span>
            <span data-aos="fade-down">o</span>
            <span data-aos="fade-up">j</span>
            <span data-aos="fade-down">e</span>
            <span data-aos="fade-up">c</span>
            <span data-aos="fade-down">t</span>
            <span data-aos="fade-up">s</span>
        </h1>
        <div className='mt-14'>
          <div className='flex justify-around flex-wrap gap-6'>
            {
              allProjects.map((project, index)=>(
                <CardContainer dataAos={animation[index]} key={index} project={project}/>
              ))
            }
            <Card 
              className="py-4 w-[300px] bg-[#252529] dark:bg-white h-[260px] dark:shadow-2xl"
              isFooterBlurred
              radius="lg"
              data-aos={animation[5]}
            >
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start z-[0]">
                <p className="text-large font-bold text-[rgba(255,255,255,.9)] dark:text-zinc-800">Mini Projects</p>
              </CardHeader>
              <div className={`${styles.hideScrollbar} overflow-y-scroll h-[158px] gap-4 p-3 rounded-xl`}>
                
                {
                  miniProjects.map((project, index) =>(
                    <div key={index} className='mb-3 flex items-center gap-4'>
                      <Avatar isBordered color="primary" src={project.image} />
                      <p className='font-[600] text-[rgba(255,255,255,.9)] dark:text-zinc-800'>{project.name}</p>
                      <a href={project.liveUrl} className='ml-auto' target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-[#2BB6A5]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </a>
                    </div>
                  ))
                }
                
              </div>
              <CardFooter className="justify-center cursor-pointer before:bg-white/10 border-white/20 border-1 overflow-hidden p-0 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_16px)] mx-[8px] shadow-small  z-10">
               <MiniProjectsModal/>
              </CardFooter>
            </Card>
            
          </div>
        </div>
    </div>
  )
}

export default Projects



const CardContainer: React.FC<{project: {
  name: string,
  image: any,
  liveUrl: string,
  githubUrl: string,
  techUsed: string,
  features: string[]
}, dataAos: string}> = ({project, dataAos}) =>{
  
  const [show, setShow] = useState<boolean>(false)
  return(
    <div 
      className='relative overflow-hidden w-[300px] rounded-xl dark:shadow-2xl'
      onMouseLeave={() => {setShow(false)}}
      data-aos={dataAos}
    >
      <Card 
        className="py-4 w-[300px] bg-[#252529] dark:bg-white h-[260px]"
        isFooterBlurred
        radius="lg"
      >
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start z-[0]">
          <p className="text-large font-bold text-[rgba(255,255,255,.9)] dark:text-zinc-800">{project.name}</p>
          
          <h4 className="font-bold text-medium text-[rgba(255,255,255,.9)] dark:text-zinc-800">{project.techUsed}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl h-[126px]"
            src={project.image}
            width={280}
            onMouseEnter={() => {setShow(true)}}
          />
        </CardBody>
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_16px)] mx-[8px] shadow-small  z-10">
          <p className="text-small text-[#2BB6A5] flex items-center">
            Live demo
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
            </svg>

          </p>
          <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
            <a href={project.liveUrl} target='_blank'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-[#2BB6A5]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
            <a href={project.githubUrl} target='_blank'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#C3831D]">
                <path fillRule="evenodd" d="M6.28 5.22a.75.75 0 0 1 0 1.06L2.56 10l3.72 3.72a.75.75 0 0 1-1.06 1.06L.97 10.53a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Zm7.44 0a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 0 1 0-1.06ZM11.377 2.011a.75.75 0 0 1 .612.867l-2.5 14.5a.75.75 0 0 1-1.478-.255l2.5-14.5a.75.75 0 0 1 .866-.612Z" clipRule="evenodd" />
              </svg>
            </a>
          </Button>
        </CardFooter>
      </Card>
      <div 
        className={`${styles.hoverEffect} ${show ? styles.active : ''}`}
        
      >
        <a href={project.liveUrl} target='_blank'>
          <h3 className='font-bold'>Features</h3>
          <ul className='list-disc pl-6'>
            {
              project.features.map((feature, index) =>(
                <li key={index}>{feature}</li>
              ))
            }
          </ul>
        </a>
      </div>
    </div>
  )
}

function MiniProjectsModal() {
  const {isOpen, onOpen, onClose} = useDisclosure();
 
  const handleOpen = () => {
    onOpen();
  }
  
  return (
    <>
      <div className="flex flex-grow">
        
          <Button  
            variant="flat" 
            onPress={() => handleOpen()}
            className="capitalize bg-transparent text-[#2BB6A5] p-0 h-[100%] w-[100%] p-[10px]"
          >
           Click me
          </Button>
       
      </div>
      <Modal backdrop={'blur'} isOpen={isOpen} onClose={onClose}>
        <ModalContent className={`${styles.scrollbarStyle} w-[100%] bg-black max-[639px]:relative max-[639px]:top-[-180px]`}>
          {(onClose) => (
            <>
              <CardsStack/>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

