const Headline = () => {
  return (
    <div className='my-12 flex min-h-[60vh] items-center justify-center'>
      <div className='flex flex-col md:flex-row md:space-x-12'>
        <div className='mx-auto my-6 size-[25vh] rounded-full bg-gradient-to-bl from-blue-500 via-green-600 to-yellow-300' />
        <div className='my-0 space-y-2 md:my-auto'>
          <h1 className='text-4xl font-bold'>Nash</h1>
          <p className='text-2xl'>Digital Content Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Headline;
