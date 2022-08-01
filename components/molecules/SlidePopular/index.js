import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./style.module.css"

function index () {
    return (
        <section className={style.section}>
            <div className="container">
                <div className="Row">
                    <div className="col">
                        <h1 className="heading">Popular Recepies</h1>
                    </div>
                </div>
                <div className="row align-items-start">
                    <div className="col-md-12 m-3">
                        <p className="label">Orange La Pasta</p>
                        <div className={style.img}>
                            <Image 
                                src="/img/garpu.png" 
                                alt="picture" 
                                width={95} 
                                height={95} 
                            />
                        </div>
                    </div>
                    {/* <div className="col-md-12 m-3">
                        <p className="label">Orange La Pasta</p>
                        <div className={style.img}>
                            <Image 
                                src="/img/panci.png" 
                                alt="picture" 
                                width={90} 
                                height={90}
                            />
                        </div>
                    </div>
                    <div className="col-md-12 m-3">
                        <p className="label">Orange La Pasta</p>
                        <div className={style.img}>
                            <Image 
                                src="/img/lobster.png" 
                                alt="picture" 
                                width={90} 
                                height={90} 
                            />
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default index