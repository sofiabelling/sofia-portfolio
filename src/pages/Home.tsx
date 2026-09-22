import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { projects } from "../data/projects";

const BG = "var(--bg)";
const NAV = "var(--text)";
const VIOLET = "var(--accent)";
const TEXT = "var(--text-muted)";
const SOFT = "var(--text-muted)";

const FEATURED_ORDER = ["copec", "nix", "bepn", "dashboard", "joel-sartore"];

const THUMBNAIL_STYLE: Record<
  string,
  { fit?: "cover" | "contain"; position?: string; padding?: string; scale?: number }
> = {
  copec: { fit: "cover", position: "center 48%", scale: 1.015 },
  nix: { fit: "cover", position: "center 48%" },
  bepn: { fit: "cover", position: "center 36%" },
  dashboard: { fit: "cover", position: "center" },
  "joel-sartore": { fit: "cover", position: "6% 42%" },
};

export default function Home() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLElement | null>(null);
  const workTrackRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeWorkIndex, setActiveWorkIndex] = useState(0);
  const [tap, setTap] = useState<{ x: number; y: number; id: number } | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const featured = FEATURED_ORDER.map((slug) =>
    projects.find((project) => project.slug === slug),
  ).filter((project): project is (typeof projects)[number] => Boolean(project));

  const handleWorkScroll = () => {
    const el = workTrackRef.current;
    if (!el || !featured.length) return;
    const slideWidth = el.scrollWidth / featured.length;
    setActiveWorkIndex(Math.round(el.scrollLeft / slideWidth));
  };

  const scrollToWorkSlide = (index: number) => {
    const el = workTrackRef.current;
    if (!el || !featured.length) return;
    const slideWidth = el.scrollWidth / featured.length;
    el.scrollTo({ left: slideWidth * index, behavior: "smooth" });
  };

  const handleHeroPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (isMobile || !heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    heroRef.current.style.setProperty("--mouse-x", `${x}%`);
    heroRef.current.style.setProperty("--mouse-y", `${y}%`);
    heroRef.current.style.setProperty("--glow-opacity", "1");
  };

  const resetHeroGlow = () => {
    if (!heroRef.current) return;
    // Fade out in place rather than snapping the position back — a
    // reposition here (e.g. triggered by scroll re-running hit-testing
    // under a stationary cursor) reads as the glow "jumping" to a corner.
    heroRef.current.style.setProperty("--glow-opacity", "0");
  };

  const handleHeroTap = (event: React.PointerEvent<HTMLElement>) => {
    if (!isMobile || !heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setTap({ x, y, id: Date.now() });
  };

  return (
    <div style={{ minHeight: "100vh", background: BG, color: NAV, overflowX: "hidden" }}>
      {/* HERO */}
      <section
        ref={heroRef}
        onPointerMove={handleHeroPointerMove}
        onPointerLeave={resetHeroGlow}
        onPointerDown={handleHeroTap}
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
            "--glow-opacity": 0,
          } as React.CSSProperties
        }
      >
        <style>{`
          @keyframes heroColorDrift {
            0% { transform: translate3d(-3%, -1.5%, 0) scale(1); }
            33% { transform: translate3d(4%, 2.5%, 0) scale(1.04); }
            66% { transform: translate3d(-1%, 4%, 0) scale(.99); }
            100% { transform: translate3d(-3%, -1.5%, 0) scale(1); }
          }
          @keyframes heroHueShift {
            0% { filter: blur(72px) hue-rotate(0deg); }
            50% { filter: blur(78px) hue-rotate(18deg); }
            100% { filter: blur(72px) hue-rotate(0deg); }
          }
          @keyframes heroMobilePulse {
            0%, 100% { transform: translate3d(-8%, -2%, 0) scale(1); opacity: .72; }
            50% { transform: translate3d(8%, 5%, 0) scale(1.12); opacity: .95; }
          }
          @keyframes heroTapFade {
            0% { opacity: 0; transform: translate(-50%, -50%) scale(.55); }
            28% { opacity: .9; }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(1.25); }
          }
          @media (prefers-reduced-motion: reduce) {
            [data-hero-tap] { display: none !important; }
          }
        `}</style>

        <div
          aria-hidden
          style={{
            position: "absolute",
            zIndex: -3,
            inset: isMobile ? "-56px -48px" : "-70px -90px",
            pointerEvents: "none",
            overflow: "hidden",
            maskImage: isMobile
              ? "radial-gradient(120% 96% at 50% 32%, #000 42%, transparent 84%)"
              : "radial-gradient(100% 92% at 50% 30%, #000 30%, transparent 80%)",
            WebkitMaskImage: isMobile
              ? "radial-gradient(120% 96% at 50% 32%, #000 42%, transparent 84%)"
              : "radial-gradient(100% 92% at 50% 30%, #000 30%, transparent 80%)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: isMobile ? "4% -6% -8% -8%" : "0",
              borderRadius: "50%",
              background: isMobile
                ? "radial-gradient(circle at 24% 38%, rgba(255,86,198,.24), transparent 34%), radial-gradient(circle at 70% 30%, rgba(114,87,232,.24), transparent 36%), radial-gradient(circle at 58% 72%, rgba(83,220,237,.18), transparent 34%)"
                : "radial-gradient(circle at 24% 36%, rgba(255,86,198,.20), transparent 24%), radial-gradient(circle at 72% 30%, rgba(114,87,232,.22), transparent 27%), radial-gradient(circle at 60% 72%, rgba(83,220,237,.16), transparent 26%)",
              opacity: isMobile ? .72 : .76,
              animation: isMobile
                ? "heroMobilePulse 6.4s ease-in-out infinite, heroHueShift 8.8s ease-in-out infinite"
                : "heroColorDrift 8.5s ease-in-out infinite, heroHueShift 10s ease-in-out infinite",
              willChange: "transform, filter, opacity",
            }}
          />

        </div>

        {!isMobile && (
          <div
            aria-hidden
            style={{
              position: "absolute",
              zIndex: -3,
              pointerEvents: "none",
              width: "27%",
              aspectRatio: "1",
              left: "calc(var(--mouse-x) - 13.5%)",
              top: "calc(var(--mouse-y) - 13.5%)",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(166,91,255,.18) 0%, rgba(255,88,190,.10) 35%, rgba(84,219,236,.055) 58%, transparent 72%)",
              filter: "blur(40px)",
              opacity: "var(--glow-opacity, 0)",
              transform: "translate3d(0,0,0)",
              transition: "left .22s cubic-bezier(.2,.75,.25,1), top .22s cubic-bezier(.2,.75,.25,1), opacity .35s ease",
              willChange: "left, top, opacity",
            }}
          />
        )}

        {isMobile && tap && (
          <div
            key={tap.id}
            data-hero-tap
            aria-hidden
            onAnimationEnd={() => setTap(null)}
            style={{
              position: "absolute",
              zIndex: -2,
              left: `${tap.x}%`,
              top: `${tap.y}%`,
              width: "40%",
              aspectRatio: "1",
              transform: "translate(-50%, -50%)",
              borderRadius: "50%",
              pointerEvents: "none",
              background:
                "radial-gradient(circle, rgba(166,91,255,.15), rgba(255,88,190,.08) 44%, transparent 70%)",
              filter: "blur(22px)",
              animation: "heroTapFade .7s ease-out forwards",
            }}
          />
        )}

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

      {/* SELECTED WORK / FULL-WIDTH CAROUSEL */}
      <section style={{ paddingTop: isMobile ? "18px" : "34px", paddingBottom: isMobile ? "110px" : "140px" }}>
        <div
          className="page-container"
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            paddingBottom: isMobile ? "15px" : "20px",
            borderBottom: "1px solid rgba(114,87,232,.14)",
            marginBottom: isMobile ? "20px" : "28px",
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

        <div className="home-carousel">
          <div className="home-carousel-track" ref={workTrackRef} onScroll={handleWorkScroll}>
            {featured.map((project) => {
              const thumb = THUMBNAIL_STYLE[project.slug] ?? {};
              const metaLines = project.meta ?? [project.industry.toUpperCase()];
              return (
                <button
                  key={project.slug}
                  type="button"
                  className="home-carousel-slide"
                  style={{ background: project.bg }}
                  onClick={() => navigate(`/work/${project.slug}`)}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="home-carousel-image"
                    style={{
                      objectFit: thumb.fit ?? "cover",
                      objectPosition: thumb.position ?? project.imgPosition ?? "center",
                    }}
                  />
                  <div className="home-carousel-scrim" aria-hidden="true" />
                  <div className="home-carousel-info">
                    <span className="home-carousel-year">{project.year}</span>
                    <h2>{project.title}</h2>
                    <div className="home-carousel-meta">
                      {metaLines.map((line) => <div key={line}>{line}</div>)}
                    </div>
                    <span className="home-carousel-cta">View case study →</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="home-carousel-dots">
            {featured.map((project, index) => (
              <button
                key={project.slug}
                type="button"
                className={index === activeWorkIndex ? "active" : ""}
                aria-label={`Show ${project.title}`}
                onClick={() => scrollToWorkSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
