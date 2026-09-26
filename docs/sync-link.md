---
sidebar_position: 17
title: Live Linking & Sync
description: Continuous live linking across meshes, one-shot stack copying, and the live stack diff visualizer in Modpie Plus.
---

# Multi-Object Syncing & Live Linking

<div className="hero-badge-container">
  <span className="badge badge--primary">Modpie Plus Exclusive</span>
</div>

:::tip Unified Guide
In Modpie Plus, **Live Linking & Multi-Object Sync** is integrated directly into the Viewport Panel alongside Presets and Stacks. For the comprehensive, all-in-one guide covering presets, stack templates, live linking, and card tools, see **[Presets, Stacks & Multi-Object Sync](panel-presets-stacks-sync.md)**.
:::

Managing modifiers across dozens of related objects is often tedious in Blender. **Modpie Plus** provides multi-object modifier synchronization divided into two clear approaches:

1. **Continuous Live Linking**: Keeps objects permanently in sync (*these objects should stay identical in real time*).
2. **One-Shot Copying**: Transfers parameters instantly without ongoing connections (*copy settings right now and leave them alone*).

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/sync_dropdown.png" alt="Sync and Live Linking Dropdown" />
  </div>
  <p className="media-caption">Figure: Multi-object sync and live linking options in the Modpie Plus panel.</p>
</div>

---

## 1. Keep in Step — Continuous Live Linking

| Operation | Action | What It Does |
| :--- | :--- | :--- |
| **Link Modifier to Selected** | `modpie.link_modifier` | Links active modifier across all selected meshes in real time |
| **Link All Modifiers to Selected** | `modpie.link_stack` | Links matching modifiers across all selected objects continuously |

### How Live Linking Works
- **Continuous Two-Way Sync**: Tweak Bevel width or Solidify thickness on any one linked mesh, and all other linked meshes update instantly in real time.
- **Auto-Adds Where Missing**: Objects that do not have the modifier yet receive it automatically with the linked parameters.
- **Saved in the `.blend`**: Link memberships are stored directly on the object using lightweight custom properties (`modpie_link`), surviving file saving and reloading.
- **Chain Indicator & Unlinking**: Linked modifiers display a **chain icon** with their group size badge (e.g. `🔗 5`). Clicking the chain unlinks just that object without resetting any values.
- **Independent Display Toggles**: Viewport and render visibility switches remain independent per object.

---

## 2. Once, Then Leave Alone — One-Shot Copying

When you want to clone settings once without establishing permanent connections:

- **Copy Modifier to Selected** (`modpie.sync_modifier`): Copies active modifier parameters across the selection (adds if missing).
- **Copy All Modifiers to Selected** (`modpie.sync_stack`): Broadcasts the full modifier stack from active to all selected targets.
- **Replace Stacks with This One** (`modpie.replace_stack`): Replaces target objects' entire modifier stacks with the active stack.

### Direction Clarity
The Sync menu header displays an explicit direction indicator (`[Active Object] ➔ N other objects`) so you always know which mesh is the source of truth.

---

## 3. Compare Stacks (Visual Stack Diff)

Clicking **Compare Stacks** opens a visual comparison popup without modifying any objects:
- Identifies missing or extra modifiers between selected objects.
- Highlights differing property values.
- Lets you inspect and resolve discrepancies across multi-object assemblies before exporting or baking.

---

For complete details on presets, stack templates, and toolbar workflows, visit the main **[Presets, Stacks & Multi-Object Sync](panel-presets-stacks-sync.md)** guide.
