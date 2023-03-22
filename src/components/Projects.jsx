import React from 'react';
import movieApp from '../assets/projects/movieApp.jpg';
import landingPage from '../assets/projects/landingPage.jpg';
import fitnessApp from '../assets/projects/fitnessApp.jpg';
import videoApp from '../assets/projects/videoApp.jpg';
import chatApp from '../assets/projects/chatApp.jpg';
import portfolio from '../assets/projects/portfolio.jpg';

const Projects = () => {
  const projectItems = [
    {
      id: 1,
      src: movieApp,
      demoUrl: 'https://cinesearch-app.netlify.app',
      codeUrl: 'https://github.com/sevakgrigorian/movie-app',
    },
    {
      id: 2,
      src: landingPage,
      demoUrl: 'https://gericht-restaurant1.netlify.app',
      codeUrl: 'https://github.com/sevakgrigorian/restaurant',
    },
    {
      id: 3,
      src: fitnessApp,
      demoUrl: 'https://fitness-club-app1.netlify.app',
      codeUrl: 'https://github.com/sevakgrigorian/fitness-app',
    },
    {
      id: 4,
      src: videoApp,
      demoUrl: 'https://playview-app.netlify.app',
      codeUrl: 'https://github.com/sevakgrigorian/video-app',
    },
    {
      id: 5,
      src: chatApp,
      demoUrl: 'https://chatty-app1.netlify.app',
      codeUrl: 'https://github.com/sevakgrigorian/chat-app',
    },
    {
      id: 6,
      src: portfolio,
      demoUrl: 'https://sevakgrigorian.netlify.app',
      codeUrl: 'https://github.com/sevakgrigorian/portfolio',
    },
  ];

  return (
    <div
      name='projects'
      className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline'>Projects</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {projectItems.map(({ id, src, demoUrl, codeUrl, style }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img
                src={src}
                alt=''
                className='rounded-md duration-200 hover:scale-105'
              />
              <div className='flex items-center justify-center'>
                <a
                  style={{ textAlign: 'center' }}
                  href={demoUrl}
                  target='_blank'
                  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                  Demo
                </a>
                <a
                  style={{ textAlign: 'center' }}
                  href={codeUrl}
                  target='_blank'
                  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
