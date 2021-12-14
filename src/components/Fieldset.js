import React, {useContext} from 'react';
import {ContextLang} from '../context';
import '../assets/css/Fieldset.css';

export default function Fieldset({type="checkbox", name="default", values=[], update, options=[]}) {
	let {page: data, lang} = useContext(ContextLang);
	data = data.AdsModal.params[name];

	if(!data) {
		return null;
	}
	console.log(data);
	console.log(values);

	if(type !== "radio") type = "checkbox";

	const changeHandler = (val, isChecked) => {
		if (type === "radio") {
			values = [val];
		} else {
			if (isChecked) values.push(val);
			else values = values.filter(el => el !== val);
		}
		update(name, values);
	}
	const bigFirstLetter = text => text[0].toUpperCase() + text.substring(1);
	const isChecked = val => values.includes(val);
	const isCheckedText = val => values.includes(val) ? 1 : 0;

	let curClass = "Fieldset";
	if (lang === "he") {
		curClass += " Fieldset_he";
	}

	return (
		<fieldset className={curClass}>
			<legend className="Fieldset__title">{bigFirstLetter(data.text)}</legend>
			<ul className="Fieldset__list">
				{
					options.length > 0 ?  (
						options.map((el, i) => {
							return (
								<li key={i}><label>
									<input className="Fieldset__input" type={type} name={name} checked={isChecked(el.value)} onChange={e => changeHandler(el.value, e.target.checked)} />
									<span className="Fieldset__span">{el.title}</span>
								</label></li>
							);
						})
					) : (
						<li key="0"><label>
							<input className="Fieldset__input" type="checkbox" name={name} checked={isChecked(name)} onChange={e => changeHandler(name, e.target.checked)} />
							<span className="Fieldset__span">{data[1]}</span>
						</label></li>
					)
				}
			</ul>
		</fieldset>
	);
}

