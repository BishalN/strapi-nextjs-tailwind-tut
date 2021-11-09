import type { NextPage } from 'next';
import { request } from 'graphql-request';
import { exQuery } from '../queries/homepage';
import { HomePageQuery } from '../gql/graphql';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [data, setData] = useState<HomePageQuery>();
  const query = async () => {
    const data: HomePageQuery = await request(
      'http://localhost:1337/graphql',
      exQuery
    );
    setData(data);
  };
  useEffect(() => {
    query();
  }, []);
  console.log(data?.homepage?.About?.blogs);
  return (
    <div>
      <p className='font-bold italic'>This is tailwindcss</p>
    </div>
  );
};

export default Home;
