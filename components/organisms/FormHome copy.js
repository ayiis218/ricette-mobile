import React from 'react';
import style from './styles/home.module.css';

import MainLayout from '../../layouts/MainLayout';
import Search from '../molecules/Search';
import Slider from '../molecules/SlideRecipe';
import Popular from '../molecules/SlidePopular';
// import NavBar from '../atoms/Navbar';

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const FormHome = () => {
  // const { latesRecipe } = useSelector((state) => state)
  return (
    <div className={style.home}>
      <MainLayout>
        <div className="col-md-12 col-lg-12 d-flex justify-content-center">
          <Search />
        </div>
        <div className="col-md-12 col-lg-12 d-flex justify-content-center">
          <Slider />
        </div>
        <div className="col-md-12 col-lg-12 d-flex justify-content-center">
          <Popular />
        </div>
      </MainLayout>
    </div>
  );
};

export default FormHome;
