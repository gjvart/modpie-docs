---
sidebar_position: 12
title: Shrinkwrap
description: Instant target prompt, viewport raycasting (T key), and clean Grease Pencil de-duplication.
---

# Shrinkwrap Target Picker & 3D Raycast

<div className="hero-badge-container">
  <span className="badge badge--secondary">Core: Smart Target & Raycast</span>
</div>

The Shrinkwrap modifier requires a target mesh to project, conform, or wrap geometry against. In vanilla Blender, finding the target object in a dense outliner creates unnecessary friction. Modpie streamlines the entire target assignment flow.

<div className="media-card">
  <div className="media-container">
    {/* To add your GIF/screenshot: replace below with <img src="/modpie-docs/img/media/shrinkwrap_target.gif" alt="Shrinkwrap Target Picker" /> */}
    <div className="media-placeholder">
      <span className="media-placeholder-icon">🎯</span>
      <span className="media-placeholder-title">Shrinkwrap Target Picker & 3D Raycast GIF</span>
      <span className="media-placeholder-hint">Drop file into static/img/media/shrinkwrap_target.gif</span>
    </div>
  </div>
  <p className="media-caption">Figure 7: Instant target object picker and 3D raycast hover selection during interactive mode.</p>
</div>

---

## Key Capabilities

### 1. Instant Target Selection Prompt
When adding Shrinkwrap from the radial pie menu, Quick Add, or search, Modpie immediately opens a target selector popup listing selected objects and candidate scene meshes. Selecting an object assigns it as the target and immediately enters interactive offset dragging.

### 2. 3D Viewport Raycast Hover-Pick (<kbd>T</kbd>)
During interactive modal dragging:
- Hover your mouse cursor over **any object in the 3D viewport** and press <kbd>T</kbd>.
- Modpie performs a 3D raycast directly into the scene and assigns that object as the Shrinkwrap target instantly.

### 3. Target Cycling in Empty Space
Pressing <kbd>T</kbd> with your cursor over empty viewport space cycles through candidate scene objects, updating the target mesh and HUD readout in real time.

### 4. Grease Pencil De-Duplication
In Blender 4.3+ and 5.0+, Blender introduced an internal `GREASE_PENCIL_SHRINKWRAP` modifier sharing the same display name. Modpie filters out invalid Grease Pencil modifiers on standard meshes so only valid mesh Shrinkwrap modifiers appear in your menus and searches.
