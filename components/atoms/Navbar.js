import Image from 'next/image';
import style from '../../styles/navbar.module.css';
import { useRouter } from 'next/router';

function Navbar() {
   const router = useRouter();
   return (
      <div className={style.section}>
         <div
            className={`${style.navbar} d-flex align-content-center bg-light fixed-bottom`}
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
               <Image
                  src="/icons/home.svg"
                  alt=""
                  width={40}
                  height={25}
                  onClick={() => router.push('/')}
               />
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
               <Image
                  src="/icons/plus-square.svg"
                  alt=""
                  width={40}
                  height={25}
                  onClick={() => router.push('/recipe/create')}
               />
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
               <Image
                  src="/icons/message-circle.svg"
                  alt=""
                  width={40}
                  height={25}
                  onClick={() => router.push('/chat')}
               />
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
               <Image
                  src="/icons/user.svg"
                  alt=""
                  width={40}
                  height={25}
                  onClick={() => router.push('/users/profile')}
               />
            </div>
         </div>
      </div>
   );
}

export default Navbar;
