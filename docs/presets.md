---
sidebar_position: 16
title: Presets & Stack Templates
description: Save, apply, and reuse single modifier presets and complete multi-modifier pipelines in Modpie Plus.
---

# Modifier Presets & Stack Templates

<div className="hero-badge-container">
  <span className="badge badge--primary">Modpie Plus Exclusive</span>
  <span className="badge badge--success">Time-Saving Workflow</span>
</div>

:::tip Unified Guide
In Modpie Plus, **Presets and Stack Templates** live in the Viewport Panel toolbar directly alongside Live Linking and Multi-Object Sync. For the full all-in-one guide covering presets, stack pipelines, live linking, and card tools, see **[Presets, Stacks & Multi-Object Sync](panel-presets-stacks-sync.md)**.
:::

Dialing in complex modifier settings repeatedly slows down your modeling. **Modpie Plus** provides a complete preset and template system directly in the 3D viewport—allowing you to snapshot your favorite modifier setups and apply them instantly to any mesh.

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/modpie_pie_presets_stacks.gif" alt="Presets and Stack Templates in Modpie Plus" />
  </div>
  <p className="media-caption">Figure: Accessing saved modifier presets and stack templates directly in the viewport.</p>
</div>

---

## What Are Presets & Stacks?

Modpie Plus organizes your saved modifier configurations into two clear tiers:

| Type | What It Does | Best For |
| :--- | :--- | :--- |
| **Single Modifier Presets** | Saves the exact properties, limits, and settings of a **single** modifier. | Perfected Bevels (e.g. *Hard Surface 3-Segment*), custom Solidify thicknesses, glass/cloth setups, and configured Geometry Nodes. |
| **Stack Templates** | Captures an **entire sequence** of modifiers in their exact evaluation order. | Reusable multi-modifier pipelines like *SubD Prep* (Mirror + Bevel + Subsurf) or *Non-Destructive Boolean Pipeline*. |

---

## 1. Single Modifier Presets

- **Save in 1 Click**: Click **Presets ▸ Save a Preset** in the panel to capture the active modifier's configuration into your library.
- **Instant Deployment**: Apply presets from the panel **Presets** dropdown, the radial pie menu (**Presets & Stacks** on SE), or the **Favorites Pie** (<kbd>Shift + Alt + M</kbd>).
- **Interactive Search**: Use **Find / Search for Presets** to filter through your library on the fly without scrolling through long menus.
- **Smart Target Pointers**: Modifiers that target other objects (like Boolean cutters or Shrinkwrap targets) remember target names. If the target exists in your scene, Modpie re-links it automatically.
- **Live Modifier Clipboard**: Copy settings from any modifier card (<kbd>📋</kbd>) and paste them onto matching modifiers across one or multiple selected objects with one click.

---

## 2. Multi-Modifier Stack Templates

- **Save Entire Stacks**: Click **Stacks ▸ Save Stack Template** to store the active object's entire modifier stack in exact top-to-bottom sequence.
- **Two Deployment Modes**:
  - **Append Mode**: Adds the template modifiers beneath your existing stack without touching current modifiers.
  - **Replace Mode**: Cleanly replaces the target object's entire modifier stack with the template.
- **Batch Deployment**: Select multiple objects in the viewport and deploy a template across all of them simultaneously.

---

## 3. Portability & Storage

Your presets live in a clean `presets.json` file inside Blender's user configuration folder:
- **Persistent Across Projects**: Any preset or template you save is immediately available in all current and future `.blend` files.
- **Easy Sharing**: Export individual presets or your entire library to share with team members via **Preferences ▸ Plus ▸ Preset Library Manager**.

---

For complete details on using presets alongside live linking and multi-object tools, see the main **[Presets, Stacks & Multi-Object Sync](panel-presets-stacks-sync.md)** guide.
