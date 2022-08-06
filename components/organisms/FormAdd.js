import React from 'react';

import { IoMdBook } from 'react-icons/io';
import { FiVideo } from 'react-icons/fi';

import style from './styles/create.module.css';

import InputText from '../atoms/InputText';
import Button from '../atoms/Button';

const FormAdd = () => {
  return (
    <div className={style.section}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-12 m-0 align-self-center d-flex align-items-center d-flex justify-content-center">
            <div className={style.title}>
              <h4>Add Your Recipe</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-12 m-0 align-self-center d-flex align-items-center d-flex justify-content-center">
            <form action="submit">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <IoMdBook color="var(--color-3)" size={30} />
                  <InputText
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    style={{ color: 'var(--color-3)' }}
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
                  />
                </span>
              </div>
              <div className="row">
                <div className="col d-flex justify-content-center">
                  <Button
                    className={`btn w-40 mt-3 ${style.button}`}
                    type="submit"
                  >
                    POST
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
