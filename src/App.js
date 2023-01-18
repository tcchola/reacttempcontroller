import React, { useState } from 'react';

export default function App() {
  
  const [tempValue, setTempValue] = useState(25);
  const [tempColor, setTempColor] = useState("room");
  
  const changeHot = () => {
    const newTemp = tempValue + 1;
    if(newTemp >= 30)
    {
      setTempColor("hot");
    }
    if(newTemp == 25)
    {
      setTempColor("room");
    }
    setTempValue(newTemp);
  };

  const changeCold = () => {
    const newTemp = tempValue - 1;
    if(newTemp <= 10)
    {
      setTempColor("cold");
    }
    if(newTemp == 25)
    {
      setTempColor("room");
    }
    setTempValue(newTemp);
  };

  return(
    // BACKGROUND
    <main className={`flex justify-center items-center w-screen h-screen  ${tempColor}`}>
      {/* MAIN CONTAINER FRAME */}
      <div className='inline-block w-[350px] h-[400px] bg-white shadow-lg rounded-[5%]'>
        {/* TEMP. DISPLAY */}
          <div className='text-6xl font-bold mt-11 flex justify-center mb-32'>{tempValue}°C</div>
        {/* TEMP. CONTROL BITTONS */}
        <div className='flex justify-between px-10'>
          <button className='rounded-full border border-black text-6xl px-[14px] pb-2 bg-blue-500' onClick={() => changeHot()}>+</button>
          <button className='rounded-full border border-black text-6xl px-[22px] pb-2 bg-red-500' onClick={() => changeCold()}>-</button>
        </div>
      </div>
    </main>
  )
}