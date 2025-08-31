import React from 'react';

const CVViewer = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
      <img 
        src="/cv.png" 
        alt="CV" 
        style={{ maxWidth: '90%', height: 'auto', border: '1px solid #ccc', borderRadius: '8px' }}
      />
    </div>
  );
};

export default CVViewer;
