import cn from 'classnames';
import React from 'react';

const Card: React.FC<React.AllHTMLAttributes<HTMLDivElement>> = ({
                                                                   className,
                                                                   ...props
                                                                 }) => {
  return (
    <div
      className={cn('p-5 md:p-8 bg-light shadow rounded', className)}
      {...props}
    />
  );
};

export default Card;
