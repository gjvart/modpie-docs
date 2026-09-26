---
sidebar_class_name: hidden
title: Latest Features
description: Complete guide to the features and workflow enhancements in Modpie and Modpie Plus.
---

# Modpie & Modpie Plus: Latest Features Guide (v1.0.0)

<div className="hero-badge-container">
  <span className="badge badge--primary">Modpie Plus 1.0.0</span>
  <span className="badge badge--secondary">Modpie 1.0.0</span>
  <span className="badge badge--success">Release Version</span>
</div>

This guide documents the latest features and workflow enhancements added to **Modpie** and **Modpie Plus**, explaining how each feature works, how to use it in practice, and how to customize it in Preferences.

---

## 1. Enhanced Decimate Interactive Mode: Mode Swapping & Value Isolation (v1.0.0)

### Overview
The **Decimate** modifier in Blender has three fundamentally different reduction algorithms:
1. **Collapse**: Reduces polygon count by collapsing edges based on a **Ratio** (0.0 to 1.0).
2. **Un-Subdivide**: Reverses Catmull-Clark / grid subdivisions by step **Iterations** (integer 1, 2, 3...).
3. **Planar (Dissolve)**: Dissolves coplanar geometry based on an **Angle Limit** threshold.

Previously, entering interactive mode on a Decimate modifier defaulted to Ratio regardless of mode, and dragging while in Un-Subdivide or Planar didn't affect their respective settings. In **v1.0.0**, Modpie delivers a fully mode-aware Decimate interactive experience:
- **Instant Mode Swapping with a Key (<kbd>M</kbd> or <kbd>T</kbd>)**: Cycle between **Collapse**, **Un-Subdivide**, and **Planar** on the fly during a single drag session.
- **Direct Mode Jump Keys**: Jump directly with <kbd>C</kbd> (Collapse), <kbd>U</kbd> (Un-Subdivide), or <kbd>P</kbd> (Planar).
- **Mode-Specific Value Dragging**:
  - In **Un-Subdivide**: Mouse drag and wheel strictly alter **Iterations** (auto-seeds to `1` on entry so reduction is immediately visible). Ratio, Triangulate, and Symmetry never interfere.
  - In **Collapse**: Mouse drag controls **Ratio**. Supports Triangulate (<kbd>G</kbd>) and Symmetry (<kbd>S</kbd>).
  - In **Planar**: Mouse drag controls **Angle Limit**. Supports All Boundaries (<kbd>B</kbd>).
- **Strict Parameter Guarding**: Pressing <kbd>S</kbd> (Symmetry) or <kbd>G</kbd> (Triangulate) while in Un-Subdivide or Planar mode is safely intercepted with a helpful notification (`Collapse Mode Only`) to prevent accidental setting corruption.
- **Channel Selection Implication (<kbd>R</kbd>, <kbd>I</kbd>, <kbd>A</kbd>, <kbd>Tab</kbd>)**:
  - Pressing <kbd>R</kbd> (Ratio) selects Ratio and automatically sets mode to Collapse.
  - Pressing <kbd>I</kbd> (Iterations) selects Iterations and automatically sets mode to Un-Subdivide.
  - Pressing <kbd>A</kbd> (Angle Limit) selects Angle Limit and automatically sets mode to Planar.
  - Pressing <kbd>Tab</kbd> / <kbd>Shift + Tab</kbd> steps forward / backward through modes and channels together.
- **Dynamic Face Count Readout**: Live `Faces: <count>` readout in the viewport HUD and header, dynamically reporting the post-decimation polygon count as you adjust.

---

## 2. Blender 5.0+ Curve to Tube Modifier Integration (v1.0.0)

### Overview
In Blender 5.0+, the official Geometry Nodes essentials asset library introduces **Curve to Tube**, a powerful modern modifier that converts curve geometry into customizable tube meshes with full control over profile shapes, curve resampling, end caps, and procedural UV coordinates.

