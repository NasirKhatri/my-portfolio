"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { CheckIcon, CopyIcon, DownloadIcon, MailIcon } from "./Icons";

/** Fades sections in as they scroll into view. Elements stay visible if JS never runs. */
export function RevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}

/**
 * Compact identity bar that slides in once the hero headline scrolls away,
 * so visitors always know whose page they're on. Doubles as a reading-progress bar.
 */
export function StickyHeader(props: { name: string; role: string; email: string; resume: string; photo: StaticImageData }) {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const heading = document.querySelector<HTMLElement>(".hero h1");
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
      setVisible(heading ? heading.getBoundingClientRect().bottom < 0 : window.scrollY > 400);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className={`site-header${visible ? " show" : ""}`}>
      <div className="container header-inner">
        <a href="#top" className="identity" aria-label={`${props.name}, back to top`}>
          <span className="avatar">
            <Image src={props.photo} alt="" width={120} height={120} />
          </span>
          <span className="identity-text">
            <strong>{props.name}</strong>
            <span>{props.role}</span>
          </span>
        </a>
        <div className="header-actions">
          <a href={props.resume} download className="btn btn-ghost btn-sm" aria-label="Download résumé">
            <DownloadIcon width={16} height={16} />
            <span className="hide-sm">Résumé</span>
          </a>
          <a href={`mailto:${props.email}`} className="btn btn-primary btn-sm" aria-label="Get in touch">
            <MailIcon width={16} height={16} />
            <span className="hide-sm">Get in touch</span>
          </a>
        </div>
      </div>
      <div className="header-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden />
    </header>
  );
}

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button type="button" className="icon-btn" onClick={copy} aria-label={copied ? "Email copied" : "Copy email address"}>
      {copied ? <CheckIcon /> : <CopyIcon />}
      <span className="sr-only" aria-live="polite">{copied ? "Copied" : ""}</span>
    </button>
  );
}
