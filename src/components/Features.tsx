import React from 'react';
import { Leaf, Upload, Pill, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      name: 'Instant Analysis',
      description: 'Upload a photo and get immediate results about plant health and potential diseases.',
      icon: Upload,
    },
    {
      name: 'Smart Detection',
      description: 'Our AI accurately identifies various plant diseases and provides detailed insights.',
      icon: Zap,
    },
    {
      name: 'Treatment Plans',
      description: 'Get personalized treatment recommendations and product suggestions.',
      icon: Pill,
    },
    {
      name: 'Expert Guidance',
      description: 'Access comprehensive care guides and prevention tips from agricultural experts.',
      icon: Leaf,
    },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 font-semibold">Features</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Everything you need for healthy plants
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Comprehensive plant care solution powered by advanced AI technology
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;