**Modpie v1.0.0** introduces first-class, seamless support for **Curve to Tube**:
- **Blender 5.0+ Exclusive Availability**: Available only when running Blender 5.0 or newer. It is cleanly hidden from all menus, category lists, and operator enums in Blender 4.5 and earlier to guarantee 100% backward compatibility.
- **Exact Native Blender Layout in Modpie Panel**:
  - **Top-Level Scale**: Instant control over the tube radius / scale factor.
  - **Profile Subpanel** (default open):
    - **Mode**: Segmented button toggle between **Round** and **Custom**.
    - **Profile Object**: Pick custom profile curve objects when in Custom mode.
    - **Resolution**: Controls circular cross-section vertex resolution when in Round mode.
    - **Shade Smooth**: Smooth shading toggle on the generated tube surface.
  - **Resample Subpanel** (default closed):
    - Subpanel header on/off toggle checkbox for **Resample**.
    - **Resample Mode**: Dropdown to switch between *Evaluated*, *Auto*, *Count*, and *Length*.
    - **Count / Length**: Context-sensitive numeric inputs for count and segment length.
    - **Scale**: Multiplier for curve resampling.
  - **Caps Subpanel** (default closed):
    - Subpanel header on/off toggle checkbox for **Caps**.
    - **Caps Type**: Dropdown between *Flat*, *Round*, and *Custom*.
    - **Caps Start / End**: Object pickers for custom end caps.
    - **Resolution & Smooth**: Round cap subdivision levels and smooth shading.
    - **Merge, Align Normals & Extrapolate Radius**: Full geometric cap blending controls.
  - **UV Map Subpanel** (default closed):
    - Subpanel header on/off toggle checkbox for **UV Map**.
    - **UV Map Name**: Configurable destination attribute (default `"UVMap"`).
    - **Parameter U & V**: Mode switches (*Factor*, *Length*, *Index*).
    - **Consider Curve Radius**: Toggle attribute scaling based on curve radius.
  - **Manage Subpanel**: Built-in data-block tools with Fake User toggle, node tree export, and import.
- **Header Badging**: Displays the official `MOD_CURVE` icon and `(5.0+)` version indicator badge in the modifier card header.
- **Interactive Viewport Dragging**:
  - Mouse drag adjusts tube radius / scale with distance sensitivity and unit scaling.
  - <kbd>R</kbd>: Adjust Profile Resolution.
  - <kbd>C</kbd>: Adjust Resample Count.
  - <kbd>L</kbd>: Adjust Resample Length.
  - <kbd>Wheel</kbd>: Step Profile Resolution up/down.
  - <kbd>H</kbd>: Toggle Shade Smooth.
  - <kbd>P</kbd>: Toggle Caps.
  - <kbd>E</kbd>: Toggle Resample.
  - <kbd>M</kbd>: Toggle Caps Merge.
  - <kbd>F</kbd>: Cycle Profile Mode (Round ↔ Custom).
  - <kbd>T</kbd>: Cycle Caps Type (Flat ↔ Round ↔ Custom).
  - <kbd>O</kbd>: Cycle Resample Mode (Evaluated ↔ Auto ↔ Count ↔ Length).

---

## 3. Real-Time Evaluation Profiler & Hardware Benchmarking (v1.0.0)

### Overview
Procedural modifier stacks often combine complex geometric calculations (such as Subdivision Surfaces, Booleans, Voxel Remeshing, Bevels, and Geometry Nodes). When viewport framerate stutters, identifying which modifier causes the slowdown previously required tedious trial and error—toggling each modifier's visibility on and off individually.

