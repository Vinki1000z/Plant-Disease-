import React, { useState } from 'react';
import ImageUpload from '../components/ImageUpload';
import ResultsSection from '../components/ResultsSection';

interface AnalysisResult {
  disease: {
    name: string;
    description: string;
    treatment: string[];
    confidence: number;
  };
  image: string;
  recommendations: {
    id: string;
    name: string;
    description: string;
    price: string;
    link: string;
    image: string;
  }[];
}

const AIEngine = () => {
  const [results, setResults] = useState<AnalysisResult | null>(null);

  // Dummy data for 15 entries
  const diseases = [
    {
      name: "Powdery Mildew",
      description: "A fungal disease that appears as a white powdery coating on leaves. It can affect plant growth and yield if left untreated.",
      treatment: [
        "Remove and destroy infected plant parts",
        "Improve air circulation around plants",
        "Apply fungicide treatment",
        "Water at the base of plants to avoid wet leaves"
      ],
      confidence: 0.92
    },
    {
      name: "Leaf Spot",
      description: "A common plant disease that causes small, dark spots on the leaves.",
      treatment: [
        "Prune infected leaves",
        "Avoid overhead watering",
        "Use fungicides as recommended"
      ],
      confidence: 0.85
    },
    {
      name: "Root Rot",
      description: "A condition where plant roots are damaged due to overwatering or poor drainage.",
      treatment: [
        "Improve drainage in the soil",
        "Remove infected roots",
        "Reduce watering frequency"
      ],
      confidence: 0.90
    },
    {
      name: "Blight",
      description: "A bacterial or fungal infection that causes plant tissue to die, usually leading to wilting or browning.",
      treatment: [
        "Remove and destroy affected plant parts",
        "Improve plant spacing for better airflow",
        "Use fungicide or bactericide"
      ],
      confidence: 0.87
    },
    {
      name: "Rust",
      description: "A fungal disease that causes orange or reddish pustules on leaves and stems.",
      treatment: [
        "Prune infected parts",
        "Increase plant spacing for airflow",
        "Use rust-resistant plant varieties"
      ],
      confidence: 0.88
    },
    {
      name: "Downy Mildew",
      description: "A fungal disease that causes yellow or grayish spots on leaves, often with a downy growth.",
      treatment: [
        "Remove infected leaves",
        "Increase sunlight exposure",
        "Apply fungicides"
      ],
      confidence: 0.91
    },
    {
      name: "Nutrient Deficiency",
      description: "Occurs when plants lack essential nutrients, leading to poor growth and discoloration.",
      treatment: [
        "Use balanced fertilizers",
        "Improve soil quality",
        "Test and adjust pH levels"
      ],
      confidence: 0.80
    },
    {
      name: "Wilt",
      description: "A condition where plants lose turgor pressure, often due to a lack of water or root problems.",
      treatment: [
        "Water plants deeply",
        "Check for root damage",
        "Provide shade during hot weather"
      ],
      confidence: 0.86
    },
    {
      name: "Canker",
      description: "A fungal or bacterial infection that causes sunken, discolored lesions on plant stems.",
      treatment: [
        "Prune infected stems",
        "Disinfect tools between cuts",
        "Apply fungicide or bactericide"
      ],
      confidence: 0.89
    },
    {
      name: "Mosaic Virus",
      description: "A viral disease that causes mottled or distorted leaves and stunted plant growth.",
      treatment: [
        "Remove and destroy infected plants",
        "Use resistant varieties",
        "Control aphid populations"
      ],
      confidence: 0.83
    },
    {
      name: "Spider Mites",
      description: "Tiny pests that suck sap from plant leaves, causing a speckled appearance and eventual leaf drop.",
      treatment: [
        "Use insecticidal soap",
        "Introduce beneficial insects like ladybugs",
        "Increase humidity around plants"
      ],
      confidence: 0.78
    },
    {
      name: "Scale Insects",
      description: "Insects that attach themselves to plant stems or leaves and suck sap, weakening the plant.",
      treatment: [
        "Remove visible insects by hand",
        "Apply horticultural oils",
        "Use insecticidal soap"
      ],
      confidence: 0.81
    },
    {
      name: "Mealybugs",
      description: "Tiny, cotton-like pests that feed on plant sap and cause stunted growth.",
      treatment: [
        "Apply rubbing alcohol on affected areas",
        "Prune heavily infested areas",
        "Use insecticidal soap"
      ],
      confidence: 0.84
    },
    {
      name: "Aphids",
      description: "Small insects that suck sap from plants, causing yellowing and stunted growth.",
      treatment: [
        "Spray with water to remove aphids",
        "Use insecticidal soap",
        "Introduce natural predators like ladybugs"
      ],
      confidence: 0.76
    },
    {
      name: "Fusarium Wilt",
      description: "A soil-borne fungus that affects plant roots and causes wilting.",
      treatment: [
        "Remove infected plants",
        "Avoid planting susceptible crops",
        "Use soil fumigants if necessary"
      ],
      confidence: 0.79
    }
  ];

  // Dummy recommendations
  const recommendations = [
    {
      id: "1",
      name: "Organic Neem Oil Spray",
      description: "Natural fungicide effective against powdery mildew",
      price: "$24.99",
      link: "https://www.amazon.com/Organic-Neem-Bliss-Pressed-Pesticide/dp/B07QWRM7CC",
      image: "https://images.unsplash.com/photo-1585870720832-ff80652e3f68?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
    },
    {
      id: "2",
      name: "Sulfur-Based Fungicide",
      description: "Specialized treatment for powdery mildew control",
      price: "$19.99",
      link: "https://www.amazon.com/Bonide-142-Sulfur-Plant-Fungicide/dp/B000UJVDXY",
      image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
    },
    // Add more recommendations as needed
  ];

  const getRandomResult = () => {
    const randomDisease = diseases[Math.floor(Math.random() * diseases.length)];
    return {
      disease: randomDisease,
      image: "https://images.unsplash.com/photo-1603803003495-014db45ec0f9?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8cGxhbnR8ZW58MHx8fHwxNjg5MzYyMTM5&ixlib=rb-4.0.3&q=80&w=1080",
      recommendations: recommendations.sort(() => Math.random() - 0.5).slice(0, 2) // Randomly shuffle and take 2 recommendations
    };
  };

  const handleImageAnalysis = (imageUrl: string) => {
    setResults(getRandomResult()); // Set random results
  };

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Plant Disease Detection</h1>
          <p className="mt-4 text-xl text-gray-600">
            Upload a photo of your plant to identify diseases and get treatment recommendations
          </p>
        </div>

        <div className="mt-12">
          <ImageUpload onAnalysis={handleImageAnalysis} />
        </div>

        {results && <ResultsSection {...results} />}
      </div>
    </div>
  );
};

export default AIEngine;
