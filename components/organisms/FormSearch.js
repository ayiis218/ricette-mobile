/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Loading from 'react-content-loader';
import Link from 'next/link';
import alert from 'sweetalert2';
import { API_URL } from '../../helper/env';
import InputText from '../../components/atoms/InputText';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { FiSearch } from 'react-icons/fi';
import style from './styles/recipe.module.css';

function Search({ data }) {
   // const recipe = data.map((item) => item.name_recipe);
   const [loading, setLoading] = useState(true);
   const router = useRouter();
   const [search, setSearch] = useState();

   useEffect(() => {
      setLoading(false);
      if (data.rowCount <= 0) {
         alert.fire({
            title: 'Failed',
            text: 'Data not found',
            icon: 'Error',
         });
      }
   }, []);

   const onPage = (page) => {
      router.push(`/recipe/search/${page}`);
   };
   return (
      <div className={style.section}>
         <div className={style.header}>
            <div className="row">
               <div className="col-12 col-lg-12 d-flex justify-content-center">
                  <form id="search" action={`/recipe/search/${search}`}>
                     <div className="input-group mb-3">
                        <span
                           className="input-group-text test"
                           id="basic-addon1"
                        >
                           <FiSearch color="var(--color-3)" size={30} />
                           <InputText
                              className="form-control"
                              placeholder="Search Pasta, Bread, etc"
                              type="text"
                              onChange={(e) => setSearch(e.target.value)}
                           />
                        </span>
                     </div>
                  </form>
               </div>
            </div>
            <div className={style.content}>
               {loading ? (
                  <Loading />
               ) : (
                  data.map((item) => (
                     <div className={style.list}>
                        <div className="row mt-3">
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
                                 <Link
                                    href={`/recipe/detail/${item.id_recipe}`}
                                 >
                                    <h4>{item.name_recipe}</h4>
                                 </Link>
                                 <h5>{item.name}</h5>
                                 <h5>{item.comment}</h5>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))
               )}
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
                     <PaginationItem onClick={() => onPage(4)}>
                        <PaginationLink next />
                     </PaginationItem>
                  </Pagination>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Search;
