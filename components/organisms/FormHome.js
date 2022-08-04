import React from 'react';
import style from './styles/home.module.css';

import Search from '../molecules/Search';
import Slider from '../molecules/SlideRecipe';
import Popular from '../molecules/SlidePopular';
import NavBar from '../atoms/Navbar';
import axios from 'axios';

export async function getStaticProps(context) {
  const response = await axios({
    method: 'GET',
    url: `localhost:8120/recipe`,
  });
  return {
    props: {
      data: response.data.data,
    },
    revalidate: 15,
  };
}

const FormHome = ({ data }) => {
  // const { latesRecipe } = useSelector((state) => state)
  return (
    <div className={style.home}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12 d-flex justify-content-center">
            <Search />
          </div>
          <div className="col-md-12 col-lg-12 d-flex justify-content-center">
            <Slider data={data} />
          </div>
          <div className="col-md-12 col-lg-12 d-flex justify-content-center">
            <Popular data={data} />
          </div>
          <div className="col-md-12 col-lg-12 d-flex justify-content-center">
            <NavBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormHome;
