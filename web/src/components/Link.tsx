import React from 'react';
import NextLink from 'next/link';

export type LinkProps = {
  href: string;
  className?: string;
};

export const Link: React.FC<LinkProps> = ({ href, children, className }) => {
  return (
    <NextLink href={href}>
      <p
        className={`text-gray-600 cursor-pointer hover:underline ${className}`}
      >
        {children}
      </p>
    </NextLink>
  );
};
