const LevelCircle = ({ level, textStyle, backgroundStyle }: {
  level: number,
  textStyle: string,
  backgroundStyle: string
}) => {
  const translateFromTop = 100 - level;
  return (
    <div className='border-theme relative size-32 overflow-hidden rounded-full md:size-36'>
      <h3 className={`absolute left-1/2 top-1/2 z-10 translate-x-[-50%] translate-y-[-50%] text-3xl font-bold ${textStyle}`}>{level}%</h3>
      <div style={{ transform: `translateY(${translateFromTop}%)` }} className='size-full bg-gradient-to-bl from-red-700 via-orange-400 to-yellow-300' />
    </div>
  );
};

export default LevelCircle;
