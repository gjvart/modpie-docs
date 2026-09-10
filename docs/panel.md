---
sidebar_position: 6
title: Modifier Panel
description: Full modifier stack popup (Ctrl + Alt + M) and sidebar panel in the 3D viewport.
---

# The Viewport Modifier Panel (`Ctrl + Alt + M`)

<div className="hero-badge-container">
  <span className="badge badge--secondary">Core: Full Stack Panel</span>
  <span className="badge badge--primary">Plus: Presets, Stacks & Sync Tools</span>
</div>

Modpie frees you from having to keep Blender's Properties editor open. Pressing <kbd>Ctrl + Alt + M</kbd> opens the complete modifier stack directly under your cursor, or you can access the permanent **Modifiers** tab in the 3D Viewport sidebar (<kbd>N</kbd> key).

<div className="media-card">
  <div className="media-container">
    {/* To add your GIF/screenshot: replace below with <img src="/modpie-docs/img/media/viewport_panel.gif" alt="Viewport Modifier Panel" /> */}
    <div className="media-placeholder">
      <span className="media-placeholder-icon">📋</span>
      <span className="media-placeholder-title">Viewport Stack Panel GIF / Screenshot</span>
      <span className="media-placeholder-hint">Drop file into static/img/media/viewport_panel.gif</span>
    </div>
  </div>
  <p className="media-caption">Figure 3: Full modifier stack with collapsed apply buttons, Quick Add, and stack tools.</p>
</div>

---

## 1. Quick Add Strip & Customize Toggle

At the top of the panel sits the **Quick Add** strip:
- Displays your pie modifiers as a unified icon bar.
- Buttons stay depressed when the active object already carries that modifier.
- Hovering any icon displays its name and Blender's official description.

### The Customize Toggle <span className="badge badge--primary">Plus</span>
Clicking **Customize** at the top right unfolds the Quick Add strip into an aligned 8-direction list showing:
- Direction names and custom labels
- Duplicate counts (`×n`)
- Interactive drag symbols (`⟷`)
- Configured arrival values (e.g. *Segments 3, Width 0.02m*)
- A pencil icon (<kbd>✎</kbd>) to edit any slot directly inside the viewport.

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/modpie_panel_customize.gif" alt="Panel Customize Toggle" />
  </div>
  <p className="media-caption">Figure: Unfolding the 8-direction slot customizer directly within the Modpie Viewport Panel.</p>
</div>

---

## 2. Header & Modifier Controls

Every modifier card in the panel includes standard and enhanced controls:

- **Collapsed Apply (<kbd>✓</kbd>)**: When a modifier card is collapsed, a dedicated **Apply** (<kbd>✓</kbd>) button appears directly on its header beside the delete (<kbd>✕</kbd>) icon. Apply modifiers instantly without expanding or diving into submenus.
- **Sibling Jumpers (<kbd>◀</kbd> `1/2` <kbd>▶</kbd>)**: When multiple modifiers of the same type exist, position badges (e.g. `2/3`) and navigation arrows let you jump between them.
- **Interactive Drag Button**: Re-opens interactive modal dragging for that modifier. In popup mode, the panel automatically closes to give you an unobstructed 3D view and re-opens when you confirm or cancel.
- **Visibility Switches**: Viewport, render, edit-mode, and on-cage toggles match Blender's native RNA icons.

---

## 3. Dedicated Contextual Buttons

Modpie adds native buttons that Blender normally hides in other editors:

- **Displace, Warp & Wave**: Custom **New Texture** button with **Open Image...** to load an image file straight into a new texture, plus a dynamic list of procedural textures available in your Blender release.
- **Mesh Deform, Surface Deform & Corrective Smooth**: Includes native **Bind / Unbind** buttons directly on the panel header.
- **Lattice**: Dedicated <kbd>+</kbd> button that automatically calculates bounding boxes, builds a fitted $3 \times 3 \times 3$ lattice cage, and exposes resolution sliders.
- **Geometry Nodes**: Displays node inputs plus **Keep in file** (Fake User pinning), **Export** to `.blend`, and **Import** from `.blend`.

---

## 4. Stack-Wide Management Tools

Perform batch operations across the entire active object stack with one click:
- **Expand All / Collapse All**: Clean up visual clutter.
- **Toggle Viewport Visibility**: Hide or show all modifiers on the mesh simultaneously.
- **Toggle Render Visibility**: Disable or enable evaluation in final renders.
- **Apply All**: Convert the entire non-destructive stack to permanent geometry.
- **Delete All**: Clear the entire stack in one click.

---

## 5. Modpie Plus Panel Tools <span className="badge badge--primary">Plus</span>

When Modpie Plus is installed, the panel gains the prominent **Plus Bar** directly beneath Add Modifier (`[ Presets ] [ Stacks ] [ Sync ]`) along with modifier card power buttons:

- **Presets**: Live clipboard pasting, starred favorites, full preset library, and interactive search.
- **Stacks**: Deploy complete multi-modifier pipelines in Append or Replace mode, with live modifier count badges.
- **Sync**: Contextual multi-object continuous **Live Linking** (`Link to Selected`), one-shot copying (`Copy to Selected`), stack diffing, and unlinking.
- **Card Tools**: Dedicated **Remember Default** (`✓`), **Solo Modifier** (`👁`), and **Apply Up To Here** (`⬆`) buttons on every modifier card.
- **Solo & Profiler**: Isolate modifiers with one click or view real-time evaluation latency in milliseconds.

:::tip Full Guide
For full breakdown and workflow examples of the panel toolbar and card tools, see the dedicated [Panel Presets, Stacks & Sync](panel-presets-stacks-sync.md) documentation page.
:::

