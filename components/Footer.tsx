import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-300 w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-center justify-between p-5">
      <div className="p-5">
        <h3 className="font-bold text-purple-500 text-2xl">Pages</h3>
        <ul className="text-1xl text-black pt-4 font-semibold cursor-pointer flex flex-col gap-3">
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Reviews</li>
        </ul>
      </div>

      <div className="p-5">
        <h3 className="font-bold text-purple-500 text-2xl">Social</h3>
        <ul className="text-1xl text-black pt-4 font-semibold cursor-pointer flex flex-col gap-3">
          <li>Tel: +234 9063703879</li>
          <li>Tel: +234 9126087971</li>
         <div className="flex gap-4">
           <Link href='https://www.instagram.com/miss_mansuroh?utm_source=qr&igsh=MTI0dnl2ZHhidmdmNw=='>
           <BsInstagram size={20} className='hover:text-purple-500'/>
           </Link>
           <Link href={'https://wa.me/qr/4GWHQIDBDOCQI1'}>
           <FaWhatsapp size={20}  className='hover:text-purple-500' />
           </Link>
         </div>
        </ul>
      </div>
      <Link href={'https://www.instagram.com/rabiah_gallery?igsh=MW1iNHZkc21ncmFneA%3D%3D&utm_source=qr'}>
      <span className="p-3 text-2xl font-semibold flex items-center gap-2 justify-center">Made with <FaHeart size={20} color='red' /> by <span className="text-purple-500 cursor-pointer hover:text-underline ">Rabiat</span></span>
      </Link>
   
    </footer>
  )
}

export default Footer