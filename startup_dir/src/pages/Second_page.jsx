import React from 'react';

const Second_page = () => {
  return (
    <div className='bg-black h-screen overflow-hidden relative'>
      <div className='absolute inset-0 bg-isometric bg-black bg-opacity-20 bg-contain'></div>
      <div className='relative z-10'>
        <h1 className='text-4xl font-bold top-10 px-16 text-purple-600'>At trinity</h1>
        <div className='container px-16 flex py-6'>
          <p className="text-white text-base leading-6">
            We’re dedicated to we are at the forefront of technological innovation,
            dedicated to empowering businesses with advanced AI, machine learning, and web development solutions.
            Our goal is to help companies transform their operations, enhance customer experiences, 
            and stay ahead in a competitive market.
          </p>
        </div>
      </div>
    </div> 
  );
}

export default Second_page;

