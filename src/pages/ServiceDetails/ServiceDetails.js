import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Review from '../Review/Review'

function ServiceDetails() {
    const service = useLoaderData()
    const [showReview, setShowReview] = useState([])
    const { _id, title, images, fees, details } = service

    useEffect(() => {
        fetch(`http://localhost:5000/review/${_id}`)
            .then(res => res.json())
            .then(data => setShowReview(data))
    }, [])


    console.log(showReview)

    return (
        <div>
            <section className='dark:bg-gray-900 dark:text-gray-50'>
                <div className="max-w-5xl mx-auto mt-7 p-6 rounded-md shadow-md ">
                    <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                    <img src={images} alt={title} className="object-contain w-full rounded-md h-[400px] dark:bg-gray-500" />
                    <div className="mt-6 mb-2">
                        <p className="dark:text-gray-100">{details}</p>
                        <p className="dark:text-gray-100 font-semibold mt-3">Fees: {fees}</p>
                    </div>
                </div>
            </section>
            <section>

                <Review service={service} />
            </section>
        </div>
    )
}

export default ServiceDetails