import React from 'react';

const SlideRenderer = ({ slide }) => {
  const renderText = () => {
    if (!slide) return null;

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
      className="bg-white text-black p-8 flex items-center justify-center text-center"
      style={{
        width: '794px',
        height: '1123px',
      }}
    >
      {renderText()}
    </div>
  );
};

export default SlideRenderer;
