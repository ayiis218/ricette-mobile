import Head from "next/head";
import FormLogin from "../../components/organisms/FormLogin";

function login () {
return (
    <div>
        <Head>
            <title>Form Login</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/icon.png" />
        </Head>
        <FormLogin />
    </div> 
) 
}

export default login