---
sidebar_position: 18.5
title: Evaluation Profiler
description: Real-time viewport modifier latency benchmarking and visual load bars in Modpie Plus.
---

# Modpie Evaluation Profiler

<div className="hero-badge-container">
  <span className="badge badge--primary">Modpie Plus Exclusive</span>
</div>

When working on complex models in Blender, modifier stacks can get heavy fast. Stacking Subdivision Surfaces, Booleans, Remeshing, and Geometry Nodes can quickly cause your viewport to lag.

Normally, finding out which modifier is causing the slowdown means guessing—clicking visibility eyeballs on and off one by one until your framerate improves.

The **Evaluation Profiler** in **Modpie Plus** removes the guesswork. It measures the exact calculation time of every modifier in your stack and displays clean visual progress bars directly under your modifier list in the 3D viewport.

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
  <p className="media-caption">Figure: The Evaluation Profiler collapsed showing total computation time (top), and expanded showing per-modifier load bars (bottom).</p>
</div>

---

## What It Is For

The Evaluation Profiler answers one simple question: **"Which modifier is slowing down my viewport?"**

- **Instant Bottleneck Detection**: Points right to the modifier taking up the most processing time.
- **Framerate Budgeting**: Shows your total stack time against real-time viewport targets (such as **16.6 ms for 60 FPS** or **33.3 ms for 30 FPS**).
- **Out of the Way**: Stays neatly collapsed at the bottom of the stack until you need to investigate lag.
- **Works with Solo & Apply-Up**: Once you identify the culprit, you can easily solo it to check its effect or bake earlier modifiers into base geometry.

---

## How It Works

Modpie reads true hardware calculation times directly from Blender's evaluated dependency graph as your geometry updates.

### 1. Easy-to-Read Timing Units
Times automatically scale to the most practical unit:
- **Microseconds (`µs`)**: For nearly instantaneous modifiers (simple Mirror, transforms, vertex groups).
- **Milliseconds (`ms`)**: For everyday modeling modifiers (Bevel, Decimate, light Geometry Nodes).
- **Seconds (`s`)**: For very heavy operations (dense Voxel Remesh, multi-cut Booleans, high-level Subsurf).

### 2. Visual Load Bars
Modpie automatically finds the slowest modifier in your stack and sets it as the baseline:
- **100% Bar (Longest)**: The biggest performance bottleneck in your current stack.
- **Shorter Bars**: Modifiers that calculate quickly compared to the bottleneck.
- **Dimmed `0 µs`**: Modifiers currently hidden in the viewport or cached nodes that needed zero calculation time on the last update.

### 3. Forced Refresh
Clicking the **Refresh** button forces Blender to clear cached geometry and benchmark a fresh, complete calculation pass across the entire stack.

---

## How to Use It

### Enabling the Profiler
The profiler is kept hidden by default so it never clutters routine modeling.

You can turn it on in two ways:
1. **Toolstrip Button**: Click the timer icon in the top header toolstrip of the Modpie panel.
2. **Preferences**: Go to **Edit ▸ Preferences ▸ Add-ons ▸ Modpie ▸ Plus** and toggle **Show Evaluation Times**.

When enabled, an **Evaluation** bar docks at the bottom of your modifier stack.

### Reading the Breakdown
Click the disclosure arrow next to **Evaluation** to expand the list:
- **Header**: Shows total computation time across all active modifiers (for example, `18.4 ms`).
- **Refresh**: Re-benchmarks the entire modifier stack from scratch.
- **Rows**: Each row shows the modifier name, its relative load bar, and exact time in `µs`, `ms`, or `s`.

---

## Quick Optimization Tips

| What You Notice | What It Usually Means | What to Do in Modpie |
| :--- | :--- | :--- |
| **Total time > 16.6 ms or 33.3 ms** | Modifier calculations exceed the 60 FPS or 30 FPS real-time budget. | Expand the Evaluation box to see which modifier has the longest bar. |
| **Subsurf has a huge time bar** | High viewport subdivision level. | Lower the viewport level while keeping the render level high. Use **Solo** to check how much detail you really need in the 3D view. |
| **Boolean or Remesh is the slowest** | Recalculating complex topology on every frame update. | Use **Apply-Up-To-Here** to bake the boolean/remesh into base geometry, leaving non-destructive bevels and normal modifiers live above. |
| **Modifier shows `0 µs`** | Modifier is hidden or had no geometric effect on the last frame. | Check if the modifier is needed, or click **Refresh** if the scene was idle. |

---

## Compatibility

- **Blender 4.5, 5.0, 5.1, and 5.2+ LTS**
- Supports all modifier types: Generate, Deform, Modify, Physics, and Geometry Nodes.
- Available exclusively in **Modpie Plus**.
