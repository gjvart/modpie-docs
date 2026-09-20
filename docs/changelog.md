---
sidebar_position: 5
title: Changelog
description: Release notes and changelog for Modpie and Modpie Plus Version 0.9.96 (Release Version).
---

# What's New & Changelog

<div className="hero-badge-container">
  <span className="badge badge--primary">Modpie Plus 0.9.96</span>
  <span className="badge badge--secondary">Modpie 0.9.96</span>
  <span className="badge badge--success">Release Version</span>
</div>

Welcome to the release notes and changelog for Modpie and Modpie Plus. This page highlights all recent features, architectural improvements, and bug fixes across both tiers.

---

## Current Version Highlights: 0.9.96 (Release)

<div className="feature-grid">
  <div className="feature-card">
    <div className="feature-card-title">Interactive Stack Reordering</div>
    <p className="feature-card-desc">
      Move the active modifier up or down the evaluation stack on the fly using <kbd>Alt</kbd> + <kbd>Wheel</kbd> during interactive modal dragging, complete with viewport HUD cards and safe revert on cancel.
    </p>
  </div>
  <div className="feature-card plus">
    <div className="feature-card-title">Object Modifiers Pie (Plus)</div>
    <p className="feature-card-desc">
      Radial pie menu (<kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>M</kbd>) dynamically populated with only the modifiers currently applied to the active object, with live dragging and visibility toggling.
    </p>
  </div>
  <div className="feature-card">
    <div className="feature-card-title">Inline Modifier Renaming</div>
    <p className="feature-card-desc">
      Rename modifiers directly inside both collapsed and expanded card views in the viewport panel without opening Blender's Properties editor.
    </p>
  </div>
  <div className="feature-card">
    <div className="feature-card-title">Closed Modifier Management & Pin to Last</div>
    <p className="feature-card-desc">
      Full 4-visibility switches, quick gear tools, persistent pin badges, and separated Apply/Delete action grouping on collapsed modifier rows.
    </p>
  </div>
  <div className="feature-card">
    <div className="feature-card-title">Preferences UI & Conflict Detection</div>
    <p className="feature-card-desc">
      Categorized preference cards, direct keymap rebinding, and smart real-time shortcut conflict detection alerts.
    </p>
  </div>
  <div className="feature-card">
    <div className="feature-card-title">Apply Modifier Workflow</div>
    <p className="feature-card-desc">
      Dedicated Apply header button next to Delete, plus global <kbd>Ctrl</kbd> + <kbd>A</kbd> viewport execution with intelligent fallback resolution.
    </p>
  </div>
</div>

---

## Detailed Release History

### Modpie Plus 0.9.96 / Modpie 0.9.96

- **Interactive Stack Reordering**:
  - Move active modifiers up or down the stack on the fly during interactive dragging using <kbd>Alt</kbd> + <kbd>Wheel Up</kbd> / <kbd>Down</kbd> or <kbd>Alt</kbd> + <kbd>Up</kbd> / <kbd>Down</kbd>.
  - Live animated HUD readout indicating direction and 1-indexed position (e.g. `Stack Up: Mirror (1/3)`).
  - Safe boundary detection with non-destructive alerts (`Top of Stack` / `Bottom of Stack`).
  - Full cancellation protection: pressing <kbd>Esc</kbd> or <kbd>Right-Click</kbd> restores initial stack order.
  - Configurable shortcuts and scroll direction invert in Preferences.
- **Context / Object-Based Modifier Pie Menu (Modpie Plus)**:
  - Invoked via <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>M</kbd> or 3D Viewport header (**Object > Modpie > Active Object Modifiers**).
  - Dynamically populates with only the active object's modifiers, emitting separators for unused directions.
  - Click to adjust interactively or focus in panel; <kbd>Alt</kbd> + click to toggle viewport visibility without dragging.
  - Large stacks (>7 modifiers) include a direct **`More Modifiers (N)...`** button opening the full panel.
  - Dedicated empty stack layout when invoked on objects without modifiers.
- **Inline Modifier Renaming**:
  - Available on collapsed cards via the gear menu and on expanded cards via the inner action toolbar.
  - Pre-filled prompt with instantaneous panel updates and full undo (<kbd>Ctrl</kbd> + <kbd>Z</kbd>) support.
