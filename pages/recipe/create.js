import Head from 'next/head';
import FormAdd from '../../components/organisms/FormAdd';
import MainLayout from '../../layouts/MainLayout';

function createRecipe() {
   return (
      <div>
         <Head>
            <title>Ricette mobile- Create Recipe</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/icon.png" />
         </Head>
         <MainLayout>
            <FormAdd />
         </MainLayout>
      </div>
   );
}

export default createRecipe;
