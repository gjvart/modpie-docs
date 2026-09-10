---
sidebar_position: 13
title: Lattice
description: One-click generation of perfectly fitted 3x3x3 lattice deformation cages.
---

# Automatic Fitted Lattice Generation

<div className="hero-badge-container">
  <span className="badge badge--secondary">Core: One-Click Cage Generation</span>
</div>

Adding a Lattice modifier in default Blender requires multiple tedious steps:
1. Adding a separate Lattice object (`Shift + A ▸ Lattice`).
2. Scaling and positioning the lattice in Object or Edit mode to fit your mesh.
3. Adding the Lattice modifier to your mesh and manually linking the target object.

Modpie automates this entire procedure into a **single click**.

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/modpie_lattice1.gif" alt="Automatic Fitted Lattice Generation" />
  </div>
  <p className="media-caption">Figure 8: One-click Lattice modifier automatically builds and fits a 3×3×3 deformation cage.</p>
</div>

---

## How It Works

When you click **Lattice** in Modpie:
1. Modpie calculates the evaluated bounding box of the active object.
2. It generates a perfectly matched Lattice object oriented and scaled to enclose your mesh.
3. It creates a $3 \times 3 \times 3$ deformation resolution grid and links it to the modifier automatically.
4. Lattice resolution sliders (U / V / W) and interpolation modes are exposed directly in the Modpie modifier panel.