- **Closed Modifier Management & Pin to Last Feedback**:
  - Retains all 4 primary visibility toggles (Cage, Edit Mode, Viewport, Render) on collapsed rows.
  - Gear menu provides Move Up, Move Down, Pin to Last, and Rename tools.
  - Dynamic Pin to Last feedback: active embossed style, persistent header badge when closed, and viewport notifications.
  - Newly added modifiers automatically insert above pinned modifiers.
  - Separator visually isolates Apply and Delete buttons at the far right of header rows.
- **Preferences UI Overhaul & Keymap Conflict Detection**:
  - Restructured into categorized cards: Interactive, Panel, and Shortcuts.
  - Real-time conflict detection alerts highlighting shared key combinations.
- **Apply Modifier Workflow**:
  - Dedicated Apply button on all modifier headers.
  - Viewport <kbd>Ctrl</kbd> + <kbd>A</kbd> operator with intelligent fallback (hovered -> active/selected -> soloed -> expanded -> top).
- **Stack Sync Naming Symmetry (Modpie Plus)**:
  - Renamed one-shot copy operators to `Copy Modifier to Selected` (`modpie.sync_modifier`), `Copy All Settings to Selected` (`modpie.sync_stack`), and `Replace Stacks with This One` (`modpie.push_stack`).

---

### Modpie Plus 9.8.1 / Modpie 0.9.81

- **Fixed: Modal premature termination on interactive pie slots**:
  The modal was being launched inside a `bpy.context.temp_override(...)` block. Because a Python `with` block exits as soon as the calling function returns, and Blender modal operators return `RUNNING_MODAL` while still actively running, the context override was torn down underneath the running modal handler, causing the drag operation to die immediately.
  Every pie modifier slot is interactive by default, so this made it appear as though the pie was not adding anything. The modal now invokes directly and resolves its own `VIEW_3D` area and region cleanly without temporary override blocks.

---

### Modpie Plus 9.8.0 / Modpie 0.9.8

- **Distinct Tier Versioning**:
  Modpie Plus and Modpie (Free) now carry completely separate versions:
  - **Modpie Plus**: `9.8.0` (delivering presets, stack templates, multi-object live syncing, modifier default overrides, evaluation profiler, and extended 8-direction slot customization).
  - **Modpie (Free)**: `0.9.8` (delivering the core 5-slot radial menu, interactive modal drag, and viewport stack panel).
  - The build pipeline (`tools/build.py`) automatically rewrites manifests and `bl_info` with tier-specific versions and outputs `modpie-0.9.8.zip` and `modpie-plus-9.8.0.zip`.
- **Fixed Presets Button in Viewport Panel**:
  Resolved a missing layout assignment in `MODPIE_MT_presets.draw` so clicking **Presets** in the panel cleanly opens saved presets, clipboard actions, and search.
- **Removed Separate Preset Pie Keymap**:
  Presets and stack templates are now accessed through the existing **Presets & Stacks** slot on the radial menu and panel buttons, eliminating the conflicting `Shift + Alt + M` global keymap.
- **Physics Modifiers Work in Progress Notice**:
  Simulation modifiers (`CLOTH`, `COLLISION`, `DYNAMIC_PAINT`, `FLUID`, `SOFT_BODY`, `PARTICLE_SYSTEM`) now display a clear, styled *Work in Progress* card inside the viewport panel directing users to Blender's native Physics/Particles tabs while detailed integration is in development.
- **Full Geometry Nodes Input Exposure**:
  Automatically detects and draws all input sockets on Geometry Nodes modifiers across Blender 4.x, 5.0, 5.1, and 5.2+ (RNA input sockets).
- **Fixed Interactive Mode HUD Tracking on Blender 4.5 & Automatic Panel Dismissal**:
  Removed asynchronous timer and cursor warp invocations that caused the interactive HUD overlay to freeze on Blender 4.5. Modal interaction is now invoked directly with the user's active event context, keeping the draw panel locked smoothly to the mouse cursor. Entering interactive mode from any modifier card or quick-add button now immediately and cleanly dismisses both the viewport panel and the sidebar.
