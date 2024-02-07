import React, { useState } from "react";

function Comp1() {

  const [bg, setBg] = useState('white');

  const changeBg = (color) => {
    setBg(color);
  }

  return (
    <div className="w-full h-screen" style={{
      backgroundColor: bg
    }}>
      <div className="p-4 flex justify-around center">
        <button onClick={() => changeBg('white')} className="p-2 bg-white text-black rounded">WHITE</button>
        <button onClick={() => changeBg('red')} className="p-2 bg-red-500 text-white rounded">RED</button>
        <button onClick={() => changeBg('green')} className="p-2 bg-green-500 text-white rounded">GREEN</button>
        <button onClick={() => changeBg('blue')} className="p-2 bg-blue-500 text-white rounded">BLUE</button>
        <button onClick={() => changeBg('yellow')} className="p-2 bg-yellow-500 text-white rounded">YELLOW</button>
        <button onClick={() => changeBg('black')} className="p-2 bg-black text-white rounded">BLACK</button>

      </div>
    </div>
  );
}

export default Comp1;
