---
sidebar_position: 15
title: Slot Customizer
description: Configure radial pie slots, custom arrival values, and drag switches directly inside the 3D viewport.
---

# Slot Customizer & 3×3 Grid

<div className="hero-badge-container">
  <span className="badge badge--primary">Modpie Plus Exclusive</span>
  <span className="badge badge--success">In-Viewport & Panel Workflows</span>
</div>

In the free version of Modpie, pie slots are configured through Blender Preferences with a global toggle for interactive dragging. 

**Modpie Plus** opens slot customization directly inside the 3D viewport, allowing you to configure every direction with bespoke behaviors, custom labels, per-slot drag toggles, and exact arrival values.

---

## 1. Two Ways to Customize Slots

Modpie Plus provides two fast, interactive workflows to customize your radial slots without digging through Blender's Add-on Preferences:

### A. Customizing via the Radial Pie Menu

You can assign any radial pie direction to open the **Slot Editor**, or launch it via the in-viewport menu (*Object ▸ Modifiers ▸ Customize Slots*):

1. Summon the pie menu (<kbd>Alt + M</kbd>) and trigger the slot editor.
2. An interactive **3×3 Compass Grid** spawns directly under your cursor in the 3D viewport.
3. Click any of the 8 compass directions (W, NW, N, NE, E, SE, S, SW) to open its dedicated property editor.
4. Select the target modifier, customize its display label, toggle per-slot dragging, and enter exact starting arrival values.

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/modpie_pie_customize.gif" alt="In-Viewport Slot Customizer via Pie Menu" />
  </div>
  <p className="media-caption">Figure 9: In-viewport 3×3 Compass Grid editor invoked directly from the radial pie menu.</p>
</div>

---

### B. Customizing via the Modpie Viewport Panel

You can also customize all 8 slots directly inside the Modpie Viewport Panel:

1. Look at the top right of the **Quick Add** strip and click the **Customize** toggle.
2. The strip smoothly unfolds into an aligned list of all 8 compass directions.
3. View each slot's assigned modifier, custom label, duplicate count (`×n`), interactive drag status (`⟷`), and configured arrival values (e.g. *Segments 3, Width 0.02m*).
4. Click the pencil icon (<kbd>✎</kbd>) next to any slot to edit its parameters directly in the panel.
5. Click **Done** to collapse the list back into the compact Quick Add icon strip.

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/modpie_panel_customization.gif" alt="Customizing Slots via the Modpie Panel" />
  </div>
  <p className="media-caption">Figure 10: Unfolding and customizing pie slots directly within the Modpie Viewport Panel.</p>
</div>

---

## 2. What a Plus Slot Carries

Clicking any direction opens an editor where each slot can be configured with:

1. **Target Modifier or Tool**: Pick any modifier available in your Blender release, with Blender's official description shown beneath it. Alternatively, assign the slot to Presets, Stacks, Search, Settings, or the Panel.
2. **Custom Display Label**: Rename the slot when "Bevel" or "Subdivision" isn't what your studio calls it.
3. **Per-Slot Drag Switch (`⟷`)**: Choose whether clicking this specific direction hands you the mouse for modal dragging or adds the modifier instantly at preset values.
4. **Custom Arrival Values**: Pre-configure exact parameters (e.g. *Bevel with Segments 3, Width 0.02m*, or *Solidify with Thickness 0.05m and Even Thickness enabled*). One radial flick gives you exactly the modifier you wanted, every time, with zero dragging required.

---

## 3. Graceful Compatibility

Your customized slot configurations are safely stored in Blender's user preferences. If you ever run Modpie Free, the core build simply ignores the extra data without throwing errors or breaking your setup. Reinstalling Plus immediately restores your pie exactly as you left it.