The **Evaluation Profiler** in **Modpie Plus** provides real-time performance diagnostics directly beneath your modifier stack:
- **Instant Bottleneck Pinpointing**: Measures execution latency per modifier in microseconds (`µs`), milliseconds (`ms`), or seconds (`s`).
- **Proportional Visual Load Bars**: Scales progress bars relative to the slowest modifier in the stack, immediately showing which stage consumes the frame budget.
- **Dependency Graph Deep-Query**: Accurately queries Blender's evaluated dependency graph (`context.object.evaluated_get(depsgraph)`), bypassing un-evaluated scene data to report true hardware execution timings.
- **1-Click Stack Toolstrip Toggle**: Click the Stopwatch / Timer icon in the stack tool row next to the Template Save button to fold/unfold the profiler without leaving the viewport.
- **Force Re-Evaluation**: A dedicated Re-evaluate button forces a full geometry benchmark pass (`refresh={'DATA'}`), recalculating timings after scene alterations.
- **Framerate Budget Guidance**: Displays total stack latency directly in the collapsible header, letting you verify whether your stack satisfies the **60 FPS (16.6 ms)** or **30 FPS (33.3 ms)** viewport frame budget.
- **Full Guide**: See the dedicated [Evaluation Profiler Guide](evaluation.md) for complete visual walkthroughs and optimization strategies.

---

## 4. Mid-Drag Modifier Switching in Interactive Mode

### Overview
When shaping 3D objects with a stack of modifiers (such as Solidify + Bevel + Subdivision Surface), you often want to tweak each modifier's settings interactively in the viewport in one smooth session without ever opening the side panel or navigating Blender's modifier tabs.

In **v0.9.99**, Modpie introduces **Mid-Drag Modifier Switching** directly inside interactive mode (`modpie.interactive`):

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/mp_modswitching_interactive.gif" alt="Switching between modifiers live in Interactive Mode" />
  </div>
  <p className="media-caption">Figure: Seamlessly switching between different modifiers in the stack while staying in Interactive Mode.</p>
</div>

- **Switch Across Any Modifier Type**: Seamlessly jump from adjusting Solidify thickness or offset to tweaking Bevel width or segments to adjusting Subsurf levels without leaving modal mode.
- **Dedicated Navigation Shortcuts**:
  - <kbd>Ctrl + Tab</kbd> / <kbd>Ctrl + Shift + Tab</kbd>: Step forward or backward through the entire modifier stack.
  - <kbd>[</kbd> / <kbd>]</kbd> and <kbd>Page Up</kbd> / <kbd>Page Down</kbd>: Step to previous or next modifier in stack.
  - <kbd>Ctrl + Wheel Up</kbd> / <kbd>Ctrl + Wheel Down</kbd>: Cycle modifiers with mouse wheel.
  - <kbd>Alt + 1..9</kbd>: Direct slot jump to any modifier 1 through 9 in the stack.
  - <kbd>Tab</kbd> / <kbd>Shift + Tab</kbd> on single-channel modifiers (like Subsurf or Mirror): Directly cycle to adjacent modifiers in the stack.
  - **HUD Chevrons**: Clickable `‹` and `›` arrow buttons on the HUD title for fast 1-click mouse stepping.
- **Unified Multi-Modifier Confirmation**:
  - **<kbd>Left-Click</kbd> / <kbd>Enter</kbd>**: Confirms and keeps all adjustments made across every modifier tweaked during the session. Displays the total number of updated modifiers in the status bar and screen overlay (e.g. `Updated 3 modifiers`).
- **Unified Multi-Modifier Rollback**:
  - **<kbd>Right-Click</kbd> / <kbd>Esc</kbd>**: Instantly rolls back all modifiers touched during the session to their exact pre-modal state. If the modal was launched from adding a new modifier, that modifier is cleanly discarded.
- **Multi-Object Synchronization (Modpie Plus)**:
  - If multiple objects are selected, switching modifiers in interactive mode automatically syncs and retargets matching modifiers across all selected objects.

### Preference Toggle
Configure in **Preferences ▸ Interactive Drag**:
- **Mid-Drag Modifier Switching** (Default: *Enabled*):
  - When enabled: Switching keys cycle through all modifiers across the entire stack.
  - When disabled: Switching keys cycle only between same-type sibling modifiers.

---

## 5. Apply Last Interacted Modifier & Auto-Activation (v0.9.98)

