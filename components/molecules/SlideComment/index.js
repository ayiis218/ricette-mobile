/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import style from './style.module.css';
import { API_URL } from '../../../helper/env';
import Default from '../../../public/img/user.png';
import axios from '../../../helper/axios';
import { useRouter } from 'next/router';
import alert from 'sweetalert2';
import Cookies from 'js-cookie';

function index({ data }) {
   const id_recipe = data;
   const id_user = Cookies.get('user');
   const router = useRouter();
   const input = useRef(null);
   const [loading, setLoading] = useState(false);
   const [text, setText] = useState('');
   const [comment, setComment] = useState([]);

   useEffect(() => {
      getComment();
   }, [id_recipe]);

   const getComment = () => {
      setLoading(true);
      axios
         .get(`comment/recipe/${id_recipe}`)
         .then((res) => {
            setComment(res?.data?.data);
            setLoading(false);
         })
         .catch((err) => {
            console.log(err?.response?.data?.message);
            setLoading(false);
         });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      axios
         .post('comment/add', { text, id_recipe, id_user })
         .then((res) => {
            input.current.value = '';
            alert.fire({
               title: 'Success',
               text: 'Success',
               icon: 'Error',
            });
            router.push(`/recipe/detail/${id_recipe}`);
            setLoading(true);
         })
         .catch((err) => {
            alert.fire({
               title: 'Failed',
               icon: 'Error',
            });
         })
         .finally(() => {
            setLoading(false);
         });
   };
   return (
      <div className={style.section}>
         <div className="col-12 col-lg-12">
            <div className={style.content}>
               <form onSubmit={handleSubmit}>
                  <div className="d-flex justify-content-center">
                     <textarea
                        className="form-control px-2 py-2"
                        placeholder="Comment :"
                        style={{
                           border: 'none',
                           outline: 'none',
                           boxShadow: 'none',
                        }}
                        ref={input}
                        onChange={(e) => setText(e.target.value)}
                     />
                  </div>

                  <div className="d-flex justify-content-center">
                     {loading ? (
                        <button disabled>
                           <span
                              className="spinner-border spinner-border-sm"
                              role="status"
                              aria-hidden="true"
                           />
                        </button>
                     ) : (
                        <button type="submit">Post Comment</button>
                     )}
                  </div>
               </form>

               {comment.map((item) => (
                  <div className="m-3">
                     <div
                        className="d-flex align-items-center mt-4 mb-3"
                        key={index}
                     >
                        <img
                           src={`${
                              item.photo
                                 ? `${API_URL}${item.photo}`
                                 : `${API_URL}/picture/user/chef.jpg`
                           }`}
                           alt={item.photo}
                           width={50}
                           height={50}
                           className={`rounded-circle`}
                        />

                        <div className={`h-100 ms-3 ${style.info}`}>
                           <h6>{item.name}</h6>
                           <span>{item.text}</span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}

export default index;
