---
sidebar_position: 6
title: Modifier Panel
description: Full modifier stack popup and sidebar panel in the 3D viewport.
---

# The Viewport Modifier Panel

<div className="hero-badge-container">
  <span className="badge badge--secondary">Core: Full Stack Panel</span>
  <span className="badge badge--primary">Plus: Presets, Stacks & Sync Tools</span>
</div>

Modpie frees you from having to keep Blender's Properties editor open. Pressing <kbd>Ctrl + Alt + M</kbd> opens the complete modifier stack directly under your cursor, or you can access the permanent **Modifiers** tab in the 3D Viewport sidebar (<kbd>N</kbd> key).

## Free vs. Plus Panel Comparison

Modpie is available in two tiers: **Modpie Free (Standard)** and **Modpie Plus**. While both editions share the core viewport modifier panel experience—providing full stack management, drag adjustments, and multi-object batch operations directly in the 3D viewport—**Modpie Plus** integrates an extensive power toolbar and non-destructive diagnostic suite directly into the panel layout.

<div className="comparison-grid">
  <div className="comparison-card">
    <div className="comparison-header">
      <span className="comparison-title">Modpie Free (Standard)</span>
      <span className="badge badge--secondary">Core Panel</span>
    </div>
    <div className="media-container">
      <img src="/modpie-docs/img/media/ModpieP_Stand.png" alt="Modpie Free Standard Panel" />
    </div>
    <div className="comparison-footer">
      <strong>Core Experience:</strong> Streamlined modifier stack with Quick Add strip, interactive HUD modal dragging, collapsed apply (<kbd>✓</kbd>), and essential batch operations.
    </div>
  </div>

  <div className="comparison-card plus">
    <div className="comparison-header">
      <span className="comparison-title">Modpie Plus</span>
      <span className="badge badge--primary">Plus Variant</span>
    </div>
    <div className="media-container">
      <img src="/modpie-docs/img/media/Modpie_P_Plus.png" alt="Modpie Plus Panel" />
    </div>
    <div className="comparison-footer">
      <strong>Pipeline Powerhouse:</strong> Adds the <strong>Plus Bar</strong> (Presets, Stacks, Sync), in-viewport <strong>Customize</strong> toggle, stack template saving, and modifier card diagnostic tools (Solo, Profiler, Apply Up, Live Link).
    </div>
  </div>
</div>

### Key Differences at a Glance

Comparing the two panels reveals four major structural additions in Modpie Plus:

1. **Quick Add Customizer (`▶ Customize`)**:
   - **Free**: Displays the 5-icon Quick Add strip for fast 1-click addition of your primary pie modifiers.
   - **Plus**: Adds the dedicated **`▶ Customize`** button beside the Quick Add header. Clicking it unfolds the 8-direction slot customizer right inside the 3D viewport, allowing you to edit custom labels, arrival values, and slot assignments without opening Blender Preferences.

2. **The Plus Command Bar (`Presets`, `Stacks`, `Sync`)**:
   - **Free**: No intermediate toolbar; transitions directly from *Add Modifier* into stack batch operations for a minimal vertical footprint.
   - **Plus**: Inserts a full-width workflow toolbar between *Add Modifier* and the batch controls:
     - **`🎛 Presets ▾`**: Browse starred Favourites, the full saved preset library, save active modifier configurations in one click, search presets interactively, and use dynamic clipboard pasting (`Paste Values` / `Paste to Selected`).
     - **`📋 Stacks ▾`**: Save multi-modifier recipes as reusable templates and deploy complete stacks to meshes in *Append* or *Replace* mode.
     - **`⇄ Sync ▾`**: Manage continuous multi-object **Live Linking**, one-shot copying, the visual **Compare Stacks** diff report, and unlinking.

3. **Batch Toolbar & Stack Template Shortcut**:
   - **Free**: Features standard stack-wide controls: Expand/Collapse All (`⛶`), Viewport Visibility (`🖥`), Render Visibility (`📷`), Apply All (`✓ Apply All`), and Delete All (`🗑`).
   - **Plus**: Adds a 1-click **Save Stack Template (<kbd>🎛⁺</kbd>)** shortcut directly beside the camera visibility toggle for instant pipeline capture.

4. **Modifier Card Power & Diagnostic Tools**:
   - **Free**: Includes standard card utilities: interactive modal dragging (`◫`), collapsed apply (`✓`), duplicate (`⧉`), copy settings (`📋`), stack position arrows (<kbd>▲</kbd> / <kbd>▼</kbd>), default indicator (`●`), and **Pin to Last** (`📌`).
   - **Plus**: Greatly expands the card action row with advanced workflow and diagnostic controls:
     - **Remember Default (`●`)**: Lock in the modifier's current dialed-in settings as permanent defaults.
     - **Lock / Frozen State (`🔒`)**: Protect modifier parameters from accidental modifications or bulk overwrites.
     - **Solo Modifier (`🖥`)**: Temporarily isolate the modifier by disabling all other modifiers on the mesh (with automatic state restore on un-solo). Also interfaces with the **Evaluation Profiler** to measure real-time latency in milliseconds.
     - **Apply Up To Here (`↓`)**: Non-destructively bake the modifier stack from the top down through the current modifier while keeping all subsequent modifiers active.
     - **One-Click Sync (`↗`)**: Instantly copy this modifier's exact parameters across all other selected objects.
     - **Live Link Group Status (`🔗`)**: Displays active linked group membership count (e.g. `🔗 3`) with 1-click linking/unlinking.

