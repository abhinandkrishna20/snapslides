import React from 'react';

const SlidePreview = ({ slide }) => {
  const renderText = () => {
    switch (slide.type) {
      case 'h1':
        return <h1 className="text-4xl font-bold">{slide.content}</h1>;
      case 'h2':
        return <h2 className="text-3xl font-semibold">{slide.content}</h2>;
      case 'h3':
        return <h3 className="text-2xl font-medium">{slide.content}</h3>;
      default:
        return <p className="text-base">{slide.content}</p>;
    }
  };

  return (
    <div
      className=" p-6 bg-cover bg-center text-white flex items-center justify-center text-center"
      style={{
        backgroundColor: '#fafafa',
        width: '397px',
        height: '562px', // A4 at 96dpi: 794x1123px
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        color: '#450045'
      }}
      id="slide-preview"
    >
      {slide ? renderText() : <p>No Slide Content</p>}
    </div>
  );
};

export default SlidePreview;
