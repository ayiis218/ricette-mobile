import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import style from './styles/login.module.css';

import InputText from '../atoms/InputText';
import Button from '../atoms/Button';

import { FiUser } from 'react-icons/fi';
import { FiLock } from 'react-icons/fi';

const FormLogin = (props) => {
  // const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    axios
      .post('http://localhost:8120/login', { email, password })
      .then((response) => {
        router.replace('/');
      })
      .catch(({ response }) => {
        const message = response?.data?.message;
        setError({ errorMsg: message });
      });
  };
  return (
    <div className={style.section}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-12 m-0 align-self-center d-flex align-items-center d-flex justify-content-center">
            <div className={style.left}>
              <div className={style.title}>
                <Image
                  src="/img/user.png"
                  width={200}
                  height={200}
                  alt="user"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-12 m-0 d-flex align-items-center d-flex justify-content-center">
            <div className={style.right}>
              <h4>Welcome</h4>
              <p>Log in to your exiting account.</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleLogin();
                }}
              >
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <FiUser color="var(--color-3)" size={30} />
                    <InputText
                      type="text"
                      className="form-control"
                      placeholder="examplexxx@gmail.com"
                      style={{ color: 'var(--color-3)' }}
                    />
                  </span>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <FiLock color="var(--color-3)" size={30} />
                    <InputText
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      style={{ color: 'var(--color-3)' }}
                    />
                  </span>
                </div>
                {/* <div className={props.classForgot}>
                                        <Link href="/auth/forgot">Forgot Password?</Link>
                                    </div> */}
                <div className="row">
                  <div className="col d-flex justify-content-center">
                    <Button
                      className={`btn w-100 mt-3 ${style.button}`}
                      type="submit"
                    >
                      POST
                    </Button>
                  </div>
                </div>
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
  );
};

export default FormLogin;
