/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { API_URL } from '../../helper/env';
import { BiLike } from 'react-icons/bi';
import { IoIosArrowBack } from 'react-icons/io';
import { IoBookmarkOutline } from 'react-icons/io5';
import style from './styles/popular.module.css';
import { useRouter } from 'next/router';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

function Popular({ data }) {
   const router = useRouter();

   const onPage = (page) => {
      router.push(`/recipe/popular/${page}`);
   };

   return (
      <div className={style.section}>
         <div className={style.header}>
            <div className="row">
               <div className="col-2">
                  <div className="ms-3 mt-1">
                     <IoIosArrowBack
                        size={40}
                        onClick={() => router.push('/')}
                     />
                  </div>
               </div>
               <div className="col-10">
                  <h2>Popular Menu</h2>
               </div>
            </div>
         </div>
         <div className={style.content}>
            {data.map((item) => (
               <>
                  <div className={style.list}>
                     <div className="row mt-3">
                        <div className="col-3 col-lg-3">
                           <img
                              src={`${
                                 item.images
                                    ? `${API_URL}${item.images}`
                                    : `${API_URL}picture/recipe/original.jpg`
                              }`}
                              alt={item.images}
                              width={90}
                              height={90}
                              onClick={() =>
                                 router.push(`/recipe/detail/${item.id_recipe}`)
                              }
                           ></img>
                        </div>
                        <div className="col-4 col-lg-4">
                           <div
                              className={style.title}
                              onClick={() =>
                                 router.push(`/recipe/detail/${item.id_recipe}`)
                              }
                           >
                              <h4>{item.name_recipe}</h4>
                              <h5>{item.name}</h5>
                              <h5>{item.comment}</h5>
                           </div>
                        </div>
                        <div className="col-5 col-lg-5">
                           <div className={`me-3 ${style.response}`}>
                              <button type="button" className="btn">
                                 <IoBookmarkOutline size={20} />
                              </button>
                              <button type="button" className="btn">
                                 <BiLike size={20} />
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </>
            ))}
            <div className="d-flex justify-content-center mt-4">
               <Pagination size="md" aria-label="Page">
                  <PaginationItem>
                     <PaginationLink previous />
                  </PaginationItem>
                  <PaginationItem onClick={() => onPage(1)}>
                     <PaginationLink>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem onClick={() => onPage(2)}>
                     <PaginationLink>2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem onClick={() => onPage(3)}>
                     <PaginationLink>3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem onClick={() => onPage(1)}>
                     <PaginationLink next />
                  </PaginationItem>
               </Pagination>
            </div>
         </div>
      </div>
   );
}

export default Popular;
