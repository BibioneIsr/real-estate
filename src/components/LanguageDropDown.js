import React, {useContext} from 'react';
import {ContextLang} from '../context';
import flagRu from '../assets/images/flags/ru.webp';
import flagEn from '../assets/images/flags/en.webp';
import flagHe from '../assets/images/flags/he.webp';
import '../assets/css/LanguageDropDown.css';

const flags = {
	ru: flagRu,
	he: flagHe,
	en: flagEn
};

export default function LanguageDropDown({changeLang=(() => {})}) {
	const {lang: defaultLang, langs: list} = useContext(ContextLang);

	let activeLang;
	let listFlags = Object.keys(list).map((lang, i) => {
		let curClass = "LanguageDropDown__item";
		if (lang === defaultLang) {
			curClass += " LanguageDropDown__item_active";

			activeLang = <div className="LanguageDropDown__current">
				<img className="LanguageDropDown__flag" src={flags[lang]} alt={lang} />
				<span className="LanguageDropDown__lang">{list[lang]}</span>
			</div>;
		}

		return <li className={curClass} key={i} onClick={() => changeLang(lang)}>
			<img className="LanguageDropDown__flag" src={flags[lang]} alt={lang} />
			<span className="LanguageDropDown__lang">{list[lang]}</span>
		</li>;
	});
	let curClass = "LanguageDropDown";
	if (defaultLang === "he") {
		curClass += " LanguageDropDown_he";
	}

	return (
		<div className={curClass}>
			{activeLang}
			<div className="LanguageDropDown__mark"></div>
			<ul className="LanguageDropDown__list">
				{listFlags}
			</ul>
	</div>
	);
}

