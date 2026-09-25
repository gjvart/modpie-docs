---
sidebar_position: 5
title: Changelog
description: Release notes and changelog for Modpie and Modpie Plus Version 1.0.0 (Release Version).
---

# What's New & Changelog

<div className="hero-badge-container">
  <span className="badge badge--primary">Modpie Plus 1.0.0</span>
  <span className="badge badge--secondary">Modpie 1.0.0</span>
  <span className="badge badge--success">Release Version</span>
</div>

Welcome to the release notes and changelog for Modpie and Modpie Plus. This page highlights all recent features, architectural improvements, and bug fixes across both tiers.

---

## Current Version Highlights: 1.0.0 (Release)

<div className="feature-grid">
  <div className="feature-card">
    <div className="feature-card-title">Enhanced Decimate Interactive Mode (v1.0.0)</div>
    <p className="feature-card-desc">
      Mode-aware interactive dragging across Collapse, Un-Subdivide, and Planar. Cycle modes on the fly (<kbd>M</kbd>/<kbd>T</kbd>), jump directly (<kbd>C</kbd>/<kbd>U</kbd>/<kbd>P</kbd>), drag mode-isolated values, and monitor live polygon counts.
    </p>
  </div>
  <div className="feature-card">
    <div className="feature-card-title">Curve to Tube Integration (Blender 5.0+)</div>
    <p className="feature-card-desc">
      Native support for the official Blender 5.0 Geometry Nodes Curve to Tube asset. Features complete subpanels (Profile, Resample, Caps, UV Map) and full interactive modal controls.
    </p>
  </div>
  <div className="feature-card plus">
    <div className="feature-card-title">Real-Time Evaluation Profiler (Plus v1.0.0)</div>
    <p className="feature-card-desc">
      Hardware performance diagnostics directly in your viewport stack. Measures execution latency per modifier with proportional visual load bars and frame budget indicators.
    </p>
  </div>
  <div className="feature-card">
    <div className="feature-card-title">Mid-Drag Modifier Switching (v0.9.99)</div>
    <p className="feature-card-desc">
      Jump seamlessly between any modifier in the stack during interactive mode using <kbd>Ctrl + Tab</kbd>, <kbd>[</kbd> / <kbd>]</kbd>, <kbd>Ctrl + Wheel</kbd>, or HUD chevrons without leaving your session.
    </p>
  </div>
  <div className="feature-card">
    <div className="feature-card-title">Apply Last Interacted Modifier (v0.9.98)</div>
    <p className="feature-card-desc">
      Expanding, adjusting, or adding any modifier automatically makes it active in the stack so the <kbd>Ctrl + A</kbd> shortcut always applies the modifier you were just working on.
    </p>
  </div>
  <div className="feature-card">
    <div className="feature-card-title">Interactive Stack Reordering & Pinning</div>
    <p className="feature-card-desc">
      Move modifiers up or down the evaluation stack on the fly using <kbd>Alt</kbd> + <kbd>Wheel</kbd> during interactive modal dragging, complete with HUD cards, pin to last, and gear tools.
    </p>
  </div>
</div>

---

## Detailed Release History

### Modpie Plus 1.0.0 / Modpie 1.0.0

- **Enhanced Decimate Interactive Mode**:
  - Full mode-aware interactive dragging across **Collapse**, **Un-Subdivide**, and **Planar**.
  - Instant mode cycling via <kbd>M</kbd> or <kbd>T</kbd>.
  - Direct mode jump keys: <kbd>C</kbd> (Collapse), <kbd>U</kbd> (Un-Subdivide), <kbd>P</kbd> (Planar).
  - Mode-specific value dragging: mouse drag and wheel adjust **Iterations** in Un-Subdivide (auto-seeded to `1`), **Ratio** in Collapse, and **Angle Limit** in Planar.
  - Strict parameter guarding: pressing <kbd>S</kbd> (Symmetry) or <kbd>G</kbd> (Triangulate) while in Un-Subdivide or Planar mode is safely intercepted with a helpful notification.
  - Channel selection implications: <kbd>R</kbd> selects Ratio and switches to Collapse; <kbd>I</kbd> selects Iterations and switches to Un-Subdivide; <kbd>A</kbd> selects Angle Limit and switches to Planar.
  - Dynamic face count readout: live `Faces: <count>` displayed in the viewport HUD and Blender status bar during decimation adjustment.
