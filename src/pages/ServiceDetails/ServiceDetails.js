import React from 'react'
import { useLoaderData } from 'react-router-dom'

function ServiceDetails() {
    const service = useLoaderData()
    const { _id, title, images, fees, details } = service
    return (
        <div>
            <section className=''>
                <div className="max-w-5xl mx-auto mt-7 p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                    <img src={images} alt={title} className="object-cover object-center w-full rounded-md h-[400px] dark:bg-gray-500" />
                    <div className="mt-6 mb-2">
                        <p className="dark:text-gray-100">{details}</p>
                        <p className="dark:text-gray-100 font-semibold mt-3">Fees: {fees}</p>
                    </div>
                </div>
            </section>
            <section>

            </section>
        </div>
    )
}

export default ServiceDetails