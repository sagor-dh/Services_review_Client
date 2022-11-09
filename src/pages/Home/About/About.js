import React from 'react'
import aboutImg from '../../../images/about.png'
function About() {
    return (
        <div>
            <section className="bg-orange-600">
                <div className="container flex flex-col justify-center  mx-auto  lg:flex-row lg:justify-between">
                    {/* About Image */}
                    <div className="flex items-center justify-center mt-8 lg:mt-0">
                        <img src={aboutImg} alt="img" className="object-contain h-full bg-slate-600" />
                    </div>
                    {/* About Content */}
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-2xl lg:text-left">
                        <h1 className='text-3xl font-bold text-white '>About Me</h1>
                        <h1 className="text-5xl mt-3 font-bold leading-none sm:text-6xl">I am Doctor
                            <span className="text-indigo-600">Jon Deo</span> at Bangladesh.
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">I am a hard-working, conscientious and professional doctor who always puts the needs of my patients at the forefront of everything I do. I am a confident and decisive decision-maker who also possesses exceptional interpersonal skills that allow me to demonstrate the right levels of empathy with patients when appropriate.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About