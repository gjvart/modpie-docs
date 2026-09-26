---
sidebar_position: 7
title: Closed Modifier Management
description: Manage, reorder, toggle visibility, and pin collapsed modifiers directly from header rows and gear menus.
---

# Closed Modifier Management & Pin to Last

<div className="hero-badge-container">
  <span className="badge badge--secondary">Core: Compact Stack Management</span>
</div>

When building detailed assets in Blender, modifier stacks can get tall very quickly. Having every modifier card expanded clutters your screen and forces you to scroll constantly just to find what you need.

Modpie solves this with **Closed Modifier Management**. You can reorder, toggle visibility, rename, and pin modifiers while keeping their cards completely **collapsed**, keeping your viewport panel clean, compact, and easy to navigate.

<div className="media-card">
  <div className="media-container" style={{flexDirection: 'column', gap: '16px', padding: '24px 16px', background: '#090c10'}}>
    <div style={{width: '100%', maxWidth: '786px'}}>
      <p style={{fontSize: '0.8rem', fontWeight: 600, color: 'var(--ifm-color-emphasis-600)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Standard Collapsed Header</p>
      <img src="/modpie-docs/img/media/modpie_mod_management1.png" alt="Modifier with Gear Closed" style={{width: '100%', height: 'auto', borderRadius: '4px'}} />
    </div>
    <div style={{width: '100%', maxWidth: '786px'}}>
      <p style={{fontSize: '0.8rem', fontWeight: 600, color: 'var(--ifm-color-emphasis-600)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Quick Action Tools Menu (Gear Clicked)</p>
      <img src="/modpie-docs/img/media/modpie_mod_management2.png" alt="Modifier with Gear Pressed" style={{width: '100%', height: 'auto', borderRadius: '4px'}} />
    </div>
  </div>
  <p className="media-caption">Figure: Collapsed modifier card with gear closed (top) and with gear menu opened (bottom) showing quick management tools.</p>
</div>

---

## 1. Always-Ready Visibility Controls

Even when a modifier card is completely collapsed, its header row keeps all four essential Blender visibility switches accessible with a single click:

- **On Cage**: Adjust original vertices relative to the evaluated geometry in Edit Mode.
- **Edit Mode**: Display modifier results while actively editing mesh vertices, edges, or faces.
- **Viewport Visibility**: Show or hide the modifier in the 3D viewport.
- **Render Visibility**: Include or exclude the modifier in test and final renders.

You never need to expand a modifier card just to mute it for viewport performance or preview a render without it.

---

## 2. Quick Gear Tools

Clicking the gear icon (`⚙`) on any collapsed modifier row reveals an instant action bar:

- **Move Up (<kbd>▲</kbd>)**: Shifts the modifier one position upward toward the top of the stack (evaluates earlier).
- **Move Down (<kbd>▼</kbd>)**: Shifts the modifier one position downward toward the bottom of the stack (evaluates later).
- **Pin to Last (<kbd>📌</kbd>)**: Locks or unlocks the modifier to the very bottom of the stack.
- **Rename (<kbd>✏️</kbd>)**: Opens a quick popup prompt to rename the modifier (see [Inline Modifier Renaming](inline-renaming.md)).

The gear menu automatically stays open while you click, so you can step a modifier up or down several positions in a row without repeatedly reopening the menu.

### Unlock All Gears at Once with Shift-Click
Need to reorganize multiple collapsed modifiers quickly? Hold <kbd>Shift</kbd> and click any modifier's gear button to **instantly open the gear action tools on every modifier card at once**. This exposes reorder arrows, pin buttons, and rename tools across your entire stack in one click.

---

## 3. Pin to Last: Keep Crucial Modifiers at the Bottom

Certain modifiers—such as **Subdivision Surface**, **Bevel**, **Weighted Normal**, or **Triangulate**—almost always belong at the very end of your evaluation order. If an added modifier accidentally ends up below them, your shading or geometry can break.

The **Pin to Last** system ensures your terminal modifiers stay anchored right where they belong:

- **Clear Active State**: When a modifier is pinned to the end of the stack, the pin button highlights with an active embossed style so you can tell it is locked in place.
- **Visible Header Badge**: When a pinned modifier is collapsed with its gear menu closed, a highlighted pin badge stays permanently visible directly on its outer header row. You can immediately see which modifier is anchored at a glance.
- **1-Click Quick Unpin**: Click the header pin badge directly to unpin the modifier—no need to open the gear menu or unfold the card first.
- **Instant Toast Feedback**: Pinning or unpinning displays an immediate confirmation banner (`Pinned to Last` / `Unpinned from Last`) in the viewport.
- **Smart Insertion Rule**: Any new modifiers added to the mesh—whether from the radial pie (<kbd>Alt</kbd> + <kbd>M</kbd>), the quick add strip, or Blender's menus—are automatically placed **above** the pinned modifier.

---

## 4. Grouped Apply & Delete

To keep destructive operations safe yet fast to reach:
- A clean visual separator sets apart the **Apply** (<kbd>✔</kbd>) and **Delete** (<kbd>✕</kbd>) buttons on the far right of the card header.
- This clusters your commit and removal actions into a clear pair, distinct from non-destructive display toggles and gear tools.
- Both buttons support multi-object batch operations when multiple meshes are selected in the viewport.

---

## 5. Smart Auto-Activation & Apply

When working with modifier stacks, you frequently want to inspect a modifier and apply it. In default Blender, adjusting or expanding a modifier doesn't necessarily make it the active modifier in Blender's data model, which can lead to accidentally applying the wrong modifier when using shortcuts.

Modpie features **Smart Auto-Activation**:
- **Auto-Activate on Interaction**: Any time you interact with a modifier card in the Modpie Panel—whether unfolding it (<kbd>▶</kbd>/<kbd>▼</kbd>), clicking its gear icon, reordering it, pinning it, renaming it, or launching an interactive viewport drag—Modpie **automatically makes that modifier Blender's active modifier**.
- **Auto-Activate on Add**: When you add a new modifier from the pie menu, quick add slots, presets, or panel, it immediately becomes the active modifier.
- **Reliable Shortcut Target**: Pressing the Apply shortcut (<kbd>Ctrl + A</kbd>) in the 3D viewport reliably targets the modifier you were just touching.
- **Direct 1-Click Header Apply**: Every modifier card also features an instant checkmark button (<kbd>✔</kbd>) on its header row to apply it right away without opening extra menus.

### Preference Option
You can customize this behavior in **Edit ▸ Preferences ▸ Add-ons ▸ Modpie ▸ Modpie Panel**:
- **Apply Last Interacted Modifier** (Default: *Enabled*):
  - **Enabled**: Touching or adjusting any modifier in the panel makes it active so your Apply shortcut targets it.
  - **Disabled**: Uses standard Blender stack active behavior.

---

:::tip Core Feature
Closed modifier management is built into both **Modpie Free** and **Modpie Plus** so you can keep your viewport clean and fast on every project.
:::
