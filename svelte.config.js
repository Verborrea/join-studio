import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	}
};

export default config;

// import adapter from '@sveltejs/adapter-static';

// export default {
// 	kit: {
// 		adapter: adapter({
// 			// default options are shown. On some platforms
// 			// these options are set automatically — see below
// 			pages: 'build',
// 			assets: 'build',
// 			fallback: undefined,
// 			precompress: false,
// 			strict: true
// 		}),
// 		prerender: {
// 			entries: ['/', '/Marko Manrique', '/Gustavo Injoque', '/Javier Villanueva', '/Adriana Velazco', '/Alan Monroy', '/Juan Carlos Llanos', '/Carlos Solis', '/Cesar Soplin', '/Erick Porroa'],
// 			handleMissingId: 'ignore'
// 		}		
// 	}
// };