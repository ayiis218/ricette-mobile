import React from "react";
import style from "./styles/home.module.css";

import Search from "../molecules/Search";
import Slider from "../molecules/SlideRecipe";
import Popular from "../molecules/SlidePopular";
import NavBar from "../atoms/Navbar"

const FormHome = () => {
    return (
        <div className={style.home}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12 d-flex justify-content-center">
                        <Search />
                    </div>
                    <div className="col-md-12 col-lg-12 d-flex justify-content-center">
                        <Slider />
                    </div>
                    <div className="col-md-12 col-lg-12 d-flex justify-content-center">
                        <Popular />
                    </div>
                    <div className="col-md-12 col-lg-12 d-flex align-items-center">
                        <NavBar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormHome