import type { FC } from "react";
import React from "react";
import Header from "app/components/layouts/header";

interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen transition-colors bg-gray-100 duration-100">
      <Header className=" md:h-16 lg:h-50" />
      {children}
      <footer>s</footer>
    </div>
  );
};

export default MainLayout;
