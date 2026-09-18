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

In **Modpie Plus**, the Modifier Panel is equipped with the **Plus Bar** directly beneath *Add Modifier*. 

This toolbar transforms the panel into a command center for saving modifier recipes, deploying multi-modifier pipelines, and synchronizing settings across multiple objects in real time.

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/preset_stacks_sync_panel.png" alt="The Plus Bar in Modpie Plus" />
  </div>
  <p className="media-caption">Figure 1: The Presets, Stacks, and Sync toolbar situated directly beneath Add Modifier.</p>
</div>

---

## The Three Pillars: Definitions & Roles

Understanding the difference between **Presets**, **Stacks**, and **Sync** makes high-speed modeling effortless:

| Pillar | Definition | Primary Use Case |
| :--- | :--- | :--- |
| **1. Presets** | A saved configuration of a **single modifier** (properties, limits, and settings). | Storing and reusing perfected modifier setups (e.g. *Hard Surface Bevel*, *Glass Solidify*). |
| **2. Stacks** | A complete **sequence of multiple modifiers** saved in their exact evaluation order. | Deploying whole procedural pipelines (e.g. *Mirror + Bevel + Subsurf*) across new meshes in one click. |
| **3. Sync** | Tools for transferring or linking modifiers **across multiple selected objects**. | Keeping multiple meshes identical continuously (*Live Link*) or broadcasting settings once (*Copy*). |

---

## 1. The Presets Dropdown

Clicking **Presets** manages single-modifier recipes and clipboard transfers:

<div className="feature-grid">
  <div className="feature-card">
    <div className="feature-card-icon">⭐</div>
    <div className="feature-card-title">1. Favourites</div>
    <p className="feature-card-desc">
      Your hand-picked, starred modifier recipes pinned at the top for instant 1-click application.
    </p>
  </div>
  <div className="feature-card">
    <div className="feature-card-icon">📦</div>
    <div className="feature-card-title">2. Saved Presets</div>
    <p className="feature-card-desc">
      Your complete library of saved single modifiers, organized by name and native modifier type icons.
    </p>
  </div>
  <div className="feature-card">
    <div className="feature-card-icon">➕</div>
    <div className="feature-card-title">3. Save a Preset</div>
    <p className="feature-card-desc">
      Instantly snapshots the active modifier's parameters, limits, and custom Geometry Nodes inputs.
    </p>
  </div>
  <div className="feature-card">
    <div className="feature-card-icon">🔍</div>
    <div className="feature-card-title">4. Search Presets</div>
    <p className="feature-card-desc">
      Interactive search picker popup to filter through your library on the fly without scrolling long menus.
    </p>
  </div>
</div>

### Dynamic Clipboard (Copy & Paste)
When you click the copy icon (<kbd>📋</kbd>) on any modifier card, a live clipboard section automatically appears at the top of the **Presets** menu:
- **Paste [Modifier] Values**: Pastes copied parameters onto the matching active modifier.
- **Paste [Modifier] to Selected**: Broadcasts copied settings to matching modifiers across all selected meshes.

---

## 2. The Stacks Menu

Clicking **Stacks** lets you deploy full multi-modifier pipelines in seconds:

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/stack_dropdown.png" alt="Stack dropdown in Modpie Plus" />
  </div>
  <p className="media-caption">Figure 2: The Stacks dropdown menu with live count badges.</p>
</div>

### Key Features
- **Live Modifier Count Badges**: Every stack template displays its total modifier count in its label (e.g. `B-M-Subd (3)`).
- **Save Stack Template (<kbd>➕</kbd>)**: Snapshots the active object's entire modifier stack in exact top-to-bottom sequence.
- **Two Deployment Modes**:
  - **Append Mode**: Adds the template modifiers beneath existing modifiers without touching current work.
  - **Replace Mode**: Replaces the target object's entire modifier stack with the template.
- **Batch Deployment**: Select multiple meshes and deploy a template across all of them at once.

