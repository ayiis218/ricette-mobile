import Head from 'next/head';
import FormDetailRecipe from '../../components/organisms/FormDetail';
import MainLayout from '../../layouts/MainLayout';

function detailRecipe({ data }) {
  return (
    <div>
      <Head>
        <title>Detai Recipe</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <MainLayout>
        <FormDetailRecipe data={data} />
      </MainLayout>
    </div>
  );
}

export default detailRecipe;
