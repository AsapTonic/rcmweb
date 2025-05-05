"use client";
import { useState } from "react";
import { Check, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return <div className="container mt-24 mx-auto px-4"></div>;
}

      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Plans and Pricing</h1>
            <p className="text-gray-500 max-w-2xl mx-auto">
              The best software to develop perfect content and advertising strategies
              to increase leads and sales.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Demo Version */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <h3 className="text-blue-500 font-medium mb-2">Demo Version</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-800">Free</span>
                <p className="text-gray-400 mt-1">forever</p>
              </div>
              <p className="text-gray-600 mb-8">
                Demo gives you full access to all features for 7 days
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="mr-3 bg-blue-100 rounded-full p-1">
                    <Check size={16} className="text-blue-500" />
                  </div>
                  <span className="text-gray-500">Marketing plan</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 bg-blue-100 rounded-full p-1">
                    <Check size={16} className="text-blue-500" />
                  </div>
                  <span className="text-gray-500">Seo reporting tool</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 bg-blue-100 rounded-full p-1">
                    <Check size={16} className="text-blue-500" />
                  </div>
                  <span className="text-gray-500">Keywords explorer</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 bg-blue-100 rounded-full p-1">
                    <Check size={16} className="text-blue-500" />
                  </div>
                  <span className="text-gray-500">Competitive analysis</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 bg-blue-100 rounded-full p-1">
                    <Check size={16} className="text-blue-500" />
                  </div>
                  <span className="text-gray-500">Five projects - <span className="text-blue-500 font-medium">¡New!</span></span>
                </div>
              </div>
              
              <button className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                Demo version
              </button>
            </div>
  
            {/* Standard Version */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <h3 className="text-blue-400 font-medium mb-2">Standard Version</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-800">$9</span>
                <p className="text-gray-400 mt-1">per month</p>
              </div>
              <p className="text-gray-600 mb-8">
                Outrank your competitors with this amazing software
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="mr-3 bg-blue-100 rounded-full p-1">
                    <Check size={16} className="text-blue-500" />
                  </div>
                  <span className="text-gray-500">Marketing plan</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 bg-blue-100 rounded-full p-1">
                    <Check size={16} className="text-blue-500" />
                  </div>
                  <span className="text-gray-500">Seo reporting tool</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 bg-blue-100 rounded-full p-1">
                    <Check size={16} className="text-blue-500" />
                  </div>
                  <span className="text-gray-500">Keywords explorer</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 bg-blue-100 rounded-full p-1">
                    <Check size={16} className="text-blue-500" />
                  </div>
                  <span className="text-gray-500">Competitive analysis</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 bg-blue-100 rounded-full p-1">
                    <Check size={16} className="text-blue-500" />
                  </div>
                  <span className="text-gray-500">Unlimited projects - <span className="text-blue-500 font-medium">¡New!</span></span>
                </div>
              </div>
              
              <button className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                Buy now
              </button>
            </div>
  
            {/* Agency Version */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <h3 className="text-blue-400 font-medium mb-2">Agency Version</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-800">$29</span>
                <p className="text-gray-400 mt-1">per month</p>
              </div>
              <p className="text-gray-600 mb-8">
                For agencies and businesses with extensive web presence
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="mr-3 bg-blue-100 rounded-full p-1">
                    <Check size={16} className="text-blue-500" />
                  </div>
                  <span className="text-gray-500">Marketing plan</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 bg-blue-100 rounded-full p-1">
                    <Check size={16} className="text-blue-500" />
                  </div>
                  <span className="text-gray-500">Seo reporting tool</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 bg-blue-100 rounded-full p-1">
                    <Check size={16} className="text-blue-500" />
                  </div>
                  <span className="text-gray-500">Keywords explorer</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 bg-blue-100 rounded-full p-1">
                    <Check size={16} className="text-blue-500" />
                  </div>
                  <span className="text-gray-500">Competitive analysis</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 bg-blue-100 rounded-full p-1">
                    <Check size={16} className="text-blue-500" />
                  </div>
                  <span className="text-gray-500">Unlimited projects - <span className="text-blue-500 font-medium">¡New!</span></span>
                </div>
              </div>
              
              <button className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }