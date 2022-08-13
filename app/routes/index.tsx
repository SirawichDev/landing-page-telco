import { Outlet } from "@remix-run/react";
import Button from "~/components/button";
import Container from "~/components/container";

import { useOptionalUser } from "~/utils";
const shapeArray: Array<Record<any, any>> = [
  {
    alt: 'triangle',
    className: 'absolute left-[5%] bottom-[40%] animate-bounce',
    source: 'https://demo.webtend.net/html/telco/assets/images/shapes/triangle.png'
  },
  {
    alt: 'spiner-slow',
    className: 'absolute left-[50%] xs:top-[90%] xs:left-[1%] bottom-[1%] animate-spin-slow',
    source: 'https://demo.webtend.net/html/telco/assets/images/shapes/half-circle.png'
  },  {
    alt: 'reactangle',
    className: 'absolute top-[70%] xs:top-[90%] right-[10%] animate-bounce',
    source: 'https://demo.webtend.net/html/telco/assets/images/shapes/rectangle.png'
  },  {
    alt: 'circle',
    className: 'absolute top-[30%] xs:top-[35] xs:right-[1%] left-[50%] animate-wiggle',
    source: 'https://demo.webtend.net/html/telco/assets/images/shapes/circle.png'
  }
]
export default function Index() {
  return (
    <>
      <Container className="before:content-[' '] before:absolute before:bg-indigo-600 before:blur-md before:w-72  before:opacity-5 before:h-1/4 before:top-56 before:left-0">
        <div className="ml-1.5 mr-1.5 flex flex-wrap">
          <div className="grid grid-cols-2 xs:grid-cols-1 gap-x-10 sm:gap-x-0 sm:pl-11 pl-0">
            <div className="">
              <span className="font-heading text-sm text-accent">WE’RE PROVIDE THE BEST SERVICES</span>
              <h1 className="font-heading font-bold xs:text-[2rem] text-[3rem] lg:text-[4rem]">
                Design Solutions For Any Media.
              </h1>
              <p className="font-body text-md">Pretium Convallis Lacinia. Quisque Ac Eros Urna. Mauris Eu Molestie Odio. Nullam Id Consectetur Nibh,</p>
              <Button className="xs:w-full xs:relative xs:ml-auto xs:mr-auto mt-20" size="big" variant="custom">DISCOVER MORE</Button>
            </div>
            <div className="">
              <img alt="hero-right" src="https://demo.webtend.net/html/telco/assets/images/hero/hero-right.png"/>
            </div>
          </div>
        </div>
        {shapeArray.map((shape, index) => (
          <img key={`${index}${shape.alt}`} src={shape.source} className={shape.className} alt={shape.alt}/>
        ))}
      </Container>
    </>
  );
}
