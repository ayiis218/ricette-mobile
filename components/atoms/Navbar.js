import Link from 'next/link'
import Image from 'next/image'

function navbar () {
    return (
            <nav className="navbar justify-content-center navbar-dark bg-light fixed-bottom">
                <div className="container">
                    <Link href="/" className="navbar-brand" >
                        <Image 
                            src="/icons/home.svg" 
                            alt="" 
                            width={40} 
                            height={70} />
                    </Link>
                    <Link href="/create" className="navbar-brand" >
                        <Image 
                            src="/icons/plus-square.svg" 
                            alt="" 
                            width={40} 
                            height={70} />
                    </Link>
                    <Link href="/chat" className="navbar-brand" >
                        <Image 
                            src="/icons/message-circle.svg" 
                            alt="" 
                            width={40} 
                            height={70} />
                    </Link>
                    <Link href="/profile" className="navbar-brand" >
                        <Image 
                            src="/icons/user.svg" 
                            alt="" 
                            width={40} 
                            height={70} />
                    </Link>
                </div>
            </nav>
    )
}

export default navbar