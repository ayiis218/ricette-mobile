import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./style.module.css"

function index () {
    return (
        <section className={style.slide}>
            <div className="container">
                <div className="Row">
                    <div className="col">
                        <h1 className="heading">New Recipes</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card-service">
                            <div className="detail">
                                <p className="label">Banana Lemonilo</p>
                            </div>
                            <div className="img-service">
                                <Image 
                                    src="/img/picture1.png" 
                                    alt="picture" 
                                    width="150px" 
                                    height="250px" 
                                />
                                <Image 
                                    src="/img/picture1.png" 
                                    alt="picture" 
                                    width="150px" 
                                    height="250px" 
                                />
                                <Image 
                                    src="/img/picture1.png" 
                                    alt="picture" 
                                    width="150px" 
                                    height="250px" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default index