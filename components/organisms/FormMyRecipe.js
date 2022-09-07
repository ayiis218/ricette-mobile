/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Loading from 'react-content-loader';
import { useSelector, useDispatch } from 'react-redux';
import { getUserRecipes } from '../../redux/action/recipe';
import { API_URL } from '../../helper/env';
import { IoIosArrowBack } from 'react-icons/io';
import style from './styles/recipe.module.css';
import { useRouter } from 'next/router';

function MyRecipe() {
   const [loading, setLoading] = useState(true);
   const router = useRouter();
   const dispatch = useDispatch();
   const { userRecipe } = useSelector((state) => state);
   const id_users = Cookies.get('user');

   useEffect(() => {
      setLoading(false);
      dispatch(getUserRecipes(id_users));
   }, [dispatch]);

   return (
      <div className={style.section}>
         <div className={style.header}>
            <div className="row">
               <div className="col-2 col-lg-2">
                  <div
                     className={style.back}
                     onClick={() => router.push('profile')}
                  >
                     <IoIosArrowBack size={40} />
                  </div>
               </div>
               <div className="col-10 col-lg-10">
                  <h2>My Recipe</h2>
               </div>
            </div>
         </div>

         <div className={style.content}>
            {loading ? (
               <Loading />
            ) : (
               userRecipe.data.map((item) => (
                  <>
                     <div className={style.list}>
                        <div
                           className="row mt-4"
                           onClick={() =>
                              router.push(`/recipe/update/${item.id_recipe}`)
                           }
                        >
                           <div className="col-3 col-lg-3">
                              <div className={style.images}>
                                 <img
                                    src={`${
                                       item.images
                                          ? `${API_URL}${item.images}`
                                          : `${API_URL}picture/recipe/original.jpg`
                                    }`}
                                    alt={item.images}
                                    width={90}
                                    height={90}
                                 ></img>
                              </div>
                           </div>
                           <div className="col-5 col-lg-5">
                              <div className={style.title}>
                                 <h4>{item.name_recipe}</h4>
                                 <h5>{item.name}</h5>
                                 <h5>{item.comment}</h5>
                              </div>
                           </div>
                        </div>
                     </div>
                  </>
               ))
            )}
         </div>
      </div>
   );
}

export default MyRecipe;
