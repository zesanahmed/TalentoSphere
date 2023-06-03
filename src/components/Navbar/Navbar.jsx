import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between'>
            <h3 className='text-3xl font-bold'>TalentoSphere</h3>
            <div className='space-x-5 font-semibold'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/statistics'>Statistics</NavLink>
                <NavLink to='/jobs'>Applied Jobs</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
            </div>
            <button className='font-medium text-white shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-xl   hover:bg-violet-700 bg-violet-500'>Start Applying</button>
        </div>
    );
};

export default Navbar;