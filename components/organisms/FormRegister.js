import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import style from './styles/register.module.css';

import InputText from '../atoms/InputText';
import Button from '../atoms/Button';

import { FiUser } from 'react-icons/fi';
import { AiOutlineMail, AiOutlineLock, AiOutlineUnlock } from 'react-icons/ai';
import { IoCallOutline } from 'react-icons/io5';

const FormRegister = (props) => {
  const router = useRouter();
  const handleLogin = () => {
    router.replace('/auth/login');
  };
  return (
    <div className={style.section}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-12 m-0 d-flex justify-content-center">
            <div className={style.right}>
              <h4>Let's Get Started !</h4>
              <p>Create new account to access all features.</p>
              <div className="d-flex align-items-center d-flex m-5">
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
                        placeholder="Name"
                        style={{ color: 'var(--color-3)' }}
                      />
                    </span>
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <AiOutlineMail color="var(--color-3)" size={30} />
                      <InputText
                        type="text"
                        className="form-control"
                        placeholder="E-Mail"
                        style={{ color: 'var(--color-3)' }}
                      />
                    </span>
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <IoCallOutline color="var(--color-3)" size={30} />
                      <InputText
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        style={{ color: 'var(--color-3)' }}
                      />
                    </span>
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <AiOutlineLock color="var(--color-3)" size={30} />
                      <InputText
                        type="password"
                        className="form-control"
                        placeholder="Create New Password"
                        style={{ color: 'var(--color-3)' }}
                      />
                    </span>
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <AiOutlineUnlock color="var(--color-3)" size={30} />
                      <InputText
                        type="password"
                        className="form-control"
                        placeholder="New Password"
                        style={{ color: 'var(--color-3)' }}
                      />
                    </span>
                  </div>
                  <div className="row">
                    <div className="col d-flex justify-content-center">
                      <Button
                        className={`btn w-100 mt-3 ${style.button}`}
                        type="submit"
                      >
                        CREATE
                      </Button>
                    </div>
                  </div>
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
  );
};

export default FormRegister;
