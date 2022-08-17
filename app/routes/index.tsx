import { Outlet } from '@remix-run/react';
import Button from '~/components/button';
import Container from '~/components/container';

import ArrowNextIcon from '~/components/icons/arrow-next';
import Card from '~/components/card';

const shapeArray: Array<Record<any, any>> = [
  {
    alt: 'triangle',
    className: 'absolute left-[5%] bottom-[40%] animate-bounce',
    source: 'https://demo.webtend.net/html/telco/assets/images/shapes/triangle.png',
  },
  {
    alt: 'spiner-slow',
    className: 'absolute left-[50%] xs:top-[90%] xs:left-[1%] bottom-[1%] animate-spin-slow',
    source: 'https://demo.webtend.net/html/telco/assets/images/shapes/half-circle.png',
  }, {
    alt: 'reactangle',
    className: 'absolute top-[70%] xs:top-[90%] right-[10%] animate-bounce',
    source: 'https://demo.webtend.net/html/telco/assets/images/shapes/rectangle.png',
  }, {
    alt: 'circle',
    className: 'absolute top-[30%] xs:top-[35] xs:right-[1%] left-[50%] animate-wiggle',
    source: 'https://demo.webtend.net/html/telco/assets/images/shapes/circle.png',
  },
];
const serviceArray: Array<Record<any, any>> = [
  {
    topic: 'Brand Identity Design',
    source: 'https://demo.webtend.net/html/telco/assets/images/services/icon1.png',
  },
  {
    topic: 'Product Listing Ads Management',
    source: 'https://demo.webtend.net/html/telco/assets/images/services/icon2.png',
  }, {
    topic: 'Multi-Channel Optimization',
    source: 'https://demo.webtend.net/html/telco/assets/images/services/icon3.png',
  },
  {
    topic: 'Web & App Demelopment',
    source: 'https://demo.webtend.net/html/telco/assets/images/services/icon4.png',
  },
];
const softwareChecklist = [
  {
    topic: 'Content Generation And Optimization',
  },
  {
    topic: 'Integrated Online Marketing Strategies',
  },
];
const achievementCounter = [
  {
    topic: 'Project Completed',
    count: 323,
  },
  {
    topic: 'Clients Satisfied',
    count: 333,
  },
];
export default function Index() {
  return (
    <>
      <Container variant={'banner'}>
        <div className='ml-1.5 mr-1.5 flex flex-wrap'>
          <div className='grid grid-cols-2 xs:grid-cols-1 gap-x-10 sm:gap-x-0 sm:pl-11 pl-0'>
            <div className=''>
              <span className='font-heading text-sm text-accent'>WE’RE PROVIDE THE BEST SERVICES</span>
              <h1 className='font-heading font-bold xs:text-[2rem] text-[3rem] lg:text-[4rem] relative'>
                Design <span
                className="after:content-[' '] after:absolute after:w-64 after:right-32 after:bottom-2 after:h-3/5 after:bg-no-repeat after:bg-[url('https://demo.webtend.net/html/telco/assets/images/shapes/title-bg-line.png')]">Solutions</span> For
                Any Media.
              </h1>
              <p className='font-body text-md'>Pretium Convallis Lacinia. Quisque Ac Eros Urna. Mauris Eu Molestie Odio.
                Nullam Id Consectetur Nibh,</p>
              <Button className='xs:w-full xs:relative xs:ml-auto xs:mr-auto mt-20' size='big' variant='outline'>DISCOVER
                MORE</Button>
            </div>
            <div className=''>
              <img alt='hero-right' src='https://demo.webtend.net/html/telco/assets/images/hero/hero-right.png' />
            </div>
          </div>
        </div>
        {shapeArray.map((shape, index) => (
          <img key={`${index}${shape.alt}`} src={shape.source} className={shape.className} alt={shape.alt} />
        ))}
      </Container>
      <Container variant={'services'}>
        <div className={'flex xs:flex-wrap flex-nowrap gap-28'}>
          <div className={'flex flex-col relative w-full'}>
            <span className='font-heading text-sm text-accent'>WE’RE PROVIDE THE BEST SERVICES</span>
            <h1
              className={'font-heading font-bold xs:text-[2rem] text-[3rem] lg:text-[3.5rem] relative'}>Dedicated <span
              className="after:content-[' '] after:absolute after:w-64 after:right-32 after:bottom-2 after:h-3/5 after:bg-no-repeat after:bg-[url('https://demo.webtend.net/html/telco/assets/images/shapes/title-bg-line.png')]">To
              Service</span> Our Customers</h1>
          </div>
          <div className={'flex flex-col sm:hidden visible gap-16'}>
            <p className={'font-body font-light'}>Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem
              Accusantium Doloremque Laudantium, Totam
              Rem Aperiam, Eaque Ipsa Quae Ab Illo Inventore Veritatis Et Quasi Architecto</p>
            <p className={'flex items-center gap-3 hover:text-accent-300 cursor-pointer'}>View All
              Services <ArrowNextIcon /></p>
          </div>
        </div>
        <div
          className={'flex lg:flex-nowrap flex-wrap items-center lg:justify-center justify-evenly gap-0 xs:gap-4 pb-6 pt-3 xs:ml-0 xs:mr-0'}>
          {serviceArray.map((item, index) => (
            <Card
              className={'bg-gray-100 p-5 hover:bg-accent hover:text-white ease-in duration-300 pt-5 h-96 w-full relative rounded-xl flex flex-col'}
              key={index}>
              <img className={'bg-white p-5 rounded-full h-20 w-20'} src={item.source} alt={`${item.topic}${index}`} />
              <h3 className={'font-heading font-bold mt-6 text-[1.4rem]'}>{item.topic}</h3>
              <div className={'absolute bottom-16'}>
                <p
                  className={'flex gap-3 items-center font-heading text-xl before:content-[\' \'] before:absolute before:bg-accent before:rounded-full before:w-10 before:h-10 before:z-1 before:left-4 before:opacity-20 cursor-pointer'}>Explore <span><ArrowNextIcon /></span>
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
      <Container variant={'services'}>
        <div className={'flex xs:flex-wrap flex-nowrap gap-10 w-full justify-evenly'}>
          <img alt={'about'} className={'object-scale-down'} src={'https://demo.webtend.net/html/telco/assets/images/about/aobut.png'} />
          <div className={'flex flex-col pl-4'}>
            <span className='font-heading text-sm text-accent'>COMPANY ABOUT US</span>
            <h1 className={'font-heading font-bold xs:text-[2rem] text-[3rem] lg:text-[3.2rem] relative'}>Advanced
              Software <span
                className="after:content-[' '] after:absolute after:w-64 after:right-32 after:bottom-2 after:h-3/5 after:bg-no-repeat after:bg-[url('https://demo.webtend.net/html/telco/assets/images/shapes/title-bg-line.png')]">Software</span> Made
              Simple.</h1>
            <p className={'font-body font-light'}>Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem
              Accusantium Doloremque Laudantium,</p>
            <p className={'font-body font-light mt-3'}>Totam Rem Aperiam, Eaque Ipsa Quae Ab Illo Inventore Veritatis Et
              Quasi Architecto Beatae Vitae Dicta Sunt
              Explicabo. Nemo Enim Ipsam</p>
            <ul className={'mt-10'}>
              {softwareChecklist.map((item, index) => (
                <li key={index}
                    className={'before:content-[\'✓\'] before:text-accent-500 before:border-2 before:text-center before:mr-3 before:rounded-full mb-5 before:p-1'}>{item.topic}</li>
              ))}
            </ul>
            <Button className={'w-48 mt-20'} variant={'outline'}>{('Discover more').toUpperCase()}</Button>
          </div>
        </div>
      </Container>
      <Container variant={'banner'} className={'xs:pl-10'}>
        <div className='ml-1.5 mr-1.5 flex flex-wrap'>
          <div className='grid grid-cols-2 xs:grid-cols-1 gap-x-10 sm:gap-x-0 sm:pl-11 pl-0'>
            <div className=''>
              <span className='font-heading text-sm text-accent'>CORE FEATURES</span>
              <h1 className='font-heading font-bold xs:text-[2rem] text-[3rem] lg:text-[4rem] relative'>
                Good Design Is Good <span
                className="after:content-[' '] after:absolute after:w-64 after:right-32 after:bottom-2 after:h-3/5 after:bg-no-repeat after:bg-[url('https://demo.webtend.net/html/telco/assets/images/shapes/title-bg-line.png')]">Business</span>
              </h1>
              <p className='font-body text-md'>Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem
                Accusantium Doloremque Laudantium,</p>
              <p className='font-body text-md'>Veritatis Et Quasi Architecto Beatae Vitae Dicta Sunt Explicabo. Nemo
                Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit,</p>

              <div className={'flex gap-4 xs:flex-wrap items-center mt-20'}>
                {achievementCounter.map((item, index) => (
                  <div key={index} className={'flex gap-4 items-center'}>
                    <h3 className={'font-heading text-6xl font-semibold'}>{item.count}+</h3>
                    <h4 className={'font-heading text-xl font-medium'}>{item.topic}</h4>
                  </div>
                ))}
              </div>
              <Button className='xs:w-full xs:relative xs:ml-auto xs:mr-auto mt-20' size='big' variant='outline'>DISCOVER
                MORE</Button>
            </div>
            <div className=''>
              <img alt='hero-right' src='https://demo.webtend.net/html/telco/assets/images/services/feature.png' />
            </div>
          </div>
        </div>
        {shapeArray.map((shape, index) => (
          <img key={`${index}$`} src={shape.source} className={shape.className} alt={shape.alt} />
        ))}
      </Container>
    </>
  );
}
