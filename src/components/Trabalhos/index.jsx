import fotos from "../../json/fotos.json"

export default function Trabalhos() {
    return (
        <section className="flex flex-col justify-center items-center mb-8">
            <div className="flex gap-4 justify-center items-center mx-4 flex-wrap">
            {fotos.map((foto)=>(
                <div className="flex justify-center items-center">
                    <h1 className="text-center text-2xl absolute z-10 font-Titulo">{foto.titulo}</h1>
                    <img className="opacity-50" src={foto.img1}></img>
                </div>
            ))}
            </div>
        </section>
    )
}