### Overview
When working with multiple modifiers in Blender, you often want to expand a collapsed modifier card in the Modpie Panel, inspect its settings, and apply it. Previously, applying via the keyboard shortcut (<kbd>Ctrl + A</kbd>) could target an unintended modifier because expanding or adjusting a modifier did not change Blender's active modifier.

In **v0.9.98**, Modpie introduces **Apply Last Interacted Modifier**:
- **Auto-Activate on Expansion / Interaction**: Interacting with any modifier in the Modpie Panel—whether opening/expanding its card via the disclosure arrow (<kbd>▶</kbd>/<kbd>▼</kbd>), clicking its gear icon (`⚙`), moving it with reorder arrows, pinning it, renaming it, or launching an interactive viewport drag—**automatically makes that modifier the active modifier in the stack** (`obj.modifiers.active = mod` and `mod.is_active = True`).
- **Auto-Activate on Add**: Whenever a new modifier is added (from the pie menu, quick add slots, presets, or panel), it immediately becomes the active modifier.
- **Intelligent Apply Resolution**: Triggering the Apply Modifier shortcut (<kbd>Ctrl + A</kbd>) prioritizes the modifier you last opened or worked on.
- **Direct 1-Click Apply from Panel**: Every modifier card in the Modpie Panel also features an instant checkmark button (<kbd>✔</kbd>) on its header to apply immediately without closing the panel.

### Preference Toggle
You can configure this behavior in **Preferences ▸ Modpie Panel**:
- **Apply Last Interacted Modifier** (Default: *Enabled*):
  - When enabled: Opening, adding, or adjusting a modifier in the panel automatically makes it active so the Apply shortcut targets it.
  - When disabled: Retains Blender's standard stack active behavior.

---

## 6. Shift-Click Gear Tools Toggle on Closed Modifier Cards (v0.9.97)

### Overview
When modifier cards in the Modpie Panel are collapsed (closed), each card displays a gear icon (`⚙`) that unlocks essential collapsed controls:
- **Move Up Arrow (<kbd>▲</kbd>)**
- **Move Down Arrow (<kbd>▼</kbd>)**
- **Pin to Last Pushpin (<kbd>📌</kbd>)**
- **Inline Rename Pencil**

Previously, opening these tools required clicking the gear icon on each modifier individually. Now in **v0.9.97**, you can hold <kbd>Shift</kbd> and click any modifier's gear button to **instantly unlock all other modifier gears on the active object at once**.

---

## 7. Interactive Mode: Modifier Stack Reordering

### Overview
When adjusting modifiers interactively in the 3D viewport, you previously had to finish the drag and open the panel to change a modifier's position in the stack. You can now move the modifier being adjusted **up or down the stack list on the fly** without interrupting your adjustment session.

```text
                    +----------------------------+
                    |        Bevel (1/3)         |
                    +----------------------------+
 [Alt + Wheel Up]   |   Mirror (2/3) [Active]    |  Moves UP in stack
                    +----------------------------+
 [Alt + Wheel Down] |     Subdivision (3/3)      |  Moves DOWN in stack
                    +----------------------------+
```

### How It Works
1. **Enter Interactive Mode** by adding a modifier from the radial pie menu or clicking the **Interactive Adjust** button next to any existing modifier in the panel.
2. **Move Up the Stack**: Hold <kbd>Alt</kbd> and scroll **Wheel Up** (or press <kbd>Alt</kbd> + <kbd>Up Arrow</kbd>).
   - The modifier shifts upward toward the top of the stack (earlier evaluation / closer to index 0).
3. **Move Down the Stack**: Hold <kbd>Alt</kbd> and scroll **Wheel Down** (or press <kbd>Alt</kbd> + <kbd>Down Arrow</kbd>).
   - The modifier shifts downward toward the bottom of the stack (later evaluation / closer to the end of the stack).
4. **Multi-Object Synchronization**: If multiple objects are selected, all matching modifiers across the selection reorder together in lockstep.
5. **Safe Cancellation**: If you cancel the modal with <kbd>Esc</kbd> or <kbd>Right-Click</kbd>, any stack reordering made during the drag session is cleanly reverted back to the exact initial order.

