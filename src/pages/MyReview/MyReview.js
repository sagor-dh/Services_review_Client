import React, { useContext, useEffect, useState } from 'react'
import { FaTrash, FaEdit } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';
import { useNavigate } from 'react-router-dom';

function MyReview() {
  const { user, userLogout } = useContext(AuthContext)
  const [reviews, setReviews] = useState([])
  useTitle("My Review")
  const naviget = useNavigate()

  //  Review Loded to be server
  useEffect(() => {
    fetch(`https://module-70-server.vercel.app/review?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          userLogout()
        }
        return res.json()
      })
      .then(data => {
        setReviews(data)
      })
  }, [user.email, userLogout])

  //---------- Review Deleat btn handle
  const hendleDeleteReview = (id) => {
    fetch(`https://module-70-server.vercel.app/review/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount === 1) {
          toast('Deleae Successful')
        }
        const newData = reviews.filter(rvw => rvw._id !== id)
        setReviews(newData)
      })
      .catch(err => console.log(err))
  }

  const hendleEditReview = (id) => {
    naviget(`/reviewEdit/${id}`)
  }


  return (
    <div className='min-h-screen h-full bg-gray-800 text-gray-100 py-28'>
      <div className="">
        {/* -----------Heading------------ */}
        <h1 className='text-4xl font-bold'>My Reviews</h1>
        {/* -----------div------------ */}
        <div className=" mt-7">
          <div className="w-full text-xs text-left ">
            <div>
              <div className="bg-gray-700 hidden  lg:grid grid-cols-[10%_10%_15%_auto_10%]">
                <div className="p-3">Name</div>
                <div className="p-3">Title</div>
                <div className="p-3">Email</div>
                <div className="p-3">Review</div>
                <div className="p-3">Acction</div>
              </div>
            </div>
            <div className="border-b  border-gray-700 ">
              {
                reviews.length === 0 ?
                  // ------------condaition for loading no item
                  <div><div className='text-2xl text-yellow-600'> "No item review"</div></div> :
                  reviews.map(reiew => {
                    // --------- Review Items
                    const { _id, userName, userEmail, serviceTitle, textarea } = reiew
                    return (
                      <div key={reiew._id} className="grid lg:grid-cols-[10%_10%_15%_auto_10%] md:grid-cols-[1fr_1fr_1fr] break-words">
                        <div className="px-3 py-2">
                          <p className='lg:hidden font-semibold text-base'>Name: </p>
                          <p>{userName}</p>
                        </div>
                        <div className="px-3 py-2">
                          <p className='lg:hidden font-semibold text-base'>Title: </p>
                          <p>{serviceTitle}</p>
                        </div>
                        <div className="px-3 py-2">
                          <p className='lg:hidden font-semibold text-base'>Email: </p>
                          <p>{userEmail}</p>
                        </div>
                        <div className="px-3 py-2 md:col-span-2 lg:col-span-1">
                          <p className='lg:hidden font-semibold text-base'>Review: </p>
                          <p >{textarea}</p>
                        </div>
                        <div className="px-3 py-2 ">
                          <p className='lg:hidden font-semibold text-base'>Action: </p>
                          <div className='flex  items-center'>
                            <FaEdit className='text-xl mr-7 cursor-pointer' onClick={() => hendleEditReview(_id)} />
                            <FaTrash className='text-xl  cursor-pointer' onClick={() => hendleDeleteReview(_id)} />
                          </div>
                        </div>
                      </div>
                    )
                  })
              }
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  )
}

export default MyReview