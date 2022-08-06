import React from 'react';
import Image from 'next/image';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import style from './styles/detail.module.css';

import { BiLike, BiArrowBack } from 'react-icons/bi';
import { IoBookmarkOutline } from 'react-icons/io5';
import { FiPlay } from 'react-icons/fi';

const FormDetail = ({ data }) => {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={style.section}>
      <div className={style.hero}>
        <div className={style.iconBack}>
          <BiArrowBack size={30} color="#F5F5F5" />
        </div>
        {!data.length ? (
          <></>
        ) : (
          data.map((item, index) => (
            <div className={style.img}>
              <div className="row w-100">
                <div className="col-8">
                  {/* <Image src="/img/picture1.png" height={500} width={700} /> */}
                  <h3>{item.name_recipe}</h3>
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
          ))
        )}

        <div className={style.content}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="one" label="Ingredients" />
            {/* - 2 slices whole-grain bread (bakery-fresh recommended) - 1
              tablespoon hummus - 2 slices tomato - 1/2 small cucumber, thinly
              sliced lengthwise - 1 slice low-fat cheese
            </Tab> */}
            <Tab value="two" label="video-step" />
            {/* <Tab
              className={style.tab}
              eventKey="ingredients"
              title="Ingredients"
            > */}

            <Tab value="video-step" title="Video Step">
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
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default FormDetail;
