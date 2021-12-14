const he = {
	Header: {
		leftMenu: [
			{link: "/buy", title: "נכסים למכירה"},
			{link: "/rent", title: "נכסים להשכרה"},
			{link: "/sell", title: "לפרסם מודעה"}
		],
		rightMenu: [
			{link: "/buy-ads", title: "הוסף מודעות"},
			{link: "/sign-up", title: "הירשם"},
			{link: "/sign-in", title: "התחברות"}
		]
	},
	Search: {
		placeholder: "התחל להקליד את הכתובת"
	},
	MainCategories: {
		title: "העסקאות הרלוונטיות ביותר",
		cards: [
			{link: "/buy", img: "buy", title: "נכסים למכירה", text: "אצלנו תוכלו למצוא בקלות את ההצעות העדכניות ביותר לרכישת נדל\"ן", button: "נכסים למכירה"},
			{link: "/rent", img: "rent", title: "נכסים להשכרה", text: "באמצעות השירות שלנו תוכלו למצוא נכס להשכרה מתאים בזמן הקצר ביותר", button: "נכסים להשכרה"},
			{link: "/sell", img: "sell", title: "לפרסם מודעה", text: "המשתמשים בפלטפורמה שלנו מוכרים נדל\"ן מהר יותר", button: "לפרסם מודעה"}
		]
	},
	MainFilters: {
		title: "המלצות",
		categories: ["לפרסם מודעה", "נכסים להשכרה", "נכסים למכירה"],
		links: [
			[{link: "/buy/northern-district", title: "מחוז הצפון"}, {link: "/buy/haifa-district", title: "מחוז חיפה"}, {link: "/buy/tel-aviv-district", title: "מחוז תל אביב"}, {link: "/buy/central-district", title: "מחוז המרכז"}, {link: "/buy/jerusalem-district", title: "מחוז ירושלים"}, {link: "/buy/southern-district", title: "מחוז הדרום"}, {link: "/buy/judea-and-samaria-district", title: "מחוז יהודה ושומרון"}, {link: "/buy/jerusalem", title: "ירושלים"}, {link: "/buy/tel-aviv", title: "תל אביב"}, {link: "/buy/herzliya", title: "הרצליה"}, {link: "/buy/haifa", title: "חיפה"}, {link: "/buy/rishon-lezion", title: "ראשון לציון"}, {link: "/buy/netanya", title: "נתניה"}, {link: "/buy/bat-yam", title: "בת ים"}, {link: "/buy/holon", title: "חולון"}, {link: "/buy/petah-tikva", title: "פתח תקווה"}, {link: "/buy/kfar-saba", title: "כפר סבא"}, {link: "/buy/ashdod", title: "אשדוד"}, {link: "/buy/ashkelon", title: "אשקלון"}, {link: "/buy/eilat", title: "אילת"}],
			[{link: "/rent/northern-district", title: "מחוז הצפון"}, {link: "/rent/haifa-district", title: "מחוז חיפה"}, {link: "/rent/tel-aviv-district", title: "מחוז תל אביב"}, {link: "/rent/central-district", title: "מחוז המרכז"}, {link: "/rent/jerusalem-district", title: "מחוז ירושלים"}, {link: "/rent/southern-district", title: "מחוז הדרום"}, {link: "/rent/judea-and-samaria-district", title: "מחוז יהודה ושומרון"}, {link: "/rent/jerusalem", title: "ירושלים"}, {link: "/rent/tel-aviv", title: "תל אביב"}, {link: "/rent/herzliya", title: "הרצליה"}, {link: "/rent/haifa", title: "חיפה"}, {link: "/rent/rishon-lezion", title: "ראשון לציון"}, {link: "/rent/netanya", title: "נתניה"}, {link: "/rent/bat-yam", title: "בת ים"}, {link: "/rent/holon", title: "חולון"}, {link: "/rent/petah-tikva", title: "פתח תקווה"}, {link: "/rent/kfar-saba", title: "כפר סבא"}, {link: "/rent/ashdod", title: "אשדוד"}, {link: "/rent/ashkelon", title: "אשקלון"}, {link: "/rent/eilat", title: "אילת"}],
			[{link: "/sell/northern-district", title: "מחוז הצפון"}, {link: "/sell/haifa-district", title: "מחוז חיפה"}, {link: "/sell/tel-aviv-district", title: "מחוז תל אביב"}, {link: "/sell/central-district", title: "מחוז המרכז"}, {link: "/sell/jerusalem-district", title: "מחוז ירושלים"}, {link: "/sell/southern-district", title: "מחוז הדרום"}, {link: "/sell/judea-and-samaria-district", title: "מחוז יהודה ושומרון"}, {link: "/sell/jerusalem", title: "ירושלים"}, {link: "/sell/tel-aviv", title: "תל אביב"}, {link: "/sell/herzliya", title: "הרצליה"}, {link: "/sell/haifa", title: "חיפה"}, {link: "/sell/rishon-lezion", title: "ראשון לציון"}, {link: "/sell/netanya", title: "נתניה"}, {link: "/sell/bat-yam", title: "בת ים"}, {link: "/sell/holon", title: "חולון"}, {link: "/sell/petah-tikva", title: "פתח תקווה"}, {link: "/sell/kfar-saba", title: "כפר סבא"}, {link: "/sell/ashdod", title: "אשדוד"}, {link: "/sell/ashkelon", title: "אשקלון"}, {link: "/sell/eilat", title: "אילת"}]
		]
	},
	Footer: {
		follow: "עקבו אחרינו",
		apps: {
			title: "התקן את האפליקציה שלנו",
			text: "הורד ב"
		},
		policy: "מדיניות פרטיות"
	},
	Fieldset: {
		default: {
			title: "default text",
			list: [
				{title: "הכל", value: "0"}
			]
		},
		rooms: {
			title: "חדרים",
			list: [
				{title: "הכל", value: "0"},
				{title: "1+", value: "1"},
				{title: "2+", value: "2"},
				{title: "3+", value: "3"},
				{title: "4+", value: "4"}
			]
		},
		parking: {
			title: "חניה",
			list: [
				{title: "עם חניה", value: "חניה"}
			]
		},
		reception: {
			title: "קבלה",
			list: [
				{title: "עם קבלה", value: "קבלה"}
			]
		},
		storage: {
			title: "מחסן",
			list: [
				{title: "עם מחסן", value: "מחסן"}
			]
		},
		air_conditioning: {
			title: "מזגן",
			list: [
				{title: "עם מזגן", value: "מזגן"}
			]
		},
		pool: {
			title: "בריכה",
			list: [
				{title: "עם בריכה", value: "בריכה"}
			]
		},
		disabled_access: {
			title: "גישה לנכים",
			list: [
				{title: "עם גישה לנכים", value: "גישה לנכים"}
			]
		},
		balcony: {
			title: "מרפסת",
			list: [
				{title: "עם מרפסת", value: "מרפסת"}
			]
		},
		bomb_shelter: {
			title: "ממ\"ד",
			list: [
				{title: "עם ממ\"ד", value: "ממ\"ד"}
			]
		},
		elevator: {
			title: "מעלית",
			list: [
				{title: "עם מעלית", value: "מעלית"}
			]
		},
		furniture: {
			title: "רהוט",
			list: [
				{title: "עם רהוט", value: "רהוט"}
			]
		},
		gym: {
			title: "חדר כושר",
			list: [
				{title: "עם חדר כושר", value: "חדר כושר"}
			]
		},
		meeting_room: {
			title: "חדר ישיבות",
			list: [
				{title: "עם חדר ישיבות", value: "חדר ישיבות"}
			]
		},
		type: {
			title: "סוג העסקה",
			list: [
				{title: "נכסים להשכרה", value: "rent"},
				{title: "נכסים למכירה", value: "buy"}
			]
		},
		
		priceFilter: {
			title: "מחיר",
			titleMin: "מ:",
			titleMax: "עד:"
		}
	},
	AdsModal: {
		params: {
			meters: {text: "בנוי", unit: "m²"},
			bathrooms: {text: "חדרי אמבטיה", unit: ""},
			rooms: {text: "חדרים", unit: ""},
			year: {text: "שנת בנייה", unit: ""},
			entry_date: {text: "תאריך כניסה", unit: ""},
			floor: {text: "קומה", unit: ""},
			floors: {text: " קומות בבנין ", unit: ""},
			meters_balcony: {text: "מרפסת", unit: "m²"},
			meters_garden: {text: "גינה", unit: "m²"},
			conditioner: {text: "מזגן"},
			elevator: {text: "מעלית"},
			pool: {text: "בריכה"},
			parking: {text: "parking", 1: "has parking", 0: "ללא חניה"},
			new_construction: {text: "construction", 1: "new construction", 0: "old construction"},
			disabled_people: {text: "access disabled", 1: "yes", 0: "no"},
			safe_room: {text: "safe room", 1: "yes", 0: "ללא ממ\"ד"},
			furniture: {text: "רהוט", 1: "מרוהט", 0: "ללא רהוט"},
			renovated: {text: "renovated", 1: "renovated", 0: "דורש שיפוץ"},
			water_heater: {text: "water heater", 1: "yes", 0: "ללא דוד שמש"}, 
			gym: {text: "gym", 1: "has gym", 0: "ללא חדר כושר"}, 
			storage: {text: "storage", 1: "has storage", 0: "ללא מחסן"}
			
		}
	}
};
export default he;