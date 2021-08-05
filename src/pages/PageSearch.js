import React, {useState, useEffect, useContext} from 'react';
import {ContextLang} from '../context';
import '../assets/css/PageSearch.css';
import Fieldset from '../components/Fieldset';
import MoreButton from '../components/MoreButton';
import SaveSearchButton from '../components/SaveSearchButton';
import ClearAllButton from '../components/ClearAllButton';
import PriceFilter from '../components/PriceFilter';
import MapBox from '../components/MapBox';
import LeafletMap from '../Libs/leaflet/LeafletMap';

export default function PageSearch() {
  let {data} = useContext(ContextLang);

  const [filters, setFilters] = useState({
    rooms: ["1", "3"],
    type: ["rent"],
    coords: {x: 0, y: 0},
    price: {min: data.rentPriceList[0].value, max: data.rentPriceList[1].value},
    options: []
  });
  const getPropTypeList = () => filters.type + "PriceList";

  const modals = {
      addFilters: useState(false),
      savedSearches: useState(false),

      get: function(type) {
        if (!(type in this)) {
          throw new Error(type + " not found in modals");
        }
        return this[type][0];
      },
      set: function(type, value) {
        if (!(type in this)) {
          throw new Error(type + " not found in modals");
        }
        this[type][1](value);
      },
      getAll: function() {
        const props = [];
        for (const prop in this) {
          if (prop === "get" || prop === "set" || prop === "getAll") {
            continue;
          }
          props.push(prop);
        }
        return props;
      }
  }
  
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
  const updateFilterOptions = (name, value) => {
    updateFilters('options', value);
  }
  const updateViewModal = (type) => {
    modals.getAll().forEach(item => {
      if (type === item) {
        modals.set(type, !modals.get(type));
      } else {
        modals.set(item, false);
      }
    });
  }


  useEffect(() => {
    // console.log(filters.rooms, filters.type, filters.price, filters.coords);
    console.log(filters.options);
  }, [filters]);

  
  
  return (
    <>
      <div className="wrapper-filters">
        <Fieldset name="rooms" values={filters.rooms} update={updateFilters} />
        <Fieldset type="radio" name="type" values={filters.type} update={updateFilters} />
        <PriceFilter prop="price" obj={filters.price} 
          handlerUpdate={updateFilters} list={data[getPropTypeList()]} />
        <MoreButton value={modals.get("addFilters")} textOpened="More Filters" textClosed="Close Filters" handler={() => updateViewModal("addFilters")}/>
        <MoreButton value={modals.get("savedSearches")} textOpened="Saved Searches" textClosed="Close Searches" handler={() => updateViewModal("savedSearches")}/>
        <SaveSearchButton />
        <ClearAllButton />
      </div>
      { modals.get('addFilters') ? (
        <section className="modal">
          <h3>Must have</h3>
          <div className="modal__table">
            <Fieldset values={filters.options} name="parking" update={updateFilterOptions} />
            <Fieldset values={filters.options} name="reception" update={updateFilterOptions} />
            <Fieldset values={filters.options} name="storage" update={updateFilterOptions} />
            <Fieldset values={filters.options} name="air_conditioning" update={updateFilterOptions} />
            <Fieldset values={filters.options} name="pool" update={updateFilterOptions} />
            <Fieldset values={filters.options} name="disabled_access" update={updateFilterOptions} />
            <Fieldset values={filters.options} name="balcony" update={updateFilterOptions} />
            <Fieldset values={filters.options} name="bomb_shelter" update={updateFilterOptions} />
            <Fieldset values={filters.options} name="elevator" update={updateFilterOptions} />
            <Fieldset values={filters.options} name="furniture" update={updateFilterOptions} />
            <Fieldset values={filters.options} name="gym" update={updateFilterOptions} />
            <Fieldset values={filters.options} name="meeting_room" update={updateFilterOptions} />
          </div>
        </section>
        ) : null
      }
      { modals.get('savedSearches') ? (
        <section className="modal">
          <h3>Saved Searches</h3>
          <div className="modal__list">
            <div>
            </div>
          </div>
        </section>
        ) : null
      }
      <div className="wrapper-main">
        <LeafletMap />
        <div>
          Ads
          <MapBox handlerDrag={(x, y)=> updateFilters('coords', {x, y})} /> 
        </div>
      </div>
    </>
  );
}

