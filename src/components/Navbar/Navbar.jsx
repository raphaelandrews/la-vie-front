import React, { useState } from "react";
import { Navbar, Button } from "flowbite-react";
import logo from "../../assets/img/logo-purple.svg";
import { Switch } from "@headlessui/react";

const NavbarComponent = (props) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <Navbar fluid={true} rounded={true} className="!bg-ice dark:!bg-black">
      <Navbar.Brand href="/" className="sm:w-[146px]">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="La Vie Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          La vie
        </span>
      </Navbar.Brand>
      <div className="flex items-center gap-4 md:order-2">
       
        <Button className="!bg-purple hover:!bg-darkPurple">
          <a href="/acessar">Acessar</a>
        </Button>
        <Switch
          checked={enabled}
          onClick={props.toggleDarkMode}
          onChange={setEnabled}
          className={`${
            enabled ? "bg-purple" : "bg-white"
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              enabled ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white dark:!bg-purple transition`}
          />
        </Switch>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" className="hover:!text-purple">
          Home
        </Navbar.Link>
        <Navbar.Link href="/dashboard" className="hover:!text-purple">
          Dashboard
        </Navbar.Link>
        <Navbar.Link href="/navbars" className="hover:!text-purple">
          Docs
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
