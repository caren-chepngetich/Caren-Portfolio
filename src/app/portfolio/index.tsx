"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='text-font-serif '>
      <header className='flex items-center justify-between p-4 bg-[#3b485b] text-2xl text-white'>
        <div className='flex items-center space-x-2'>
          <Image src='/images/DC logo.png' alt='Logo' width={40} height={40} className='w-12' />
        </div>

        {isMobile ? (
          <div
            className={`hamburger ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
          >
            <div className='space-y-2 cursor-pointer'>
              <span className='block w-8 h-0.5 bg-white'></span>
              <span className='block w-8 h-0.5 bg-white'></span>
              <span className='block w-8 h-0.5 bg-white'></span>
            </div>
          </div>
        ) : (
          <nav className='space-x-16 mr-40 font-serif'>
            <a href='#Home' className='hover:text-purple-300'>Home</a>
            <a href='#About' className='hover:text-purple-300'>About Me</a>
            <a href='#Projects' className='hover:text-purple-300'>Projects</a>
            <a href='#Contact' className='hover:text-purple-300'>Contact</a>
          </nav>
        )}
      </header>

      {isMobile && isMenuOpen && (
        <nav className='flex flex-col items-center space-y-4 mt-4'>
          <a href='#Home' className='hover:text-purple-300'>Home</a>
          <a href='#About' className='hover:text-purple-300'>About Me</a>
          <a href='#Projects' className='hover:text-purple-300'>Projects</a>
          <a href='#Contact' className='hover:text-purple-300'>Contact</a>
        </nav>
      )}

      <main className='bg-[#4d5c73] font-serif'>
       
      <section className="flex flex-col md:flex-row items-center justify-center p-8 md:p-20 gap-8 md:gap-[20%] bg-[#4d5c73]">
  <div className="text-center md:text-left">
    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
      Hey, I&apos;m Daisy Chepkirui.<br />
      <span className="font-semibold">Front-end Developer</span>
    </h1>
    <p className="text-lg text-gray-300 md:max-w-md mb-4">
      I specialize in creating visually appealing and user-friendly web applications using modern technologies.
      Let&apos;s work together to bring your ideas to life!
    </p>
    <div className="mt-4">
      <a href="#Contact" className="border border-white text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
        Get in Touch
      </a>
    </div>
  </div>
  <div className="mt-6 md:mt-0">
    <Image src="/images/laptop.png" alt="Laptop" width={400} height={400} className="w-full max-w-xs md:max-w-md" />
  </div>
</section>

<section className="flex flex-col md:flex-row justify-center items-center p-8 md:p-16 bg-gray-800 gap-8 md:gap-64">
  <div className="mb-8 md:mb-0">
    <Image src="/images/dasiies.jpg" alt="Daisy" width={400} height={400} className="w-60 h-60 sm:w-80 sm:h-80 rounded-full" />
  </div>
  <div className="text-center md:text-left max-w-lg">
    <p className="text-lg sm:text-xl text-white">
      As a frontend developer, I specialize in creating visually appealing and user-friendly web applications.
      With strong expertise in HTML, CSS, and JavaScript, I build responsive designs and scalable applications
      using frameworks like React and Next.js with Tailwind CSS.
    </p>
  </div>
</section>


        <section id='Projects' className='p-4 bg-gray-900 text-white'>
  <h1 className='text-3xl font-bold text-center'>Projects</h1>
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mx-auto'>
    
    <div className='text-center border border-gray-300 shadow-lg p-4 rounded-lg'> 
      <h2 className='text-xl font-semibold text-gray-900'>Movie App</h2>
      <Image src='/images/movies.jpeg' alt='Movie App'width={400} height={400} className='w-70 h-40 object-cover mx-auto' />
      <a href="https://movie-app-assignment-steel.vercel.app/" target="_blank" rel="noopener noreferrer" 
         className="inline-block mt-4 border border-white text-white px-4 py-2 rounded hover:bg-purple-700">View Details</a>
    </div>

    <div className='text-center border border-gray-300 shadow-lg p-4 rounded-lg'> 
      <h2 className='text-xl font-semibold text-gray-900'>Aquasense</h2>
      <Image src='/images/drainage.png' alt='Aquasense App'  width={400} height={400} className='w-60 h-40 object-cover mx-auto' />
      <a href="https://aquasense-project-nu.vercel.app/" target="_blank" rel="noopener noreferrer" 
         className="inline-block mt-4 border border-white text-white px-4 py-2 rounded hover:bg-purple-700">View Details</a>
    </div>

    <div className='text-center border border-gray-300 shadow-lg p-4 rounded-lg'> 
      <h2 className='text-xl font-semibold text-gray-900'>Restaurant Website</h2>
      <Image src='/images/resort.jpeg' alt='Restaurant'  width={400} height={400} className='w-60 h-40 object-cover mx-auto' />
      <a href="https://restaurant-website-ec5i.vercel.app/" target="_blank" rel="noopener noreferrer" 
         className="inline-block mt-4 border border-white text-white px-4 py-2 rounded hover:bg-purple-700">View Details</a>
    </div>

  </div>
</section>
<section className="bg-[#111827] min-h-screen p-8 flex justify-center items-center">
  <div className="w-full max-w-4xl">
   
    <h1 className="text-4xl font-bold text-center text-white mb-8">Contact Information</h1>

    <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
     
      <div className="w-full md:w-1/2 p-6 rounded-lg shadow-lg text-white bg-[#1f2937]">
        <div className="space-y-4">
          <div>
            <h2 className="font-semibold text-xl">Location</h2>
            <p className="text-lg">Nairobi, Kenya</p>
          </div>
          <div>
            <h2 className="font-semibold text-xl">Email</h2>
            <p className="text-lg">daisychepkiruih@gmail.com</p>
          </div>
          <div>
            <h2 className="font-semibold text-xl">Phone Number</h2>
            <p className="text-lg">+254748064111</p>
          </div>
        </div>
      </div>

    
      <form id="Contact" className="w-full md:w-1/2 p-6 bg-[#1f2937] shadow-lg rounded-lg">
        <div className="mb-3">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
            className="w-full px-4 py-2 border border-gray-600 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border border-gray-600 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-3">
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full px-4 py-2 border border-gray-600 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-3">
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            rows={4}
            required
            className="w-full px-4 py-2 border border-gray-600 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-60 border border-white text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</section>

     <footer id="Contact" className="p-4 bg-[#1f2937] text-center">
          <div className="flex justify-center space-x-6 ml-[80%]">
            <a href="https://github.com/Daisy-che" target="_blank" rel="noopener noreferrer">
              <Image src="/images/github.png" alt="GitHub" width={400} height={400} className="w-8" />
            </a>
            <a href="https://www.linkedin.com/in/daisy-chepkirui-8030a92b5/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/Linkedin.svg" alt="LinkedIn"  width={400} height={400} className="w-8" />
            </a>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default Portfolio;