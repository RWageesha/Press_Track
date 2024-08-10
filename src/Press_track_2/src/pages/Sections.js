import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Sections.css'; 

import printingImg from '../images/printing.png';
import bindingImg from '../images/binding.png';
import laminatingImg from '../images/laminating.png';
import cuttingImg from '../images/cutting.png';
import packingImg from '../images/packing.png';
import foldingImg from '../images/folding.png';

const sections = [
  { id: 1, name: 'Printing', image: printingImg, path: '/sections/printing' },
  { id: 2, name: 'Binding', image: bindingImg, path: '/sections/binding' },
  { id: 3, name: 'Laminating', image: laminatingImg, path: '/sections/laminating' },
  { id: 4, name: 'Cutting', image: cuttingImg, path: '/sections/cutting' },
  { id: 5, name: 'Packing', image: packingImg, path: '/sections/packing' },
  { id: 6, name: 'Folding', image: foldingImg, path: '/sections/folding' },
];

const Sections = () => {
  const navigate = useNavigate();

  const handleSectionClick = (path) => {
    navigate(path);
  };

  return (
    <div className="sections-container">
      <div className="sections-header">
        <h2>SECTIONS</h2>
      </div>
      <div className="sections-grid">
        {sections.map((section) => (
          <div 
            key={section.id} 
            className="section-button" 
            onClick={() => handleSectionClick(section.path)}
          >
            <img src={section.image} alt={section.name} />
            <p>{section.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sections;
