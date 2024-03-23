import { useParams } from "react-router-dom"
import fotos from '../../json/fotos.json'

export default function Galeria() {

    const parametros = useParams()

    const foto = fotos.find((foto) => {
        return foto.id === Number(parametros.id)
    })

    console.log(foto)

    return (
        <section className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-Titulo mb-4 bg-black w-full text-center p-4">{foto.titulo}</h1>
            <div className=" h-full flex justify-center flex-wrap gap-4 mx-8 sm:flex-row ">
                    <div className="w-96">
                        <img className="sm:w-full h-full object-cover border-Bg" src={foto.img3}></img>
                    </div>
                    <div className="w-96">
                        <img className="sm:w-full h-full object-cover border-Bg" src={foto.img2}></img>
                    </div><div className="w-96">
                        <img className="sm:w-full h-full object-cover border-Bg" src={foto.img1}></img>
                    </div><div className="w-96">
                        <img className="sm:w-full h-full object-cover border-Bg" src={foto.img4}></img>
                    </div><div className="w-96">
                        <img className="sm:w-full h-full object-cover border-Bg" src={foto.img5}></img>
                    </div><div className="w-96">
                        <img className="sm:w-full h-full object-cover border-Bg" src={foto.img6}></img>
                    </div><div className="w-96">
                        <img className="sm:w-full h-full object-cover border-Bg" src={foto.img7}></img>
                    </div><div className="w-96">
                        <img className="sm:w-full h-full object-cover border-Bg" src={foto.img8}></img>
                    </div><div className="w-96">
                        <img className="sm:w-full h-full object-cover border-Bg" src={foto.img9}></img>
                    </div><div className="w-96">
                        <img className="sm:w-full h-full object-cover border-Bg" src={foto.img10}></img>
                    </div>
                </div>
        </section>
    )
}