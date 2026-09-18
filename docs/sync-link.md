---
sidebar_position: 17
title: Live Linking & Sync
description: Continuous live linking across meshes, one-shot stack copying, and the live stack diff visualizer in Modpie Plus.
---

# Multi-Object Syncing & Live Linking

<div className="hero-badge-container">
  <span className="badge badge--primary">Modpie Plus Exclusive</span>
</div>

Managing modifiers across dozens of related objects is often tedious in Blender. **Modpie Plus** provides multi-object modifier synchronization divided into two clear approaches:
1. **Live Linking**: Continuous real-time synchronization (*these objects should stay the same as each other*).
2. **One-Shot Copying**: Instant parameter transfer (*make this object look like that one right now and leave them alone*).

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/sync_dropdown.png" alt="Sync and Live Linking Dropdown" />
  </div>
  <p className="media-caption">Figure 11: Multi-object sync and live linking options in the Modpie Plus panel.</p>
</div>

---

## 1. Keep in Step — Continuous Live Linking

| Operation | Identifier | Action | Behavior |
| :--- | :--- | :--- | :--- |
| **Link Modifier to Selected** | `modpie.link_modifier` | Links active modifier | Copies follow each other continuously from now on |
| **Link All Modifiers to Selected** | `modpie.link_stack` | Links entire stack | Links matching modifiers across selected objects continuously |

### How Live Linking Works
- **Continuous Two-Way Sync**: Change the Bevel width or Solidify thickness on any one of five linked objects, and the other four follow immediately in real time, whichever one you touch.
- **Auto-Adds Where Missing**: Objects that do not have the modifier yet receive it, so one click covers a mixed selection.
- **Saved in the `.blend`**: Link memberships are stored on the object in a lightweight custom property (`modpie_link`). Links survive saving, reopening, and appending into other projects.
- **Chain Indicator & Unlinking**: Linked modifiers display a **chain icon** on their tool row with their group size badge (e.g. `🔗 5`). Clicking the chain unlinks just that object. Clicking *Unlink Every Object* in the operator redo panel breaks the entire group.
- **Zero Value Loss**: Unlinking never alters properties; whatever values the modifier has at the moment of unlinking are preserved.
- **Independent Display Toggles**: Per-object switches (viewport visibility, render, edit-mode, on-cage) are never linked. Two objects can share identical bevel parameters while one remains hidden.

---

## 2. Once, Then Leave Alone — One-Shot Copying

When you want to clone settings once without keeping objects linked:

| Operation | Identifier | Action | Adds Where Missing |
| :--- | :--- | :--- | :---: |
| **Copy Modifier to Selected** | `modpie.sync_modifier` | Copies active modifier settings to selected objects | **Yes** |
| **Copy All Modifiers to Selected** | `modpie.sync_stack` | Copies the entire modifier stack from the active object to all selected objects | **Yes** |
| **Replace Stacks with This One** | `modpie.replace_stack` | Replaces target objects' entire modifier stacks with the active stack | **Yes** |

### Stack Sync Naming Symmetry
In **Modpie Plus**, multi-object stack synchronization operators follow a clean, symmetric naming convention across all copy and link tools:
- **`Copy All Modifiers to Selected`** (`modpie.sync_stack`): Broadcasts the full modifier stack from the active object across all selected targets.
- **`Link All Modifiers to Selected`** (`modpie.link_stack`): Creates ongoing live linking across matching modifier stacks on selected meshes.
- **`Copy Modifier to Selected`** (`modpie.sync_modifier`): Transfers a single active modifier's parameters across the selection.

### Direction Clarity
The Sync menu header explicitly states which object is active and which way data will flow (e.g. `Cube → 3 other objects`), ensuring you never overwrite the wrong mesh by accident.

### Automatic Smart Matching
When copying settings, matching is set to **Automatic** by default:
- Matches by name if an exact name match exists.
- Otherwise matches the first modifier of the same type (preventing failed syncs when Blender names copies `Bevel.001` vs. `Bevel`).
- Exact matching by Name, Type, or Stack Position is available in the redo panel.

---

## 3. Compare Stacks (Live Stack Diff)

Clicking **Compare Stacks** opens a visual comparison popup without modifying any objects:
- Identifies missing modifiers between selected objects in clear color-coded indicators.
- Highlights differing property values.
- Lets you inspect and resolve discrepancies across multi-object assemblies before exporting or baking.

---

## 4. Auto-Sync After a Drag

In **Edit ▸ Preferences ▸ Add-ons ▸ Modpie ▸ Plus**, you can enable **Auto-Sync After a Drag**:
- When confirmed, any interactive modal edit on the active object is automatically pushed to all other selected meshes.
- If other selected objects do not carry that modifier, it is created for them automatically.
