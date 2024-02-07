import React, { useState } from 'react';

function Demo() {
  const [inputValue, setInputValue] = useState('');

  // Function to handle changes in the input field
  const handleChange = (event) => {
    setInputValue(event.target.value); // Update the state with the new input value
  };

  return (
    <div>
      {/* Input field */}
      <input
        type="text"
        value={inputValue} // Bind the input value to the state
        onChange={handleChange} // Call the handleChange function when the input changes
      />

      {/* Display the entered value */}
      <p>You entered: {inputValue}</p>
    </div>
  );
}

export default Demo;
