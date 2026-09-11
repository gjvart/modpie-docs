# Modpie & Modpie Plus: Video Script, Feature Guide & Tier Comparison

> **Purpose**: A comprehensive point-by-point video walkthrough script, feature breakdown, and buyer's guide for **Modpie** and **Modpie Plus** (Version 0.9.91 LTS / Release).

---

## Video Outline & Timestamp Roadmap

| Timestamp | Chapter | Key Focus & Visual Cue |
| :--- | :--- | :--- |
| `00:00 - 01:15` | **Hook & The Problem** | Why Blender's modifier workflow slows you down; hunting through Properties editor vs. Modpie speed. |
| `01:15 - 03:00` | **Core Workflow: The Radial Pie Menu** | Fast gestures (`Alt + M`), repeat handling (`Click` vs `Shift + Click`), `×n` badges. |
| `03:00 - 04:30` | **The Viewport Stack Panel & Auto-Hide** | Full modifier stack in the 3D viewport; zero overlap auto-dismissal when dragging. |
| `04:30 - 06:15` | **Interactive Modal Dragging & Live HUD** | Cursor-following HUD, real-time value tweaking, axis lock (<kbd>Spacebar</kbd>), precision dragging. |
| `06:15 - 08:30` | **Specialized Interactive Modifiers** | Mirror (smart bisect, multi-axis <kbd>Shift</kbd>-drag, <kbd>T</kbd> target picking), Boolean (<kbd>A</kbd> cycling, cutter picker), Fitted Lattice. |
| `08:30 - 09:45` | **Geometry Nodes Viewport Integration** | Dynamic RNA input sockets exposed directly in the viewport panel; live parameter slider tweaking. |
| `09:45 - 10:30` | **Remember Custom Defaults & Multi-Object** | One-click permanent default overrides; batch adding and dragging across multiple selections. |
| `10:30 - 13:30` | **Modpie Plus Power Features** | 8-way compass customizer, Presets & Stack Templates, Favorites Preset Pie (`Shift + Alt + M`). |
| `13:30 - 15:30` | **Modpie Plus: Live Linking & Sync** | Continuous bidirectional modifier linking across objects; stack diff visualizer. |
| `15:30 - 17:00` | **Modpie Plus: Solo & Profiler Diagnostics** | Non-destructive Solo isolation (`Alt + H`), millisecond latency profiler, Apply-Up-To-Here. |
| `17:00 - 18:30` | **Comparison & Buyer's Guide** | Free vs. Plus side-by-side matrix; seamless upgrade path on Superhive. |

---

## Part 1: The Hook & Elevator Pitch

### What to Say / Script:
> *"Every 3D artist knows the frustration of modifier management in Blender. You add a Bevel, your mouse travels all the way over to the Properties editor on the right side of the screen, you search through tabs, unfold panels, and squint at numeric inputs. Then you add a Mirror, toggle checkboxes by trial and error, and drag inputs while your viewport camera is half-obscured.*
>
> *Modpie fixes this completely. It brings modifiers directly under your mouse cursor with lightning-fast radial menus, live viewport dragging with interactive HUD cards, and a dedicated in-viewport stack panel. Whether you're using the standard free release or the power-packed Modpie Plus, here is everything you need to know."*

### Visual Cues:
- Show standard Blender: cursor darting repeatedly back and forth between the 3D viewport and the far-right modifier stack.
- Cut to Modpie: single flick of `Alt + M`, modifier added and adjusted directly in the center of the screen in under two seconds.

---

## Part 2: Core Universal Features (Modpie Standard & Plus)

Every feature in this section is available in **both** Modpie Standard (Free) and Modpie Plus.

### 1. The High-Speed Radial Pie Menu (`Alt + M`)
- **Flick & Flow**: Opens centered directly over your cursor. Common modifiers are strategically mapped to muscle-memory radial directions.
- **Smart Duplicate / Repeat Handling**:
  - **Single Click**: If the modifier already exists on your object, clicking that slot jumps straight into editing the existing modifier without adding a redundant duplicate.
  - **Shift + Click**: Force-stacks a second instance (e.g. adding a second Bevel or second Subsurf).
  - **`×n` Badges**: The pie menu displays a dynamic badge showing exactly how many instances of that modifier currently exist on the active mesh.

