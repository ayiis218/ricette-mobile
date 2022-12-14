import Head from 'next/head';
import FormUpdate from '../../../components/organisms/FormUpdate';

function update() {
   return (
      <div>
         <Head>
            <title>Ricette mobile - Edit Profile</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/icon.png" />
         </Head>
         <FormUpdate />
      </div>
   );
}

export default update;
