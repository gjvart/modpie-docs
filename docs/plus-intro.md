---
sidebar_position: 1
title: Overview
description: A quick introduction to the power features and pipeline tools in Modpie Plus.
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# About Modpie Plus

<div className="hero-badge-container">
  <span className="badge badge--primary">Modpie Plus Exclusive</span>
</div>

Welcome to the **Modpie Plus** section.

If the free version of Modpie is about speed and tactile in-viewport control for individual meshes, **Modpie Plus** is built for artists, animators, and studios who need **pipeline automation, multi-object synchronization, and diagnostics**.

When you work on complex scenes with dozens or hundreds of objects, dialing in the same modifier settings over and over or manually copying stacks between meshes quickly becomes tedious. Modpie Plus adds a complete suite of workflow tools to eliminate that repetition.

---

## The Four Pillars of Modpie Plus

Modpie Plus expands the core experience in four major areas:

  <div className="media-container">
    <ThemedImage
      alt="Modpie Plus: Four things it does"
      sources={{
        light: useBaseUrl('/img/media/Modpie Feature Grid-selection (1).png'),
        dark: useBaseUrl('/img/media/Modpie Feature Grid-selection.png'),
      }}
    />
  </div>

1. **Presets & Stack Templates**: Snapshot your favorite modifier recipes (like *Hard-Surface Bevel*, *Curved Glass Solidify*, or a complete 5-modifier high-poly pipeline) and apply them to any mesh with one click.
2. **Continuous Live Linking**: Link modifiers across multiple objects so when you tweak a parameter on one mesh, every linked mesh updates in real-time.
3. **In-Viewport 8-Direction Slot Customizer**: Unlock all 8 directions on the radial menu, and customize slot assignments, labels, and arrival values right inside the 3D viewport without opening Blender Preferences.
4. **Non-Destructive Solo & Profiler**: Isolate any modifier's visual contribution with one click (<kbd>Alt</kbd> + <kbd>H</kbd>), and diagnose scene lag with a live millisecond evaluation profiler.

---

## What You Will Find in This Section

Here is a quick roadmap of the guides in this section:

- **[Panel Presets, Stacks & Sync](panel-presets-stacks-sync.md)**: A complete tour of the Plus Bar that sits directly inside your viewport panel.
- **[In-Viewport Slot Customizer](slot-customizer.md)**: How to unfold the 8-way compass editor in the viewport and set custom arrival values.
- **[Modifier Presets & Stack Templates](presets.md)**: Creating, saving, favoriting, and applying single presets and full multi-modifier stacks.
- **[Live Linking & Stack Sync](sync-link.md)**: Continuous bidirectional linking, one-shot stack copying, and the visual stack diff report.
- **[Solo Modifier & Apply-Up-To-Here](solo-profiler.md)**: Non-destructive modifier isolation and baking down to any point in the stack.
- **[Evaluation Profiler](evaluation.md)**: Real-time modifier latency benchmarking, bottleneck pinpointing, and visual load bars.
- **[Favorites Preset Pie](favorite-pie.md)**: Accessing your favorite presets directly through a dedicated radial pie menu (<kbd>Shift + Alt + M</kbd>).

---

:::tip Seamless Upgrade
Modpie Free and Modpie Plus share the same addon identifier (`modpie`). Upgrading preserves 100% of your saved slots, preferences, and custom keymaps without losing a single setting.
:::
