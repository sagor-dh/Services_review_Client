import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'

function AddReview({ service }) {
    const { user } = useContext(AuthContext)
    const location = useLocation()

    const handleReviewSubmit = (event) => {
        event.preventDefault()
        const textarea = event.target.textarea.value;
        const reviewerInfo = {
            serviceId: service._id,
            serviceTitle: service.title,
            userEmail: user.email,
            userName: user.displayName,
            userPhoto: user.photoURL,
            textarea
        }

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewerInfo)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        event.target.textarea.value = ''

    }

    

    return (
        <div className=' pb-9'>
            <h1 className='text-3xl font-bold text-center'>Add your Review</h1>
            {
                user && user.uid ?
                    <form onSubmit={handleReviewSubmit} className='w-[500px] mx-auto mt-5'>
                        <div className='grid grid-cols-2 gap-4'>
                            <input type="text" name="name" className='bg-gray-900 border border-white  h-10' defaultValue={user?.displayName} readOnly />
                            <input type="email" name="email" className='bg-gray-900 border border-white   h-10 ' defaultValue={user?.email} readOnly />
                        </div>
                        <textarea name='textarea' placeholder='Your Review' className='bg-gray-900 border border-white w-full h-28 mt-5'></textarea>
                        <br />
                        <button type="submit" className='btn bg-white text-black px-8 py-2 mt-5'>Review</button>
                    </form> :
                    <p className='text-2xl'>Please login to add a review. <Link to='/login' state={{ from: location }} replace className='text-rose-600 font-semibold underline text-3xl'>Log in</Link></p>
            }

        </div>
    )
}

export default AddReview