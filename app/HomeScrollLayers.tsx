"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function HomeScrollLayers() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const intro = gsap.timeline();

    if (reduceMotion) {
      gsap.set(".home-hero-video, .home-hero-signature, .site-header, .home-scroll-cue", {
        clearProps: "all",
        opacity: 1,
      });
      gsap.set(".home-hero-black", { autoAlpha: 0 });
    } else {
      gsap.set(".home-hero-video", { opacity: 0 });
      gsap.set(".home-hero-black", { autoAlpha: 1 });
      gsap.set(".home-hero-signature", { opacity: 0, y: 12, scale: 0.96 });
      gsap.set(".site-header", { opacity: 0, y: -10 });
      gsap.set(".home-scroll-cue", { opacity: 0 });

      intro
        .to(".home-hero-signature", {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power2.out",
          delay: 0.35,
        })
        .to(".home-hero-video", {
          opacity: 1,
          duration: 1.1,
          ease: "power2.out",
        }, 1.85)
        .to(".home-hero-black", {
          autoAlpha: 0,
          duration: 1,
          ease: "power2.out",
        }, 1.9)
        .to(".site-header", {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
        }, 3.7)
        .to(".home-scroll-cue", {
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
        }, 3.85)
        .to(".home-scroll-cue", {
          y: 8,
          duration: 0.8,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
        }, 4.7);
    }

    const panels = gsap.utils.toArray<HTMLElement>(".home-panel");
    const triggers = panels.map((panel) =>
      ScrollTrigger.create({
        trigger: panel,
        pin: true,
        pinSpacing: false,
        start: () =>
          panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
        invalidateOnRefresh: true,
        fastScrollEnd: true,
        preventOverlaps: true,
      }),
    );
    const refresh = () => ScrollTrigger.refresh();

    ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      intro.kill();
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
