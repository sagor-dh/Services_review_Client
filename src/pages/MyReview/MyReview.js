import React, { useContext, useEffect, useState } from 'react'
import { FaTrash, FaEdit } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider';

function MyReview() {
  const { user } = useContext(AuthContext)
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch(`http://localhost:5000/review?email=${user.email}`)
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [user.email])

  return (
    <div>
      <div className=" mx-auto  dark:text-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left ">
            <colgroup>
            </colgroup>
            <thead>
              <tr className="dark:bg-gray-700">
                <th className="p-3">Name</th>
                <th className="p-3">Title</th>
                <th className="p-3">Email</th>
                <th className="p-3">Content</th>
                <th className="p-3">Acction</th>
              </tr>
            </thead>
            <tbody className="border-b dark:bg-gray-900 dark:border-gray-700">
              {
                reviews.map(reiew => {
                  const {userName, userEmail, serviceTitle, textarea} = reiew
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
                        <FaEdit className='text-xl' /><FaTrash className='text-xl ml-3' />
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