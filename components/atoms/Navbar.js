import Link from 'next/link';
import Image from 'next/image';
import style from '../../styles/navbar.module.css';

function navbar() {
   return (
      <div className={style.section}>
         <nav
            className={`${style.navbar} navbar navbar-dark bg-light fixed-bottom`}
         >
            <Link href="/" className="navbar-brand">
               <Image src="/icons/home.svg" alt="" width={40} height={45} />
            </Link>
            <Link href="/recipe/create" className="navbar-brand">
               <Image
                  src="/icons/plus-square.svg"
                  alt=""
                  width={40}
                  height={45}
               />
            </Link>
            <Link href="/chat" className="navbar-brand">
               <Image
                  src="/icons/message-circle.svg"
                  alt=""
                  width={40}
                  height={45}
               />
            </Link>
            <Link href="/users/profile" className="navbar-brand">
               <Image src="/icons/user.svg" alt="" width={40} height={45} />
            </Link>
         </nav>
      </div>
   );
}

export default navbar;
