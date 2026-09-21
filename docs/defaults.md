---
sidebar_position: 14
title: Set Default Values
description: Save your favorite modifier settings so they always start the way you like them.
---

# Set Default Values

<div className="hero-badge-container">
  <span className="badge badge--secondary">Core: Custom Defaults</span>
</div>

Tired of changing Bevel segments from `1` to `3`, or turning on Even Thickness every single time you add a Solidify modifier?

In default Blender, modifiers always start with generic factory settings that rarely match what you actually need. Modpie lets you save your own preferred settings with one click, so new modifiers always start ready to go.

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/remember_defaults3.gif" alt="Remember Modifier Defaults" />
  </div>
  <p className="media-caption">Figure: Saving your favorite modifier settings with one click.</p>
</div>

---

## How It Works

Setting your own defaults takes just a couple of seconds:

1. **Dial in your favorite settings**: Adjust the modifier until it looks the way you usually want it (for example, give a Bevel 3 segments and your preferred width).
2. **Click Remember as Default**: Click the small circle icon on that modifier's card in the Modpie panel.
3. **You are all set**: From now on, whenever you add that modifier—in your current project or any future Blender file—it will automatically start with your saved settings.

### Resetting Back to Factory Defaults
If you ever change your mind and want to go back to standard Blender defaults, hold <kbd>Shift</kbd> and click the default button again.

---

## Why Modifiers Start "Locked"

When you add a modifier in Modpie, you normally enter interactive mode where moving your mouse immediately drags the values around.

However, once you have saved your own custom defaults, you probably don't want your mouse to accidentally change those dialed-in numbers the moment the modifier appears. That is why Modpie starts modifiers with saved defaults in a **LOCKED** state.

Here is how it works:

- **Mouse movement is ignored**: When you add the modifier, you will see `[LOCKED]` on your screen. Moving your mouse will not change your saved values.
- **If you are happy with your saved defaults**: Simply left-click or press <kbd>Enter</kbd> to confirm. Your modifier is added with your exact settings, untouched.
- **If you want to tweak the values anyway**: Just tap the <kbd>Spacebar</kbd>. This unlocks the modifier and lets you drag your mouse normally to adjust the values.

---

:::tip Good to Know
If you prefer modifiers to always start unlocked so you can drag them right away, you can turn off **Lock Custom Defaults** in **Edit > Preferences > Add-ons > Modpie > Interactive**.
:::
