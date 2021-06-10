import React, {useContext} from 'react';
import LanguageDropDown from './LanguageDropDown';
import '../assets/css/Header.css';
import logo from '../assets/images/logo.svg';
import {ContextLang} from '../context';

export default function Header({changeLang}) {
	let {page: data, lang} = useContext(ContextLang);
	data = data.Header;
	const className = "Header" + (lang === "he" ? " Header_he" : "");
	return (
		<header className={className}>
			<div className="content">
				<nav className="Header__nav">
					<ul className="Header__list">
						{
							data.leftMenu.map((el, i) =>(
								<li key={i}>
									<a href={el.link}>{el.title}</a>
								</li>
							))
						}
					</ul>
				</nav>
				<img className="Header__logo" src={logo} alt="logo" />
				<div className="Header__right-menu">
					<ul className="Header__list">
						{
							data.rightMenu.map((el, i) =>(
								<li key={i}>
									<a href={el.link}>{el.title}</a>
								</li>
							))
						}
					</ul>
					<LanguageDropDown changeLang={changeLang} />
				</div>
			</div>
		</header>
	)
}