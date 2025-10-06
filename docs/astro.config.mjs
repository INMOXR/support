// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import markdocGrammar from './grammars/markdoc.tmLanguage.json';

export const locales = {
	root: { label: 'English', lang: 'en' },
	'zh-cn': { label: '简体中文', lang: 'zh-CN' },
};

/* https://docs.netlify.com/configure-builds/environment-variables/#read-only-variables */
const NETLIFY_PREVIEW_SITE = process.env.CONTEXT !== 'production' && process.env.DEPLOY_PRIME_URL;

const site = NETLIFY_PREVIEW_SITE || 'https://support.inmoxr.com';
const ogUrl = new URL('inmo-support.jpg', site).href;
const ogImageAlt = 'INMO Support Center';

export default defineConfig({
	site,
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: 'INMO Support Center',
			defaultLocale: 'root',
			favicon: '/inmo-logo-black.svg',
			logo: {
				light: '/src/assets/inmo-logo-black.svg',
				dark: '/src/assets/inmo-logo-white.svg',
				replacesTitle: true,
			},
			lastUpdated: true,
			editLink: {
				baseUrl: 'https://github.com/INMOXR/support/tree/main/docs/',
			},
			social: [
				{
					icon: 'email',
					href: 'mailto:support@inmoxr.com',
				},
				{
					icon: 'facebook',
					href: 'https://www.facebook.com/inmocares',
				},
				{
					icon: 'instagram',
					href: 'https://www.instagram.com/inmo.xr/',
				},
				{
					icon: 'youtube',
					href: 'https://www.youtube.com/@inmo-xr',
				},
				{
					icon: 'discord',
					href: 'https://discord.gg/daQShJJH',
				},
				{
					icon: 'reddit',
					href: 'https://www.reddit.com/r/inmoxr/',
				},
				{
					icon: 'x.com',
					href: 'https://x.com/inmoxr',
				},
			],
			head: [
				{
					tag: 'script',
					attrs: {
						src: 'https://cdn.usefathom.com/script.js',
						'data-site': 'EZBHTSIG',
						defer: true,
					},
				},
				{
					tag: 'meta',
					attrs: { property: 'og:image', content: ogUrl },
				},
				{
					tag: 'meta',
					attrs: { property: 'og:image:alt', content: ogImageAlt },
				},
			],
			customCss: ['./src/assets/landing.css'],
			locales,
			sidebar: [
				// Air3的文档结构
				{
				  label: 'INMO Air3',
				  items: [
					{
					  label: 'Guides',
					  autogenerate: { directory: '/air3/guides' },
					},
					{
					  label: 'FAQ',
					  autogenerate: { directory: '/air3/faq' },
					},
				  ],
				},
				// GO的文档结构
				{
				  label: 'INMO GO',
				  items: [
					{
					  label: 'Guides',
					  autogenerate: { directory: '/go/guides' },
					},
					{
					  label: 'FAQ',
					  autogenerate: { directory: '/go/faq' },
					},
				  ],
				},
				// GO2的文档结构
				{
					label: 'INMO GO2',
					items: [
					  {
						label: 'Guides',
						autogenerate: { directory: '/go2/guides' },
					  },
					  {
						label: 'FAQ',
						autogenerate: { directory: '/go2/faq' },
					  },
					],
				  },
				  // Air2的文档结构
				{
					label: 'INMO Air2',
					items: [
					  {
						label: 'Guides',
						autogenerate: { directory: '/air2/guides' },
					  },
					  {
						label: 'FAQ',
						autogenerate: { directory: '/air2/faq' },
					  },
					],
				  },
			  ],
			expressiveCode: { shiki: { langs: [markdocGrammar] } },

			plugins: process.env.CHECK_LINKS
				? [
						starlightLinksValidator({
							errorOnFallbackPages: false,
							errorOnInconsistentLocale: true,
						}),
					]
				: [],
		}),
	],
});
