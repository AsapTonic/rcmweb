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
            Get Started
          </button>
        </div>
        <div className="w-full max-w-sm">
          <div className="bg-white rounded-[36px] shadow-xl h-[500px] w-[260px] mx-auto"></div>
        </div>
      </main>

      <section className="py-24 px-6 sm:px-20 text-center sm:text-left">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Harnessing technology for a brighter future in billboard marketing
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto sm:mx-0">
          Outdoor advertising is evolving, and technology is at the forefront of
          this transformation. Digital billboards, real-time updates, and
          data-driven placements are reshaping how brands connect with people in
          the real world.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-2xl shadow-md text-left">
            <div className="text-2xl font-bold mb-2">⬤</div>
            <p className="text-xs text-gray-500 mb-1"></p>
            <h3 className="text-lg font-semibold mb-2">
              It’s not just about being seen — it’s about being seen by the
              right people, at the right time, with the right message.
            </h3>
            <p className="text-sm text-gray-600"></p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md text-left">
            <div className="text-2xl font-bold mb-2">⬛</div>
            <p className="text-xs text-gray-500 mb-1"></p>
            <h3 className="text-lg font-semibold mb-2">
              Get a grip on your reach.
            </h3>
            <p className="text-sm text-gray-600">
              When you want your message to land hard — and stay there —
              billboards deliver.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md text-left">
            <div className="text-2xl font-bold mb-2">❤</div>
            <p className="text-xs text-gray-500 mb-1"></p>
            <h3 className="text-lg font-semibold mb-2">
              Overcome ad fatigue, find your audience
            </h3>
            <h3 className="text-lg font-semibold mb-2">
              Billboards cut through the noise of digital overload, delivering
              bold, unskippable messages that captivate real-world attention
              where it matters most.
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}
