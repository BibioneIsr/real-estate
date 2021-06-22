import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/Footer.css';
import logo from '../assets/images/logo.svg';
import logoFacebook from '../assets/images/icons/facebook.svg';
import logoApple from '../assets/images/icons/apple.svg';
import logoGooglePlay from '../assets/images/icons/google-play.svg';
import {ContextLang} from '../context';

export default function Footer({changeLang}) {
	let {page: data} = useContext(ContextLang);
	data = data.Footer;
	const list = [
		{link: "https://google.com", icon: logoFacebook},
		{link: "https://google.com", icon: logoFacebook},
		{link: "https://google.com", icon: logoFacebook},
		{link: "https://google.com", icon: logoFacebook}
	];
	const appList = [
		{link: "https://google.com", icon: logoApple, title: "app store"},
		{link: "https://google.com", icon: logoGooglePlay, title: "google play"}
	];
	return (
		<footer className="Footer">
			<div className="content">
				<div className="Footer__row">
					<div>
						<img className="Footer__logo" src={logo} alt="logo" />
						<a className="Footer__mail" href="mailto:bibione.it.il@gmail.com">bibione.it.il@gmail.com</a>
					</div>
					<div className="Footer__social">
						<h4>{data.follow}</h4>
						<ul>
							{list.map((el, i) => (
								<li key={i}>
									<Link to={el.link} target="_blank">
										<img src={el.icon} alt="social icon" />
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="Footer__center">
					<div className="Footer__apps">
						<h4>{data.apps.title}</h4>
						<ul>
							{appList.map((el, i) => (
								<li key={i}>
									<Link to={el.link} target="_blank">
										<div className="Footer__icon">
											<img src={el.icon} alt="app icon"/>
											<p>{data.apps.text}<br /><span className="Footer__icon__title">{el.title}</span></p>
										</div>
									</Link>
								</li>
							))}
						</ul>
					</div>
					<Link className="Footer__policy" to="/privacy-policy">{data.policy}</Link>
				</div>
			</div>
		</footer>
	)
}