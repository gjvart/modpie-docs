---
sidebar_position: 5
title: Radial Menu
description: The high-speed radial menu (Alt + M), smart repeat handling, duplicate badges, and 8-way Plus customization.
---

# The Radial Menu (`Alt + M`)

<div className="hero-badge-container">
  <span className="badge badge--secondary">Core: 5 Upper Directions</span>
  <span className="badge badge--primary">Plus: All 8 Directions + Presets</span>
</div>

Pressing <kbd>Alt + M</kbd> summons the radial pie menu centered around your cursor. The menu is structured to put your primary modeling operations at instantaneous wrist flicks.

:::tip Pro Tip: Rebind to Extra Mouse Buttons
While the default shortcut is <kbd>Alt + M</kbd>, the **creator's preferred setup** for rapid modeling is binding Modpie to an extra mouse thumb button (such as **<kbd>Mouse Button 4</kbd> + <kbd>Shift</kbd>** or **<kbd>Ctrl</kbd>**). This allows your right thumb to summon the pie and your hand to flick toward the desired modifier in one fluid gesture, keeping your left hand resting undisturbed on your keyboard. See [How to Customize Hotkeys](shortcuts.md#how-to-customize-hotkeys) for details.
:::

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/Adding_Mods.gif" alt="Radial Menu & Interactive Dragging" />
  </div>
  <p className="media-caption">Figure 2: Adding and adjusting modifiers instantly using the radial menu.</p>
</div>

---

## 1. Radial Layouts: Free vs. Plus

### Modpie (Free) Layout
The free build gives you the five upper directions, with each one dedicated to a single modifier. South is permanently assigned to the modifier panel:

```
        Solidify   Subdivision   Array
          Mirror       ·         Bevel
             ·        Panel        ·
```

### Modpie Plus Layout
Modpie Plus opens all eight directions. Each direction can hold:
- **A modifier**: Any modifier available in your Blender version.
- **Presets & Stacks**: Opens your saved library in one flick (**default on SE**, right beside the panel).
- **Modifier Panel**: Dedicated stack panel opener.
- **Searchable Modifier List**: Instant modifier search.
- **Slot Editor / Settings**: In-viewport configuration.
- **None**: Empty slot.

```
        Solidify   Subdivision   Array
          Mirror       ·         Bevel
          Search      Panel    Presets & Stacks
```

:::note Why South for the Panel?
Blender's native pie widget draws the center as a non-clickable text label. The modifier panel is therefore positioned on **South**, which is the shortest possible downward flick from your cursor.
:::

---

## 2. Smart Duplicate Repeat Handling

When you select a modifier that the active mesh already possesses (for example, clicking *Bevel* on an already beveled cube):

| Interaction | Action | Behavior |
| :--- | :---: | :--- |
| **Normal Click** | **Adjust Existing** | Enters interactive modal mode directly on the existing modifier in the stack. |
| <kbd>Shift</kbd> + **Click** | **Add Another** | Forces the creation of a brand-new, additional modifier at the bottom of the stack. |
| <kbd>Ctrl</kbd> + **Click** | **Force Adjust** | Always adjusts the existing modifier, regardless of user preference settings. |

### Smart Duplicate Badges (`×2`, `×3`)
Pie slots automatically display live count badges (e.g. `Bevel ×2`, `Array ×3`) reflecting how many modifiers of that type are currently on the active mesh, so you always know your exact stack state before clicking.

### Repeat Preferences
In **Edit ▸ Preferences ▸ Add-ons ▸ Modpie ▸ Pie Slots**, you can customize *Repeating a Modifier on the Same Object*:
- **Adjust the Existing One** (Default)
- **Always Add Another** (Never adjust, always stack a new one)
- **Ask Each Time** (Opens a popup menu listing existing modifiers plus *Add Another*)
- **Add Modifier and Search Always Add** (Enabled by default: items picked from search popups or the Add Modifier list always create a new modifier).

---

## 3. Smarter Starting Values

When Modpie creates a new modifier, it avoids Blender's generic defaults and initializes with settings you would reach for anyway:
- **Bevel**: 2 segments, angle limit, clamp overlap enabled.
- **Mirror**: Clipping enabled.
- **Solidify**: Even thickness enabled.
- **Subdivision Surface**: Optimal display enabled.

### Object Size Scaling
Lengths and offsets (such as Bevel width or Solidify thickness) are automatically scaled relative to the active object's bounding box dimensions. The same pie slot gives a delicate bevel on a small screw and a clean edge on a massive building.

---

## 4. Axis Picking & Sibling Navigation

### Picking the Axis
- Press <kbd>X</kbd>, <kbd>Y</kbd>, or <kbd>Z</kbd> to jump straight to an axis.
- Press <kbd>A</kbd> to step through axes ($X \rightarrow Y \rightarrow Z \rightarrow X$), or <kbd>Shift + A</kbd> to reverse.
- The active axis is drawn beside the mesh origin on the **On-Mesh Axis Badge** in vibrant RGB colors.

### Swapping Modifier Siblings
If your mesh has multiple modifiers of the same type (e.g. two Bevels):
- Press <kbd>Ctrl + Wheel</kbd> or <kbd>[</kbd> / <kbd>]</kbd> during the interactive modal to switch between them live.
- Or click the on-screen <kbd>‹</kbd> <kbd>›</kbd> arrows on the viewport HUD.
- The readout indicates the current sibling position (e.g. `Mirror.001  2 / 3`).