import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../../utilities/fakeDb';

const JobDetails = () => {

    let { jobId } = useParams();
    const id = parseInt(jobId)
    const jobs = useLoaderData();
    const found = jobs.find(job => job.id === id);

    const handleAddTojob = (id) => {
        addToDb(id)
        console.log(id)
    }
    return (
        <div>
            <div className='relative mt-6'>
                <img className='w-full h-32' src="https://img.freepik.com/free-vector/blue-curve-background_53876-113112.jpg?w=900&t=st=1686247577~exp=1686248177~hmac=e09aa3fb978038303f1ac9ad5eeb23aad72e560de83fb0ef03f7e944ec7a361f" alt="" />
                <h2 className='absolute top-12 left-2/4 text-2xl font-bold'>Job Details</h2>
            </div>
            <div className='flex mt-20 gap-14 mx-28 '>
                <div className='text-start'>
                    <p className='mb-3'><span className='font-bold'>Job Description : </span>{found.job_description}</p>
                    <p className='mb-3'><span className='font-bold'>Job Responsibility : </span>{found.job_responsibility}</p>
                    <p className='font-bold mb-3'>Educational Requirements : </p>
                    <p className='mb-3'>{found.educational_requirement}</p>
                    <p className='font-bold mb-2'>Experiences : </p>
                    <p>{found.experience}</p>

                </div>
                <div className='w-2/5'>
                    <div className='divide-y divide-purple-600  p-4 text-start bg-purple-200 rounded-md'>
                        <h4 className='text-lg font-bold mb-3'>Job Details</h4>
                        <div>
                            <p className='mt-3'><span className='font-bold'>Salary : </span> <span className='text-gray-500'>{found.salary}</span></p>

                            <p className='mt-3'><span className='font-bold'>Job Title :  </span><span className='text-gray-500'>{found.job_title}</span></p>
                            <h4 className='text-lg font-bold my-4'>Contact Information</h4>
                        </div>
                        <div>
                            <p className='mt-3 '><span className='font-bold'>Phone : </span> <span className='text-gray-500'>01750-000000</span></p>
                            <p className='mt-3 '><span className='font-bold'>Email : </span> <span className='text-gray-500'> info@gmail.com</span></p>
                            <p className='mt-3 '><span className='font-bold'>Address : </span> <span className='text-gray-500'>{found.location}</span></p>
                        </div>
                    </div>
                    <button onClick={() => handleAddTojob(id)} className='w-full font-medium text-white shadow-md  px-4 py-2 md:px-4 text-lg rounded-md hover:bg-violet-700 bg-violet-500'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;