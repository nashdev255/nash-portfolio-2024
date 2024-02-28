const Timeline = () => {
  return (
    <div className='flex justify-center py-32'>
      <div className='max-w-[75vw]'>
        <div className='my-6 flex h-[10vh] items-center justify-center'>
          <h1 className='text-4xl font-bold'>Timeline</h1>
        </div>
        <ul className='mx-4 space-y-12'>
          <li>
            <span className='' />
            <div className='space-y-2'>
              <p className=''>Birth - 2006/12/20</p>
              <div className='min-h-24 rounded-lg bg-slate-600 bg-opacity-[0.3] shadow-lg'>
                <p className='p-6 text-lg font-bold'>
                  愛知県で生まれる。
                </p>
              </div>
            </div>
          </li>
          <li>
            <span className='' />
            <div className='space-y-2'>
              <p className=''>Catalyst - 2021/09/xx</p>
              <div className='min-h-24 rounded-lg bg-slate-600 bg-opacity-[0.3] shadow-lg'>
                <p className='p-6 text-lg font-bold'>
                  それまでYoutubeやTwitterを利用するために使っていたPCでものづくりを始める。<br />
                  主にBlenderやHTML&CSSで遊んでいた。
                </p>
              </div>
            </div>
          </li>
          <li>
            <span className='' />
            <div className='space-y-2'>
              <p className=''>Handmade - 2022/03/16</p>
              <div className='min-h-24 rounded-lg bg-slate-600 bg-opacity-[0.3] shadow-lg'>
                <p className='p-6 text-lg font-bold'>
                  初めての自作PC(C2D)を完成させる。<br />
                  モニターとマウスを除いた合計費用はなんと3000円。<br />
                  部品は名古屋大須に位置する佐古前装備さんから調達した。<br />
                </p>
              </div>
            </div>
          </li>
          <li>
            <span className='' />
            <div className='space-y-2'>
              <p className=''>Enroll - 2022/04/06</p>
              <div className='min-h-24 rounded-lg bg-slate-600 bg-opacity-[0.3] shadow-lg'>
                <p className='p-6 text-lg font-bold'>
                  鈴鹿工業高等専門学校に入学。<br />
                  電子情報工学科(I科)生として学校に通う。
                </p>
              </div>
            </div>
          </li>
          <li>
            <span className='' />
            <div className='space-y-2'>
              <p className=''>Enroll - 2022/04/06</p>
              <div className='min-h-24 rounded-lg bg-slate-600 bg-opacity-[0.3] shadow-lg'>
                <p className='p-6 text-lg font-bold'>
                  鈴鹿工業高等専門学校に入学。<br />
                  電子情報工学科(I科)生として学校に通う。
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
