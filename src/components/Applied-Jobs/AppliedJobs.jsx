import { useLoaderData } from 'react-router-dom';
import JobItem from '../JobItem/JobItem';

const AppliedJobs = () => {
    const jobArray = useLoaderData();

    return (
        <div>
            <div className='relative mt-6'>
                <img className='w-full h-32 rounded-sm' src="https://img.freepik.com/free-vector/blue-curve-background_53876-113112.jpg?w=900&t=st=1686247577~exp=1686248177~hmac=e09aa3fb978038303f1ac9ad5eeb23aad72e560de83fb0ef03f7e944ec7a361f" alt="" />
                <h2 className='absolute top-12 left-2/4 text-2xl font-bold'>Applied Jobs</h2>
            </div>
            <div className='mt-28 mx-20 flex flex-col p-6 space-y-12'>
                {/* <div className='flex flex-col p-6 space-y-12'> */}
                <ul className='flex flex-col '>
                    {
                        jobArray.map(job => <JobItem
                            key={job.id}
                            job={job}
                        ></JobItem>)
                    }
                </ul>
                {/* </div> */}
            </div>
        </div>

    );
};

export default AppliedJobs;




