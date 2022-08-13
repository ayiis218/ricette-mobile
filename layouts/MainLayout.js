/* eslint-disable no-undef */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import style from './Mainlayout.module.css';

function MainLayout(props) {
   const router = useRouter();
   const [widthRoot, setWidhRoot] = React.useState(300);

   React.useEffect(() => {
      var clientWidth = document.getElementById('container').clientWidth;
      setWidhRoot(clientWidth);
   }, []);

   return (
      <div>
         <div className="row justify-content-lg-center">
            <div className="col-12 col-lg-12 col-xs-12" id="container">
               <div className={style.root}>{props.children}</div>

               <div
                  className="d-flex align-items-center"
                  style={{
                     justifyContent: 'space-evenly',
                     position: 'fixed',
                     bottom: 0,
                     width: `${(95 / 100) * widthRoot}px`,
                     backgroundColor: '#fff',
                     padding: '10px 0px',
                  }}
               >
                  <div
                     style={{
                        backgroundColor:
                           router.pathname === '/'
                              ? 'yellow'
                              : 'rgb(109 97 242 / 20%)',
                        padding: '10px 20px 10px 20px',
                        borderRadius: '20px',
                     }}
                  >
                     <Link href="/" className="navbar-brand">
                        <Image
                           src="/icons/home.svg"
                           alt=""
                           width={40}
                           height={25}
                        />
                     </Link>
                  </div>
                  <div
                     style={{
                        backgroundColor:
                           router.pathname === '/recipe/create'
                              ? 'yellow'
                              : 'rgb(109 97 242 / 20%)',
                        padding: '10px 20px 10px 20px',
                        borderRadius: '20px',
                     }}
                  >
                     <Link href="/recipe/create" className="navbar-brand">
                        <Image
                           src="/icons/plus-square.svg"
                           alt=""
                           width={40}
                           height={25}
                        />
                     </Link>
                  </div>
                  <div
                     style={{
                        backgroundColor:
                           router.pathname === '/chat'
                              ? 'yellow'
                              : 'rgb(109 97 242 / 20%)',
                        padding: '10px 20px 10px 20px',
                        borderRadius: '20px',
                     }}
                  >
                     <Link href="/chat" className="navbar-brand">
                        <Image
                           src="/icons/message-circle.svg"
                           alt=""
                           width={40}
                           height={25}
                        />
                     </Link>
                  </div>
                  <div
                     style={{
                        backgroundColor:
                           router.pathname === '/users/profile'
                              ? 'yellow'
                              : 'rgb(109 97 242 / 20%)',
                        padding: '10px 20px 10px 20px',
                        borderRadius: '20px',
                     }}
                  >
                     <Link href="/users/profile" className="navbar-brand">
                        <Image
                           src="/icons/user.svg"
                           alt=""
                           width={40}
                           height={25}
                        />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default MainLayout;
