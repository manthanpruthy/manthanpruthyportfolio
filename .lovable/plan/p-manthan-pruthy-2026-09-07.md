# P Manthan Pruthy

## Goal
Build a polished, single-page personal portfolio that presents Manthan as an ambitious, versatile early-career technologist at the intersection of AI, data, business, communication, and leadership—without overstating his experience.

## Experience and visual direction
- Use a dark, editorial startup aesthetic inspired by Apple, Linear, and Vercel: near-black surfaces, crisp neutral type, restrained cool highlights, faint grids, and subtle line/node motifs.
- Keep typography large and confident with generous whitespace, sharp hierarchy, minimal glass effects, and restrained rounded corners.
- Add subtle entrance reveals, keyword motion, timeline interactions, skill constellation effects, button feedback, smooth scrolling, and a top scroll-progress line; honor reduced-motion preferences.
- Make the experience mobile-first, with a sticky desktop navigation and an accessible animated mobile menu.

## Page structure
1. **Hero** — Name, supplied headline and introduction, Bengaluru/REVA context, journey/contact actions, and editable LinkedIn/GitHub placeholders alongside working email access.
2. **About** — Break the supplied biography into readable editorial blocks paired with animated thematic keywords.
3. **Experience** — Interactive vertical timeline for Paytm and GIVA, using only the responsibilities and skills provided.
4. **Leadership** — Progressive responsibility journey covering Indian Data Club, OSCODE, and earlier school/college leadership.
5. **Skills** — Interactive ecosystem of people, professional, and interest-based capabilities with no proficiency percentages.
6. **Learning** — Refined entries for the AI Tools Workshop, CANsat Workshop, and Magnachrista volunteering.
7. **Beyond the classroom** — A visually distinct movement-inspired section for swimming and football participation, without stock imagery.
8. **What’s next** — Bold opportunity statement with interactive focus areas.
9. **Projects** — Include reusable project-card data architecture but keep the section hidden or show a restrained “coming soon” treatment without fabricated work.
10. **Contact/footer** — Strong final invitation, supplied contact details, and clearly editable social placeholders.

## Navigation and accessibility
- Wire Home, About, Experience, Leadership, Skills, Learning, Beyond, and Contact to their page sections.
- Track the visible section for the active navigation state.
- Ensure semantic landmarks, a single H1, keyboard operability, visible focus styles, readable contrast, and touch-friendly controls.
- Keep email and phone actionable; social placeholders will be visibly disabled or marked so they never imply invented URLs.

## Technical details
- Implement the experience in the existing TanStack Start home route and shared styling system, with small reusable React components for navigation, reveal effects, timeline entries, skill groups, and section headings.
- Use the existing icon library and browser APIs only; add no unnecessary dependencies.
- Define all colors, shadows, and typography through semantic CSS tokens in `src/styles.css`.
- Add route-specific title, description, Open Graph fields, Twitter card metadata, canonical path, and structured data appropriate to a personal profile.
- Load chosen web typography through document-head links rather than remote CSS imports.
- Avoid raster imagery so there are no image-loading or optimization costs; the abstract visual language will be CSS-based.

## Validation
- Verify the final page in the live browser at desktop and mobile widths.
- Check navigation, menu, anchor scrolling, active states, mail/phone actions, reduced-motion behavior, overflow, console errors, and metadata.
