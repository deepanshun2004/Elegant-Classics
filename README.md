# Elegant-Classics

A responsive, static front-end website for a classic car rental brand. It showcases services, a how-it-works section, navigation with a mobile menu, subtle scroll animations, and utility UI like a Back-to-Top button.

## Features
- **Responsive layout** across mobile, tablet, and desktop
- **Sticky navigation** with mobile menu toggle
- **Scroll animations** via ScrollReveal
- **Back-to-Top** floating action button
- **Clean typography and icons** using Google Fonts and Remix Icon

## Tech Stack
- **HTML5** for structure (`index.html` and additional pages like `a.html`, `blog.html`, `contactus.html`, etc.)
- **CSS3** for styling (`styles.css` and other page-specific styles like `a.css`, `b.css`, `g.css`)
- **Vanilla JavaScript** for interactivity (`main.js`)
- **CDN dependencies**:
  - Remix Icon
  - ScrollReveal
  - Google Fonts (Mulish)

## Project Structure
Key files in the root directory:
- `index.html` — Landing page and primary navigation
- `styles.css` — Global styles and responsive rules
- `main.js` — Mobile menu, ScrollReveal hooks, Back-to-Top behavior
- `a.html`, `blog.html`, `contactus.html`, `gallery.html`, `signin.html`, `signup.html`, `payment.html`, `rent-details.html`, `confirmation.html`, `ff.html`, `g.html` — Additional site pages
- `a.css`, `b.css`, `g.css`, `styles.css` — Stylesheets
- Image assets — Various `.png/.jpg/.webp/.avif` used across sections

> Note: All files currently live in the project root for simplicity.

## Getting Started
This is a static site. You can run it locally without any build tools.

- **Option 1 (quickest):** Double-click `index.html` to open it in your browser.
- **Option 2 (recommended):** Use a lightweight dev server for correct relative paths and faster reloads.
  - VS Code Live Server: Right-click `index.html` → "Open with Live Server"
  - Or Python: `python -m http.server` and browse to `http://localhost:8000`

## Usage
- Navigate through the top navbar. On mobile, use the hamburger menu.
- Scroll to see section animations.
- Click the Up arrow button to quickly return to the top.

## Customization
- **Branding:** Update the site title and logo text in `index.html` (`<title>` and the `.nav__logo` anchor).
- **Colors/Theme:** Edit CSS variables in `styles.css` under `:root` (e.g., `--text-dark`, `--extra-light`, `--gradient`).
- **Hero images/illustrations:** Replace images referenced in `index.html` and other pages.
- **Animations:** Tweak or add reveals in `main.js` by editing the `ScrollReveal()` calls.
- **Navigation links:** Update the anchors in `index.html` under the `.nav__links` list.

## External Resources
- Remix Icon CDN
- ScrollReveal CDN
- Google Fonts (Mulish)

These are pulled directly via `<link>`/`<script>` tags in `index.html`. No local install is required.

## Contributing
- Fork the repository, create a feature branch, and open a Pull Request.
- Keep pages responsive and consistent with the existing design system.

## License
Specify your license of choice (e.g., MIT) in this section and commit a `LICENSE` file.

## Acknowledgments
- Icons: Remix Icon
- Fonts: Google Fonts (Mulish)
- Imagery: Project-local assets and placeholders
