import React from 'react'
import useTitle from '../../Hooks/useTitle'
import toast, { Toaster } from 'react-hot-toast';

function AddService() {
  useTitle("Add Service")

  const handleAddService = (event) =>{
    event.preventDefault()
    const form = event.target;
    const title = form.title.value;
    const images = form.imgurl.value;
    const fees = form.fees.value;
    const details = form.textarea.value;
    const date = new Date().getTime()
    console.log(date)

    const addedService = {
      title,
      images,
      fees,
      details,
      date
    }

    // Post service data in database
    fetch('https://module-70-server.vercel.app/service',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(addedService)
    })
    .then(res => res.json())
    .then(data => {
      if(data.acknowledged){
        toast('Add successfuly')
      }
      form.reset()
    })
  }
  return (
    <section className="p-6 bg-gray-800 text-gray-50">
      <form onSubmit={handleAddService} className="max-w-5xl mx-auto">
        <div>
          <p className="font-bold text-4xl ">Add Service</p>
        </div>
        <div className="space-y-3 mt-5">
          <div className="">
            <label htmlFor="firstname" className="text-sm">Title</label>
            <input type="text" placeholder="Title" name='title' className="w-full h-10 pl-2 rounded-sm  text-gray-900" />
          </div>
          <div className="">
            <label htmlFor="imgurl" className="text-sm">Image url</label>
            <input type="text" placeholder="Image url" name='imgurl' className="w-full h-10 pl-2 rounded-sm  text-gray-900" />
          </div>
          <div className="">
            <label htmlFor="fees" className="text-sm">Fees</label>
            <input type="number" placeholder="Fees" name='fees' className="w-full h-10 pl-2 rounded-sm  text-gray-900" />
          </div>
          <div className="">
            <label htmlFor="details" className="text-sm">Details</label>
            <textarea name="textarea" placeholder='Details' className='w-full h-72 pl-2 rounded-sm text-gray-900'></textarea>
          </div>
          <button type="submit" className='btn bg-indigo-600 px-7 py-3'>Add Service</button>
        </div>
      </form>
      <Toaster/>
    </section>
  )
}

export default AddService