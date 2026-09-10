---
sidebar_position: 14
title: Presets, Stacks & Sync
description: Complete guide to the Presets, Stacks, and Sync toolbar and card tools in the Modpie Viewport Panel.
---

# Panel Presets, Stacks & Sync

<div className="hero-badge-container">
  <span className="badge badge--primary">Modpie Plus Exclusive</span>
  <span className="badge badge--success">Viewport Panel Integration</span>
</div>

In **Modpie Plus**, the Viewport Modifier Panel (<kbd>Ctrl + Alt + M</kbd> or sidebar <kbd>N ▸ Modifiers</kbd>) is upgraded with a dedicated power toolbar situated directly beneath the **Add Modifier** header:

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/preset_stacks_sync_panel.png" alt="Preset Stacks Sync panel options" />
  </div>
  <p className="media-caption">Figure 1: The Presets, Stacks, and Sync toolbar in the Modpie Plus panel.</p>
</div>

This **Plus Bar** turns the panel into a high-speed modifier command center—allowing you to load saved recipes, deploy full stacks, link properties across multiple meshes in real time, and copy settings in a single click.

---

## 1. The Presets Dropdown

Clicking the **Presets** button opens a dropdown menu featuring **4 core options** for managing your modifier configurations:

```

    Presets Dropdown
    ├── ⭐ 1. Favourites
    │   └── Crisp Bevel
    ├── 📦 2. Saved Presets (All Modifiers)
    │   ├── Soft Subsurf
    │   └── Mirror X & Y
    ├── ➕ 3. Save a Preset
    └── 🔍 4. Find / Search for Presets
```

<div className="feature-grid">
  <div className="feature-card">
    <div className="feature-card-icon">⭐</div>
    <div className="feature-card-title">1. The Favourites</div>
    <p className="feature-card-desc">
      Your hand-picked, starred modifier recipes pinned at the very top for instant 1-click application, displaying their native Blender modifier type icons.
    </p>
  </div>
  <div className="feature-card">
    <div className="feature-card-icon">📦</div>
    <div className="feature-card-title">2. The Saved Presets</div>
    <p className="feature-card-desc">
      Your complete library of saved single-modifier presets (under "All Modifiers"), organized with clear labels and type icons for quick deployment.
    </p>
  </div>
  <div className="feature-card">
    <div className="feature-card-icon">➕</div>
    <div className="feature-card-title">3. Save a Preset</div>
    <p className="feature-card-desc">
      Instantly captures the active modifier's dialled-in configuration into your library, storing all properties, vectors, and custom Geometry Nodes input sockets.
    </p>
  </div>
  <div className="feature-card">
    <div className="feature-card-icon">🔍</div>
    <div className="feature-card-title">4. Search for Presets</div>
    <p className="feature-card-desc">
      Opens an interactive search picker popup to filter through large preset collections on the fly without scrolling through long menus.
    </p>
  </div>
</div>

### Dynamic Clipboard Integration
When you copy values from any modifier card (using the copy button on the modifier tool row), a dynamic clipboard section automatically appears at the very top of the Presets dropdown:
- **Clipboard: [Modifier Name]**: Displays the currently copied modifier and type.
- **Paste [Name] Values**: Pastes stored parameters onto the matching active modifier.
- **Paste [Name] to Selected**: Broadcasts clipboard values to matching modifiers across all selected meshes (available when multiple objects are selected).

### Detailed Option Reference

| Option | Function | Availability |
| :--- | :--- | :--- |
| **⭐ 1. Favourites** | Instant list of starred favorite modifier recipes | When presets are favorited |
| **📦 2. Saved Presets (All Modifiers)** | Full categorized library of saved single-modifier presets | Always |
| **➕ 3. Save a Preset** | Snapshots the active modifier's settings to your JSON library | Active modifier present |
| **🔍 4. Find / Search for Presets** | Interactive search popup to quickly find and apply presets | Always |
| **Clipboard: Paste Values** | Pastes copied modifier settings onto active mesh | When clipboard contains data |
| **Clipboard: Paste to Selected** | Pastes copied modifier settings across all selected meshes | Multiple objects selected |

