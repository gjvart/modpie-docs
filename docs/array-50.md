---
sidebar_position: 11
title: Array (5.0+)
description: Modern Geometry Nodes Array vs Array (Legacy) support across Blender 4.2 through 5.2+.
---

# Blender 5.0+ Modern Array vs. Array (Legacy)

<div className="hero-badge-container">
  <span className="badge badge--secondary">Core: Modern & Legacy Array</span>
</div>

In **Blender 5.0+**, Blender transitioned the default Array modifier into a **Geometry Nodes modifier asset** and renamed the classic C-based modifier to **Array (Legacy)**.

Modpie provides native, first-class support for both generations.

<div className="media-card">
  <div className="media-container">
    {/* To add your GIF/screenshot: replace below with <img src="/modpie-docs/img/media/array_modern.gif" alt="Modern Array vs Legacy" /> */}
    <div className="media-placeholder">
      <span className="media-placeholder-icon">✨</span>
      <span className="media-placeholder-title">Blender 5.0+ Modern Array vs Legacy Showcase</span>
      <span className="media-placeholder-hint">Drop file into static/img/media/array_modern.gif</span>
    </div>
  </div>
  <p className="media-caption">Figure 6: Modern Array with dynamic socket controls alongside classic Array (Legacy).</p>
</div>

---

## 1. Smart Version Adaptation

- **Blender 5.0, 5.1, and 5.2+**: Modpie automatically defaults to the modern **Array (Geometry Nodes Asset)** in radial menus, Quick Add, and search.
- **Blender 4.2 LTS to 4.4**: Modpie uses the standard C Array modifier with full feature parity.
- **Blender 5.2+ Socket Architecture**: Seamlessly reads and writes to Blender 5.2's new `properties.inputs` socket architecture.

---

## 2. Interactive Hotkeys for Modern Array

When adjusting the modern Array in interactive modal mode:

| Hotkey | Control |
| :--- | :--- |
| <kbd>Wheel</kbd> / <kbd>C</kbd> | Adjust **Count** |
| <kbd>D</kbd> | Adjust **Distance** |
| <kbd>O</kbd> | Adjust **Offset vector** (supports <kbd>X</kbd>, <kbd>Y</kbd>, <kbd>Z</kbd>) |
| <kbd>T</kbd> | Adjust **Translation vector** (supports <kbd>X</kbd>, <kbd>Y</kbd>, <kbd>Z</kbd>) |
| <kbd>S</kbd> | Adjust **Scale vector** (supports <kbd>X</kbd>, <kbd>Y</kbd>, <kbd>Z</kbd>) |
| <kbd>M</kbd> | Toggle **Merge** |
| <kbd>R</kbd> | Toggle **Realize Instances** |
| <kbd>F</kbd> | Cycle **Offset Method** (*Absolute* / *Constant* / *Relative*) |
| <kbd>P</kbd> | Cycle **Shape** (*Line* / *Grid* / *Circle* / *Curve*) |

---

## 3. Mutual Exclusivity: Relative vs. Constant Offset

In classic Array modifiers, having both **Relative Offset** and **Constant Offset** active simultaneously often causes confusing compounding spacing. Modpie enforces strict mutual exclusivity:

- Activating **Relative Offset** automatically switches Constant Offset **OFF**.
- Activating **Constant Offset** automatically switches Relative Offset **OFF**.
- Works consistently across panel checkboxes, interactive modal keys, and direct numeric typing.
