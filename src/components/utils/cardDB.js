function randInt(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}
function randBoal() {
    return randInt(0, 1) > 0 ? 1 : 0;
}
function randFloat(min, max, step) {
    return +(Math.random() * (max - min + 1)).toFixed(step);
}
function randDate(minYear, maxYear) {
    return `${normalizeDate(randInt(1, 31))}.${normalizeDate(randInt(1, 12))}.${normalizeDate(randInt(minYear, maxYear))} ${normalizeDate(randInt(0, 23))}:${normalizeDate(randInt(0, 60))}:${normalizeDate(randInt(0, 60))}`;

    function normalizeDate(n) {
        return n > 9 ? n : "0" + n;
    }
}
function randPhone(amount = 7) {
    let randIntStr = '';
    while (amount-- > 0) randIntStr += randInt(0, 9);
    return `05${randInt(0, 4)}-${randIntStr}`;
}
function randText(min, max) {
    let len = randInt(min, max);
    let result = randUpper(1);
    let temp, splitter = " ", amount = 1;
    while(len-- > 1) {
        temp = randInt(1, 5);
        if (amount % 3 === 0) {
            splitter = randBoal() ? " " : ".";
        }
        result += randLower(temp) + splitter;
        len -= temp;

        if (len > 7 && splitter === ".") {
            splitter = " ";
            result += " " + randUpper(1);
            len -= 2;
        }

        if(len <= 5 && len > 0) {
            result += randLower(len-1) + ".";
            break;
        }
        amount++;
    }
    return result;

    function randUpper(len) {
        return String.fromCharCode(
            ...new Array(len)
               .fill(1)
               .map(() => randInt(65, 90))
        ); 
    }
    function randLower(len) {
        return String.fromCharCode(
            ...new Array(len)
               .fill(1)
               .map(() => randInt(97, 122))
        ); 
    }
}
function coordToAddress(lat, lon) {
    return "4444 W Maypole Ave, Chicago, IL 60624";
}
function randPreview() {
    const images = [
        "https://photos.zillowstatic.com/fp/58835e4b779ba63119bfe76fe30ebb3e-uncropped_scaled_within_1344_1008.webp",
        "https://photos.zillowstatic.com/fp/c97a1974220e5d15e527b416f45d30e2-uncropped_scaled_within_1344_1008.webp",
        "https://photos.zillowstatic.com/fp/39373c3d0b56a3f21d07cfac81589bb4-uncropped_scaled_within_1344_1008.webp",
        "https://photos.zillowstatic.com/fp/1ac47529697c90848513f5f93732f715-uncropped_scaled_within_1344_1008.webp",
        "https://photos.zillowstatic.com/fp/695527950ba0a25da5054a2cba055cb1-uncropped_scaled_within_1344_1008.webp",
        "https://photos.zillowstatic.com/fp/3a86ffb91ab0bebe32f6c51201f59014-uncropped_scaled_within_1536_1152.webp"
    ];
    return {
        is_preview: true,
        src: images[randInt(0, images.length-1)]
    }
}
function generateCard() {
    const latitude = randFloat(0, 80, 4);
    const longitude = randFloat(0, 80, 4);
    const addressText = coordToAddress(latitude, longitude);

    return {
        id: randInt(0, 100000),
        title: randText(3, 25),
        description: randText(1000, 5000),
        date: randDate(2020, 2021),
        year: randInt(1900, 2026),
        entry_date: `${randInt(1, 31)}/${randInt(1, 12)}/${randInt(2021, 2022)}`,
        price: randFloat(500, 9999999),
        address: {
            latitude: latitude,
            longitude: longitude,
            text: addressText
        },
        realProperty_id: randInt(1000000, 9999999),
        floor: randInt(1, 10),
        floors: randInt(-3, 40),
        rooms: randInt(1, 20),
        meters: randInt(10, 1000),
        meters_balcony: randInt(0, 300),
        bathrooms: randInt(1, 9),
        conditioner: randBoal(),
        elevator: randBoal(),
        pool: randBoal(),
        parking: randBoal(),
        new_construction: randBoal(),
        disabled_people: randBoal(),
        safe_room: randBoal(),
        furniture: randBoal(),
        renovated: randBoal(),
		water_heater: randBoal(), 
		gym: randBoal(), 
		storage: randBoal(),
        photos: [
            randPreview(),
            {src: "https://photos.zillowstatic.com/fp/44b9ea1f715b80dd641c922b88949e44-uncropped_scaled_within_1344_1008.webp"},
            {src: "https://photos.zillowstatic.com/fp/ff43d1bc45a87e43210bba5f0a7757df-uncropped_scaled_within_1344_1008.webp"},
            {src: "https://photos.zillowstatic.com/fp/c5fe2f46bf3f5a5fc71dccbc3b74e563-uncropped_scaled_within_1344_1008.webp"},
            {src: "https://photos.zillowstatic.com/fp/ec44d7057ef029b34380d17071114786-uncropped_scaled_within_1344_1008.webp"}
        ],
        user: {
            id: randInt(100, 10000),
            phone: randPhone(),
            full_name: `${randText(2, 5)} ${randText(2, 7)}`
        }
    }
}
export default function cardDB(amount) {
	const arr = [];

    while (amount-- > 0) {
        arr.push(generateCard());
    }

	return arr;
}