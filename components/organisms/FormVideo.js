import React from 'react';
import moment from 'moment';
import Comment from '../molecules/SlideComment';
import style from './styles/video.module.css';

const FormVideo = ({ data }) => {
   return (
      <div className={style.section}>
         <div className="container">
            {data.map((item) => (
               <>
                  <div className="row">
                     <div className="col-md-12 col-lg-12 d-flex justify-content-center">
                        <div className="row">
                           <div className="col-12">
                              <div className={style.video}>
                                 <iframe
                                    height="265"
                                    src={item.video}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                 ></iframe>
                              </div>
                           </div>
                           <div className="col-5">
                              <h4 className="ms-3">{item.name_recipe}</h4>
                              <h6 className="ms-3 text-secondary">
                                 by {item.name}
                              </h6>
                           </div>
                           <div className="col-7 d-flex justify-content-end">
                              <h6 className="me-3 text-secondary">
                                 {moment(item.create_at).format('LLL')}
                              </h6>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-12 col-lg-12 mt-4 d-flex justify-content-center">
                     <Comment data={item.id_recipe} />
                  </div>
               </>
            ))}
         </div>
      </div>
   );
};

export default FormVideo;
