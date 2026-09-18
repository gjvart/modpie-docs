---
sidebar_position: 8
title: Inline Renaming
description: Rename modifiers on the fly directly inside viewport panel headers without switching to Blender's Properties editor.
---

# Inline Modifier Renaming

<div className="hero-badge-container">
  <span className="badge badge--secondary">Core: Viewport Renaming</span>
</div>

Renaming modifiers in default Blender requires leaving the 3D viewport, navigating over to the Properties editor, expanding the modifier, and clicking its text field.

Modpie provides **instant inline modifier renaming** directly inside the Viewport Modifier Panel—functional on both collapsed and expanded modifier cards.

---

## 1. Renaming on Closed Modifiers

When modifiers are collapsed to conserve screen space, you can rename them without expanding the card:

1. Click the gear icon (<kbd>⚙</kbd>) on any collapsed modifier row.
2. Click the pencil icon (**`✏ Rename`**).
3. A popup prompt appears directly beneath your cursor with the modifier's current name pre-filled.
4. Type your desired name and press <kbd>Enter</kbd> (or click **OK**).
5. The modifier header updates instantly, flashing a non-intrusive confirmation toast (`'OldName' → 'NewName'`).
6. The gear menu remains open so you can continue organizing your stack without interruption.

---

## 2. Renaming on Open Modifiers

When working with expanded modifier cards:
- A dedicated pencil icon (<kbd>✏</kbd>) is permanently located in the card's top action toolbar.
- It sits conveniently alongside the **Apply**, **Duplicate**, and **Copy to Selected** action icons.
- Clicking the pencil opens the same quick rename dialog.

---

## 3. Undo Integration & Safety

Modifier renaming is fully integrated with Blender's native undo system:
- Pressing **<kbd>Ctrl</kbd> + <kbd>Z</kbd>** immediately restores the previous modifier name.
- Renaming preserves all linked properties, presets, and dependencies intact without breaking evaluation or driver paths.

---

## 4. Feature Availability

| Feature | Modpie (Free) | Modpie Plus |
| :--- | :---: | :---: |
| **Inline Renaming on Closed Modifiers (Gear `⚙`)** | ✔ | ✔ |
| **Inline Renaming on Open Modifiers (Toolbar `✏`)** | ✔ | ✔ |
| **Name Pre-filled Prompt with Overlay Notice** | ✔ | ✔ |
| **Full Undo Integration (<kbd>Ctrl + Z</kbd>)** | ✔ | ✔ |

:::tip Standard Core Workflow
Inline modifier renaming is available in both **Modpie Free** and **Modpie Plus** as part of the core Viewport Modifier Panel.
:::
