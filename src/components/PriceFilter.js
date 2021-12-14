import React, {useContext} from 'react';
import {ContextLang} from '../context';
import '../assets/css/PriceFilter.css';
import DropDownList from '../components/DropDownList';

export default function PriceFilter({prop, obj, handlerUpdate, list, isReset}) {
	let {page: data, lang} = useContext(ContextLang);
	data = data.Fieldset.priceFilter;

	const minList = list.filter(el => el.value < obj.max);
	const maxList = list.filter(el => el.value > obj.min);

	let curClass = "PriceFilter";
	if (lang === "he") {
		curClass += " PriceFilter_he";
	}
	return (
		<fieldset className={curClass}>
			<legend className="PriceFilter__title">{data.title}</legend>
			<div className="PriceFilter__list">
				<DropDownList resetNumber={isReset} type={prop + ".min"} title={data.titleMin} defaultValue={obj.min} update={handlerUpdate} list={minList} />
				<DropDownList resetNumber={isReset} type={`${prop}.max`} title={data.titleMax} defaultValue={obj.max} update={handlerUpdate} list={maxList} />
			</div>
		</fieldset>
	)
}