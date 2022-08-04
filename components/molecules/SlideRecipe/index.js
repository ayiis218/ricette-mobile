import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from './style.module.css';

function index({ data }) {
  return (
    <div className={style.section}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="heading">New Recipes</h1>
          </div>
          {!data.length ? (
            <></>
          ) : (
            data.map((item, index) => (
              <div className="col-md-12 col-lg-12">
                <Link href="/detail">
                  <div>
                    <p className={style.label}>{item.name}</p>
                  </div>
                </Link>
                <div className={style.img}>
                  <Image
                    src={`${
                      item.images
                        ? `localhost:8120/${item.images}`
                        : `localhost:8120/picture/recipe/original.jpg`
                    }`}
                    alt="picture"
                    height={220}
                    width={190}
                    // "/img/picture1.png"
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default index;
