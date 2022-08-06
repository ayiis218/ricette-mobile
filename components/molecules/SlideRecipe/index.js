import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import style from './style.module.css';

function index({ data }) {
  return (
    <div className={style.section}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="heading">New Recipes</h1>
          </div>
          <Swiper
            slidesPerView={3}
            slidesPerGroup={3}
            loopFillGroupWithBlank
            navigation
            modules={[Navigation]}
            breakpoints={{
              100: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 3,
              },
            }}
          >
            {!data.length ? (
              <></>
            ) : (
              data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className={style.card}>
                    <div className={style.image}>
                      <div className="col-md-12 col-lg-12">
                        <Link href="/recipe/detail">
                          <h5 className={style.label}>{item.name_recipe}</h5>
                        </Link>
                        <img
                          src={`${
                            item.images
                              ? `http://localhost:8120/${item.images}`
                              : `http://localhost:8120/picture/recipe/original.jpg`
                          }`}
                          alt={item.images}
                          height={220}
                          width={140}
                          //
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default index;
