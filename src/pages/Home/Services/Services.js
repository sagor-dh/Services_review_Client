import React, { useEffect, useState } from 'react'

function Services() {
  const [services, setServices] = useState([])
  const [loadData, setLoadData] = useState(3)

  useEffect(() => {
    fetch(`http://localhost:5000/services?size=${loadData}`)
      .then(res => res.json())
      .then(data => setServices(data))
  }, [loadData])

  const handleLoadData = () =>{
    setLoadData(6)
  }

  console.log(services)
  return (
    <div>
      <div className='grid grid-cols-3 gap-5'>
        {
          services.map(service => {
            return (
              <div key={service._id} className=" rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{service.title}</h2>
                    <p className="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                  </div>
                  <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">Read more</button>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='w-full flex justify-center'>
        <button onClick={handleLoadData} className='btn bg-purple-600 px-10 py-2 rounded-md mt-5'>See All</button>
      </div>
    </div>
  )
}

export default Services