### Visual & HUD Feedback
- **Live Position Badge**: Each scroll step flashes an animated HUD card in the viewport indicating direction and new stack position:
  - `Stack Up: Mirror (1/3)`
  - `Stack Down: Mirror (2/3)`
- **Boundary Alerts**: Reaching the top or bottom boundary triggers a non-destructive HUD alert without breaking or wrapping the drag:
  - `Top of Stack: Mirror (1/3)`
  - `Bottom of Stack: Mirror (3/3)`
- **HUD & Status Bar Reminder**: Whenever an object has more than one modifier, a dynamic hint appears in the viewport HUD and Blender's status bar:
  - `Alt+Wheel -> Move in stack`

### Preferences & Configuration
In **Edit > Preferences > Add-ons > Modpie > Interactive > Stack Reordering (Interactive Mode)**:
- **Reorder Shortcut**: Choose between `Alt + Scroll Wheel` (Default), `Shift + Scroll Wheel`, `Ctrl + Alt + Scroll Wheel`, or `Disabled`.
- **Invert Scroll Direction**: Toggle if you prefer Wheel Down to move up or Wheel Up to move down.
- **Hide Subdivision During Drag**: When enabled, Subdivision Surface modifiers are temporarily hidden during viewport dragging to maximize viewport performance and responsiveness, then automatically restored upon confirmation.

---

## 8. Context / Object-Based Modifier Pie Menu (Modpie Plus)

> [!NOTE]
> The **Object Modifiers Pie** is a **Modpie Plus** exclusive feature.

### Overview
Blender artists often work on objects that already have a specific set of modifiers configured (e.g. a character with Mirror and Armature, or hard-surface parts with Bevel and Weighted Normal). In Modpie Plus, the **Object Modifiers Pie** dynamically populates a radial pie menu containing **only the modifiers currently applied to the active object**.

```text
                           [North]
                         Subdivision
                              |
     [West] Mirror -----------+----------- Bevel [East]
                              |
                          (Center)
```

### How It Works
1. Select any object with modifiers.
2. Press <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>M</kbd> (or open the 3D Viewport header: **Object > Modpie > Active Object Modifiers**).
3. The pie menu dynamically fills with only that object's modifiers:
   - **Clutter-Free Distribution**: Unused directional slots emit separators, so an object with 2 modifiers shows only those 2 directions.
   - **Click Action**: Clicking a modifier immediately starts live interactive adjustment, or focuses the modifier in the panel if non-interactive.
   - **Alt-Click Viewport Visibility Toggle**: Hold <kbd>Alt</kbd> and click any modifier slot to toggle its viewport visibility on or off without starting a drag. The on-screen notification confirms `Visible in Viewport` or `Hidden in Viewport`.
   - **Hidden Modifier Indicator**: Modifiers currently hidden in the viewport are clearly labeled with `[Hidden]` (e.g. `Bevel [Hidden]`).
4. **Large Stacks (>7 Modifiers)**: If an object has more than 7 modifiers, slots 1–7 display the first seven modifiers, and slot 8 provides a direct shortcut to **`More Modifiers (N)...`**, which opens the full Modpie panel.
5. **Empty Stack Layout**: If invoked on an object with no modifiers, the pie menu automatically presents a dedicated helper layout:
   - **West (Left)**: Direct shortcut to **Open Modifier Panel** to view or manage object settings.
   - **East (Right)**: Instant **Search Modifiers** button to quickly find and add a new modifier.
   - **South (Bottom)**: A highlighted contrast box displaying **`Object has no modifiers`** with an info notice, providing clean visual separation against the viewport.

### Preferences & Customization
- **Object Pie Action**: In **Preferences > Pie Slots**, choose what happens when clicking a modifier:
  - `Adjust Interactively`: Starts live viewport dragging on click.
  - `Open in Panel`: Opens the floating Modpie panel focused on that modifier.
- **Custom Shortcut**: Rebind the key combination in **Preferences > Shortcuts** under **Object Modifiers Pie (Plus)**.

