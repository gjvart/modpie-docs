---
sidebar_position: 22
title: Panel Behavior
description: How the Modpie panel manages screen space and automatically clears viewport clutter during interactive dragging.
---

# Viewport Panel Behavior & Focus

<div className="hero-badge-container">
  <span className="badge badge--secondary">Core: Focus Management</span>
</div>

When modeling in 3D, keeping an unobstructed view of your geometry is essential. Modpie is designed with intelligent focus management so that menus and panels only appear when you need them, and vanish the moment you are actively shaping meshes.

---

## 1. Auto-Hide During Interactive Dragging

Whenever you start an interactive modifier drag—whether launched from the radial pie menu, quick-add buttons, modifier search, or by clicking the drag icon on an existing modifier card:

1. **Panel Automatically Hides**:
   The floating panel immediately disappears the moment interactive mode begins.
2. **Clear 3D Viewport**:
   Your viewport remains completely free of UI clutter, allowing you to freely orbit, zoom, and inspect your mesh edges and shading from any angle while dragging.
3. **Focused Cursor HUD**:
   All relevant values, hotkey hints, and mode options are displayed cleanly in the compact viewport HUD right near your mouse cursor.

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/modpie_panel_behave1.gif" alt="Panel Auto-Hide" />
  </div>
  <p className="media-caption">Figure: The panel closes instantly when interactive dragging begins, keeping the 3D view clear.</p>
</div>

---

## 2. Returning After Adjustment

Once you complete your adjustment:
- **Confirm (<kbd>Left-Click</kbd> or <kbd>Enter</kbd>)**: Commits the new modifier values. If you invoked the adjustment from the Modpie Panel, the panel smoothly re-opens right where you left it so you can continue working on other modifiers.
- **Cancel (<kbd>Right-Click</kbd> or <kbd>Esc</kbd>)**: Cleanly restores the modifier's previous values and returns you to your previous viewport state.

---

## 3. Floating Popup vs. Docked Sidebar

Modpie gives you the choice of how you prefer the panel to appear in your workspace:

- **Floating Popup (Default)**: Opens right next to your mouse cursor wherever you are in the 3D viewport. Perfect for minimalists and artists working in fullscreen view.
- **Docked Sidebar Tab**: Docks permanently inside Blender's 3D Viewport Sidebar (<kbd>N</kbd>-panel) under the **Modpie** tab, functioning just like Blender's native panels.

You can switch between these modes anytime in **Edit ▸ Preferences ▸ Add-ons ▸ Modpie ▸ Modpie Panel ▸ Display Mode**.

---

## 4. Multi-Object Selection Stability

When working across multiple selected meshes:
- Modpie maintains your active and selected object hierarchy throughout panel interactions and dragging sessions.
- Operations that broadcast parameters (such as One-Click Sync or Live Linking) safely target all selected meshes without deselecting objects or losing your active mesh focus.
