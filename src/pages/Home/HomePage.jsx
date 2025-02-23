import React from "react";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/House.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="ml-12 text-white">
            <h1 className="text-5xl font-bold">Best Selling House</h1>
            <motion.button
              className="mt-4 px-6 py-3 bg-green-500 text-white rounded-lg text-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Rent Now
            </motion.button>
          </div>
        </div>
      </div>
{/* Best Property Section */}
<div className="py-12 text-center">
  <h2 className="text-4xl font-bold mb-8">Best Property in Nepal</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
    {[1, 2, 3, 4].map((item) => (
      <div
        key={item}
        className="relative group overflow-hidden rounded-lg shadow-lg"
      >
        <img
          src={`/${item}.png`}
          alt={`Property ${item}`}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
          <p className="text-white text-lg">A beautiful house in Nepal is up for sale! Located in a prime area, it features spacious rooms, modern amenities, and a peaceful environment. Perfect for families or investment, this property offers great value with easy access to schools, markets, and transportation. Don’t miss this opportunity—contact now for details! 🏡✨{item}</p>
        </div>
      </div>
    ))}
  </div>
</div>

      {/* Best Clients Section */}
<div className="py-12 text-center">
  <h2 className="text-4xl font-bold mb-8">Best Clients & Deals</h2>
  <div className="flex justify-center gap-6 px-6">
    {[1, 2, 3].map((client) => (
      <div
        key={client}
        className="relative group overflow-hidden rounded-lg shadow-lg"
      >
        <img
          src={`/p${client === 3 ? "" : client}.png`}
          alt={`Client ${client}`}
          className="w-64 h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
          <p className="text-white text-lg">THe best this ever {client}'s Feedback</p>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* Terminologies Section */}
      <div className="py-12 flex flex-col lg:flex-row items-center px-6">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="ppp.png"
            alt="Terminologies"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 lg:pl-12">
          <h2 className="text-4xl font-bold mb-4">Client Feedback</h2>
          <p className="text-lg text-gray-700">
            "We had an amazing experience finding our dream house through EstateAgency. Their team was extremely helpful and made the process smooth!" - Happy Client
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
