import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Cookies from 'js-cookie';
import alert from 'sweetalert2';
import { useRouter } from 'next/router';
import { toastr } from '../../helper/toastr';
import { login } from '../../redux/action/auth';
import InputText from '../atoms/InputText';
import Button from '../atoms/Button';

import { FiUser } from 'react-icons/fi';
import { FiLock } from 'react-icons/fi';
import style from './styles/login.module.css';

const FormLogin = () => {
   const router = useRouter();
   const [loading, setLoading] = useState(false);
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleLogin = (e) => {
      e.preventDefault();

      if (!email || !password) {
         alert.fire({
            title: 'Error!',
            text: 'All field must be filled!',
            icon: 'error',
         });
      } else {
         setLoading(true);
         login({ email, password })
            .then((res) => {
               Cookies.set('token', res?.token);
               Cookies.set('user', res?.user);
               const tkn = res?.token;
               if (tkn == undefined) {
                  alert.fire({
                     title: 'Failed!',
                     text: `Cek Email`,
                     icon: 'error',
                  });
               } else {
                  alert.fire({
                     title: 'Success!',
                     text: 'Login Success',
                     icon: 'success',
                  });
                  router.push('/');
               }
            })
            .catch((err) => {
               if (err.response.data.code === 422) {
                  const { error } = err.response.data;
                  error.map((el) => toastr(el, 'error'));
               } else {
                  alert.fire({
                     title: 'Failed!',
                     text: `Cek password ${err.message}`,
                     icon: 'error',
                  });
               }
            })
            .finally(() => {
               setLoading(false);
            });
      }
   };

   useEffect(() => {
      if (Cookies === undefined) {
         alert.fire({
            title: 'Failed!',
            text: `Login Failed`,
            icon: 'error',
         });
      }
   }, []);

   return (
      <div className={style.section}>
         <div className="container">
            <div className="row">
               <div className="col-md-6 col-lg-12 m-0 d-flex align-items-center d-flex justify-content-center">
                  <div className={style.left}>
                     <span>
                        <Image
                           src="/img/chef.jpg"
                           width={200}
                           height={200}
                           alt="user"
                        />
                     </span>
                  </div>
               </div>
               <div className="col-md-6 col-lg-12 m-0 d-flex align-items-center d-flex justify-content-center">
                  <div className={style.right}>
                     <h4>Welcome</h4>
                     <p>Log in to your exiting account.</p>
                     <form onSubmit={handleLogin}>
                        <div className="input-group mb-3">
                           <span className="input-group-text" id="basic-addon1">
                              <FiUser color="var(--color-3)" size={30} />
                              <InputText
                                 type="text"
                                 className="form-control"
                                 placeholder="examplexxx@gmail.com"
                                 style={{ color: 'var(--color-3)' }}
                                 onChange={(e) => {
                                    setEmail(e.target.value);
                                 }}
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
                                 onChange={(e) => {
                                    setPassword(e.target.value);
                                 }}
                              />
                           </span>
                        </div>
                        <div className={`d-flex justify-content-end`}>
                           <Link href="/auth/forgot">
                              <p className={style.link}>Forgot Password?</p>
                           </Link>
                        </div>
                        <div className="row">
                           <div className="col d-flex justify-content-center">
                              <Button
                                 className={`btn w-100 mt-3 ${style.button}`}
                                 type="submit"
                                 disabled={loading}
                              >
                                 {loading ? 'Loading...' : 'Log in'}
                              </Button>
                           </div>
                        </div>
                     </form>
                     <div className="w-100 d-flex flex-column">
                        <div className="w-100 d-flex justify-content-center align-items-center">
                           <div div className={style.option}>
                              Don&apos;t have an account?{' '}
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
