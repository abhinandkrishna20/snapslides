import React from 'react'
import {useState} from 'react'

const SlideEditor = ({ onAddSlide }) => {
    const [textType, setTextType] = useState('h1');
    const [textContent, setTextContent] = useState('');
  
    const handleAddSlide = () => {
      if (!textContent.trim()) return;
      onAddSlide({ type: textType, content: textContent });
      setTextContent(''); // clear after adding
    };
  return (
<div className="p-4 border-r">
      <h2 className="text-xl font-semibold mb-2">Slide Editor</h2>

      <label className="block mb-1">Select Text Type:</label>
      <select
        className="border w-full p-2 mb-3"
        value={textType}
        onChange={(e) => setTextType(e.target.value)}
      >
        <option value="h1">Heading 1</option>
        <option value="h2">Heading 2</option>
        <option value="h3">Heading 3</option>
        <option value="p">Paragraph</option>
      </select>

      <label className="block mb-1">Enter Text:</label>
      <textarea
        className="border w-full p-2 mb-3"
        rows="4"
        placeholder="Type your slide content..."
        value={textContent}
        onChange={(e) => setTextContent(e.target.value)}
      />

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleAddSlide}
      >
        Add Slide
      </button>
    </div>
  )
}

export default SlideEditor