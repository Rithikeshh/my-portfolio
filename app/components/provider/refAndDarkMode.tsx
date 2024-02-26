'use client'
import {useState, useRef, useContext, createContext, Dispatch, SetStateAction, MutableRefObject, useEffect} from 'react'

const RefAndDarkModeContext = createContext<{
    darkMode : boolean,
    setDarkMode : Dispatch<SetStateAction<boolean>>,
    aboutRef : MutableRefObject<HTMLHeadingElement | null> , 
    skillsRef : MutableRefObject<HTMLHeadingElement | null>, 
    projectsRef : MutableRefObject<HTMLHeadingElement | null>, 
    contactRef : MutableRefObject<HTMLHeadingElement | null>
} | null>(null);
function RefAndDarkMode({children}:{children: React.ReactNode}) {
    const [darkMode, setDarkMode] = useState(true);
    const aboutRef = useRef<HTMLHeadingElement | null>(null);
    const skillsRef = useRef<HTMLHeadingElement | null>(null);
    const projectsRef = useRef<HTMLHeadingElement | null>(null);
    const contactRef = useRef<HTMLHeadingElement | null>(null);
    
  return (

    <RefAndDarkModeContext.Provider value={{
        darkMode, setDarkMode, aboutRef, skillsRef, projectsRef, contactRef
    }}>
        {children}
    </RefAndDarkModeContext.Provider>
  
  )
}

export default RefAndDarkMode

export function useRefAndDarkMode(){
    return useContext(RefAndDarkModeContext)
}
