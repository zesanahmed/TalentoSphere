import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/solid'


const Card = ({ job }) => {
    const { id, job_title, company_name, location, salary, job_type, job_location } = job;

    return (
        <div className='border-2 border-gray-200 text-start p-6 rounded'>
            <h3 className='text-xl font-bold'>{job_title}</h3>
            <p className='text-gray-500 '>{company_name}</p>
            <div className='flex gap-3 my-2'>
                <p className='border-2 px-2  font-semibold border-violet-300 rounded animate-text bg-gradient-to-r from-purple-500 via-purple-500 to-purple-700  bg-clip-text text-transparent'>{job_location}</p>
                <p className='border-2 px-2  font-semibold border-violet-300 rounded animate-text bg-gradient-to-r from-purple-500 via-purple-500 to-purple-700  bg-clip-text text-transparent'>{job_type}</p>
            </div>
            <div className='flex gap-6'>
                <div className='flex gap-1'>
                    <p className='mt-1'>< MapPinIcon className="h-4 w-4 text-gray-500" /> </p>
                    <p className='text-gray-500'>{location}</p>
                </div>
                <p className='text-gray-500'>Salary : {salary}</p>
            </div>
            <button className='font-medium text-white shadow-md  px-4 py-1 md:px-4 mt-4 text-lg rounded-md hover:bg-violet-700 bg-violet-500'>View Details</button>
        </div>
    );
};

export default Card;