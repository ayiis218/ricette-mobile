import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./style.module.css"

function index () {
    return (
        <div className={style.section}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="heading">New Recipes</h1>
                    </div>
                    <div className="col-md-12 col-lg-12">
                        <Link href="/detail">
                        <div>
                            <p className={style.label}>Banana Lemonilo</p>
                        </div>
                        </Link>
                        <div className={style.img}>
                            <Image 
                                src="/img/picture1.png" 
                                alt="picture"
                                height={220}
                                width={190} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index