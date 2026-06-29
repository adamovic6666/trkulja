# Website Layers

This site uses "layers" in two related ways:

- scroll layers: page sections that pin while the next section scrolls over them
- visual layers: normal CSS stacking with `position` and `z-index`

## Scroll layers

The scroll layer behavior is handled by GSAP in `app/_hooks/useGsapScroll.ts`.

The hook registers `ScrollTrigger`, finds every element with the `.panel` class, and creates one `ScrollTrigger` per panel:

- `trigger: panel` means each `.panel` controls its own scroll behavior
- `pin: true` keeps the current panel fixed while the user scrolls through it
- `pinSpacing: false` removes the extra spacer GSAP would normally add, so panels visually overlap/stack instead of pushing each other down
- `start` changes based on height:
  - short panels start pinning at `top top`
  - panels taller than the viewport start pinning at `bottom bottom`
- `fastScrollEnd` and `preventOverlaps` help avoid messy trigger overlap when the user scrolls quickly

This is why the homepage feels like sections are layered on top of each other.

## Where the hook is used

`useGsapScroll()` is called only in client-side page wrappers:

- `app/page.tsx` for the homepage
- `app/_components/sections/our-work/page-content/OurWorkPageContent.tsx` for `/our-work`
- `app/_components/sections/our-work/single-work/SingleWork.tsx` for individual project pages

Any `.panel` inside those trees becomes part of the pinned scroll stack.

## Current panel sections

Main homepage panels:

- `Hero`
- `WhoWeAre`
- `OurWork`
- `Contact`

Project/detail page panels:

- individual project image blocks, for example `WebsiteImages`, `PackagingImages`, `WineImages`, etc.
- `OtherProjects`
- `Contact`

Important: adding `.panel` to a component changes its scroll behavior only if that component is rendered under a page that calls `useGsapScroll()`.

## Header color layer

The header watches all `section` elements with an `IntersectionObserver` in `app/_components/sections/header/Header.tsx`.

Each section can set `data-bg`:

- `data-bg="dark"` keeps the logo/header elements white
- any other value, or `data-bg="white"`, makes the header use the white header background and black logo/button state

This is separate from GSAP. GSAP controls pinned scrolling; `data-bg` controls how the fixed header should look over the current section.

## Visual z-index layers

The site also has a small z-index stack for fixed UI and content that must sit above other elements:

- section/content overlays: usually `z-index: 1` or `10`
- cookie banner: `z-index: 50`
- header: `z-index: 1000`
- menu panel: `z-index: 1000`
- header logo/menu button/menu links/socials: `z-index: 1001`
- cookie settings modal overlay: `z-index: 10000`

The practical order is:

1. normal page panels and content
2. section content that needs to sit over video/waves/images
3. cookie banner
4. fixed header and full-screen menu
5. cookie settings modal

## Hero animation

The hero has its own GSAP timeline in `app/_components/sections/hero/Hero.tsx`.

That animation is separate from the pinned scroll layers. It only controls the first-visit intro:

- logo fades/scales in
- logo fades out
- video fades/scales in
- title text animates in
- scrolling is temporarily disabled during the intro
- `sessionStorage.animationDone` prevents the intro from replaying during the same browser session

## When adding a new layered section

Use this checklist:

1. Add `className="panel"` only if the section should participate in pinned scroll layering.
2. Add `data-bg="dark"` or `data-bg="white"` on real `section` elements so the fixed header knows which color state to use.
3. Give the section `position: relative` if it contains absolutely positioned media, waves, or overlay content.
4. Use low z-index values like `1` or `10` for local content.
5. Avoid z-index values above `1000` unless the element must beat the header/menu.
