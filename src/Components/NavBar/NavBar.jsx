import React from 'react';
import { Link, NavLink } from 'react-router';

const NavBar = () => {

    const links = (
        <>
            <li><NavLink to={"/"} className={({ isActive }) => isActive && `text-green-600 border border-green-500`}>Home</NavLink></li>
            <li><NavLink to={"/books"} className={({ isActive }) => isActive && `text-green-600 border border-green-500`}>Listed Books</NavLink></li>
            <li><NavLink to={"/pages-to-read"} className={({ isActive }) => isActive && `text-green-600 border border-green-500`}>Pages to Read</NavLink></li>
        </>
    )

    return (
        <div>
            <nav className='bg-base-100 shadow-sm'>

                <div className="navbar container mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {links}
                            </ul>
                        </div>
                        <h2 className="btn btn-ghost text-2xl font-bold">Book Vibe</h2>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 space-x-4">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end gap-5">
                        <button className="btn btn-success text-lg font-semibold text-white">Sing In</button>
                        <button className="btn btn-info text-lg font-semibold text-white">sing Up</button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;