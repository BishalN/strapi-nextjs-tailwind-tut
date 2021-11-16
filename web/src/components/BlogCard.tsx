import React from 'react';
import { DateTime } from 'luxon';
import Link from 'next/link';

import { Button } from './Button';

interface BlogCardQuery {
  updated_at: string;
  title: string;
  slug: string;
  description: string;
  topics: string;
}

export const BlogCard: React.FC<BlogCardQuery> = ({
  children,
  description,
  slug,
  title,
  topics,
  updated_at,
}) => {
  const formattedDate = DateTime.fromISO(updated_at).toFormat('DD');
  return (
    <div className='h-full rounded-lg space-y-1  bg-hero px-4 py-2  overflow-hidden'>
      <Link href={`/blog/${slug}`} passHref>
        <h1 className='cursor-pointer hover:underline text-2xl text-green-600 w-full truncate'>
          {title}
        </h1>
      </Link>
      <p className='text-gray-600 text-sm'>Last updated {formattedDate}</p>
      <div className='flex space-x-4'>
        {topics.split(',').map((topic) => (
          <p key={topic} className='bg-gray-100 rounded-md px-1'>
            {topic}
          </p>
        ))}
      </div>
      <p className='line-clamp-12 text-base'>{description}</p>
      <div className='flex justify-end items-end'>
        <Button>Read Blog</Button>
      </div>
    </div>
  );
};
