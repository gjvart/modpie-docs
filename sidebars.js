// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'intro',
        'comparison',
        'installation',
        'shortcuts',
        'changelog',
      ],
    },
    {
      type: 'category',
      label: 'Core Workflows',
      collapsed: false,
      items: [
        'pie-menu',
        'panel',
        'interactive-modal',
        'multi-object',
      ],
    },
    {
      type: 'category',
      label: 'Key Modifiers & Helpers',
      collapsed: false,
      items: [
        'mirror-mod',
        'boolean-mod',
        'array-50',
        'shrinkwrap-target',
        'lattice',
        'defaults',
      ],
    },
    {
      type: 'category',
      label: 'Modpie Plus',
      collapsed: false,
      items: [
        'panel-presets-stacks-sync',
        'slot-customizer',
        'presets',
        'sync-link',
        'solo-profiler',
        'favorite-pie',
      ],
    },
    {
      type: 'category',
      label: 'Reference & Architecture',
      collapsed: false,
      items: [
        'geometry-nodes',
        'preferences',
        'panel-behavior',
      ],
    },
  ],
};

module.exports = sidebars;