### What Gets Saved in a Preset
- **All Writable Properties**: Thickness, bevel width, segment count, angle limits, solver modes.
- **Vectors & Multi-Select Enums**: Mirror axes (`X`, `Y`, `Z`), Array offsets, Decimate Delimit flags.
- **Geometry Nodes Input Sockets**: Stores RNA custom property socket values so procedural modifiers load fully configured.
- **Smart Target Object Pointers**: Target meshes (e.g. Boolean cutters, Shrinkwrap targets) are remembered by name. If the target exists in the scene, it re-links automatically; if not, the field is left empty without error.

---

## 2. The Stacks Menu

Clicking **Stacks** manages entire multi-modifier pipelines:

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/stack_dropdown.png" alt="Stack dropdown" />
  </div>
  <p className="media-caption">Figure 2: Stack dropdown in the Modpie Plus panel.</p>
</div>

### Key Features
- **Live Modifier Count Badges**: Every stack template displays its modifier count right in the label (e.g. `Hard Surface High-Poly (4)`).
- **Save Stack Template (<kbd>+</kbd>)**: Snapshots the active object's entire modifier stack in exact top-to-bottom sequence.
- **Append vs. Replace Deployment**:
  - **Replace Mode**: Clears target objects' existing modifier stacks and builds the template from scratch.
  - **Append Mode**: Appends template modifiers underneath existing work on the target objects.
- **Graceful Compatibility Handling**: If a target object type cannot accept a specific modifier (e.g. applying a mesh-only modifier to a curve), that modifier is safely skipped and reported in the info banner rather than failing the stack.

---

## 3. The Sync Menu

The **Sync** button is enabled whenever you have **two or more objects selected**.

To prevent accidental data loss, the Sync menu is clearly divided into two philosophies:

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/sync_dropdown.png" alt="Sync dropdown" />
  </div>
  <p className="media-caption">Figure 2: The Sync dropdown in the Modpie Plus panel.</p>
</div>

```
┌────────────────────────────────────────────────────────┐
│               Cube  ➔  3 other objects                 │
├────────────────────────────────────────────────────────┤
│  Keep in step (Continuous Live Link)                   │
│    🔗 Link Modifier to Selected                        │
│    🔗 Link All Modifiers to Selected                   │
├────────────────────────────────────────────────────────┤
│  Once, then leave alone (One-Shot Copy)                │
│    🔄 Copy Modifier to Selected                        │
│    🔄 Copy All Settings to Selected                    │
│    📋 Push Stack to Selected                           │
├────────────────────────────────────────────────────────┤
│  🔍 Compare Stacks (Live Stack Diff)                   │
│  ⛓️‍💥 Unlink All                                        │
└────────────────────────────────────────────────────────┘
```

### Direction Clarity Indicator
The top header explicitly states data flow: `[Active Object] ➔ N other objects`. The active object (highlighted in yellow in Blender) is always the **source of truth**.

### A. Keep in Step — Continuous Live Linking
When objects should remain identical as you continue modeling:

- **Link Modifier to Selected**: Links the active modifier across all selected objects. Changing any parameter (e.g. Bevel width or Solidify thickness) on **any** linked object immediately updates all others in real time.
- **Link All Modifiers to Selected**: Establishes continuous live synchronization for the entire modifier stack.
- **Auto-Adds Where Missing**: If a selected object lacks the modifier, Modpie adds it automatically with the linked settings.
- **Stored in `.blend`**: Link memberships are stored as custom properties (`modpie_link`) and persist across save/reload.
- **Independent Display Toggles**: Viewport visibility, render toggle, and edit-mode switches remain per-object so you can hide one object while keeping values linked.
- **Group Chain Badge**: Linked modifiers display a chain icon on their panel card with their group count (e.g. `🔗 4`). Clicking it unlinks just that object.

