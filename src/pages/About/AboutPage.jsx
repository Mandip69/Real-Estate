import React from 'react';

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <div 
        className="relative bg-cover bg-center py-24"
        style={{ backgroundImage: "url('/aa.png')" }}
      >
        <div className="bg-black bg-opacity-50 py-16">
          <h1 className="text-5xl font-bold text-center text-white">About Us</h1>
          <p className="text-lg text-white text-center mt-4 max-w-2xl mx-auto">
            We are a leading real estate agency committed to helping you find your dream home.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Mission, Vision, Values Section */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 rounded-lg text-white"
          style={{ backgroundImage: "url('/ss.png')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          {[
            { title: "Our Mission", desc: "To provide top-quality real estate services and ensure customer satisfaction with every deal." },
            { title: "Our Vision", desc: "To be the most trusted and innovative real estate agency in Nepal." },
            { title: "Our Values", desc: "Integrity, transparency, and commitment to excellence are our core values." }
          ].map((item, index) => (
            <div key={index} className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Meet Our Team Section with Background */}
        <div 
          className="mt-16 py-12 text-white"
          style={{ backgroundImage: "url('/cool.png')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "John Doe", role: "CEO & Founder", img: "/p1.png" },
              { name: "Jane Smith", role: "Head of Sales", img: "/p2.png" },
              { name: "Michael Brown", role: "Marketing Lead", img: "/pp.png" }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img src={member.img} alt={member.name} className="w-32 h-32 mx-auto rounded-full border-4 border-white" />
                <h3 className="text-xl font-bold mt-4">{member.name}</h3>
                <p className="text-green-300">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div 
          className="mt-16 text-center py-12 text-black"
          style={{ backgroundImage: "url('/city-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Our expertise, dedication, and vast network of properties make us the top choice for anyone looking to buy, sell, or rent a home in Nepal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
