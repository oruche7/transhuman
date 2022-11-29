import Image from 'next/image';
import { useRef } from 'react';
import useElementOnScreen from '../utils/useElementOnScreen';

const Card = ({ image, heading, text, status }) => {
  const ref = useRef();
  const isVisible = useElementOnScreen(ref);
  const steps = text.split(',').map((step) => {
    return (
      <li key={step} className='list-none mt-2'>
        <span className='text-green-400'>
          {status.toLowerCase() === 'coming soon' ? 'o' : <>&#10003;</>}
        </span>{' '}
        {step}
      </li>
    );
  });

  return (
    <>
      <div
        className={`${
          isVisible
            ? ' mobile:w-72 tablet:w-[60vmin] mobile:text-center tablet:text-center border-[#19213b] border-2 rounded-2xl w-fit pb-10 transition-all bg-gradient-to-b from-[#050812] via-[#19213b] to-[#0c1329] hover:scale-105 hover:border-[#1e2a50] slide-anim shadow-lg'
            : 'invis'
        }`}
      >
        <div className='py-14 relative flex items-center justify-center rounded-2xl'>
          <Image
            className='pt-8 opacity-60'
            src={image}
            alt=''
            width={100}
            height={100}
          />

          <span ref={ref}></span>
          <p
            className={
              status.toLowerCase() == 'coming soon'
                ? 'absolute top-8 right-7 p-1 px-2 bg-slate-500 rounded-2xl bg-opacity-90 text-black font-bold text-sm'
                : 'absolute top-8 right-7 py-1 px-2 rounded-[50%] bg-green-500 bg-opacity-90 text-black font-bold text-sm'
            }
          >
            {status}
          </p>
        </div>

        <div className='h-3/6 relative flex-col px-8 pt-7 pb-2 -mt-7 rounded-b-2xl'>
          <p className='mobile:text-2xl text-4xl text-white font-bold'>
            {heading}
          </p>
          <div className='text-sm mt-3 text-white'>{steps}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
