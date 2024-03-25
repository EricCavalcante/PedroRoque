import Sobre from "../Sobre";
import Swiper from "../Swiper";
import Trabalhos from "../Trabalhos";

export default function Principal() {
    return (
        <div className=" min-h-screen justify-center items-center font-Texto text-white flex flex-col gap-8 my-8">
            <Swiper />
            <div className="flex flex-col sm:flex-col-reverse">
                <Sobre />
                <Trabalhos />
            </div>
        </div>
    )
}