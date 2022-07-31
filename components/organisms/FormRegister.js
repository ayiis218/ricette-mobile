import React from "react";
import style from "./styles/register.module.css"
import Link from "next/link";
import Image from "next/image";

// import Image from "next/image";
import InputText from "../atoms/InputText"
import Button from "../atoms/Button"

const FormRegister = (props) => {
    return (
        <div className={style.section}>
            <div className="container" >
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center">
                        {/* <div className={style.left}>
                            <div className={style.title}>
                                <Image src="/img/user.png" width={200} height={200} alt="user" />
                            </div>
                            
                        </div> */}
                    </div>
                    <div className="col-md-6 col-lg-12 m-0 d-flex justify-content-center">
                        <div className={style.right}>
                            <h4 className={style.title}>Let's Get Started !</h4>
                            <p className={style.subtitle}>Create new account to access all features.</p>
                            <div className="d-flex align-items-center d-flex m-5">
                                <form>
                                    <div className={style.form_input}>
                                        <InputText
                                            placeholder="Name"
                                            name="name"
                                            type="text"
                                        />
                                    </div>
                                    <div className={style.form_input}>
                                        <InputText
                                            placeholder="E-Mail"
                                            name="email"
                                            type="email"
                                        />
                                    </div>
                                    <div className={style.form_input}>
                                        <InputText
                                            placeholder="Phone Number"
                                            name="pone"
                                            type="phone"
                                        />
                                    </div>
                                    <div className={style.form_input}>
                                        <InputText
                                            placeholder="Create New password"
                                            name="password"
                                            type="password"
                                        />
                                    </div>
                                    <div className={`input-text ${style.form_input}`}>
                                        <InputText
                                            placeholder="New Password"
                                            name="rePassword"
                                            type="password"
                                        />
                                    </div>

                                    {/* <div className={props.classForgot}>
                                        <Link href="/auth/forgot">Forgot Password?</Link>
                                    </div> */}
                                    <Button
                                        className={`btn w-100 mt-3 ${style.button}`}
                                    > CREATE
                                    </Button>
                                    <div div className={style.option}>
                                        Don&apos;t have an account?{' '}
                                        <Link href="/auth/login">Log in Here</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormRegister