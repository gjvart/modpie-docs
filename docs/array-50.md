---
sidebar_position: 11
title: Array (5.0+ & Legacy)
description: Modern Geometry Nodes Array vs classic Array (Legacy) support in Blender 5.0+ and earlier versions.
---

# Blender 5.0+ Modern Array vs. Array (Legacy)

<div className="hero-badge-container">
  <span className="badge badge--secondary">Core: Modern & Legacy Array</span>
</div>

In **Blender 5.0+**, Blender introduced a major procedural upgrade: the standard Array modifier was reimagined as a **Geometry Nodes modifier asset**, while the classic C-based modifier was retained and renamed to **Array (Legacy)**.

Modpie provides seamless, first-class support for **both generations**—whether you want modern radial and circular arrays or prefer the familiar, battle-tested classic workflow.

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/modpie_array5.0.gif" alt="Blender 5.0+ Modern Array vs Array (Legacy) in Modpie" />
  </div>
  <p className="media-caption">Figure: Tweaking modern Circular Array (5.0+) interactively and switching directly to Array (Legacy) in the 3D viewport.</p>
</div>

---

## Why Both Modifiers Exist & When to Use Each

Blender 5.0 keeps both modifier types available because each serves distinct artist needs:

| Feature / Goal | **Array (5.0+)** *(Modern GN Asset)* | **Array (Legacy)** *(Classic C Modifier)* |
| :--- | :--- | :--- |
| **Shapes & Distribution** | **Circle (Radial)**, **Line**, **Grid**, **Curve** | Linear along axes (Relative/Constant/Object) |
| **Radial / Circular Duplication** | **Built-in 1-Click** (instant Radius, Angle, Arc) | Requires auxiliary Empty object (Object Offset) |
| **Instance Handling** | Procedural instances with **Realize Instances** toggle | Direct evaluated geometry |
| **Randomization & Alignment** | Subpanels for Align Rotation and Randomize | Manual or Geometry Nodes required |
| **Familiar Workflow** | Modern procedural asset | Traditional muscle memory |
| **Best Used For** | Bolts in a ring, circular patterns, grids, procedural scatter | Quick linear offsets, standard hard-surface pipelines, legacy assets |

### Why Keep the Original Array (Legacy)?
Even with the modern procedural array, many artists prefer the classic modifier for everyday hard-surface modeling:
- **Relative Offset Muscle Memory**: Spacing duplicates precisely by a multiple of an object's bounding box (e.g. `1.0` on X) is second nature for many modelers.
- **Pipeline & Asset Compatibility**: Existing `.blend` files, asset libraries, and export pipelines often rely on the classic C modifier.
- **Zero Friction**: Modpie never forces you into one workflow. Both are clearly labeled and accessible side-by-side in your panel and menus.

---

## 1. Modern Array (5.0+): Interactive Controls & Shapes

The modern Array gives you advanced distribution shapes directly in the 3D viewport without needing complex node trees or helper objects:

### Key Capabilities
- **Radial / Circular Distribution**: Switch the Shape to **Circle** to duplicate objects in a clean ring. Adjust the **Radius**, choose the **Central Axis** (<kbd>X</kbd>, <kbd>Y</kbd>, or <kbd>Z</kbd>), and pick between **Full** circle or **Arc** segments.
- **Multiple Distribution Shapes**: Easily toggle between **Circle**, **Line**, **Grid**, and **Curve** distributions.
- **Realize Instances**: Turn on **Realize Instances** right from the panel header whenever you need downstream modifiers (like Bevel or Boolean) to operate on the duplicated geometry.

### Interactive Dragging Hotkeys (Modern Array)
When launching interactive mode on the modern Array:

| Hotkey | Control |
| :--- | :--- |
| <kbd>Wheel</kbd> / <kbd>C</kbd> | Adjust **Count** (number of duplicates) |
| <kbd>R</kbd> | Adjust **Radius** (when in Circle shape) |
| <kbd>D</kbd> | Adjust **Distance** |
| <kbd>A</kbd> | Cycle **Central Axis** (<kbd>X</kbd>, <kbd>Y</kbd>, <kbd>Z</kbd>) |
| <kbd>P</kbd> | Cycle **Shape** (*Circle* / *Line* / *Grid* / *Curve*) |
| <kbd>M</kbd> | Toggle **Merge** vertices on/off |
| <kbd>Tab</kbd> | Step forward to the next adjustable parameter |
| <kbd>Shift</kbd> / <kbd>Ctrl</kbd> | Hold for **Fine Precision** or **Grid Snapping** |

---

## 2. Array (Legacy): Classic Linear Control

For traditional linear duplication, Modpie preserves the full classic Array workflow:

### Interactive Dragging Hotkeys (Legacy Array)
When adjusting the classic Array interactively:

| Hotkey | Control |
| :--- | :--- |
| <kbd>Wheel</kbd> / <kbd>C</kbd> | Adjust **Count** |
| <kbd>K</kbd> | Drag **Constant Offset** |
| <kbd>O</kbd> | Drag **Relative Offset** |
| <kbd>A</kbd> | Cycle **Axis** (<kbd>X</kbd>, <kbd>Y</kbd>, <kbd>Z</kbd>) |
| <kbd>-></kbd> | Invert **Direction** (positive / negative) |
| <kbd>F</kbd> | Cycle **Fit Type** (*Fixed Count* / *Fit Length* / *Fit Curve*) |
| <kbd>M</kbd> | Toggle **Merge** on/off |

### Mutual Exclusivity: Relative vs. Constant Offset
In standard Blender, accidentally enabling both **Relative Offset** and **Constant Offset** at the same time causes compounding, confusing spacing. Modpie automatically enforces clean mutual exclusivity:
- Activating **Relative Offset** automatically turns Constant Offset **OFF**.
- Activating **Constant Offset** automatically turns Relative Offset **OFF**.
- This applies consistently across panel checkboxes, interactive shortcut keys, and typed values.

---

## 3. Mid-Drag Switching Between Modern & Legacy

As shown in the showcase above, you can combine both modifiers on the same mesh—for example, using **Array (5.0+)** to arrange objects into a circular ring, and stacking an **Array (Legacy)** on top to duplicate the entire ring vertically.

During interactive viewport dragging, you can switch seamlessly between the modern Array and the legacy Array using **Mid-Drag Switching**:
- Press <kbd>Ctrl + Tab</kbd> or <kbd>[</kbd> / <kbd>]</kbd> to step to the next modifier.
- Or click the **`‹`** and **`›`** chevron buttons on the HUD title bar (`‹ Array (Legacy) 2/2 ›`).
- All changes made across both modifiers are confirmed together when you <kbd>Left-Click</kbd> or press <kbd>Enter</kbd>.

---

## 4. Smart Version Adaptation Across Blender Releases

Modpie automatically adapts to whichever Blender version you are running:
- **Blender 5.0+**: Both modifiers are clearly labeled and available as **`Array (5.0+)`** and **`Array (Legacy)`** in menus, search, and panel cards.
- **Blender 4.2 LTS through 4.5**: Modpie cleanly hides the 5.0 Geometry Nodes asset and displays the classic modifier simply as **`Array`** without any unnecessary `(Legacy)` tag.
