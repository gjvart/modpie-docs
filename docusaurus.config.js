// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Modpie',
  tagline: 'Modifiers where you need them. Fast radial menus, live viewport HUD dragging, and stack panel for Blender.',
  favicon: 'img/favicon.ico',

  // ==========================================
  // GITHUB PAGES / DOMAIN
  // ==========================================
  url: 'https://gjvart.github.io',
  baseUrl: '/modpie-docs/',

  organizationName: 'gjvart',
  projectName: 'modpie-docs',
  trailingSlash: false,

  // ==========================================
  // LINK VALIDATION
  // ==========================================
  onBrokenLinks: 'warn',

  // ==========================================
  // PRESETS
  // ==========================================
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // ==========================================
  // WEBSITE THEME
  // ==========================================
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Modpie',
        logo: {
          alt: 'Modpie Logo',
          src: 'img/modpie_logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/comparison',
            label: 'Free vs Plus',
            position: 'left',
          },
          {
            to: '/shortcuts',
            label: 'Shortcuts',
            position: 'left',
          },
          {
            to: '/changelog',
            label: "What's New",
            position: 'left',
          },
          {
            href: 'https://superhivemarket.com',
            label: 'Superhive',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Getting Started',
            items: [
              {
                label: 'Overview',
                to: '/',
              },
              {
                label: 'Free vs Plus',
                to: '/comparison',
              },
              {
                label: 'Installation',
                to: '/installation',
              },
              {
                label: 'Shortcuts Cheat Sheet',
                to: '/shortcuts',
              },
              {
                label: "What's New & Changelog",
                to: '/changelog',
              },
            ],
          },
          {
            title: 'Core Workflows',
            items: [
              {
                label: 'Radial Pie Menu',
                to: '/pie-menu',
              },
              {
                label: 'Viewport Panel',
                to: '/panel',
              },
              {
                label: 'Interactive Modal & HUD',
                to: '/interactive-modal',
              },
              {
                label: 'Multi-Object Editing',
                to: '/multi-object',
              },
            ],
          },
          {
            title: 'Modpie Plus',
            items: [
              {
                label: 'Panel: Presets, Stacks & Sync',
                to: '/panel-presets-stacks-sync',
              },
              {
                label: 'In-Viewport Slot Customizer',
                to: '/slot-customizer',
              },
              {
                label: 'Presets & Templates',
                to: '/presets',
              },
              {
                label: 'Live Linking & Syncing',
                to: '/sync-link',
              },
              {
                label: 'Solo & Profiler',
                to: '/solo-profiler',
              },
              {
                label: 'Favorites Preset Pie',
                to: '/favorite-pie',
              },
            ],
          },
          {
            title: 'Marketplace',
            items: [
              {
                label: 'Modpie on Superhive',
                href: 'https://superhivemarket.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Modpie & Modpie Plus. Built for Blender Artists.`,
      },
    }),
};

module.exports = config;