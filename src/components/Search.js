import React, {useState, useContext} from 'react';
import {ContextLang} from '../context';
import '../assets/css/Search.css';
import img from '../assets/images/MainPage.jpg';
import iconSearch from '../assets/images/icons/search.svg';

export default function Search() {
	let {page: data, lang} = useContext(ContextLang);
	data = data.Search;
	let [query, setValue] = useState("");
	let styles = {backgroundImage: `url(${img})`};
	const className = "Search" + (lang === "he" ? " Search_he" : "");
	return (
		<div className={className} style={styles}>
			<div className="Search__dark-layer"></div>
			<form className="Search__form">
				<input className="Search__input" type="text" name="input" value={query} placeholder={data.placeholder} onChange={e=>setValue(e.target.value)} />
				<button className="Search__button">
					<img src={iconSearch} alt="icon search"/>
				</button>
			</form>
		</div>
	);
}