### Panel Feature Matrix

| Panel Feature | Modpie Free | Modpie Plus | Description |
| :--- | :---: | :---: | :--- |
| **Viewport Modifier Stack** | ✔ | ✔ | Complete modifier stack via <kbd>Ctrl + Alt + M</kbd> or sidebar <kbd>N</kbd> |
| **Quick Add Icon Strip** | ✔ | ✔ | 1-click addition of primary pie modifiers |
| **In-Viewport Slot Customizer** | ✕ | <span className="badge badge--primary">✔ Plus</span> | **`▶ Customize`** button unfolds 8-way slot editor and arrival values |
| **Plus Toolbar (`Presets` / `Stacks` / `Sync`)** | ✕ | <span className="badge badge--primary">✔ Plus</span> | Dedicated high-speed command bar beneath Add Modifier |
| **Preset Library & Clipboard Paste** | ✕ | <span className="badge badge--primary">✔ Plus</span> | Save, search, favorite, and clipboard-paste single modifier recipes |
| **Multi-Modifier Stack Templates** | ✕ | <span className="badge badge--primary">✔ Plus</span> | Save and deploy entire modifier stacks in Append/Replace mode |
| **Continuous Live Linking** | ✕ | <span className="badge badge--primary">✔ Plus</span> | Multi-object bidirectional synchronization via depsgraph handler |
| **One-Shot Copy & Stack Push** | ✕ | <span className="badge badge--primary">✔ Plus</span> | Broadcast active modifier or entire stack across selected objects |
| **Live Stack Diff Visualizer** | ✕ | <span className="badge badge--primary">✔ Plus</span> | Side-by-side comparison of modifier stacks across selected objects |
| **Card: Pin to Last** | ✔ | ✔ | Locks modifier to the bottom of the stack; new additions insert above it |
| **Card: Solo Modifier** | ✕ | <span className="badge badge--primary">✔ Plus</span> | Isolate modifier effect non-destructively with 1-click restore |
| **Card: Modifier Profiler** | ✕ | <span className="badge badge--primary">✔ Plus</span> | Real-time evaluation latency tracking in milliseconds (ms) |
| **Card: Apply-Up-To-Here** | ✕ | <span className="badge badge--primary">✔ Plus</span> | Bake stack down to active modifier while preserving lower stack |
| **Card: One-Click Sync to Selected** | ✕ | <span className="badge badge--primary">✔ Plus</span> | Instantly push card parameters to all other selected meshes |
| **Card: Live Link Group Status** | ✕ | <span className="badge badge--primary">✔ Plus</span> | Displays group count and toggles live linking membership |
| **Card: Collapsed Apply (<kbd>✓</kbd>)** | ✔ | ✔ | Apply modifiers directly from collapsed headers without expanding |
| **Batch Apply All & Delete All** | ✔ | ✔ | Multi-object batch application and removal across selected objects |
| **Interactive Modal HUD Dragging** | ✔ | ✔ | Real-time viewport dragging with numerical overlay |

---

## 1. Quick Add Strip & Customize Toggle

At the top of the panel sits the **Quick Add** strip:
- Displays your pie modifiers as a unified icon bar.
- Buttons stay depressed when the active object already carries that modifier.
- Hovering any icon displays its name and Blender's official description.

### The Customize Toggle <span className="badge badge--primary">Plus</span>
Clicking **Customize** at the top right unfolds the Quick Add strip into an aligned 8-direction list showing:
- Direction names and custom labels
- Duplicate counts (`×n`)
- Interactive drag symbols (`⟷`)
- Configured arrival values (e.g. *Segments 3, Width 0.02m*)
- A pencil icon (<kbd>✎</kbd>) to edit any slot directly inside the viewport.

<div className="media-card">
  <div className="media-container">
    <img src="/modpie-docs/img/media/modpie_panel_customize.gif" alt="Panel Customize Toggle" />
  </div>
  <p className="media-caption">Figure: Unfolding the 8-direction slot customizer directly within the Modpie Viewport Panel.</p>
</div>

---

## 2. Header & Modifier Controls

Every modifier card in the panel includes standard and enhanced controls:

- **Pin to Last (<kbd>📌</kbd>)**:
  - Locks the modifier at the very bottom (end) of the modifier stack.
  - When enabled (highlighted blue pushpin `📌`), any newly added modifiers—whether created via the radial pie menu, the Quick Add strip, or Blender's Add Modifier menu—are automatically inserted **above** the pinned modifier rather than below it.
  - Guarantees pipeline integrity for terminal modifiers like **Subdivision Surface**, **Bevel**, **Weighted Normal**, or **Triangulate** that must always evaluate last to preserve silhouette, non-destructive shading, or topology.
  - Clicking the pushpin icon again unpins the modifier, allowing it to be freely repositioned or having subsequent modifiers appended after it.
