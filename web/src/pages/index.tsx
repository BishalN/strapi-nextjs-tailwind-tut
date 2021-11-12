/* eslint-disable @next/next/no-img-element */
import { request } from 'graphql-request';
import { homePageQuery } from '../queries/homepage';
import { HomePageQuery, Post } from '../gql/graphql';
import React from 'react';
import { API_BASE_URL } from '../util/config';
import NextImage from 'next/image';
import { Link } from '../components/Link';
import { Button } from '../components/Button';
import { BlogCard } from '../components/BlogCard';
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { GrMail } from 'react-icons/gr';

export const getStaticProps = async () => {
  const data: HomePageQuery = await request(
    'http://localhost:1337/graphql',
    homePageQuery
  );

  return { props: data };
};

const Home = ({ homepage, posts }: HomePageQuery) => {
  return (
    <div>
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
            className='bg-indigo-300 my-10 rounded-lg
         grid sm:grid-rows-2 sm:grid-cols-2 p-4 gap-2 xl:pl-32'
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
      {/* projectsection */}
      <section id='project'>
        {homepage?.Project?.map((project) => {
          return (
            <div
              key={project?.title}
              className='h-screen grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2  bg-blend-overlay bg-gray-600
                text-white justify-items-center place-items-center p-2'
              style={{
                backgroundImage: `url(${API_BASE_URL}${project?.bg?.url})`,
              }}
            >
              <div className='place-self-start p-2 md:p-10'>
                <h3 className='text-5xl'>{project?.title}</h3>
                <p className='text-md max-w-sm'>{project?.description}</p>
                <Link href={`${project?.url}`} className='text-blue-400 '>
                  {project?.url}
                </Link>
                <div className='flex uppercase space-x-4'>
                  {project?.tools?.split(',').map((tool) => (
                    <p
                      key={tool}
                      className='bg-gradient-to-tr from-gray-400 to-gray-800  px-1 rounded-sm'
                    >
                      {tool}
                    </p>
                  ))}
                </div>
              </div>
              <div className='-mt-40 md:-mt-0'>
                <NextImage
                  loader={() => `${API_BASE_URL}${project?.image?.url!}`}
                  src={`${API_BASE_URL}${project?.image?.url!}`}
                  height={project?.image?.height!}
                  width={project?.image?.width!}
                />
              </div>
            </div>
          );
        })}
      </section>
      {/* recentblogs */}
      <section>
        <div className='p-5 bg-gradient-to-tr from-blue-300 to-indigo-500  my-10'>
          <div
            className='p-2 grid gap-5 grid-cols-1
           grid-rows-1 md:grid-cols-2 lg:grid-cols-3  w-full'
          >
            {posts?.map((post) => (
              <BlogCard
                key={post?.description!}
                updated_at={post?.updated_at!}
                topics={post?.topics!}
                title={post?.title!}
                slug={post?.slug!}
                description={post?.description!}
              />
            ))}
          </div>
          <div className='flex justify-end px-4 pb-2'>
            <Button>More Blogs</Button>
          </div>
        </div>
      </section>

      {/* contact section */}
      <section id='contact'>
        <div className='flex flex-col items-center justify-center my-32'>
          <h4 className='text-6xl'>{homepage?.Contact?.title}</h4>
          <div className='flex space-x-10 my-4'>
            <Link href={`mailto:${homepage?.Contact?.email}`}>
              <GrMail size={30} color='black' />
            </Link>

            <Link href={homepage?.Contact?.insta!}>
              <AiFillInstagram size={30} color='black' />
            </Link>

            <Link href={homepage?.Contact?.youtube!}>
              <AiFillYoutube size={30} color='black' />
            </Link>

            <Link href={homepage?.Contact?.twitter!}>
              <AiOutlineTwitter size={30} color='black' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
