import throttle from 'lodash.throttle';

import { setContext } from './util';

function directive(el) {
	const handleScroll = throttle(() => {
		window.requestAnimationFrame(() => setContext(el));
	}, 20);

	window.addEventListener('scroll', handleScroll);
}

function install(Vue) {
	if (window.CSS && window.CSS.supports && window.CSS.supports('--dummy-var', 0)) {
		Vue.directive('css-window-context', {
			bind: directive,
		});
	}
}

export { directive, install };

export default install;
