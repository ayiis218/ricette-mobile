import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./styles/forget.module.css"

import InputText from "../atoms/InputText"
import Button from "../atoms/Button"

const FormLogin = (props) => {
    return (
        <div className={style.section}>
            <div className="container" >
                <div className="row">
                    <div className="col-md-6 col-lg-12 m-0 align-self-center d-flex align-items-center d-flex justify-content-center">
                        <div className={style.left}>
                            <div className={style.title}>
                                <Image src="/img/user.png" width={200} height={200} alt="user" />
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-12 m-0 d-flex align-items-center d-flex justify-content-center">
                        <div className={style.right}>
                            <h5 className={style.title}>Forgot Password?</h5>
                            <p className={style.subtitle}>send your email to password reset</p>
                            <form>
                                <div className={style.form_input}>
                                    <InputText
                                        placeholder="examplexxx@gmail.com"
                                        name="email"
                                        type="email"
                                        value={props.valueEmail}
                                        onChange={props.onChange}
                                    />
                                </div>
                                <Button
                                    className={`btn w-100 mt-3 ${style.button}`}
                                > Reset Password
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormLogin