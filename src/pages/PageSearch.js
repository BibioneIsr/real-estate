import React, {useState, useEffect} from 'react';
import Fieldset from '../components/Fieldset';

export default function PageSearch() {
  const [filters, setFilters] = useState({
    rooms: ["1", "3"],
    type: ["rent"]
  });
  const updateFilters = (type, arr) => {
    const copy = Object.assign({}, filters);
    copy[type] = arr;
    setFilters(copy);
  }


  useEffect(() => {
    console.log(filters.rooms, filters.type);
  }, [filters]);

  return (
    <>
      <Fieldset name="rooms" values={filters.rooms} update={updateFilters} />
      <Fieldset type="radio" name="type" values={filters.type} update={updateFilters} />
    </>
  );
}

