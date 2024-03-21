import { FaWhatsapp, FaInstagram,  } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Navbar() {
    return (
        <header className="flex flex-row justify-between mx-4 py-4 items-center">
            <h2 className="text-2xl font-Titulo">Pedro Roque Foto</h2>
            <div className='flex gap-3'>
                <a target='_blank' href='https://www.instagram.com/pedroroquea/'><FaInstagram className='text-3xl hover:text-instagram hover:scale-125 duration-300' /></a>
                <a target='_blank' href='https://api.whatsapp.com/send?phone=5511995301259'><FaWhatsapp className='text-3xl hover:text-whatsapp hover:scale-125 duration-300' /></a>
                <a target='_blank' href='mailto:pedroroquefoto@gmail.com'><MdOutlineEmail className='text-3xl hover:text-blue-300 hover:scale-125 duration-300' /></a>
            </div>
        </header>
    )
}