---
sidebar_position: 4.5
title: Latest Features (v0.9.99)
description: Complete guide to the latest features and workflow enhancements added in Modpie and Modpie Plus v0.9.99.
---

# Modpie & Modpie Plus: Latest Features Guide (v0.9.99)

<div className="hero-badge-container">
  <span className="badge badge--primary">Modpie Plus 0.9.99</span>
  <span className="badge badge--secondary">Modpie 0.9.99</span>
  <span className="badge badge--success">Release Version</span>
</div>

This guide documents the latest features and workflow enhancements added to **Modpie** and **Modpie Plus**, explaining how each feature works, how to use it in practice, and how to customize it in Preferences.

---

## 1. Mid-Drag Modifier Switching in Interactive Mode (v0.9.99)

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

## 2. Apply Last Interacted Modifier & Auto-Activation (v0.9.98)

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

## 3. Shift-Click Gear Tools Toggle on Closed Modifier Cards (v0.9.97)

### Overview
When modifier cards in the Modpie Panel are collapsed (closed), each card displays a gear icon (`⚙`) that unlocks essential collapsed controls:
- **Move Up Arrow (<kbd>▲</kbd>)**
- **Move Down Arrow (<kbd>▼</kbd>)**
- **Pin to Last Pushpin (<kbd>📌</kbd>)**
- **Inline Rename Pencil**

Previously, opening these tools required clicking the gear icon on each modifier individually. Now in **v0.9.97**, you can hold <kbd>Shift</kbd> and click any modifier's gear button to **instantly unlock all other modifier gears on the active object at once**.

---

## 4. Interactive Mode: Modifier Stack Reordering

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

## 5. Context / Object-Based Modifier Pie Menu (Modpie Plus)

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

## 6. Inline Modifier Renaming

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

## 7. Closed Modifier Management & Pin to Last Feedback

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

## 8. Preferences UI Overhaul

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

## 9. Apply Modifier Workflow & Technical Notes

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

## 10. Stack Sync Naming Symmetry (Modpie Plus)

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

## 11. Summary of Shortcuts

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
| <kbd>Shift</kbd> + Click Gear (`⚙`) | Modpie Panel | Unlock all collapsed modifier gears simultaneously | Core (Free & Plus) |
| <kbd>Alt</kbd> + <kbd>M</kbd> | 3D Viewport | Open standard **Modpie Radial Menu** | Core (Free & Plus) |
| <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>M</kbd> | 3D Viewport | Open **Modpie Panel** directly | Core (Free & Plus) |
| <kbd>Ctrl</kbd> + <kbd>A</kbd> | Object Mode | **Apply Modifier** (applies active/last interacted modifier) | Core (Free & Plus) |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>M</kbd> | 3D Viewport | Open **Object Modifiers Pie** | Modpie Plus Exclusive |

