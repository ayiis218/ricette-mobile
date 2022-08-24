import React from 'react';
import Link from 'next/link';

const NotFound = () => {
   return (
      <div id="notfound">
         <div className="notfound">
            <div className="notfound-404">
               <h1>404</h1>
            </div>
            <h2>in development process</h2>
            <span className="arrow" />
            <Link href="/">Return To Homepage</Link>
         </div>
      </div>
   );
};

export default NotFound;
