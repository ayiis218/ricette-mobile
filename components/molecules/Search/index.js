import React from "react";
import Image from "next/image";
import style from "./style.module.css"

import InputText from "../../atoms/InputText"

function index (props) {
    return (
        <section className={style.section}>
            <div className="container">
                <div className="Row">
                    <div className="col">
                        <div className={style.input}>
                            <form id="search" action="#">
                                <InputText
                                    placeholder="Search Pasta, Bread, etc"
                                    name="search"
                                    type="search"
                                    value={props.valueEmail}
                                    onChange={props.onChange}
                                    onkeypress="handle"
                                /> 
                            </form> 
                        </div>  
                    </div>
                </div>
            </div>
        </section>
    )
}

export default index