import React from 'react';
import Head from 'next/head';
import axios from 'axios';
import { API_URL } from '../../../helper/env';

import FormDetailRecipe from '../../../components/organisms/FormDetail';
import MainLayout from '../../../layouts/MainLayout';

export async function getServerSideProps(context) {
  const { id } = context.query;
  const response = await axios({
    method: 'GET',
    url: `${API_URL}recipe/${id}`,
  });
  return {
    props: {
      data: response?.data?.data,
    },
  };
}

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
