import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='flex h-[10vh] justify-center'>
      <div className='flex h-full min-w-[75vw] items-center justify-between px-4'>
        <span>{ new Date().getFullYear() } &copy; All Rights Reserved</span>
        <p>
          <Link href='https://github.com/nashdev255'>nashdev255</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