### 2. The Viewport Stack Panel & Smart Auto-Dismissal
- **Full Stack Control Inside the Viewport**: Press `Ctrl + Alt + M` (or open the `N` sidebar **Modifiers** tab) to view your entire modifier stack floating directly inside the 3D viewport.
- **Header Actions**: One-click collapsed Apply (`✓`), visibility toggles, duplicate, and delete.
- **Zero-Overlap Focus Management**: The moment you start dragging or enter an interactive modal, the panel and sidebar **instantly close**, providing a completely clean, unobstructed view of your geometry. When you finish or cancel, the panel stays out of your way.

### 3. Interactive Modal Dragging & Real-Time HUD
- **Real-Time HUD Card**: While dragging values, a sleek HUD readout follows your cursor displaying the active parameter, exact units, and hotkey toggles.
- **Precision Controls**: Hold <kbd>Shift</kbd> for fine adjustments; hold <kbd>Ctrl</kbd> for increment snapping.
- **Real-Time Numeric Input**: Type digits (`0`–`9`), minus (`-`), or decimal period (`.`) on your keyboard or numpad to calculate and apply values in real-time.
- **Enter to Lock Value**: Pressing <kbd>Enter</kbd> or <kbd>Numpad Enter</kbd> while actively entering a value sets and **locks** that value immediately without closing the modal session.
- **Mouse Drag Protection**: Moving the mouse while locked will never accidentally alter the locked value.
- **Spacebar to Unlock & Resume Dragging**: Pressing <kbd>Spacebar</kbd> seamlessly unlocks the value so mouse dragging can resume smoothly from the locked value if desired.

### 4. Advanced Mirror Modifier: Multi-Axis, Smart Bisect & Target Picking
- **Smart Axis & Bisect Detection**: Pointing toward positive axes (+X, +Y, +Z) automatically turns on **Bisect**. Pointing toward negative axes (-X, -Y, -Z) turns on both **Bisect** and **Flip**.
- **Additive Multi-Axis (<kbd>Shift</kbd> + Drag)**: Holding <kbd>Shift</kbd> latches onto one new axis at a time, glowing **emerald green** to provide unmistakable visual feedback. Releasing Shift commits that axis to the locked set.
- **Axis Locking Protection**: Re-opening an existing Mirror modifier automatically locks its confirmed axes so normal cursor motion won't accidentally overwrite your symmetry.
- **Interactive Target Mirror Object (<kbd>T</kbd>)**: Press <kbd>T</kbd> inside interactive mode to get an eyedropper cursor. Click any Empty or reference mesh, and the symmetry plane instantly reorients around that target object. Clear it anytime with the red `[X]` button on the HUD.
- **Configurable Viewport Placement**: Anchor the Mirror HUD card to 5 clean viewport positions (Top Center, Top Left, Top Right, Bottom Left, Bottom Center) with a 95px top margin that comfortably clears Blendkit search bars.

### 5. Smart Boolean Modifier
- **Cutter Selection Prompt**: Starting a Boolean modifier without a secondary mesh automatically opens an in-viewport search popup of scene meshes to choose your cutter.
- **Instant Operation Cycling (<kbd>A</kbd>)**: Press <kbd>A</kbd> during interactive mode to cycle between `Difference → Intersect → Union → Difference` in real time.
- **Direct Hotkeys**: Press <kbd>D</kbd> for Difference, <kbd>U</kbd> for Union, <kbd>I</kbd> for Intersect, and <kbd>S</kbd> to toggle Exact vs Fast solver.

### 6. Built-In Workflow Helpers
- **Automatic Fitted Lattice**: Adding a Lattice modifier automatically generates and scales a $3 \times 3 \times 3$ lattice cage bounded precisely to the dimensions of your mesh in a single click.
- **Blender 5.0+ Modern Array vs Legacy Array**: On Blender 5.0+, supports both modern Geometry Nodes Array assets and classic modifiers with socket-level dragging. On Blender 4.x LTS, seamlessly adapts and presents standard Array without confusing legacy tags.
- **Shrinkwrap Target Raycast (<kbd>T</kbd>)**: Interactive 3D raycast target picking with mouse-wheel candidate cycling.
- **Procedural Texture Creation**: Create, load, or bind textures for Displace, Warp, and Wave modifiers directly inside the viewport panel without breaking Blender's UI template ID limits.

