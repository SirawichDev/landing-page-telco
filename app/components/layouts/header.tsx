import type { FC } from "react";
import Button from "../button";
import PhoneBox from "../phone-box";
import StaticMenu from "./static-menu";
import { Popover, Transition } from '@headlessui/react'
interface HeaderProps {
  className?: string;
}
const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header className={className}>
      <div className="duration-300 sticky z-50 flex h-14 items-center justify-between border-b border-border-200 bg-light px-4 py-5 shadow-sm transition-transform md:h-16 lg:h-31 lg:px-12 lg:pl-10">
        <div className="flex w-full items-center lg:w-full">
          <img alt="logo" src="https://demo.webtend.net/html/telco/assets/images/logos/logo.png"/>
          <div className="md:hidden xs:hidden flex ml-9">
            <PhoneBox className="before:absolute before:block before:left-4 before:w-50 before:-inset-1 before:text-red-500 before:content-[''] relative inline-block flex mx-5 gap-5" />
          </div>
          <ul className="ml-auto sm:hidden xs:hidden mx-10 flex flex-shrink-0 items-center justify-center space-x-0 lg:flex md:w-auto md:flex-grow">
            <StaticMenu />
          </ul>
          <Button size="medium" variant="custom" className="ml-auto lg:justify-end lg:flex font-heading">GET A QUOTE</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
