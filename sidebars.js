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
        'latest-features',
        'changelog',
        'changelog-archive',
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
        'reference-intro',
        'geometry-nodes',
        'preferences',
        'panel-behavior',
      ],
    },
  ],
};

module.exports = sidebars;