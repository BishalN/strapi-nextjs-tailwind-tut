import request from 'graphql-request';
import { DateTime } from 'luxon';
import { GetStaticProps } from 'next';
import NextImage from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { BlogPathsQuery, BlogQuery } from '../../gql/graphql';
import { blogPageQuery, blogPathsQuery } from '../../queries/blog';
import { timetoRead } from '../../util/calculateTimeToRead';
import { GobackButton } from '../playlists';
import { Link } from '../../components/Link';
import { BlogCard } from '../../components/BlogCard';

export async function getStaticPaths() {
  const paths: BlogPathsQuery = await request(
    'http://localhost:1337/graphql',
    blogPathsQuery
  );
  const pathFormat: any = [];
  paths.posts?.forEach((path) =>
    pathFormat.push({ params: { slug: path?.slug } })
  );
  return {
    paths: pathFormat,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const posts: BlogQuery = await request(
    'http://localhost:1337/graphql',
    blogPageQuery,
    {
      slug: context?.params?.slug,
    }
  );
  return {
    props: posts,
  };
};

function Playlist({ posts }: BlogQuery) {
  const post = posts![0];
  const formattedDate = DateTime.fromISO(post?.updated_at).toFormat('DD');
  const approxReadingTime = timetoRead(post?.description!);

  return (
    <div className='container mx-auto sm:p-5'>
      <div className='border-2 border-gray-500'>
        <GobackButton />
        <div className='flex'>
          <NextImage
            src={post?.author?.avatar?.formats.thumbnail.url}
            height={post?.author?.avatar?.formats.thumbnail.height}
            width={post?.author?.avatar?.formats.thumbnail.width}
            className='rounded-full'
          />
          <div>
            <p className='capitalize text-2xl text-gray-800'>
              {post?.author?.name}
            </p>
            <p className='text-gray-500'>{post?.author?.bio}</p>
          </div>
        </div>
        {/* blogsection */}
        <section className='px-5'>
          <div>
            <h1 className='my-2 text-3xl md:text-5xl text-gray-800'>
              {post?.title}
            </h1>
            <p className='text-sm text-gray-400'>
              Last Updated {formattedDate}
            </p>
            <p className='text-sm text-gray-500'>
              ~{approxReadingTime}{' '}
              {approxReadingTime > 1 ? 'minutes' : 'minute'} read
            </p>
            <div className='relative h-full'></div>
            <ReactMarkdown
              components={{
                a: ({ node, ...props }) => {
                  console.log(props);
                  return (
                    <Link
                      {...props}
                      href={props.href!}
                      className='text-green-500'
                    />
                  );
                },
              }}
              remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
            >
              {post?.description!}
            </ReactMarkdown>
          </div>
        </section>
      </div>
      <div className='border-2 border-gray-400 p-2 my-5'>
        <h4 className='text-2xl text-gray-600 my-3'>Some related posts</h4>
        <div className='space-y-4 md:space-y-0 md:grid gap-4 md:grid-cols-2'>
          {post?.playlist?.posts?.map((post) => {
            if (posts![0]?.title === post?.title) return;
            return (
              <BlogCard
                title={post?.title!}
                description={post?.description!}
                slug={post?.slug!}
                topics={post?.topics!}
                updated_at={post?.updated_at!}
                key={post?.slug}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Playlist;
