import React from 'react';
import { AlertCircle, CheckCircle2, Sprout, ExternalLink } from 'lucide-react';

interface Disease {
  name: string;
  description: string;
  treatment: string[];
  confidence: number;
}

interface Recommendation {
  id: string;
  name: string;
  description: string;
  price: string;
  link: string;
  image: string;
}

interface ResultsSectionProps {
  disease: Disease;
  image: string;
  recommendations: Recommendation[];
}

const ResultsSection = ({ disease, image, recommendations }: ResultsSectionProps) => {
  return (
    <div className="max-w-4xl mx-auto mt-12">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {disease.confidence > 0.8 ? (
                <CheckCircle2 className="h-8 w-8 text-green-500" />
              ) : (
                <AlertCircle className="h-8 w-8 text-yellow-500" />
              )}
              <h2 className="ml-3 text-2xl font-bold text-gray-900">{disease.name}</h2>
            </div>
            <div className="flex items-center">
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: `${disease.confidence * 100}%` }}
                />
              </div>
              <span className="ml-3 text-sm text-gray-600">
                {Math.round(disease.confidence * 100)}% confidence
              </span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img 
                src={image} 
                alt="Analyzed plant"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Description</h3>
              <p className="mt-2 text-gray-600">{disease.description}</p>

              <h3 className="mt-6 text-lg font-medium text-gray-900">Treatment Steps</h3>
              <ul className="mt-2 space-y-2">
                {disease.treatment.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <Sprout className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span className="text-gray-600">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-900">Recommended Products</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendations.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden flex">
              <div className="w-1/3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-2/3 p-4">
                <h4 className="font-semibold text-gray-900">{product.name}</h4>
                <p className="mt-1 text-sm text-gray-600">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-green-600 font-bold">{product.price}</span>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-green-600 hover:text-green-700"
                  >
                    Buy Now
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;