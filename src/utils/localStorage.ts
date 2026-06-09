import { initialData } from "../data/data.ts";

function setLocalStorage(key: string, value: unknown) {
	localStorage.setItem(key, JSON.stringify(value));
}

function getLocalStorage<T>(key: string): T {
	const val = localStorage.getItem(key);

	if (!val) {
		setLocalStorage(key, initialData);

		return getLocalStorage<T>(key);
	}

	return JSON.parse(val) as T;
}

export { getLocalStorage, setLocalStorage };
