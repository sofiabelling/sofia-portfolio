# Sofia Portfolio — restored 4 Sep 2026

This package is based on the exact `Sofia Portfolio.zip` workspace export.

## Restored
- Violet portfolio UI using `#7257E8`
- Desktop glass navigation + mobile bottom navigation
- Home hero color animation: pink -> cyan -> violet, fast/snappy, no bounce
- Work heading/filter accents moved back to violet
- About/Contact main accent colors aligned to violet while preserving their existing layouts
- Correct NIX project metadata/content (2017 thesis, children 4–7, shadows, Kinect v2, Processing, computer vision)
- Dedicated monochrome NIX case study inside `ProjectPage.tsx`
- New NIX hero image
- Thesis imagery for research, shadow testing, storyboarding, Processing/blob tracking, projection tests and final prototype
- Mobile-specific NIX layout
- Home and Work project grids forced to one column on mobile
- Existing router/page architecture preserved

## Important structure
Do not move files. The NIX images are in:
`src/imports/nix/`

The custom NIX page is handled inside:
`src/pages/ProjectPage.tsx`

Global portfolio styling/navigation is handled by:
`src/components/Nav.tsx`
`src/index.css`

The other project data remains in:
`src/data/projects.ts`
