---
sidebar_position: 22
title: Panel Behavior
description: How the Modpie panel automatically handles viewport focus during interactive dragging.
---

# Panel Auto-Hide on Interactive Modifiers

<div className="hero-badge-container">
  <span className="badge badge--secondary">Core: Focus Management</span>
</div>

To maximize your viewport workspace and eliminate visual distraction during precision dragging, Modpie employs smart panel focus management:

---

## Behavior During Interactive Modals

When you trigger an interactive modifier from the Modpie panel (via Quick Add, Add Modifier, Search, or clicking the drag edit icon):

1. **Panel Closes**:
   The panel immediately hides itself the instant interactive modal mode begins. This guarantees an unobstructed 3D viewport so you can see your mesh clearly from any angle.

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/modpie_panel_behave1.gif" alt="Panel Auto-Hide" />
  </div>
  <p className="media-caption">Figure: The panel closes instantly when you start a modifier.</p>
</div>


