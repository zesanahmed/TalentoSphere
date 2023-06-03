import React from 'react';
import { SunIcon, CalculatorIcon, UserGroupIcon, WrenchIcon } from '@heroicons/react/24/solid'

const JobList = () => {
    return (
        <div className='mt-16'>
            <h2 className='text-3xl font-bold '>Job Category List </h2>
            <p className='text-gray-500 mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-4 text-start mt-14 gap-8'>
                <div className='bg-violet-100 p-6 rounded-md'>
                    <CalculatorIcon className="h-10 w-10 text-violet-400 mb-4" />
                    <h4 className='font-bold'>Account & Finance</h4>
                    <p className='text-gray-500 text-sm'>300 Jobs Available</p>
                </div>
                <div className='bg-violet-100 p-6 rounded-md'>
                    <SunIcon className="h-10 w-10 text-violet-400 mb-4" />
                    <h4 className='font-bold'>Creative Design</h4>
                    <p className='text-gray-500 text-sm'>100+ Jobs Available</p>
                </div>
                <div className='bg-violet-100 p-6 rounded-md'>
                    <UserGroupIcon className="h-10 w-10 text-violet-400 mb-4" />
                    <h4 className='font-bold'>Marketing & Sales</h4>
                    <p className='text-gray-500 text-sm'>150 Jobs Available</p>
                </div>
                <div className='bg-violet-100 p-6 rounded-md'>
                    <WrenchIcon className="h-10 w-10 text-violet-400 mb-4" />
                    <h4 className='font-bold'>Engineering Job</h4>
                    <p className='text-gray-500 text-sm'>224 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default JobList;