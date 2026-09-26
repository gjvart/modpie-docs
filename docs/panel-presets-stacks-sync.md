---
sidebar_position: 14
title: Presets, Stacks & Multi-Object Sync
description: Complete guide to saving modifier presets, deploying multi-modifier pipelines, and live-linking settings across multiple objects in Modpie Plus.
---

# Presets, Stacks & Multi-Object Sync

<div className="hero-badge-container">
  <span className="badge badge--primary">Modpie Plus Exclusive</span>
  <span className="badge badge--success">Viewport Panel Integration</span>
</div>

In **Modpie Plus**, the Viewport Modifier Panel features the **Plus Bar** located directly underneath the *Add Modifier* row.

This bar turns the panel into a command center for your entire procedural workflow. Instead of re-configuring common modifiers by hand or copying stacks between meshes one by one, you can save reusable recipes, deploy multi-modifier stacks, and keep multiple objects live-linked in real time.

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/preset_stacks_sync_panel.png" alt="The Plus Bar in Modpie Plus" />
  </div>
  <p className="media-caption">Figure 1: The Presets, Stacks, and Sync toolbar directly beneath Add Modifier in the Modpie Panel.</p>
</div>

---

## The Three Pillars: Definitions & Roles

Understanding the difference between **Presets**, **Stacks**, and **Sync** makes complex multi-object modeling fast and intuitive:

| Pillar | What It Is | Best Used For |
| :--- | :--- | :--- |
| **1. Presets** | A saved configuration of a **single modifier** (properties, limits, and settings). | Storing and reusing perfected modifier setups (e.g. *Hard Surface Bevel*, *Glass Solidify*, *SubD Crease*). |
| **2. Stacks** | A complete **sequence of multiple modifiers** saved in their exact evaluation order. | Deploying full procedural pipelines (e.g. *Mirror + Bevel + Subsurf*) across new meshes with one click. |
| **3. Sync** | Tools for copying or continuously linking modifiers **across multiple selected objects**. | Keeping multiple meshes identical in real time (*Live Link*) or transferring settings once (*One-Shot Copy*). |

---

## 1. The Presets Dropdown & Clipboard

Clicking **Presets** opens your single-modifier library and clipboard tools:

<div className="feature-grid">
  <div className="feature-card">
    <div className="feature-card-icon">⭐</div>
    <div className="feature-card-title">1. Favourites</div>
    <p className="feature-card-desc">
      Your hand-picked, starred modifier recipes pinned right at the top for instant 1-click application.
    </p>
  </div>
  <div className="feature-card">
    <div className="feature-card-icon">📦</div>
    <div className="feature-card-title">2. Saved Presets</div>
    <p className="feature-card-desc">
      Your complete library of saved single modifiers, neatly organized by name and native modifier type icons.
    </p>
  </div>
  <div className="feature-card">
    <div className="feature-card-icon">➕</div>
    <div className="feature-card-title">3. Save a Preset</div>
    <p className="feature-card-desc">
      Instantly snapshots the active modifier's parameters, limits, and custom Geometry Nodes inputs into your library.
    </p>
  </div>
  <div className="feature-card">
    <div className="feature-card-icon">🔍</div>
    <div className="feature-card-title">4. Search Presets</div>
    <p className="feature-card-desc">
      An interactive search popup to filter through your preset library on the fly without scrolling through long menus.
    </p>
  </div>
</div>

### Dynamic Clipboard (Copy & Paste)
When you click the copy icon (<kbd>📋</kbd>) on any modifier card, a live clipboard section automatically appears at the top of the **Presets** dropdown:
- **Paste [Modifier] Values**: Pastes copied parameters onto the matching active modifier.
- **Paste [Modifier] to Selected**: Broadcasts copied settings to matching modifiers across all selected meshes in one click.

### Smart Target Pointers
Modifiers that reference other scene objects (such as Boolean cutters or Shrinkwrap targets) remember target object names. If the target object exists in your current scene, Modpie reconnects it automatically. If not, the target field is cleanly left unassigned without raising errors.

### Where Presets Are Stored
Your presets are stored in a clean `presets.json` file inside Blender's user configuration folder. Any preset you save is immediately available across all your `.blend` files, and you can easily export or share your library with teammates via **Preferences ▸ Plus ▸ Preset Library Manager**.

---

## 2. The Stacks Menu: Multi-Modifier Pipelines

Clicking **Stacks** lets you deploy complete procedural stacks across any mesh in seconds:

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/stack_dropdown.png" alt="Stack dropdown in Modpie Plus" />
  </div>
  <p className="media-caption">Figure 2: The Stacks dropdown menu with live modifier count badges.</p>
</div>

### Key Features
- **Live Modifier Count Badges**: Every stack template displays its total modifier count in its label (e.g. `Hard Surface (3)`, `SubD Prep (4)`).
- **Save Stack Template (<kbd>➕</kbd>)**: Snapshots the active object's entire modifier stack in exact top-to-bottom sequence.
- **Two Deployment Modes**:
  - **Append Mode**: Adds the template modifiers beneath your existing modifiers without altering what you have already built.
  - **Replace Mode**: Cleanly replaces the target object's entire modifier stack with the template.
- **Batch Deployment**: Select several meshes in the 3D viewport and apply a stack template across all of them at once.

---

## 3. Multi-Object Sync & Live Linking

Managing modifiers across dozens of related objects is often tedious in Blender. The **Sync** dropdown enables automatically whenever **two or more objects are selected**.

