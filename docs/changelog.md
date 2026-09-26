---
sidebar_position: 5
title: Release Notes
description: Official release notes and feature highlights for the Modpie and Modpie Plus launch release (v1.0.0).
---

# Release Notes (v1.0.0)

<div className="hero-badge-container">
  <span className="badge badge--primary">Modpie Plus 1.0.0</span>
  <span className="badge badge--secondary">Modpie 1.0.0</span>
  <span className="badge badge--success">Launch Release</span>
</div>

Welcome to the official launch release of **Modpie** and **Modpie Plus**!

Modpie brings high-speed radial pie menus, interactive viewport dragging with real-time HUD overlays, and a clean viewport modifier panel right into Blender's 3D view.

---

## Launch Highlights

<div className="feature-grid">
  <div className="feature-card">
    <div className="feature-card-title">Interactive Decimate & Mode Swapping</div>
    <p className="feature-card-desc">
      Mode-aware interactive dragging across Collapse, Un-Subdivide, and Planar. Cycle modes on the fly (<kbd>M</kbd>/<kbd>T</kbd>), jump directly (<kbd>C</kbd>/<kbd>U</kbd>/<kbd>P</kbd>), drag mode-isolated values, and monitor live polygon counts.
    </p>
  </div>
  <div className="feature-card">
    <div className="feature-card-title">Curve to Tube Integration (Blender 5.0+)</div>
    <p className="feature-card-desc">
      Native support for Blender 5.0's official Geometry Nodes Curve to Tube asset modifier. Includes complete subpanels (Profile, Resample, Caps, UV Map) and full interactive modal controls.
    </p>
  </div>
  <div className="feature-card plus">
    <div className="feature-card-title">Real-Time Evaluation Profiler (Plus)</div>
    <p className="feature-card-desc">
      Hardware performance diagnostics directly in your viewport stack. Measures execution latency per modifier with proportional visual load bars and frame budget indicators.
    </p>
  </div>
  <div className="feature-card">
    <div className="feature-card-title">Mid-Drag Modifier Switching</div>
    <p className="feature-card-desc">
      Jump seamlessly between any modifier in the stack during interactive mode using <kbd>Ctrl + Tab</kbd>, <kbd>[</kbd> / <kbd>]</kbd>, <kbd>Ctrl + Wheel</kbd>, or HUD chevrons without leaving your session.
    </p>
  </div>
  <div className="feature-card">
    <div className="feature-card-title">Apply Last Interacted Modifier</div>
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

## Core Capabilities at Launch

### Interactive Viewport Dragging & HUD
- **Real-Time Dragging**: Add or adjust modifiers with live mouse gestures in the 3D viewport.
- **Dynamic HUD Overlay**: Displays live parameter values, status notices, and shortcut hints locked smoothly to your cursor.
- **Mid-Drag Modifier Navigation**: Step through modifiers in your stack during interactive mode via <kbd>Ctrl + Tab</kbd>, bracket keys <kbd>[</kbd> / <kbd>]</kbd>, or HUD chevrons without interrupting your drag session.
- **Interactive Stack Reordering**: Scroll modifiers up or down the evaluation stack with <kbd>Alt + Wheel</kbd> during interactive adjustments.
- **Auto-Activation**: Interacting with any modifier card immediately marks it as the active modifier, ensuring <kbd>Ctrl + A</kbd> reliably applies the modifier you just touched.

### Viewport Modifier Panel
- **Floating or Sidebar**: Open Modpie's full modifier stack right where your cursor is or dock it in Blender's sidebar.
- **Closed Modifier Management**: Keep modifier cards collapsed to save screen space while keeping visibility switches, reorder arrows, pin badges, and inline renaming instantly accessible.
- **Pin to Last**: Anchor terminal modifiers (like Subdivision Surface, Bevel, or Weighted Normal) to the bottom of the stack, with automatic insertion of new modifiers above the pinned modifier.
- **Shift-Click Gear Tools**: Hold <kbd>Shift</kbd> and click any gear button to unlock management tools across every collapsed modifier card at once.

### Key Modifiers & Helpers
- **Visual Mirror Helper**: Pick symmetry axes with single keys (<kbd>X</kbd>, <kbd>Y</kbd>, <kbd>Z</kbd>), cycle with <kbd>A</kbd>, toggle Bisect and Flip, and pick mirror targets with live hover raycasting.
- **Boolean Cutter Helper**: Instant cutter search, single-key operation cycling (Difference, Union, Intersect, Slice), and auto-collection management.
- **Fitted Lattice**: Automatic 1-click object-aligned bounding box calculation and fitted cage generation.
- **Remember Defaults**: Save your favorite modifier parameters as personal startup defaults for future additions.

### Modpie Plus Exclusive Features
- **Presets & Stack Templates**: Snapshot single modifier recipes or entire multi-modifier pipelines and deploy them across any mesh with one click.
- **Continuous Live Linking**: Bidirectional real-time modifier synchronization across multiple objects. Tweak one mesh, and all linked meshes follow in lockstep.
- **One-Shot Stack Copying**: Quick parameter broadcasting with smart matching by name or modifier type.
- **Visual Stack Diff**: Side-by-side inspection popup comparing modifier stacks between selected meshes.
- **Hardware Evaluation Profiler**: Viewport-embedded hardware latency profiler measuring execution times in microseconds or milliseconds with visual load bars.
- **In-Viewport Slot Customizer**: Customize all 8 radial directions, slot labels, and arrival values directly in the 3D view.
- **Favorites Preset Pie**: Secondary 8-direction radial menu (<kbd>Shift + Alt + M</kbd>) dedicated exclusively to your hand-picked presets.

---

:::note Looking for Pre-Release Development History?
For internal logs and changelogs from earlier development iterations prior to launch, see the [Pre-Release Version History Archive](version-history.md).
:::
