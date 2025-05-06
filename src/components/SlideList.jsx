import React from 'react';

const SlideList = ({ slides, selectedSlideIndex, setSelectedSlideIndex }) => {
  return (
    <div className="p-6 mt-6 w-full max-w-sm mx-auto">
      <h2 className="text-lg font-semibold mb-2 text-center">📄 Your Slides</h2>
      {slides.length === 0 ? (
        <p className="text-center text-gray-500">No slides added yet</p>
      ) : (
        <ul className="space-y-2">
          {slides.map((slide, index) => (
            <li
              key={index}
              className={`p-2 rounded cursor-pointer border ${
                selectedSlideIndex === index
                  ? 'bg-blue-100 border-blue-500 font-semibold'
                  : 'bg-white border-gray-300'
              } hover:bg-gray-100 transition`}
              onClick={() => setSelectedSlideIndex(index)}
            >
              {slide.text.length > 50
                ? slide.text.substring(0, 50) + '...'
                : slide.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SlideList;
