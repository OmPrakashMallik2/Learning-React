import React, { useEffect, useState } from 'react'

function Comp5() {

    const [length, setLength] = useState(8);
    const [password, setPassword] = useState(12345678);

    const lengthChange = (event) => {
        const newLength = event.target.value;
        setLength(newLength);
        updatePassword(newLength);
    };

    const updatePassword = (length) => {
        let temp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        let pw = "";
        for (let i = 0; i < length; i++) {
            let ch = temp.charAt(Math.floor(Math.random() * temp.length));
            pw += ch;
        }
        setPassword(pw);
    }

    return (
        <div className='bg-gray-800 h-screen text-white'>

            <h1 className='text-white text-5xl text-center font-bold bg-black p-5'>
                {password}
            </h1>

            <div className='flex items-center justify-evenly'>
                <input value={length} onChange={lengthChange} min={8} max={16} type='range' />
                <p className='font-bold text-2xl'>Length: {length}</p>
            </div>

        </div>
    )
}

export default Comp5;
