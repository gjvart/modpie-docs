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
- **Object Pie Action**: Configures default click behavior in the [Object Modifiers Pie](object-pie.md) (<kbd>Shift + Ctrl + M</kbd>):
  - *Adjust Interactively* (Default): Starts live viewport dragging on click.
  - *Open in Panel*: Opens the floating Modpie panel focused on that modifier.
- **Add Modifier and Search Always Add**: When enabled (default), selections from the Add Modifier list or the search popup always create a brand-new modifier.
- **Show Duplicate Counts on Pie**: Displays `×2`, `×3`, etc. on slots when the active mesh carries multiple modifiers of that type.
- **Smarter Starting Values**: Scales initial lengths and offsets to the active object's bounding box.

---

## 2. Keymap Tab

Modpie gives you direct access to customize its hotkeys without searching through Blender's entire keymap tree:

- **Open Modifier Pie**: Default <kbd>Alt + M</kbd>. Summons the standard radial pie menu.
- **Object Modifiers Pie**: Default <kbd>Shift + Ctrl + M</kbd>. Dynamically populates with modifiers on the active object.
- **Open Modifier Panel**: Default <kbd>Ctrl + Alt + M</kbd>. Directly summons the viewport modifier stack panel.
- **Favorites Preset Pie <span className="badge badge--primary">Plus</span>**: Default <kbd>Shift + Alt + M</kbd> *(In unified builds, presets & stack templates are also integrated directly into the radial menu's SE slot)*.

:::tip Extra Tip: Extra Mouse Buttons
If you use a mouse with extra side/thumb buttons (such as **Mouse Button 4** or **Mouse Button 5**), I strongly recommend binding Modpie to these mouse side buttons!

Recommended bindings:
- **Radial Pie**: **<kbd>Mouse Button 4</kbd> + <kbd>Shift</kbd>** (or <kbd>Ctrl</kbd>)
- **Stack Panel**: **<kbd>Mouse Button 5</kbd>** (or <kbd>Mouse Button 4</kbd> + <kbd>Alt</kbd>)

**Why?** It transforms Modpie into an ergonomic, one-handed radial powerhouse. You click your thumb button, flick your mouse in the direction of the modifier, and begin interactive dragging without lifting or contorting your left hand from standard modeling keys (<kbd>Tab</kbd>, <kbd>Shift</kbd>, <kbd>Ctrl</kbd>, <kbd>Space</kbd>).

To set this up: Click the shortcut entry in the **Keymap** tab, press your mouse side button, and check the **Shift** or **Ctrl** box.
:::

---

## 3. Panel Tab (`PANEL`)

The Panel settings are organized into clean configuration cards:

### 1. Modifier Panel (`MENU_PANEL`)
- **Panel Style**:
  - **Popup** (Default): Spawns under your cursor; closes automatically when you click away or begin an interactive modal drag.
  - **Dialog**: Spawns as a floating, draggable window that stays open until dismissed.
- **Default Width**: Adjust the width of the popup and sidebar cards in pixels.
- **Pie Presets in Panel**: Display quick preset triggers directly in panel cards.
- **Cage Toggles**: Display Edit Mode cage toggle icons on modifier headers.
- **Active-Only Expand**: Automatically collapses non-active modifiers when one is expanded.
- **Open Panel After Non-Interactive Add**: Automatically opens the stack panel when adding a modifier that does not enter interactive mode.

### 2. 3D Viewport Sidebar Tab (N-Panel) (`WINDOW`)
- **Sidebar Tab Toggle**: Enable or disable the Modpie panel in Blender's 3D Viewport Sidebar (<kbd>N</kbd> key).
- **Custom Tab Category Name**: Rename the sidebar tab (Default: `Modifiers`).

---

## 4. Interactive Tab (`MODAL`)

The Interactive preferences are structured into five dedicated, icon-headed cards:

### 1. Drag Interaction & Behavior (`MOUSE_MOVE`)
- **Drag Sensitivity**: Base speed multiplier for mouse dragging in modal mode.
- **Scale by Object Size**: Scales drag increments dynamically based on object bounding dimensions.
- **Confirm on Mouse Release**: Immediately commits the modal drag when you release the mouse button.
- **Interactive by Default**: Directly enters interactive modal dragging when adding modifiers.
- **Affect All Selected Objects**: Batch-adds and drags modifiers across all selected meshes simultaneously.
- **Smart Defaults**: Adapts initial parameters to geometry scale.
- **Lock Custom Defaults**: Starts interactive mode in a protected `[LOCKED]` state for modifiers with saved custom defaults (<kbd>Spacebar</kbd> unlocks).

### 2. Stack Reordering (Interactive Mode) (`ARROW_LEFTRIGHT`)
- **Reorder Shortcut**: Choose between `Alt + Scroll Wheel` *(Default)*, `Shift + Scroll Wheel`, `Ctrl + Alt + Scroll Wheel`, or `Disabled` (see [Interactive Stack Reordering](stack-reordering.md)).
- **Invert Scroll Direction**: Toggles whether Wheel Up moves down and Wheel Down moves up.
- **Context Hint**: Shows or hides the dynamic reorder shortcut hint in the viewport HUD and status bar.

### 3. Viewport Readout (HUD) (`RESTRICT_VIEW_OFF`)
- **Viewport HUD Toggle**: Master toggle for cursor-follower overlays.
- **HUD Scale**: Font and element scale multiplier for on-screen text.
- **X / Y Pixel Offset Sliders**: Fine-tune the cursor follower distance from the mouse pointer.
- **Big Readout Live Banner**: Toggles the prominent lower status HUD card.

### 4. Axis Guides & Overlays (`EMPTY_AXIS`)
- **Axis Line Guides Toggle**: Draws 3D evaluation axis lines through the object in the viewport.
- **Smart Bisect & Flip**: Automatically enables Bisect on positive axes and Bisect + Flip on negative axes during interactive Mirror axis picking.
- **Axis HUD Position**: Configures the viewport anchor for the Axis HUD card (`Top Center`, `Top Left`, `Top Right`, `Bottom Left`, `Bottom Center`).
- **Axis Badge on Object**: Toggles the RGB `[X Y Z]` origin badge.

### 5. Announcements (`INFO`)
- **Change Announcements Toggle**: Displays fade-out toast banners upon confirming or cancelling drags.
- **Duration Slider**: Controls display duration in seconds (`0` disables).
- **Font Size Scale Slider**: Scales notification toast typography.

---

## 5. Plus Tab <span className="badge badge--primary">Plus</span>

- **Auto-Sync After a Drag**: Automatically pushes confirmed interactive adjustments to all other selected meshes.
- **Show Evaluation Times**: Toggles the modifier evaluation profiler at the foot of the panel (disabled by default for maximum performance).
- **Saved Default Values**: View, manage, and toggle lock protection (`Lock Custom Defaults`) for all saved modifier default values.
- **Preset Library Manager**: Inspect, rename, favorite, delete, or export your saved modifier presets and stack templates.
- **Preset Library Path**: View or change the path to the persistent `presets.json` file on your system.
