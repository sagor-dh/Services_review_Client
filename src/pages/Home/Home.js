import React from 'react'
import About from './About/About'
import Banner from './Banner/Banner'
import Services from './Services/Services'

function Home() {
    return (
        <div>
            <Banner />
            <About/>
            <Services />
        </div>
    )
}

export default Home