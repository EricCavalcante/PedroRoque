import { useState, useEffect } from "react"
import { Blurhash } from "react-blurhash";

export default function Imagem({ src, hash }) {

    const [imagemCarregada, setImageemCarregada] = useState(false);

    useEffect(() => {
        const img = new Image()
        img.onload = () => {
            setImageemCarregada(true)
        }
        img.src = src
    }, [src])

    return (
        <>
            <div
                className="animate-pulse duration-200"
                style={{ display: imagemCarregada ? 'none' : 'inline' }}>
                <Blurhash
                    hash={hash}
                    width={320}
                    height={320}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />
            </div>
            <img
                className="sm:w-full h-full object-cover"
                src={src}
                alt=""
                style={{ display: !imagemCarregada ? 'none' : 'inline' }}
            />
        </>
    )
}