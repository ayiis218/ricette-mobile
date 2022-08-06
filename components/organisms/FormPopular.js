import React from 'react';
// import Link from 'next/link';

import style from './styles/popular.module.css';

const FormPopular = () => {
  return (
    <section className={style.popularRecipe}>
      <div className="d-flex justify-content-center mb-4">
        <h3>Popular Recipes</h3>
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
                <h6>Rawon</h6>
                <p>Spicy, Salted, Tasty</p>
                <div className="d-flex gap-1 align-items-center">
                  <img src="/icons/star.png" alt="star" height="12px" />
                  <span>4.7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
export default FormPopular;
