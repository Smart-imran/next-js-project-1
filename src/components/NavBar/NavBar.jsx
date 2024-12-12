'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";



const NavBar = () => {

    const pathName = usePathname();
    const router = useRouter();

    const links = [
        {
            title: "About",
            path: '/about'
        },
        {
            title: "Service",
            path: '/service'
        },
        {
            title: "Contact",
            path: '/contact'
        },
        {
            title: "Blogs",
            path: '/blogs'
        },
        {
            title: "NewLogin",
            path: '/newlogin'
        },
        {
            title: "posts",
            path: '/posts'
        },
        
        {
            title: "meals",
            path: '/meals'
        },
        {
            title: "counterApp",
            path: '/counterApp'
        },
        
        

    ]

    const handleLoginClick = ()=>{ 
        router.push('/login')
    }

    return (
        <div>
            <nav className="bg-red-400 px-6 py-4 flex justify-between items-center">

                <Link href={'/'}> <h6 className="text-3xl">Next <span className="text-blue-600">Master</span></h6></Link>


                <ul className="flex items-center justify-between space-x-4   text-white">

                    {/* <li><Link href='/about'>About</Link></li>
                    <li><Link href='/service'>Service</Link></li>
                    <li><Link href='/contact'>Contact</Link></li> */}


                    {links?.map((link) => (

                        <Link className={`${pathName === link.path && 'bg-blue-600 p-2'}`} href={link.path} key={link.path}>
                            {link.title}
                        </Link>

                    ))}
                </ul>

                <button onClick={handleLoginClick} className="bg-white text-red-700 p-2 font-bold hover:bg-yellow-200">
                    Log in
                </button>
            </nav>
        </div>
    );
};

export default NavBar;