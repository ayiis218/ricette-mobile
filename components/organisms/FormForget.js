/* eslint-disable no-unused-vars */
import React from 'react';
import Image from 'next/image';

import InputText from '../atoms/InputText';
import Button from '../atoms/Button';

import { FiUser } from 'react-icons/fi';
import style from './styles/forget.module.css';

const FormForgot = (props) => {
   return (
      <div className={style.section}>
         <div className="container">
            <div className="row">
               <div className="col-md-6 col-lg-12 m-0 d-flex align-items-center d-flex justify-content-center">
                  <div className={style.left}>
                     <span>
                        <Image
                           src="/img/user.png"
                           width={200}
                           height={200}
                           alt="user"
                        />
                     </span>
                  </div>
               </div>
               <div className="col-md-6 col-lg-12 m-0 d-flex align-items-center d-flex justify-content-center">
                  <div className={style.right}>
                     <h4>Forgot Password</h4>
                     <p>
                        Registered e-mail address to send your password reset
                     </p>
                     <form>
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
                        <div className="row">
                           <div className="col d-flex justify-content-center">
                              <Button
                                 className={`btn w-100 mt-3 ${style.button}`}
                                 type="submit"
                              >
                                 Reset Password
                              </Button>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FormForgot;
