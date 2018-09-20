const setContext = (el) => {
	const scrollPos = window.scrollY || document.documentElement.scrollTop;
	const rect = el.getBoundingClientRect();
	const absPosY = scrollPos + rect.top;
	let amountScrolledInView = scrollPos + window.innerHeight - absPosY;

	// no negative values
	if (amountScrolledInView < 0) amountScrolledInView = 0;

	// set custom properties on element
	el.style.setProperty('--amount-scrolled-in-view', amountScrolledInView);
};

export {
	setContext
};