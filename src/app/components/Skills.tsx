import TechnologyStack from '@/app/components/TechnologyStack';
import Status from '@/app/components/Status';

const Skills = () => {
  return (
    <div className='my-12 flex justify-center'>
      <div className='max-w-[80vw] md:max-w-[75vw]'>
        <div className='my-6 flex h-[12vh] items-center justify-center'>
          <h1 className='text-4xl font-bold'>Skills</h1>
        </div>
        <TechnologyStack />
        <Status />
      </div>
    </div>
  );
};

export default Skills;
