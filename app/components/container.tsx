import type { FC } from "react";
import cn from 'classnames'
import React from "react"

interface ContainerProps {
    children: React.ReactNode
    className?: string
    variant: 'banner' | 'services'
}

const classes = {
    root: 'xs:mt-10 pl-20 pr-20 pt-64',
    banner: "overflow-hidden bg-no-repeat bg-gray-100 before:content-[' '] before:absolute before:bg-indigo-600 before:blur-md before:w-72  before:opacity-5 before:h-1/4 before:top-56 before:left-0 xs:pl-4 xs:pt-0 pt-20 xs:pr-4",
    services: 'bg-white max-w-1920 pt-[13.5rem] pl-24 pr-24 xs:pt-0 xs:pl-5 xs:pr-5 pb-6'
}
const Container: FC<ContainerProps> = ({ children, variant,className }) => {
    const classesName = cn(
      classes.root,
      {
          [classes.banner]: variant === 'banner',
          [classes.services]: variant === 'services'
      },
      className
    )
    return (
        <div className={classesName}>
            {children}
        </div>
    )
}

export default Container
