const Headline = () => {
  return (
    <div className='my-12 flex justify-center'>
      <div className='flex flex-col md:flex-row md:space-x-8'>
        <div className='my-6 size-[28vh] rounded-full bg-gradient-to-bl from-blue-500 via-green-600 to-yellow-300 md:my-0' />
        <div className='my-auto'>
          <h1 className='text-3xl font-bold'>Nash</h1>
          <p className='text-xl'>Digital Content Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Headline;
