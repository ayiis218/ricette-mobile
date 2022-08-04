/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
// import * as Type from '../redux/auth/type';
import { FiSearch } from 'react-icons/fi';
import Slider from 'react-slick';

// custom components
import MainLayout from '../layouts/MainLayout';
import style from '../styles/pages/Home.module.css';
import Link from 'next/link';

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Home() {
  /*   const dispatch = useDispatch();
  const router = useRouter(); */

  return (
    <div id="home">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MainLayout>
          <div>
            {/* Search Bar */}
            <div className={style.searchBar}>
              <div className="input-group input-group-lg mb-3">
                <span className="input-group-text test" id="basic-addon1">
                  <FiSearch />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Pasta, Bread, etc"
                  aria-label="Search Pasta, Bread, etc"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            {/* End Of Search Bar */}

            {/* New Recipe */}
            <section className={style.newRecipe}>
              <h3>New Recipes</h3>

              {/* Card Item */}
              <div
                style={{
                  display: 'flex',
                  gap: '20px',
                  overflowX: 'auto',
                  width: '30vw',
                  marginTop: '20px',
                }}
              >
                {[...new Array(6)].map((item, key) => (
                  <div
                    key={key}
                    style={{
                      backgroundImage: `url('https://www.sahabatufs.com/img/news/09.%20UFS_Oktober%202019_Header.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: '200px',
                      borderRadius: '15px',
                      padding: '10px',
                      display: 'flex',
                      alignItems: 'flex-end',
                    }}
                  >
                    <div style={{ width: '130px' }}>
                      <h6
                        style={{
                          color: '#fff',
                          textShadow: '1px -1px 7px rgba(0,0,0,1)',
                        }}
                      >
                        Karedok Plus Plus
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            {/* End Of New Recipe */}

            {/* Popular For You */}
            <section className={style.popularForYou}>
              <h3 className="mb-3">Popular for You</h3>

              <div className="row">
                {[
                  {
                    name: 'Soup',
                    image: '/images/group-icon-1.png',
                    link: '/popular/soup',
                  },
                  {
                    name: 'Chicken',
                    image: '/images/group-icon-2.png',
                    link: '/popular/soup',
                  },
                  {
                    name: 'Seafood',
                    image: '/images/group-icon-3.png',
                    link: '/popular/soup',
                  },
                  {
                    name: 'Dessert',
                    image: '/images/group-icon-1.png',
                    link: '/popular/soup',
                  },
                ].map((item, index) => (
                  <div className="col-3" key={index}>
                    <div className="d-flex justify-center">
                      <img
                        src={item?.image}
                        alt="icon"
                        width="70px"
                        height="70px"
                      />
                    </div>
                    <p className="text-center">{item?.name}</p>
                  </div>
                ))}
              </div>
            </section>
            {/* End Of Popular For You */}

            {/* Popular Recipes */}
            <section className={style.popularRecipe}>
              <div className="d-flex justify-between mb-4">
                <h3>Popular Recipes</h3>

                <Link href="/popular-recipe" passHref>
                  <a style={{ textDecoration: 'none', color: '#6D61F2' }}>
                    More info
                  </a>
                </Link>
              </div>

              {[...new Array(4)].map((item, index) => (
                <div
                  className="card"
                  style={{
                    borderRadius: '15px',
                    padding: '10px',
                    border: 'none',
                    'box-shadow': '2px 2px 5px 1px rgba(0,0,0,0.12)',
                    '-webkit-box-shadow': '2px 2px 5px 1px rgba(0,0,0,0.12)',
                    '-moz-box-shadow': '2px 2px 5px 1px rgba(0,0,0,0.12)',
                    marginBottom: '20px',
                    cursor: 'pointer',
                  }}
                  key={index}
                >
                  <div className="row">
                    <div className="col-2">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Lotek_Indonesian_food.jpg/1507px-Lotek_Indonesian_food.jpg"
                        width="80px"
                        height="80px"
                        style={{ borderRadius: '16px', objectFit: 'cover' }}
                        alt="image"
                      />
                    </div>
                    <div className="col-10">
                      <div style={{ marginLeft: '20px' }}>
                        <h6>Lotek mba ni'mah</h6>
                        <p>Spicy, Salted, Tasty</p>
                        <div className="d-flex gap-1 align-items-center">
                          <img
                            src="/images/star.png"
                            alt="star"
                            height="12px"
                          />
                          <span>4.7</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </section>
            {/* End Of Popular Recipes */}
          </div>
        </MainLayout>
      </main>
    </div>
  );
}