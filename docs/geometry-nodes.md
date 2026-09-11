---
sidebar_position: 20
title: Geometry Nodes
description: Manage node group lifecycles, fake users, and external library import/export in Modpie.
---

# Geometry Nodes Workflow

<div className="hero-badge-container">
  <span className="badge badge--secondary">Core: Node Group Lifecycle</span>
</div>

Modpie brings essential Geometry Nodes lifecycle tools directly onto the modifier card in the 3D viewport, removing the need to open the Node Editor or Asset Browser just to pin, export, or link node trees.

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/modpie_Geonodes1.gif" alt="Geometry Nodes in Modpie" />
  </div>
  <p className="media-caption">Figure: Geometry Nodes input sockets automatically exposed and adjustable directly within the Modpie viewport panel.</p>
</div>

---

## 1. Keep in File (Fake User Pinning)

In Blender, node groups that are not assigned to any active object lose their user count and are silently deleted when you save and close the file. 
- Modpie monitors your node groups and alerts you directly in the panel if a setup is one reload away from being discarded.
- Click **Keep in this file** to immediately assign a Blender Fake User (`F`), safely pinning your work into the `.blend` file.

---

## 2. Standalone `.blend` Export

Clicking **Export** on any Geometry Nodes modifier writes the active setup into its own dedicated `.blend` file:
- Creates a clean, standard Blender file with zero external dependencies.
- Perfect for publishing to an asset library, sharing with teammates, or archiving reusable procedural setups.

---

## 3. Direct `.blend` Import

Clicking **Import** lets you browse any external `.blend` file and link a Geometry Nodes setup straight onto the active modifier:
- Validates the target file first; files with no valid Geometry Nodes groups are cleanly declined rather than half-imported.
- Links the chosen node group and exposes its inputs directly inside the Modpie panel.
