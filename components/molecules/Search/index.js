import React from 'react';
// import Image from 'next/image';
import style from './style.module.css';
import { FiSearch } from 'react-icons/fi';

import InputText from '../../atoms/InputText';
import { useRouter } from 'next/router';

function index(props) {
  /*   const router = useRouter();
  const onClick = () => {
    router.push('/users/profile');
  }; */

  return (
    <div className={style.section}>
      <div className="row">
        <div className="col-md-6 col-lg-12 m-0 d-flex align-items-center d-flex justify-content-center">
          <form id="search" action="/recipe/search">
            <div className="input-group mb-3">
              <span className="input-group-text test" id="basic-addon1">
                <FiSearch color="var(--color-3)" size={30} />
                <InputText
                  className="form-control"
                  placeholder="Search Pasta, Bread, etc"
                  name="search"
                  type="search"
                  // onClick={() => onClick()}
                />
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default index;
