import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Link from 'next/link';

import style from './styles/detail.module.css';

import { BiLike, BiArrowBack } from 'react-icons/bi';
import { IoBookmarkOutline } from 'react-icons/io5';
import { FiPlay } from 'react-icons/fi';

const FormDetail = ({ data }) => {
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
        {!data.length ? (
          <></>
        ) : (
          data.map((item, index) => (
            <div className={style.image}>
              <div className="col-md-12 col-lg-12">
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
                      ? `http://localhost:8120/${item.images}`
                      : `http://localhost:8120/picture/recipe/original.jpg`
                  }`}
                  alt={item.images}
                  height={360}
                  width={480}
                />
              </div>
            </div>
          ))
        )}
        {!data.length ? (
          <></>
        ) : (
          data.map((item, index) => (
            <div className={style.content}>
              <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
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
                      <div className="row">
                        <div className="col-4">
                          <div className={style.button}>
                            <FiPlay size={30} color="#ffffff" />
                          </div>
                        </div>
                        <div className="col-8">
                          <h4>Step 1</h4>
                          <p>Boil eggs for 3 minutes</p>
                        </div>
                      </div>
                    </div>
                    <div className={style.videos}>
                      <div className="row">
                        <div className="col-4">
                          <div className={style.button}>
                            <FiPlay size={30} color="#ffffff" />
                          </div>
                        </div>
                        <div className="col-8">
                          <h4>Step 1</h4>
                          <p>Boil eggs for 3 minutes</p>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </TabContext>
              </Box>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FormDetail;
