import React, {useState, useEffect, useContext} from 'react';
import {ContextLang} from '../context';
import Fieldset from '../components/Fieldset';
import DropDownList from '../components/DropDownList';

export default function PageSearch() {
  let {data} = useContext(ContextLang);

  const [filters, setFilters] = useState({
    rooms: ["1", "3"],
    type: ["rent"],
    price: {min: 0, max: 0}
  });
  const updateFilters = (type, value) => {
    const copy = Object.assign({}, filters);
    let prop = copy;
    type = type.split(".");
    for (let i = 0; i < type.length - 1; i++) {
      prop = prop[type[i]];
    }
    prop[type[type.length - 1]] = value;
    setFilters(copy);
  }


  useEffect(() => {
    console.log(filters.rooms, filters.type, filters.price);
  }, [filters]);

  return (
    <>
      <Fieldset name="rooms" values={filters.rooms} update={updateFilters} />
      <Fieldset type="radio" name="type" values={filters.type} update={updateFilters} />
      <DropDownList type="price.min" title="From:" defaultValue={filters.price.min} update={updateFilters} list={data.sellPriceList} />
    </>
  );
}

