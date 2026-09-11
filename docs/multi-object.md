---
sidebar_position: 8
title: Multi-Object Editing
description: How Affect All Selected Objects adds, drags, applies, and deletes modifiers simultaneously across multiple meshes.
---

# Multi-Object Editing

<div className="hero-badge-container">
  <span className="badge badge--secondary">Core: Affect All Selected Objects</span>
</div>

In default Blender, adding or editing a modifier only applies to the active object, forcing you to link or copy modifiers repeatedly when working across multiple assets. 

Modpie introduces native multi-object editing across both the Free and Plus versions.

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/modpie_multi_object.gif" alt="Multi-Object Editing" />
  </div>
  <p className="media-caption">Figure: Batch adding and adjusting modifiers simultaneously across multiple selected objects.</p>
</div>

---

## 1. Affect All Selected Objects

By default, Modpie enables **Affect All Selected Objects** in its preferences:

- **Batch Modifier Addition**: Adding a modifier from the radial pie menu, Quick Add, or the search popup adds the modifier to **all currently selected meshes** that can accept it.
- **Simultaneous Viewport Dragging**: When dragging an interactive modifier in modal mode, **every selected object updates together in real time**. When you confirm the modal, all selected meshes share the exact same dialed-in parameters.
- **Smart Single-Object Bypass**: If only one object is selected, this system remains completely transparent with zero extra overhead.

:::tip Toggle in Preferences
You can toggle this behavior on or off in **Edit ▸ Preferences ▸ Add-ons ▸ Modpie ▸ Panel ▸ Affect All Selected Objects**.
:::

---

## 2. Batch Apply All & Delete All Modifiers

Multi-object workflow in Modpie extends beyond adding and dragging modifiers—it also handles stack-wide lifecycle operations across all selected objects directly from the modifier panel:

- **Apply All Modifiers**:
  - When multiple objects are selected in the viewport, clicking **Apply All** now iteratively applies visible modifiers across all eligible selected objects while preserving the original active object and user selection.
  - Decouples linked duplicate mesh datablocks (<kbd>Alt + D</kbd>) per object to prevent Blender single-user application errors.
  - Automatically unsolos any active soloed modifiers before applying.
  - Dynamic tooltip description adapts to selection state (e.g. `Apply every visible modifier across X selected objects`).
  - Reports total applied modifier count and affected object count with viewport overlay notification (e.g. `Applied 4 modifiers across 3 objects`).
- **Delete All Modifiers (`modpie.remove_all`)**:
  - When multiple objects are selected, clicking **Delete All** (trash icon) removes all modifiers across all selected objects.
  - Dynamic tooltip description updates to reflect selection context (e.g. `Remove all modifiers from X selected objects`).
  - Clear viewport notification and info report summarizing removed modifiers and affected objects.
- **Single-Object Responsiveness**:
  - When only a single object is active/selected, behavior remains smooth and instantaneous on the active object.

---

## 3. Modpie Plus Extensions <span className="badge badge--primary">Plus</span>

While the core version adjusts multiple objects when they are modified together, **Modpie Plus** adds deeper synchronization:

- **Auto-Sync After a Drag**: If you adjust an existing modifier that *only the active object has*, confirming the drag automatically pushes the modifier onto all other selected objects.
- **Continuous Live Linking**: Keeps modifiers on multiple objects permanently synchronized in real time via depsgraph tracking (see [Multi-Object Syncing & Live Linking](sync-link.md)).
