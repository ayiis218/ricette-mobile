/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Tab } from '@mui/material';
import { TabList, TabPanel, TabContext } from '@mui/lab';

import Comment from '../molecules/SlideComment';
import { API_URL } from '../../helper/env';

import { FiPlay } from 'react-icons/fi';
import { BiLike, BiArrowBack } from 'react-icons/bi';
import { IoBookmarkOutline } from 'react-icons/io5';
import style from './styles/detail.module.css';
import { useRouter } from 'next/router';

const FormDetail = ({ data }) => {
   const router = useRouter();
   const [value, setValue] = useState('1');

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
      <div className={style.section}>
         <div className={style.hero}>
            <div className={style.iconBack}>
               <Link href="/">
                  <BiArrowBack size={30} color="#F5F5F5" />
               </Link>
            </div>
            {data.map((item, index) => (
               <div className={style.image}>
                  <div className="col-12 col-lg-12">
                     <h1>{item.name_recipe}</h1>
                     <h6>By. {item.name}</h6>
                     <button type="button" className={style.save}>
                        <IoBookmarkOutline size={20} />
                     </button>
                     <button type="button" className={style.like}>
                        <BiLike size={20} />
                     </button>
                     <img
                        src={`${
                           item.images
                              ? `${API_URL}${item.images}`
                              : `${API_URL}picture/recipe/original.jpg`
                        }`}
                        alt={item.images}
                     />
                  </div>
               </div>
            ))}
            {data.map((item, index) => (
               <>
                  <div className={style.content}>
                     <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                           <Box
                              sx={{ borderBottom: 1, borderColor: 'divider' }}
                           >
                              <TabList
                                 onChange={handleChange}
                                 aria-label="lab API tabs example"
                              >
                                 <Tab label="Ingredients" value="1" />
                                 <Tab label="Video Step" value="2" />
                              </TabList>
                           </Box>
                           <TabPanel value="1" label="Ingredients">
                              {item.ingredients}
                           </TabPanel>
                           <TabPanel value="2" label="Video Step">
                              <div className={style.videos}>
                                 <div
                                    className="row"
                                    onClick={() =>
                                       router.push(
                                          `/recipe/video/${item.id_recipe}`
                                       )
                                    }
                                 >
                                    <div className="col-4">
                                       <div className={style.button}>
                                          <FiPlay size={30} color="#ffffff" />
                                       </div>
                                    </div>
                                    <div className="col-8">
                                       <h4 className="mt-2">video tutorial</h4>
                                    </div>
                                 </div>
                              </div>
                           </TabPanel>
                        </TabContext>
                     </Box>
                  </div>
                  <div className={style.Comment}>
                     <Comment data={item.id_recipe} />
                  </div>
               </>
            ))}
         </div>
      </div>
   );
};

export default FormDetail;
