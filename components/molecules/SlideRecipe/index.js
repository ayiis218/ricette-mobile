import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./style.module.css"

function index () {
    return (
        <div className={style.section}>
            <div className="container">
                <div className="Row">
                    <div className="col">
                        <h4 className="heading">New Recipes</h4>
                    </div>
                    <div className="col-lg-12 d-flex justify-content-center">
                        <Link href="/detail">
                            <div>
                                <p className={style.label}>Banana Lemonilo</p>
                            </div>
                        </Link>
                            <div className={style.img}>
                                <Image 
                                    src="/img/picture1.png" 
                                    alt="picture"
                                    height={270}
                                    width={250} 
                                />
                            </div>
                            
                    </div>
                </div>
        
            </div>
        </div>
    )
}

export default index