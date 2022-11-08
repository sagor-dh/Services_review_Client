import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function AllServices() {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/allServices`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className='text-5xl font-bold text-center mt-7 mb-5'>My Service</h1>
            <div className='grid grid-cols-3 gap-5'>
                {
                    services.map(service => {
                        const { _id, title, images, fees, details } = service
                        return (
                            <div key={_id} className=" rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                                <img src={images} alt={title} className="object-contain w-full rounded-t-md h-72 dark:bg-gray-500" />
                                <div className="flex flex-col justify-between p-6 space-y-8">
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                                        <p className="dark:text-gray-100">{details.length > 150 ? <span>{details.slice(0, 150) + '...'}</span> : <span>{details}</span>}</p>
                                        <p className="dark:text-gray-100">Fees: {fees}</p>
                                    </div>
                                    <Link to={`/service/${_id}`} >
                                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            Viwe Details
                                        </button>
                                    </Link>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AllServices