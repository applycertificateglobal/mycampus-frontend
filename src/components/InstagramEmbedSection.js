import React from 'react';

const InstagramEmbedSection = () => (
  <section className="my-6">
    <h2 className="text-xl font-semibold mb-4">Campus Feeds</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {/* These are example Instagram embeds or media placeholders */}
      <div className="bg-gray-200 h-32">IG Post 1</div>
      <div className="bg-gray-200 h-32">IG Post 2</div>
      <div className="bg-gray-200 h-32">IG Post 3</div>
      <div className="bg-gray-200 h-32">IG Post 4</div>
    </div>
  </section>
);

export default InstagramEmbedSection;
