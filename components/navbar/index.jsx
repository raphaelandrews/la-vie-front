import React from "react";
import { Navbar, Button } from "flowbite-react";
import logo from "../../src/assets/logo.svg";

export const NavbarIndex = () => {
  return (
    <Navbar fluid={true} rounded={true} className="!bg-black">
      <Navbar.Brand href="https://flowbite.com/">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="La Vie Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          La vie
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="!bg-purple hover:!bg-darkPurple">Login</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active={true} className="hover:text-purple active:!text-red-500">
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars" className="hover:!text-purple">About</Navbar.Link>
        <Navbar.Link href="/navbars" className="hover:!text-purple">Services</Navbar.Link>
        <Navbar.Link href="/navbars" className="hover:!text-purple">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars" className="hover:!text-purple">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
