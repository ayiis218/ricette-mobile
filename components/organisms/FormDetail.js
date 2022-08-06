import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import style from './styles/detail.module.css';

import { BiLike, BiArrowBack } from 'react-icons/bi';
import { IoBookmarkOutline } from 'react-icons/io5';
import { FiPlay } from 'react-icons/fi';

const FormDetail = ({ data }) => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={style.section}>
      <div className={style.hero}>
        <div className={style.iconBack}>
          <BiArrowBack size={30} color="#F5F5F5" />
        </div>
        {/* {!data.length ? (
          <></>
        ) : (
          data.map((item, index) => ( */}
        <div className={style.img}>
          <div className="row w-100">
            <div className="col-8">
              {/* <Image src="/img/picture1.png" height={500} width={700} /> */}
              <h3>bakso</h3>
              <p>By Chef Ronald Humson</p>
            </div>
            <div className="col-4 p-0">
              <div className={style.buttonControl}>
                <button type="button" className={style.save}>
                  <IoBookmarkOutline size={20} />
                </button>
                <button type="button" className={style.like}>
                  <BiLike size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* ))
        )} */}

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
                - 2 slices whole-grain bread (bakery-fresh recommended) - 1
                tablespoon hummus - 2 slices tomato - 1/2 small cucumber, thinly
                sliced lengthwise - 1 slice low-fat cheese
              </TabPanel>
              <TabPanel value="2" label="Video Step">
                <div className={style.playContainer}>
                  <div className="row">
                    <div className="col-4">
                      <div className={style.buttonPlay}>
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
      </div>
    </div>
  );
};

export default FormDetail;
