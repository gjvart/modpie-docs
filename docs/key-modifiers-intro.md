---
sidebar_position: 1
title: Overview
description: A quick introduction to the Key Modifiers & Helpers section in Modpie.
---

# About Key Modifiers & Helpers

<div className="hero-badge-container">
  <span className="badge badge--secondary">Core: Smart Modifiers & Helpers</span>
</div>

While Modpie works with every single modifier in Blender, a handful of everyday modifiers received special attention. 

If you have spent any time modeling in Blender, you know that certain modifiers—like **Mirror**, **Boolean**, **Array**, and **Shrinkwrap**—are ones you reach for constantly. But in default Blender, they often come with little annoyances:
- Checking and unchecking axis boxes by trial and error to see which way your Mirror flips.
- Searching through a long list of scene objects just to pick a Boolean cutter or Shrinkwrap target.
- Adjusting Array offsets while your object rotates, wondering why the copies are flying off in unexpected directions.
- Manually creating, scaling, and binding a Lattice object just to reshape a piece of geometry.

This section covers the smart helpers Modpie adds to these everyday modifiers to make them feel fast, natural, and visual.

---

## What You Will Find in This Section

Here is a quick look at the guides in this section and what each helper does:

### 1. [Mirror Modifier & Visual Axis HUD](mirror-mod.md)
Instead of guessing whether you need the X, Y, or Z axis, Modpie lets you point your mouse toward any side of your mesh during interactive mode to pick the axis visually. It also adds a live on-screen HUD with clickable buttons for Bisect and Flip, and an interactive eyedropper (<kbd>T</kbd>) to pick mirror target objects directly in the 3D viewport.

### 2. [Boolean Modifier & Cutter Picker](boolean-mod.md)
Adding a Boolean shouldn't mean hunting through menus. Modpie gives you an instant cutter search prompt if nothing is selected, and lets you cycle between Difference, Union, and Intersect with a single keypress (<kbd>A</kbd>) while watching your mesh update live.

### 3. [Array Modifier (Modern & Legacy)](array-50.md)
Blender 5.0+ introduced Geometry Nodes-based modifier assets alongside classic C-based modifiers. Modpie supports both seamlessly, giving you tactile wheel controls for copy counts and automatic handling so Relative and Constant offsets never accidentally conflict.

### 4. [Shrinkwrap Target Picker & 3D Raycast](shrinkwrap-target.md)
Pick shrinkwrap target meshes directly in the 3D viewport using real-time 3D raycasting (<kbd>T</kbd> key) instead of typing names into a tiny text field.

### 5. [Fitted Lattice Generation](lattice.md)
Forget manually creating a Lattice object, aligning its transforms, and setting up the modifier. Click one button in Modpie, and it automatically calculates your object's bounding box, builds a fitted 3x3x3 lattice cage, and binds it instantly.

### 6. [Remember Custom Defaults](defaults.md)
Every artist has preferred starting values (like a Bevel with 3 segments instead of 1, or a Solidify with Even Thickness turned on). Modpie lets you save your own starting values with one click so every newly added modifier starts exactly the way you like.

---

:::tip Good to Know
All of the smart helpers in this section are part of the standard **Modpie Free** edition as well as **Modpie Plus**.
:::
