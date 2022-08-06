import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import style from './styles/home.module.css';

/* import Search from '../molecules/Search';
import Slider from '../molecules/SlideRecipe';
import Popular from '../molecules/SlidePopular';
import NavBar from '../atoms/Navbar';
import axios from 'axios'; */

const FormHome = (props) => {
  /*   const router = useRouter();
  const [recipe, setRecipe] = useState(props.recipe);

  useEffect(() => {
    recipe;
  }, [recipe]);

  const handleSubmit = () => {
    router.push('/recipe/detail');
  }; */

  // const img = recipe.recipe.images ?
  return (
    <div className={style.home}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12 d-flex justify-content-center">
            <Search />
          </div>
          <div className="col-md-12 col-lg-12 d-flex justify-content-center">
            <Slider data={props} />
          </div>
          <div className="col-md-12 col-lg-12 d-flex justify-content-center">
            <Popular data={props} />
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
