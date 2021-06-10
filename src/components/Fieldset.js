import React, {useContext} from 'react';
import {ContextLang} from '../context';
import '../assets/css/Fieldset.css';

export default function Fieldset({type="checkbox", name="default", values=[], update}) {
	let {page: data, lang} = useContext(ContextLang);
	data = data.Fieldset[name];

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
	const isChecked = val => values.includes(val);

	let curClass = "Fieldset";
	if (lang === "he") {
		curClass += " Fieldset_he";
	}

	return (
		<fieldset className={curClass}>
			<legend className="Fieldset__title">{data.title}</legend>
			<ul className="Fieldset__list">
				{
					data.list.map((el, i) => {
						return (
							<li key={i}><label>
								<input className="Fieldset__input" type={type} name={name} checked={isChecked(el.value)} onChange={e => changeHandler(el.value, e.target.checked)} />
								<span className="Fieldset__span">{el.title}</span>
							</label></li>
						);
					})
				}
			</ul>
		</fieldset>
	);
}

