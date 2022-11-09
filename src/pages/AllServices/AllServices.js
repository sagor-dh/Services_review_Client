import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import useTitle from '../../Hooks/useTitle';

function AllServices() {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)
    useTitle('All Services')

    // Get all service data
    useEffect(() => {
        fetch(`https://module-70-server.vercel.app/allServices`)
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            })
    }, [])

    return (
        <div className='bg-gray-800 text-gray-50 py-16'>
            <h1 className='text-5xl font-bold text-center mb-5'>My Service</h1>
            <div>
                {loading?<div className="w-16 h-16 border-4 mx-auto my-28 border-dashed rounded-full animate-spin dark:border-violet-400"></div>:
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>{
                        services.map(service => {
                            const { _id, title, images, fees, details } = service
                            return (
                                <div key={_id} className=" rounded-md shadow-md bg-gray-900 text-gray-100">
                                    {/*------ Images popup ---------*/}
                                    <PhotoProvider>
                                        <PhotoView src={images}>
                                            <img src={images} alt={title} className="object-contain w-full rounded-t-md h-72 bg-gray-500 cursor-pointer" />
                                        </PhotoView>
                                    </PhotoProvider>
                                    <div className="flex flex-col justify-between p-6 space-y-8">
                                        <div className="space-y-2 min-h-[200px] h-full">
                                            <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                                            <p className="text-gray-100">{details?.length > 150 ? <span>{details.slice(0, 150) + '...'}</span> : <span>{details}</span>}</p>
                                            <p className="text-gray-100">Fees: {fees}</p>
                                        </div>
                                        {/* ------- show Details click on the btn */}
                                        <Link to={`/service/${_id}`} >
                                            <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-indigo-600 text-white">
                                                Viwe Details
                                            </button>
                                        </Link>
                                    </div>

                                </div>
                            )
                        })
                    }
                    </div>
                }
            </div>
        </div>
    )
}

export default AllServices