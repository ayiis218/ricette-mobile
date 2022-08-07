import Head from 'next/head';
import FormForgot from '../../components/organisms/FormForget';

function forgot() {
  return (
    <div>
      <Head>
        <title>Form Forget</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <FormForgot />
    </div>
  );
}

export default forgot;