### 7. Geometry Nodes Viewport Integration
- **Dynamic RNA Input Exposure**: Modpie dynamically inspects the active Geometry Nodes group and renders all custom input sockets (Floats, Integers, Distances, Booleans, Vectors, Colors) directly on the viewport modifier card.
- **Live In-Viewport Parameter Tweaking**: Adjust procedural node inputs directly from the panel with instant mesh updates.
- **Lifecycle Tools**: One-click **Keep in File** (Fake User `F` pinning to prevent Blender from purging unused node groups on close), standalone `.blend` export, and validated `.blend` group importing.

### 8. Remember Modifier Defaults
- **Custom Startup Defaults**: Click the tick button on any modifier card to permanently save your preferred settings (e.g. your custom Bevel segments or Solidify thickness).
- **Persistent Across Projects**: Every time you add that modifier in any future Blender file, it starts with your custom values instead of Blender's generic defaults.

### 9. Multi-Object Batch Editing
- Select multiple objects and add or adjust modifiers simultaneously. Modpie applies operations across all selected meshes automatically.

---

## Part 3: Modpie Plus — The Power Features

Here is where you show potential buyers why upgrading to **Modpie Plus** is a no-brainer for serious Blender artists.

### 1. The 8-Way Radial Pie & In-Viewport Compass Customizer
- **All 8 Directions Unlocked**: Adds the South-West and South-East radial directions.
- **Arbitrary Content Types**: Map directions not just to modifiers, but to **Saved Presets**, **Stack Templates**, **Instant Search**, **Settings**, or **Panel Openers**.
- **In-Viewport 3×3 Compass Grid**: Click **Customize** on the panel to open a visual 3×3 grid right in the 3D viewport. Drag, drop, and swap slot assignments in seconds without digging through Blender Preferences.
- **Custom Arrival Values**: Assign exact parameters to a slot (e.g., *Bevel with Segments 3, Width 0.02m, Harden Normals ON*). Flicking that direction deploys your exact custom modifier instantly.

### 2. Presets & Stack Templates Library
- **Single Modifier Presets**: Save complex configurations (e.g., *Hard Surface Chamfer*, *Cloth Collision Setup*, *Glass Solidify*). Preserves all properties, vector axes, and custom Geometry Nodes input values.
- **Full Stack Templates**: Save entire multi-modifier pipelines (e.g., *Subdivision Surface + Solidify + Bevel + Weighted Normal*) and apply them to any new model with one click in either **Append** or **Replace** mode.
- **Favorites Preset Pie (`Shift + Alt + M`)**: A secondary, dedicated radial menu holding up to 8 of your most-used presets for instant zero-click deployment.

### 3. Continuous Live Linking & Sync
- **True Bidirectional Live Linking**: Link modifiers across multiple objects. Changing a parameter on one mesh propagates live to all other linked objects in real time via an intelligent depsgraph handler.
- **Saved in `.blend`**: Live links are stored in object custom properties (`modpie_link`) and persist across project saves and reloads.
- **One-Shot Copy & Stack Replace**: *Copy Modifier to Selected*, *Copy All Settings to Selected*, or *Replace Stacks with Active*.
- **Live Stack Diff Visualizer**: Opens a side-by-side inspection report highlighting missing, extra, or disagreeing modifier parameters across selected meshes.

### 4. Non-Destructive Workflow Diagnostics
- **Solo Modifier (`Alt + H`)**: Temporarily disables all other modifiers in the stack to isolate the visual effect of a single modifier. Modpie remembers the previous visibility states and restores them perfectly when un-soloing.
- **Evaluation Profiler**: Real-time performance benchmark showing computation latency in milliseconds (ms) for every modifier in your stack, complete with visual bar charts to immediately spot lag-inducing bottlenecks.
- **Apply-Up-To-Here**: Bakes your modifier stack destructively from the top down to the active modifier, while keeping all subsequent procedural modifiers active beneath it.

