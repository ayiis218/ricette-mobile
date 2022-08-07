import React from 'react';
import Image from 'next/image';
import Link from 'next/dist/client/link';

import style from './styles/profile.module.css';

const FormDetail = (props) => {
  return (
    <div className={style.section}>
      <div className={style.hero}>
        <div className={style.img}>
          <div className="row w-100">
            <div className="col-md-6 col-lg-12 m-0 align-self-center d-flex align-items-center d-flex justify-content-center">
              <div className={style.title}>
                <Image
                  src="/img/user.png"
                  width={100}
                  height={100}
                  alt="user"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-12 m-0 align-self-center d-flex align-items-center d-flex justify-content-center">
              <h5>Mareta Lopeda</h5>
            </div>
            <div className="col-md-6 col-lg-12 m-0 align-self-center d-flex align-items-center d-flex justify-content-center">
              <div className={style.content}>
                <Link href="/users/update">
                  <div className="row mt-4">
                    <div className="col-md-2 col-lg-2 d-flex align-content-center">
                      <Image
                        src="/icons/user2.svg"
                        alt="user"
                        height={30}
                        width={30}
                      />
                    </div>
                    <div className="col-md-8 col-lg-8">
                      <h5> Edit Profile </h5>
                    </div>
                    <div className="col-md-2 col-lg-2">
                      <Image
                        src="/icons/back-in.svg"
                        alt="user"
                        height={25}
                        width={25}
                      />
                    </div>
                  </div>
                </Link>

                <Link href="/users/myRecipe">
                  <div className="row mt-4">
                    <div className="col-md-2 col-lg-2 d-flex align-content-center">
                      <Image
                        src="/icons/award.svg"
                        alt="user"
                        height={30}
                        width={30}
                      />
                    </div>
                    <div className="col-md-8 col-lg-8">
                      <h5> My Recipe </h5>
                    </div>
                    <div className="col-md-2 col-lg-2">
                      <Image
                        src="/icons/back-in.svg"
                        alt="user"
                        height={25}
                        width={25}
                      />
                    </div>
                  </div>
                </Link>
                <Link href="#">
                  <div className="row mt-4">
                    <div className="col-md-2 col-lg-2 d-flex align-content-center">
                      <Image
                        src="/icons/book.svg"
                        alt="user"
                        height={30}
                        width={30}
                      />
                    </div>
                    <div className="col-md-8 col-lg-8">
                      <h5> Saved Recipe </h5>
                    </div>
                    <div className="col-md-2 col-lg-2">
                      <Image
                        src="/icons/back-in.svg"
                        alt="user"
                        height={25}
                        width={25}
                      />
                    </div>
                  </div>
                </Link>
                <Link href="#">
                  <div className="row mt-4">
                    <div className="col-md-2 col-lg-2 d-flex align-content-center">
                      <Image
                        src="/icons/vector.svg"
                        alt="user"
                        height={25}
                        width={25}
                      />
                    </div>
                    <div className="col-md-8 col-lg-8">
                      <h5> Liked Recipe </h5>
                    </div>
                    <div className="col-md-2 col-lg-2">
                      <Image
                        src="/icons/back-in.svg"
                        alt="user"
                        height={25}
                        width={25}
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormDetail;
