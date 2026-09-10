---
sidebar_position: 4
title: Shortcuts
description: Complete hotkey and interactive modal control reference for Modpie & Modpie Plus.
---

# Shortcuts Cheat Sheet

Modpie is built for speed and muscle memory. Below is the complete hotkey reference across the viewport and interactive modal modes.

---

## 1. Viewport Hotkeys

| Keybinding | Context | Availability | Action |
| :--- | :--- | :---: | :--- |
| <kbd>Alt</kbd> + <kbd>M</kbd> | 3D Viewport | <span className="badge badge--secondary">Core</span> | Open **Modpie Radial Pie Menu** |
| <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>M</kbd> | 3D Viewport | <span className="badge badge--secondary">Core</span> | Open **Modpie Viewport Stack Panel** popup |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>M</kbd> | 3D Viewport | <span className="badge badge--primary">Plus (&le;0.9.59)</span> | Open **Favorites Preset Pie** *(In 0.9.80+, presets & stack templates are unified directly into the main radial menu SE slot and panel button)* |
| <kbd>N</kbd> ▸ **Modifiers** | 3D Viewport Sidebar | <span className="badge badge--secondary">Core</span> | Open Modpie sidebar tab |

### How to Customize Hotkeys

All Modpie shortcuts can be customized to match your personal modeling habits:

1. Open **Edit ▸ Preferences ▸ Add-ons ▸ Modpie**.
2. Expand the **Keymap** tab.
3. Click the shortcut box next to **Open Modifier Pie** (default: `Alt + M`) or **Open Modifier Panel** (default: `Ctrl + Alt + M`).
4. Press your desired key combination, mouse button, or modifier key.

:::tip Extra Tip: Extra Mouse Buttons
If you have a mouse with extra side/thumb buttons (such as **Mouse Button 4** or **Mouse Button 5**), that is my preferred and strongly recommended shortcut for Modpie!

For example:
- **<kbd>Mouse Button 4</kbd> + <kbd>Shift</kbd>** or **<kbd>Mouse Button 4</kbd> + <kbd>Ctrl</kbd>** to summon the Radial Pie Menu.
- **<kbd>Mouse Button 5</kbd>** (or **<kbd>Mouse Button 4</kbd> + <kbd>Alt</kbd>**) to open the Viewport Stack Panel.

**Why this workflow feels superior:**
- **Zero Finger Contortion**: Avoids stretching your left thumb and pinky across the keyboard for `Alt + M`.
- **Lighting-Fast Radial Flicks**: Your mouse thumb triggers the pie, your wrist flicks in the desired direction, and you're immediately dragging modifier values in one smooth motion.
- **Left Hand Stays Anchored**: Your left hand remains comfortably resting on standard Blender navigation and selection keys (<kbd>Tab</kbd>, <kbd>Shift</kbd>, <kbd>Ctrl</kbd>, <kbd>Space</kbd>).

To configure this: In **Edit ▸ Preferences ▸ Add-ons ▸ Modpie ▸ Keymap**, click the shortcut box and simply click your mouse side button, then tick the **Shift** or **Ctrl** checkbox.
:::

:::note 0.9.80+ Presets Integration
Starting in **Modpie Plus 0.9.80**, saved presets and stack templates are conveniently integrated directly into the radial menu's **Presets & Stacks** slot and panel buttons, removing global keymap conflicts.
:::

---

## 2. Interactive Modal Controls (All Modifiers)

When adjusting any modifier in interactive modal mode:

