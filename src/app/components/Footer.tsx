import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='flex justify-center'>
      <div className='my-8 flex h-full min-w-[75vw] flex-col items-center justify-between space-y-4 px-4 md:flex-row md:space-y-0'>
        <span>{ new Date().getFullYear() } &copy; All Rights Reserved</span>
        <p>
          <Link href='https://github.com/nashdev255'>nashdev255</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
