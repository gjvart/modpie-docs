---
sidebar_position: 6
title: Past Releases & Archive
description: Historical release notes and changelog archive for Modpie and Modpie Plus versions 0.9.81 through 0.9.1.
---

# Past Releases & Archive

<div className="hero-badge-container">
  <span className="badge badge--secondary">Historical Archive</span>
  <span className="badge badge--info">Versions 0.9.1 – 0.9.81</span>
</div>

This page archives historical changelogs and release notes for earlier versions of Modpie and Modpie Plus. For current release notes, visit the [**What's New & Changelog**](/changelog) page.

---

## Release History

### Version 0.9.81

- **Fixed: Modal premature termination on interactive pie slots**:
  The modal was being launched inside a `bpy.context.temp_override(...)` block. Because a Python `with` block exits as soon as the calling function returns, and Blender modal operators return `RUNNING_MODAL` while still actively running, the context override was torn down underneath the running modal handler, causing the drag operation to die immediately.
  Every pie modifier slot is interactive by default, so this made it appear as though the pie was not adding anything. The modal now invokes directly and resolves its own `VIEW_3D` area and region cleanly without temporary override blocks.

---

### Version 0.9.80

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

### Version 0.9.55

- **Automatic Sync Matching (Plus)**:
  Sync operations now match by name first, and fall back to the first modifier of the same type if names differ (e.g. `Bevel` vs `Bevel.001`), preventing false "Nothing matched" reports.
- **Sync Modifier Adds Where Missing**:
  Syncing a modifier to selected objects automatically adds it to any target meshes that lack it.
- **Directional Clarity in Sync Menu**:
  The Sync menu header displays an explicit data direction indicator (e.g. `Cube → 3 other objects`).
- **Affect All Selected Objects by Default**:
  Adding or dragging modifiers with multiple objects selected updates all of them simultaneously in both Free and Plus.

---

### Version 0.9.54

- **Interactive Mode for Blender 5.0+ Modern Array**:
  Full interactive modal controls for Geometry Nodes Array assets with socket-level property adjustment.
- **Array Relative & Constant Mutual Exclusivity**:
  Enabling Relative Offset turns Constant Offset off automatically, and vice versa.
- **Automatic Fitted Lattice Creation**:
  One-click Lattice modifier automatically generates and fits a $3 \times 3 \times 3$ lattice cage based on the mesh's evaluated bounding box.
- **In-Viewport 3×3 Compass Grid Customizer (Plus)**:
  Unfolding Customize on the panel provides a spatial 3×3 grid to edit radial directions directly in the viewport.
- **Remember as Default (`defaults.json`)**:
  Allows saving custom modifier property values as permanent startup defaults.

---

### Earlier Versions (0.9.1 – 0.9.53)

- **0.9.53**: Added 3-row viewport HUD card for Mirror modifier (`Axis`, `Bisect`, `Flip` buttons).
- **0.9.52**: Fixed viewport coordinates and matrix calculations for HUD readouts invoked from popups and pie menus.
- **0.9.51**: Introduced <kbd>A</kbd> key for cycling Mirror axes and added on-mesh RGB axis badge.
- **0.9.5**: Added automatic panel hiding and reopening during interactive drag operations.
- **0.9.4**: Added one-click **Apply** (<kbd>✓</kbd>) button on collapsed modifier headers.
- **0.9.3**: Fixed duplicate panel opening issues when focusing existing modifiers.
- **0.9.2**: Added panel origin awareness to prevent duplicate stacked panels in sidebars.
- **0.9.1**: Initial release of the unified radial pie and viewport modifier panel.