| Input | Action | Details |
| :--- | :--- | :--- |
| <kbd>Mouse Drag</kbd> | **Adjust Value** | Drag horizontally to modify the active highlighted property. |
| <kbd>Shift</kbd> + <kbd>Drag</kbd> | **Fine Precision** | 10× slower sensitivity for millimeter-level adjustments. |
| <kbd>Ctrl</kbd> + <kbd>Drag</kbd> | **Incremental Snapping** | Snaps to clean numeric increments (e.g. 0.1m, 1.0m). |
| <kbd>Wheel Up</kbd> / <kbd>Down</kbd> | **Step Discrete Count** | Increments or decrements counts (Segments, Array Count, Subsurf Levels). |
| <kbd>0</kbd>–<kbd>9</kbd> / <kbd>.</kbd> | **Direct Numeric Typing** | Type an exact number directly while dragging (<kbd>Backspace</kbd> to correct). |
| <kbd>Tab</kbd> | **Cycle Channel** | Advances to the next adjustable property in the modifier. |
| <kbd>Ctrl</kbd> + <kbd>Wheel</kbd> or <kbd>[</kbd> / <kbd>]</kbd> | **Sibling Switcher** | Jump between same-type modifiers on the object without leaving the modal. |
| Click <kbd>‹</kbd> <kbd>›</kbd> UI arrows | **Click Sibling Switcher** | Switch between sibling modifiers using the on-screen readout arrows. |
| <kbd>Enter</kbd> / <kbd>Space</kbd> / <kbd>LMB</kbd> | **Confirm** | Commits changes and cleanly exits modal mode. |
| <kbd>Esc</kbd> / <kbd>RMB</kbd> | **Cancel** | Cancels adjustments and reverts all properties to their original state. |

---

## 3. Modifier-Specific Hotkeys

### Mirror Modifier
- <kbd>Mouse Drag</kbd>: Drag toward any side of the mesh to point to and pick that axis
- <kbd>Shift</kbd> + <kbd>Drag</kbd>: Additively latch and add one axis at a time (emerald green guideline)
- <kbd>Spacebar</kbd>: Toggle axis lock (`Locked` / `Unlocked`)
- <kbd>X</kbd> / <kbd>Y</kbd> / <kbd>Z</kbd>: Jump directly to single axis
- <kbd>Shift</kbd> + <kbd>X</kbd> / <kbd>Y</kbd> / <kbd>Z</kbd>: Additively toggle axis on/off
- <kbd>A</kbd>: Cycle through axes ($X \rightarrow Y \rightarrow Z \rightarrow X$), <kbd>Shift</kbd> + <kbd>A</kbd> reverses
- <kbd>B</kbd>: Toggle **Bisect** on active axis
- <kbd>F</kbd>: Toggle **Flip** on active axis
- <kbd>C</kbd>: Toggle **Clipping**
- <kbd>M</kbd>: Toggle **Merge**
- <kbd>T</kbd>: Pick target mirror object (interactive eyedropper)

### Boolean Modifier
- <kbd>A</kbd>: Cycle operation ($Difference \rightarrow Intersect \rightarrow Union \rightarrow Difference$)
- <kbd>D</kbd>: Set **Difference**
- <kbd>U</kbd>: Set **Union**
- <kbd>I</kbd>: Set **Intersect**
- <kbd>S</kbd>: Toggle **Solver** (Fast / Exact)
- <kbd>H</kbd>: Toggle **Hole Tolerant**

### Bevel Modifier
- <kbd>Drag</kbd>: Adjust **Width**
- <kbd>Wheel</kbd> / <kbd>S</kbd>: Adjust **Segments**
- <kbd>P</kbd>: Adjust **Profile**
- <kbd>E</kbd>: Adjust **Angle Limit** (automatically enables Angle limit method)
- <kbd>M</kbd>: Swap directly between **Angle** and **Weight** limit methods
- <kbd>Q</kbd>: Cycle through all 4 limit methods (None / Angle / Weight / VGroup)
- <kbd>C</kbd>: Toggle **Clamp Overlap**
- <kbd>H</kbd>: Toggle **Harden Normals**
- <kbd>L</kbd>: Toggle **Loop Slide**
- <kbd>T</kbd>: Cycle **Width Type** (Offset / Width / Depth / Percent / Absolute)
- <kbd>A</kbd>: Toggle **Affect** (Edges / Vertices)

