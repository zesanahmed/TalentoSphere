import React, { createContext } from 'react';
import Header from '../Header/Header';
import JobList from '../JobList/JobList';
import { useLoaderData } from "react-router-dom";
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';


export const JobsContext = createContext([]);

const Home = () => {

    const jobs = useLoaderData();

    return (

        <JobsContext.Provider value={jobs}>
            <Header />
            <JobList />
            <FeaturedJobs />
        </JobsContext.Provider>
    );
};

export default Home;