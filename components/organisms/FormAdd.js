/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-indent-props */
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import alert from 'sweetalert2';
import InputText from '../atoms/InputText';
import Button from '../atoms/Button';
import axios from '../../helper/axios';
import { IoMdBook } from 'react-icons/io';
import { FiVideo } from 'react-icons/fi';
import style from './styles/create.module.css';

const FormAdd = () => {
   const token = Cookies.get('token');
   const router = useRouter();
   const [loading, setLoading] = useState(false);
   const [name, setName] = useState('');
   const [ingredients, setIngredients] = useState('');
   const [video, setVideo] = useState('');
   const id_user = Cookies.get('user');

   useEffect(() => {
      if (!token) {
         alert.fire({
            title: 'Failed',
            text: 'Please login',
            icon: 'Error',
         });
         router.push('/auth/login');
      }
   }, [token]);

   const body = name || ingredients || video;

   const handleSubmit = (e) => {
      e.preventDefault();

      if (!body) {
         alert.fire({
            title: 'Error!',
            text: 'All field must be filled!',
            icon: 'error',
         });
      } else {
         setLoading(true);
         axios
            .post('recipe/add', { name, ingredients, video, id_user })
            .then((res) => {
               alert.fire({
                  title: 'Success!',
                  text: `Create recipe Success ${res}`,
                  icon: 'success',
               });
               router.push('/users/profile');
            })
            .catch((err) => {
               alert.fire({
                  title: 'Error!',
                  text: err.message,
                  icon: 'error',
               });
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
               <div className="col-12 col-lg-12 m-0 d-flex justify-content-center">
                  <div className={style.title}>
                     <h4>Add Your Recipe</h4>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-12 col-lg-12 m-0 d-flex justify-content-center">
                  <form onSubmit={handleSubmit}>
                     <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                           <IoMdBook color="var(--color-3)" size={30} />
                           <InputText
                              type="text"
                              className="form-control"
                              placeholder="Title"
                              style={{ color: 'var(--color-3)' }}
                              onChange={(e) => {
                                 setName(e.target.value);
                              }}
                           />
                        </span>
                     </div>
                     <div className="mb-3">
                        <span className="input-group-text" id="basic-addon1">
                           <textarea
                              className="form-control border-0"
                              placeholder="Description"
                              id="exampleFormControlTextarea1"
                              rows={6}
                              defaultValue={''}
                              style={{ color: 'var(--color-3)' }}
                              onChange={(e) => {
                                 setIngredients(e.target.value);
                              }}
                           />
                        </span>
                     </div>
                     <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                           <FiVideo color="var(--color-3)" size={30} />
                           <InputText
                              type="text"
                              className="form-control"
                              placeholder="Add  Video"
                              aria-label="add video"
                              aria-describedby="basic-addon1"
                              onChange={(e) => {
                                 setVideo(e.target.value);
                              }}
                           />
                        </span>
                     </div>
                     <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                           <Button
                              className={`btn w-40 mt-3 ${style.button}`}
                              type="submit"
                              disabled={loading}
                           >
                              {loading ? 'Loading...' : 'POST'}
                           </Button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FormAdd;
