---
sidebar_position: 1
title: Overview
description: A quick introduction to the Core Workflows section in Modpie.
---

# About Core Workflows

<div className="hero-badge-container">
  <span className="badge badge--secondary">Core: Universal Workflows</span>
</div>

Welcome to the **Core Workflows** section. 

The main idea behind Modpie is simple: **you shouldn't have to leave the 3D viewport to manage your modifiers.** In standard Blender, every time you want to add, adjust, reorder, or rename a modifier, you have to move your cursor across the screen, hunt through tabs in the Properties panel, and fiddle with tiny numeric fields.

Modpie replaces that friction with a fast, cohesive set of in-viewport tools that work together naturally. Before you jump into the individual pages, here is how the whole system connects.

---

## How the Core Tools Work Together

Think of Modpie as having three main layers, depending on what you are doing at any moment:

```text
       1. Quick Gestures           2. Tactical Edits            3. Full Stack Control
     [ Radial Pie Menu ]    -->    [ Interactive HUD ]   -->   [ Viewport Stack Panel ]
          (Alt + M)                 (Live Mouse Drag)              (Ctrl + Alt + M)
```

1. **The Radial Pie Menu (<kbd>Alt</kbd> + <kbd>M</kbd>)**: This is your fast-lane for everyday modeling. Common modifiers are mapped to radial directions so you can flick your mouse and add them in fractions of a second using pure muscle memory.
2. **Interactive Mode & Live HUD**: As soon as you add a modifier, you enter interactive mode. Your mouse moves the value, numbers follow your cursor, 3D guide lines show you the direction, and you can even move the modifier up and down the stack on the fly (<kbd>Alt</kbd> + <kbd>Wheel</kbd>).
3. **The Viewport Modifier Panel (<kbd>Ctrl + Alt + M</kbd> or <kbd>N</kbd> Sidebar)**: When you need to see your full modifier stack, manage multiple modifiers, rename them, toggle visibility, or apply them, the floating panel opens right under your cursor without blocking your view.

---

## What You Will Find in This Section

Here is a summary of each guide in this section:

- **[The Radial Pie Menu](pie-menu.md)**: How the radial menu works, how repeat handling prevents accidental duplicate modifiers, and how duplicate badges work.
- **[Object Modifiers Pie](object-pie.md)**: A smart radial menu (<kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>M</kbd>) that dynamically populates with only the modifiers currently on your active mesh.
- **[The Viewport Modifier Panel](panel.md)**: How to open and use the full floating stack panel and sidebar tab in the 3D viewport.
- **[Closed Modifier Management](modifier-management.md)**: How to reorder, pin to the bottom, and toggle visibility for modifiers while keeping them collapsed to save screen space.
- **[Inline Modifier Renaming](inline-renaming.md)**: Renaming modifiers instantly directly inside the viewport panel without opening Blender's Properties editor.
- **[Interactive Mode & Viewport HUD](interactive-modal.md)**: Tactile dragging, on-mesh RGB axis badges, numeric locking, and precision controls.
- **[Interactive Stack Reordering](stack-reordering.md)**: Moving modifiers up and down the evaluation stack live during interactive drag sessions with <kbd>Alt</kbd> + <kbd>Wheel</kbd>.
- **[Multi-Object Editing](multi-object.md)**: How Modpie automatically adds, adjusts, and reorders modifiers across all selected objects at the same time.

---

:::tip Where to Start
If you are new to Modpie, start with **[The Radial Pie Menu](pie-menu.md)** and **[Interactive Mode & Viewport HUD](interactive-modal.md)**. Those two make up about 80% of your day-to-day modeling time.
:::
