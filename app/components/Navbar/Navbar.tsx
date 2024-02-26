'use client'
import React, { MutableRefObject, useEffect, useState } from 'react'
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { useRefAndDarkMode } from '../provider/refAndDarkMode';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const aboutRef = useRefAndDarkMode()?.aboutRef;
  const skillsRef = useRefAndDarkMode()?.skillsRef;
  const projectsRef = useRefAndDarkMode()?.projectsRef;
  const contactRef = useRefAndDarkMode()?.contactRef;
  const darkMode = useRefAndDarkMode()?.darkMode;;
  const setDarkMode = useRefAndDarkMode()?.setDarkMode;;
  const menuItems = [
    { section: "About", scrollTo: aboutRef },
    { section: "Skills", scrollTo: skillsRef },
    { section: "Projects", scrollTo: projectsRef },
    { section: "Contact", scrollTo: contactRef },
  ];

  function handleScroll(sectionRef: MutableRefObject<HTMLHeadingElement | null> | undefined) {
    let rect = sectionRef?.current?.getBoundingClientRect()
    if (rect) {
      window.scrollBy({ top: rect.top - 100, left: 0, behavior: "smooth" })
    }
  }
  function handleDarkMode() {
    if (localStorage.getItem("theme")) {
      document.documentElement.classList.remove('dark')
      localStorage.removeItem("theme")
      if(setDarkMode)
      setDarkMode(true)
    }
    else {
      document.documentElement.classList.add('dark')
      localStorage.setItem("theme", "true");
      if(setDarkMode)
      setDarkMode(false)
    }
  }
  useEffect(()=>{
    if(localStorage.getItem("theme")) {
      if(setDarkMode)
      setDarkMode(false)
    }
  },[])
  return (
    <>
      <div className='flex justify-center '>
        <div className='shadow-[0px_-2px_1px_1px_rgba(255,255,255,0.2)] absolute top-0 h-[65px] bg-[#18181B] dark:bg-white w-full min-[760px]:w-[90%] min-[760px]:m-auto min-[1120px]:w-[920px] min-[1320px]:w-[1160px] ' />
      </div>
      <Navbar
        className='bg-transparent min-[760px]:w-[90%] min-[760px]:m-auto min-[1120px]:w-[920px] min-[1320px]:w-[1160px]'
        shouldHideOnScroll
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="sm:hidden dark:text-zinc-800" justify="start">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        </NavbarContent>

        <NavbarBrand className='justify-center'>
          <div
            className='text-[rgba(255,255,255,.9)] hover:text-[rgba(255,255,255,.7)] dark:text-zinc-800 cursor-pointer p-4'
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </div>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4 rounded-full px-[28px] py-2 bg-[#252529] dark:bg-white dark:shadow h-fit" justify="center">
          {menuItems.map((item, index) => (
            <NavbarItem key={index}>
              <button
                className='text-[rgba(255,255,255,.9)] dark:text-zinc-800'
                onClick={() => {
                  handleScroll(item.scrollTo)
                }}
              >
                {item.section}
              </button>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              className='bg-[#252529] dark:bg-white dark:shadow dark:text-zinc-800/60 ' color={`${darkMode ? 'warning' : 'default'}`} variant="flat"
              onClick={handleDarkMode}
            >
              {darkMode ?
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                  <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>

              }
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className='bg-transparent'>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <button
                className="w-full text-[rgba(255, 255, 255, 0.7)] dark:text-zinc-800/90 text-start"
                onClick={() => {
                  setTimeout(() => {
                    handleScroll(item.scrollTo)
                  }, 0)
                  setIsMenuOpen(false)
                }}
              >
                {item.section}
              </button>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  )
}
export default Header;


