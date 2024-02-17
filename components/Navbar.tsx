import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between scroll-smooth bg-white border-b-2 p-6 sticky z-10 top-2 rounded-md none">
        <div className="">
            <h3 className="flex justify-center items-center gap-2 text-black text-2xl font-bold cursor-pointer pl-3"> 
            <Link href={'/'}><span className="text-purple-900 font-bold text-2xl">Dejoke</span> Haircare</Link>
            </h3>
        </div>
        <div className="hidden xl:flex md:flex text-black font-semibold cursor-pointer hover:border-b-3 hover:border-red-2">
            <ul className="flex justify-between gap-2 ">
                <li className="active:border-b-10 border-purple-600 cursor-pointer hover:text-purple-500 active:border-red-300">
                  <Link href={'/'}>Home</Link>
                </li>
                <li className="hover:text-purple-500">
                  <Link href={'#about'}>About us</Link>
                </li>
                <li className="hover:text-purple-500">
                  <Link href={'#service'}>Service</Link>
                </li>
                <li className="hover:text-purple-500">
                  <Link href={'#products'}>Products</Link>
                </li>
                <li className='hover:text-purple-500' ><Link href={'#reviews'}>Reviews</Link></li>
            </ul>
{/* 
            <Menu>
            <Menu.Button>More</Menu.Button>
            <Menu.Items>
              <Menu.Item>Home</Menu.Item>
              <Menu.Item>About us</Menu.Item>
            </Menu.Items>
            </Menu> */}
        </div>
        <SignedOut>
        <button className="bg-purple-900 text-white p-3 rounded-lg text-1xl space-x-2 hover:shadow-lg">
          <Link href={'/sign-up'}>Sign Up</Link>
        </button>
        </SignedOut>
        <SignedIn>
        <UserButton afterSignOutUrl="/"/>
        </SignedIn>
       
    </nav>
  )
}

export default Navbar