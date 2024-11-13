import React from 'react';
import SupplementCard from '../components/SupplementCard';

const supplements = [
  {
    title: 'Organic Neem Oil Spray',
    description: 'Natural fungicide and insecticide for plant disease control. Effective against aphids, mites, and fungal infections.',
    price: '$24.99',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1585870720832-ff80652e3f68?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    purchaseLink: 'https://www.amazon.com/Organic-Neem-Bliss-Pressed-Pesticide/dp/B07QWRM7CC'
  },
  {
    title: 'Bio-Fungicide Spray',
    description: 'Protective spray against powdery mildew, rust, and other common fungal diseases.',
    price: '$19.99',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    purchaseLink: 'https://www.amazon.com/Naturalyte-Bio-Fungicide-Concentrate-16oz/dp/B000UJVDXY'
  },
  {
    title: 'Plant Disease Control Kit',
    description: 'Complete kit for treating common plant diseases, includes copper fungicide and sulfur dust.',
    price: '$39.99',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1624928071021-7e97a2d6ec54?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    purchaseLink: 'https://www.amazon.com/Bonide-Chemical-811-Copper-Fungicide/dp/B00BSULSHA'
  },
  {
    title: 'Systemic Fungicide',
    description: 'Long-lasting protection against various fungal diseases, absorbed through roots.',
    price: '$29.99',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1624928071021-7e97a2d6ec54?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    purchaseLink: 'https://www.amazon.com/BIOADVANCED-701270B-Disease-Control-Fungicide/dp/B000BZYO4G'
  },
  {
    title: 'Organic Plant Food',
    description: 'Strengthens plant immune system and promotes healthy growth.',
    price: '$15.99',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1585870720832-ff80652e3f68?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    purchaseLink: 'https://www.amazon.com/Espoma-PT18-Plant-Tone-18/dp/B000UGQ4MW'
  },
  {
    title: 'Copper Fungicide',
    description: 'Effective against bacterial and fungal diseases in vegetables and fruits.',
    price: '$22.99',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    purchaseLink: 'https://www.amazon.com/Southern-Ag-Copper-Fungicide-16oz/dp/B006QISFS4'
  },
  {
    title: 'Root Rot Treatment',
    description: 'Specialized treatment for root diseases and soil-borne pathogens.',
    price: '$27.99',
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1624928071021-7e97a2d6ec54?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    purchaseLink: 'https://www.amazon.com/General-Hydroponics-SubCulture-Beneficial-Bacteria/dp/B00IGFH25M'
  },
  {
    title: 'Insecticidal Soap',
    description: 'Safe and effective control of soft-bodied insects that damage plants.',
    price: '$12.99',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1585870720832-ff80652e3f68?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    purchaseLink: 'https://www.amazon.com/Safer-Brand-5118-Insecticidal-Concentrate/dp/B000BX1HKI'
  },
  {
    title: 'Sulfur Dust',
    description: 'Controls powdery mildew and other fungal diseases on roses and vegetables.',
    price: '$18.99',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    purchaseLink: 'https://www.amazon.com/Bonide-142-Sulfur-Plant-Fungicide/dp/B000UJVDXY'
  },
  {
    title: 'Mycorrhizal Fungi',
    description: 'Beneficial fungi that improve plant health and disease resistance.',
    price: '$34.99',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1624928071021-7e97a2d6ec54?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    purchaseLink: 'https://www.amazon.com/Great-White-PRPSGW04-Premium-Mycorrhizae/dp/B00A8PG6RI'
  }
];

const Supplements = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Plant Care Products</h1>
          <p className="mt-4 text-xl text-gray-600">
            Discover our curated selection of plant care supplements and treatments
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {supplements.map((supplement, index) => (
            <SupplementCard key={index} {...supplement} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Supplements;