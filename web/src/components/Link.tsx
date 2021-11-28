import React from 'react';
import NextLink from 'next/link';

export type LinkProps = {
  href: string;
  className?: string;
};

export const Link: React.FC<LinkProps> = ({ href, children, className }) => {
  return (
    <NextLink href={href}>
      <h4
        className={` text-gray-600 cursor-pointer hover:underline ${className}`}
      >
        {children}
      </h4>
    </NextLink>
  );
};
