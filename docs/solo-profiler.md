---
sidebar_position: 18
title: Solo & Profiler
description: Isolate modifiers with Solo, measure latency in milliseconds with the Profiler, and bake with Apply-Up-To-Here.
---

# Solo Modifier & Evaluation Profiler

<div className="hero-badge-container">
  <span className="badge badge--primary">Modpie Plus Exclusive</span>
</div>

Heavy modifier stacks can slow down viewport playback and make fine-tuning tricky. **Modpie Plus** introduces dedicated non-destructive diagnostic and performance tools right inside the modifier panel.

<div className="media-card">
  <div className="media-container">
    {/* To add your GIF/screenshot: replace below with <img src="/modpie-docs/img/media/solo_profiler.gif" alt="Solo Modifier and Profiler" /> */}
    <div className="media-placeholder">
      <span className="media-placeholder-icon">⏱</span>
      <span className="media-placeholder-title">Solo & Evaluation Profiler GIF</span>
      <span className="media-placeholder-hint">Drop file into static/img/media/solo_profiler.gif</span>
    </div>
  </div>
  <p className="media-caption">Figure 12: Real-time modifier latency profiler in milliseconds and Solo isolation.</p>
</div>

---

## 1. Solo Modifier (<kbd>Alt + H</kbd> Style Isolation)

Clicking the **Solo** button on any modifier temporarily disables all other modifiers in the stack, isolating the effect of that single modifier for inspection or fine-tuning:

- **State-Preserving Restoration**: Modpie records what each modifier's visibility was prior to soloing in a custom property on the object (`modpie_solo`). Un-soloing restores each modifier back to its exact previous state, rather than blindly turning everything on.
- **Survives File Reloads**: The solo state is persisted in the `.blend` file, so saving and reloading will never leave your stack in an accidental state.
- **Safe Switching**: Switching solo directly from one modifier to another restores the original stack visibility first, ensuring remembered states never get corrupted.

---

## 2. Modifier Evaluation Profiler

The Evaluation Profiler measures the exact execution latency of each modifier in **milliseconds (ms)**:

- **Visual Relative Bars**: Each modifier's evaluation cost is drawn as a comparative horizontal bar measured against the slowest modifier in the stack.
- **Stack Total in Header**: The header displays the total evaluation time of the active mesh (e.g. `Total: 18.4 ms`).
- **Pinpoint Bottlenecks**: Instantly discover whether an expensive Subdivision Surface, Remesh, or Geometry Nodes setup is dropping your viewport framerate.
- **Zero Overhead When Idle**: Timing modifiers on every redraw is designed for when you are actively hunting a bottleneck. The profiler is disabled by default in **Preferences ▸ Plus ▸ Show Evaluation Times** so it never consumes background CPU cycles until requested.

---

## 3. Apply-Up-To-Here

When preparing models for export or baking, you often want to convert base modifiers (like Booleans or Bevels) into permanent geometry while keeping top-level non-destructive modifiers (like Mirror or Subsurf) live:

- Clicking **Apply Up To Here** applies the target modifier and all modifiers above it in the stack into permanent mesh geometry.
- All modifiers below the target remain live and non-destructive.
- **Automatic Safety**: Un-solos the mesh first before applying so hidden modifiers are never discarded, and stops at the first failure rather than corrupting the mesh.
