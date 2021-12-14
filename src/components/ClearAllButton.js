import React from 'react';
import '../assets/css/ClearAllButton.css';

export default function ClearAllButton({resetFilters}) {
  
    const handleClick = () => () => {
        resetFilters();
    }
    return (
      <button className="ClearAllButton" onClick={handleClick()}>Clear All</button>
    );
  }