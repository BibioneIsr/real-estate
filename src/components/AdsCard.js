import React, {useContext} from 'react';
import {ContextLang} from '../context';
import '../assets/css/AdsCard.css';

export default function AdsCard({openModal, setData, list}) {
	let {page: data, lang} = useContext(ContextLang);
	// data = data.AdsCard[name];

	let curClass = "AdsCard";
	if (lang === "he") {
		curClass += " AdsCard_he";
	}

	const openCard = (cardId) => {
		openModal();
		setData(list.filter((ad) => ad.id === cardId)[0]);
	};

	return (
		<article className={curClass}>
			<h3 className="AdsCard__title">Ads</h3>
			<div className="AdsCard__container">
				{
					list.map((card) => {
						const styles = {
							backgroundImage: `url(${card.photos[0].src})`
						};
						const photoPreview = card.photos.filter((photo) => photo.is_preview)[0];
						if (photoPreview) {
							styles.backgroundImage = `url(${photoPreview.src})`;
						}
						return (
							<div className="AdsCard__item" key={card.id} onClick = {() => openCard(card.id)}>
								<div className="AdsCard__item__preview" style={styles}></div>
								<div className="AdsCard__item__main">
									<h4 className="AdsCard__item__price">{card.price} $</h4>
									<p className="AdsCard__item__params">
										<span>{card.meters} sqmr</span>
										<span>{card.bathrooms} ba</span>
										<span>{card.rooms} bds</span>
									</p>
									<p className="AdsCard__item__address">{card.address.text}</p>
								</div>
							</div>
						)
					})
				}
				
			</div>
		</article>
	);
}

