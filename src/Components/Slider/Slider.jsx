import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import './slider.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import slide1 from '../../assets/slide1.jpg'
import slide2 from '../../assets/slide2.jpg'
import slide3 from '../../assets/slider3.jpg'

const Slider = () => {
    return (
        <div className='px-3'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <img src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
        </SwiperSlide>
       
      </Swiper>
        </div>
    );
};

export default Slider;