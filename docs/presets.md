---
sidebar_position: 16
title: Preset Library
description: Save, load, search, and manage single modifier presets and entire stack templates in Modpie Plus.
---

# Modifier Presets & Stack Templates Library

<div className="hero-badge-container">
  <span className="badge badge--primary">Modpie Plus Exclusive</span>
</div>

Dialing in complex modifier settings takes time. **Modpie Plus** provides a complete preset management library directly in the 3D viewport, letting you save your perfected modifier recipes and deploy them across any asset in a single click.

<div className="media-card">
  <div className="media-container">
    {/* To add your GIF/screenshot: replace below with <img src="/modpie-docs/img/media/presets_templates.gif" alt="Presets and Stack Templates" /> */}
    <div className="media-placeholder">
      <span className="media-placeholder-icon">⭐</span>
      <span className="media-placeholder-title">Presets & Stack Templates Showcase GIF</span>
      <span className="media-placeholder-hint">Drop file into static/img/media/presets_templates.gif</span>
    </div>
  </div>
  <p className="media-caption">Figure 10: The Presets and Templates library manager in Modpie Plus.</p>
</div>

---

## 1. Single Modifier Presets

A modifier preset stores the look and configuration of a single modifier:

- **Saving a Preset**: Click the star icon (<kbd>★</kbd>) on any modifier's tool row in the panel, or choose *Presets ▸ Save*.
- **Applying a Preset**: Select it from the *Presets* menu, trigger it from the Favorites Pie (<kbd>Shift + Alt + M</kbd>), or search for it via *Search Presets*.
- **Batch Application**: Applying a preset to multiple selected objects respects your *Affect All Selected Objects* setting.

### What Gets Stored
- Every writable modifier property.
- Vector properties (such as Mirror axes or Array offsets).
- Multi-select enums (such as Decimate Delimit flags).
- **Geometry Nodes Input Sockets**: Geometry Nodes inputs live as custom properties rather than RNA; Modpie stores them so applying a preset reconstructs the full procedural setup rather than an empty node group.

### Smart Object Pointers
Target pointers (such as a Boolean cutter or Shrinkwrap target) are stored by name. If you apply a Boolean preset that used an object named `Cutter`, Modpie re-links to `Cutter` automatically. If that object does not exist in the current file, the target field is left empty without aborting the preset.

### Quick Clipboard (Copy & Paste Values)
Modpie Plus includes a modifier clipboard:
- Copy values from any modifier.
- Paste values onto matching modifiers on the active object or across all selected objects with one click.

---

## 2. Stack Templates

A stack template captures an entire sequence of modifiers in order:

- **Saving a Stack**: Choose *Stacks ▸ Save* in the modifier panel.
- **Applying a Stack**:
  - **Replace Mode**: Replaces the target object's entire modifier stack with the saved template.
  - **Append Mode**: Appends the template modifiers below existing modifiers without overwriting your current work.
- **Graceful Error Handling**: If a target object cannot take a specific modifier in the stack (e.g. curve-incompatible modifiers), that modifier is safely skipped and reported in the info banner rather than failing the whole stack.

---

## 3. Presets & Stacks on the Pie Menu

By default, Modpie Plus places **Presets & Stacks on South-East (SE)** of the radial pie menu, right beside the South panel slot. 

This single menu lists both single modifiers and whole stacks in labeled groups. The pie slot badge displays the live count of all items in your library.

---

## 4. Portability & JSON Export

Presets are stored in a clean JSON file in Blender's user configuration directory, so they follow you between projects. 

In **Edit ▸ Preferences ▸ Add-ons ▸ Modpie ▸ Plus**, you can:
- Rename, favorite, or delete presets.
- Export any individual preset as a standalone `.json` file to share with teammates.
- Export or import your entire library in one click.
