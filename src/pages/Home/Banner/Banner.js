import React, { Component } from 'react'
import Slider from "react-slick";
import bannerImg from '../../../images/banner.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css"

function Banner() {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
    };
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <div className='min-h-screen h-full banner_bg md:flex justify-between'>
                        <div className='text-white self-center'>
                            <h1 className='text-5xl font-bold'>Hello</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, incidunt?</p>
                        </div>
                        <img src={bannerImg} className='md:w-1/2 relative' />
                    </div>
                </div>
                <div>
                <div className='min-h-screen h-full banner_bg md:flex justify-between'>
                        <div className='text-white self-center'>
                            <h1 className='text-5xl font-bold'>Hey</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, incidunt?</p>
                        </div>
                        <img src={bannerImg} className='md:w-1/2 relative' />
                    </div>
                </div>
                <div>
                <div className='min-h-screen h-full banner_bg md:flex justify-between'>
                        <div className='text-white self-center'>
                            <h1 className='text-5xl font-bold'>Hi</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, incidunt?</p>
                        </div>
                        <img src={bannerImg} className='md:w-1/2 relative' />
                    </div>
                </div>
            </Slider>
        </div>
    );

}

export default Banner