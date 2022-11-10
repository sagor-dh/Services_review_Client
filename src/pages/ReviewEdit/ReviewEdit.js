import React from 'react'
import { useLoaderData } from 'react-router-dom'
import useTitle from '../../Hooks/useTitle'
import toast, { Toaster } from 'react-hot-toast';

function ReviewEdit() {
    const review = useLoaderData()
    console.log(review)
    useTitle("Edit Review")

    const handleAddService = (event) => {
        event.preventDefault()
        const form = event.target;
        const textarea = form.textarea.value;

        const updateReview = {
            textarea
        }

        fetch(`https://module-70-server.vercel.app/reviewEdit/${review._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast('Add successfuly')
                }
                form.reset()
            })
    }
    return (
        <section className="p-6 bg-gray-800 text-gray-50">
            <form onSubmit={handleAddService} className="max-w-5xl mx-auto">
                <div>
                    <p className="font-bold text-4xl ">Edit Review</p>
                </div>
                <div className="space-y-3 mt-5">
                    <div className='flex justify-between'>
                        <div className="">
                            <label htmlFor="firstname" className="text-sm">Title</label>
                            <input type="text" defaultValue={review.serviceTitle} placeholder="Title" readOnly name='title' className="w-full h-10 pl-2 rounded-sm  text-gray-900" />
                        </div>
                        <div className="">
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input type="email" defaultValue={review.userEmail} placeholder="Email" readOnly name='email' className="w-full h-10 pl-2 rounded-sm  text-gray-900" />
                        </div>
                        <div className="">
                            <label htmlFor="name" className="text-sm">Name</label>
                            <input type="text" defaultValue={review.userName} placeholder="Name" name='name' readOnly className="w-full h-10 pl-2 rounded-sm  text-gray-900" />
                        </div>
                    </div>
                    <div className="">
                        <label htmlFor="details" className="text-sm">Details</label>
                        <textarea name="textarea" defaultValue={review.textarea} placeholder='Details' className='w-full h-72 pl-2 rounded-sm text-gray-900'></textarea>
                    </div>
                    <button type="submit" className='btn bg-indigo-600 px-7 py-3'>Update Review</button>
                </div>
            </form>
            <Toaster />
        </section>
    )
}

export default ReviewEdit