### Solidify Modifier
- <kbd>Drag</kbd>: Adjust **Thickness**
- <kbd>O</kbd>: Adjust **Offset**
- <kbd>E</kbd>: Toggle **Even Thickness**
- <kbd>R</kbd>: Toggle **Fill Rim**
- <kbd>Y</kbd>: Toggle **Only Rim**
- <kbd>F</kbd>: Toggle **Flip Normals**
- <kbd>M</kbd>: Cycle **Mode** (Simple / Complex)

### Subdivision Surface Modifier
- <kbd>Drag</kbd> / <kbd>Wheel</kbd>: Adjust **Viewport Levels**
- <kbd>R</kbd>: Adjust **Render Levels**
- <kbd>O</kbd>: Toggle **Optimal Display**
- <kbd>T</kbd>: Toggle **Type** (Catmull-Clark / Simple)
- <kbd>C</kbd>: Toggle **Use Creases**

### Array Modifier (Legacy C)
- <kbd>Drag</kbd> / <kbd>Wheel</kbd>: Adjust **Count**
- <kbd>O</kbd>: Adjust **Relative Offset** (turns Constant Offset OFF)
- <kbd>K</kbd>: Adjust **Constant Offset** (turns Relative Offset OFF)
- <kbd>X</kbd> / <kbd>Y</kbd> / <kbd>Z</kbd>: Cycle offset axis
- <kbd>M</kbd>: Toggle **Merge Vertices**
- <kbd>F</kbd>: Cycle **Fit Type** (Fixed Count / Fit Length / Fit Curve)

### Array Modifier (Blender 5.0+ Geometry Nodes Asset)
- <kbd>Wheel</kbd> / <kbd>C</kbd>: Adjust **Count**
- <kbd>D</kbd>: Adjust **Distance**
- <kbd>O</kbd>: Adjust **Offset vector** (supports <kbd>X</kbd>, <kbd>Y</kbd>, <kbd>Z</kbd>)
- <kbd>T</kbd>: Adjust **Translation vector** (supports <kbd>X</kbd>, <kbd>Y</kbd>, <kbd>Z</kbd>)
- <kbd>S</kbd>: Adjust **Scale vector** (supports <kbd>X</kbd>, <kbd>Y</kbd>, <kbd>Z</kbd>)
- <kbd>M</kbd>: Toggle **Merge**
- <kbd>R</kbd>: Toggle **Realize Instances**
- <kbd>F</kbd>: Cycle **Offset Method** (Absolute / Constant / Relative)
- <kbd>P</kbd>: Cycle **Shape** (Line / Grid / Circle / Curve)

### Shrinkwrap Modifier
- <kbd>Drag</kbd>: Adjust **Offset**
- <kbd>T</kbd> (hovering over object): **3D Raycast Hover-Pick** target in viewport
- <kbd>T</kbd> (in empty space): Cycle candidate target scene objects
- <kbd>W</kbd>: Cycle **Wrap Method** (Nearest Surface Point / Project / Nearest Vertex / Target Normal Project)
- <kbd>M</kbd>: Cycle **Snap Mode**

### Simple Deform Modifier
- <kbd>Drag</kbd>: Adjust **Angle / Factor**
- <kbd>C</kbd>: Cycle axis ($X \rightarrow Y \rightarrow Z \rightarrow X$)
- <kbd>X</kbd> / <kbd>Y</kbd> / <kbd>Z</kbd>: Jump directly to axis
- <kbd>M</kbd>: Cycle **Mode** (Twist / Bend / Taper / Stretch)

### Screw Modifier
- <kbd>Drag</kbd>: Adjust **Angle / Screw Length**
- <kbd>Wheel</kbd> / <kbd>S</kbd>: Adjust **Steps**
- <kbd>I</kbd>: Adjust **Iterations**
- <kbd>X</kbd> / <kbd>Y</kbd> / <kbd>Z</kbd>: Cycle axis
- <kbd>M</kbd>: Toggle **Merge**
