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
    <img src="/modpie-docs/img/media/modpie_interactiveHud2.gif" alt="Adding Modifiers in Interactive Mode" />
  </div>
  <p className="media-caption">Figure: Adding modifiers via the radial menu and dragging parameters live in interactive mode.</p>
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

### Viewport HUD Card (The Big Readout)
In addition to the cursor-follower, Modpie displays a prominent HUD card in the viewport showing the active parameter, all adjustable channels, toggles, and navigation shortcuts at a glance:
<div className="media-card">
  <div className="media-container" style={{padding: '24px 16px', background: '#090c10'}}>
    <img src="/modpie-docs/img/media/modpie_bevelcard.png" alt="Bevel Interactive HUD Card" style={{maxWidth: '360px', width: '100%', height: 'auto', borderRadius: '6px'}} />
  </div>
  <p className="media-caption">Figure: The interactive viewport HUD card displaying active values, quick toggles, and live stack shortcuts.</p>
</div>

### Fade Announcement Toasts
When you confirm a modal drag, a sleek banner appears over the viewport saying what happened (`Bevel added` with applied values) before fading away. Cancelling displays a notice in a warm accent so discarded drags are never ambiguous.

---

## 2. Tactile Controls & Precision Dragging

- **Standard Drag**: Smooth horizontal mouse dragging proportional to viewport distance.
- **<kbd>Shift</kbd> + Drag (Fine Mode)**: 10× slower sensitivity for millimeter adjustments.
- **<kbd>Ctrl</kbd> + Drag (Snapping Mode)**: Snaps to clean metric increments (e.g. 0.1m, 1.0m).
- **<kbd>Wheel Up</kbd> / <kbd>Down</kbd>**: Adjusts discrete integer counts (Bevel Segments, Array Count, Subdivision levels).
- **<kbd>Alt</kbd> + <kbd>Wheel Up</kbd> / <kbd>Down</kbd>**: Shifts the modifier up or down the evaluation stack on the fly (see [Interactive Stack Reordering](stack-reordering.md)).
- **<kbd>Tab</kbd>**: Cycles to the next adjustable channel.
- **<kbd>Ctrl + Tab</kbd> / <kbd>Ctrl + Shift + Tab</kbd>**: Steps forward or backward through modifiers in the stack without leaving modal mode.
- **<kbd>[</kbd> / <kbd>]</kbd> or <kbd>Page Up</kbd> / <kbd>Page Down</kbd>**: Steps to previous or next modifier in the stack.
- **<kbd>Ctrl + Wheel Up</kbd> / <kbd>Down</kbd>**: Cycles modifiers using the mouse wheel.
- **<kbd>Alt + 1..9</kbd>**: Jumps directly to modifier slot 1 through 9.
- **<kbd>LMB</kbd> / <kbd>Enter</kbd>**: Confirms all adjusted modifiers and closes the interactive session.
- **<kbd>Esc</kbd> / <kbd>RMB</kbd>**: Reverts all touched modifiers and stack order to their pre-drag state.

---

## 3. Real-Time Numeric Typing & Value Locking

In any interactive modifier modal mode (such as Solidify thickness, Bevel width/segments, Array count/offset, Screw angle/steps, etc.), you have exact numeric keyboard input with built-in accidental drag protection:

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/modpie_SetValue.gif" alt="Use the number keys or numpad to set exact values while in Interactive Mode" />
  </div>
  <p className="media-caption">Figure: Using number keys or the numpad to set exact values in Interactive Mode.</p>
</div>

- **Real-Time Keyboard Input**: Typing digits (`0`–`9`), minus (`-`), or decimal period (`.`) on your keyboard or numpad immediately calculates and applies the value in real-time (<kbd>Backspace</kbd> to edit).
- **Lock Value on <kbd>Enter</kbd>**: Pressing <kbd>Enter</kbd> or <kbd>Numpad Enter</kbd> while actively entering a numeric value sets and **locks** that value immediately without closing the interactive session.
- **Mouse Drag Protection**: Once locked, moving the mouse across the 3D viewport does not alter or drag the locked value, completely preventing accidental adjustments while inspecting your mesh from different angles.
- **Unlock to Resume Dragging (<kbd>Spacebar</kbd>)**: Pressing <kbd>Spacebar</kbd> seamlessly unlocks the value so mouse dragging can resume smoothly from the locked value if you wish to continue tweaking interactively.

