import React from 'react';
import Image from 'next/image';
import style from './style.module.css';
import { FiSearch } from 'react-icons/fi';

import InputText from '../../atoms/InputText';

function index(props) {
  return (
    <section className={style.search}>
      <div className={style.section}>
        <form id="search" action="#">
          <div className="input-group input-group-lg mb-0">
            <span className="input-group-text test" id="basic-addon1">
              <FiSearch />
            </span>
            <input
              className="form-control"
              placeholder="Search Pasta, Bread, etc"
              name="search"
              type="search"
              value={props.valueEmail}
              onChange={props.onChange}
              onkeypress="handle"
              aria-describedby="basic-addon1"
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default index;
