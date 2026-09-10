---
sidebar_position: 7
title: Interactive Mode
description: Real-time viewport dragging, cursor-following HUD, on-mesh RGB axis badge, and 3D guide lines.
---

# Interactive Mode & Viewport HUD

<div className="hero-badge-container">
  <span className="badge badge--secondary">Core: Live Viewport HUD & Dragging</span>
</div>

Adding modifiers in default Blender is static and detached—requiring you to click a menu item, look away to the Properties editor, and drag sliders blindly. 

Modpie turns adding modifiers into a live, tactile experience with dynamic 3D viewport overlays.

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/Bevel_InteractiveMode.gif" alt="Adding Modifiers in Interactive Mode" />
  </div>
  <p className="media-caption">Figure 4: Adding modifiers via the radial menu and dragging parameters live in interactive mode.</p>
</div>

---

## 1. Dynamic HUD Overlays

### Cursor-Follower Readout
The active numeric property name (e.g. `Width`, `Thickness`, `Count`, `Offset`) and live evaluated value are drawn in high-contrast typography directly next to your mouse pointer. Below the active value, all secondary properties and their hotkeys are shown.

### On-Mesh Origin Axis Badge (`[X Y Z]`)
A clean `[X Y Z]` badge is drawn directly at the active object's origin. The active axis lights up in standard 3D RGB colors (Red = X, Green = Y, Blue = Z), with *Bisect* and *Flip* indicators displayed when enabled.

### Real 3D Evaluation Axis Guides
True 3D evaluation axis lines are drawn through the object in the viewport, updating dynamically during object rotations, camera panning, and offset adjustments. Array draws a line along which the copies march, complete with a tick at the far end.

### Scene-Space Axis Alignment
A modifier's axes are local to its object. If you rotate the mesh, "X" no longer points along the scene's X axis. Modpie draws a real-time alignment indicator:

| Display | Meaning |
| :--- | :--- |
| `Scene Axis  X` | Mirroring across local X, which is square to the scene |
| `Scene Axis  X → Y` | Mirroring across local X, which points along the scene's **Y** |
| `Direction  +X` | Array copies marching along the scene's positive X |
| `Direction  follows Empty` | Offset comes from another object's transform |

### The Big Bottom Readout
Centered low in the viewport, Modpie displays a prominent readout showing:
```
  BEVEL
  Width   0.0200
  W Width · S Segments · P Profile · E Angle Limit · M Limit · C Clamp
  LMB confirm · Esc cancel · Tab next value · type a number · Shift precise
```

### Fade Announcement Toasts
When you confirm a modal drag, a sleek banner appears over the viewport saying what happened (`Bevel added` with applied values) before fading away. Cancelling displays a notice in a warm accent so discarded drags are never ambiguous.

---

## 2. Tactile Controls

- **Standard Drag**: Smooth horizontal mouse dragging proportional to viewport distance.
- **<kbd>Shift</kbd> + Drag (Fine Mode)**: 10× slower sensitivity for millimeter adjustments.
- **<kbd>Ctrl</kbd> + Drag (Snapping Mode)**: Snaps to clean metric increments (e.g. 0.1m, 1.0m).
- **<kbd>Wheel Up</kbd> / <kbd>Down</kbd>**: Adjusts discrete integer counts (Bevel Segments, Array Count, Subdivision levels).
- **Direct Numeric Typing**: Type digits (`0`–`9`, `.`, `-`) directly while dragging (<kbd>Backspace</kbd> to correct).
- **<kbd>Tab</kbd>**: Cycles to the next adjustable channel.
- **<kbd>Ctrl + Wheel</kbd> or <kbd>[</kbd> / <kbd>]</kbd>**: Switches between sibling modifiers on the object.
- **<kbd>Enter</kbd> / <kbd>Space</kbd> / <kbd>LMB</kbd>**: Confirms changes.
- **<kbd>Esc</kbd> / <kbd>RMB</kbd>**: Reverts all changes to their pre-drag state.