---

## 4. Mid-Drag Modifier Switching

When shaping 3D objects with a stack of modifiers (such as Solidify + Bevel + Subdivision Surface), you often want to tweak each modifier's settings interactively in one smooth session without ever opening the side panel or navigating Blender's modifier tabs.

Modpie introduces **Mid-Drag Modifier Switching** directly inside interactive mode:

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/mp_modswitching_interactive.gif" alt="Switching between modifiers live in Interactive Mode" />
  </div>
  <p className="media-caption">Figure: Switching between different modifiers in the stack during an interactive viewport session.</p>
</div>

### Switch Across Any Modifier Type
You can seamlessly jump from adjusting Solidify thickness or offset to tweaking Bevel width or segments to adjusting Subsurf levels—all without leaving your interactive viewport session.

### Dedicated Navigation Shortcuts
- <kbd>Ctrl + Tab</kbd> / <kbd>Ctrl + Shift + Tab</kbd>: Step forward or backward through the entire modifier stack.
- <kbd>[</kbd> / <kbd>]</kbd> and <kbd>Page Up</kbd> / <kbd>Page Down</kbd>: Step to the previous or next modifier in the stack.
- <kbd>Ctrl + Wheel Up</kbd> / <kbd>Ctrl + Wheel Down</kbd>: Cycle modifiers quickly with the scroll wheel.
- <kbd>Alt + 1..9</kbd>: Direct slot jump to any modifier 1 through 9 in the stack.
- <kbd>Tab</kbd> / <kbd>Shift + Tab</kbd> on single-channel modifiers (like Subsurf or Mirror): Directly cycles to adjacent modifiers in the stack.
- **HUD Chevrons**: Clickable **<kbd>‹</kbd>** and **<kbd>›</kbd>** arrow buttons on the HUD title bar let you step between modifiers with a single mouse click.

### Sibling Modifier Switching
When your object has multiple modifiers of the same type (for example, two Bevel modifiers—one for primary silhouette and one for highlights—or multiple Solidify modifiers), you can also jump directly between those siblings:

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/mp_siblingadjust1.gif" alt="Switching and adjusting sibling modifiers live in Interactive Mode" />
  </div>
  <p className="media-caption">Figure: Switching between same-type sibling modifiers and tweaking their parameters live.</p>
</div>

- **Shortcut**: Hold <kbd>Ctrl</kbd> and scroll **Wheel Up / Down** (or press **<kbd>[</kbd>** / **<kbd>]</kbd>**) to switch between sibling modifiers on the active object.
- **Live Feedback**: The HUD readout immediately updates to show which sibling is active (such as `Bevel (1/2)` or `Bevel (2/2)`), and your mouse movements instantly apply to that modifier.

### Unified Multi-Modifier Confirmation
When you are happy with your adjustments, press <kbd>Left-Click</kbd> or <kbd>Enter</kbd>. Modpie commits and keeps all adjustments made across every modifier you touched during the session. The status bar and viewport overlay display the total number of updated modifiers (for example, `Updated 3 modifiers`).

### Unified Multi-Modifier Rollback
If you change your mind, press <kbd>Right-Click</kbd> or <kbd>Esc</kbd>. Modpie instantly rolls back every modifier touched during the session to its exact pre-modal state. If the session was started by adding a brand new modifier, that modifier is cleanly discarded.

### Multi-Object Synchronization (Modpie Plus)
When multiple objects are selected, switching modifiers in interactive mode automatically syncs and retargets matching modifiers across all selected objects.

### Preference Toggle
You can customize modifier switching behavior in **Preferences ▸ Interactive Drag**:
- **Mid-Drag Modifier Switching** (Default: *Enabled*):
  - **When enabled**: Switching keys cycle through all modifiers across your object's entire stack.
  - **When disabled**: Switching keys cycle only between same-type sibling modifiers (for instance, jumping between a first and second Bevel modifier).


