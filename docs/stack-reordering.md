---
sidebar_position: 8
title: Stack Reordering
description: Move modifiers up and down the stack list live during interactive viewport dragging without interrupting your adjustment session.
---

# Interactive Stack Reordering

<div className="hero-badge-container">
  <span className="badge badge--secondary">Core: Live Stack Reordering</span>
</div>

In default Blender and earlier workflows, changing a modifier's evaluation position required stopping your work, opening the Properties panel, and dragging cards manually.

With Modpie's **Interactive Stack Reordering**, you can move the modifier being adjusted **up or down the stack list on the fly** without interrupting your live viewport adjustment session.

```
                    ┌────────────────────────┐
                    │      Bevel (1/3)       │
                    ├────────────────────────┤
 [Alt + Wheel Up]   │  Mirror (2/3) [Active] │  ▲ Moves UP in stack
                    ├────────────────────────┤
 [Alt + Wheel Down] │    Subdivision (3/3)   │  ▼ Moves DOWN in stack
                    └────────────────────────┘
```

---

## 1. How It Works

1. **Enter Interactive Mode** by adding a modifier from the radial pie menu (<kbd>Alt</kbd> + <kbd>M</kbd>), the Quick Add strip, or by clicking the adjust icon (`⟷`) on any existing modifier in the panel.
2. **Move Up the Stack**: Hold <kbd>Alt</kbd> and scroll **Wheel Up** (or press <kbd>Alt</kbd> + <kbd>Up Arrow</kbd>).
   - The modifier immediately shifts upward toward the top of the stack (earlier evaluation / closer to index 0).
3. **Move Down the Stack**: Hold <kbd>Alt</kbd> and scroll **Wheel Down** (or press <kbd>Alt</kbd> + <kbd>Down Arrow</kbd>).
   - The modifier shifts downward toward the bottom of the stack (later evaluation / closer to the end of the stack).
4. **Multi-Object Synchronization**: If multiple objects are selected, all matching modifiers across the entire selection reorder together in lockstep.
5. **Safe Cancellation**: If you cancel the modal with <kbd>Esc</kbd> or <kbd>Right-Click</kbd>, any stack reordering made during the drag session is safely reverted back to the exact initial order, preventing accidental changes.

---

## 2. Visual & HUD Feedback

Stack reordering provides clear, non-intrusive on-screen feedback so you always know where the modifier sits in the evaluation chain:

- **Live Position Badge**: Each scroll step flashes an animated HUD card directly in the 3D viewport indicating the direction and new 1-indexed stack position:
  - `Stack ▲: Mirror (1/3)`
  - `Stack ▼: Mirror (2/3)`
- **Boundary Alerts**: Reaching the top or bottom of the stack triggers a non-destructive HUD alert without breaking or wrapping the modal session:
  - `Top of Stack: Mirror (1/3)`
  - `Bottom of Stack: Mirror (3/3)`
- **HUD & Status Bar Reminder**: Whenever an object has more than one modifier in its stack, a dynamic hint appears in both the viewport HUD and Blender's bottom status bar:
  - `Alt+Wheel → Move in stack`

---

## 3. Preferences & Customization

You can customize stack reordering behavior in **Edit ▸ Preferences ▸ Add-ons ▸ Modpie ▸ Interactive**:

Under the **Stack Reordering (Interactive Mode)** card:
- **Reorder Shortcut**: Choose between:
  - `Alt + Scroll Wheel` *(Default)*
  - `Shift + Scroll Wheel`
  - `Ctrl + Alt + Scroll Wheel`
  - `Disabled`
- **Invert Scroll Direction**: Toggle this option if you prefer Wheel Down to move up or Wheel Up to move down.

---

## 4. Summary of Controls

| Shortcut | Context | Action |
| :--- | :--- | :--- |
| <kbd>Alt</kbd> + <kbd>Wheel Up</kbd> | Interactive Mode | Move modifier **UP** in stack (towards index 0) |
| <kbd>Alt</kbd> + <kbd>Wheel Down</kbd> | Interactive Mode | Move modifier **DOWN** in stack (towards end) |
| <kbd>Alt</kbd> + <kbd>Up Arrow</kbd> | Interactive Mode | Move modifier **UP** in stack |
| <kbd>Alt</kbd> + <kbd>Down Arrow</kbd> | Interactive Mode | Move modifier **DOWN** in stack |
| <kbd>Esc</kbd> / <kbd>RMB</kbd> | Interactive Mode | Cancel adjustment & revert stack reordering |

---

## 5. Feature Availability

| Feature | Modpie (Free) | Modpie Plus |
| :--- | :---: | :---: |
| **Interactive Stack Reordering** | ✔ | ✔ |
| **Multi-Object Reordering in Lockstep** | ✔ | ✔ |
| **Viewport HUD Position Badges & Alerts** | ✔ | ✔ |
| **Revert Order on Cancel (<kbd>Esc</kbd>)** | ✔ | ✔ |
| **Custom Shortcut & Invert Direction in Preferences** | ✔ | ✔ |

:::tip Standard Core Workflow
Interactive stack reordering is built into the core engine of both **Modpie Free** and **Modpie Plus**. It requires zero additional setup and works immediately across all supported modifiers.
:::
