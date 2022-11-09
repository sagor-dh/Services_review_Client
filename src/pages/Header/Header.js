import React, { useContext, useState } from 'react'
import logo from '../../images/logo.png'
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

function Header() {
    const { user, userLogout } = useContext(AuthContext)
    const [toggle, setToggle] = useState(true)

    const handelLogout = () =>{
        userLogout()
        .then(()=>{})
        .catch(()=>{})
    }

    return (
        <div>
            <header className="p-4 bg-gray-900 text-gray-50 relative">
                <div className='flex justify-between items-center'>
                    <div>
                        <img src={logo} alt="logo" className='w-24 object-cover' />
                    </div>
                    <div className='hidden md:block'>
                        <ul className='flex space-x-5'>
                            <li>
                                <NavLink to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/allServices'>Services</NavLink>
                            </li>
                            <li>
                                <NavLink to='/myreview'>My Review</NavLink>
                            </li>
                            <li>
                                <NavLink to='/addService'>Add Service</NavLink>
                            </li>
                            <li>
                                <NavLink to='/block'>Block</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className={`md:hidden absolute top-[100%] ${toggle ? 'left-[-100%]' : 'left-0'} transition-all  bg-gray-800 min-w-[300px] w-auto z-40`}>
                        <ul className=''>
                            <li>
                                <NavLink to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/allServices'>Services</NavLink>
                            </li>
                            <li>
                                <NavLink to='/myreview'>My Review</NavLink>
                            </li>
                            <li>
                                <NavLink to='/addService'>Add Service</NavLink>
                            </li>
                            <li>
                                <NavLink to='/block'>Block</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        {
                            user && user.uid ? <div className='flex'>
                                <img src={user?.photoURL ? user.photoURL : logo} alt="luser" className='w-12 h-12 object-cover mr-3 rounded-full' />
                                <button onClick={handelLogout} className='btn bg-indigo-600 px-5 py-2'>Log out</button>
                            </div> :
                                <NavLink to='/login'>
                                    <button className='btn bg-indigo-600 px-5 py-2'>Log in</button>
                                </NavLink>

                        }
                    </div>
                    <div className='md:hidden'>
                        {
                            toggle ? <FaBars className='text-3xl' onClick={() => setToggle(!toggle)} /> :
                                <FaTimes className='text-3xl' onClick={() => setToggle(!toggle)} />
                        }

                    </div>
                </div>

            </header>
        </div>
    )
}

export default Header