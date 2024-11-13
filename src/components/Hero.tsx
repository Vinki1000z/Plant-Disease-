import React from 'react';
import { Upload, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeroProps {
  onAnalyzeClick: () => void;
}

const Hero = ({ onAnalyzeClick }: HeroProps) => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-gray-900 sm:text-7xl">
          Plant Disease Detection{' '}
          <span className="relative whitespace-nowrap text-green-600">
            <span className="relative">Made Simple</span>
          </span>
        </h1>
        
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Upload a photo of your plant and let our AI instantly identify diseases and recommend treatments. 
          Get expert-level plant care guidance in seconds.
        </p>
        
        <div className="mt-10 flex justify-center gap-x-6">
          <button
            onClick={onAnalyzeClick}
            className="group inline-flex items-center justify-center rounded-full py-3 px-6 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-green-600 text-white hover:bg-green-700 active:bg-green-800 focus-visible:outline-green-600"
          >
            <Upload className="mr-2 h-4 w-4" />
            Analyze Now
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
          
          <button
            onClick={() => navigate('/supplements')}
            className="group inline-flex ring-1 ring-gray-200 items-center justify-center rounded-full py-3 px-6 text-sm font-semibold focus:outline-none hover:ring-gray-300 active:ring-gray-400 text-gray-700 hover:text-gray-900"
          >
            Learn More
          </button>
        </div>
        
        <div className="mt-36 lg:mt-44">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-gradient-to-b from-green-50 to-white px-6 text-sm text-gray-500">
                Trusted by agricultural experts worldwide
              </span>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center gap-x-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
              <div className="rounded-xl shadow-lg overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1611843467160-25afb8df1074?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3" 
                  alt="AI-powered plant analysis" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl shadow-lg overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1624928071021-7e97a2d6ec54?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3" 
                  alt="Plant disease detection" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;