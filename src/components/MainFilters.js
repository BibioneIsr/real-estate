import React, {useContext, useState} from 'react';
import {ContextLang} from '../context';
import '../assets/css/MainFilters.css';

export default function MainFilters() {
	let {page: data, lang} = useContext(ContextLang);
	data = data.MainFilters;
	let [radio, setRadio] = useState(-1);
	const handlerKeyPress = (e, i) => {
		if(e.key === "Enter" || e.key === " ") {
			setRadio(i);
			e.nativeEvent.preventDefault();
		}
	};
	const className = "MainFilters" + (lang === "he" ? " MainFilters_he" : "");
	return (
		<div className={className} >
			<h2 className="MainFilters__title">{data.title}</h2>
			<div className="MainFilters__content">
				{data.links.map((arr, i) => {
					const id = "filter-" + i;
					return (
						<div key={i}>
							<Input id={id} i={i} radio={radio} />
							<label htmlFor={id} className="MainFilters__button" tabIndex={i} onKeyPress={e => handlerKeyPress(e, i)}>{data.categories[i]}</label>
							<ul className="MainFilters__list">
								{arr.map((el, j) => (
									<li className="MainFilters__item" key={j}>
										<a className="MainFilters__link" href={el.link}>{el.title}</a>
									</li>
								))}
							</ul>
						</div>
					)
				})}
			</div>
		</div>
	);
}
function Input({i, id, radio}) {
	if(radio === +i) {
		return <input type="radio" name="main-filters" id={id} className="MainFilters__checkbox" checked />
	}
	return <input type="radio" name="main-filters" id={id} className="MainFilters__checkbox" />
}
