import Container from '~/components/container';

const Footer = () => {
  return (
    <>
      <Container className={"overflow-visible bg-darkblue mt-20 xs:mt-36 h-full pb-10 relative"} variant={'banner'}>
        <div className={"p-36 xs:p-7 bg-accent-500 absolute rounded-2xl ml-auto mr-auto xs:h-60 h-52 -top-40 w-[90%]"}>
          <div className={'flex justify-between items-center xs:flex-wrap flex- gap-7 xs:gap-4 flex-1 relative bottom-6'}>
            <h1 className={'font-heading text-5xl xs:text-2xl xs:text-center xs:pt-6 -pr-16 text-white font-bold'}>Subscribe To Get Infromation</h1>
            <div className={'flex flex-col w-auto'}>
              <form className={'bg-white xs:flex-wrap flex flex-wrap rounded-xl p-2'}>
              <input className={'border-none p-4 h-auto focus:outline-0 xs:text-center'} placeholder={'Email here..'}/>
                <button className={'bg-pink-500 pt-4 pb-4 w-full pl-5 pr-5 rounded-xl text-white font-body'}>SUBSCRIBE NOW</button>
              </form>

              <p className={'text-white font-body text-md xs:hidden'}>Trusted By 12.256+ Clients</p>
            </div>
          </div>
        </div>
          <div className={'flex gap-16 xs:mt-7'}>
            <div className={'flex flex-col w-48 gap-7 mt-20'}>
              <img src={'https://demo.webtend.net/html/telco/assets/images/logos/logo-white.png'}/>
              <p className={'text-white font-body'}>129 Lily Cl, London W14 9YB, United Kingdom</p>
            </div>
          </div>
        <div className={'relative mt-20'}>
        <div className={'bottom-0 w-auto flex justify-between'}>
          <p className={'font-body text-white font-semibold'}>© 2022. <span className={'text-accent-500'}>Telco</span> All Rights Reserved.</p>
          <p className={'font-body flex gap-4 text-white font-semibold'}><span>Support</span> | <span>Privacy</span> | <span>Policy</span></p>
        </div>
        </div>
      </Container>
    </>
  )
}

export default Footer
