import React from "react";
import { Navbar, Button } from "flowbite-react";
import logo from "../../assets/img/logo-purple.svg";

const NavbarComponent = () => {
  return (
    <Navbar fluid={true} rounded={true} className="!bg-ice dark:!bg-black">
      <Navbar.Brand href="/">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="La Vie Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          La vie
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="!bg-purple hover:!bg-darkPurple"><a href="/acessar">Acessar</a></Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active={true} className="hover:text-purple">
          Home
        </Navbar.Link>
        <Navbar.Link href="/dashboard" className="hover:!text-purple">Dashboard</Navbar.Link>
        <Navbar.Link href="/navbars" className="hover:!text-purple">Docs</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent;