- **Mask Modifier Reorganization**:
  Starts locked in interactive mode (`start_locked: True`, unlock with <kbd>Spacebar</kbd>) with single-key toggles and a native Blender layout with segmented mode buttons and vertex group invert toggle.

---

### Version 0.9.60

- **Registration Error Recovery**:
  A failed registration no longer strands the add-on until Blender restarts. If `register()` raises midway, stale class registrations are automatically purged and retried, allowing re-enabling in the same Blender session.

---

### Version 0.9.59

- **Plus Registration Isolation**:
  Registration now wraps the Plus package in an isolated try-catch block. If an error occurs within Plus code, the error is printed to the console and the add-on gracefully falls back to the Free build for the session rather than crashing Blender's addon system.

---

### Version 0.9.58

- **Zero-Overlap Panel Closing**:
  When launching interactive mode from within the Modpie panel (via the drag button on a card or an interactive Quick Add button), any open popup panel is cleanly dismissed and the sidebar is collapsed before modal execution starts, eliminating visual overlap with the HUD.
- **Array (Legacy) vs Array (5.0+) Clean-Up**:
  On Blender versions below 5.0 (e.g. 4.5 LTS), the modern Geometry Nodes Array asset (`ARRAY_MODERN`) is completely hidden from categories, menus, and search, and the classic modifier is displayed simply as `Array` without any `(Legacy)` tag. On Blender 5.0+, both modifiers remain clearly available and separated as `Array (Legacy)` and `Array (5.0+)`.
- **Consistent Store Default Icon**:
  The "Remember as Default" button on the modifier tool row now consistently displays the `FILE_TICK` icon for both saved and unsaved states.

---

### Version 0.9.57

- **Displace, Warp & Wave "New Texture" Button**:
  Blender's built-in `texture.new` works out which slot to fill by querying the UI templateID under the cursor, which fails inside popup panels. Modpie now features its own New Texture operator with **Open Image...** to load an image file straight into a new texture, and dynamically populates procedural texture types supported by the running Blender version.
- **Bind Buttons on Deform Modifiers**:
  Added native **Bind / Unbind** buttons directly on the panel headers for **Mesh Deform**, **Surface Deform**, and **Corrective Smooth**.
- **Simple Deform Axis Cycling**:
  Pressing <kbd>C</kbd> cycles Simple Deform's axis ($X \rightarrow Y \rightarrow Z \rightarrow X$), while <kbd>A</kbd> controls Angle.
- **Dynamic Object-Type Modifier Filtering**:
  Modpie queries Blender's native Add Modifier menus at runtime to only display modifiers applicable to the active object type (mesh, curve, volume, or grease pencil), preventing invalid modifiers (like Mesh to Volume on standard meshes) from appearing.

---

### Version 0.9.56

- **Continuous Live Modifier Linking (Plus)**:
  Introduced **Link Modifier to Selected** and **Link All Modifiers to Selected**. Changes made to any one linked object propagate to all other linked copies in real time via a depsgraph handler. Links are stored in `.blend` custom properties (`modpie_link`) and survive saving and reloading.
- **One-Shot Copy vs. Live Link Clarification**:
  Renamed one-shot sync operations to **Copy Modifier to Selected** and **Copy All Settings to Selected** to clearly differentiate them from continuous live links.
- **Boolean Cutter Object Prompt**:
  Starting an interactive Boolean modifier with no other object selected opens a clean search popup of scene meshes to pick the cutter object.
- **Boolean Operation Cycling**:
  Pressing <kbd>A</kbd> during interactive Boolean modal mode cycles operations: Difference ➔ Intersect ➔ Union ➔ Difference.

---


---

- **0.9.5**: Added automatic panel hiding and reopening during interactive drag operations.
- **0.9.4**: Added one-click **Apply** (<kbd>✓</kbd>) button on collapsed modifier headers.
- **0.9.3**: Fixed duplicate panel opening issues when focusing existing modifiers.
- **0.9.2**: Added panel origin awareness to prevent duplicate stacked panels in sidebars.
- **0.9.1**: Initial release of the unified radial pie and viewport modifier panel.
