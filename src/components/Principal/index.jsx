import Swiper from "../Swiper";
import Trabalhos from "../Trabalhos";

export default function Principal(){
    return(
       <div className="bg-Bg  font-Texto text-white flex flex-col gap-8">
        <Swiper/>
        <Trabalhos/>
       </div>
    )
}