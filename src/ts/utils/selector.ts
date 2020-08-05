export const selectElementByClassOrId: (
	selector: string,
	choice?: "class" | "id" | null
) => Element | null | undefined = (selector: string, choice = null) => {
	if (choice === "class" && !selector.startsWith(".")) {
		return document.querySelector(`.${selector}`);
	} else if (choice === "id" && !selector.startsWith("#")) {
		return document.getElementById(`${selector}`);
	} else if (selector.startsWith("#") && !choice) {
		const start = 1;
		const end = selector.length;
		const idSelector = selector.slice(start, end);

		return document.getElementById(idSelector);
	} else if (selector.startsWith(".") && !choice) {
		return document.querySelector(selector);
	}
	console.error(`You must specify a class or id. if not use . for classes  or  # at the beginning of your selector ${selector} and ignore the choice option
	`);
	return null
};


export const selectElementsByClass: (selector: string) => Array<Element> = (selector: string) => {

	if (selector.startsWith(".")) {
		return [...document.querySelectorAll(selector)]
	}

	console.error(`You must specify a class or id if not use . for classes  or  # at the beginning of your selector ${selector}
	`);
	return []
}

