import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination} from 'swiper/modules'
import './swiper.css'
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Carrossel() {
    return (
        <section className='hidden sm:block w-3/4'>
            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                autoplay
                pagination
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='rounded-lg shadow-xl justify-center itens-center'
            >
                <SwiperSlide><img src='./images/DestaquesPrincipaisdoSite/1.jpg' /></SwiperSlide>
                <SwiperSlide><img src='./images/DestaquesPrincipaisdoSite/2.jpg' /></SwiperSlide>
                <SwiperSlide><img src='./images/DestaquesPrincipaisdoSite/3.jpg' /></SwiperSlide>
                <SwiperSlide><img src='./images/DestaquesPrincipaisdoSite/4.jpg' /></SwiperSlide>
                <SwiperSlide><img src='./images/DestaquesPrincipaisdoSite/5.jpg' /></SwiperSlide>

            </Swiper>
        </section>
    )
}