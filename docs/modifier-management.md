---
sidebar_position: 7
title: Closed Modifier Management
description: Manage, reorder, visibility-toggle, and pin collapsed modifiers directly from header rows and gear menus.
---

# Closed Modifier Management & Pin to Last

<div className="hero-badge-container">
  <span className="badge badge--secondary">Core: Compact Stack Management</span>
</div>

In complex modifier stacks, keeping every modifier card expanded quickly clutters the screen and requires excessive scrolling.

Modpie lets you manage, reorder, toggle visibility for, and pin modifiers while keeping them **collapsed**, saving valuable vertical screen space in the viewport panel.

<div className="media-card">
  <div className="media-container" style={{flexDirection: 'column', gap: '16px', padding: '24px 16px', background: '#090c10'}}>
    <div style={{width: '100%', maxWidth: '786px'}}>
      <p style={{fontSize: '0.8rem', fontWeight: 600, color: 'var(--ifm-color-emphasis-600)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Gear Closed (Standard Collapsed Header)</p>
      <img src="/modpie-docs/img/media/modpie_mod_management1.png" alt="Modifier with Gear Closed" style={{width: '100%', height: 'auto', borderRadius: '4px'}} />
    </div>
    <div style={{width: '100%', maxWidth: '786px'}}>
      <p style={{fontSize: '0.8rem', fontWeight: 600, color: 'var(--ifm-color-emphasis-600)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Gear Pressed (Quick Action Tools)</p>
      <img src="/modpie-docs/img/media/modpie_mod_management2.png" alt="Modifier with Gear Pressed" style={{width: '100%', height: 'auto', borderRadius: '4px'}} />
    </div>
  </div>
  <p className="media-caption">Figure: Collapsed modifier card with gear closed (top) and with gear menu pressed (bottom) showing quick management tools.</p>
</div>

---

## 1. Core Visibility Always Accessible

Even when a modifier card is completely collapsed, its header row retains immediate access to all four essential Blender visibility switches:

- **On Cage**: Adjust original vertices relative to the evaluated geometry in Edit Mode.
- **Edit Mode**: Display modifier evaluation while editing mesh components.
- **Viewport Visibility**: Show or hide the modifier in the 3D viewport.
- **Render Visibility**: Include or exclude the modifier in final render evaluation.

You never have to expand a modifier card simply to mute or unmute it for viewport navigation or test renders.

---

## 2. Quick Gear Tools

Clicking the gear icon on any collapsed modifier row reveals a dedicated quick-action popup strip:

- **Move Up**: Shifts the modifier one position upward toward the top of the stack (earlier evaluation).
- **Move Down**: Shifts the modifier one position downward toward the bottom of the stack (later evaluation).
- **Pin to Last**: Pins or unpins the modifier to the very bottom of the stack.
- **Rename**: Opens an instant popup prompt to rename the modifier (see [Inline Modifier Renaming](inline-renaming.md)).

The gear menu automatically remains open after executing actions (such as reordering or renaming), allowing you to perform multiple adjustments without repeatedly re-opening the menu.

### Shift-Click to Unlock All Gears
Previously, revealing these tools required clicking the gear icon on each modifier individually. You can now hold <kbd>Shift</kbd> and click any modifier's gear button to **instantly unlock all other modifier gears on the active object at once**, exposing reorder arrows, pin buttons, and rename tools across your entire collapsed stack.

---

## 3. Dynamic Pin to Last Feedback

The **Pin to Last** system ensures critical terminal modifiers (like **Subdivision Surface**, **Bevel**, **Weighted Normal**, or **Triangulate**) stay locked at the bottom of the evaluation order:

- **Active State Embossing**: When a modifier is pinned to last, the pin button inside the gear menu and card headers highlights with an active, embossed/depressed visual state (`emboss=True, depress=True`).
- **Closed Modifier Pin Badge**: When a pinned modifier is collapsed with its gear menu closed, a highlighted pin badge remains permanently visible directly on the outer header row. You can immediately identify which modifier is pinned at a glance.
- **1-Click Quick Unpin**: Clicking the header pin badge directly unpins the modifier without opening the gear menu or expanding the card.
- **Real-Time Notification Toasts**: Every pin or unpin action triggers an instant viewport confirmation banner (`Pinned to Last` / `Unpinned from Last`).
- **Insertion Rule**: Any new modifiers added to the mesh—whether via the radial menu (<kbd>Alt</kbd> + <kbd>M</kbd>), the Quick Add strip, or Blender's menus—are automatically inserted **above** the pinned modifier.

---

## 4. Grouped Apply & Delete

To minimize accidental misclicks while maintaining rapid access:
- A visual separator precedes the **Apply** and **Delete** buttons on the right side of the card header.
- This clusters the destructive commit/remove operations into a clear functional pair, cleanly separated from the non-destructive visibility switches and gear tools.
- Both operations support full multi-object batch processing when multiple meshes are selected in the 3D viewport.

---

## 5. Apply Last Interacted Modifier & Auto-Activation

When working with multiple modifiers, you often want to expand a collapsed modifier card in the Modpie Panel, inspect its settings, and apply it. Previously, applying via the keyboard shortcut (<kbd>Ctrl + A</kbd>) could target an unintended modifier because expanding or adjusting a modifier did not change Blender's active modifier.

Modpie introduces **Apply Last Interacted Modifier**:
- **Auto-Activate on Expansion or Interaction**: Interacting with any modifier in the Modpie Panel—whether opening its card via the disclosure arrow (<kbd>▶</kbd>/<kbd>▼</kbd>), clicking its gear icon, moving it with reorder arrows, pinning it, renaming it, or launching an interactive viewport drag—**automatically makes that modifier the active modifier in the stack** (`obj.modifiers.active = mod` and `mod.is_active = True`).
- **Auto-Activate on Add**: Whenever a new modifier is added (from the pie menu, quick add slots, presets, or panel), it immediately becomes the active modifier.
- **Intelligent Apply Resolution**: Pressing the Apply Modifier shortcut (<kbd>Ctrl + A</kbd>) targets the modifier you last opened or worked on.
- **Direct 1-Click Apply from Panel**: Every modifier card in the Modpie Panel also features an instant checkmark button (<kbd>✔</kbd>) on its header to apply immediately without closing the panel.

### Preference Toggle
You can configure this behavior in **Preferences ▸ Modpie Panel**:
- **Apply Last Interacted Modifier** (Default: *Enabled*):
  - **When enabled**: Opening, adding, or adjusting a modifier in the panel automatically makes it active so the Apply shortcut targets it.
  - **When disabled**: Retains Blender's standard stack active behavior.

---

:::tip Standard Core Workflow
Closed modifier management is part of the standard core experience across both **Modpie Free** and **Modpie Plus**.
:::

