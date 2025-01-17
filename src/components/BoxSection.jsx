import React, { useState } from 'react';
// import DetailedRubbish from './DetailedRubbish';
import { useNavigate } from 'react-router-dom';

function Box({ type, title, des }) {
  const [openSection, setOpenSection] = useState(null);
  const navigate = useNavigate();

  const handleToggle = () => {
    setOpenSection((prev) => (prev === type ? null : type));
  };
  const handleNavigate = () => {
    navigate(`/${type}`, { state: { type } });
    
  };

  return (
    <div className="cursor-pointer mt-4 text-[#161717]" onClick={handleToggle} >
      <h1
        className="text-xl font-semibold "
      >
        {title}
      </h1>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${openSection === type ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <p className="text-lg mt-2">{des}</p>

        <button
          onClick={handleNavigate}
        
          className="mt-2 px-2 py-1 bg-[#161717] text-white rounded hover:bg-[#000000]">
          More
        </button>
      </div>
    </div>
  );
}

export default Box;

