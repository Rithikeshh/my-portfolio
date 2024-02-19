'use client'
import React from 'react'
// import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { warning } from 'framer-motion/dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
    
  return (
    <>
    <Navbar
      className='bg-transparent'
      shouldHideOnScroll
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      {/* <NavbarContent className="sm:hidden pr-3" justify="center"> */}
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      {/* </NavbarContent> */}
        {/* <Button className='rounded-full px-[28px] bg-[#252529]'> */}
            <NavbarContent className="hidden sm:flex gap-4 rounded-full px-[28px] py-2 bg-[#252529] h-fit" justify="center">
                {/* <NavbarBrand>
                <AcmeLogo />
                <p className="font-bold text-inherit">ACME</p>
                </NavbarBrand> */}
                <NavbarItem>
                <Link className='text-[rgba(255, 255, 255, 0.7)]' href="#">
                    About
                </Link>
                </NavbarItem>
                <NavbarItem >
                <Link className='text-[rgba(255, 255, 255, 0.7)]' href="#" >
                    Skills
                </Link>
                </NavbarItem>
                <NavbarItem>
                <Link className='text-[rgba(255, 255, 255, 0.7)]' href="#">
                    Projects
                </Link>
                </NavbarItem>
                <NavbarItem>
                <Link className='text-[rgba(255, 255, 255, 0.7)]' href="#">
                    Contact
                </Link>
                </NavbarItem>
            </NavbarContent>
        {/* </Button> */}

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
      {/* <Navbar className='bg-transparent' shouldHideOnScroll>
      <NavbarBrand>
        
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <Button className='rounded-full px-[28px] bg-[#252529]'>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
            <Link href="#">
                Features
            </Link>
            
            </NavbarItem>
            <NavbarItem isActive>
            <Link href="#" >
                Projects
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link  href="#">
                Integrations
            </Link>
            </NavbarItem>
        </NavbarContent>
      </Button>
      <NavbarContent justify="end">
        
      </NavbarContent>
    </Navbar> */}
    {/* <ul>
        <li className='px-4'>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
    </ul> */}
    </>
  )
}
export default Header;


