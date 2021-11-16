import request from 'graphql-request';
import { GetStaticProps } from 'next';
import { BlogCard } from '../../components/BlogCard';

import {
  PlaylistPathsQuery,
  PlaylistQuery,
  PlaylistsQuery,
} from '../../gql/graphql';
import { playlistPathsQuery, playlistQuery } from '../../queries/playlist';
import { GobackButton } from '../playlists';

export async function getStaticPaths() {
  const paths: PlaylistPathsQuery = await request(
    'http://localhost:1337/graphql',
    playlistPathsQuery
  );
  const pathFormat: any = [];
  paths.playlists?.forEach((path) =>
    pathFormat.push({ params: { slug: path?.slug } })
  );
  return {
    paths: pathFormat,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const posts: PlaylistQuery = await request(
    'http://localhost:1337/graphql',
    playlistQuery,
    {
      slug: context?.params?.slug,
    }
  );
  return {
    props: posts,
  };
};

function Playlist({ playlists }: PlaylistsQuery) {
  console.log(playlists);
  const playlist = playlists![0];
  return (
    <div className='p-2'>
      <GobackButton />
      <div className='space-y-2'>
        <h1 className='text-4xl capitalize'>{playlist?.title}</h1>
        <h3 className='text-gray-500'>{playlist?.description}</h3>
      </div>
      <div className='space-y-2 md:grid md:grid-cols-2 md:gap-4 md:items-center xl:grid-cols-3'>
        {playlist?.posts?.map((post) => (
          <BlogCard
            key={post?.slug!}
            title={post?.title!}
            description={post?.description!}
            updated_at={post?.updated_at!}
            topics={post?.topics!}
            slug={post?.slug!}
          />
        ))}
      </div>
    </div>
  );
}

export default Playlist;
