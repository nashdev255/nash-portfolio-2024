const Works = () => {
  return (
    <div className='my-12 flex justify-center'>
      <div className='max-w-[80vw] md:max-w-[75vw]'>
        <div className='my-6 flex h-[12vh] items-center justify-center'>
          <h1 className='text-4xl font-bold'>Works</h1>
        </div>
        <ul className='grid w-full grid-cols-1 gap-24 lg:grid-cols-2 lg:gap-32'>
          <li className='relative flex items-center justify-center shadow-xl duration-75 hover:scale-105'>
            <div className='h-[45vh] w-[65vh] rounded-lg bg-slate-600'></div>
            <h2 className='text-theme-dark absolute bottom-6 left-6 text-3xl font-bold'>Study Sync Hub</h2>
          </li>
          <li className='relative flex items-center justify-center shadow-xl duration-75 hover:scale-105'>
            <div className='h-[45vh] w-[65vh] rounded-lg bg-slate-600'></div>
            <h2 className='text-theme-dark absolute bottom-6 left-6 text-3xl font-bold'>イトキヨクエスト</h2>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Works;
