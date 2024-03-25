import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fotos from '../../json/fotos.json';
import { IoMdCloseCircle } from "react-icons/io";


export default function Galeria() {
    const parametros = useParams();
    const [imagemFullscreen, setImagemFullscreen] = useState(null);

    useEffect(() => {
        // Adiciona/remova uma classe ao body para desativar o overflow quando a imagem está em tela cheia
        if (imagemFullscreen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        // Remove o event listener ao desmontar o componente
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [imagemFullscreen]);

    const foto = fotos.find((foto) => {
        return foto.id === Number(parametros.id);
    });

    const handleImagemClick = (src) => {
        setImagemFullscreen(src);
    };

    const handleCloseFullscreen = () => {
        setImagemFullscreen(null);
    };

    return (
        <div className="">
            <h1 className="text-2xl font-Titulo mb-4 bg-black w-full text-center p-4">{foto.titulo}</h1>
            <section className="flex flex-col min-h-screen justify-center items-center">
                <div className="h-full flex justify-center flex-wrap gap-4 mx-8 sm:flex-row">
                    {foto.img1 && (
                        <div className="w-96" onClick={() => handleImagemClick(foto.img1)}>
                            <img className="sm:w-full h-full object-cover border-Bg hover:animate-pulse hover:cursor-pointer duration-200" src={foto.img1} alt="Imagem 1"></img>
                        </div>
                    )}
                    {foto.img2 && (
                        <div className="w-96" onClick={() => handleImagemClick(foto.img2)}>
                            <img className="sm:w-full h-full object-cover border-Bg hover:animate-pulse hover:cursor-pointer duration-200" src={foto.img2} alt="Imagem 2"></img>
                        </div>
                    )}
                    {foto.img3 && (
                        <div className="w-96" onClick={() => handleImagemClick(foto.img3)}>
                            <img className="sm:w-full h-full object-cover border-Bg hover:animate-pulse hover:cursor-pointer duration-200" src={foto.img3} alt="Imagem 2"></img>
                        </div>
                    )} {foto.img4 && (
                        <div className="w-96" onClick={() => handleImagemClick(foto.img4)}>
                            <img className="sm:w-full h-full object-cover border-Bg hover:animate-pulse hover:cursor-pointer duration-200" src={foto.img4} alt="Imagem 2"></img>
                        </div>
                    )} {foto.img5 && (
                        <div className="w-96" onClick={() => handleImagemClick(foto.img5)}>
                            <img className="sm:w-full h-full object-cover border-Bg hover:animate-pulse hover:cursor-pointer duration-200" src={foto.img5} alt="Imagem 2"></img>
                        </div>
                    )} {foto.img6 && (
                        <div className="w-96" onClick={() => handleImagemClick(foto.img6)}>
                            <img className="sm:w-full h-full object-cover border-Bg hover:animate-pulse hover:cursor-pointer duration-200" src={foto.img6} alt="Imagem 2"></img>
                        </div>
                    )} {foto.img7 && (
                        <div className="w-96" onClick={() => handleImagemClick(foto.img7)}>
                            <img className="sm:w-full h-full object-cover border-Bg hover:animate-pulse hover:cursor-pointer duration-200" src={foto.img7} alt="Imagem 2"></img>
                        </div>
                    )} {foto.img8 && (
                        <div className="w-96" onClick={() => handleImagemClick(foto.img8)}>
                            <img className="sm:w-full h-full object-cover border-Bg hover:animate-pulse hover:cursor-pointer duration-200" src={foto.img8} alt="Imagem 2"></img>
                        </div>
                    )} {foto.img9 && (
                        <div className="w-96" onClick={() => handleImagemClick(foto.img9)}>
                            <img className="sm:w-full h-full object-cover border-Bg hover:animate-pulse hover:cursor-pointer duration-200" src={foto.img9} alt="Imagem 2"></img>
                        </div>
                    )} {foto.img10 && (
                        <div className="w-96" onClick={() => handleImagemClick(foto.img10)}>
                            <img className="sm:w-full h-full object-cover border-Bg hover:animate-pulse hover:cursor-pointer duration-200" src={foto.img10} alt="Imagem 2"></img>
                        </div>
                    )}

                </div>

                {/* Modal de tela cheia */}
                {imagemFullscreen && (
                    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50">
                        <div className="max-w-3xl flex flex-col sm:block">
                            <img src={imagemFullscreen} alt="Imagem em tela cheia" className="w-full h-auto " />
                            <button onClick={handleCloseFullscreen} className="absolute sm:right-4 sm:top-20  text-white text-2xl bg-black focus:outline-none sm:text-4xl"><IoMdCloseCircle /></button>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
}
