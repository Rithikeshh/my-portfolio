'use client'
import {useState, useRef, useContext, createContext, Dispatch, SetStateAction, MutableRefObject, useEffect} from 'react'

const RefAndDarkModeContext = createContext<{
    
    aboutRef : MutableRefObject<HTMLHeadingElement | null> , 
    skillsRef : MutableRefObject<HTMLHeadingElement | null>, 
    projectsRef : MutableRefObject<HTMLHeadingElement | null>, 
    contactRef : MutableRefObject<HTMLHeadingElement | null>
} | null>(null);
function RefAndDarkMode({children}:{children: React.ReactNode}) {
    
    const aboutRef = useRef<HTMLHeadingElement | null>(null);
    const skillsRef = useRef<HTMLHeadingElement | null>(null);
    const projectsRef = useRef<HTMLHeadingElement | null>(null);
    const contactRef = useRef<HTMLHeadingElement | null>(null);
    
  return (

    <RefAndDarkModeContext.Provider value={{
         aboutRef, skillsRef, projectsRef, contactRef
    }}>
        {children}
    </RefAndDarkModeContext.Provider>
  
  )
}

export default RefAndDarkMode

export function useRefAndDarkMode(){
    return useContext(RefAndDarkModeContext)
}
