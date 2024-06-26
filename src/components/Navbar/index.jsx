import { FaWhatsapp, FaInstagram,  } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="shadow-2xl rounded-xl flex flex-row justify-between mt-4 p-4 items-center sm:py-6">
            <Link to='/'><h2 className="text-2xl font-Titulo hover:animate-pulse duration-200 sm:text-3xl">Pedro Roque Foto</h2></Link>
            <div className='flex gap-3 sm:gap-4'>
                <a target='_blank' href='https://www.instagram.com/pedroroquea/'><FaInstagram className='text-3xl hover:text-instagramRosa hover:scale-125 duration-300' /></a>
                <a target='_blank' href='https://api.whatsapp.com/send?phone=5511995301259'><FaWhatsapp className='text-3xl hover:text-whatsapp hover:scale-125 duration-300' /></a>
                <a target='_blank' href='mailto:pedroroquefoto@gmail.com'><MdOutlineEmail className='text-3xl hover:text-blue-300 hover:scale-125 duration-300' /></a>
            </div>
        </header>
    )
}