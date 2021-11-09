/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { request } from 'graphql-request';
import { homePageQuery } from '../queries/homepage';
import { HomePageQuery } from '../gql/graphql';
import React from 'react';
import { Link } from '../components/Link';
import { API_BASE_URL } from '../util/config';

export const getStaticProps = async () => {
  const data: HomePageQuery = await request(
    'http://localhost:1337/graphql',
    homePageQuery
  );

  return { props: data };
};

const Home = ({ homepage }: HomePageQuery) => {
  return (
    <div className='container md:mx-auto'>
      <main>
        <div className='rounded-md mt-5 bg-hero'>
          {/* navLinks */}
          <div className='flex space-x-4 justify-end p-4 mx-4'>
            {homepage?.Hero?.navlinks?.split(',').map((nav) => (
              <Link href='#' key={nav}>
                {nav}
              </Link>
            ))}
          </div>

          {/* titleandprofile */}
          <div className='flex flex-col sm:flex-row mt-10 justify-between'>
            <h1
              className='text-gray-800 xl:ml-32
             text-opacity-95 text-3xl md:text-5xl lg:text-6xl mx-4 max-w-lg'
            >
              {homepage?.Hero?.title}
            </h1>
            <img
              src={`${API_BASE_URL}${homepage?.Hero?.profile?.url}`}
              alt='hel'
              className='rounded-lg max-h-3/4 max-w-md sm:max-w-xs lg:max-w-lg'
            />
          </div>
        </div>
      </main>
      {/* worksection */}
      <section id='work'>
        <div
          className='bg-indigo-300 justify-items-center my-10 rounded-lg
         grid  sm:grid-rows-2 sm:grid-cols-2 p-4'
        >
          <div className='space-y-1 my-4'>
            <h1 className='text-5xl'>Work.</h1>
            <p className='ml-2 max-w-md text-gray-600'>
              {homepage?.About?.work}
            </p>
          </div>
          <div className='space-y-1'>
            <h1 className='text-5xl'>Blogs.</h1>
            <p className='max-w-md text-gray-600'>{homepage?.About?.blogs}</p>
          </div>
          <div className='space-y-1'>
            {/* <h1 className='text-5xl'>Work.</h1> */}
            <div className='h-10'></div>
            <p className='ml-2 max-w-md text-gray-600'>
              <Link
                className='inline-block text-blue-600'
                href={`mailto:${homepage?.Contact?.email}`}
              >
                Email me
              </Link>{' '}
              {homepage?.About?.email}
            </p>
          </div>
          <div className='space-y-1'>
            <h1 className='text-5xl'>Watch.</h1>
            <p className='ml-2 max-w-md text-gray-600'>
              {homepage?.About?.watch}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
