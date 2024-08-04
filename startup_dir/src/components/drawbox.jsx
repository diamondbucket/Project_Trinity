import React from 'react';

const Drawbox = () => {
  const handleScroll = (e, target) => {
    e.preventDefault();
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='h-5/6 w-auto overflow-hidden flex justify-between space-x-16 flex-row p-2'>
      <a href="https://forms.gle/qRSqjsroQQ7Jxpwz8" target="_blank" rel="noopener noreferrer">
        <div className='font-bold p-2 bg-purple-500 rounded-full w-[5rem] text-center text-white'>join us</div>
      </a>
      <a>
        <div className='font-bold p-2 bg-purple-500 rounded-full w-[5rem] text-center text-white'>career</div>
      </a>
      <a href="#about" onClick={(e) => handleScroll(e, "#about")}>
        <div className='font-bold p-2 bg-purple-500 rounded-full w-[5rem] text-center text-white'>about</div>
      </a>
    </div>
  );
};

export default Drawbox;