---

## 3. The Sync Menu (Multi-Object Tools)

The **Sync** button enables whenever **two or more objects are selected**.

The header displays a **Direction Indicator** showing the flow of data: `[Active Object] ➔ N other objects`. The active object (highlighted yellow in Blender) is always the **source of truth**.

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/sync_dropdown.png" alt="Sync dropdown in Modpie Plus" />
  </div>
  <p className="media-caption">Figure 3: The Sync dropdown showing Live Linking, One-Shot Copy, and Stack Comparison.</p>
</div>

The menu is divided into two distinct sync philosophies:

### A. Keep in Step — Continuous Live Linking
When objects must remain synchronized as you continue modeling:
- **Link Modifier to Selected**: Connects the active modifier across all selected objects. Adjusting a property on *any* linked object immediately updates all others in real time.
- **Link All Modifiers to Selected**: Synchronizes the entire modifier stack across selected meshes.
- **Auto-Adds Where Missing**: If a selected object lacks the modifier, Modpie adds it automatically with the linked parameters.
- **Persistent in `.blend`**: Link memberships survive file saving and reloading.
- **Group Chain Badge (`🔗`)**: Linked modifiers display a chain badge with their group count (e.g. `🔗 4`). Clicking it unlinks just that object.

### B. Once, Then Leave Alone — One-Shot Copying
When you want to transfer values immediately without establishing ongoing connections:
- **Copy Modifier to Selected (`modpie.sync_modifier`)**: Copies active modifier parameters to selected objects (adds the modifier if missing).
- **Copy All Modifiers to Selected (`modpie.sync_stack`)**: Copies the entire modifier stack from the active object across all selected targets.
- **Replace Stacks with This One (`modpie.replace_stack`)**: Overwrites selected objects' entire stacks with the active object's stack.

### C. Compare with Selected (Stack Diff)
- Opens a side-by-side comparison readout highlighting missing modifiers, extra modifiers, and mismatched property values across selected meshes.
- **Unlink All**: Instantly breaks all live links on the active object, leaving current property values untouched.

---

## 4. Modifier Card Power Tools

In addition to the toolbar, Modpie Plus adds diagnostic and workflow power buttons directly onto each modifier card:

| Button | Tool | What It Does |
| :---: | :--- | :--- |
| `FILE_TICK` | **[Remember Default](defaults.md)** | Saves current settings as permanent defaults for all future additions. |
| `RESTRICT_VIEW_OFF` | **[Solo Modifier](solo-profiler.md)** | Temporarily isolates this modifier by hiding all others (with 1-click restore). Also interfaces with the **Evaluation Profiler** (ms latency). |
| `SORT_ASC` | **Apply Up To Here** | Non-destructively bakes the stack from the top down to this modifier, keeping lower modifiers live. |
| `UV_SYNC_SELECT` | **One-Click Sync** | Instantly copies this modifier's parameters across all selected objects. |
| `LINKED` | **Live Link Status** | Displays group count (e.g. `🔗 3`) and toggles live linking membership. |

---

## Summary: Which Tool to Choose?

| Goal | Recommended Tool | Location |
| :--- | :--- | :--- |
| Reusing a single perfected modifier | **Save Modifier Preset** | *Presets ▸ Save a Preset* |
| Reusing an entire multi-modifier pipeline | **Save Stack Template** | *Stacks ▸ Save Stack Template* |
| Keeping bolts/panels identical forever | **Link Modifier to Selected** | *Sync ▸ Keep in step* |
| Quick 1-time transfer of settings to other meshes | **Copy Modifier to Selected** | Card `↗` button or *Sync ▸ Once, then leave alone* |
| Isolating a slow modifier to inspect geometry | **Solo Modifier** | Card `👁` solo button |
| Comparing why two meshes look different | **Compare with Selected** | *Sync ▸ Compare with Selected* |
| Setting your personal default startup values | **Remember Default** | Card `FILE_TICK` button |

