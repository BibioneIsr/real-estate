import React, {useState, useEffect, useContext} from 'react';
import {ContextLang} from '../context';
import '../assets/css/PageNewAd.css';
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

export default function PageNewAd() {
  // read();
  // console.log(window);
  const adsListOld = [
    {
      id: 1, 
      author: {
        photo: "author1.png",
        name: "Ivanov Ivan",
        phone: "123456789"
      }, 
      main: {
        title: "first ad", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique blandit augue id placerat. Aliquam vel metus a leo placerat tincidunt. Integer ultrices, ante tincidunt sodales tempor, tortor tortor ullamcorper elit, non tincidunt ipsum eros sed mauris. Curabitur aliquet mollis nisl vitae dictum. Sed ex velit, viverra at tortor scelerisque, tincidunt hendrerit velit. Etiam congue mi velit, vitae interdum est vehicula ut. Nam sagittis ac elit sed viverra.<br>Curabitur tempus finibus varius. Ut ornare mi eget odio imperdiet, a ultricies sem volutpat. Praesent sodales ipsum magna, vitae pharetra felis varius sed. Aliquam volutpat sollicitudin ligula et rutrum. Sed placerat lorem dapibus lectus aliquet sodales. In aliquet odio sit amet mauris scelerisque, ac aliquet neque dictum. Aliquam et rhoncus nisi, in auctor arcu. Aenean posuere suscipit risus quis fringilla. In pharetra nisl magna, in mattis lorem pretium ac. Praesent ornare tortor in lorem sollicitudin, eget blandit leo faucibus. Etiam orci erat, elementum in diam quis, tempor mattis odio. Fusce tristique feugiat arcu et elementum. Integer a lectus quis turpis congue ultricies nec at ex. Nulla facilisi.<br>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent consequat, lacus ut cursus interdum, ex mi aliquet mauris, id hendrerit justo sem ut massa. Nulla pretium metus at nisi ultrices, ac mollis augue blandit. In blandit purus non arcu congue sagittis. Integer laoreet nulla vel orci tristique rutrum. Donec vehicula venenatis mauris at convallis. Maecenas euismod aliquam turpis, cursus porta nulla luctus et. Phasellus sodales dictum metus, suscipit commodo ante hendrerit sed. Nulla efficitur elit id mauris sodales, sit amet finibus libero posuere. Phasellus eros dui, accumsan nec nisl eu, auctor blandit leo. Quisque non eros placerat, iaculis lorem feugiat, ornare augue. Maecenas efficitur consectetur pulvinar.<br>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum sodales lacinia ante quis convallis. Vestibulum sollicitudin est orci. Nullam consectetur, dui sed pellentesque auctor, magna lorem laoreet nibh, quis commodo leo nisi nec mauris. Maecenas in turpis et magna finibus ultrices. Nulla sed massa et neque scelerisque tempus. Vestibulum tristique diam est, ac iaculis est scelerisque nec. Morbi ornare tellus et purus efficitur tempor. Maecenas sem orci, luctus eu varius vitae, malesuada ac tellus. Quisque tempor bibendum neque quis ultrices.    <br>Pellentesque varius viverra porta. Proin viverra nisi et massa feugiat, quis venenatis lorem vulputate. Etiam sit amet placerat libero, vel mollis ex. Vestibulum malesuada in velit vel bibendum. Vivamus ornare vehicula enim, vel tincidunt augue ultrices a. Nunc mollis aliquam nibh eget consequat. Curabitur eu odio consectetur, aliquam tortor sit amet, tincidunt massa. Maecenas porttitor iaculis est. Aliquam dapibus urna in mollis commodo. Duis vestibulum elementum est vel tempus. Proin lectus diam, faucibus ultrices urna quis, euismod fermentum massa. Nulla vitae leo et sem vestibulum vehicula ac quis turpis.", 
        date: "2021-08-31 15:24:05",
        price: 220345,
        address: "Alon Ave. 2155, Chicago"
      },
      photos: [
        "photo1.png", "photo2.jpg", "photo3.gif", "photo4.png", "photo5.png"
      ],
      coords: {
        lat: 50, lng: 80
      },
      building: {
        year: 1986, 
        type: "apartment",
        floors: 5, 
        rooms: 3, 
        meters: 100, 
        meters_balcony: 0, 
        bathrooms: 2,
        central_conditioner: 0, 
        rooms_conditioner: 3, 
        elevator: true, 
        pool: false, 
        parking: true, 
        sea: false, 
        new_construction: false, 
        disabled_people: true, 
        safe_room: false, 
        furniture: true
      }
    }
  ];
  const adsList = cardDB(10);

  let {data} = useContext(ContextLang);
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

  
  
  return (
    <>
      <div className="wrapper-filters">
        123
        <Fieldset name="rooms" values={filters.rooms} update={updateFilters} />
        <Fieldset type="radio" name="type" values={filters.type} update={updateFilters} />
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