---

## Part 4: Modpie Standard vs. Modpie Plus Comparison Matrix

| Feature | Modpie Standard (Free) | Modpie Plus | Why It Matters to Artists |
| :--- | :---: | :---: | :--- |
| **Radial Pie Menu** | 5 upper slots | **All 8 slots** | 60% more instant radial muscle-memory commands. |
| **Pie Slot Content** | Modifiers only | **Modifiers, Presets, Stacks, Search, Settings** | Launch full multi-modifier setups from a radial flick. |
| **Slot Customization** | Preferences only | **In-Viewport 3×3 Compass Grid** | Edit your radial menu visually without opening Preferences. |
| **Custom Arrival Values** | ✕ | **✔ Per-slot parameters** | Deploy modifiers with your exact preferred dimensions pre-set. |
| **Viewport Modifier Panel** | ✔ | **✔** | Inspect and manage modifier stacks directly in the viewport. |
| **Interactive Modal Dragging & HUD** | ✔ | **✔** | Drag values with real-time numeric readouts and Spacebar lock. |
| **Smart Mirror & Multi-Axis Mode** | ✔ | **✔** | Smart bisect/flip, Shift-drag multi-axis latching, T target picking. |
| **Boolean Cutter & Cycling** | ✔ | **✔** | Search cutter popup and instant A-key operation cycling. |
| **Fitted Lattice Generator** | ✔ | **✔** | Instant $3 \times 3 \times 3$ lattice cage fitted to mesh bounds. |
| **Geometry Nodes Viewport Inputs** | ✔ | **✔** | Adjust custom node sockets directly on the viewport card. |
| **Remember Modifier Defaults** | ✔ | **✔** | Save permanent custom startup defaults per modifier. |
| **Modifier Presets Library** | ✕ | **✔ Full Library** | Save, search, and deploy custom single-modifier presets. |
| **Full Stack Templates** | ✕ | **✔ Append / Replace** | Deploy complete multi-modifier stacks onto new meshes in one click. |
| **Favorites Preset Pie (`Shift + Alt + M`)** | ✕ | **✔ 8-Slot Radial** | Instant access to your top 8 presets from anywhere. |
| **Continuous Live Modifier Linking** | ✕ | **✔ Real-Time Sync** | Changes to one object automatically update all linked copies. |
| **Stack Diff Visualizer** | ✕ | **✔ Visual Report** | Spot differences and mismatches across multi-object selections. |
| **Solo Modifier (`Alt + H`)** | ✕ | **✔ Non-destructive** | Isolate one modifier's effect without losing your stack visibility. |
| **Evaluation Profiler** | ✕ | **✔ Millisecond Bars** | Pinpoint performance bottlenecks slowing down your scene. |
| **Apply-Up-To-Here** | ✕ | **✔ Smart Bake** | Bake the top half of your stack while preserving procedural edits below. |

---

## Part 5: Video Conclusion & Call to Action

### What to Say / Script:
> *"If you want the core speedup — the fast radial pie, interactive HUD dragging, smart multi-axis mirror, and viewport stack panel — Modpie Free is 100% free to download and use on any commercial or personal project.*
>
> *If you're a hard-surface artist, procedural creator, or production modeler looking for complete stack templates, live multi-object linking, in-viewport compass customization, and performance profiling, **Modpie Plus** pays for itself on day one.*
>
> *Both versions share the exact same extension architecture, meaning you can upgrade to Modpie Plus anytime in ten seconds without losing a single shortcut, preference, or custom slot configuration.*
>
> *Head over to our official Superhive page at **superhivemarket.com** to grab your copy or check out the full online documentation at the link below. Happy modeling!"*

### Visual Cues:
- On-screen graphic showing the Superhive logo and URL: `https://superhivemarket.com`
- Quick montage of fast actions: 8-way pie flicking, stack templates applying in one click, and real-time live sync propagating across 10 objects simultaneously.
