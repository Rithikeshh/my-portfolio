'use client'
import React from 'react'
// import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { warning } from 'framer-motion/dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "About",
    "Skills",
    "Projects",
    "Contact",
  ];
    
  return (
    <>
    <div className='flex justify-center '>                                                                                                                 
      <div className='shadow-[0px_-2px_1px_1px_rgba(255,255,255,0.2)] absolute top-0 h-[65px] bg-[#18181B] w-full min-[760px]:w-[90%] min-[760px]:m-auto min-[1120px]:w-[920px] min-[1320px]:w-[1160px] '>

      </div>
    </div>
    <Navbar
      className='bg-transparent min-[760px]:w-[90%] min-[760px]:m-auto min-[1120px]:w-[920px] min-[1320px]:w-[1160px]'
      shouldHideOnScroll
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      
        <NavbarBrand className='justify-center'>
          <div className='text-[rgba(255,255,255,.9)] hover:text-[rgba(255,255,255,.7)] cursor-pointer p-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </div>

        </NavbarBrand>
      
            <NavbarContent className="hidden sm:flex gap-4 rounded-full px-[28px] py-2 bg-[#252529] h-fit" justify="center">
               
                <NavbarItem>
                <Link className='text-[rgba(255,255,255,.9)]' href="#">
                    About
                </Link>
                </NavbarItem>
                <NavbarItem >
                <Link className='text-[rgba(255,255,255,.9)]' href="#" >
                    Skills
                </Link>
                </NavbarItem>
                <NavbarItem>
                <Link className='text-[rgba(255,255,255,.9)]' href="#">
                    Projects
                </Link>
                </NavbarItem>
                <NavbarItem>
                <Link className='text-[rgba(255,255,255,.9)]' href="#">
                    Contact
                </Link>
                </NavbarItem>
            </NavbarContent>
        

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} className='bg-[#252529]' color={'warning'} href="#" variant="flat">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
            <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
        </svg>

          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className='bg-transparent'>
        {menuItems.map((item, index) => (
          <NavbarMenuItem  key={`${item}-${index}`}>
            <Link
              className="w-full text-[rgba(255, 255, 255, 0.7)]"
              onClick={()=>{
                setIsMenuOpen(false)
              }}
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
      
    </>
  )
}
export default Header;