---

## 9. Inline Modifier Renaming

### Overview
Renaming modifiers previously required switching over to Blender's standard Properties panel. Modpie provides instant inline renaming directly inside both collapsed and expanded modifier views in the viewport panel.

### How It Works
- **On Closed Modifiers**:
  1. Click the **Gear** icon on any collapsed modifier row.
  2. Select **Rename**.
  3. A popup prompt appears with the modifier's current name pre-filled.
  4. Type the new name and press <kbd>Enter</kbd> (or click OK).
  5. The panel updates immediately with an overlay notice (`'OldName' -> 'NewName'`). The gear menu automatically stays open.
- **On Open Modifiers**:
  - The **Apply** button is positioned in the top header row directly next to the **Delete** button, mirroring the closed modifier row.
  - The inner action toolbar provides **Interactive Drag**, **Duplicate**, **Copy to Selected**, and the **Rename** button.
- **Undo Integration**: Full undo history support (<kbd>Ctrl</kbd> + <kbd>Z</kbd>).

---

## 10. Closed Modifier Management & Pin to Last Feedback

### Overview
You can manage, reorder, and pin modifiers while keeping them collapsed, saving vertical screen space in complex stacks.

```text
 [Fold] [Bevel]      [View] [Edit] [Render] [Cage]  [Gear] [Pin]  |  [Apply] [Delete]
   |                                                  |      |              |
 Toggle                                              Tools  Active     Apply & Remove
Collapse                                             Menu   Badge         Actions
```

### Features
- **Core Visibility Controls Always Accessible**: Even when collapsed, a modifier row displays all 4 primary visibility switches:
  - **On Cage**
  - **Edit Mode**
  - **Viewport Visibility**
  - **Render Visibility**
- **Quick Gear Tools Menu**: Clicking the gear reveals:
  - **Move Up**: Shifts modifier up one position in the stack.
  - **Move Down**: Shifts modifier down one position in the stack.
  - **Pin to Last**: Pins or unpins the modifier to the end of the stack.
  - **Rename**: Renames the modifier inline.
- **Dynamic Pin to Last Feedback**:
  - **Active State Embossing**: When a modifier is pinned to last, the pin button highlights in an active pressed/embossed style.
  - **Closed Modifier Pin Badge**: When a modifier is collapsed with its gear closed, a highlighted **Pin** badge remains visible directly on the header row so you can see pinned modifiers at a glance. Clicking the badge unpins it immediately.
  - **Real-Time Notifications**: Flashes an on-screen confirmation banner (`Pinned to Last` / `Unpinned from Last`).
  - **Pipeline Integrity**: Any newly added modifiers (via radial menu, quick-add, or Blender menus) are automatically inserted **above** pinned modifiers, protecting terminal modifiers such as Subdivision Surface, Bevel, Weighted Normal, or Triangulate.
- **Unified Apply & Delete Header Layout**: Across both open and closed modifiers, a separator precedes the **Apply** and **Delete** buttons at the far right of the top header row, grouping them consistently as an action pair while visually setting them apart from visibility and gear controls.

---

## 11. Preferences UI Overhaul

### Overview
The Add-on Preferences interface (**Edit > Preferences > Add-ons > Modpie**) has been completely restructured into clean, categorized cards.

### Reorganized Sections

#### Interactive Tab
1. **Drag Interaction & Behavior**: Sensitivity slider, scale by object size, confirm on mouse release, interactive by default, affect all selected objects, smart defaults, and lock custom defaults.
2. **Stack Reordering (Interactive Mode)**: Reorder shortcut dropdown (`Alt + Scroll Wheel`, etc.), invert scroll direction toggle, and context hints.
3. **Viewport Readout (HUD)**: Viewport HUD toggle, HUD scale slider, X/Y pixel offset sliders, and big readout live banner toggle.
4. **Axis Guides & Overlays**: Axis line guides toggle, smart bisect and flip, 3D viewport Axis HUD card position dropdown (Top Center, Top Left, Top Right, Bottom Left, Bottom Center), and on-object origin axis badge.
5. **Announcements**: Change announcements toggle, duration slider, and font size scale slider.

