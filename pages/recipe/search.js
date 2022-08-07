import Head from 'next/head';
import FormSearch from '../../components/organisms/FormSearch';
import MainLayout from '../../layouts/MainLayout';
import axios from 'axios';

export async function getStaticProps() {
  const popularRecipe = await axios({
    method: 'GET',
    url: 'http://localhost:8120/recipe',
  });
  return {
    props: {
      dataPopular: popularRecipe?.data.data,
    },
  };
}

function search({ dataPopular }) {
  return (
    <div>
      <Head>
        <title>Form Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <MainLayout>
        <FormSearch data={dataPopular} />
      </MainLayout>
    </div>
  );
}

export default search;
