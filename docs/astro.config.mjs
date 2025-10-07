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

const sidebarTopicsConfig = [
    {
        label: 'INMO Air3',
        link: '/air3/',
        icon: 'open-book',
        items: ['air3/guides/quick-start', 'air3/guides/desktop-management'],
    },
    {
        label: 'INMO GO',
        link: '/go/',
        icon: 'information',
        items: ['go/guides/quick-start', 'go/guides/features'],
    },
	{
        label: 'INMO GO2',
        link: '/go2/',
        icon: 'information',
        items: ['go2/guides/quick-start', 'go/guides/features'],
    },
	{
        label: 'INMO Air2',
        link: '/air2/',
        icon: 'information',
        items: ['air2/guides/developer-mode', 'air2/guides/ota-update'],
    },
];

// --- 修改开始 ---
// 1. 先定义一个 Starlight 插件数组
const starlightPlugins = [
    // 将 starlightSidebarTopics 插件加进去
    starlightSidebarTopics(sidebarTopicsConfig, {
        exclude: [ '/components', '/components/*'],
    }),
];

// 2. 如果环境变量存在，再把 starlightLinksValidator 插件推进数组
if (process.env.CHECK_LINKS) {
    starlightPlugins.push(
        starlightLinksValidator({
            errorOnFallbackPages: false,
            errorOnInconsistentLocale: true,
        })
    );
}
// --- 修改结束 ---

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
                // ... 你的 social links (保持不变)
                { icon: 'email', label: 'Support', href: 'mailto:support@inmoxr.com' },
                { icon: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/inmocares' },
                { icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/inmo.xr/' },
                { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@inmo-xr' },
                { icon: 'discord', label: 'Discord', href: 'https://discord.gg/daQShJJH' },
                { icon: 'reddit', label: 'Reddit', href: 'https://www.reddit.com/r/inmoxr/' },
                { icon: 'x.com', label: 'X', href: 'https://x.com/inmoxr' },
            ],
            head: [
                // ... 你的 head 配置 (保持不变)
                { tag: 'script', attrs: { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'EZBHTSIG', defer: true } },
                { tag: 'meta', attrs: { property: 'og:image', content: ogUrl } },
                { tag: 'meta', attrs: { property: 'og:image:alt', content: ogImageAlt } },
            ],
            customCss: ['./src/assets/landing.css'],
            locales,
            expressiveCode: { shiki: { langs: [markdocGrammar] } },
            components: {
                Sidebar: './src/components/Sidebar.astro',
            },

            // 3. 在这里使用我们刚刚创建的 starlightPlugins 数组
            plugins: starlightPlugins,
        }),
    ],
});