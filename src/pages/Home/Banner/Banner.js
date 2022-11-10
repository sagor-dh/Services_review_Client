import React from 'react'
import Slider from "react-slick";
import bannerImg from '../../../images/banner.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css"

function Banner() {

    const settings = {
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <div className='min-h-screen h-full banner_bg md:flex justify-between px-4'>
                        <div className='text-white self-center md:pt-0 pt-7 min-h-[300px]'>
                            <h1 className='text-5xl font-bold mb-5'>Pediatrician</h1>
                            <p>A pediatrician is a doctor who focuses on the health of infants, children, adolescents and young adults. Pediatric care starts at birth and lasts through a child’s 21st birthday or longer. Pediatricians prevent, detect and manage physical, behavioral and developmental issues that affect children. </p>
                        </div>
                        <img alt='img' src={bannerImg} className='md:w-1/2 md:static  absolute bottom-0' />
                    </div>
                </div>
                <div>
                <div className='min-h-screen h-full banner_bg md:flex justify-between px-4'>
                        <div className='text-white self-center md:pt-0 pt-7 min-h-[300px]'>
                            <h1 className='text-5xl font-bold mb-5'>Dermatologist</h1>
                            <p>The skin is an incredible organ. It is your first line of defense against disease, protects your other organs, warms you up and cools you down, and sends messages about how healthy you are inside. </p>
                        </div>
                        <img alt='img' src={bannerImg} className='md:w-1/2 md:static  absolute bottom-0' />
                    </div>
                </div>
                <div>
                <div className='min-h-screen h-full banner_bg md:flex justify-between px-4'>
                        <div className='text-white self-center md:pt-0 pt-7 min-h-[300px]'>
                            <h1 className='text-5xl font-bold mb-5'>Back Pain</h1>
                            <p>Back pain is one of the most common medical problems in the United States. It can range from a dull, constant ache to a sudden, sharp pain. Sometimes it can come on suddenly from an accident, a fall, or lifting something heavy, or it can develop slowly because of age-related degenerative changes to the spine. </p>
                        </div>
                        <img alt='img' src={bannerImg} className='md:w-1/2 md:static  absolute bottom-0' />
                    </div>
                </div>
            </Slider>
        </div>
    );

}

export default Banner