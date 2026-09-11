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
  copec: { fit: "cover", position: "center 48%", scale: 1.015 },
  nix: { fit: "cover", position: "center 48%" },
  bepn: { fit: "cover", position: "center 36%" },
  dashboard: { fit: "cover", position: "center" },
  "joel-sartore": { fit: "cover", position: "center 44%" },
};

export default function Home() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSlug, setActiveSlug] = useState("copec");
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
              inset: 0,
              overflow: "hidden",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "54%",
                aspectRatio: "1",
                left: "calc(var(--mouse-x) - 27%)",
                top: "calc(var(--mouse-y) - 27%)",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(166,91,255,.18) 0%, rgba(255,88,190,.10) 35%, rgba(84,219,236,.055) 58%, transparent 72%)",
                filter: "blur(40px)",
                opacity: "var(--glow-opacity, 0)",
                transform: "translate3d(0,0,0)",
                transition: "left .22s cubic-bezier(.2,.75,.25,1), top .22s cubic-bezier(.2,.75,.25,1), opacity .35s ease",
                willChange: "left, top, opacity",
              }}
            />
          </div>
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
              isActive={isMobile ? true : project.slug === activeSlug}
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
        padding: thumb.padding ?? 0,
        transform: `translateZ(0) scale(${(thumb.scale ?? 1) * (!isMobile && hovered ? 1.025 : 1)})`,
        transformOrigin: "center",
        imageRendering: "auto",
        backfaceVisibility: "hidden",
        willChange: "transform",
        transition: "transform .32s cubic-bezier(.2,.7,.2,1)",
      }}
    />
  );

  /* Mobile uses one persistent layout so the active/inactive state can
     animate instead of swapping two different trees. */
  if (isMobile) {
    const mobileHeight = isActive ? 450 : 136;

    return (
      <article
        onClick={() => !isActive && onActivate()}
        onPointerDown={() => setHovered(true)}
        onPointerUp={() => setHovered(false)}
        onPointerCancel={() => setHovered(false)}
        onPointerLeave={() => setHovered(false)}
        style={{
          position: "relative",
          height: `${mobileHeight}px`,
          overflow: "hidden",
          border: `1px solid ${isActive ? "#D9D3F2" : "#E4E0F4"}`,
          borderRadius: "12px",
          background: BG,
          cursor: "pointer",
          transform: hovered ? "scale(.992)" : "scale(1)",
          boxShadow: isActive ? "0 10px 28px rgba(26,25,64,.055)" : "0 0 0 rgba(26,25,64,0)",
          transition: "height .42s cubic-bezier(.2,.78,.22,1), transform .16s ease, border-color .28s ease, box-shadow .32s ease",
          willChange: "height, transform",
        }}
      >
        <div
          style={{
            position: "absolute",
            zIndex: 2,
            left: 0,
            top: isActive ? "288px" : 0,
            width: isActive ? "100%" : "42%",
            height: isActive ? "162px" : "136px",
            display: "flex",
            flexDirection: "column",
            justifyContent: isActive ? "space-between" : "center",
            padding: isActive ? "17px 17px 18px" : "0 14px",
            background: BG,
            transition: "top .42s cubic-bezier(.2,.78,.22,1), width .42s cubic-bezier(.2,.78,.22,1), height .42s cubic-bezier(.2,.78,.22,1), padding .34s ease",
          }}
        >
          <div>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: isActive ? "9px" : "8px", letterSpacing: isActive ? ".07em" : ".06em", color: SOFT, transition: "font-size .28s ease" }}>
              {project.year}
            </span>
            <h2
              style={{
                margin: isActive ? "7px 0 0" : "6px 0 0",
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: isActive ? "27px" : "18px",
                fontWeight: 800,
                lineHeight: isActive ? .96 : .98,
                letterSpacing: isActive ? "-.04em" : "-.035em",
                color: NAV,
                transform: isActive ? "translate3d(0,0,0)" : "translate3d(0,1px,0)",
                transition: "font-size .34s cubic-bezier(.2,.78,.22,1), margin .3s ease, transform .3s ease",
              }}
            >
              {project.title}
            </h2>
            <div
              className="editorial-meta-block"
              style={{
                marginTop: "9px",
                maxWidth: "390px",
                opacity: isActive ? 1 : 0,
                transform: isActive ? "translate3d(0,0,0)" : "translate3d(0,8px,0)",
                pointerEvents: isActive ? "auto" : "none",
                transition: "opacity .24s ease .12s, transform .34s cubic-bezier(.2,.78,.22,1) .08s",
              }}
            >
              {metaLines.map((line) => <div key={line}>{line}</div>)}
            </div>
          </div>

          <button
            type="button"
            onClick={(event) => { event.stopPropagation(); onOpen(); }}
            tabIndex={isActive ? 0 : -1}
            aria-hidden={!isActive}
            style={{
              alignSelf: "flex-start",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: 0,
              border: 0,
              background: "transparent",
              cursor: isActive ? "pointer" : "default",
              pointerEvents: isActive ? "auto" : "none",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "9px",
              fontWeight: 500,
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: VIOLET,
              opacity: isActive ? 1 : 0,
              transform: isActive ? "translate3d(0,0,0)" : "translate3d(0,8px,0)",
              transition: "opacity .22s ease .15s, transform .32s cubic-bezier(.2,.78,.22,1) .1s",
            }}
          >
            View case study
            <span style={{ transition: "transform .2s ease" }}>→</span>
          </button>
        </div>

        <button
          type="button"
          aria-label={`Open ${project.title} project`}
          onClick={(event) => {
            event.stopPropagation();
            if (isActive) onOpen();
            else onActivate();
          }}
          style={{
            position: "absolute",
            zIndex: 1,
            top: 0,
            right: 0,
            width: isActive ? "100%" : "58%",
            height: isActive ? "288px" : "136px",
            padding: 0,
            border: 0,
            overflow: "hidden",
            background: project.bg,
            cursor: "pointer",
            transition: "width .42s cubic-bezier(.2,.78,.22,1), height .42s cubic-bezier(.2,.78,.22,1)",
          }}
        >
          <img
            src={project.img}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              objectFit: thumb.fit ?? "cover",
              objectPosition: thumb.position ?? project.imgPosition ?? "center",
              padding: thumb.padding ?? 0,
              transform: `translateZ(0) scale(${(thumb.scale ?? 1) * (hovered ? .995 : isActive ? 1.012 : 1)})`,
              transformOrigin: "center",
              backfaceVisibility: "hidden",
              willChange: "transform",
              transition: "transform .36s cubic-bezier(.2,.75,.25,1), padding .3s ease",
            }}
          />
        </button>
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
        height: "260px",
        overflow: "hidden",
        border: `1px solid ${hovered ? "#D5CEF1" : "#E4E0F4"}`,
        borderRadius: "12px",
        background: project.bg,
        cursor: isActive ? "default" : "pointer",
        transform: hovered ? "translate3d(0,-3px,0)" : isActive ? "translate3d(0,-1px,0)" : "translate3d(0,0,0)",
        boxShadow: hovered ? "0 14px 34px rgba(26,25,64,.08)" : "0 0 0 rgba(26,25,64,0)",
        willChange: "transform",
        transition: "transform .28s cubic-bezier(.2,.7,.2,1), box-shadow .28s ease, border-color .24s ease",
      }}
    >
      <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "minmax(260px,.68fr) minmax(0,1.32fr)" }}>
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: isActive ? "space-between" : "center",
            minWidth: 0,
            padding: isActive ? "24px 30px 22px" : "0 28px",
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
                fontSize: "27px",
                fontWeight: 800,
                lineHeight: .96,
                letterSpacing: "-.04em",
                color: NAV,
                transform: `translate3d(0,${hovered ? "-1px" : "0"},0) scale(${isActive ? 1.055 : 1})`,
                transformOrigin: "left center",
                transition: "transform .3s cubic-bezier(.2,.75,.25,1), color .22s ease",
              }}
            >
              {project.title}
            </h2>
            <div
              className="editorial-meta-block"
              style={{
                marginTop: isActive ? "12px" : "7px",
                maxWidth: "390px",
                opacity: isActive ? 1 : hovered ? .92 : .68,
                transform: isActive ? "translate3d(0,0,0)" : hovered ? "translate3d(0,-1px,0)" : "translate3d(0,2px,0)",
                transition: "opacity .25s ease, transform .3s cubic-bezier(.2,.75,.25,1)",
              }}
            >
              {metaLines.map((line) => <div key={line}>{line}</div>)}
            </div>
          </div>

          <button
            type="button"
            onClick={openCaseStudy}
            tabIndex={isActive ? 0 : -1}
            aria-hidden={!isActive}
            style={{
              alignSelf: "flex-start",
              display: "inline-flex",
              alignItems: "center",
              gap: "9px",
              padding: 0,
              border: 0,
              background: "transparent",
              cursor: isActive ? "pointer" : "default",
              pointerEvents: isActive ? "auto" : "none",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "9px",
              fontWeight: 500,
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: hovered ? VIOLET : "#938DCA",
              opacity: isActive ? 1 : 0,
              transform: isActive ? "translate3d(0,0,0)" : "translate3d(0,7px,0)",
              transition: "opacity .22s ease, transform .3s cubic-bezier(.2,.75,.25,1), color .2s ease",
            }}
          >
            View case study
            <span style={{ transform: hovered ? "translateX(4px)" : "translateX(0)", transition: "transform .2s ease" }}>→</span>
          </button>
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
