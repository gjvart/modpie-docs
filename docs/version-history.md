---
sidebar_class_name: hidden
title: Pre-Release Version History Archive
description: Historical development changelog and pre-release notes for earlier development builds of Modpie and Modpie Plus (v0.9.1 - v0.9.99).
---

# Pre-Release Version History Archive

<div className="hero-badge-container">
  <span className="badge badge--secondary">Internal Archive</span>
  <span className="badge badge--info">Versions 0.9.1 – 0.9.99</span>
</div>

This hidden archive preserves the development logs and pre-release changelogs from early development builds of Modpie and Modpie Plus leading up to the official 1.0 release.

---

## Pre-Release Iterations

### Version 0.9.99
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

### Version 0.9.98
- **Apply Last Interacted Modifier & Auto-Activation**:
  - Interacting with any modifier card in the Modpie Panel—whether opening its card via the disclosure arrow (<kbd>▶</kbd>/<kbd>▼</kbd>), clicking its gear icon (`⚙`), moving it with reorder arrows, pinning it, renaming it, or starting an interactive drag—automatically makes that modifier the active modifier in the stack (`obj.modifiers.active = mod` and `mod.is_active = True`).
  - Adding a new modifier (from the radial pie, quick add strip, presets, or panel) immediately activates it.
  - Pressing the Apply shortcut (<kbd>Ctrl + A</kbd>) reliably targets the modifier you were just inspecting or adjusting.
  - Direct 1-click Apply checkmark button (<kbd>✔</kbd>) on all modifier card headers.
  - Configurable toggle in **Preferences ▸ Modpie Panel ▸ Apply Last Interacted Modifier** (Default: *Enabled*).

---

### Version 0.9.97
- **Shift-Click Gear Tools Toggle on Closed Modifier Cards**:
  - Hold <kbd>Shift</kbd> and click any collapsed modifier's gear button (`⚙`) to instantly open and reveal gear tools (Move Up, Move Down, Pin to Last, Inline Rename) across every modifier card on the active object simultaneously.
  - Greatly speeds up batch reordering and management in complex collapsed stacks without individual clicking.

---

### Version 0.9.96
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

### Version 0.9.81
- **Fixed: Modal premature termination on interactive pie slots**:
  Modal invocation resolved directly without temporary override blocks that terminated early on certain viewport contexts.

---

### Version 0.9.80
- **Fixed Presets Button in Viewport Panel**:
  Resolved a missing layout assignment in `MODPIE_MT_presets.draw`.
- **Integrated Presets Access**:
  Presets and stack templates unified directly into the main **Alt + M** radial menu via the **Presets & Stacks** slot (SE) and panel header buttons.
- **Physics Modifiers Work in Progress Notice**:
  Simulation modifiers display a clean reference card pointing to Blender's native tabs.
- **Full Geometry Nodes Input Exposure**:
  Automatically detects and draws all input sockets on Geometry Nodes modifiers across Blender 4.x, 5.0, 5.1, and 5.2+.
- **Mask Modifier Reorganization**:
  Starts locked in interactive mode with segmented mode buttons and vertex group invert toggle.

---

### Version 0.9.60
- **Registration Error Recovery**:
  If `register()` raises midway, stale class registrations are automatically purged and retried, allowing re-enabling in the same Blender session.

---

### Version 0.9.59
- **Plus Registration Isolation**:
  Registration wraps the Plus package in an isolated try-catch block, falling back gracefully to core rather than crashing Blender.

---

### Version 0.9.58
- **Conflict Detector Dynamic Monitoring**:
  Real-time warnings when user shortcuts overlap with existing Blender tools.

---

### Version 0.9.57
- **Fitted Lattice Bounding Box Calculation**:
  Automatic object-aligned bounding box calculation and lattice generation.

---

### Version 0.9.56
- **Solo Modifier Viewport Isolation**:
  One-click isolation of any modifier's geometric contribution.

---

### Version 0.9.55
- **Array 5.0+ Geometry Nodes Support**:
  Full compatibility with Blender 5.0 procedural geometry nodes array setups.

---

### Version 0.9.54
- **Shrinkwrap 3D Raycast Target Picker**:
  Interactive hover-selection of target geometries directly in the 3D viewport.

---

### Earlier Versions (0.9.1 – 0.9.53)
- **0.9.53**: Added 3-row viewport HUD card for Mirror modifier (`Axis`, `Bisect`, `Flip` buttons).
- **0.9.52**: Fixed viewport coordinates and matrix calculations for HUD readouts invoked from popups and pie menus.
- **0.9.51**: Introduced <kbd>A</kbd> key for cycling Mirror axes and added on-mesh RGB axis badge.
- **0.9.5**: Added automatic panel hiding and reopening during interactive drag operations.
- **0.9.4**: Added one-click **Apply** (<kbd>✓</kbd>) button on collapsed modifier headers.
- **0.9.3**: Fixed duplicate panel opening issues when focusing existing modifiers.
- **0.9.2**: Added panel origin awareness to prevent duplicate stacked panels in sidebars.
- **0.9.1**: Initial pre-release of unified radial pie and viewport modifier panel.
