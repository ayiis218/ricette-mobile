import React from "react";

import Search from "";
import Slider from "../molecules/SlideRecipe";
import Popular from "../molecules/SlidePopular";
import NavBar from "../atoms/Navbar"

const FormHome = () => {
    return (
        <>
            <Search />
            <Slider />
            <Popular />
            <NavBar />
        </>
    )
}

export default FormHome