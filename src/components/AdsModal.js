import React, {useContext, useState} from 'react';
import {ContextLang} from '../context';
import '../assets/css/AdsModal.css';
import logo from '../assets/images/logo.svg';
import MapBox from '../components/MapBox';
import AdsModal_param from './AdsModal_param.js';

export default function AdsModal({adData, closeModal}) {
	let {page: data, lang} = useContext(ContextLang);
	data = data.AdsModal;

	const [previewImage, setPreviewImage] = useState(-1);
	const [previewContact, setPreviewContact] = useState(false);

	let curClass = "AdsModal";
	if (lang === "he") {
		curClass += " AdsModal_he";
	}

	if (!adData) {
		return null;
	}

	const closeCard = () => () => {
		closeModal();
	};

	const contact = () => () => {
		setPreviewContact(!previewContact);
	};

	const save = () => () => {
		console.log("Save to Favorites");
	};

	const openPreview = (index) => () => {
		setPreviewImage(previewImage === index ? -1 : index);
	};

	const firstInfo = ["meters", "bathrooms", "rooms"];
	const mainInfo = ["year", "entry_date", "floor", "floors", "meters_balcony", "meters_garden"];
	const detailInfo = ["conditioner", "elevator", "pool", "parking", "new_construction", "disabled_people", "safe_room", "furniture", "renovated", "water_heater", "gym", "storage"]; 	

	return (
		<article className={curClass}>
			<button className="AdsModal__close" onClick={closeCard()}>X</button>
			<div className="AdsModal__content">
				<div className="AdsModal__slider">
					{
						adData.photos.map((photo, index) => {
							return (
								<img key={index} 
									className={previewImage !== index ? "AdsModal__slide" : "AdsModal__slide active"} 
									src={photo.src} alt={"preview " + index} onClick={openPreview(index)} />
							);
						})
					}
				</div>
				<div className="AdsModal__info">
					<div className="AdsModal__header-info">
						<img className="AdsModal__logo" src={logo} alt="site logo" />
						<button className="AdsModal__save" onClick={save()}>Save Ad</button>
					</div>
					<h3 className="AdsModal__title">{adData.title}</h3>
					<h4 className="AdsModal__price">{adData.price} $</h4>
					<div className="AdsModal__params">
						{
							firstInfo.map((option, index) => (
								<React.Fragment key={index}>
									<AdsModal_param
										lang={lang}
										options={data.params[option]}
										type={option}
										value={adData[option]}/>
								</React.Fragment>
							))
						}
					</div>
					<p className="AdsModal__address">{adData.address.text}</p>
					<button className="AdsModal__contact" onClick={contact()}>Contact Agent</button>
					{!previewContact ? null : (
						<div className="AdsModal__contacts">
							<p className="AdsModal__contacts-item">{adData.user.full_name}</p>
							<p className="AdsModal__contacts-item">{adData.user.phone}</p>
						</div>
					)}
					<ul className="AdsModal__list AdsModal__list--2col">
						{
							mainInfo.map((option, index) => (
								<li key={index}>
									<AdsModal_param
										lang={lang}
										options={data.params[option]}
										type={option}
										value={adData[option]}/>
								</li>
							))
						}
					</ul>
					<ul className="AdsModal__list">
						{
							detailInfo.map((option, index) => (
								<li key={index}>
									<AdsModal_param
										lang={lang}
										options={data.params[option]}
										type={option}
										value={adData[option]}/>
								</li>
							))
						}
					</ul>
					<p className="AdsModal__description">{adData.description}</p>
					<MapBox
						styles={{height: 300}}
						list={[adData]} 
						openModal={() => 0}
         				setData={() => 0} />
				</div>
			</div>
		</article>
	);
}

