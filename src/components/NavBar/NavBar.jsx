'use client'
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NavBar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();
  console.log(session);

  const links = [
    { title: "About", path: '/about' },
    { title: "Service", path: '/service' },
    { title: "Contact", path: '/contact' },
    { title: "Blogs", path: '/blogs' },
    { title: "NewLogin", path: '/newlogin' },
    { title: "Posts", path: '/posts' },
    { title: "Meals", path: '/meals' },
    { title: "CounterApp", path: '/counterApp' },
  ];

  const handleLog = () => {
    router.push(status === "authenticated" ? '/api/auth/signout' : '/api/auth/signin');
  };

  return (
    <div>
      <nav className="bg-red-400 px-6 py-4 flex justify-between items-center">
        <Link href={'/'}> 
          <h6 className="text-3xl">Next <span className="text-blue-600">Master</span></h6>
        </Link>

        <ul className="flex items-center justify-between space-x-4 text-white">
          {links?.map(link => (
            <Link 
              className={`${pathName === link.path && 'bg-blue-600 p-2'}`} 
              href={link.path} 
              key={link.path}
            >
              {link.title}
            </Link>
          ))}
        </ul>

        <button 
          onClick={handleLog} 
          className="bg-white text-red-700 p-2 font-bold hover:bg-yellow-200"
        >
          {status === 'authenticated' ? 'Log Out' : 'Log In'}
        </button>

        {status === "authenticated" && (
          <div>
            <h6>Name: {session?.user?.name || "N/A"}</h6>
            <h6>Type: {session?.user?.type || "N/A"}</h6>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
