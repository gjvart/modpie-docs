---
sidebar_position: 9
title: Mirror
description: Instant axis picking, interactive target mirror object selection, persistent viewport HUD card, and symmetry toggles.
---

# Mirror Modifier & Viewport Axis HUD

<div className="hero-badge-container">
  <span className="badge badge--secondary">Core: Visual Axis HUD & Symmetry</span>
</div>

Configuring symmetry with Blender's native Mirror modifier often involves tedious trial-and-error checkbox toggling. Modpie turns this into an intuitive, visual workflow.

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/modpie_mirror1.gif" alt="Mirror Modifier Axis HUD & Smart Bisect" />
  </div>
  <p className="media-caption">Figure: Interactive Mirror Axis HUD with Smart Bisect & Flip and 5 viewport position presets.</p>
</div>

---

## Key Features

### 1. Instant Axis Picking & Smart Bisect / Flip
When selecting or adding a Mirror modifier, Modpie enters axis-picking mode immediately. Moving the cursor toward any side of your mesh dynamically evaluates both the target axis and its **sign** (positive or negative):

- **Positive Axis (+X, +Y, +Z)**: Automatically activates the axis and enables **Bisect** (`use_bisect_axis = True`).
- **Negative Axis (-X, -Y, -Z)**: Automatically activates the axis, enables **Bisect**, and enables **Flip** (`use_bisect_flip_axis = True`).


:::tip Toggle Smart Bisect in Preferences
You can enable or disable automatic bisecting/flipping via the **Smart Bisect** boolean option in **Edit ▸ Preferences ▸ Add-ons ▸ Modpie ▸ Interactive** (enabled by default).
:::

---

### 2. Configurable Axis HUD Viewport Placement
The Mirror information card is pinned cleanly in the 3D viewport so it remains **100% visible** regardless of camera pan, zoom, mesh size, or viewport orientation. 

You can customize its anchor position via **Preferences ▸ Interactive ▸ Axis HUD Position**:

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/modpie_Axis_HUD_settings.png" alt="Mirror Modifier Axis HUD position presets" />
  </div>
  <p className="media-caption">Figure: Axis HUD position presets in Preferences.</p>
</div>

| Position Preset | Viewport Anchor | Best For |
| :--- | :--- | :--- |
| **Top Center** *(Default)* | Centered at top edge (`y = height - total_h - 38px`) | Clean symmetry and unobstructed view of model center |
| **Top Left** | Pinned upper left (`x = 42px, y = height - total_h - 55px`) | Keeps viewport center and top clear |
| **Top Right** | Pinned upper right corner | Keeps 3D cursor and transform gizmo clear |
| **Bottom Left** | Pinned lower left (`x = 42px, y = 95px`) | Elevated above Blender's status bar |
| **Bottom Center** | Centered along the bottom viewport edge | Compact central workflow |

All coordinates are automatically clamped to ensure the HUD card never clips outside the viewport, even on high-DPI displays or small split editors.

---

### 3. Clickable HUD Overlay & Hotkey Toggles
The HUD displays interactive, clickable toggle buttons with real-time state feedback:

- **Axes**: `[X]` / `[Y]` / `[Z]` (or press <kbd>X</kbd>, <kbd>Y</kbd>, <kbd>Z</kbd>, or press <kbd>A</kbd> to cycle axes)
- **Bisect**: `[B]` (or press <kbd>B</kbd> to toggle bisect on/off)
- **Flip**: `[F]` (or press <kbd>F</kbd> to flip bisect orientation)
- **Clipping**: `[C]` (or press <kbd>C</kbd> to prevent vertices from passing through the mirror plane)
- **Merge**: `[M]` (or press <kbd>M</kbd> to toggle merge vertices)
- **Target**: `[T]` (or press <kbd>T</kbd> to pick a mirror plane object via eyedropper, or click `[X]` to clear)

You can either click any button directly on the overlay with your mouse or use the corresponding keyboard hotkey while hovering in the viewport.

---

### 4. Setting a Target Mirror Object
Modpie allows you to set or change the modifier's **Mirror Object** interactively without leaving the viewport or opening the modifier properties panel:

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/modpie_mirror_target.gif" alt="Setting a Target Mirror Object Interactively in Modpie" />
  </div>
  <p className="media-caption">Figure: Pressing T to enter eyedropper mode and picking an Empty as the mirror plane object.</p>
</div>

#### How to Pick a Mirror Target:
1. **Enter Eyedropper Mode**: While in the interactive Mirror modal, press <kbd>T</kbd> on your keyboard or click the **Target** button on the bottom Axis HUD overlay.
2. **Hover Over Any Reference Object**: The cursor transforms into an eyedropper target crosshair displaying the tooltip:
   ```text
   Hover over mirror plane object...
   ```
   Hover over any Empty, curve, or mesh in the 3D viewport.
3. **Confirm Selection**: Click <kbd>Left Mouse Button</kbd> (LMB) on the desired object. Modpie immediately assigns it as the `mirror_object`.
4. **Target-Relative Symmetry**: The mirror plane, reflection axes, and guide lines immediately reorient around the target object's origin and transform orientation rather than the active mesh's own origin.
5. **Clear or Change Target**:
   - Press <kbd>T</kbd> again at any time to pick a different mirror object.
   - Click the red **`[X]`** button next to the assigned target name on the bottom HUD card to immediately clear the mirror object back to `None`.
   - Press <kbd>Right Mouse Button</kbd> (RMB) or <kbd>Esc</kbd> while the eyedropper is active to exit target picking without making changes.
