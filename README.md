# Mikel Robredo — Personal Academic Website

Welcome to the repository for my professional academic portfolio website hosted at [robredomikel.github.io](https://robredomikel.github.io). Built upon a customized Bootstrap template, this site showcases my research as a PhD researcher in Empirical Software Engineering at the University of Oulu, highlighting my publications, academic background, technical expertise, and latest professional news.

---

## Key Enhancements & Features

### 1. Quad-Lingual Internationalization (EN | EUS | ES | IT)
- **Language Switcher**: Integrated a sleek top-right navigation switcher allowing visitors to instantly toggle between **English (EN)**, **Basque (EUS)**, **Spanish (ES)**, and **Italian (IT)**.
- **Persistent State**: Language preferences are saved in the browser's `localStorage` and automatically update document language attributes (`lang="en"`, `lang="eu"`, `lang="es"`, `lang="it"`) and all section headers, profile details, and form elements.
- **Citation Fidelity**: All publication titles and venues correctly remain in their original English scientific titles across all language views.

### 2. Dynamic Publication Management & Citations
- **JSON-Driven Publications**: Centralized publication records in `assets/data/publications.json` categorized by year with responsive filtering.
- **OpenAlex Integration**: Automatically fetches and displays real-time citation counts from OpenAlex via DOI matching.

### 3. Dedicated "Latest News" Section with Pagination
- **Chronological Updates**: Added a dedicated News section placed strategically between the *About Me* and *Contact Me* sections.
- **Pagination Logic**: Automatically aggregates publications and manual events, formatting them with precise `[dd-mm-yyyy]` date stamps, and implements pagination to display items neatly in batches of 10.
- **Multilingual Headers**: Fully localized news section titles and subtitles across all four supported languages.

### 4. Professional Styling & Hero Section Customization
- **Scientific Typography**: Updated the primary hero title font from a decorative handwriting font to a professional, bold, technical uppercase sans-serif (`Raleway`).
- **Personalized Imagery**: Configured the hero background using professional portrait photography (`Robredo-Mikel_UniOulu_112025.jpg`), with left-aligned hero containers for optimal visual balance.
- **Responsive Spacing**: Refined section padding and vertical spacing around profile elements for clean readability on both desktop and mobile devices.

### 5. Interactive Profile & Contact Integration
- **Clickable Researcher Profile**: Linked the website entry in the *About Me* section directly to the official University of Oulu researcher profile.
- **Streamlined Navigation**: Removed obsolete PDF downloads and replaced broken links with direct smooth-scrolling anchors to relevant sections.
