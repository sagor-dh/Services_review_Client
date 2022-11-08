import React, { useState } from 'react'
import logo from '../../images/logo.png'
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Header() {
    const [toggle, setToggle] = useState(true)
    console.log(toggle)
    return (
        <div>
            <header className="p-4 dark:bg-gray-800 dark:text-gray-100 relative">
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
                        </ul>
                    </div>
                    <div>
                        <NavLink to='/login'>
                            <button className='btn bg-indigo-600 px-5 py-2'>Login</button>
                        </NavLink>
                        <img src={logo} alt="luser" className='w-12 object-cover' />
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