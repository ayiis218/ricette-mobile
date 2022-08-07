import React from 'react';
import Link from 'next/dist/client/link';

import style from './styles/recipe.module.css';

import { IoIosArrowBack } from 'react-icons/io';

function myRecipe({ data }) {
  return (
    <div className={style.section}>
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-lg-2">
            <div className={style.back}>
              <Link href="/users/profile">
                <IoIosArrowBack size={40} />
              </Link>
            </div>
          </div>
          <div className="col-md-10 col-lg-10">
            <h2>My Recipe</h2>
          </div>
        </div>
        {!data.length ? (
          <></>
        ) : (
          data.map((item, index) => (
            <div className="row mt-5">
              <div className="col-md-3 col-lg-3">
                <div className={style.images}>
                  <img
                    src={`${
                      item.images
                        ? `http://localhost:8120/${item.images}`
                        : `http://localhost:8120/picture/recipe/original.jpg`
                    }`}
                    alt={item.images}
                    width={90}
                    height={90}
                  ></img>
                </div>
              </div>
              <div className="col-md-5 col-lg-5">
                <div className={style.title}>
                  <h4>{item.name_recipe}</h4>
                  <span>{item.name}</span>
                  <h5>{item.comment}</h5>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default myRecipe;
