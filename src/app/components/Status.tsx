import LevelCircle from '@/app/components/LevelCircle';

const Status = () => {
  return (
    <div>
      <h2 className='mb-12 text-2xl font-bold'>Status (Self Rated) </h2>
      <ul className='grid grid-cols-2 gap-12 py-6 md:grid-cols-3 lg:gap-40'>
        <li className='flex flex-col space-y-4'>
          <div className='flex justify-center'>
            <LevelCircle level={80} textStyle='' backgroundStyle='' />
          </div>
          <div className='flex flex-col items-center space-y-4'>
            <h3 className='text-lg font-bold'>言語能力</h3>
            <p>
              英語をはじめとして、中国語、韓国語を扱う能力に長けている。
            </p>
          </div>
        </li>
        <li className='flex flex-col space-y-4'>
          <div className='flex justify-center'>
            <LevelCircle level={75} textStyle='' backgroundStyle='' />
          </div>
          <div className='flex flex-col items-center space-y-4'>
            <h3 className='text-lg font-bold'>野心</h3>
            <p>
              大きな目標とそれに伴う優れた実行力を持つ。
            </p>
          </div>
        </li>
        <li className='flex flex-col space-y-4'>
          <div className='flex justify-center'>
            <LevelCircle level={40} textStyle='' backgroundStyle='' />
          </div>
          <div className='flex flex-col items-center space-y-4'>
            <h3 className='text-lg font-bold'>コミュニケーション能力</h3>
            <p>
              挨拶や礼儀といった基本的なコミュニケーション能力をとることができ、
              かつ積極的に人に話しかけることができるが、言語化能力が低いため会話は苦手。
            </p>
          </div>
        </li>
        <li className='flex flex-col space-y-4'>
          <div className='flex justify-center'>
            <LevelCircle level={15} textStyle='' backgroundStyle='' />
          </div>
          <div className='flex flex-col items-center space-y-4'>
            <h3 className='text-lg font-bold'>計画性</h3>
            <p>
              計画には忠実な反面、計画自体を立てることはできない。技術的負債を抱える可能性がある。
            </p>
          </div>
        </li>
        <li className='flex flex-col space-y-4'>
          <div className='flex justify-center'>
            <LevelCircle level={60} textStyle='' backgroundStyle='' />
          </div>
          <div className='flex flex-col items-center space-y-4'>
            <h3 className='text-lg font-bold'>経済に対する関心</h3>
            <p>
              世界的な経済動向や資産に興味を持っている。
            </p>
          </div>
        </li>
        <li className='flex flex-col space-y-4'>
          <div className='flex justify-center'>
            <LevelCircle level={10} textStyle='' backgroundStyle='' />
          </div>
          <div className='flex flex-col items-center space-y-4'>
            <h3 className='text-lg font-bold'>政治に対する関心</h3>
            <p>
              歴史的な政治について面白いとは思うものの、現代社会の政治に対する関心は薄い。
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Status;
