import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { projects } from "../data/projects";

const BG = "#fbfbf8";
const NAV = "#1A1940";
const VIOLET = "#7257E8";
const TEXT = "#7F819D";
const SOFT = "#AAA4DE";

const FEATURED_ORDER = ["copec", "nix", "bepn", "dashboard", "joel-sartore"];

const THUMBNAIL_STYLE: Record<
  string,
  { fit?: "cover" | "contain"; position?: string; padding?: string; scale?: number }
> = {
  copec: { fit: "cover", position: "center" },
  nix: { fit: "cover", position: "center 48%" },
  bepn: { fit: "contain", position: "center", padding: "18px", scale: 0.96 },
  dashboard: { fit: "cover", position: "center" },
  "joel-sartore": { fit: "cover", position: "center 44%" },
};

export default function Home() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSlug, setActiveSlug] = useState("copec");

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const featured = FEATURED_ORDER.map((slug) =>
    projects.find((project) => project.slug === slug),
  ).filter((project): project is (typeof projects)[number] => Boolean(project));

  useEffect(() => {
    if (featured.length && !featured.some((project) => project.slug === activeSlug)) {
      setActiveSlug(featured[0].slug);
    }
  }, [activeSlug, featured]);

  const handleHeroPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (isMobile || !heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    heroRef.current.style.setProperty("--mouse-x", `${x}%`);
    heroRef.current.style.setProperty("--mouse-y", `${y}%`);
  };

  const resetHeroGlow = () => {
    if (!heroRef.current) return;
    heroRef.current.style.setProperty("--mouse-x", "64%");
    heroRef.current.style.setProperty("--mouse-y", "38%");
  };

  return (
    <div style={{ minHeight: "100vh", background: BG, color: NAV, overflowX: "hidden" }}>
      {/* HERO */}
      <section
        ref={heroRef}
        onPointerMove={handleHeroPointerMove}
        onPointerLeave={resetHeroGlow}
        className="page-container"
        style={
          {
            position: "relative",
            isolation: "isolate",
            maxWidth: "1180px",
            margin: "0 auto",
            paddingTop: isMobile ? "86px" : "124px",
            paddingBottom: isMobile ? "44px" : "82px",
            "--mouse-x": "64%",
            "--mouse-y": "38%",
          } as React.CSSProperties
        }
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            zIndex: -2,
            inset: isMobile ? "-70px -50px" : "-190px -240px",
            pointerEvents: "none",
            filter: "blur(94px)",
            opacity: isMobile ? 0.32 : 0.6,
            background: isMobile
              ? `radial-gradient(circle at 68% 34%, rgba(114,87,232,.07), transparent 46%), radial-gradient(circle at 34% 62%, rgba(255,150,210,.025), transparent 42%)`
              : `radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(114,87,232,.10) 0%, rgba(114,87,232,.04) 23%, transparent 57%), radial-gradient(circle at calc(var(--mouse-x) - 18%) calc(var(--mouse-y) + 11%), rgba(255,150,210,.026), transparent 46%), radial-gradient(circle at calc(var(--mouse-x) + 14%) calc(var(--mouse-y) - 9%), rgba(110,218,235,.022), transparent 44%)`,
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "18px",
            marginBottom: isMobile ? "34px" : "56px",
          }}
        >
          <p className="mono-label" style={{ margin: 0, whiteSpace: "nowrap" }}>
            Portfolio · 2026
          </p>
          <div className="mono-label" style={{ display: "flex", alignItems: "center", gap: "9px", color: "#8984B8" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#55C5A2", boxShadow: "0 0 0 4px rgba(85,197,162,.11)" }} />
            Open for projects
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "minmax(0,1.22fr) minmax(300px,.78fr)",
            gap: isMobile ? "24px" : "58px",
            alignItems: "end",
          }}
        >
          <div>
            <p className="editorial-role-line" style={{ margin: "0 0 20px", maxWidth: "680px" }}>
              <b>PRODUCT DESIGNER</b>
              <br />
              INTERACTION · VISUAL DESIGN · CREATIVE TECHNOLOGY
            </p>
            <h1
              className="editorial-name zen-settle"
              style={{ margin: 0, fontSize: isMobile ? "clamp(58px,17vw,92px)" : "clamp(100px,9.2vw,162px)", lineHeight: 0.8, animationDelay: "0.45s" }}
            >
              SOFIA
            </h1>
            <h1
              className="editorial-name zen-settle"
              style={{ margin: isMobile ? "11px 0 0" : "16px 0 0", fontSize: isMobile ? "clamp(31px,9vw,47px)" : "clamp(54px,5.1vw,88px)", lineHeight: 0.93, animationDelay: "0.68s" }}
            >
              BELLINGHAUSEN
            </h1>
          </div>

          <div>
            <p style={{ maxWidth: "430px", margin: 0, fontFamily: "'Inter', sans-serif", fontSize: isMobile ? "18px" : "clamp(19px,1.45vw,23px)", lineHeight: 1.52, letterSpacing: "-0.015em", color: TEXT }}>
              Designing digital experiences where product thinking, interaction and visual culture meet.
            </p>
            <p className="mono-label" style={{ margin: isMobile ? "22px 0 0" : "28px 0 0", color: "#A5A2D9" }}>
              Barcelona ↗ Santiago ↗ Stockholm
            </p>
          </div>
        </div>
      </section>

      {/* SELECTED WORK / EXPANDABLE CHAPTERS */}
      <section
        className="page-container"
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          paddingTop: isMobile ? "18px" : "34px",
          paddingBottom: isMobile ? "140px" : "170px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            paddingBottom: isMobile ? "15px" : "20px",
            borderBottom: "1px solid rgba(114,87,232,.14)",
            marginBottom: isMobile ? "14px" : "18px",
          }}
        >
          <p className="mono-label" style={{ margin: 0 }}>Selected work</p>
          <button
            type="button"
            onClick={() => navigate("/work")}
            className="mono-label"
            style={{ padding: 0, border: 0, background: "transparent", cursor: "pointer", color: VIOLET }}
          >
            View all projects →
          </button>
        </div>

        <div style={{ display: "grid", gap: isMobile ? "7px" : "9px" }}>
          {featured.map((project) => (
            <ProjectChapter
              key={project.slug}
              project={project}
              isMobile={isMobile}
              isActive={project.slug === activeSlug}
              onActivate={() => setActiveSlug(project.slug)}
              onOpen={() => navigate(`/work/${project.slug}`)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function ProjectChapter({
  project,
  isMobile,
  isActive,
  onActivate,
  onOpen,
}: {
  project: (typeof projects)[number];
  isMobile: boolean;
  isActive: boolean;
  onActivate: () => void;
  onOpen: () => void;
}) {
  const metaLines = project.meta ?? [project.industry.toUpperCase()];
  const [hovered, setHovered] = useState(false);
  const thumb = THUMBNAIL_STYLE[project.slug] ?? {};

  const image = (
    <img
      src={project.img}
      alt={project.title}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        objectFit: thumb.fit ?? "cover",
        objectPosition: thumb.position ?? project.imgPosition ?? "center",
        padding: project.slug === "bepn" ? (isMobile ? "8px" : "12px") : thumb.padding ?? 0,
        transform: `scale(${(thumb.scale ?? 1) * (!isMobile && hovered ? 1.008 : 1)})`,
        imageRendering: "auto",
        backfaceVisibility: "hidden",
        transition: "transform .55s cubic-bezier(.2,.75,.25,1)",
      }}
    />
  );

  /* Mobile gets a genuinely responsive composition instead of squeezing
     the desktop chapter into a narrow viewport. */
  if (isMobile) {
    if (isActive) {
      return (
        <article
          style={{
            overflow: "hidden",
            border: "1px solid #E4E0F4",
            borderRadius: "12px",
            background: BG,
          }}
        >
          <button
            type="button"
            aria-label={`Open ${project.title} project`}
            onClick={onOpen}
            style={{
              display: "block",
              width: "100%",
              height: "248px",
              padding: 0,
              border: 0,
              overflow: "hidden",
              background: project.bg,
              cursor: "pointer",
            }}
          >
            {image}
          </button>

          <div style={{ padding: "17px 17px 18px" }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", letterSpacing: ".07em", color: SOFT }}>
              {project.year}
            </span>
            <h2 style={{ margin: "7px 0 0", fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "27px", fontWeight: 800, lineHeight: .96, letterSpacing: "-.04em", color: NAV }}>
              {project.title}
            </h2>
            <div className="editorial-meta-block" style={{ marginTop: "9px", maxWidth: "390px" }}>
              {metaLines.map((line) => <div key={line}>{line}</div>)}
              {project.impact && <strong>{project.impact}</strong>}
            </div>
            <button
              type="button"
              onClick={onOpen}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "16px",
                padding: 0,
                border: 0,
                background: "transparent",
                cursor: "pointer",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "9px",
                fontWeight: 500,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: VIOLET,
              }}
            >
              View case study →
            </button>
          </div>
        </article>
      );
    }

    return (
      <article
        onClick={onActivate}
        style={{
          height: "136px",
          overflow: "hidden",
          border: "1px solid #E4E0F4",
          borderRadius: "11px",
          background: BG,
          cursor: "pointer",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "42% 58%", height: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", minWidth: 0, padding: "0 14px" }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "8px", letterSpacing: ".06em", color: SOFT }}>
              {project.year}
            </span>
            <h2 style={{ margin: "6px 0 0", fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "18px", fontWeight: 800, lineHeight: .98, letterSpacing: "-.035em", color: NAV }}>
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            aria-label={`Open ${project.title} project`}
            onClick={(event) => { event.stopPropagation(); onOpen(); }}
            style={{ width: "100%", height: "100%", minWidth: 0, padding: 0, border: 0, overflow: "hidden", background: project.bg, cursor: "pointer" }}
          >
            {image}
          </button>
        </div>
      </article>
    );
  }

  const openCaseStudy = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onOpen();
  };

  return (
    <article
      onClick={() => !isActive && onActivate()}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        height: isActive ? "470px" : hovered ? "230px" : "172px",
        overflow: "hidden",
        border: "1px solid #E4E0F4",
        borderRadius: "12px",
        background: project.bg,
        cursor: isActive ? "default" : "pointer",
        transition: "height .36s cubic-bezier(.22,.78,.24,1)",
      }}
    >
      <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: isActive ? "minmax(260px,.68fr) minmax(0,1.32fr)" : "minmax(245px,.62fr) minmax(0,1.38fr)" }}>
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: isActive ? "space-between" : "center",
            minWidth: 0,
            padding: isActive ? "32px 30px 28px" : "0 28px",
            background: BG,
          }}
        >
          <div>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", letterSpacing: ".07em", color: SOFT }}>
              {project.year}
            </span>
            <h2
              style={{
                margin: isActive ? "9px 0 0" : "6px 0 0",
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: isActive ? "clamp(35px,3.2vw,51px)" : hovered ? "29px" : "25px",
                fontWeight: 800,
                lineHeight: .96,
                letterSpacing: "-.04em",
                color: NAV,
                transition: "font-size .34s cubic-bezier(.22,.78,.24,1)",
              }}
            >
              {project.title}
            </h2>
            <div
              className="editorial-meta-block"
              style={{
                marginTop: isActive ? "12px" : "7px",
                maxWidth: "390px",
                opacity: isActive ? 1 : hovered ? .95 : .68,
                transition: "opacity .25s ease",
              }}
            >
              {metaLines.map((line) => <div key={line}>{line}</div>)}
              {project.impact && <strong>{project.impact}</strong>}
            </div>
          </div>

          {isActive && (
            <button
              type="button"
              onClick={openCaseStudy}
              style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "9px", padding: 0, border: 0, background: "transparent", cursor: "pointer", fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", fontWeight: 500, letterSpacing: ".1em", textTransform: "uppercase", color: hovered ? VIOLET : "#938DCA", transition: "color .2s ease" }}
            >
              View case study
              <span style={{ transform: hovered ? "translateX(4px)" : "translateX(0)", transition: "transform .2s ease" }}>→</span>
            </button>
          )}
        </div>

        <button
          type="button"
          aria-label={`Open ${project.title} project`}
          onClick={(event) => { event.stopPropagation(); onOpen(); }}
          style={{ position: "relative", zIndex: 1, minWidth: 0, overflow: "hidden", padding: 0, border: 0, background: project.bg, cursor: "pointer" }}
        >
          {image}
        </button>
      </div>
    </article>
  );
}
