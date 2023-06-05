import React, { useContext } from 'react';
import { JobsContext } from '../Home/Home';
import Card from '../Card/Card';

const FeaturedJobs = () => {
    const jobs = useContext(JobsContext);
    return (
        <div className='mt-20'>
            <h3 className='text-3xl font-bold mb-2'>Featured jobs</h3>
            <p className='text-gray-500 mb-10'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-2 gap-4 mx-20'>
                {
                    jobs.map(job => <Card
                        key={job.id}
                        job={job}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;