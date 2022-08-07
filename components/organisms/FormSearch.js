import React from 'react';

import style from './styles/recipe.module.css';

import Search from '../molecules/Search';

function search({ data }) {
  return (
    <div className={style.section}>
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-10">
            <Search />
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

export default search;
