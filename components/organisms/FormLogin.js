import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./styles/login.module.css";
import {AccountCircle} from '@mui/icons-material/AccountCircle';
import {InputAdornment} from '@mui/material/InputAdornment';

import InputText from "../atoms/InputText"
import Button from "../atoms/Button"
/* import {Icon} from "semantic-ui-react"
import { FiUser } from "react-icons/fi";
import { CgLock } from "react-icons/cg"; */

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
                            <h4 className={style.title}>Welcome</h4>
                            <p className={style.subtitle}>Log in to your exiting account.</p>
                            <form>
                                <div className={style.form_input}>
                                    <InputText
                                        placeholder="Enter email address"
                                        name="email"
                                        type="email"
                                        value={props.valueEmail}
                                        onChange={props.onChange}
                                        id="input-with-icon-textfield"
                                        InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                            <AccountCircle />
                                            </InputAdornment>
                                        ),
                                        }}
                                        variant="standard"
                                    />                                    
                                </div>
                                <div className={`form-group position-relative ${style.form_input}`}>
                                    <InputText
                                        className="fa-thin fa-user"
                                        placeholder="&#xf023;Password"
                                        name="password"
                                        type="password"
                                        value={props.valuePassword}
                                        onChange={props.onChange}
                                        iconPosition='left'
                                    />
                                </div>
                                <Button
                                    className={`btn w-100 mt-3 ${style.button}`}
                                > LOG IN
                                </Button>
                            </form>
                            <div className="w-100 d-flex flex-column">
                                <div className="w-100 d-flex justify-content-center align-items-center">
                                    <div div className={style.option}>
                                        Don&apos;t have an account?
                                        <Link href="/auth/register">Sign up</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormLogin