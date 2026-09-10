---
sidebar_position: 10
title: Boolean
description: Smart cutter target prompt and A key operation cycling for the Boolean modifier.
---

# Boolean Cutter Prompt & Cycling

<div className="hero-badge-container">
  <span className="badge badge--secondary">Core: Smart Target & Cycling</span>
</div>

In default Blender, adding a Boolean modifier requires manually picking the cutter object from an outliner dropdown. Modpie makes Boolean operations fast and visual.

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/modpie_boolean1.gif" alt="Boolean Cutter Target Selector & Operation Cycling" />
  </div>
  <p className="media-caption">Figure 5: Instant cutter target selector popup and real-time operation cycling.</p>
</div>

---

## 1. Smart Target Object Prompt

- **With Another Object Selected**: If you have two objects selected (e.g. a base mesh and a cutter), adding a Boolean modifier automatically assigns the other object as the cutter and applies the operation immediately.
- **With Only One Object Selected**: Starting an interactive Boolean with no other object selected opens a **search popup listing candidate meshes in the scene**. Selecting an object immediately links it as the cutter and enters interactive mode.

---

## 2. Operation Cycling (<kbd>A</kbd> Key)

During the interactive modal, you can cycle between Boolean operations with a single keypress:

- Press <kbd>A</kbd> to cycle operations: **Difference ➔ Intersect ➔ Union ➔ Difference**
- Jump directly to any operation:
  - <kbd>D</kbd>: **Difference**
  - <kbd>U</kbd>: **Union**
  - <kbd>I</kbd>: **Intersect**
- The viewport readout displays `[D U I A]` so you always know the current state.

---

## 3. Solver & Option Toggles

- <kbd>S</kbd>: Toggle between **Fast** and **Exact** solvers.
- <kbd>H</kbd>: Toggle **Hole Tolerant** mode.
