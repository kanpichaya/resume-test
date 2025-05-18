import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Web from '../assets/web.png'


const LandingPage = () => {
  const navigate = useNavigate();

  const handleCTA = () => {
    navigate('/dashboard');
  };
  return (
    <div className="w-full min-h-full bg-white">
      <div className="container mx-auto px-4 py-6">
      

        <div className='flex flex-col md:flex-row items-center'>
            <div className='w-full md:w1/2 pr-4 mb-8 md:mb-0'>
                <h1 className='text-5xl font-bold mb-2 leading-tight '>
                    Design Your
                </h1>
                <h1 className='text-5xl font-bold mb-6 leading-tight'>
                    <span className='text-transparent bg-clip-text bg-[radial-gradient(circle,_#ffb6c1_0%,_#add8e6_30%,_#d8bfd8_60%,_#0000ff_100%)] bg-[length:200%_200%] animate-text-shine'>
                        Profile Painlessly
                    </span>
                </h1>
                <p className='text-lg text-gray-700 '>
                    Build a distinctive career document rapidly with our advanced and accessible 
                    resume creator.
                </p>
                <p className='text-lg text-gray-700 mb-8'>
                    efwefwf
                </p>
                <button
                    className='bg-purple-700 text-sm font-semibold text-white px-8 py-3 rounded-lg hover:bg-purple-400 transition-colors cursor-pointer'
                    onClick={handleCTA}
                >
                    Get Started
                </button>
            </div>
           
            <div>
                <img
                    src={Web}
                    alt='Web Image'
                    className='w-full rounded-lg'
                />
            </div>
        </div>
        <section className='mt-5'> 
            <h2 className='text-2xl font-bold text-center mb-12'>
                Capabilities That Showcase Your Excellence
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                    <h3 className="text-lg font-semibold mb-3">Easy Editing</h3>
                    <p className="text-gray-600">
                        Modify your resume elements with real-time display and simple drag-and-drop capability.
                    </p>
                    </div>
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                    <h3 className="text-lg font-semibold mb-3">
                        Stunning Designs
                    </h3>
                    <p className="text-gray-600">
                        Select from contemporary, sleek layouts that are simple to personalize.
                    </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                        <h3 className="text-lg font-semibold mb-3">One-Click Export</h3>
                        <p className="text-gray-600">
                            Save your resume immediately as a premium-quality PDF with just a single click.
                    </p>
                </div>
            </div>
        </section>
        



      </div>
    </div>
  );
};

export default LandingPage;