import React, { useState, useEffect } from 'react';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [sortOrder, setSortOrder] = useState('newest');

  useEffect(() => {
    // Sample JSON data for properties
    const propertyData = [
      { id: 1, name: 'Modern Villa', location: 'Kathmandu', price: '$500,000', image: 'f1.png', date: '2024-08-10', phone: '+977-9800000001' },
      { id: 2, name: 'Cozy Apartment', location: 'Pokhara', price: '$200,000', image: 'f2.png', date: '2024-07-20', phone: '+977-9800000002' },
      { id: 3, name: 'Luxury Bungalow', location: 'Lalitpur', price: '$750,000', image: 'f3.png', date: '2024-06-15', phone: '+977-9800000003' },
      { id: 4, name: 'Family House', location: 'Bhaktapur', price: '$350,000', image: 'f4.png', date: '2024-05-30', phone: '+977-9800000004' },
      { id: 5, name: 'Elegant Mansion', location: 'Biratnagar', price: '$1,200,000', image: 'f5.png', date: '2024-08-05', phone: '+977-9800000005' },
      { id: 6, name: 'Country Cottage', location: 'Dharan', price: '$180,000', image: 'f6.png', date: '2024-07-10', phone: '+977-9800000006' },
      { id: 7, name: 'Urban Loft', location: 'Butwal', price: '$300,000', image: 'f8.png', date: '2024-06-25', phone: '+977-9800000007' },
      { id: 8, name: 'Beachfront Villa', location: 'Chitwan', price: '$900,000', image: 'f7.png', date: '2024-06-05', phone: '+977-9800000008' },
      { id: 9, name: 'Modern Condo', location: 'Janakpur', price: '$250,000', image: 'f9.png	', date: '2024-05-15', phone: '+977-9800000009' },
      { id: 10, name: 'Suburban Home', location: 'Hetauda', price: '$400,000', image: 'f0.png', date: '2024-04-30', phone: '+977-9800000010' }
    ];

    setProperties(propertyData);
  }, []);

  const handleSortChange = (order) => {
    const sortedProperties = [...properties].sort((a, b) => {
      return order === 'newest'
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date);
    });
    setProperties(sortedProperties);
    setSortOrder(order);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-8">Property Listings</h1>
        <div className="flex justify-end mb-6">
          <select
            value={sortOrder}
            onChange={(e) => handleSortChange(e.target.value)}
            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="newest">Newest to Oldest</option>
            <option value="oldest">Oldest to Newest</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="relative group">
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white rounded-lg">
                <h3 className="text-xl font-bold">{property.name}</h3>
                <p>{property.location}</p>
                <p>{property.price}</p>
                <p>{property.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
