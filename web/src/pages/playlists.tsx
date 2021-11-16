import { request } from 'graphql-request';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import Link from 'next/link';

import { BlogCard } from '../components/BlogCard';
import { PlaylistsQuery } from '../gql/graphql';
import { playlistsQuery } from '../queries/playlists';

export const getStaticProps = async () => {
  const data: PlaylistsQuery = await request(
    'http://localhost:1337/graphql',
    playlistsQuery
  );

  return { props: data };
};

function playlists({ playlists }: PlaylistsQuery) {
  return (
    <div className='p-2 container sm:mx-auto'>
      <GobackButton />
      <main>
        <div className='space-y-2'>
          <h1 className='text-4xl'>Welcome to Blog playlist</h1>
          <h4 className='text-md text-gray-500'>
            A playlist is series of blogpost where I write about particular tool
            or subject
          </h4>
        </div>

        <div className='my-10'>
          {playlists?.map((playlist) => (
            <div className='my-10' key={playlist?.id}>
              <Link href={`/playlist/${playlist?.slug}`} passHref>
                <h3 className='hover:underline cursor-pointer text-3xl capitalize'>
                  {playlist?.title}
                </h3>
              </Link>
              <div className='md:grid md:grid-cols-2 md:gap-3 xl:grid-cols-3'>
                {playlist?.posts?.map((post) => (
                  <div key={post?.slug} className='my-2 mx-2 h-full'>
                    <BlogCard
                      slug={post?.slug!}
                      title={post?.title!}
                      description={post?.description!}
                      topics={post?.topics!}
                      updated_at={post?.updated_at!}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export const GobackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className='text-green-500 hover:bg-gray-200 rounded-md p-2'
    >
      &larr; go back
    </button>
  );
};

export default playlists;
