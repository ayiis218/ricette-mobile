import Head from 'next/head';
import FormDetailRecipe from '../../components/organisms/FormDetail';
import MainLayout from '../../layouts/MainLayout'

function home() {
  return (
    <div>
      <Head>
        <title>Form Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <MainLayout>
        <FormDetailRecipe />
      </MainLayout>
      
    </div>
  );
}

export default home;