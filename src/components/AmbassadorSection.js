import React from 'react';

const AmbassadorSection = () => {
  const ambassadors = [
    {
      name: 'Ayesha Ali',
      university: 'Heriot-Watt Dubai',
      stream: 'Business Management',
      instagram: 'https://instagram.com/ayesha.hw',
    },
    {
      name: 'Karan Mehta',
      university: 'Middlesex University Dubai',
      stream: 'Computer Science',
      instagram: 'https://instagram.com/karan.mdx',
    },
  ];

  return (
    <div className="my-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Student Ambassadors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ambassadors.map((amb, idx) => (
          <div key={idx} className="border p-6 rounded-md shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-1">{amb.name}</h3>
            <p className="text-sm text-gray-600 mb-1">{amb.university}</p>
            <p className="text-sm text-gray-500 mb-2">{amb.stream}</p>
            <a
              href={amb.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              View Instagram
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmbassadorSection
