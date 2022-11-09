import React, { useContext, useEffect, useState } from 'react'
import { FaTrash, FaEdit } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { useNavigate } from 'react-router-dom';

function MyReview() {
  const { user, userLogout } = useContext(AuthContext)
  const [reviews, setReviews] = useState([])
  useTitle("My Review")
  const naviget = useNavigate()
  const [loading, setLoading] = useState(true)

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
        setLoading(false)
      })
  }, [user.email, userLogout])

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
    <div>
      <div className="bg-gray-800 text-gray-100 py-28">
        {/* -----------Heading------------ */}
        <h1 className='text-4xl font-bold'>My Reviews</h1>
        {/* -----------Table------------ */}
        <div className=" mt-7">
          <Table className="w-full text-xs text-left ">
            <Thead>
              <Tr className="bg-gray-700">
                <Th className="p-3">Name</Th>
                <Th className="p-3">Title</Th>
                <Th className="p-3">Email</Th>
                <Th className="p-3">Content</Th>
                <Th className="p-3">Acction</Th>
              </Tr>
            </Thead>
            <Tbody className="border-b  border-gray-700">
              {
                reviews.length === 0 ?
                // ------------condaition for loading no item
                  <Tr><Td><div className="w-16 h-16 border-4 mx-auto my-28 border-dashed rounded-full animate-spin dark:border-violet-400"></div></Td></Tr> ||
                  <Tr><Td className='text-2xl text-yellow-600'> "No item review"</Td></Tr> :
                  reviews.map(reiew => {
                    // --------- Review Items
                    const { _id, userName, userEmail, serviceTitle, textarea } = reiew
                    return (
                      <Tr key={reiew._id}>
                        <Td className="px-3 py-2">
                          <p>{userName}</p>
                        </Td>
                        <Td className="px-3 py-2">
                          <span>{serviceTitle}</span>
                        </Td>
                        <Td className="px-3 py-2">
                          <p>{userEmail}</p>
                        </Td>
                        <Td className="px-3 py-2 lg:max-w-sm ">
                          <p>{textarea}</p>
                        </Td>
                        <Td className="px-3 py-2 ">
                          <div className='flex  items-center'>
                            <FaEdit className='text-xl mr-7 cursor-pointer' onClick={() => hendleEditReview(_id)} />
                            <FaTrash className='text-xl  cursor-pointer' onClick={() => hendleDeleteReview(_id)} />
                          </div>
                        </Td>
                      </Tr>
                    )
                  })
              }
            </Tbody>
          </Table>
        </div>
      </div>
      <Toaster />
    </div>
  )
}

export default MyReview