import React, { useState } from 'react'

function ColorAdjust() {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const changeRed = (event) => {
        setRed(event.target.value);
    }
    const changeGreen = (event) => {
        setGreen(event.target.value);
    }
    const changeBlue = (event) => {
        setBlue(event.target.value);
    }

    return (
        <div className='flex flex-col text-white bg-black h-screen' style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}>
            <h1>rbg({red}, {green}, {blue})</h1>
            <div className='flex'>
                <input value={red} onChange={changeRed} type='range' min={0} max={255} />
                <input value={green} onChange={changeGreen} type='range' min={0} max={255}/>
                <input value={blue} onChange={changeBlue} type='range' min={0} max={255} />
            </div>

        </div>
    )
}

export default ColorAdjust
