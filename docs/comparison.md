---
sidebar_position: 2
title: Free vs Plus
description: Detailed feature-by-feature comparison between Modpie Free and Modpie Plus.
---

# Modpie vs. Modpie Plus

Modpie is built from a single codebase that produces two tiers: **Modpie Free** and **Modpie Plus**. 

Both share the extension ID `modpie`, meaning installing Modpie Plus over Free upgrades in-place while keeping every keymap, custom label, slot assignment, and preference completely intact.

---

## Feature Comparison Matrix

| Feature | Modpie (Free) | Modpie Plus |
| :--- | :---: | :---: |
| **Radial Pie Menu (`Alt + M`)** | 5 upper directions | All 8 directions |
| **Pie Slot Content Types** | Modifiers only | Modifiers, Presets, Stacks, Search, Settings, Panel |
| **Slot Customization** | Preferences only | In-viewport popup & 3×3 Compass Grid |
| **Custom Arrival Values & Names per Slot** | Global toggle | Per-slot custom values & custom labels |
| **Viewport Modifier Panel** | ✔ | ✔ |
| **Interactive Viewport Modal & Real-Time HUD** | ✔ | ✔ |
| **Smart Duplicate Repeat Handling (`Click` adjust, `Shift+Click` add, `×n`)** | ✔ | ✔ |
| **Affect All Selected Objects (Batch Add & Drag)** | ✔ | ✔ |
| **Blender 5.0+ Modern Array (Geometry Nodes Asset)** | ✔ | ✔ |
| **Array Relative / Constant Mutual Exclusivity** | ✔ | ✔ |
| **Boolean Cutter Target Prompt & Cycling (`D U I A`)** | ✔ | ✔ |
| **Shrinkwrap Target Picker & 3D Raycast (`T` key)** | ✔ | ✔ |
| **Automatic Fitted Lattice Generation** | ✔ | ✔ |
| **Texture Creation (Displace/Warp) & Mesh Binding** | ✔ | ✔ |
| **Geometry Nodes Tools (Fake User, Export/Import)** | ✔ | ✔ |
| **Remember Modifier Defaults** | ✔ | ✔ |
| **Modifier Presets Library** | ✕ | <span className="badge badge--primary">✔ Plus (Save, apply, search, export)</span> |
| **Stack Templates Library** | ✕ | <span className="badge badge--primary">✔ Plus (Append / Replace modes)</span> |
| **Live Modifier Linking (Continuous multi-object link)** | ✕ | <span className="badge badge--primary">✔ Plus</span> |
| **One-Shot Copy & Stack Replacement** | ✕ | <span className="badge badge--primary">✔ Plus</span> |
| **Live Stack Diff Visualizer** | ✕ | <span className="badge badge--primary">✔ Plus</span> |
| **Solo Modifier (`Alt + H` non-destructive isolation)** | ✕ | <span className="badge badge--primary">✔ Plus</span> |
| **Apply-Up-To-Here** | ✕ | <span className="badge badge--primary">✔ Plus</span> |
| **Modifier Evaluation Profiler (ms latency chart)** | ✕ | <span className="badge badge--primary">✔ Plus</span> |
| **Favorites Preset Pie (`Shift + Alt + M`)** | ✕ | <span className="badge badge--primary">✔ Plus</span> |

---

## Detailed Breakdown of Plus-Exclusive Features

### 1. The 8-Way Radial Pie & In-Viewport Customizer
- **All 8 Directions**: Unlocks the two lower corners (South-West and South-East).
- **Rich Direction Content**: Assign directions to saved modifier presets, stack templates, instant search popups, settings, or panel openers. By default, **Presets & Stacks ships on South-East**, right beside the panel.
- **In-Viewport 3×3 Compass Grid**: Click the **Customize** toggle at the top of the modifier panel to configure pie directions without ever opening Blender Preferences.
- **Custom Arrival Values**: Assign exact parameters to a slot (e.g. *Bevel with Segments 3, Width 0.02m*) so one radial flick deploys your exact preferred modifier setup without dragging.

### 2. Presets & Stack Templates Library
- **Single Modifier Presets**: Save complex modifiers (e.g. *Hard Surface Bevel*, *Glass Solidify*, *Screw Spiral*). Stores all writable properties, vectors (Mirror axes), multi-select enums, and Geometry Nodes custom socket inputs.
- **Stack Templates**: Save entire multi-modifier configurations and deploy them across new meshes in either **Append** mode or **Replace** mode.
- **Favorites Preset Pie (`Shift + Alt + M`)**: A secondary radial menu holding up to 8 of your favorite presets for instant deployment.

### 3. Multi-Object Syncing & Live Linking
- **Continuous Live Linking**: Link modifiers across multiple objects. Adjusting a property on one object updates all linked copies across the scene in real time via an intelligent depsgraph handler. Saved in the `.blend` file, surviving project saves and reloads.
- **One-Shot Copying**: *Copy Modifier to Selected*, *Copy All Settings to Selected*, or *Replace Stacks with This One*.
- **Compare Stacks**: Visual difference report highlighting missing, extra, or disagreeing modifier parameters across selected meshes.
- **Auto-Sync After a Drag**: Automatically pushes confirmed modal drag adjustments to all other selected meshes.

### 4. Non-Destructive Workflow Diagnostics
- **Solo Modifier**: Temporarily hides all other modifiers in the stack to isolate the effect of a single modifier. Remembers previous visibility states in `modpie_solo` custom properties and restores them perfectly upon un-soloing.
- **Evaluation Profiler**: Measures real-time modifier evaluation latency in milliseconds (ms), showing a visual bar graph against the slowest modifier and total stack latency in the header.
- **Apply-Up-To-Here**: Destructively bakes the stack from the top down to the selected modifier while keeping all non-destructive modifiers beneath it active.

---

:::info Seamless In-Place Upgrade
Upgrading from Free to Plus takes less than 10 seconds: install the Plus `.zip` directly over the free build. Blender updates the files in place and preserves 100% of your preferences and slot configurations.
:::
