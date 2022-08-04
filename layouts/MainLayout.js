import React from 'react';
import style from './Mainlayout.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';

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
        <div className="col-lg-12 col-xs-12" id="container">
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
                  router.pathname === '/home'
                    ? 'yellow'
                    : 'rgb(109 97 242 / 20%)',
                padding: '10px 20px',
                borderRadius: '30px',
              }}
            >
              <Image
                src="/icons/home.svg"
                alt="icon"
                width="25px"
                height="25px"
              />
              <span
                style={{
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '18px',
                  color: '#666666',
                  marginLeft: '13px',
                }}
              >
                Home
              </span>
            </div>
            <Image
              src="/icons/plus-square.svg"
              alt="icon"
              width="25px"
              height="25px"
            />
            <Image
              src="/icons/message-circle.svg"
              alt="icon"
              width="25px"
              height="25px"
            />
            <Image
              src="/icons/user.svg"
              alt="icon"
              width="25px"
              height="25px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
