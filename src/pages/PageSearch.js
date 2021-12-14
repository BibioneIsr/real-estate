import React, {useState, useEffect, useContext} from 'react';
import {ContextLang} from '../context';
import '../assets/css/PageSearch.css';
import Fieldset from '../components/Fieldset';
import AdsCard from '../components/AdsCard';
import MoreButton from '../components/MoreButton';
import SaveSearchButton from '../components/SaveSearchButton';
import ClearAllButton from '../components/ClearAllButton';
import ClearFiltersButton from '../components/ClearFiltersButton';
import SearchButton from '../components/SearchButton';
import PriceFilter from '../components/PriceFilter';
import MapBox from '../components/MapBox';
import AdsModal from '../components/AdsModal';
import cardDB from '../components/utils/cardDB';
import {read} from '../components/utils/FireBase';

export default function PageSearch() {
  // read();
  // console.log(window);

  const adsList = cardDB(10);

  let {data, page} = useContext(ContextLang);
  const defaultFilters = {
    rooms: ["1", "3"],
    type: ["rent"],
    coords: {x: -87.661557, y: 41.893748},
    price: {min: data.rentPriceList[0].value, max: data.rentPriceList[7].value},
    options: []
  };
  const [filters, setFilters] = useState(defaultFilters);
  const getPropTypeList = () => filters.type + "PriceList";
  const [countReset, setCountReset] = useState(0);
  const [isOpenModalAd, setIsOpenModalAd] = useState(false);
  const [dataModalAd, setDataModalAd] = useState(null);

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
  const resetFilters = () => {
    setFilters(defaultFilters);
    setCountReset(countReset+1);
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
     console.log(filters.rooms, filters.type, filters.price, filters.coords);
  }, [filters]);

  console.log(page.AdsModal.params);
  const detailInfo = [];
  for(const key in page.AdsModal.params) {
    if("0" in page.AdsModal.params[key] && "1" in page.AdsModal.params[key]) {
      detailInfo.push(key);
    }
  }
  
  return (
    <>
      <div className="wrapper-filters">
        {/* <Fieldset name="rooms" values={filters.rooms} update={updateFilters} /> */}
        {/* <Fieldset type="radio" name="type" values={filters.type} update={updateFilters} /> */}
        <PriceFilter prop="price" obj={filters.price} isReset={countReset}
          handlerUpdate={updateFilters} list={data[getPropTypeList()]} />
        <MoreButton value={modals.get("addFilters")} textOpened="More Filters" textClosed="Close Filters" handler={() => updateViewModal("addFilters")}/>
        <MoreButton value={modals.get("savedSearches")} textOpened="Saved Searches" textClosed="Close Searches" handler={() => updateViewModal("savedSearches")}/>
        <SaveSearchButton />
        <ClearAllButton resetFilters={resetFilters}/>
        <SearchButton />
      </div>
      { modals.get('addFilters') ? (
        <section className="modal">
          <div className="modal__table">
            {detailInfo.map(
              name => <Fieldset values={filters.options} name={name} update={updateFilterOptions} />
            )}
          </div>
          <ClearFiltersButton filters={filters} updateFilters={setFilters} />
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
        <MapBox
          styles={{height: 512}}
          list={adsList}
          handlerDrag={(x, y)=> updateFilters('coords', {x, y})}
          openModal={() => setIsOpenModalAd(true)}
          setData={(modalData) => setDataModalAd(modalData)} />
        <div className="wrapper-main__ads">
          <AdsCard
            list={adsList}
            openModal={() => setIsOpenModalAd(true)}
            setData={(modalData) => setDataModalAd(modalData)} />
        </div>
      </div>
      {isOpenModalAd ? <AdsModal closeModal={() => setIsOpenModalAd(false)} adData={dataModalAd} /> : null}
    </>
  );
}

