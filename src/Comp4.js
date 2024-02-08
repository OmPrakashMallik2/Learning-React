import React, { useEffect, useState } from 'react'

function Comp4() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('the count is: ', count);
    },[]);

    return (
        <div>
            <h1 className='text-5xl text-blue-600 font-extrabold text-center py-10'>
                Count: {count}
            </h1>
            <div className='flex justify-around'>
                <button className='font-bold p-2 bg-black text-white rounded ' onClick={() => setCount(count - 1)}>Decrement</button>
                <button className='font-bold p-2 bg-black text-white rounded ' onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        </div>
    )
}

export default Comp4
