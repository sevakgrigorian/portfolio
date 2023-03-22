import React from 'react';

const About = () => {
  return (
    <div
      name='about'
      className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline'>About</p>
        </div>
        <p className='text-xl mt-20 pb-4'>
          Hello! My name is Sevak and I am a web developer with a passion for
          creating beautiful, functional websites. I have been working on
          building my skills in various technologies such as HTML, CSS,
          JavaScript, and React.
        </p>
        <br />
        <p className='text-xl pb-4'>
          Through my education and personal projects, I have gained experience
          in creating websites that are responsive, user-friendly, and visually
          appealing. I am proficient in front-end development technologies such
          as HTML, CSS, JavaScript, and React, and have experience working with
          back-end technologies like Node.js.
        </p>
        <br />
        <p className='text-xl pb-4'>
          I am a quick learner and am always eager to expand my knowledge and
          skills. I believe that good communication and collaboration are key to
          building successful projects and I am always looking for ways to
          improve my teamwork and problem-solving abilities.
        </p>
        <br />
        <p className='text-xl'>
          I am excited to join a team where I can apply my skills and contribute
          to the development of amazing websites. Thank you for considering me
          as a potential candidate!
        </p>
      </div>
    </div>
  );
};

export default About;
