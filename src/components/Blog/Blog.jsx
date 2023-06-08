import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-2 gap-6 mt-12'>
            <div className='bg-orange-200 p-6 rounded-md'>
                <h2 className='font-bold m-2'>1. When should you use context API?</h2>
                <p>The Context API in React is a powerful feature that allows to manage state and share data across components without having to pass props down through multiple levels of the component tree.By using the Context API, you can avoid prop drilling and directly access the required data in the components that need it.the Context API can be used to store the current theme and make it accessible to all components that need to apply the theme styling.
                </p>
            </div>
            <div className='bg-orange-200 p-6 rounded-md'>
                <h2 className='font-bold m-2'>2. What is custom hook in react?</h2>
                <p>In React, a custom hook is a JavaScript function that starts with the prefix "use" and follows the conventions of Hooks. Custom hooks allow to reuse stateful logic between different components without duplicating code or relying on higher-order components or render props.</p>
            </div>
            <div className='bg-orange-200 p-6 rounded-md'>
                <h2 className='font-bold m-2'>3. What is useRef?</h2>
                <p>In React, the useRef hook is a built-in hook that allows to create a mutable reference to a value or a DOM element. Unlike state variables managed by useState, the value stored in a useRef does not trigger a re-render when it changes. Instead, it persists across multiple renders and allows you to access and modify the referenced value without causing a component re-render.</p>
            </div>
            <div className='bg-orange-200 p-6 rounded-md'>
                <h2 className='font-bold m-2'>4. What is useMemo?</h2>
                <p>In React, the useMemo hook is used to memoize the result of a computation. It is used to optimize performance by preventing unnecessary re-computation of values that depend on certain inputs.</p>
            </div>
        </div>
    );
};

export default Blog;