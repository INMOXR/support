// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import markdocGrammar from './grammars/markdoc.tmLanguage.json';

import starlightSidebarTopics from 'starlight-sidebar-topics';

export const locales = {
	root: { label: 'English', lang: 'en' },
	'zh-cn': { label: '简体中文', lang: 'zh-CN' },
};

/* https://docs.netlify.com/configure-builds/environment-variables/#read-only-variables */
const NETLIFY_PREVIEW_SITE = process.env.CONTEXT !== 'production' && process.env.DEPLOY_PRIME_URL;

const site = NETLIFY_PREVIEW_SITE || 'https://support.inmoxr.com';
const ogUrl = new URL('inmo-support.jpg', site).href;
const ogImageAlt = 'INMO Support Center';

// astro.config.mjs 中 plugins 数组的正确配置
const sidebarTopicsConfig = [
    {
        title: 'INMO Products', 
        items: [
            // 🚨 顶层链接：您的产品首页
            { label: 'INMO Air3 Home', link: '/air3/' },
            { label: 'INMO GO Home', link: '/go/' },

            // 🚨 接着是 Air3 的所有子页面（不使用嵌套的 items）
            { label: 'Air3 Quick Start', link: 'air3/guides/quick-start' },
            { label: 'Air3 Desktop Mgmt', link: 'air3/guides/desktop-management' },
            
            // 🚨 接着是 GO 的所有子页面
            { label: 'GO Quick Start', link: 'go/guides/quick-start' },
            { label: 'GO Features', link: 'go/guides/features' },
            
            // ... 您可以在这里添加其他所有文档页
        ],
    },
];

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
					label: 'Support',
					href: 'mailto:support@inmoxr.com',
				},
				{
					icon: 'facebook',
					label: 'Facebook',
					href: 'https://www.facebook.com/inmocares',
				},
				{
					icon: 'instagram',
					label: 'Instagram',
					href: 'https://www.instagram.com/inmo.xr/',
				},
				{
					icon: 'youtube',
					label: 'YouTube',
					href: 'https://www.youtube.com/@inmo-xr',
				},
				{
					icon: 'discord',
					label: 'Discord',
					href: 'https://discord.gg/daQShJJH',
				},
				{
					icon: 'reddit',
					label: 'Reddit',
					href: 'https://www.reddit.com/r/inmoxr/',
				},
				{
					icon: 'x.com',
					label: 'X',
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
			// sidebar: [
			// 	// Air3的文档结构
			// 	{
			// 	  label: 'INMO Air3',
			// 	  items: [
			// 		{
			// 		  label: 'Guides',
			// 		  autogenerate: { directory: '/air3/guides' },
			// 		},
			// 		{
			// 		  label: 'FAQ',
			// 		  autogenerate: { directory: '/air3/faq' },
			// 		},
			// 	  ],
			// 	},
			// 	// GO的文档结构
			// 	{
			// 	  label: 'INMO GO',
			// 	  items: [
			// 		{
			// 		  label: 'Guides',
			// 		  autogenerate: { directory: '/go/guides' },
			// 		},
			// 		{
			// 		  label: 'FAQ',
			// 		  autogenerate: { directory: '/go/faq' },
			// 		},
			// 	  ],
			// 	},
			// 	// GO2的文档结构
			// 	{
			// 		label: 'INMO GO2',
			// 		items: [
			// 		  {
			// 			label: 'Guides',
			// 			autogenerate: { directory: '/go2/guides' },
			// 		  },
			// 		  {
			// 			label: 'FAQ',
			// 			autogenerate: { directory: '/go2/faq' },
			// 		  },
			// 		],
			// 	  },
			// 	  // Air2的文档结构
			// 	{
			// 		label: 'INMO Air2',
			// 		items: [
			// 		  {
			// 			label: 'Guides',
			// 			autogenerate: { directory: '/air2/guides' },
			// 		  },
			// 		  {
			// 			label: 'FAQ',
			// 			autogenerate: { directory: '/air2/faq' },
			// 		  },
			// 		],
			// 	  },
			//   ],
			expressiveCode: { shiki: { langs: [markdocGrammar] } },

			components: {
					Sidebar: './src/components/Sidebar.astro',
				},

			plugins: [
				// 现有的 starlightLinksValidator 插件
				process.env.CHECK_LINKS
					? starlightLinksValidator({
						errorOnFallbackPages: false,
						errorOnInconsistentLocale: true,
					})
					: [],

				// 2. 添加 starlightSidebarTopics 插件并配置
				// ⚠️ 请在此处添加您的 Topics 配置 (如果有的话)
				starlightSidebarTopics(sidebarTopicsConfig, {
					exclude: ['/getting-started', '/getting-started/'],
				}),
			]
		}),
	],
});
