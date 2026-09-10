---
sidebar_position: 1
slug: /
title: Overview
description: High-speed radial menu, live interactive viewport dragging with real-time HUD overlays, and modifier stack panel for Blender. Tested for Blender 4.3, 4.5 LTS, 5.1, and 5.2+.
---

# Modpie & Modpie Plus

<div className="hero-badge-container">
  <span className="badge badge--primary">Modpie Plus 9.8.1</span>
  <span className="badge badge--secondary">Modpie Free 0.9.81</span>
  <span className="badge badge--info">Tested on Blender 4.3, 4.5 LTS, 5.1 & 5.2+</span>
  <span className="badge badge--success">Single Addon Architecture</span>
  <span className="badge badge--secondary">Zero Lost Settings on Upgrade</span>
</div>

**Modifiers where you need them.**

Modpie is a high-speed contextual radial menu, live interactive viewport dragging tool with real-time HUD overlays, and a complete modifier stack panel directly in Blender's 3D viewport.

Instead of constantly hunting through Blender's Properties editor or searching nested menus, Modpie puts the tools you use most directly under your cursor.

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/Adding_Mods.gif" alt="Modpie Workflow Demo" />
  </div>
  <p className="media-caption">Figure 1: Modpie workflow — rapid radial adding, live dragging, and instant panel access.</p>
</div>

---

## Two Tiers, One Unified Addon

Modpie is distributed in two builds from a single codebase:
- **Modpie (Free)**: The complete radial pie menu (5 upper directions) and the viewport modifier stack panel (`Ctrl + Alt + M`), live interactive dragging with viewport HUD, duplicate repeat handling, smart starting values, and modern Blender 5.0+ Geometry Nodes modifier support.
- **Modpie Plus**: Unlocks all 8 radial directions, in-viewport slot customization with custom arrival values, modifier presets & stack templates, continuous multi-object **Live Linking** across meshes, **Solo modifier isolation**, and the real-time **Evaluation Profiler**.

:::tip Zero Lost Settings on Upgrade
Both versions share the internal addon ID `modpie`. When you upgrade to Modpie Plus, install the Plus zip directly over the free version. Blender updates the files in place, preserving 100% of your configured pie slots, custom labels, keymaps, and preferences.
:::

---

## Step-by-Step Documentation Guide

Follow this documentation progressively to master the full power of Modpie:

### 1. Getting Started
- **[Modpie vs. Modpie Plus](comparison.md)**: Complete feature-by-feature matrix comparing Free and Plus.
- **[Installation & Upgrades](installation.md)**: Installing and seamlessly upgrading to Plus in under a minute.
- **[Shortcuts Cheat Sheet](shortcuts.md)**: Full reference for Viewport hotkeys, interactive modal controls, and modifier-specific keys.
- **[What's New & Changelog](changelog.md)**: Full release notes, current version improvements, and complete version history.

### 2. Core Workflows
- **[The Radial Pie Menu (`Alt + M`)](pie-menu.md)**: Radial navigation, Free 5-way vs. Plus 8-way layouts, and smart repeat handling (`Click` to edit, `Shift + Click` to stack, `×n` badges).
- **[The Viewport Modifier Panel (`Ctrl + Alt + M`)](panel.md)**: Full stack popup & sidebar (`N ▸ Modifiers`), collapsed Apply buttons, sibling jumpers, texture creation, and mesh binding.
- **[Interactive Modal Dragging & HUD](interactive-modal.md)**: Cursor-following HUD readout, on-mesh RGB axis badge, 3D evaluation guides, big bottom readout, and precision dragging.
- **[Multi-Object Editing](multi-object.md)**: How *Affect All Selected Objects* adds and drags modifiers simultaneously across multiple meshes.

### 3. Key Modifiers & Smart Helpers
- **[Mirror Modifier & Axis HUD](mirror-mod.md)**: Visual axis picking on edit, persistent left HUD card, clickable axis/bisect/flip buttons.
- **[Boolean Cutter Prompt & Cycling](boolean-mod.md)**: Target cutter search prompt when nothing is selected, operation cycling with `A` (`D U I A`).
- **[Blender 5.0+ Modern Array vs Legacy](array-50.md)**: Native Geometry Nodes socket controls (`properties.inputs`) and Relative/Constant mutual exclusivity.
- **[Shrinkwrap Target Picker & Raycast](shrinkwrap-target.md)**: Scene object picker, `T` key 3D raycast hover-pick, candidate cycling, Grease Pencil de-duplication.
- **[Automatic Fitted Lattice](lattice.md)**: 1-click bounding box calculation and cage generation with panel resolution sliders.
- **[Remember as Default](defaults.md)**: Custom permanent startup defaults saved to `defaults.json`.

### 4. Modpie Plus Power Features
- **[Panel Presets, Stacks & Sync](panel-presets-stacks-sync.md)**: <span className="badge badge--primary">Plus</span> The Plus toolbar under Add Modifier (`Presets`, `Stacks`, `Sync`) and card tools.
- **[In-Viewport Slot Customizer & 3×3 Grid](slot-customizer.md)**: <span className="badge badge--primary">Plus</span> Configure slots directly in the viewport with custom arrival values and drag toggles.
- **[Modifier Presets & Stack Templates](presets.md)**: <span className="badge badge--primary">Plus</span> Save and deploy single modifier presets and entire stacks (Append/Replace).
- **[Multi-Object Syncing & Live Linking](sync-link.md)**: <span className="badge badge--primary">Plus</span> Continuous live links between objects (`modpie_link`) vs. one-shot copying.
- **[Solo Modifier, Profiler & Apply-Up-To-Here](solo-profiler.md)**: <span className="badge badge--primary">Plus</span> Non-destructive solo isolation, millisecond latency profiler bars, and partial stack baking.
- **[Favorites Preset Pie](favorite-pie.md)**: <span className="badge badge--primary">Plus</span> Dedicated radial access for your favorite presets.

### 5. Reference & Architecture
- **[Geometry Nodes Workflow](geometry-nodes.md)**: Keep in File (Fake User pinning), Export `.blend`, Import `.blend`.
- **[Preferences Reference](preferences.md)**: Full configuration reference for Pie Slots, Keymaps, Panel, Interactive HUD, and Plus tabs.
- **[Panel Focus Management](panel-behavior.md)**: Smart auto-closing during interactive modal dragging.