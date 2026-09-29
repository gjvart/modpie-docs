---
sidebar_position: 18
title: Solo Modifier & Apply Up To Here
sidebar_label: Solo & Apply-Up
description: Temporarily isolate any modifier to inspect its geometric effect with 1-click restore, or bake modifier stacks down with Apply-Up-To-Here.
---

# Solo Modifier & Apply Up To Here

<div className="hero-badge-container">
  <span className="badge badge--primary">Modpie Plus Exclusive</span>
  <span className="badge badge--success">Non-Destructive Workflow</span>
</div>

When building detailed 3D models in Blender, modifier stacks can grow deep very quickly. Stacking 8, 10, or more modifiers is common, but it brings two everyday challenges:

1. **Troubleshooting & Inspection**: You want to see exactly what one modifier (such as a subtle Bevel, Lattice deform, or Solidify) is doing to your geometry. But turning off every other modifier one by one is tedious—and when you are done, you have to remember which modifiers were supposed to stay turned off.
2. **Selective Freezing & Baking**: You want to lock in your heavy base geometry (such as Booleans, Remeshing, or Welds) into permanent vertices, but you want to keep finishing modifiers (such as Mirror, Bevel, or Subdivision Surface) live and procedural. Standard Blender only lets you apply modifiers one by one starting strictly from the top.

**Modpie Plus** solves both challenges right inside the modifier panel with **Solo Modifier** and **Apply Up To Here**.

---

## 1. Solo Modifier (Viewport Isolation)

Clicking the **Solo** button (`RESTRICT_VIEW_OFF` / Eye icon) on any modifier card immediately hides all other modifiers on the mesh, isolating the active modifier's effect in the 3D viewport.

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/mp_soloMod.gif" alt="Solo Modifier Viewport Isolation" />
  </div>
  <p className="media-caption">Figure: Isolating a modifier non-destructively with 1-click Solo and automatic state restoration.</p>
</div>

### Smart State-Preserving Restoration
In vanilla Blender, manually toggling eyeball icons is risky because you can easily forget which modifiers were already hidden before you started. 

Modpie records the exact visibility state of every modifier in an internal property on the object (`modpie_solo`). When you turn Solo off:
- Modifiers that were visible before soloing are turned back on.
- Modifiers that were **already hidden** before soloing **stay hidden**.
- You never have to manually restore or rebuild your stack visibility.

### Safe Direct Switching
Want to inspect Modifier B right after inspecting Modifier A? You don't have to exit Solo first. 

Simply click the **Solo** button on Modifier B. Modpie automatically restores the original stack visibility behind the scenes before isolating Modifier B. Your true stack state is never overwritten or lost.

### Survives File Saves & Reloads
Because your original stack state is stored directly on the object inside the `.blend` file, saving and reopening your file while a modifier is soloed will never corrupt your visibility settings. When you reopen the project, you can un-solo just as smoothly as if you never closed Blender.

### One-Click Clear Solo in the Stack Header
Whenever any modifier is soloed, Modpie displays an active **Clear Solo** button (`LOOP_BACK` revert icon) in the top toolstrip of the modifier stack. Clicking it instantly exits solo mode and restores all modifiers back to their original visibility with a single click.

### How to Use Solo Modifier
1. Open the Modpie panel (<kbd>Ctrl + Alt + M</kbd> or press <kbd>N</kbd> in the 3D Viewport).
2. Find the modifier you want to isolate.
3. Click the **Solo** icon (`RESTRICT_VIEW_OFF`) on that modifier's toolstrip.
4. Inspect or tweak your modifier with zero visual distraction from the rest of the stack.
5. Click the **Solo** icon again (or click **Clear Solo** in the stack header) to return your stack to its exact previous state.

---

## 2. Apply Up To Here (Selective Stack Baking)

When optimizing complex assets or preparing models for texturing, you often want to freeze foundational edits into real geometry while leaving late-stage modifiers procedural.

In standard Blender, this is cumbersome: you have to manually click Apply on each individual modifier card from top to bottom. If your boolean is 5 modifiers down, you have to apply all 5 one by one and be careful not to apply modifier 6.

**Apply Up To Here** (`SORT_ASC` icon) lets you bake every modifier from the very top of your stack down through your chosen modifier with a single click, keeping all modifiers below it live and non-destructive.

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/mp_apply-up-to-here.gif" alt="Apply Up To Here Selective Stack Baking" />
  </div>
  <p className="media-caption">Figure: Selectively baking modifiers down through the target while keeping subsequent modifiers live and procedural.</p>
</div>

### Interactive Confirmation Dialog
Clicking **Apply Up To Here** opens an interactive confirmation dialog directly inside your viewport:
- **Modifier Count**: Clearly displays how many modifiers will be baked (for example, `Applies 3 of 6 modifiers`).
- **Visual Checklist**: Shows the full modifier stack with active dots marking the modifiers that will be applied into vertices, and dimmed labels for the modifiers that will remain live.
- **"Include This One" Toggle**: Lets you choose whether the modifier you clicked is included in the bake or left at the top of the remaining live stack.

### Built-in Safety Protections
- **Automatic Un-Solo**: If your object is currently in Solo mode, Modpie automatically restores the stack before applying. This guarantees you never accidentally bake a mesh while modifiers are hidden.
- **Clean Failure Halting**: If Blender fails to apply a modifier (for example, if a mesh has linked multi-user data or shape keys), Modpie immediately stops and displays a clear warning. It will not continue or leave your mesh in a corrupted state.
- **Object Mode Guard**: Modpie checks that you are in Object Mode before executing, preventing Blender crashes or failed operations during Edit Mode.

### How to Use Apply Up To Here
1. Locate the modifier in your stack where you want to lock in your base geometry.
2. Click the **Apply Up To Here** icon (`SORT_ASC`) on that modifier's card.
3. In the confirmation dialog, review the list of modifiers to be applied.
4. Toggle **Include This One** if you want to include or exclude the target modifier itself.
5. Click **OK** to execute. The upper modifiers are baked into permanent geometry, and the lower modifiers continue working non-destructively.

---

## Workflow Comparison

| Workflow Step | Standard Blender | Modpie Plus |
| :--- | :--- | :--- |
| **Isolating one modifier** | Manually toggle every other modifier eyeball off one by one. | **1-Click Solo**: Instantly hides all other modifiers. |
| **Restoring the stack** | Manually re-enable eyeballs; easy to forget which were originally hidden. | **State-Preserving Restore**: Returns every modifier to its exact prior visibility. |
| **Comparing two modifiers** | Turn everything back on, then turn off everything except the second modifier. | **Direct Switch**: Click Solo on the second modifier with seamless automatic restoration. |
| **Saving while isolated** | Risk of forgetting modifiers were hidden when reopening the file. | **Persisted in File**: Saved on the object custom property (`modpie_solo`). |
| **Baking early modifiers** | Click Apply one-by-one on each modifier card from top down. | **1-Click Apply Up To Here**: Bakes from the top through your chosen modifier in one step. |
| **Bake safety check** | None; applying while modifiers are hidden can permanently break geometry. | **Automatic Safety**: Un-solos first and halts on any apply errors. |

---

:::tip Looking to Benchmark Viewport Latency?
If you are inspecting modifiers because your viewport is stuttering and you want to know which modifier is causing the lag, visit the dedicated **[Evaluation Profiler](evaluation.md)** guide. Modpie Plus includes real-time millisecond latency tracking and visual load bars to pinpoint bottlenecks instantly.
:::
