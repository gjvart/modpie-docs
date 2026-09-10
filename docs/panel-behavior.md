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

1. **Instant Panel Closing**:  
   The panel immediately hides itself the instant interactive modal mode begins. This guarantees an unobstructed 3D viewport so you can see your mesh clearly from any angle.

2. **Clean Modal Exit**:  
   Once you confirm (<kbd>Enter</kbd> / <kbd>Space</kbd> / <kbd>LMB</kbd>) or cancel (<kbd>Esc</kbd> / <kbd>RMB</kbd>) the modal, the panel remains closed. Your modeling flow continues naturally without annoying duplicate or stacked popups re-opening over your viewport.

:::tip Re-opening the Panel
Whenever you need the stack panel again, just press <kbd>Ctrl + Alt + M</kbd> or open the <kbd>N</kbd> sidebar **Modifiers** tab.
:::
