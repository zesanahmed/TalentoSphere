import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";


const Statistics = () => {

    const data = [
        {
            name: "Assignment 1",
            outOf: 50,
            mark: 50,
            amt: 0
        },
        {
            name: "Assignment 2",
            outOf: 50,
            mark: 50,
            amt: 10
        },
        {
            name: "Assignment 3",
            outOf: 50,
            mark: 49,
            amt: 20
        },
        {
            name: "Assignment 4",
            outOf: 30,
            mark: 30,
            amt: 30
        },
        {
            name: "Assignment 5",
            outOf: 30,
            mark: 27,
            amt: 40
        },
        {
            name: "Assignment 6",
            outOf: 30,
            mark: 29,
            amt: 50
        },
        {
            name: "Assignment 7",
            outOf: 30,
            mark: 30,
            amt: 60
        }
    ];
    return (
        <div className='ms-20 mt-10'>
            <AreaChart
                width={1000}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis dataKey="" />
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="outOf"
                    stackId="1"
                    stroke="#8884d8"
                    fill="#8884d8"
                />

                <Area
                    type="monotone"
                    dataKey="mark"
                    stackId="1"
                    stroke="#ffc658"
                    fill="#ffc658"
                />
            </AreaChart>
        </div>
    );
};

export default Statistics;