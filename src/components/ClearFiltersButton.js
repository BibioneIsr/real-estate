import React from 'react';
import '../assets/css/ClearFiltersButton.css';

export default function ClearFiltersButton({filters, updateFilters}) {
  
    const handleClick = () => () => {
        const copy = {};
        for (const key in filters) {
            copy[key] = filters[key];
        }
        copy.options = [];
        updateFilters(copy);
    }
    return (
      <button className="ClearFiltersButton" onClick={handleClick()}>Clear Additional Filters</button>
    );
  }