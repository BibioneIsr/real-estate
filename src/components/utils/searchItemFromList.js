export default function searchItemFromList(arr, prop, value) {
	for (const item of arr) {
		if (item[prop] === value) return item;
	}
	return {};
}