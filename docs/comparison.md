---
sidebar_position: 2
title: Free vs Plus
description: Easy-to-read feature comparison between Modpie Free and Modpie Plus.
---

# Modpie vs. Modpie Plus

Modpie comes in two editions: **Modpie Free** and **Modpie Plus**. 

Both editions share the exact same foundation, which means upgrading from Free to Plus takes less than ten seconds. Just install the Plus zip file right over the free version—all your custom shortcuts, favorite settings, and preferences will carry over seamlessly without needing any reconfiguration.

---

## Feature Comparison Matrix

| Feature | Modpie (Free) | Modpie Plus |
| :--- | :---: | :---: |
| **Radial Pie Menu (`Alt + M`)** | 5 primary directions | All 8 directions |
| **Pie Slot Types** | Modifiers only | Modifiers, presets, stack templates, search, and settings |
| **Slot Customizer** | Blender Preferences only | In-viewport 3×3 Compass Grid |
| **Custom Starting Values & Names per Slot** | Global settings | Per-slot custom starting values and custom labels |
| **In-Viewport Modifier Panel (`Ctrl + Alt + M`)** | ✔ | ✔ |
| **Interactive Dragging & Live HUD** | ✔ | ✔ |
| **Object Modifiers Pie (`Shift + Ctrl + M`)** | ✔ | ✔ |
| **Smart Duplicate Handling (Click to edit, Shift-Click to add another)** | ✔ | ✔ |
| **Multi-Object Batch Adding & Dragging** | ✔ | ✔ |
| **Move Modifiers in Stack on the Fly (`Alt + Wheel`)** | ✔ | ✔ |
| **Mid-Drag Modifier Switching Across Stack** | ✔ | ✔ |
| **Inline Modifier Renaming & Closed Card Tools** | ✔ | ✔ |
| **Remember Custom Defaults** | ✔ | ✔ |
| **Blender 5.0+ Modern Array Integration** | ✔ | ✔ |
| **Smart Boolean Cutter Picker & Fast Cycling (`D U I A`)** | ✔ | ✔ |
| **Shrinkwrap Target Raycast Picker (`T` key)** | ✔ | ✔ |
| **One-Click Fitted Lattice Cage** | ✔ | ✔ |
| **Geometry Nodes Tools (Keep in File, Export/Import)** | ✔ | ✔ |
| **Modifier Presets Library** | ✕ | <span className="badge badge--primary">✔ Plus (Save, apply, search)</span> |
| **Stack Templates Library** | ✕ | <span className="badge badge--primary">✔ Plus (Append or Replace)</span> |
| **Favorites Preset Pie (`Shift + Alt + M`)** | ✕ | <span className="badge badge--primary">✔ Plus</span> |
| **Live Modifier Linking (Real-time multi-object sync)** | ✕ | <span className="badge badge--primary">✔ Plus</span> |
| **One-Click Modifier Copy & Stack Replace** | ✕ | <span className="badge badge--primary">✔ Plus</span> |
| **Compare Stacks (Visual difference checker)** | ✕ | <span className="badge badge--primary">✔ Plus</span> |
| **Solo Modifier Mode (Isolate one modifier at a time)** | ✕ | <span className="badge badge--primary">✔ Plus</span> |
| **Modifier Performance Profiler (Measure lag in milliseconds)** | ✕ | <span className="badge badge--primary">✔ Plus</span> |
| **Apply-Up-To-Here (Bake stack down to selected modifier)** | ✕ | <span className="badge badge--primary">✔ Plus</span> |

---

## Detailed Breakdown of Plus Features

### 1. The 8-Way Radial Pie & In-Viewport Customizer
- **All 8 Directions Unlocked**: Adds the two lower corners (South-West and South-East) to your radial menu.
- **Assign Anything to Any Direction**: You are not limited to just adding modifiers. Put saved presets, whole modifier stacks, quick search popups, or settings right on your pie. By default, **Presets & Stacks** sits conveniently on the South-East slot right next to the panel opener.
- **In-Viewport 3×3 Compass Grid**: Click the **Customize** button at the top of the modifier panel to open an easy visual grid and reassign directions without ever opening Blender Preferences.
- **Custom Starting Values**: Assign exact parameters to a slot (like a Bevel with 3 segments and 0.02m width). When you flick in that direction, Modpie creates your modifier with your preferred settings ready to go, no extra dragging needed.

### 2. Presets & Stack Templates Library
- **Single Modifier Presets**: Save your favorite setups (like a clean hard-surface bevel, glass solidify, or screw spiral) and apply them to any object with one click.
- **Stack Templates**: Save entire modifier recipes and apply them to new models in seconds. You can either append them to your current stack or replace the existing stack completely.
- **Favorites Preset Pie (`Shift + Alt + M`)**: A secondary radial menu dedicated exclusively to your favorite presets for lightning-fast access.

### 3. Multi-Object Syncing & Live Linking
- **Live Modifier Linking**: Link modifiers across several objects at once. Changing a value on one object automatically updates all linked objects across your scene in real time, even after saving and reopening your file.
- **Simple Copy & Link Commands**:
  - `Copy Modifier to Selected`: Pushes one modifier's settings to your selected objects.
  - `Copy All Modifiers to Selected`: Copies all matching modifier settings across your selection.
  - `Link All Modifiers to Selected`: Keeps modifiers synchronized across objects in real time.
  - `Replace Stacks with This One`: Replaces the modifier stacks on selected objects with the active object's stack.
- **Compare Stacks**: Spot differences between selected objects in seconds. A visual report highlights which modifiers are missing or where values don't match.
- **Auto-Sync After Dragging**: When multiple objects are selected, tweaking a modifier in interactive mode automatically updates the rest of your selection as soon as you confirm.

### 4. Non-Destructive Workflow Diagnostics
- **Solo Modifier**: Temporarily hides all other modifiers on your mesh so you can see exactly what a single modifier is doing. When you un-solo, your original modifier visibility is restored.
- **Performance Profiler**: Shows you exactly how many milliseconds each modifier takes to calculate, with an easy-to-read visual bar highlighting which modifier is slowing down your scene.
- **Apply-Up-To-Here**: Bakes your modifier stack from the top down to the selected modifier, while keeping all modifiers beneath it fully live and non-destructive.

---

:::info Seamless In-Place Upgrade
Upgrading from Free to Plus takes less than 10 seconds: install the Plus `.zip` directly in Blender. All your custom shortcuts, favorite settings, and preferences carry over automatically.
:::
