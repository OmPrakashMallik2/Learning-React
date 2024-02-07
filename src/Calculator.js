import React, { useState } from 'react'

function Calculator() {

    const [data, setData] = useState(
        {
            image: 'https://i.pinimg.com/564x/e9/a6/6b/e9a66b83bc58f613f4a38fa5327a82d7.jpg',
            msg: 'Your Message Here'
        }
    )

    const updateData = (link, txt) => {
        const TempData = {
            image: link,
            msg: txt
        };

        setData(TempData);
    }

    const handledChangeInput = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    }

    return (
        <div className='flex flex-col '>

            <div className='bg-blue-500 p-4 w-auto'>
                <img className='w-50 h-80' src={data.image} alt='person' />
                <h1>{data.msg}</h1>
            </div>

            <div>
                <form>
                    <input type='text' name='image' placeholder='Enter Image Link' onSubmit={handledChangeInput} />
                    <input type='text' name='msg' placeholder='Write message' onSubmit={handledChangeInput} />
                    <button type='submit' onClick={() => updateData(data.image, data.msg)}>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Calculator;

// const ttt ="https://i.pinimg.com/564x/b2/90/c6/b290c6257d5fa4c31690fe308d6f80eb.jpg"