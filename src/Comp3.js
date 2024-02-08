import React, { useState } from 'react';

function Comp3() {

    const [imageLink, setImageLink] = useState('')
    const [message, setMessage] = useState('')

    const [displayedImage, setDisplayedImage] = useState('https://i.pinimg.com/564x/e9/a6/6b/e9a66b83bc58f613f4a38fa5327a82d7.jpg')
    const [displayedMessage, setDisplayedMessage] = useState('Enter You Message Here')

    const handleImageChange = (event) => {
        setImageLink(event.target.value)
    }

    const handleMessageChange = (event) => {
        setMessage(event.target.value)
    }

    const handleUpdate = () => {
        setDisplayedImage(imageLink)
        setDisplayedMessage(message)

        setImageLink('');
        setMessage('')
    }

    return (
        <div className=''>
            <div className=''>
                <img className='w-50 h-80' src={displayedImage} alt='person' />
                <h1>{displayedMessage}</h1>
            </div>

            <div>
                <input type='text' value={imageLink} onChange={handleImageChange} placeholder='Enter Image Link' />
                <input type='text' value={message} onChange={handleMessageChange} placeholder='Write message' />
                <button onClick={handleUpdate}>Update</button>
            </div>
        </div>
    );
}

export default Comp3;
