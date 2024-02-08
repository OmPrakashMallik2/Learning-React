import React from 'react'

function Comp6() {
    return (
        <div className='bg-gray-800 h-screen text-white'>
            <h1 className='text-white text-5xl text-center font-bold bg-black p-5'>
                Gonna master all hooks today
            </h1>

            <div className='flex justify-around'>
                <lebel>
                    Option 1
                    <input type='checkbox' />
                </lebel>
                <lebel>
                    Option 2
                    <input type='checkbox' />
                </lebel>
                <lebel>
                    Option 3
                    <input type='checkbox' />
                </lebel>
            </div>
        </div>
    )
}

export default Comp6
