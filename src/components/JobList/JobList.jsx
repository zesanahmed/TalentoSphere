import React from 'react';
import { SunIcon, CalculatorIcon } from '@heroicons/react/24/solid'

const JobList = () => {
    return (
        <div className='mt-16'>
            <h2 className='text-3xl font-bold '>Job Category List </h2>
            <p className='text-gray-500 mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-4 text-start mt-14'>
                <div className='bg-violet-100'>
                    <CalculatorIcon className="h-10 w-10 text-violet-400" />
                    <h4>Account & Finance</h4>
                    <p>300 Jobs Available</p>
                </div>
                <div className=''>
                    <SunIcon className="h-10 w-10 text-violet-400" />
                    <h4>Creative Design</h4>
                    <p>100+ Jobs Available</p>
                </div>
                <div className=''>
                    <SunIcon className="h-10 w-10 text-violet-400" />
                    <h4>Marketing & Sales</h4>
                    <p>150 Jobs Available</p>
                </div>
                <div >
                    <SunIcon className="h-10 w-10 text-violet-400" />
                    <h4>Engineering Job</h4>
                    <p>224 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default JobList;