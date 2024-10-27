import type { FC } from "react";
import React from "react";
import Header from "app/components/layouts/header";
import Footer from '~/components/layouts/footer';

interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen transition-colors duration-100">
      <Header className=" md:h-16 lg:h-50" />
      {children}
      <Footer/>
    </div>
  );
};

export default MainLayout;