- **Closed Modifier Management**: Collapsed cards retain all 4 visibility toggles (Cage, Edit Mode, Viewport, Render), quick gear tools (<kbd>▲</kbd> / <kbd>▼</kbd>), dynamic pin badge, and separated Apply/Delete buttons (see [Closed Modifier Management](modifier-management.md)).
- **Inline Modifier Renaming (<kbd>✏</kbd>)**: Click the pencil icon in the expanded card toolbar or gear menu (<kbd>⚙</kbd>) on collapsed cards to rename modifiers instantly without leaving the viewport (see [Inline Modifier Renaming](inline-renaming.md)).
- **Collapsed Apply (<kbd>✓</kbd>)**: When a modifier card is collapsed, a dedicated **Apply** (<kbd>✓</kbd>) button appears directly on its header beside the delete (<kbd>✕</kbd>) icon. Apply modifiers instantly without expanding or diving into submenus.
- **Sibling Jumpers (<kbd>◀</kbd> `1/2` <kbd>▶</kbd>)**: When multiple modifiers of the same type exist, position badges (e.g. `2/3`) and navigation arrows let you jump between them.
- **Interactive Drag Button**: Re-opens interactive modal dragging for that modifier. In popup mode, the panel automatically closes to give you an unobstructed 3D view and re-opens when you confirm or cancel.
- **Visibility Switches**: Viewport, render, edit-mode, and on-cage toggles match Blender's native RNA icons.

---

## 3. Dedicated Contextual Buttons

Modpie adds native buttons that Blender normally hides in other editors:

- **Displace, Warp & Wave**: Custom **New Texture** button with **Open Image...** to load an image file straight into a new texture, plus a dynamic list of procedural textures available in your Blender release.
- **Mesh Deform, Surface Deform & Corrective Smooth**: Includes native **Bind / Unbind** buttons directly on the panel header.
- **Lattice**: Dedicated <kbd>+</kbd> button that automatically calculates bounding boxes, builds a fitted $3 \times 3 \times 3$ lattice cage, and exposes resolution sliders.
- **Geometry Nodes**: Displays node inputs plus **Keep in file** (Fake User pinning), **Export** to `.blend`, and **Import** from `.blend`.

---

## 4. Stack-Wide Management Tools

Perform batch operations across the entire active object stack or across multiple selected objects with one click:
- **Expand All / Collapse All**: Clean up visual clutter across the stack.
- **Toggle Viewport Visibility**: Hide or show all modifiers on the mesh simultaneously.
- **Toggle Render Visibility**: Disable or enable evaluation in final renders.
- **Apply All**: Convert non-destructive stacks to permanent geometry.
- **Delete All**: Clear modifiers in one click using the trash icon.

### Multi-Object Batch Apply & Delete

When multiple objects are selected in the 3D viewport, **Apply All** and **Delete All** operate intelligently across all selected meshes:

- **Apply All Modifiers**:
  - When multiple objects are selected in the viewport, clicking **Apply All** now iteratively applies visible modifiers across all eligible selected objects while preserving the original active object and user selection.
  - Decouples linked duplicate mesh datablocks (<kbd>Alt + D</kbd>) per object to prevent Blender single-user application errors.
  - Automatically unsolos any active soloed modifiers before applying.
  - Dynamic tooltip description adapts to selection state (e.g. `Apply every visible modifier across X selected objects`).
  - Reports total applied modifier count and affected object count with viewport overlay notification (e.g. `Applied 4 modifiers across 3 objects`).
- **Delete All Modifiers (`modpie.remove_all`)**:
  - When multiple objects are selected, clicking **Delete All** (trash icon) removes all modifiers across all selected objects.
  - Dynamic tooltip description updates to reflect selection context (e.g. `Remove all modifiers from X selected objects`).
  - Clear viewport notification and info report summarizing removed modifiers and affected objects.
- **Single-Object Responsiveness**:
  - When only a single object is active/selected, behavior remains smooth and instantaneous on the active object.

---

## 5. Modpie Plus Panel Tools <span className="badge badge--primary">Plus</span>

When Modpie Plus is installed, the panel gains the prominent **Plus Bar** directly beneath Add Modifier (`[ Presets ] [ Stacks ] [ Sync ]`) along with modifier card power buttons:

- **Presets**: Live clipboard pasting, starred favorites, full preset library, and interactive search.
- **Stacks**: Deploy complete multi-modifier pipelines in Append or Replace mode, with live modifier count badges.
- **Sync**: Contextual multi-object continuous **Live Linking** (`Link to Selected`), one-shot copying (`Copy to Selected`), stack diffing, and unlinking.
- **Card Tools**: Dedicated **[Remember Default](defaults.md)**, **Solo Modifier**, and **Apply Up To Here** buttons on every modifier card.
- **Solo & Profiler**: Isolate modifiers with one click or view real-time evaluation latency in milliseconds.

:::tip Full Guide
For full breakdown and workflow examples of the panel toolbar and card tools, see the dedicated [Panel Presets, Stacks & Sync](panel-presets-stacks-sync.md) documentation page.
:::

