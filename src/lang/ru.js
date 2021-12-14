const ru = {
	Header: {
		leftMenu: [
			{link: "/buy", title: "Покупка"},
			{link: "/rent", title: "Аренда"},
			{link: "/sell", title: "Продажа"}
		],
		rightMenu: [
			{link: "/buy-ads", title: "Разместить объявление"},
			{link: "/sign-up", title: "Зарегистрироваться"},
			{link: "/sign-in", title: "Войти"}
		]
	},
	Search: {
		placeholder: "Начните вводить адрес"
	},
	MainCategories: {
		title: "Cамые актуальные сделки",
		cards: [
			{link: "/buy", img: "buy", title: "Покупка", text: "С нами Вы легко можете найти самые актуальные предложения по покупке недвижимости.", button: "Покупка"},
			{link: "/rent", img: "rent", title: "Аренда", text: "Используя наш сервис Вы в кратчайший срок сможете найти подходящую недвижимость для аренды.", button: "Аренда"},
			{link: "/sell", img: "sell", title: "Продажа", text: "Пользователи нашей платформы в три раза быстрее продают недвижимость.", button: "Продажа"}
		]
	},
	MainFilters: {
		title: "Рекомендации для вас",
		categories: ["Купить", "Сдать в аренду", "Продать"],
		links: [
			[{link: "/buy/northern-district", title: "Северный округ"}, {link: "/buy/haifa-district", title: "Хайфский округ"}, {link: "/buy/tel-aviv-district", title: "Тель-Авивский округ"}, {link: "/buy/central-district", title: "Центральный округ"}, {link: "/buy/jerusalem-district", title: "Иерусалимский округ"}, {link: "/buy/southern-district", title: "Южный округ"}, {link: "/buy/judea-and-samaria-district", title: "Округ Иудея и Самария"}, {link: "/buy/jerusalem", title: "Иерусалим"}, {link: "/buy/tel-aviv", title: "Тель-Авив"}, {link: "/buy/herzliya", title: "Герцлия"}, {link: "/buy/haifa", title: "Хайфа"}, {link: "/buy/rishon-lezion", title: "Ришон-ле-Цион"}, {link: "/buy/netanya", title: "Нетания"}, {link: "/buy/bat-yam", title: "Бат-Ям"}, {link: "/buy/holon", title: "Холон"}, {link: "/buy/petah-tikva", title: "Петах-Тиква"}, {link: "/buy/kfar-saba", title: "Кфар-Сава"}, {link: "/buy/ashdod", title: "Ашдод"}, {link: "/buy/ashkelon", title: "Ашкелон"}, {link: "/buy/eilat", title: "Эйлат"}],
			[{link: "/rent/northern-district", title: "Северный округ"}, {link: "/rent/haifa-district", title: "Хайфский округ"}, {link: "/rent/tel-aviv-district", title: "Тель-Авивский округ"}, {link: "/rent/central-district", title: "Центральный округ"}, {link: "/rent/jerusalem-district", title: "Иерусалимский округ"}, {link: "/rent/southern-district", title: "Южный округ"}, {link: "/rent/judea-and-samaria-district", title: "Округ Иудея и Самария"}, {link: "/rent/jerusalem", title: "Иерусалим"}, {link: "/rent/tel-aviv", title: "Тель-Авив"}, {link: "/rent/herzliya", title: "Герцлия"}, {link: "/rent/haifa", title: "Хайфа"}, {link: "/rent/rishon-lezion", title: "Ришон-ле-Цион"}, {link: "/rent/netanya", title: "Нетания"}, {link: "/rent/bat-yam", title: "Бат-Ям"}, {link: "/rent/holon", title: "Холон"}, {link: "/rent/petah-tikva", title: "Петах-Тиква"}, {link: "/rent/kfar-saba", title: "Кфар-Сава"}, {link: "/rent/ashdod", title: "Ашдод"}, {link: "/rent/ashkelon", title: "Ашкелон"}, {link: "/rent/eilat", title: "Эйлат"}],
			[{link: "/sell/northern-district", title: "Северный округ"}, {link: "/sell/haifa-district", title: "Хайфский округ"}, {link: "/sell/tel-aviv-district", title: "Тель-Авивский округ"}, {link: "/sell/central-district", title: "Центральный округ"}, {link: "/sell/jerusalem-district", title: "Иерусалимский округ"}, {link: "/sell/southern-district", title: "Южный округ"}, {link: "/sell/judea-and-samaria-district", title: "Округ Иудея и Самария"}, {link: "/sell/jerusalem", title: "Иерусалим"}, {link: "/sell/tel-aviv", title: "Тель-Авив"}, {link: "/sell/herzliya", title: "Герцлия"}, {link: "/sell/haifa", title: "Хайфа"}, {link: "/sell/rishon-lezion", title: "Ришон-ле-Цион"}, {link: "/sell/netanya", title: "Нетания"}, {link: "/sell/bat-yam", title: "Бат-Ям"}, {link: "/sell/holon", title: "Холон"}, {link: "/sell/petah-tikva", title: "Петах-Тиква"}, {link: "/sell/kfar-saba", title: "Кфар-Сава"}, {link: "/sell/ashdod", title: "Ашдод"}, {link: "/sell/ashkelon", title: "Ашкелон"}, {link: "/sell/eilat", title: "Эйлат"}]
		]
	},
	Footer: {
		follow: "наши социальные сети",
		apps: {
			title: "попробуйте наше приложение",
			text: "скачать из"
		},
		policy: "политика конфиденциальности"
	},
	Fieldset: {
		default: {
			title: "default text",
			list: [
				{title: "все", value: "0"}
			]
		},
		rooms: {
			title: "Количество комнат",
			list: [
				{title: "Все", value: "0"},
				{title: "1+", value: "1"},
				{title: "2+", value: "2"},
				{title: "3+", value: "3"},
				{title: "4+", value: "4"}
			]
		},
		parking: {
			title: "парковка",
			list: [
				{title: "с парковкой", value: "парковка"}
			]
		},
		reception: {
			title: "консьерж",
			list: [
				{title: "с консьержем", value: "консьерж"}
			]
		},
		storage: {
			title: "кладовка",
			list: [
				{title: "с кладовкой", value: "кладовка"}
			]
		},
		air_conditioning: {
			title: "кондиционер",
			list: [
				{title: "с кондиционером", value: "кондиционер"}
			]
		},
		pool: {
			title: "бассейн",
			list: [
				{title: "с бассейном", value: "бассейн"}
			]
		},
		disabled_access: {
			title: "доступ для инвалидов",
			list: [
				{title: "с доступом для инвалидов", value: "доступ для инвалидов"}
			]
		},
		balcony: {
			title: "балкон",
			list: [
				{title: "с балконом", value: "балкон"}
			]
		},
		bomb_shelter: {
			title: "безопасная комната",
			list: [
				{title: "с безопасной комнатой", value: "безопасная комната"}
			]
		},
		elevator: {
			title: "лифт",
			list: [
				{title: "с лифтом", value: "лифт"}
			]
		},
		furniture: {
			title: "мебель",
			list: [
				{title: "с мебелью", value: "мебель"}
			]
		},
		gym: {
			title: "тренажерный зал",
			list: [
				{title: "с тренажерным залом", value: "тренажерный зал"}
			]
		},
		meeting_room: {
			title: "комната для переговоров",
			list: [
				{title: "с комнатой для переговоров", value: "Комната для переговоров"}
			]
		},
		type: {
			title: "Вид сделки",
			list: [
				{title: "Аренда", value: "rent"},
				{title: "Покупка", value: "buy"}
			]
		},
		priceFilter: {
			title: "Цена сделки",
			titleMin: "От:",
			titleMax: "До:"
		}
	},
	AdsModal: {
		params: {
			meters: {text: "общая площадь", unit: "м²"},
			bathrooms: {text: "ванных комнат", unit: ""},
			rooms: {text: "количество комнат", unit: ""},
			year: {text: "год постройки", unit: ""},
			entry_date: {text: "дата заезда", unit: ""},
			floor: {text: "этаж", unit: ""},
			floors: {text: "этажность", unit: ""},
			meters_balcony: {text: "площадь балкона", unit: "м²"},
			meters_garden: {text: "площадь двора", unit: "м²"},
			conditioner: {text: "кондиционер", 1: "есть кондиционер", 0: "без кондиционера"},
			elevator: {text: "лифт", 1: "есть лифт", 0: "нет лифта"},
			pool: {text: "бассейн", 1: "есть бассейн", 0: "нет бассейна"},
			parking: {text: "парковка", 1: "есть парковка", 0: "нет парковки"},
			new_construction: {text: "строительство", 1: "новое строительство", 0: "не новое строительство"},
			disabled_people: {text: "доступ для инвалидов", 1: "есть доступ для инвалидов", 0: "нет доступа для инвалидов"},
			safe_room: {text: "безопасная комната", 1: "есть безопасная комната", 0: "нет безопасной комнаты"},
			furniture: {text: "мебель", 1: "c мебелью", 0: "без мебели"},
			renovated: {text: "ремонт", 1: "с ремонтом", 0: "без ремонта"},
			water_heater: {text: "водонагреватель", 1: "есть водонагреватель", 0: "без водонагревателя"}, 
			gym: {text: "тренажерный зал", 1: "есть тренажерный зал", 0: "нет тренажерного зала"}, 
			storage: {text: "кладовка", 1: "есть кладовка", 0: "нет кладовки"}

		}
	}
};
export default ru;