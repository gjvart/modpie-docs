---
sidebar_position: 18.5
title: Evaluation Profiler
description: Real-time viewport modifier latency benchmarking and visual load bars in Modpie Plus.
---

# Modpie Evaluation Profiler

<div className="hero-badge-container">
  <span className="badge badge--primary">Modpie Plus Exclusive</span>
  <span className="badge badge--success">Performance Diagnostics</span>
</div>

When building complex models in Blender, modifier stacks can become computationally heavy fast. Stacking Subdivision Surfaces, Booleans, Remeshing, and Geometry Nodes can quickly drag down your viewport framerate.

Normally, finding out which modifier is causing the slowdown means guessing—toggling visibility eyeball icons on and off one by one while trying to feel if the viewport playback improves.

The **Evaluation Profiler** in **Modpie Plus** eliminates the guesswork. It benchmarks the exact calculation time of every modifier in your stack directly from Blender's evaluated dependency graph and displays clean, comparative load bars docked beneath your modifier list.

<div className="media-card">
  <div className="media-container" style={{flexDirection: 'column', gap: '16px', padding: '24px 16px', background: '#090c10'}}>
    <div style={{width: '100%', maxWidth: '786px'}}>
      <p style={{fontSize: '0.8rem', fontWeight: 600, color: 'var(--ifm-color-emphasis-600)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Collapsed Profiler Header</p>
      <img src="/modpie-docs/img/media/mp_evaluation1.png" alt="Evaluation Profiler Folded" style={{width: '100%', height: 'auto', borderRadius: '4px'}} />
    </div>
    <div style={{width: '100%', maxWidth: '786px'}}>
      <p style={{fontSize: '0.8rem', fontWeight: 600, color: 'var(--ifm-color-emphasis-600)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Unfolded Breakdown & Load Bars</p>
      <img src="/modpie-docs/img/media/mp_evaluation2.png" alt="Evaluation Profiler Unfolded" style={{width: '100%', height: 'auto', borderRadius: '4px'}} />
    </div>
  </div>
  <p className="media-caption">Figure: The Evaluation Profiler collapsed showing total computation time (top), and expanded showing per-modifier relative load bars (bottom).</p>
</div>

---

## What It Is For

The Evaluation Profiler answers one simple question: **"Which modifier is slowing down my viewport?"**

- **Pinpoint Bottlenecks Instantly**: Immediately reveals which modifier consumes the most processing time.
- **Budget Your Framerate**: Shows your total calculation time against real-time viewport targets (such as **16.6 ms for 60 FPS** or **33.3 ms for 30 FPS**).
- **Zero Distraction When Idle**: Sits neatly collapsed at the bottom of the modifier stack and never wastes screen space during routine modeling.
- **Pairs with Solo & Apply-Up**: Once you identify the slow modifier, you can isolate it with **[Solo Modifier](solo-profiler.md)** or bake earlier procedural steps into geometry using **[Apply Up To Here](solo-profiler.md)**.

### Understanding Your Framerate Budget
Viewport performance in 3D applications is measured in milliseconds per frame:
- **60 FPS** allows **16.6 ms** total frame budget.
- **30 FPS** allows **33.3 ms** total frame budget.

If a single Subdivision Surface or Boolean modifier takes **25 ms** to calculate every time your mesh updates, your viewport will instantly drop below 60 FPS. The profiler makes these exact numbers visible so you know whether your stack fits within your target framerate.

---

## How It Works

Modpie reads true hardware execution times directly from Blender's internal dependency graph as your geometry updates in the viewport.

### 1. Easy-to-Read Timing Units
Calculation times automatically scale to the most practical unit:
- **Microseconds (`µs`)**: For nearly instantaneous modifiers (such as simple Mirror, transforms, or vertex weight edits).
- **Milliseconds (`ms`)**: For everyday modeling modifiers (such as Bevel, Decimate, or lightweight Geometry Nodes).
- **Seconds (`s`)**: For computationally heavy operations (such as dense Voxel Remesh, multi-cut Booleans, or high-level Subsurf).

### 2. Relative Visual Load Bars
Modpie automatically benchmarks all active modifiers and sets the slowest modifier in your stack as the 100% baseline:
- **100% Bar (Longest)**: The primary performance bottleneck in your current stack.
- **Shorter Bars**: Modifiers that calculate quickly in comparison to the slowest one.
- **Dimmed `0 µs`**: Modifiers currently hidden in the viewport, or cached nodes that required zero recalculation on the last frame update.

### 3. Forced Re-Evaluation (Refresh)
Blender naturally caches modifier geometry when your scene is stationary. Clicking the **Refresh** button (`FILE_REFRESH`) forces Blender to clear cached geometry and benchmark a fresh, complete calculation pass across the entire stack.

---

## How to Use It

### Step 1: Enable the Profiler
The profiler is kept hidden by default so it never consumes background CPU cycles or clutters everyday modeling.

You can turn it on in two ways:
1. **Toolstrip Button**: Click the stopwatch icon (`⏱`) in the top header toolstrip of the Modpie panel.
2. **Preferences**: Go to **Edit ▸ Preferences ▸ Add-ons ▸ Modpie ▸ Plus** and toggle **Show Evaluation Times**.

When enabled, an **Evaluation** bar docks at the bottom of your modifier stack.

### Step 2: Unfold the Breakdown
Click the disclosure arrow next to **Evaluation** to expand the list:
- **Header**: Displays total computation time across all active modifiers on the active mesh (e.g. `Evaluation  18.4 ms`).
- **Refresh Icon**: Forces Blender to re-benchmark the entire stack from scratch.
- **Modifier Rows**: Each row displays the modifier name, its relative load bar, and exact calculation time in `µs`, `ms`, or `s`.

### Step 3: Spot the Bottleneck
Scan the rows for the longest load bar. Even in a stack of 10 modifiers, you can immediately see if 90% of your lag is caused by a single modifier.

### Step 4: Optimize or Bake
Once you know which modifier is lagging:
- Lower its viewport quality setting (for example, lower viewport levels on Subdivision Surface while keeping render levels high).
- Use **[Solo Modifier](solo-profiler.md)** to inspect if that modifier's visual contribution is worth the performance cost.
- Use **[Apply Up To Here](solo-profiler.md)** to bake heavy base modifiers (such as Booleans or Remeshing) into base geometry, leaving downstream modifiers live and procedural.

---

## Quick Optimization Tips

| What You Notice | What It Usually Means | What to Do in Modpie |
| :--- | :--- | :--- |
| **Total time > 16.6 ms or 33.3 ms** | Modifier calculations exceed your 60 FPS or 30 FPS viewport budget. | Expand the Evaluation box to identify which modifier has the longest bar. |
| **Subdivision Surface has a huge bar** | Viewport subdivision level is set too high for real-time interaction. | Lower the viewport level to 1 or 2 while keeping the render level high. Use **[Solo Modifier](solo-profiler.md)** to inspect the minimum level needed for modeling. |
| **Boolean or Remesh is the slowest** | Recalculating complex topology on every frame update. | Use **[Apply Up To Here](solo-profiler.md)** to bake the boolean/remesh into base geometry, keeping bevels and normal modifiers live. |
| **Modifier shows `0 µs`** | The modifier is hidden from the viewport or was cached without changes. | Check if the modifier is needed, or click the **Refresh** button if the viewport was idle. |

---

## Compatibility

- **Blender 4.5, 5.0, 5.1, and 5.2+ LTS**
- Supports all modifier categories: Generate, Deform, Modify, Physics, and Geometry Nodes.
- Available exclusively in **Modpie Plus**.
