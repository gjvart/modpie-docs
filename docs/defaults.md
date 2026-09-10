---
sidebar_position: 14
title: Set Default Values
description: Save your favorite modifier parameters permanently to defaults.json.
---

# Set Default Values

<div className="hero-badge-container">
  <span className="badge badge--secondary">Core: defaults.json</span>
</div>

Tired of adjusting Bevel segments from `1` to `3` or changing Solidify thickness every time you add a modifier?

Every modifier card in the Modpie panel includes a dedicated **Remember as Default** button.

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/remember_defaults3.gif" alt="Remember Modifier Defaults" />
  </div>
  <p className="media-caption">Figure: One-click persistence of custom modifier startup properties.</p>
</div>


---

## How It Works

- **One-Click Persistence**: Saves the current property configuration of the modifier directly into Blender's user configuration folder.
- **Global Application Across Projects**: Every time you add that modifier in any current or future Blender project, it automatically initializes with your saved parameters instead of Blender's generic defaults.
- **Clear Default**: <kbd>Shift</kbd> + Click the default button at any time to restore factory smart defaults.

---

## Modifier Locking on Saved Defaults

When you save custom default values for a modifier, you often want those values applied immediately without mouse movement inadvertently altering them:

- **Automatic `[LOCKED]` State**: When **Lock Custom Defaults** is enabled in Preferences (default: True), invoking the interactive modal for any modifier with saved defaults automatically opens in a **`[LOCKED]`** state.
- **Accidental Drag Protection**: The viewport HUD displays `[LOCKED]`. Moving the mouse will not alter your saved parameters.
- **Unlock or Confirm**: Tap <kbd>Space</kbd> to unlock the modal and begin live mouse dragging, or press <kbd>Enter</kbd> / Left-Click to confirm the saved default values immediately.
- **Visual Panel Indicator**: The modifier card in the Modpie viewport panel displays a depressed **LOCKED** icon and helpful tooltip to clearly indicate that custom defaults are stored and protected.
