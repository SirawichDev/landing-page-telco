import type { FC } from "react";
import React from "react"

interface ContainerProps {
    children: React.ReactNode
    className?: string
}
const Container: FC<ContainerProps> = ({ children, className }) => {
    let classNames = ['overflow-hidden bg-no-repeat xs:mt-10 mt-64 max-w-1350 ml-auto mr-auto']
    if (className && className?.length > 0) {
    classNames.push(className)
    className = classNames.join(' ')
    }
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default Container