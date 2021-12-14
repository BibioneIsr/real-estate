import '../assets/css/AdsModal_param.css';

export default function AdsModal_param({lang, options, type, value}) {
    if(!type) return null;
    if (!value) value = 0;
    let className = "AdsModal_param";

    if (lang === "he") {
		className += " AdsModal_param_he";
	}

    let text = options.text;
    let title = options[value];
    if ("unit" in options) {
        title = value + " " + options.unit;
        text += " " + title;
    } else if (!value) {
        className += " AdsModal_param--no";
    }

    const source = "/static/media/rent.f9342b21.jpg";
    
    return (
        <div className={className} title={title}>
            <img className="AdsModal_param__icon" src={source} alt={type} />
            <span className="AdsModal_param__text">{text}</span>
        </div>
    );
}