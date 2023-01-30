import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import slides from "./slides.json";
import "./slider.scss";
const Slider = () => {
  return (
    <Swiper className="slider">
        {slides.map( slide=> <SwiperSlide key={slide.id}>
            <div className="content">
                <h2>{slide.title}</h2>
                <p>{slide.desc}</p>
            </div>
            <img src={require(`../../../../assets/img/slider/${slide.image}`)} alt={slide.title}/>
        </SwiperSlide>)}
        
    </Swiper>
  )
}
export default Slider