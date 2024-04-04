import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fotos from '../../json/fotos.json';
import { IoMdCloseCircle } from "react-icons/io";
import Imagem from "../Imagem";




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
        <section className="flex flex-col min-h-screen justify-center items-center">
            <h1 className="text-3xl font-Titulo mb-4 text-center p-4 sm:text-4xl">{foto.titulo}</h1>

            <div className="h-full flex justify-center flex-wrap gap-4 mx-8 sm:flex-row">
                {foto.img1 && (

                    <div className="w-80" onClick={() => handleImagemClick(foto.img1)}>
                        <Imagem 
                        src={foto.img1}
                        hash={foto.Hash1}
                        className="sm:w-full h-full object-cover"
                        />
                    </div>

                )}
                {foto.img2 && (

                    <div className="w-80" onClick={() => handleImagemClick(foto.img2)}>
                         <Imagem 
                        src={foto.img2}
                        hash={foto.Hash2}
                        className="sm:w-full h-full object-cover"
                        />
                    </div>

                )}
                {foto.img3 && (

                    <div className="w-80" onClick={() => handleImagemClick(foto.img3)}>
                        <Imagem 
                        src={foto.img3}
                        hash={foto.Hash3}
                        className="sm:w-full h-full object-cover"
                        />                  </div>

                )} {foto.img4 && (

                    <div className="w-80" onClick={() => handleImagemClick(foto.img4)}>
                        <Imagem 
                        src={foto.img4}
                        hash={foto.Hash4}
                        className="sm:w-full h-full object-cover"
                        />                  </div>

                )} {foto.img5 && (

                    <div className="w-80" onClick={() => handleImagemClick(foto.img5)}>
                        <Imagem 
                        src={foto.img5}
                        hash={foto.Hash5}
                        className="sm:w-full h-full object-cover"
                        />                  </div>

                )} {foto.img6 && (

                    <div className="w-80" onClick={() => handleImagemClick(foto.img6)}>
                        <Imagem 
                        src={foto.img6}
                        hash={foto.Hash6}
                        className="sm:w-full h-full object-cover"
                        />                  </div>

                )} {foto.img7 && (

                    <div className="w-80" onClick={() => handleImagemClick(foto.img7)}>
                        <Imagem 
                        src={foto.img7}
                        hash={foto.Hash7}
                        className="sm:w-full h-full object-cover"
                        />                  </div>

                )} {foto.img8 && (

                    <div className="w-80" onClick={() => handleImagemClick(foto.img8)}>
                        <Imagem 
                        src={foto.img8}
                        hash={foto.Hash8}
                        className="sm:w-full h-full object-cover"
                        />                  </div>

                )} {foto.img9 && (

                    <div className="w-80" onClick={() => handleImagemClick(foto.img9)}>
                        <Imagem 
                        src={foto.img9}
                        hash={foto.Hash9}
                        className="sm:w-full h-full object-cover"
                        />                  </div>

                )} {foto.img10 && (

                    <div className="w-80" onClick={() => handleImagemClick(foto.img10)}>
                        <Imagem 
                        src={foto.img10}
                        hash={foto.Hash10}
                        className="sm:w-full h-full object-cover"
                        />                   </div>

                )}

            </div>

            {/* Modal de tela cheia */}
            {imagemFullscreen && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50">
                    <div className="max-w-3xl flex flex-col sm:block">
                        <img loading="lazy" src={imagemFullscreen} alt="Imagem em tela cheia" className="w-full h-auto " />
                        <button onClick={handleCloseFullscreen} className="absolute sm:right-4 sm:top-20  text-white text-2xl bg-black focus:outline-none sm:text-4xl"><IoMdCloseCircle /></button>
                    </div>
                </div>
            )}
        </section>
    );
}
