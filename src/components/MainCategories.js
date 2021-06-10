import React, {useContext} from 'react';
import {ContextLang} from '../context';
import '../assets/css/MainCategories.css';
import imgBuy from '../assets/images/buy.jpg';
import imgRent from '../assets/images/rent.jpg';
import imgSell from '../assets/images/sell.jpg';

const images = {
	buy: imgBuy,
	rent: imgRent,
	sell: imgSell
}

export default function MainCategories() {
	let {page: data, lang} = useContext(ContextLang);
	data = data.MainCategories;
	const className = "MainCategories" + (lang === "he" ? " MainCategories_he" : "");
	return (
		<section className={className}>
			<h2 className="MainCategories__title">{data.title}</h2>
			<div className="MainCategories__cards">{
				data.cards.map((el, i) => (
					<a className="MainCategories__card" href={el.link} key={i}>
						<img src={images[el.img]} alt={"icon " + el.img} />
						<h3>{el.title}</h3>
						<p>{el.text}</p>
						<div>{el.button}</div>
					</a>
				))
			}</div>
		</section>
	);
}
