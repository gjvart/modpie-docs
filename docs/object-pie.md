---
sidebar_position: 6
title: Object Modifiers Pie
description: Context-aware radial pie menu (Shift + Ctrl + M) dynamically populated with only the modifiers currently applied to the active object.
---

# Object Modifiers Pie

<div className="hero-badge-container">
  <span className="badge badge--secondary">Core: Active Object Modifiers Pie</span>
</div>

Blender artists often work on objects that already have a specific set of modifiers configured—such as a character with **Mirror** and **Armature**, or hard-surface mechanical parts with **Bevel**, **Boolean**, and **Weighted Normal**. 

The **Object Modifiers Pie** dynamically generates a radial pie menu containing **only the modifiers currently applied to the active object**. Instead of navigating through a menu of every modifier in Blender, you get immediate radial access to tweak the exact modifiers your active mesh is already using.

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/mp_objectmodiferpie.png" alt="Object Modifiers Pie" />
  </div>
  <p className="media-caption">Figure: Object Modifiers Pie dynamically populates with only the modifiers currently applied to the active object.</p>
</div>


---

## 1. How It Works

1. Select any object that has one or more modifiers applied.
2. Press **<kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>M</kbd>** in the 3D Viewport (or navigate to the 3D Viewport header: **Object ▸ Modpie ▸ Active Object Modifiers**).
3. The radial pie menu dynamically fills with only that object's modifiers:
   - **Clutter-Free Distribution**: Unused directional slots emit separators. If an object only has 2 modifiers, only those 2 directions are displayed, keeping muscle memory fast and uncluttered.
   - **Click Action**: Clicking any modifier immediately executes your preferred action—either starting live interactive adjustment (`⟷`) in the viewport or opening the Modpie panel focused on that modifier.

### Large Stacks (>8 Modifiers)
If an object has more than 7 modifiers:
- Slots 1 through 7 display the first seven modifiers in the stack.
- Slot 8 displays a dedicated button: **`More Modifiers (N)...`**, which immediately opens the full Modpie Viewport Panel to access the remaining stack.

### Empty Stack Support
If you invoke the menu on an object that has no modifiers applied, the menu displays an informative note explaining that no modifiers are present, along with a direct button to open the Modpie panel or radial menu to add one.

---

## 2. Interaction & Click Actions

You can customize what happens when you click a modifier in the Object Modifiers Pie:

| Action Mode | Behavior | Best Used For |
| :--- | :--- | :--- |
| **Adjust Interactively** *(Default)* | Immediately starts live 3D viewport modal dragging (`⟷`) with HUD overlays on the clicked modifier. | Rapid tweaking, modeling flow, and tactile adjustments. |
| **Open in Panel** | Summons the floating Modpie Viewport Panel, automatically focusing and expanding the chosen modifier. | In-depth parameter inspection, texture assignment, vertex group binding. |

---

## 3. Customization & Preferences

Configure the Object Modifiers Pie to fit your personal workflow in **Edit ▸ Preferences ▸ Add-ons ▸ Modpie**:

- **Click Action**: Under the **Pie Slots** tab, set **Object Pie Action** to either `Adjust Interactively` or `Open in Panel`.
- **Custom Hotkey**: Under the **Keymap** tab, locate **Object Modifiers Pie** to customize the shortcut (default: <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>M</kbd>).

---

:::tip Standard Core Workflow
The Object Modifiers Pie is a core feature included in both **Modpie Free** and **Modpie Plus**. It works seamlessly alongside the standard **Modpie Radial Menu** (<kbd>Alt</kbd> + <kbd>M</kbd>) and the **Viewport Modifier Panel** (<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>M</kbd>).
:::
