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
      ],
    },
    {
      type: 'category',
      label: 'Core Workflows',
      collapsed: false,
      items: [
        'core-workflows-intro',
        'pie-menu',
        'object-pie',
        'panel',
        'modifier-management',
        'inline-renaming',
        'interactive-modal',
        'stack-reordering',
        'multi-object',
      ],
    },
    {
      type: 'category',
      label: 'Key Modifiers & Helpers',
      collapsed: false,
      items: [
        'key-modifiers-intro',
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
        'plus-intro',
        'panel-presets-stacks-sync',
        'slot-customizer',
        'solo-profiler',
        'evaluation',
        'favorite-pie',
      ],
    },
    {
      type: 'category',
      label: 'Settings & Reference',
      collapsed: false,
      items: [
        'reference-intro',
        'preferences',
        'geometry-nodes',
        'panel-behavior',
      ],
    },
  ],
};

module.exports = sidebars;