#### Panel Tab
1. **Modifier Panel**: Panel style (Popup vs. Dialog), width in pixels, pie presets in panel, cage toggles, active-only expand, and open panel after non-interactive add.
2. **3D Viewport Sidebar Tab (N-Panel)**: Sidebar toggle and custom tab category name.

#### Shortcuts Tab & Conflict Detection
1. **Direct Rebinding**: Modify shortcuts for the Modpie Menu, Modifier Panel, Object Modifiers Pie (Plus), and Apply Modifier directly in Preferences without navigating Blender's full keymap tree.
2. **Smart Conflict Detection Alert**: Automatically monitors active Modpie shortcuts. If two or more commands share the exact same key combination (e.g. both set to `Alt + M`), a prominent, high-visibility warning box appears below the shortcut list specifying the conflicting commands and key combinations.
3. **Zero-Clutter Policy**: On clean or properly configured setups with no conflicts, the alert box remains completely hidden.

---

## 12. Apply Modifier Workflow & Technical Notes

Applying modifiers in Modpie can be performed in two primary ways:

### 1. Direct Header Button (Apply) in the Modpie Panel
- Both collapsed and expanded modifier headers feature a dedicated **Apply** button immediately adjacent to the **Delete** button.
- Clicking this button instantly applies that exact modifier without having to activate or expand it first.

### 2. Global Viewport Shortcut (<kbd>Ctrl</kbd> + <kbd>A</kbd>)
- Triggering <kbd>Ctrl</kbd> + <kbd>A</kbd> in Object Mode executes `modpie.mod_apply`.
- Modpie automatically resolves which modifier to apply using an intelligent fallback chain:
  1. Context-hovered modifier (if Blender context provides it).
  2. Currently selected or active modifier in the stack (`obj.modifiers.active` / `is_active`).
  3. Active soloed modifier (if using Solo mode).
  4. Currently expanded modifier in the Modpie panel.
  5. Top of the modifier stack (fallback).

> [!NOTE]
> **Technical Note on Floating Popups vs. Viewport Execution**:
> In Blender's Python API, floating popups (`invoke_popup`) run inside Blender's modal UI loop, which does not pass background 3D View hotkeys down to the viewport or expose layout hover coordinates to Python.
> Therefore, when working inside the floating popup, clicking the header's **Apply** button applies that specific modifier directly; when working in the 3D Viewport or Sidebar (N-panel), <kbd>Ctrl</kbd> + <kbd>A</kbd> applies the active/expanded modifier seamlessly.

---

## 13. Stack Sync Naming Symmetry (Modpie Plus)

### Overview
In **Modpie Plus**, modifier synchronization and copy operators use consistent, intuitive terminology across all multi-object tools:

| Operation | Identifier | Description |
| :--- | :--- | :--- |
| **Copy Modifier to Selected** | `modpie.sync_modifier` | Copies the single active modifier's settings to all selected objects. |
| **Copy All Settings to Selected** | `modpie.sync_stack` | Copies settings across all matching modifiers from the active object to selected objects without adding or deleting modifiers. |
| **Replace Stacks with This One** | `modpie.push_stack` | Clears target objects' stacks and duplicates the active object's complete modifier stack across all selected objects. |
| **Link All Modifiers to Selected** | `modpie.link_stack` | Establishes live, continuous modifier linking across all selected objects. |
| **Link Modifier to Selected** | `modpie.link_modifier` | Establishes live, continuous modifier linking for the active modifier across selected objects. |

---

## 14. Summary of Shortcuts

