import React from 'react';

const InstagramEmbed = () => {
  return (
    <div className="my-10 px-4">
      <h2 className="text-2xl font-bold mb-4 text-center">CampusVibe on Instagram</h2>
      <div className="flex justify-center">
        <iframe
          title="Instagram Feed"
          src="https://widgets.sociablekit.com/instagram-feed/iframe/26194387"
          width="100%"
          height="600"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    </div>
  );
};

export default InstagramEmbed;
