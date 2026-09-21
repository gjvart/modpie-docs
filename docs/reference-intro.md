---
sidebar_position: 1
title: Overview
description: A quick introduction to the Reference & Architecture section in Modpie.
---

# About Reference & Architecture

<div className="hero-badge-container">
  <span className="badge badge--secondary">Core & Plus: Reference</span>
</div>

Welcome to the **Reference & Architecture** section.

This section is designed for artists, technical directors, and pipeline developers who want to dive deeper into how Modpie works under the hood, how to customize its behavior, and how it integrates with Blender's Python API and modifier systems.

Whether you want to understand how Geometry Nodes inputs are dynamically exposed, configure advanced HUD offsets in Preferences, or understand how floating modal dialogs interact with Blender's event loop, you will find the technical details here.

---

## What You Will Find in This Section

Here is a summary of the reference guides included in this section:

### 1. [Geometry Nodes Architecture](geometry-nodes.md)
Blender 4.x, 5.0, 5.1, and 5.2+ introduced RNA socket exposure for Geometry Nodes modifier assets. This guide explains how Modpie dynamically detects, inspects, and draws all custom input sockets directly inside the viewport panel, along with asset file management (Fake User pinning, export, and import).

### 2. [Preferences & Configuration Guide](preferences.md)
A comprehensive reference covering every setting available in **Edit > Preferences > Add-ons > Modpie**:
- **Interactive Tab**: Sensitivity sliders, object scale multipliers, HUD offsets, axis guide positioning, and announcement durations.
- **Panel Tab**: Switching between floating popups and persistent dialogs, default panel width, and auto-expand behavior.
- **Shortcuts Tab & Conflict Detection**: Rebinding keymaps and how Modpie's smart conflict detection monitors and warns you of overlapping shortcuts.

### 3. [Panel Behavior & Technical Notes](panel-behavior.md)
A technical deep-dive into how Modpie's floating popup and sidebar panels operate within Blender's modal UI loop. Explains the difference between viewport context execution and modal popup event trapping, auto-dismissal rules during interactive dragging, and how selection state is preserved across multi-object batch operations.

---

:::tip Looking for Hotkeys?
If you are looking for a quick table of keyboard shortcuts, head over to the [Shortcuts Cheat Sheet](shortcuts.md) in the Getting Started section.
:::
