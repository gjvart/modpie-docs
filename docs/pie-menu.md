---
sidebar_position: 5
title: Radial Menu
description: The high-speed radial menu (Alt + M), smart repeat handling, duplicate badges, and Free vs Plus layouts.
---

# The Radial Menu (`Alt + M`)

<div className="hero-badge-container">
  <span className="badge badge--secondary">Core: 5 Upper Directions</span>
  <span className="badge badge--primary">Plus: All 8 Directions + Presets</span>
</div>

Pressing <kbd>Alt + M</kbd> opens the radial pie menu centered right under your mouse cursor. It is designed around muscle memory—so you can add your most common modifiers with a quick flick of your wrist instead of hunting through Blender's menus.

:::tip Pro Tip: Rebind to Extra Mouse Buttons
If your mouse has side thumb buttons (such as **Mouse Button 4** or **Mouse Button 5**), mapping one of them to Modpie in Preferences is a game changer. Your left hand stays anchored on your keyboard navigation keys, while your right thumb summons the pie and your wrist flicks to pick the modifier in one smooth motion. See [How to Customize Hotkeys](shortcuts.md#how-to-customize-hotkeys) for setup steps.
:::

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/Adding_Mods.gif" alt="Radial Menu & Interactive Dragging" />
  </div>
  <p className="media-caption">Figure: Adding and adjusting modifiers instantly using the radial menu.</p>
</div>

---

## 1. Radial Layouts: Free vs. Plus

Modpie provides two radial menu layouts depending on whether you are using **Modpie Free** or **Modpie Plus**:

<div className="comparison-grid">
  <div className="comparison-card">
    <div className="comparison-header">
      <span className="comparison-title">Modpie Free (Standard)</span>
      <span className="badge badge--secondary">5 Upper Directions</span>
    </div>
    <div className="media-container">
      <img src="/modpie-docs/img/media/modpie_standardpie.png" alt="Modpie Free Standard Radial Menu" />
    </div>
    <div className="comparison-footer">
      <strong>Core Layout:</strong> Fast 5-direction radial menu for your most common modifiers, with South opening the Viewport Modifier Panel.
    </div>
  </div>

  <div className="comparison-card plus">
    <div className="comparison-header">
      <span className="comparison-title">Modpie Plus</span>
      <span className="badge badge--primary">All 8 Directions</span>
    </div>
    <div className="media-container">
      <img src="/modpie-docs/img/media/modpie_pluspie.png" alt="Modpie Plus 8-Way Radial Menu" />
    </div>
    <div className="comparison-footer">
      <strong>Full 8-Way Layout:</strong> Unlocks South-West (Search Modifiers) and South-East (Presets & Stacks), with full in-viewport customization.
    </div>
  </div>
</div>

### Key Differences

- **Modpie Free (Standard)**:
  - Gives you the five upper directions (North, North-West, North-East, West, and East) dedicated to your primary modifiers.
  - South is permanently assigned to the **Modpie Panel** so you can open your full modifier stack with a quick downward flick.
  - The bottom two corners remain empty for a clean, uncluttered layout.

- **Modpie Plus**:
  - Unlocks all eight compass directions.
  - **South-West** is mapped to **Search Modifiers** by default for instant search and addition.
  - **South-East** is mapped to **Presets & Stacks** by default, letting you browse your saved preset recipes in one flick.
  - Every direction can be fully customized directly inside the 3D viewport using the [In-Viewport Slot Customizer](slot-customizer.md).

:::note Why is the Panel on South?
In Blender, the center of a radial menu is a non-clickable text label. That is why the Modpie Panel is placed on **South**—it is the quickest and most direct downward flick from your cursor.
:::

---

## 2. Smart Duplicate Repeat Handling

What happens if you click a modifier that your object already has? For example, what if you click **Bevel**, but your mesh is already beveled?

In default Blender, you would accidentally add a redundant second modifier. Modpie handles this intelligently to keep your stack clean:

| Interaction | Action | What It Does |
| :--- | :---: | :--- |
| **Normal Click** | **Adjust Existing** | Jumps straight into interactive mode on the modifier you already have, without adding a duplicate. |
| <kbd>Shift</kbd> + **Click** | **Add Another** | Forces the creation of a brand-new, second modifier at the end of the stack. |
| <kbd>Ctrl</kbd> + **Click** | **Force Adjust** | Always adjusts the existing modifier, regardless of your default preferences. |

### Smart Duplicate Badges (`×1`, `×2`)
Each slot on the pie menu displays a small count badge (such as `Bevel ×1` or `Array ×2`) showing exactly how many of that modifier currently exist on your active mesh. You always know your object's stack state before clicking.

### Repeat Preferences
You can customize repeat behavior in **Edit > Preferences > Add-ons > Modpie > Pie Slots** under *Repeating a Modifier on the Same Object*:
- **Adjust the Existing One** (Default): Edits the current modifier on click.
- **Always Add Another**: Always adds a new modifier to the stack.
- **Ask Each Time**: Opens a quick popup asking whether to adjust or add another.

---

## 3. Smarter Starting Values

When you add a modifier in default Blender, it starts with generic numbers that rarely look right (like a Bevel with only 1 segment, or Solidify without Even Thickness).

Modpie starts new modifiers with practical, sensible settings you would actually use:
- **Bevel**: Starts with 2 segments, angle limit, and clamp overlap turned on.
- **Mirror**: Starts with clipping enabled so vertices weld cleanly at the center.
- **Solidify**: Starts with even thickness turned on to prevent pinching.
- **Subdivision Surface**: Starts with optimal display enabled to keep wireframes clean in edit mode.

### Automatic Object Size Scaling
Offsets and widths (such as Bevel width or Solidify thickness) automatically scale relative to your object's physical dimensions. A tiny screw gets a delicate, millimeter bevel, while a large building gets an appropriately proportioned edge—automatically.

---

## 4. Axis Picking & Sibling Navigation

### Quick Axis Controls
While adjusting a modifier in interactive mode:
- Press <kbd>X</kbd>, <kbd>Y</kbd>, or <kbd>Z</kbd> to jump straight to that axis.
- Press <kbd>A</kbd> to cycle through axes ($X \rightarrow Y \rightarrow Z$), or <kbd>Shift + A</kbd> to cycle in reverse.
- The active axis is displayed beside your object's origin on the **On-Mesh Axis Badge** in standard 3D RGB colors.

### Switching Between Sibling Modifiers
If your mesh has more than one of the same modifier (for example, two Bevel modifiers—one for large edges and one for tiny highlights):
- Press <kbd>Ctrl + Wheel</kbd> or <kbd>[</kbd> / <kbd>]</kbd> during interactive mode to jump between them live.
- Or click the on-screen <kbd>‹</kbd> <kbd>›</kbd> arrows on the viewport HUD.
- The readout updates to show which sibling you are currently adjusting (such as `Bevel  2 / 2`).

---

## 5. Context-Aware Radial Menu: Object Modifiers Pie

When you want to tweak modifiers that are already on your mesh without adding anything new:

- Press **<kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>M</kbd>** to summon the **Object Modifiers Pie**.
- Instead of showing standard modifiers to add, it dynamically populates with **only the modifiers currently applied to your active object**.
- See the dedicated [Object Modifiers Pie](object-pie.md) guide for full details.