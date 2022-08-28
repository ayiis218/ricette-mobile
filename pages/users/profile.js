/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Head from 'next/head';
import React from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { API_URL } from '../../helper/env';
import FormProfile from '../../components/organisms/FormProfile';
import MainLayout from '../../layouts/MainLayout';

export async function getServerSideProps(context) {
   try {
      const decoded = jwtDecode(context?.req?.cookies?.token);
      const response = await axios.get(`${API_URL}users/${decoded.id_users}`, {
         headers: {
            Authorization: `Bearer ${context?.req?.cookies?.token}`,
         },
      });

      return {
         props: {
            data: response.data.data,
            error: false,
            message: 'Success get data',
         },
      };
   } catch (error) {
      return {
         props: {
            data: null,
            error: true,
            message: error.message,
         },
      };
   }
}

function profile({ data }) {
   return (
      <div>
         <Head>
            <title>Ricette mobile - Form Profile</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/icon.png" />
         </Head>
         <MainLayout>
            <FormProfile data={data} />
         </MainLayout>
      </div>
   );
}

export default profile;
