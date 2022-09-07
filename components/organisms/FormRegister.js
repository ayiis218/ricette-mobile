/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Link from 'next/link';
import alert from 'sweetalert2';
import { useRouter } from 'next/router';
import { register } from '../../redux/action/auth';
import { toastr } from '../../helper/toastr';
import InputText from '../atoms/InputText';
import Button from '../atoms/Button';

import { FiUser } from 'react-icons/fi';
import { IoCallOutline } from 'react-icons/io5';
import { AiOutlineMail, AiOutlineLock, AiOutlineUnlock } from 'react-icons/ai';
import style from './styles/register.module.css';

const FormRegister = () => {
   const router = useRouter();
   const [loading, setLoading] = useState(false);
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [password, setPassword] = useState('');
   const [repass, setRePass] = useState('');

   const body = !name || !email || !phone || !password || !repass;

   const handleRegis = (e) => {
      e.preventDefault();

      if (body) {
         alert.fire({
            title: 'Error!',
            text: 'All field must be filled!',
            icon: 'error',
         });
      } else if (password !== repass) {
         alert.fire({
            title: 'Error!',
            text: 'Incorrect Password',
            icon: 'error',
         });
      } else {
         setLoading(true);
         register({
            name,
            email,
            phone,
            password,
            repass,
         })
            .then((res) => {
               alert.fire({
                  title: 'Success!',
                  text: 'Login Success',
                  icon: 'success',
               });
               router.push('/auth/login');
            })
            .catch((err) => {
               if (err?.response?.data?.code === 422) {
                  const { error } = err.response.data;
                  error.map((e) => toastr(e, 'error'));
               } else {
                  alert.fire({
                     title: 'Error!',
                     text: err.message,
                     icon: 'error',
                  });
               }
            })
            .finally(() => {
               setLoading(false);
            });
      }
   };
   return (
      <div className={style.section}>
         <div className="container">
            <div className="row">
               <div className="col-md-6 col-lg-12 m-0 d-flex align-items-center d-flex justify-content-center">
                  <div className={style.right}>
                     <h4>Let&apos;s Get Started !</h4>
                     <p>Create new account to access all features.</p>
                     <form onSubmit={handleRegis}>
                        <div className="input-group mb-3">
                           <span className="input-group-text" id="basic-addon1">
                              <FiUser color="var(--color-3)" size={30} />
                              <InputText
                                 type="text"
                                 className="form-control"
                                 placeholder="Name"
                                 style={{ color: 'var(--color-3)' }}
                                 onChange={(e) => {
                                    setName(e.target.value);
                                 }}
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
                                 onChange={(e) => {
                                    setEmail(e.target.value);
                                 }}
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
                                 onChange={(e) => {
                                    setPhone(e.target.value);
                                 }}
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
                                 onChange={(e) => {
                                    setPassword(e.target.value);
                                 }}
                              />
                           </span>
                        </div>
                        <div className="input-group mb-3">
                           <span className="input-group-text" id="basic-addon1">
                              <AiOutlineUnlock
                                 color="var(--color-3)"
                                 size={30}
                              />
                              <InputText
                                 type="password"
                                 className="form-control"
                                 placeholder="New Password"
                                 style={{ color: 'var(--color-3)' }}
                                 onChange={(e) => {
                                    setRePass(e.target.value);
                                 }}
                              />
                           </span>
                        </div>
                        <div className="row">
                           <div className="col d-flex justify-content-center">
                              <Button
                                 className={`btn w-100 mt-3 ${style.button}`}
                                 type="submit"
                                 disabled={loading}
                              >
                                 {loading ? 'Loading...' : 'CREATE'}
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
   );
};

export default FormRegister;