### B. Once, Then Leave Alone — One-Shot Copying
When you want to transfer values immediately without establishing ongoing dependencies:

| Operation | Action | Adds Where Missing |
| :--- | :--- | :---: |
| **Copy Modifier to Selected** | Copies active modifier parameters to selected objects | **Yes** |
| **Copy All Settings to Selected** | Updates matching modifiers already present on selected objects | No |
| **Push Stack to Selected** | Overwrites selected objects' entire stacks with the active stack | **Yes** |

:::tip Smart Automatic Matching
One-shot copying uses **Automatic Matching** by default:
1. Matches modifiers with identical names (e.g. `Bevel` ➔ `Bevel`).
2. If names differ (e.g. Blender renamed a copy to `Bevel.001`), it matches the first modifier of the same type.
3. Explicit matching by Name, Type, or Stack Position is selectable in the operator redo panel.
:::

### C. Diagnostics & Stack Comparison
- **Compare Stacks (Live Stack Diff)**: Opens a visual side-by-side readout of selected objects' stacks. Highlights missing modifiers, extra modifiers, and mismatched property values with color coding.
- **Unlink All**: Instantly breaks all live links on the active object, leaving existing property values untouched.

---

## 4. Modifier Card Quick-Action Tools

In addition to the main Plus bar, Modpie Plus adds specialized power buttons directly onto each modifier card's tool row:

```
┌────────────────────────────────────────────────────────┐
│ ≡  Bevel                                     👁 💻 ✓ ✕ │
├────────────────────────────────────────────────────────┤
│ [✓ Remember Default] [👁 Solo] [⬆ Apply Up] [🔄 Sync] [🔗 3] │
└────────────────────────────────────────────────────────┘
```

| Tool Button | Icon | Action |
| :--- | :---: | :--- |
| **Remember Default** | `FILE_TICK` | Saves the modifier's current property values into `defaults.json` as permanent defaults for all future additions. |
| **Solo Modifier** | `RESTRICT_VIEW_OFF` | Isolates this modifier by temporarily disabling all others. The previous visibility state is remembered; clicking again restores the exact previous visibility. |
| **Apply Up To Here** | `SORT_ASC` | Non-destructively bakes the stack from the top down to this modifier, leaving all modifiers below it active and live. |
| **Sync Modifier** | `UV_SYNC_SELECT` | One-click one-shot copy of this modifier's parameters to all selected objects. |
| **Link / Unlink Group** | `LINKED` | Displays group size (e.g. `🔗 3`) if linked. Clicking unlinks this object. If unlinked, clicking creates a live link group across selected objects. |

---

## 5. Stack-Wide Tool Row Buttons

At the bottom of the modifier stack, Modpie Plus adds stack-wide management controls:

- **Save Stack Template (<kbd>➕</kbd>)**: One-click quick button to save the entire stack as a reusable template.
- **Clear Solo (<kbd>↺</kbd>)**: If any modifier is currently isolated in solo mode, this button highlights to let you restore full stack visibility in a single click.

---

## Summary Comparison: Which Tool to Choose?

| Scenario | Recommended Option | Location |
| :--- | :--- | :--- |
| Storing a single perfected modifier for future files | **Save Modifier Preset** | *Presets ▸ Save* |
| Storing an entire multi-modifier pipeline | **Save Stack Template** | *Stacks ▸ Save* |
| Multiple bolts/panels that must stay identical forever | **Link Modifier to Selected** | *Sync ▸ Keep in step* |
| Quick transfer of bevel settings to other meshes right now | **Copy Modifier to Selected** | Card `🔄` button or *Sync ▸ Copy* |
| Isolating a slow modifier to inspect geometry | **Solo Modifier** | Card `👁` solo button |
| Comparing why two meshes look different | **Compare Stacks** | *Sync ▸ Compare Stacks* |
| Setting your personal default bevel width | **Remember Default** | Card `✓` remember button |
