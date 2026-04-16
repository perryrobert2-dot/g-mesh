# Design System Specification: The Architectural Mesh

## 1. Overview & Creative North Star: "The Digital Tectonic"
This design system is built for high-level technical storytelling. We are moving away from the "flat web" toward an experience that feels like an architectural blueprint come to life. The Creative North Star is **The Digital Tectonic**: a philosophy where information is structured in layers, emphasizing the intersection of organic networking and rigid engineering. 

To achieve a "Gaia Mesh" feel, we reject the standard Bootstrap-style grid. Instead, we embrace **intentional asymmetry** and **tonal depth**. Layouts should feel like a sophisticated command center—stable, deep, and illuminated from within. We prioritize "breathable" technical density, where complex data is legible because of the vast atmospheric space surrounding it.

---

## 2. Colors: Deep Space & Bioluminescent Logic
Our palette is rooted in the `background: #10141a`. This is not a true black, but a deep, pressurized charcoal that allows our electric accents to "glow."

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders to define sections. We achieve structural clarity through **Tonal Transitions**. 
- Use `surface-container-low` (#181c22) for large sectioning.
- Use `surface-container-high` (#262a31) for interactive clusters.
- Boundaries are defined by the shift in value, creating a seamless, high-end editorial flow.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. 
- **The Base:** `surface` (#10141a)
- **The Platform:** `surface-container-lowest` (#0a0e14) for recessed areas or background code snippets.
- **The Interactive Layer:** `surface-container` (#1c2026) for standard cards.
- **The Focus Layer:** `surface-bright` (#353940) for elements that require immediate user attention.

### The "Glass & Gradient" Rule
To mimic the "Gaia" influence, use **Glassmorphism** for floating navigation and overlays. 
- Use `surface-variant` (#31353c) at 60% opacity with a `20px` backdrop-blur. 
- **Signature Textures:** For primary CTAs, apply a linear gradient from `primary` (#a8e8ff) to `primary-container` (#00d4ff) at a 135-degree angle. This provides a "bioluminescent" pulse that flat colors lack.

---

## 3. Typography: Technical Authority
We pair the geometric precision of **Space Grotesk** with the Swiss-inspired clarity of **Inter**.

- **The Display Scale (`display-lg` to `display-sm`):** Set in **Space Grotesk**. These are your architectural anchors. Use tight letter-spacing (-0.02em) to give headers a "machined" look.
- **The Technical Scale (`headline` to `title`):** Also in **Space Grotesk**. This font’s unique apertures convey a future-forward, "tech-native" personality.
- **The Reading Scale (`body-lg` to `body-sm`):** Set in **Inter**. Inter’s tall x-height ensures readability even in dense technical documentation.
- **The Label Scale (`label-md` to `label-sm`):** Set in **Inter**, Uppercase, with +0.1em letter-spacing. Use these for metadata, tags, and small technical annotations.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "heavy" for a mesh aesthetic. We use light and tone to simulate height.

- **The Layering Principle:** Place a `surface-container-highest` card atop a `surface-container-low` section. The contrast creates a "natural lift" without artificial shadows.
- **Ambient Shadows:** If a floating state is required (e.g., a modal), use a shadow tinted with `surface-tint` (#3cd7ff) at 5% opacity, with a 32px blur and 16px Y-offset. This mimics the glow of a screen in a dark room.
- **The "Ghost Border" Fallback:** If a border is required for accessibility, use `outline-variant` (#3c494e) at **15% opacity**. It should be felt, not seen.

---

## 5. Components: The Mesh Primitives

### Cards & Technical Diagrams
- **Rule:** No divider lines. Use `surface-container-low` for the card body and a `surface-container-highest` header area to separate content.
- **Diagrams:** Use `primary` (#a8e8ff) for active nodes and `outline` (#859398) for passive connections. Use `tertiary` (#c6e2ff) for secondary data paths.

### Buttons (The Kinetic Pulse)
- **Primary:** Gradient fill (`primary` to `primary-container`). `borderRadius: DEFAULT` (0.25rem). 
- **Secondary:** Ghost style. No fill, `outline` at 20% opacity. On hover, fill with `surface-container-high`.
- **Tertiary:** Text-only, using `label-md` in `primary` color.

### Navigation (The Floating Mesh)
- Top navigation must use the **Glassmorphism** rule.
- Active states are indicated by a 2px horizontal glow in `primary-fixed-dim` (#3cd7ff) at the bottom of the nav item—never a "tab" box.

### Input Fields
- **Background:** `surface-container-lowest` (#0a0e14).
- **Active State:** Change background to `surface-container-high` and add a "Ghost Border" of `primary` at 30% opacity.

---

## 6. Do’s and Don’ts

### Do:
- **Use Intentional Asymmetry:** In hero sections, align text to the left and allow technical diagrams to "bleed" off the right edge of the viewport.
- **Leverage Negative Space:** Treat whitespace as a structural element. Technical sites often over-crowd; we provide "air" to highlight complexity.
- **Layer your Blues:** Use the full spectrum from `on-primary-fixed` (darkest cyan) to `primary` (brightest cyan) to create depth in diagrams.

### Don’t:
- **Don’t use 100% white (#FFFFFF):** It is too jarring against our deep background. Always use `on-surface` (#dfe2eb) for text.
- **Don’t use standard "Rounded" Pills:** Stick to the `DEFAULT` (4px) or `md` (6px) radius for a more rigid, architectural feel. Reserve `full` (9999px) only for very small status chips.
- **Don’t use 1px dividers:** If you feel the need to separate two pieces of content, increase the `padding` or shift the `background-color` by one tier in the surface-container scale.