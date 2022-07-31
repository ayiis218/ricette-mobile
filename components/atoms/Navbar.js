import Link from 'next/link'
import Image from 'next/image'

function navbar () {
    return (
        <div>
            <nav class="navbar bg-light">
                <div class="container">
                    <Link href="" class="navbar-brand" >
                        <Image 
                            src="/icons/home.svg" 
                            alt="" 
                            width="30" 
                            height="24" />
                    </Link>
                    <Link href="" class="navbar-brand" >
                        <Image 
                            src="/icons/plus-square.svg" 
                            alt="" 
                            width="30" 
                            height="24" />
                    </Link>
                    <Link href="" class="navbar-brand" >
                        <Image 
                            src="/icons/message-circle.svg" 
                            alt="" 
                            width="30" 
                            height="24" />
                    </Link>
                    <Link href="" class="navbar-brand" >
                        <Image 
                            src="/icons/user.svg" 
                            alt="" 
                            width="30" 
                            height="24" />
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default navbar