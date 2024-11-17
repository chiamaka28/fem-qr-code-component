import React from 'react';

const Card = () => {
  return (
    <article className='bg-white flex flex-col  items-center w-[90%] max-w-80 rounded-3xl p-4 shadow-card '>
      <div className='rounded-xl'>
        <img
          src='image-qr-code.png'
          className='overflow-hidden rounded-xl w-72'
          alt='Description of image'
        />
      </div>
      <div className='text-center '>
        <h2 className='text-slate-900 text-[22px] font-bold py-4 px-3'>
          Improve your front-end skills by building projects
        </h2>
        <h3 className='text-slate-500 text-[15px] px-4 pb-4'>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </h3>
      </div>
    </article>
  );
};

export default Card;