### Direction Clarity: Know Where Data Flows
The Sync menu header displays a clear **Direction Indicator**: `[Active Object] ➔ N other objects`. The active object (highlighted in yellow in Blender) is always the **source of truth**, ensuring you never overwrite the wrong mesh by accident.

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/sync_dropdown.png" alt="Sync dropdown in Modpie Plus" />
  </div>
  <p className="media-caption">Figure 3: The Sync dropdown showing Live Linking, One-Shot Copying, and Stack Comparison.</p>
</div>

Modpie Plus divides multi-object synchronization into two distinct approaches depending on how you work:

### Approach A: Keep in Step — Continuous Live Linking
Use live linking when objects should **stay synchronized as you continue modeling**:

- **Link Modifier to Selected (`modpie.link_modifier`)**: Connects the active modifier across all selected objects. Adjusting a parameter on *any* linked object immediately updates all other linked objects in real time.
- **Link All Modifiers to Selected (`modpie.link_stack`)**: Synchronizes the entire modifier stack across selected meshes.
- **Continuous Two-Way Sync**: Live links are truly bidirectional. It doesn't matter which linked mesh you grab—tweak the Bevel width on one bolt, and all other linked bolts update simultaneously.
- **Auto-Adds Where Missing**: If any selected object does not have the modifier yet, Modpie creates it automatically with the linked settings.
- **Saved in the `.blend`**: Link memberships are stored directly on the object using lightweight custom properties (`modpie_link`). Links survive saving, reopening, and appending into other projects.
- **Chain Indicator & Unlinking**: Linked modifiers display a **chain icon** with their group size badge (e.g. `🔗 5`). Clicking the chain unlinks just that object. Clicking *Unlink Every Object* in the operator redo panel cleanly breaks the whole group.
- **Zero Value Loss**: Unlinking never resets or alters property values. Whatever values the modifier has at the moment of unlinking are completely preserved.
- **Independent Display Toggles**: Viewport, render, edit-mode, and cage visibility toggles remain independent per object. Two objects can share identical bevel parameters while one remains hidden in the viewport.

---

### Approach B: Once, Then Leave Alone — One-Shot Copying
Use one-shot copying when you simply want to **clone settings right now without establishing permanent connections**:

| Operation | Action | Adds Where Missing |
| :--- | :--- | :---: |
| **Copy Modifier to Selected** (`modpie.sync_modifier`) | Copies active modifier settings to selected objects | **Yes** |
| **Copy All Modifiers to Selected** (`modpie.sync_stack`) | Copies the entire modifier stack from active to all selected objects | **Yes** |
| **Replace Stacks with This One** (`modpie.replace_stack`) | Replaces target objects' entire modifier stacks with the active stack | **Yes** |

#### Automatic Smart Matching
When copying settings across objects, Modpie uses **Automatic Matching**:
- Matches by exact modifier name first.
- If no exact name match exists, matches the first modifier of the same type (preventing failed copies when Blender names copies `Bevel.001` vs. `Bevel`).
- You can also choose exact matching by Name, Type, or Stack Position in the redo panel.

---

### Approach C: Compare Stacks (Visual Stack Diff)
Clicking **Compare Stacks** opens a side-by-side inspection popup without modifying any objects:
- Identifies missing or extra modifiers between selected objects with clear indicators.
- Highlights differing property values.
- Helps you verify and resolve discrepancies across multi-object assemblies before final rendering or export.

### Auto-Sync After a Drag
In **Edit ▸ Preferences ▸ Add-ons ▸ Modpie ▸ Plus**, you can enable **Auto-Sync After a Drag**:
- Whenever you confirm an interactive viewport drag on the active object, Modpie automatically pushes the adjusted settings to all other selected meshes.
- If target objects do not carry that modifier, it is created for them automatically.

---

## 4. Modifier Card Power Tools

In addition to the toolbar, Modpie Plus adds convenient workflow and diagnostic buttons directly onto each modifier card:

| Button | Tool | What It Does |
| :---: | :--- | :--- |
| `FILE_TICK` | **[Remember Default](defaults.md)** | Saves current settings as your personal startup defaults for all future additions. |
| `RESTRICT_VIEW_OFF` | **[Solo Modifier](solo-profiler.md)** | Temporarily isolates this modifier by hiding all others (with 1-click restore). Also interfaces with the **Evaluation Profiler**. |
| `SORT_ASC` | **Apply Up To Here** | Non-destructively bakes the stack from the top down to this modifier, keeping lower modifiers live. |
| `UV_SYNC_SELECT` | **One-Click Sync** | Instantly copies this modifier's parameters across all selected objects. |
| `LINKED` | **Live Link Status** | Displays group count (e.g. `🔗 3`) and toggles live link membership. |

---

## Summary: Which Tool Should You Choose?

| What You Want to Do | Recommended Tool | Where to Find It |
| :--- | :--- | :--- |
| Save a single modifier recipe for future projects | **Save Modifier Preset** | *Presets ▸ Save a Preset* |
| Save a full multi-modifier pipeline for any mesh | **Save Stack Template** | *Stacks ▸ Save Stack Template* |
| Keep bolts, panels, or props permanently identical | **Link Modifier to Selected** | *Sync ▸ Keep in step* |
| Quick 1-time copy of settings to other objects | **Copy Modifier to Selected** | Card `↗` button or *Sync ▸ Once, then leave alone* |
| Isolate a heavy modifier to inspect mesh geometry | **Solo Modifier** | Card `👁` solo button |
| Check why two meshes look slightly different | **Compare Stacks** | *Sync ▸ Compare with Selected* |
| Set your personal default startup values | **Remember Default** | Card `FILE_TICK` button |
