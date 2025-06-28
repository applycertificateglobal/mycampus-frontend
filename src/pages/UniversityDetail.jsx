import React from 'react';
import { useParams } from 'react-router-dom';

const UniversityDetail = () => {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">University ID: {id}</h1>
      <p>This is the detail page for university {id}.</p>
      {/* You can add ambassador info, media, and booking here */}
    </div>
  );
};

export default UniversityDetail;
