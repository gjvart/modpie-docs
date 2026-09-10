---
sidebar_position: 21
title: Preferences
description: Complete configuration reference for Pie Slots, Keymaps, Panel, Interactive Modal, and Plus settings.
---

# Preferences & Settings

<div className="hero-badge-container">
  <span className="badge badge--secondary">Core: Preferences</span>
  <span className="badge badge--primary">Plus: Library & Profiler Settings</span>
</div>

Configure Modpie to match your personal modeling habits by navigating to **Edit ▸ Preferences ▸ Add-ons ▸ Modpie** in Blender.

---

## 1. Pie Slots Tab

- **The 3×3 Grid**: Visual representation of the radial pie menu. Click any slot to assign its modifier or tool.
- **Repeating a Modifier on the Same Object**:
  - *Adjust the Existing One* (Default): Enters modal dragging on the existing modifier.
  - *Always Add Another*: Never adjusts; always stacks a new modifier.
  - *Ask Each Time*: Opens a popup menu listing existing modifiers plus *Add Another*.
- **Add Modifier and Search Always Add**: When enabled (default), selections from the Add Modifier list or the search popup always create a brand-new modifier.
- **Show Duplicate Counts on Pie**: Displays `×2`, `×3`, etc. on slots when the active mesh carries multiple modifiers of that type.
- **Smarter Starting Values**: Scales initial lengths and offsets to the active object's bounding box.

---

## 2. Keymap Tab

Modpie gives you direct access to customize its hotkeys without searching through Blender's entire keymap tree:

- **Open Modifier Pie**: Default <kbd>Alt + M</kbd>. Click the field and press your new key combination to rebind.
- **Open Modifier Panel**: Default <kbd>Ctrl + Alt + M</kbd>. Directly summons the viewport modifier stack panel.
- **Favorites Preset Pie <span className="badge badge--primary">Plus</span>**: Default <kbd>Shift + Alt + M</kbd> *(In 9.8.0+, presets & stack templates are also integrated directly into the radial menu's SE slot)*.

:::tip Extra Tip: Extra Mouse Buttons
If you use a mouse with extra side/thumb buttons (such as **Mouse Button 4** or **Mouse Button 5**), I strongly recommend binding Modpie to these mouse side buttons!

Recommended bindings:
- **Radial Pie**: **<kbd>Mouse Button 4</kbd> + <kbd>Shift</kbd>** (or <kbd>Ctrl</kbd>)
- **Stack Panel**: **<kbd>Mouse Button 5</kbd>** (or <kbd>Mouse Button 4</kbd> + <kbd>Alt</kbd>)

**Why?** It transforms Modpie into an ergonomic, one-handed radial powerhouse. You click your thumb button, flick your mouse in the direction of the modifier, and begin interactive dragging without lifting or contorting your left hand from standard modeling keys (<kbd>Tab</kbd>, <kbd>Shift</kbd>, <kbd>Ctrl</kbd>, <kbd>Space</kbd>).

To set this up: Click the shortcut entry in the **Keymap** tab, press your mouse side button, and check the **Shift** or **Ctrl** box.
:::

---

## 3. Panel Tab

- **Panel Style**:
  - **Popup** (Default): Spawns under your cursor; closes automatically when you click away or begin an interactive modal drag.
  - **Dialog**: Spawns as a floating, draggable window that stays open until dismissed.
- **Default Width**: Adjust the width of the popup and sidebar cards in pixels.
- **Sidebar Tab Name**: Rename the 3D Viewport sidebar tab (Default: `Modifiers` under the <kbd>N</kbd> panel).
- **Show Quick Add Bar**: Toggle the upper quick-add icon strip on the panel.
- **Affect All Selected Objects**: Batch-adds and drags modifiers across all selected meshes simultaneously.

---

## 4. Interactive Tab

- **Drag Sensitivity**: Tune the base multiplier for mouse dragging speed.
- **Scale by Object Size**: Scales drag increments dynamically based on object physical dimensions.
- **Readout Scale & Position**: Adjust the font size and distance of the cursor-follower HUD readout.
- **Big Bottom Readout**: Toggle or resize the prominent status HUD low in the viewport.
- **Axis HUD Position**: Configures the 3D viewport anchor for the Mirror and Axis HUD card:
  - `Top Center` (Default): Pinned to the upper center edge.
  - `Top Left`: Upper left corner.
  - `Top Right`: Upper right corner.
  - `Bottom Left`: Lower left, elevated above Blender's status bar.
  - `Bottom Center`: Lower center edge.
- **Smart Bisect**: Automatically enables Bisect on positive axes and Bisect + Flip on negative axes during interactive Mirror axis picking.
- **Lock Custom Defaults**: Starts interactive mode in a protected `[LOCKED]` state for modifiers with saved custom defaults. Press <kbd>Space</kbd> to unlock.
- **Axis Badge on Object**: Toggle the `[X Y Z]` RGB origin badge.
- **3D Axis Guides**: Toggle the dynamic 3D evaluation lines drawn through the mesh.
- **Viewport Announcement**: Controls how long the post-drag completion notification stays on screen (in seconds; set to `0` to disable).
- **Confirm on Release**: Confirms the modal drag the moment you release the mouse button.

---

## 5. Plus Tab <span className="badge badge--primary">Plus</span>

- **Auto-Sync After a Drag**: Automatically pushes confirmed interactive adjustments to all other selected meshes.
- **Show Evaluation Times**: Toggles the modifier evaluation profiler at the foot of the panel (disabled by default for maximum performance).
- **Saved Default Values**: View, manage, and toggle lock protection (`Lock Custom Defaults`) for all saved modifier default values.
- **Preset Library Manager**: Inspect, rename, favorite, delete, or export your saved modifier presets and stack templates.
- **Preset Library Path**: View or change the path to the persistent `presets.json` file on your system.