- **Blender 5.0+ Curve to Tube Modifier Integration**:
  - Full first-class support for the official Blender 5.0 Geometry Nodes Curve to Tube asset modifier.
  - Cleanly hidden in Blender 4.5 and earlier to guarantee 100% backward compatibility.
  - Exact native Blender layout in Modpie Panel: top-level scale, Profile subpanel (Round/Custom, resolution, smooth shading), Resample subpanel (Evaluated/Auto/Count/Length), Caps subpanel (Flat/Round/Custom, caps resolution, normals, merging), UV Map subpanel, and Manage subpanel.
  - Header badging with official `MOD_CURVE` icon and `(5.0+)` indicator.
  - Interactive modal dragging for tube radius, profile resolution (<kbd>R</kbd>/<kbd>Wheel</kbd>), resample count (<kbd>C</kbd>) and length (<kbd>L</kbd>), shade smooth (<kbd>H</kbd>), caps (<kbd>P</kbd>), resample toggle (<kbd>E</kbd>), merge toggle (<kbd>M</kbd>), and mode cycling (<kbd>F</kbd>, <kbd>T</kbd>, <kbd>O</kbd>).
- **Real-Time Evaluation Profiler & Hardware Benchmarking (Modpie Plus)**:
  - Viewport-embedded hardware execution profiler measuring modifier latency in microseconds (`µs`), milliseconds (`ms`), or seconds (`s`).
  - Proportional visual load bars scaled against the slowest modifier in the stack to instantly identify performance bottlenecks.
  - Dependency graph deep-query (`context.object.evaluated_get(depsgraph)`) reporting true hardware execution times.
  - 1-click stopwatch toggle button (`⏱`) in modifier stack header row.
  - Dedicated re-evaluate benchmark button (`🔄`) to force a fresh calculation pass.
  - Frame budget guidance comparing total stack latency against 60 FPS (16.6 ms) and 30 FPS (33.3 ms) thresholds.

---


### Modpie Plus 0.9.99 / Modpie 0.9.99

- **Mid-Drag Modifier Switching in Interactive Mode**:
  - Jump between any modifier in the active object's stack on the fly without closing the modal session or opening side panels.
  - Dedicated navigation hotkeys:
    - <kbd>Ctrl + Tab</kbd> / <kbd>Ctrl + Shift + Tab</kbd>: Step forward or backward through the entire modifier stack.
    - <kbd>[</kbd> / <kbd>]</kbd> and <kbd>Page Up</kbd> / <kbd>Page Down</kbd>: Step to previous or next modifier in the stack.
    - <kbd>Ctrl + Wheel Up</kbd> / <kbd>Ctrl + Wheel Down</kbd>: Cycle modifiers with mouse wheel.
    - <kbd>Alt + 1..9</kbd>: Direct slot jump to any modifier 1 through 9.
    - <kbd>Tab</kbd> / <kbd>Shift + Tab</kbd> on single-channel modifiers (like Subsurf or Mirror): Directly cycle to adjacent modifiers in the stack.
    - **HUD Chevrons**: Clickable `‹` and `›` arrow buttons on the HUD title bar for 1-click mouse stepping.
  - **Unified Multi-Modifier Confirmation**: <kbd>Left-Click</kbd> or <kbd>Enter</kbd> commits and preserves all adjustments made across every modifier tweaked during the session. Shows total updated modifier count in the status bar and overlay.
  - **Unified Multi-Modifier Rollback**: <kbd>Right-Click</kbd> or <kbd>Esc</kbd> cleanly reverts all touched modifiers back to their pre-modal state. Newly added modifiers are discarded cleanly.
  - **Multi-Object Synchronization (Plus)**: When multiple objects are selected, switching modifiers in interactive mode automatically syncs and retargets matching modifiers across all selected meshes.
  - **Preference Toggle**: In **Preferences ▸ Interactive Drag ▸ Mid-Drag Modifier Switching**, choose whether switching keys cycle through the entire stack (default) or restrict to same-type sibling modifiers.

---

### Modpie Plus 0.9.98 / Modpie 0.9.98

- **Apply Last Interacted Modifier & Auto-Activation**:
  - Interacting with any modifier card in the Modpie Panel—whether opening its card via the disclosure arrow (<kbd>▶</kbd>/<kbd>▼</kbd>), clicking its gear icon (`⚙`), moving it with reorder arrows, pinning it, renaming it, or starting an interactive drag—automatically makes that modifier the active modifier in the stack (`obj.modifiers.active = mod` and `mod.is_active = True`).
  - Adding a new modifier (from the radial pie, quick add strip, presets, or panel) immediately activates it.
  - Pressing the Apply shortcut (<kbd>Ctrl + A</kbd>) reliably targets the modifier you were just inspecting or adjusting.
  - Direct 1-click Apply checkmark button (<kbd>✔</kbd>) on all modifier card headers.
  - Configurable toggle in **Preferences ▸ Modpie Panel ▸ Apply Last Interacted Modifier** (Default: *Enabled*).

---

### Modpie Plus 0.9.97 / Modpie 0.9.97

- **Shift-Click Gear Tools Toggle on Closed Modifier Cards**:
  - Hold <kbd>Shift</kbd> and click any collapsed modifier's gear button (`⚙`) to instantly open and reveal gear tools (Move Up, Move Down, Pin to Last, Inline Rename) across every modifier card on the active object simultaneously.
  - Greatly speeds up batch reordering and management in complex collapsed stacks without individual clicking.

---

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
