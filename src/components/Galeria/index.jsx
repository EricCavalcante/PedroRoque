import { useParams } from "react-router-dom"
import fotos from '../../json/fotos.json'

export default function Galeria() {

    const parametros = useParams()

    const foto = fotos.find((foto) => {
        return foto.id === Number(parametros.id)
    })

    console.log(foto)

    return (
        <section className="flex flex-col justify-center items-center my-8">
            <h1 className="text-2xl font-Titulo mb-4 bg-black w-screen text-center p-4">{foto.titulo}</h1>
            <div className="flex flex-wrap gap-4 mx-8">
                <img src={foto.img1}></img>
                <img src={foto.img2}></img>
                <img src={foto.img3}></img>
                <img src={foto.img4}></img>
                <img src={foto.img5}></img>
                <img src={foto.img6}></img>
                <img src={foto.img7}></img>
                <img src={foto.img8}></img>
                <img src={foto.img9}></img>
                <img src={foto.img10}></img>
            </div>
        </section>
    )
}