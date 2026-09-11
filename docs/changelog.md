---
sidebar_position: 5
title: Changelog
description: Release notes and changelog for Modpie and Modpie Plus Version 0.9.91 (LTS / Release Version).
---

# What's New & Changelog

<div className="hero-badge-container">
  <span className="badge badge--primary">Modpie Plus 0.9.91</span>
  <span className="badge badge--secondary">Modpie 0.9.91</span>
  <span className="badge badge--success">LTS / Release Version</span>
</div>

Welcome to the current release changelog for **Modpie** and **Modpie Plus** (**Version 0.9.91**). This release serves as the official **LTS (Long-Term Support) / Release Version**, bringing maximum stability, seamless viewport interaction, and unified compatibility across Blender 4.3, 4.5 LTS, 5.1, and 5.2+.

:::info Looking for older release notes?
All previous changelogs and version history (from version 0.9.81 down to 0.9.1) have been moved to the [**Past Releases & Archive**](/changelog-archive) page.
:::

---

## Current Version Highlights: 0.9.91 (LTS / Release)

<div className="feature-grid">
  <div className="feature-card">
    <div className="feature-card-icon">🪞</div>
    <div className="feature-card-title">Interactive Target Mirror Object</div>
    <p className="feature-card-desc">
      Press <kbd>T</kbd> in interactive Mirror mode to pick any Empty or mesh via an interactive eyedropper crosshair. Mirror symmetry and dashed guides dynamically orient around the target object.
    </p>
  </div>
  <div className="feature-card">
    <div className="feature-card-icon">⚡</div>
    <div className="feature-card-title">Modal Stability & Viewport Context</div>
    <p className="feature-card-desc">
      Eliminated temporary context override wrappers that caused modal operators to terminate prematurely. Radial menu addition and interactive dragging now run rock-solid across all viewport contexts.
    </p>
  </div>
  <div className="feature-card">
    <div className="feature-card-icon">🎯</div>
    <div className="feature-card-title">Smooth 4.5+ Cursor Tracking</div>
    <p className="feature-card-desc">
      Removed asynchronous timers and cursor warp calls that froze HUD overlays on Blender 4.5. The HUD overlay now locks smoothly to mouse events with zero lag.
    </p>
  </div>
  <div className="feature-card">
    <div className="feature-card-icon">🧩</div>
    <div className="feature-card-title">Full Geometry Nodes RNA Exposure</div>
    <p className="feature-card-desc">
      Automatically detects and renders all custom input sockets for Geometry Nodes modifier assets across Blender 4.x, 5.0, 5.1, and 5.2+.
    </p>
  </div>
  <div className="feature-card">
    <div className="feature-card-icon">🚪</div>
    <div className="feature-card-title">Zero-Overlap Auto Dismissal</div>
    <p className="feature-card-desc">
      Entering interactive modal mode from any panel card or Quick Add button instantly dismisses both the floating popup and the sidebar for an unobstructed view.
    </p>
  </div>
  <div className="feature-card plus">
    <div className="feature-card-icon">⭐</div>
    <div className="feature-card-title">Streamlined Presets & Live Linking</div>
    <p className="feature-card-desc">
      Presets and stack templates are accessed cleanly via the radial menu's Presets & Stacks slot and panel buttons, alongside continuous real-time multi-object live linking.
    </p>
  </div>
</div>

---

## Detailed Notes for Version 0.9.91 (LTS / Release)

### Core Workflow & Modal Enhancements
- **Interactive Mirror Target Picking (<kbd>T</kbd>)**:
  Added full interactive eyedropper target picking for the **Mirror modifier**. While in modal mode, pressing <kbd>T</kbd> (or clicking `[Target]` on the Axis HUD card) triggers a viewport eyedropper crosshair with the tooltip `Hover over mirror plane object...`. Clicking any object (such as an Empty or reference mesh) sets it as the `mirror_object`, reorienting the symmetry plane and drawing dashed guide lines relative to the target's transform origin. Click the red `[X]` on the HUD card at any time to clear the target back to `None`.
- **Modal Context Lifecycle & Drag Stability**:
  Fixed modal operator invocations from pie menu slots. Previously, launching modals inside a temporary context override caused the override to exit while the modal was still running in background, causing drag operations to terminate prematurely. Modal execution now resolves its own 3D viewport region cleanly and executes uninterrupted.
- **Fluid Cursor Tracking on Blender 4.5 LTS**:
  Removed timer-based cursor warp workarounds that caused HUD cards to stutter or freeze on Blender 4.5. The interactive HUD now locks 1:1 with mouse events across all supported Blender versions.
- **Clean Viewport Panel & Sidebar Dismissal**:
  Entering interactive mode from any modifier card or quick-add button now automatically and cleanly closes open popup panels and collapses the sidebar, giving the artist an unobstructed view of their mesh.
- **Multi-Object Batch Apply All (`modpie.apply_all`) & Delete All (`modpie.remove_all`)**:
  - When multiple objects are selected in the viewport, clicking **Apply All** now iteratively applies visible modifiers across all eligible selected objects while preserving the original active object and user selection.
  - Decouples linked duplicate mesh datablocks (<kbd>Alt + D</kbd>) per object to prevent Blender single-user application errors.
  - Automatically unsolos any active soloed modifiers before applying.
  - When multiple objects are selected, clicking **Delete All** (trash icon) removes all modifiers across all selected objects.
  - Dynamic tooltip descriptions adapt in real time to selection context (e.g. `Apply every visible modifier across X selected objects`, `Remove all modifiers from X selected objects`).
  - Viewport overlay notifications and info reports summarize total affected objects and applied or removed modifiers (e.g. `Applied 4 modifiers across 3 objects`).
  - When only a single object is active/selected, behavior remains smooth and instantaneous on the active object.

### Modifier Improvements
- **Smart Bisect & Flip on Mirror Modifier**:
  Dragging toward positive axes (+X, +Y, +Z) enables **Bisect**, while dragging toward negative axes (-X, -Y, -Z) enables both **Bisect** and **Flip** automatically.
- **Smart Cutter Selection for Boolean Modifier**:
  Starting an interactive Boolean operation with no secondary object selected presents a clean viewport search popup to pick the cutter object, with instant operation cycling via <kbd>A</kbd> ($Difference \rightarrow Intersect \rightarrow Union \rightarrow Difference$).
- **Fitted Lattice Modifier**:
  One-click Lattice creation fits a $3 \times 3 \times 3$ deformation cage perfectly aligned with the evaluated bounding box of the active mesh.
- **Geometry Nodes RNA Exposure**:
  Full introspection and rendering of all dynamic custom inputs on Geometry Nodes modifier assets across Blender 4.3 through 5.2+.

### Modpie Plus Features in 0.9.91
- **Continuous Live Modifier Linking**:
  Link individual modifiers or full modifier stacks across multiple objects with real-time bidirectional syncing via depsgraph evaluation handlers.
- **In-Viewport Compass Slot Customizer**:
  Easily remap radial menu directions using the visual 3×3 compass grid directly inside the 3D viewport.
- **Stack Templates & Preset Library**:
  Save, load, duplicate, and search complete modifier stacks and individual modifier configurations with permanent custom startup defaults.
- **Modifier Profiler & Solo Mode**:
  Inspect per-modifier computation execution times in milliseconds and solo individual modifiers to isolate their performance and geometric effects.

---

### Archive & Earlier Versions
For complete historical changelogs of versions **0.9.1 through 0.9.81**, refer to the [**Past Releases & Archive**](/changelog-archive).