| Shortcut | Context | Action | Tier |
| :--- | :--- | :--- | :--- |
| <kbd>Ctrl + Tab</kbd> / <kbd>Ctrl + Shift + Tab</kbd> | Interactive Mode | Step forward / backward through modifier stack | Core (Free & Plus) |
| <kbd>[</kbd> / <kbd>]</kbd> or <kbd>Page Up / Down</kbd> | Interactive Mode | Step to previous / next modifier in stack | Core (Free & Plus) |
| <kbd>Ctrl</kbd> + <kbd>Wheel Up / Down</kbd> | Interactive Mode | Cycle modifiers with mouse wheel | Core (Free & Plus) |
| <kbd>Alt + 1..9</kbd> | Interactive Mode | Direct slot jump to modifier 1 through 9 | Core (Free & Plus) |
| <kbd>Alt</kbd> + <kbd>Wheel Up</kbd> | Interactive Mode | Move modifier **Up** in stack (toward index 0) | Core (Free & Plus) |
| <kbd>Alt</kbd> + <kbd>Wheel Down</kbd> | Interactive Mode | Move modifier **Down** in stack (toward bottom) | Core (Free & Plus) |
| <kbd>Alt</kbd> + <kbd>Up Arrow</kbd> | Interactive Mode | Move modifier **Up** in stack | Core (Free & Plus) |
| <kbd>Alt</kbd> + <kbd>Down Arrow</kbd> | Interactive Mode | Move modifier **Down** in stack | Core (Free & Plus) |
| <kbd>M</kbd> or <kbd>T</kbd> | Decimate Interactive | Cycle Decimate mode (Collapse ↔ Un-Subdivide ↔ Planar) | Core (Free & Plus) |
| <kbd>C</kbd> / <kbd>U</kbd> / <kbd>P</kbd> | Decimate Interactive | Jump directly to Collapse / Un-Subdivide / Planar mode | Core (Free & Plus) |
| <kbd>R</kbd> / <kbd>I</kbd> / <kbd>A</kbd> | Decimate Interactive | Select Ratio / Iterations / Angle Limit channel | Core (Free & Plus) |
| <kbd>G</kbd> / <kbd>S</kbd> | Decimate Interactive | Toggle Triangulate / Symmetry (Collapse mode only) | Core (Free & Plus) |
| <kbd>B</kbd> | Decimate Interactive | Toggle All Boundaries (Planar mode only) | Core (Free & Plus) |
| <kbd>Mouse Drag</kbd> | Curve to Tube (5.0+) | Adjust tube radius / scale interactively | Core (Free & Plus) |
| <kbd>R</kbd> / <kbd>Wheel</kbd> | Curve to Tube (5.0+) | Adjust Profile Resolution interactively | Core (Free & Plus) |
| <kbd>C</kbd> / <kbd>L</kbd> | Curve to Tube (5.0+) | Adjust Resample Count / Resample Length | Core (Free & Plus) |
| <kbd>H</kbd> | Curve to Tube (5.0+) | Toggle Shade Smooth | Core (Free & Plus) |
| <kbd>P</kbd> / <kbd>E</kbd> / <kbd>M</kbd> | Curve to Tube (5.0+) | Toggle Caps / Resample / Caps Merge | Core (Free & Plus) |
| <kbd>F</kbd> / <kbd>T</kbd> / <kbd>O</kbd> | Curve to Tube (5.0+) | Cycle Profile Mode / Caps Type / Resample Mode | Core (Free & Plus) |
| Stopwatch Icon (`⏱`) | Modifier Stack Header | Toggle Real-Time Evaluation Profiler | Modpie Plus Exclusive |
| <kbd>Shift</kbd> + Click Gear (`⚙`) | Modpie Panel | Unlock all collapsed modifier gears simultaneously | Core (Free & Plus) |
| <kbd>Alt</kbd> + <kbd>M</kbd> | 3D Viewport | Open standard **Modpie Radial Menu** | Core (Free & Plus) |
| <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>M</kbd> | 3D Viewport | Open **Modpie Panel** directly | Core (Free & Plus) |
| <kbd>Ctrl</kbd> + <kbd>A</kbd> | Object Mode | **Apply Modifier** (applies active/last interacted modifier) | Core (Free & Plus) |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>M</kbd> | 3D Viewport | Open **Object Modifiers Pie** | Modpie Plus Exclusive |

