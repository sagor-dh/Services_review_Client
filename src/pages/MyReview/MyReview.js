import React, { useContext, useEffect, useState } from 'react'
import { FaTrash, FaEdit } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider';
import Modal from '../Modal/Modal';

function MyReview() {
  const { user } = useContext(AuthContext)
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/review?email=${user.email}`)
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [user.email])

  const hendleDeleteReview = (id) =>{
    fetch(`http://localhost:5000/review/${id}`, {
      method:'DELETE',
      headers: {
        'Content-type': 'application/json'
       }
    })
    .then(res => res.json())
    .then(data => {
      const newData = reviews.filter(rvw => rvw._id !== id )
      setReviews(newData)
    })
    .catch(err => console.log(err))
  }

  const hendleEditReview = (id) =>{
    return <Modal/>
  }

  return (
    <div>
      <div className="bg-gray-800 text-gray-100 py-28">
        <h1 className='text-4xl font-bold'>My Reviews</h1>
        <div className="overflow-x-auto mt-7">
          <table className="w-full text-xs text-left ">
            <colgroup>
            </colgroup>
            <thead>
              <tr className="bg-gray-700">
                <th className="p-3">Name</th>
                <th className="p-3">Title</th>
                <th className="p-3">Email</th>
                <th className="p-3">Content</th>
                <th className="p-3">Acction</th>
              </tr>
            </thead>
            <tbody className="border-b  border-gray-700">
              {
                reviews.map(reiew => {
                  const {_id, userName, userEmail, serviceTitle, textarea} = reiew
                  return (
                    <tr key={reiew._id}>
                      <td className="px-3 py-2">
                        <p>{userName}</p>
                      </td>
                      <td className="px-3 py-2">
                        <span>{serviceTitle}</span>
                      </td>
                      <td className="px-3 py-2">
                        <p>{userEmail}</p>
                      </td>
                      <td className="px-3 py-2 max-w-sm">
                        <p>{textarea}</p>
                      </td>
                      <td className="px-3 py-2 flex">
                        
                        <FaEdit className='text-xl'  onClick={hendleEditReview} />
                        <FaTrash className='text-xl ml-3' onClick={()=>hendleDeleteReview(_id)} />
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MyReview