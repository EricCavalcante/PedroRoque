import { Link } from "react-router-dom"
import fotos from "../../json/fotos.json"

export default function Trabalhos() {
    return (
        <section className="flex flex-col justify-center items-center mb-8 bg-black py-8">
            <div className="flex gap-4 justify-center items-center mx-8 flex-wrap">
                {fotos.map((foto) => (
                    <div className="flex justify-center items-center">
                        <h1 className="text-center text-2xl absolute z-10 font-Titulo">{foto.titulo}</h1>
                        <Link to={`fotos/${foto.id}`}><img className="opacity-50 hover:scale-105 hover:opacity-100 duration-200 sm:w-96" src={foto.img1}></img></Link>
                    </div>
                ))}
            </div>
        </section>
    )
}