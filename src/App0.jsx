
import './App.css'
import SlideEditor from './components/SlideEditor'
import SlideList from './components/SlideList'
import SlidePreview from './components/SlidePreview'
import SlideRenderer from './components/SlideRenderer'
import { createRoot } from 'react-dom/client';

import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';


function App() {
  const [slides, setSlides] = useState([]);

const [selectedSlideIndex, setSelectedSlideIndex] = useState(null);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(null);
  const previewRef = useRef(null);

  const handleAddSlide = (slideData) => {
    setSlides([...slides, slideData]);
    setCurrentSlideIndex(slides.length);
  };

  const handleFinish = async () => {
    for (let i = 0; i < slides.length; i++) {
      const container = document.createElement('div');
      document.body.appendChild(container);

      const slideElement = (
        <SlideRenderer slide={slides[i]} />
      );

      // Render the slide to the container using React
      const root = createRoot(container);
      root.render(slideElement);

      await new Promise((resolve) => setTimeout(resolve, 100)); // allow rendering

      const canvas = await html2canvas(container.firstChild, {
        scale: 2,
        useCORS: true,
      });

      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imgData;
      link.download = `snap-slide-${i + 1}.png`;
      link.click();

      document.body.removeChild(container); // cleanup
    }
  };

  return (
    <>
  <div>
   <h3 className='text-3xl font-bold underline ubundu'> Snapslides</h3>
   <p>For your Quick Instagram Posts</p>
  </div>
  <div className='flex w-100'>
  <SlideEditor onAddSlide={handleAddSlide} />
  <SlidePreview slide={slides[currentSlideIndex]} />
  <SlideList
  slides={slides}
  selectedSlideIndex={selectedSlideIndex}
  setSelectedSlideIndex={setSelectedSlideIndex}
/>
  </div>
  <div >
   
    <button onClick={handleFinish}
          className="bg-green-600 text-white px-4 py-2 m-4 rounded">Finish & Download</button>
  </div>
 

    </>
  )
}

export default App
