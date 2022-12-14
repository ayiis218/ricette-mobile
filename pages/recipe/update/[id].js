/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head';
import FormUpdate from '../../../components/organisms/formUpdateRecipe';
import MainLayout from '../../../layouts/MainLayout';
import { useRouter } from 'next/router';

function updateRecipe() {
   const router = useRouter();
   const id = router?.query?.id;
   return (
      <div>
         <Head>
            <title>Ricette mobile- update Recipe</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/icon.png" />
         </Head>
         <MainLayout>
            <FormUpdate data={id} />
         </MainLayout>
      </div>
   );
}

export default updateRecipe;
