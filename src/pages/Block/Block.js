import React from 'react'
import useTitle from '../../Hooks/useTitle'

function Block() {
    useTitle("BLock")
    return (
        <div className='space-y-5 py-5 bg-gray-800'>
            <div className=" text-gray-100">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-900">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Jun 1, 2022</span>
                        <p className="px-2 py-1 font-bold rounded bg-indigo-600 text-gray-50">Javascript</p>
                    </div>
                    <div className="mt-3">
                        <p className="text-2xl font-bold ">Difference between SQL and NoSQL</p>
                        <p className="mt-2">When choosing a modern database, one of the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both are viable options, there are key differences between the two that users must keep in mind when making a decision.

                            Here, we break down the most important distinctions and discuss the best SQL and NoSQL database systems available.

                            The five critical differences between SQL vs NoSQL are:

                            SQL databases are relational, NoSQL databases are non-relational.
                            SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                            SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                            SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                            SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                    </div>
                    <div className="flex items-center justify-between mt-4"> 
                        
                    </div>
                </div>
            </div>
            <div className=" text-gray-100">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-900">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Jun 1, 2022</span>
                        <p className="px-2 py-1 font-bold rounded bg-indigo-600 text-white ">Javascript</p>
                    </div>
                    <div className="mt-3">
                        <p className="text-2xl font-bold ">What is JWT, and how does it work?</p>
                        <p className="mt-2">JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

                            It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.

                            The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. </p>
                    </div>
                    
                </div>
            </div>
            <div className=" text-gray-100">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-900">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Jun 1, 2022</span>
                        <p className="px-2 py-1 font-bold rounded bg-indigo-600 text-white ">Javascript</p>
                    </div>
                    <div className="mt-3">
                        <p className="text-2xl font-bold ">What is the difference between javascript and NodeJS?</p>
                        <p className="mt-2"> JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.</p>
                    </div>
                    
                </div>
            </div>
            <div className=" text-gray-100">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-900">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Jun 1, 2022</span>
                        <p className="px-2 py-1 font-bold rounded bg-indigo-600 text-white ">Javascript</p>
                    </div>
                    <div className="mt-3">
                        <p className="text-2xl font-bold ">How does NodeJS handle multiple requests at the same time?</p>
                        <p className="mt-2">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                            If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Block