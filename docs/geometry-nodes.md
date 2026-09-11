---
sidebar_position: 20
title: Geometry Nodes
description: Manage node group lifecycles, inspect and adjust input sockets, and handle external library import/export in Modpie.
---

# Geometry Nodes Workflow

<div className="hero-badge-container">
  <span className="badge badge--secondary">Core: Node Group Lifecycle & Inputs</span>
</div>

Modpie brings essential Geometry Nodes lifecycle tools and live input socket controls directly onto the modifier card in the 3D viewport, removing the need to constantly switch to the Node Editor or Properties Editor.

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/modpie_Geonodes1.gif" alt="Geometry Nodes Input Sockets in Modpie Panel" />
  </div>
  <p className="media-caption">Figure: Geometry Nodes input sockets automatically exposed and adjustable directly within the Modpie viewport panel.</p>
</div>

---

## 1. Dynamic Input Sockets in the Viewport Panel

Whenever an active object has a Geometry Nodes modifier, Modpie dynamically introspects the node tree's `Group Input` sockets and renders them directly inside an **Inputs** section on the modifier card:

- **Automatic Socket Introspection**: Detects all custom parameters exposed on the node group — including Floats, Integers, Distances, Angles, Booleans, Colors, Vectors, and Object/Collection pointers.
- **Full Compatibility Across Blender Versions**: Supports dynamic RNA input socket inspection seamlessly across Blender 4.3, 4.5 LTS, 5.0, 5.1, and 5.2+.
- **Real-Time Viewport Adjustments**: Drag sliders, type numeric values, or toggle booleans right in the viewport panel and see immediate procedural updates on your geometry.
- **Collapsible Section**: Keep your modifier card clean and compact by collapsing the **Inputs** group when you are focusing on the broader modifier stack.

---

## 2. Keep in File (Fake User Pinning)

In Blender, node groups that are not assigned to any active object lose their user count and are silently deleted when you save and close the file. 
- Modpie monitors your node groups and alerts you directly in the panel if a setup is one reload away from being discarded.
- Click **Keep in this file** to immediately assign a Blender Fake User (`F`), safely pinning your work into the `.blend` file.

---

## 3. Standalone `.blend` Export

Clicking **Export** on any Geometry Nodes modifier writes the active setup into its own dedicated `.blend` file:
- Creates a clean, standard Blender file with zero external dependencies.
- Perfect for publishing to an asset library, sharing with teammates, or archiving reusable procedural setups.

---

## 4. Direct `.blend` Import

Clicking **Import** lets you browse any external `.blend` file and link a Geometry Nodes setup straight onto the active modifier:
- Validates the target file first; files with no valid Geometry Nodes groups are cleanly declined rather than half-imported.
- Links the chosen node group and exposes its inputs directly inside the Modpie panel.
