import React, { useState } from 'react'

function RandomColor() {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const changeColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        setRed(r);
        setGreen(g);
        setBlue(b);
    }

    return (
        <div className=' text-white bg-black h-screen w-screen' style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}>
            <button onClick={changeColor} className=' text-2xl p-5 border-2 border-white rounded'>Change Color</button>
            <h1>rbg({red}, {green}, {blue})</h1>
        </div>
    )
}

export default RandomColor
