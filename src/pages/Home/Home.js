import React from 'react'
import useTitle from '../../Hooks/useTitle'
import About from './About/About'
import Banner from './Banner/Banner'
import ContactUs from './ContactUs/ContactUs'
import Services from './Services/Services'

function Home() {
    useTitle('Home')
    return (
        <div className='bg-gray-800 text-gray-50'>
            <Banner />
            <About/>
            <Services />
            <ContactUs/>
        </div>
    )
}

export default Home