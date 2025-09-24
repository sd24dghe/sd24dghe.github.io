import type {
	AnnouncementConfig,
	CommentConfig,
	ExpressiveCodeConfig,
	FooterConfig,
	FullscreenWallpaperConfig,
	LicenseConfig,
	MusicPlayerConfig,
	NavBarConfig,
	ProfileConfig,
	SakuraConfig,
	SidebarLayoutConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";
import { getTranslateLanguageFromConfig } from "./utils/language-utils";

// 定义站点语言
const SITE_LANG = "zh_CN";

export const siteConfig: SiteConfig = {
	title: "LBF的技术博客",
	subtitle: "探索技术与创意的无限可能",

	lang: SITE_LANG,

	themeColor: {
		hue: 210,
		fixed: false,
	},

	translate: {
		enable: true,
		service: "client.edge",
		defaultLanguage: getTranslateLanguageFromConfig(SITE_LANG),
		showSelectTag: false,
		autoDiscriminate: true,
		ignoreClasses: ["ignore", "banner-title", "banner-subtitle"],
		ignoreTags: ["script", "style", "code", "pre"],
	},
	banner: {
		enable: true,

		src: {
			desktop: [
				"/assets/desktop-banner/d1.webp",
				"/assets/desktop-banner/d2.webp",
				"/assets/desktop-banner/d3.webp",
				"/assets/desktop-banner/d4.webp",
				"/assets/desktop-banner/d5.webp",
				"/assets/desktop-banner/d6.webp",
				"/assets/desktop-banner/d7.webp",
				"/assets/desktop-banner/d8.webp",
			],
			mobile: [
				"/assets/mobile-banner/m1.webp",
				"/assets/mobile-banner/m2.webp",
				"/assets/mobile-banner/m3.webp",
				"/assets/mobile-banner/m4.webp",
				"/assets/mobile-banner/m5.webp",
				"/assets/mobile-banner/m6.webp",
				"/assets/mobile-banner/m7.webp",
				"/assets/mobile-banner/m8.webp",
			],
		},

		position: "center",

		carousel: {
			enable: true,
			interval: 1.5,
		},

		imageApi: {
			enable: false,
			url: "http://domain.com/api_v2.php?format=text&count=4",
		},

		homeText: {
			enable: true,
			title: "LBF的技术博客",

			subtitle: [
				"技术探索与创意实践",
				"全栈开发与前沿技术",
				"开源项目与代码分享",
				"学习笔记与经验总结",
			],
			typewriter: {
				enable: true,
				speed: 100,
				deleteSpeed: 50,
				pauseTime: 2000,
			},
		},

		credit: {
			enable: false,
			text: "Describe",
			url: "",
		},

		navbar: {
			transparentMode: "semifull",
		},
	},
	toc: {
		enable: true,
		depth: 3,
	},
	generateOgImages: false,
	favicon: [],

	font: {
		zenMaruGothic: {
			enable: true,
		},
		hanalei: {
			enable: false,
		},
	},
};
export const fullscreenWallpaperConfig: FullscreenWallpaperConfig = {
	enable: true,
	src: {
		desktop: [
			"/assets/desktop-banner/d1.webp",
			"/assets/desktop-banner/d2.webp",
			"/assets/desktop-banner/d3.webp",
			"/assets/desktop-banner/d4.webp",
			"/assets/desktop-banner/d5.webp",
			"/assets/desktop-banner/d6.webp",
			"/assets/desktop-banner/d7.webp",
			"/assets/desktop-banner/d8.webp",
		],
		mobile: [
			"/assets/mobile-banner/m1.webp",
			"/assets/mobile-banner/m2.webp",
			"/assets/mobile-banner/m3.webp",
			"/assets/mobile-banner/m4.webp",
			"/assets/mobile-banner/m5.webp",
			"/assets/mobile-banner/m6.webp",
			"/assets/mobile-banner/m7.webp",
			"/assets/mobile-banner/m8.webp",
		],
	},
	position: "center",
	carousel: {
		enable: true,
		interval: 1,
	},
	zIndex: -1,
	opacity: 0.8,
	blur: 1,
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		{
			name: "链接",
			url: "/links/",
			icon: "material-symbols:link",
			children: [
				{
					name: "GitHub",
					url: "https://github.com/sd24dghe",
					external: true,
					icon: "fa6-brands:github",
				},
				{
					name: "哔哩哔哩",
					url: "https://space.bilibili.com/1502095394",
					external: true,
					icon: "fa6-brands:bilibili",
				},
				{
					name: "主博客",
					url: "https://lbf.my",
					external: true,
					icon: "material-symbols:home",
				},
			],
		},
		{
			name: "我的",
			url: "/content/",
			icon: "material-symbols:person",
			children: [
				LinkPreset.Anime,
				LinkPreset.Diary,
				{
					name: "相册",
					url: "/albums/",
					icon: "material-symbols:photo-library",
				},
			],
		},
		{
			name: "关于",
			url: "/content/",
			icon: "material-symbols:info",
			children: [LinkPreset.About, LinkPreset.Friends],
		},
		{
			name: "其他",
			url: "#",
			icon: "material-symbols:more-horiz",
			children: [
				{
					name: "项目",
					url: "/projects/",
					icon: "material-symbols:work",
				},
				{
					name: "技能",
					url: "/skills/",
					icon: "material-symbols:psychology",
				},
				{
					name: "时间线",
					url: "/timeline/",
					icon: "material-symbols:timeline",
				},
			],
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.png",
	name: "LBF",
	bio: "一个啥也不会的懒人 | 折腾爱好者 | 只希望博客能多一份浏览的人",
	links: [
		{
			name: "哔哩哔哩",
			icon: "fa6-brands:bilibili",
			url: "https://space.bilibili.com/1502095394",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/sd24dghe",
		},
		{
			name: "邮箱",
			icon: "material-symbols:mail",
			url: "mailto:wa_1212@qq.com",
		},
		{
			name: "主博客",
			icon: "material-symbols:home",
			url: "https://lbf.my",
		},
	],

};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};

export const commentConfig: CommentConfig = {
	enable: false,
	twikoo: {
		envId: "https://twikoo.vercel.app",
		lang: "en",
	},
};

export const announcementConfig: AnnouncementConfig = {
	title: "公告",
	content: "欢迎来到我的技术博客！这里主要分享我的学习笔记、项目经验和开源贡献。",
	closable: true,
	link: {
		enable: true,
		text: "了解更多",
		url: "/about/",
		external: false,
	},
};

export const musicPlayerConfig: MusicPlayerConfig = {
	enable: true,
};

export const footerConfig: FooterConfig = {
	enable: false,
};

export const sidebarLayoutConfig: SidebarLayoutConfig = {
	enable: true,
	position: "left",
	components: [
		{
			type: "profile",
			enable: true,
			order: 1,
			position: "top",
			class: "onload-animation",
			animationDelay: 0,
		},
		{
			type: "announcement",
			enable: true,
			order: 2,
			position: "top",
			class: "onload-animation",
			animationDelay: 50,
		},
		{
			type: "categories",
			enable: true,
			order: 3,
			position: "sticky",
			class: "onload-animation",
			animationDelay: 150,
			responsive: {
				collapseThreshold: 5,
			},
		},
		{
			type: "tags",
			enable: true,
			order: 4,
			position: "sticky",
			class: "onload-animation",
			animationDelay: 200,
			responsive: {
				collapseThreshold: 20,
			},
		},
	],

	defaultAnimation: {
		enable: true,
		baseDelay: 0,
		increment: 50,
	},

	responsive: {
		breakpoints: {
			mobile: 768,
			tablet: 1024,
			desktop: 1280,
		},
		layout: {
			mobile: "sidebar",
			tablet: "sidebar",
			desktop: "sidebar",
		},
	},
};

export const sakuraConfig: SakuraConfig = {
	enable: false,
	sakuraNum: 21,
	limitTimes: -1,
	size: {
		min: 0.5,
		max: 1.1,
	},
	speed: {
		horizontal: {
			min: -1.7,
			max: -1.2,
		},
		vertical: {
			min: 1.5,
			max: 2.2,
		},
		rotation: 0.03,
	},
	zIndex: 100,
};

export const pioConfig: import("./types/config").PioConfig = {
	enable: true,
	models: ["/pio/models/pio/model.json"],
	position: "left",
	width: 280,
	height: 250,
	mode: "draggable",
	hiddenOnMobile: true,
	dialog: {
		welcome: "欢迎来到LBF的技术博客!",
		touch: [
			"你好！我是这里的看板娘~",
			"这里有很多技术文章哦!",
			"要不要看看我的最新项目?",
			"欢迎交流技术问题!",
		],
		home: "点击这里返回首页!",
		skin: ["想看看我的新装扮吗?", "新衣服很漂亮呢~"],
		close: "下次再见哦~",
		link: "https://github.com/sd24dghe",
	},
};

export const widgetConfigs = {
	profile: profileConfig,
	announcement: announcementConfig,
	music: musicPlayerConfig,
	layout: sidebarLayoutConfig,
	sakura: sakuraConfig,
	fullscreenWallpaper: fullscreenWallpaperConfig,
	pio: pioConfig,
} as const;

export const umamiConfig = {
  enabled: false,
  shareURL: "https://us.umami.is/api/share/ABCD1234",
  scripts: `
<script defer src="XXXX.XXX" data-website-id="ABCD1234"></script>
  `.trim()
} as const;