# GeminiWave consulting website

Public website: https://geminiwave.com/

The root `index.html` is a buildless consulting portfolio, with `styles.css`, `app.js`, and `icon.svg`. GitHub Pages serves the existing `main` branch and custom domain declared in `CNAME`. There are no application dependencies or build commands.

The inquiry helper prepares a message in the visitor's browser. Visitors review it and send through their own email application; the website does not submit or store inquiry details. Direct email remains available if JavaScript is unavailable. The previous Calendly URL was invalid when checked on October 24, 2026, so it is not used.

Professional experience reflects prior employment and contract roles, not a client-logo endorsement. Consulting prices are quoted after scope review. Preserve accurate qualifications and do not publish confidential client material.

The existing `apps/`, `legal/`, `style.css`, and `CNAME` are retained for legacy destinations. The new consulting privacy page is `privacy.html`. The private business plan, revenue targets, Gmail evidence, and contact research are not part of this public repository.

Validation: `node --check app.js`; check navigation, experience tabs and keyboard controls, inquiry validation/message preparation, and desktop/mobile layout. `robots.txt` and `sitemap.xml` declare the public canonical domain.
