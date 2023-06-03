import React from 'react';

const Header = () => {
    return (
        <div className='flex mt-16'>
            <div className='pr-80 text-start'>
                <h1 className='text-4xl font-bold mb-2'>CareerQuest:</h1>
                <h1 className='text-5xl font-bold mb-6 animate-text bg-gradient-to-r from-cyan-400 via-purple-500 to-purple-600  bg-clip-text text-transparent'> Your Path to Success</h1>
                <p className='text-gray-500 mb-4'>Navigate your way to success with CareerQuest, where employers and job seekers converge to forge meaningful connections and foster professional advancement.</p>
                <button className='font-medium text-white shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-xl   hover:bg-violet-700 bg-violet-500'>Get Started</button>
            </div>

            <img className='w-2/4 rounded-xl' src="https://img.freepik.com/premium-photo/successful-business-man-office_21730-1069.jpg?w=900" alt="" />

        </div>
    );
};

export default Header;