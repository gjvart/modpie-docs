---
sidebar_position: 18.5
title: Evaluation Profiler
description: Real-time viewport modifier latency benchmarking, bottleneck pinpointing, and visual load bars in Modpie Plus.
---

# Modpie Evaluation Profiler

<div className="hero-badge-container">
  <span className="badge badge--primary">Modpie Plus Exclusive</span>
</div>

The **Evaluation Profiler** is a real-time viewport performance diagnostic tool built into **Modpie Plus**. It measures the exact computation latency of every modifier in your stack in milliseconds (ms) and microseconds (µs), rendering visual load bars directly below your modifier stack in the 3D viewport.

---

## What It Is For

In modern 3D workflows, procedural modifier stacks can quickly become heavy. When combining subdivision surfaces, complex booleans, voxel remeshing, bevels, arrays, and geometry nodes, your viewport framerate can suddenly drop. 

Traditionally, figuring out which modifier is causing the slowdown required tedious trial and error—manually turning each modifier on and off one by one.

The **Evaluation Profiler** eliminates all guesswork by immediately answering: **"Which modifier is costing me my framerate?"**

### Key Benefits
- **Instant Bottleneck Pinpointing**: Instantly spots which modifier consumes the highest percentage of evaluation time.
- **Framerate Budgeting**: Displays total stack latency in milliseconds against real-time viewport framerate targets (for example, **16.6 ms = 60 FPS** and **33.3 ms = 30 FPS**).
- **Zero Viewport Clutter**: Kept folded and unobtrusive until you need to diagnose a heavy scene.
- **Workflow Pairing**: Works hand-in-hand with **Solo Modifier** and **Apply-Up-To-Here** to isolate or freeze heavy processing stages.

---

## How It Works Under the Hood

### 1. Blender Dependency Graph Integration
When Blender updates your geometry, it evaluates the modifier stack in sequential order through its **Dependency Graph (`Depsgraph`)**. During this evaluation, Blender's internal engine benchmarks each modifier step and tracks the elapsed computation time.

:::note Evaluated Data Integration
Modpie retrieves timings directly from the *evaluated* object (`obj.evaluated_get(depsgraph)`). Standard scene objects in `bpy.data.objects` hold un-evaluated datablocks that do not store runtime timing statistics. By reading from the active evaluated dependency graph, Modpie reports true hardware execution latency.
:::

### 2. Adaptive Unit Formatting
Evaluation times are automatically formatted to the clearest and most readable unit of measurement:

| Timing Range | Display Format | Example | Typical Causes |
| :--- | :---: | :---: | :--- |
| **< 1.0 ms** | Microseconds (`µs`) | `120 µs` | Simple mirrors, vertex weight maps, light transforms |
| **1.0 ms – 999 ms** | Milliseconds (`ms`) | `14.2 ms` | Bevels, decimate modifiers, moderate geometry nodes |
| **≥ 1.0 s** | Seconds (`s`) | `2.45 s` | Heavy voxel remeshing, high-poly booleans, dense multi-level subsurf |

### 3. Proportional Visual Load Bars
Modpie automatically identifies the slowest modifier in your stack. Each modifier row draws an adaptive horizontal bar scaled relative to that bottleneck:

```text
Load Bar Ratio = (Modifier Time) / (Slowest Modifier Time)
```

- **Full Bar (Longest)**: Identifies the primary performance bottleneck in your stack.
- **Shorter Bars**: Modifiers that evaluate quickly relative to the slowest modifier.
- **Dimmed `0 µs`**: Modifiers disabled in the viewport or cached node networks that required zero compute time during the last frame update.

### 4. Forced Re-Evaluation
Clicking the **Re-evaluate** button flags the object's geometry data for a full refresh and triggers a view layer update. This forces Blender to bypass cached geometry and benchmark a complete, fresh modifier pipeline run.

---

## User Interface & Controls

### 1. Enabling the Profiler
The Evaluation Profiler starts folded and disabled by default so it never gets in the way during everyday modeling.

You can turn it on in two convenient ways:
1. **Header Toolstrip**: In the Modpie panel header toolstrip, click the **Timer** icon.
2. **Add-on Preferences**: Go to **Edit ▸ Preferences ▸ Add-ons ▸ Modpie ▸ Plus** and toggle **Show Evaluation Times**.

When enabled, the button highlights and the **Evaluation** box appears docked cleanly at the bottom of the modifier stack:

```text
+--------------------------------------------------------+
|  >  Evaluation  18.4 ms                                |
+--------------------------------------------------------+
```

### 2. Unfolding the Detailed Breakdown
Click the disclosure arrow on the **Evaluation** box header to reveal the detailed per-modifier breakdown:

```text
+--------------------------------------------------------+
|  v  Evaluation  18.4 ms                        Refresh |
|  |-- Bevel         [#                      ]   1.2 ms  |
|  |-- Subsurf       [#######################]  14.8 ms  |
|  \-- Decimate      [###                    ]   2.4 ms  |
+--------------------------------------------------------+
```

- **Header Readout**: Displays the total execution time across all active modifiers (e.g. `18.4 ms`).
- **Refresh Button**: Forces a clean recalculation across the entire modifier stack.
- **Modifier Row**: Shows each modifier's official icon and user-assigned name.
- **Load Bar & Value**: Displays the relative load ratio alongside the exact elapsed time formatted in `µs`, `ms`, or `s`.

---

## Diagnostic Scenarios & Solutions

| Profiler Observation | Root Cause | Recommended Modpie Action |
| :--- | :--- | :--- |
| **Total time > 33 ms** (Noticeable viewport lag) | Total modifier processing exceeds the 30 FPS real-time frame budget. | Expand the Evaluation box to inspect which modifier bar is at 100%. |
| **One modifier at 100% with high latency** (e.g. Subsurf at 50 ms) | Modifier has high subdivision levels or very dense geometry. | Use **Solo** mode to check its visual contribution; lower viewport levels while keeping render levels high. |
| **Boolean or Voxel Remesh is slowest** | Topology recalculation runs on every viewport update. | Use **Apply-Up-To-Here** to bake the boolean or remesh into permanent base geometry, leaving non-destructive bevels and normal modifiers active above. |
| **Modifier displays `0 µs`** | Modifier is hidden in the viewport or had no geometric impact. | Check whether the modifier is needed, or click **Re-evaluate** to ensure the scene was not idle. |

---

## Compatibility

- **Blender 4.5, 5.0, 5.1, and 5.2+ LTS**
- Fully supports all modifier categories: Generate, Deform, Modify, Physics, and Geometry Nodes.
- Available exclusively in **Modpie Plus**.
