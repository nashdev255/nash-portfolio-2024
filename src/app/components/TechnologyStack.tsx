'use client';

import Image from 'next/image';

const TechnologyStack = () => {
  
  return (
    <div className='mb-36'>
      <h2 className='mb-12 text-2xl font-bold'>Technology Stack</h2>
      <ul className='grid grid-cols-2 justify-center gap-6 md:grid-cols-3'>
        <li className='mx-auto flex size-40 items-center justify-center lg:size-72'>
          <Image src='React-icon.svg' alt='logo of React' height={128} width={128} />
        </li>
        <li className='mx-auto flex size-40 items-center justify-center lg:size-72'>
          <Image src='Nextjs-icon.svg' alt='logo of Next.js' height={128} width={128} />
        </li>
        <li className='mx-auto flex size-40 items-center justify-center lg:size-72'>
          <Image src='Tailwind-icon.svg' alt='logo of Tailwind' height={128} width={128} />
        </li>
        <li className='mx-auto flex size-40 items-center justify-center lg:size-72'>
          <Image src='supabase-logo-icon.svg' alt='logo of Supabase' height={128} width={128} />
        </li>
        <li className='mx-auto flex size-40 items-center justify-center lg:size-72'>
          <Image src='ts-logo-512.svg' alt='logo of TypeScript' height={128} width={128} />
        </li>
        <li className='mx-auto flex size-40 items-center justify-center lg:size-72'>
          <Image src='ISO_C++_Logo.svg' alt='logo of C++' height={128} width={128} />
        </li>
      </ul>
    </div>
  );
};

export default TechnologyStack;
