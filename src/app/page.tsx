"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="pt-24 min-h-screen bg-[#f7f9fb] text-gray-800">
      <main className="flex flex-col-reverse sm:flex-row items-center justify-between px-6 sm:px-20 gap-12">
        <div className="max-w-xl text-center sm:text-left">
          <p className="text-sm text-blue-600 font-semibold mb-2">
            Main Content
          </p>
          <h1 className="text-3xl sm:text-5xl font-semibold leading-tight">
            Mission Statement <br />
            <span className="font-bold">Future of Marketing</span>
          </h1>
          <p className="text-gray-500 mt-4">
            Boost your digital marketing campaigns
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Learn more
          </button>
        </div>
        <div className="w-full max-w-sm">
          <div className="bg-white rounded-[36px] shadow-xl h-[500px] w-[260px] mx-auto"></div>
        </div>
      </main>
    </div>
  );
}
