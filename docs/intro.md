---
sidebar_position: 1
slug: /
title: Welcome to Modpie
description: Welcome to the Modpie documentation. Fast radial menus, live viewport HUD dragging, and stack panel for Blender.
---

# Welcome to Modpie

<div className="hero-badge-container">
  <span className="badge badge--primary">Modpie Plus 0.9.96</span>
  <span className="badge badge--secondary">Modpie 0.9.96 (Release)</span>
  <span className="badge badge--info">Tested on Blender 4.3, 4.5 LTS, 5.1 & 5.2+</span>
  <span className="badge badge--success">Single Addon Architecture</span>
</div>

Hey there! Welcome to the Modpie documentation.

If you spend a lot of time 3D modeling in Blender, you already know the routine: you add a modifier, your mouse travels all the way over to the Properties editor on the right side of your screen, you hunt through tabs, expand cards, and squint at numeric fields. 

Modpie changes that by bringing your modifiers directly under your cursor in the 3D viewport. With fast radial gestures, real-time viewport dragging with dynamic HUD overlays, and a floating stack panel, you can add, adjust, reorder, and manage modifiers without ever taking your eyes off your model.

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/Adding_Mods.gif" alt="Modpie Workflow Demo" />
  </div>
  <p className="media-caption">Figure: Adding modifiers with a quick radial flick and adjusting parameters live in the viewport.</p>
</div>

---

## Quick Start (Up & Running in 60 Seconds)

Once Modpie is installed and enabled, you only need three main shortcuts to get started:

1. **<kbd>Alt</kbd> + <kbd>M</kbd>**: Opens the **Radial Pie Menu** centered right under your mouse. Flick in any direction to add a modifier.
2. **Move Your Mouse**: As soon as you add a modifier, you are in **Interactive Mode**. Move your mouse to dial in the values live in the viewport.
   - Hold <kbd>Alt</kbd> and scroll your **Wheel Up/Down** to move the modifier up or down in the stack on the fly.
   - Left-click or press <kbd>Enter</kbd> to confirm, or press <kbd>Esc</kbd> to cancel.
3. **<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>M</kbd>**: Opens the **Viewport Modifier Panel** popup so you can see and manage your complete modifier stack without leaving the 3D view.

:::tip Pro Tip: Use Mouse Side Buttons
If your mouse has side/thumb buttons (Mouse Button 4 or 5), mapping them to Modpie in Preferences is a game changer. Your left hand stays anchored on standard navigation keys while your right thumb summons the menu and adjusts values instantly.
:::

---

## Exploring the Documentation

We have organized the documentation into logical sections to help you find exactly what you need:

### 1. [Getting Started](comparison.md)
Start here if you are new to Modpie or deciding between versions:
- **[Modpie vs. Modpie Plus](comparison.md)**: Side-by-side feature comparison between the free and plus tiers.
- **[Installation & Upgrades](installation.md)**: How to install and upgrade without losing any settings.
- **[Shortcuts Cheat Sheet](shortcuts.md)**: Complete quick-reference table for all viewport and modal keys.
- **[Latest Features (v0.9.96)](latest-features.md)**: Detailed breakdown of the latest features and additions in v0.9.96.
- **[What's New & Changelog](changelog.md)**: Release notes and version history.

### 2. [Core Workflows](core-workflows-intro.md)
The everyday tools that make up your modeling loop:
- **[The Radial Pie Menu](pie-menu.md)**: Fast muscle-memory addition and repeat handling.
- **[Object Modifiers Pie](object-pie.md)**: A smart radial menu showing only the modifiers currently on your mesh.
- **[The Viewport Modifier Panel](panel.md)**: Full stack control floating in the 3D view.
- **[Closed Modifier Management](modifier-management.md)**: Managing and reordering modifiers while collapsed.
- **[Inline Modifier Renaming](inline-renaming.md)**: Renaming modifiers directly inside the viewport panel.
- **[Interactive Mode & Viewport HUD](interactive-modal.md)**: Real-time dragging, cursor HUD, and precision controls.
- **[Interactive Stack Reordering](stack-reordering.md)**: Moving modifiers up and down the stack live.
- **[Multi-Object Editing](multi-object.md)**: Batch adding and adjusting across multiple meshes.

### 3. [Key Modifiers & Helpers](key-modifiers-intro.md)
Special interactive helpers built for Blender's most commonly used modifiers:
- **[Mirror Modifier & Axis HUD](mirror-mod.md)**: Visual axis picking, Bisect/Flip controls, and target picking.
- **[Boolean Modifier & Cutter Picker](boolean-mod.md)**: Instant cutter search and single-key operation cycling.
- **[Array Modifier](array-50.md)**: Modern Geometry Nodes support and offset conflict handling.
- **[Shrinkwrap Target Picker](shrinkwrap-target.md)**: 3D raycast target hover-selection in the viewport.
- **[Fitted Lattice](lattice.md)**: 1-click automatic bounding box calculation and fitted cage generation.
- **[Remember Custom Defaults](defaults.md)**: Save your favorite starting values permanently.

### 4. [Modpie Plus](plus-intro.md)
Pipeline, automation, and diagnostic tools for power users:
- **[Panel Presets, Stacks & Sync](panel-presets-stacks-sync.md)**: The Plus toolbar inside your panel.
- **[In-Viewport Slot Customizer](slot-customizer.md)**: 8-direction customizer and arrival values.
- **[Modifier Presets & Stack Templates](presets.md)**: Saving and deploying single presets or entire pipelines.
- **[Live Linking & Stack Sync](sync-link.md)**: Continuous bidirectional modifier linking across objects.
- **[Solo Modifier & Latency Profiler](solo-profiler.md)**: Non-destructive isolation and millisecond performance tracking.
- **[Favorites Preset Pie](favorite-pie.md)**: Dedicated radial menu for your favorite presets.

### 5. [Reference & Architecture](reference-intro.md)
Technical details, preferences configuration, and API notes:
- **[Geometry Nodes Architecture](geometry-nodes.md)**: RNA socket inspection and asset management.
- **[Preferences Reference](preferences.md)**: Comprehensive guide to all settings and conflict alerts.
- **[Panel Behavior & Technical Notes](panel-behavior.md)**: Modal UI loops and viewport focus handling.